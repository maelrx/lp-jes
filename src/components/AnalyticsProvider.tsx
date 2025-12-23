"use client";

import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import {
    initSession,
    trackPageView,
    updateScrollDepth,
    updateTimeOnPage,
    trackEvent,
    trackCtaClick,
    trackScrollMilestone,
} from '@/lib/analytics';

interface AnalyticsContextType {
    trackEvent: typeof trackEvent;
    trackCtaClick: typeof trackCtaClick;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics must be used within AnalyticsProvider');
    }
    return context;
};

interface AnalyticsProviderProps {
    children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
    const scrollMilestones = useRef<Set<number>>(new Set());
    const initialized = useRef(false);

    // Calculate current scroll percentage
    const getScrollPercentage = useCallback((): number => {
        if (typeof window === 'undefined') return 0;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (docHeight <= 0) return 100;
        return Math.min(100, Math.round((scrollTop / docHeight) * 100));
    }, []);

    // Handle scroll events
    const handleScroll = useCallback(() => {
        const currentDepth = getScrollPercentage();

        // Update scroll depth in database
        updateScrollDepth(currentDepth);

        // Track scroll milestones (25%, 50%, 75%, 100%)
        const milestones = [25, 50, 75, 100];
        for (const milestone of milestones) {
            if (currentDepth >= milestone && !scrollMilestones.current.has(milestone)) {
                scrollMilestones.current.add(milestone);
                trackScrollMilestone(milestone);
            }
        }
    }, [getScrollPercentage]);

    // Initialize analytics on mount
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // Initialize session and track page view
        const init = async () => {
            await initSession();
            await trackPageView();
        };
        init();

        // Set up scroll tracking (debounced)
        let scrollTimeout: NodeJS.Timeout;
        const debouncedScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScroll, 100);
        };
        window.addEventListener('scroll', debouncedScroll, { passive: true });

        // Handle page unload - update time on page
        const handleBeforeUnload = () => {
            updateTimeOnPage();
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Handle visibility change (for mobile tab switching)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                updateTimeOnPage();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', debouncedScroll);
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            clearTimeout(scrollTimeout);
        };
    }, [handleScroll]);

    const contextValue: AnalyticsContextType = {
        trackEvent,
        trackCtaClick,
    };

    return (
        <AnalyticsContext.Provider value={contextValue}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export default AnalyticsProvider;
