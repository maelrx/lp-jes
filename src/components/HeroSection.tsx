"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useAnalytics } from "./AnalyticsProvider";
import { getConversionUrl } from "../lib/analytics";

export function HeroSection() {
    const { scrollYProgress } = useScroll();
    const { trackCtaClick } = useAnalytics();

    // Parallax: imagem move mais devagar (efeito de profundidade)
    const imageY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
    const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);

    // Smooth springs
    const smoothImageY = useSpring(imageY, { stiffness: 50, damping: 20 });
    const smoothScale = useSpring(imageScale, { stiffness: 50, damping: 20 });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background com mesh gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 70% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
                        radial-gradient(ellipse 60% 50% at 20% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                        radial-gradient(ellipse 100% 100% at 50% 0%, rgba(30, 27, 23, 0.8) 0%, transparent 60%),
                        linear-gradient(180deg, #0A0908 0%, #12100E 50%, #0A0908 100%)
                    `
                }}
            />

            {/* Noise texture */}
            <div className="absolute inset-0 bg-noise opacity-40 z-0" />

            {/* Floating orbs */}
            <motion.div
                className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                    filter: "blur(80px)"
                }}
                animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-[30%] left-[10%] w-[200px] h-[200px] rounded-full pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
                    filter: "blur(60px)"
                }}
                animate={{
                    y: [20, -20, 20],
                    scale: [1, 1.15, 1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Main Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Container da Foto com Parallax */}
                    <motion.div
                        className="order-2 lg:order-1 relative flex justify-center"
                        style={{ y: smoothImageY, scale: smoothScale }}
                    >
                        <div className="relative w-full max-w-md">
                            {/* Glow atrás */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0"
                                style={{
                                    background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, transparent 60%)",
                                    filter: "blur(60px)"
                                }}
                            />

                            {/* ========================================
                                BADGE - Dentro do container da foto
                                Posição: topo centralizado
                               ======================================== */}
                            <motion.div
                                className="absolute -top-16 left-1/2 -translate-x-1/2 z-30"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase whitespace-nowrap backdrop-blur-sm">
                                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                                    Diagnóstico Operacional para Clínicas de Estética
                                </span>
                            </motion.div>

                            {/* Container da imagem */}
                            <motion.div
                                className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card gold-border"
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <Image
                                    src="/images/jessica.webp"
                                    alt="Jéssica Messias - Especialista em Gestão de Clínicas de Estética"
                                    fill
                                    priority
                                    className="object-cover object-top"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-80" />

                                {/* Badge de credencial - na parte inferior da foto */}
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="glass-card rounded-xl p-4 border border-[#D4AF37]/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                                            <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">7 Anos de Experiência</span>
                                        </div>
                                        <p className="text-[#F5F0E8] font-display text-sm font-medium">
                                            Gestão Prática em Clínicas de Estética
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Texto - sem parallax para ficar fixo */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {/* Título */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="font-display font-bold text-[#F5F0E8] leading-[1.1]"
                            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 4rem)" }}
                        >
                            Receba Agora
                            <br />
                            <span className="text-gradient-gold">Relatório Completo e Detalhado</span>
                        </motion.h1>

                        {/* Subtítulo */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-body text-[#A69F93] font-light max-w-lg leading-relaxed"
                            style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                        >
                            Análise completa do seu modelo de negócio identifica gargalos em processos,
                            equipe, conversão e margem — com priorização do que resolver primeiro e
                            roadmap de 90 dias.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <a
                                href={getConversionUrl("https://forms.jessicamessias.com.br")}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackCtaClick('hero_section', 'ACESSAR MEU DIAGNÓSTICO GRATUITO')}
                                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-display font-bold tracking-wider uppercase rounded-lg px-8 py-5 text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-[1.02]"
                            >
                                <span className="relative z-10">ACESSAR MEU DIAGNÓSTICO GRATUITO</span>
                                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />

                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </a>
                        </motion.div>

                        {/* Mini Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-6 pt-2"
                        >
                            {[
                                "15 min de preenchimento",
                                "Entrega em 3-5 dias",
                                "100% Gratuito"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-[#A69F93] text-sm">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Bullet Points Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="grid grid-cols-2 gap-3 pt-4"
                        >
                            {[
                                "Baseado em 7 Anos de Experiência Prática",
                                "Especialização em Clínicas de Estética",
                                "Diagnóstico Personalizado Completo",
                                "Acesso imediato via Formulário"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 rounded-xl glass-card transition-all duration-300 hover:border-[#D4AF37]/30"
                                >
                                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-[#F5F0E8]/80 text-xs font-light leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div >
        </section >
    );
}
