"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimateProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    threshold?: number;
}

export function ScrollAnimate({
    children,
    delay = 1,
    className = "",
    threshold = 0.15
}: ScrollAnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            data-delay={delay}
            className={`scroll-animate ${isVisible ? "is-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
