"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    fullHeight?: boolean;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.25,
    duration = 0.5,
    direction = "up",
    className = "",
    fullHeight = false,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
            x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <div ref={ref} style={{ position: "relative", width }} className={`${className} ${fullHeight ? "h-full" : ""}`}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                className={fullHeight ? "h-full" : ""}
            >
                {children}
            </motion.div>
        </div>
    );
};
