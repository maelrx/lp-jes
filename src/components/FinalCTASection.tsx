"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight, Clock } from "lucide-react";

const optionA = [
    "Tentar adivinhar processos assistindo vídeos soltos",
    "Continuar refém de funcionários que não entregam",
    "Manter a margem espremida e sem caixa"
];

const optionB = [
    "Diagnóstico exato de onde você está travada",
    "Plano de 90 dias validado em 400+ clínicas",
    "Acompanhamento para não deixar você desistir"
];

export function FinalCTASection() {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                    radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                    linear-gradient(180deg, #0A0908 0%, #12100E 50%, #0A0908 100%)
                `
            }}
        >
            {/* Noise */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            {/* Large glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                    filter: "blur(100px)"
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="font-display font-bold text-[#F5F0E8] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Sua <span className="text-gradient-gold">Decisão Final</span>
                    </motion.h2>

                    <motion.p
                        className="text-[#A69F93] text-lg font-light"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Você tem duas opções para os próximos 90 dias:
                    </motion.p>
                </div>

                {/* Options Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 pt-6 overflow-visible">
                    {/* Option A - Continuar Sozinha */}
                    <motion.div
                        className="h-full rounded-2xl glass-card border-[#6B6560]/20 p-8 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h3 className="font-display font-semibold text-[#6B6560] text-xl mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full border border-[#6B6560]/50 flex items-center justify-center text-sm">A</span>
                            Continuar Sozinha
                        </h3>
                        <ul className="space-y-4">
                            {optionA.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#6B6560]">
                                    <X className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Option B - Sistema Novo Nível */}
                    <motion.div
                        className="h-full rounded-2xl glass-card p-8 relative border-2 border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.15)]"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Recommended Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            Recomendado
                        </div>

                        <h3 className="font-display font-semibold text-[#D4AF37] text-xl mb-6 flex items-center gap-3 mt-2">
                            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A68B2A] text-[#0A0908] flex items-center justify-center text-sm font-bold">B</span>
                            Sistema Novo Nível
                        </h3>
                        <ul className="space-y-4">
                            {optionB.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#F5F0E8]">
                                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* CTA Principal */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.a
                        href="https://forms.jessicamessias.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-display font-bold tracking-wider uppercase rounded-lg px-10 py-5 text-lg hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all"
                    >
                        QUERO O DIAGNÓSTICO DO MEU NEGÓCIO
                        <ArrowRight className="w-6 h-6" />
                    </motion.a>

                    {/* Scarcity */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-[#D4AF37]/80">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Apenas 4 diagnósticos gratuitos disponíveis para essa semana.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
