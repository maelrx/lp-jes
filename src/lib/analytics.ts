import { supabase, isSupabaseConfigured } from './supabase';

// Generate a unique ID
const generateId = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

// Get or create visitor ID (persisted in localStorage)
export const getVisitorId = (): string => {
    if (typeof window === 'undefined') return '';

    let visitorId = localStorage.getItem('lp_visitor_id');
    if (!visitorId) {
        visitorId = generateId();
        localStorage.setItem('lp_visitor_id', visitorId);
    }
    return visitorId;
};

// Get or create session ID (persisted in sessionStorage)
export const getSessionId = (): string => {
    if (typeof window === 'undefined') return '';

    let sessionId = sessionStorage.getItem('lp_session_id');
    if (!sessionId) {
        sessionId = generateId();
        sessionStorage.setItem('lp_session_id', sessionId);
    }
    return sessionId;
};

// Detect device type
const getDeviceType = (): string => {
    if (typeof window === 'undefined') return 'unknown';

    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua)) return 'mobile';
    return 'desktop';
};

// Parse UTM parameters from URL
export const getUtmParams = (): { utm_source?: string; utm_medium?: string; utm_campaign?: string } => {
    if (typeof window === 'undefined') return {};

    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined,
    };
};

/**
 * Generate conversion URL with tracking parameters
 */
export const getConversionUrl = (baseUrl: string): string => {
    if (typeof window === 'undefined') return baseUrl;

    const url = new URL(baseUrl);
    const visitorId = getVisitorId();
    const sessionId = getSessionId();
    const utmParams = getUtmParams();

    if (visitorId) url.searchParams.set('visitor_id', visitorId);
    if (sessionId) url.searchParams.set('session_id', sessionId);

    if (utmParams.utm_source) url.searchParams.set('utm_source', utmParams.utm_source);
    if (utmParams.utm_medium) url.searchParams.set('utm_medium', utmParams.utm_medium);
    if (utmParams.utm_campaign) url.searchParams.set('utm_campaign', utmParams.utm_campaign);

    return url.toString();
};

// Session tracking state
let sessionInitialized = false;
let currentScrollDepth = 0;
let pageViewId: string | null = null;
let pageViewStartTime: number = 0;

/**
 * Initialize or update session in Supabase
 */
export const initSession = async (): Promise<void> => {
    if (typeof window === 'undefined' || sessionInitialized || !isSupabaseConfigured()) return;

    const sessionId = getSessionId();
    const visitorId = getVisitorId();
    const utmParams = getUtmParams();

    try {
        // Try to insert new session (will fail silently if exists due to unique constraint)
        const { error } = await supabase.from('sessions').upsert({
            session_id: sessionId,
            visitor_id: visitorId,
            started_at: new Date().toISOString(),
            ended_at: new Date().toISOString(),
            user_agent: navigator.userAgent,
            referrer: document.referrer || null,
            utm_source: utmParams.utm_source || null,
            utm_medium: utmParams.utm_medium || null,
            utm_campaign: utmParams.utm_campaign || null,
            device_type: getDeviceType(),
        }, { onConflict: 'session_id' });

        if (error) {
            console.error('[Analytics] Session upsert error:', error);
        } else {
            console.log('[Analytics] Session initialized successfully');
            sessionInitialized = true;
        }
    } catch (error) {
        console.error('[Analytics] Session init error:', error);
    }
};

/**
 * Track a page view
 */
export const trackPageView = async (pagePath?: string): Promise<void> => {
    if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

    const sessionId = getSessionId();
    const path = pagePath || window.location.pathname;

    pageViewStartTime = Date.now();
    currentScrollDepth = 0;

    try {
        const { data, error } = await supabase
            .from('page_views')
            .insert({
                session_id: sessionId,
                page_path: path,
                timestamp: new Date().toISOString(),
                viewport_width: window.innerWidth,
                viewport_height: window.innerHeight,
                scroll_depth: 0,
                time_on_page: 0,
            })
            .select('id')
            .single();

        if (error) {
            console.error('[Analytics] Page view error:', error);
        } else if (data) {
            pageViewId = data.id;
            console.log('[Analytics] Page view tracked successfully, id:', pageViewId);
        }
    } catch (error) {
        console.error('[Analytics] Page view tracking error:', error);
    }
};

/**
 * Update scroll depth for current page view
 */
export const updateScrollDepth = async (depth: number): Promise<void> => {
    if (!pageViewId || depth <= currentScrollDepth || !isSupabaseConfigured()) return;

    currentScrollDepth = depth;

    try {
        await supabase
            .from('page_views')
            .update({ scroll_depth: depth })
            .eq('id', pageViewId);
    } catch (error) {
        console.error('[Analytics] Scroll depth update error:', error);
    }
};

/**
 * Update time on page before leaving
 */
export const updateTimeOnPage = async (): Promise<void> => {
    if (!pageViewId || !pageViewStartTime || !isSupabaseConfigured()) return;

    const timeOnPage = Math.round((Date.now() - pageViewStartTime) / 1000);

    try {
        await supabase
            .from('page_views')
            .update({
                time_on_page: timeOnPage,
                scroll_depth: currentScrollDepth
            })
            .eq('id', pageViewId);

        // Also update session end time
        const sessionId = getSessionId();
        await supabase
            .from('sessions')
            .update({ ended_at: new Date().toISOString() })
            .eq('session_id', sessionId);
    } catch (error) {
        console.error('[Analytics] Time on page update error:', error);
    }
};

/**
 * Track a custom event
 */
export const trackEvent = async (
    eventType: string,
    eventName: string,
    options?: {
        elementId?: string;
        elementText?: string;
        section?: string;
        metadata?: Record<string, unknown>;
    }
): Promise<void> => {
    if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

    const sessionId = getSessionId();

    try {
        await supabase.from('events').insert({
            session_id: sessionId,
            event_type: eventType,
            event_name: eventName,
            element_id: options?.elementId || null,
            element_text: options?.elementText || null,
            section: options?.section || null,
            timestamp: new Date().toISOString(),
            metadata: options?.metadata || null,
        });
    } catch (error) {
        console.error('[Analytics] Event tracking error:', error);
    }
};

/**
 * Track CTA button click - convenience method
 */
export const trackCtaClick = (section: string, buttonText: string): void => {
    trackEvent('cta_click', `${section}_cta_click`, {
        section,
        elementText: buttonText,
    });
};

/**
 * Track scroll milestone (25%, 50%, 75%, 100%)
 */
export const trackScrollMilestone = (milestone: number): void => {
    trackEvent('scroll_milestone', `scroll_${milestone}`, {
        metadata: { percentage: milestone },
    });
};
