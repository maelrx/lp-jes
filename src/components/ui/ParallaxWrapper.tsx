"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ParallaxProps {
    children: ReactNode;
    speed?: number; // -1 a 1, negativo = reverso
    className?: string;
    offset?: number; // pixels de offset inicial
}

// Parallax simples - elemento se move baseado no scroll
export function Parallax({ children, speed = 0.5, className = "", offset = 0 }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [offset - (100 * speed), offset + (100 * speed)]
    );

    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <motion.div ref={ref} style={{ y: smoothY }} className={className}>
            {children}
        </motion.div>
    );
}

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
}

// Seção com fade e parallax sutil
export function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <motion.section
            ref={ref}
            style={{ opacity: smoothOpacity, y: smoothY }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

interface ParallaxImageProps {
    children: ReactNode;
    className?: string;
}

// Para imagens - movimento mais lento que o scroll (efeito de profundidade)
export function ParallaxImage({ children, className = "" }: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Movimento mais lento = parece estar "atrás"
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
    const smoothScale = useSpring(scale, { stiffness: 50, damping: 20 });

    return (
        <motion.div
            ref={ref}
            style={{ y: smoothY, scale: smoothScale }}
            className={`overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
}

interface ParallaxTextProps {
    children: ReactNode;
    className?: string;
}

// Para textos - movimento mais rápido (primeiro plano)
export function ParallaxText({ children, className = "" }: ParallaxTextProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Movimento mais rápido = parece estar "na frente"
    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

    const smoothY = useSpring(y, { stiffness: 80, damping: 25 });

    return (
        <motion.div ref={ref} style={{ y: smoothY }} className={className}>
            {children}
        </motion.div>
    );
}

interface StaggerRevealProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

// Reveal com stagger para grupos de elementos
export function StaggerReveal({ children, className = "", staggerDelay = 0.1 }: StaggerRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

    const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            ref={ref}
            style={{ opacity: smoothOpacity, y: smoothY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    amplitude?: number; // intensidade do float
    duration?: number;  // duração do ciclo em segundos
}

// Elemento flutuante (para decorações)
export function FloatingElement({
    children,
    className = "",
    amplitude = 10,
    duration = 4
}: FloatingElementProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-amplitude, amplitude, -amplitude],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
}

// Hook para usar valores de parallax customizados
export function useParallax(inputRange: number[], outputRange: number[]) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const value = useTransform(scrollYProgress, inputRange, outputRange);
    const smoothValue = useSpring(value, { stiffness: 100, damping: 30 });

    return { ref, value: smoothValue, scrollYProgress };
}
