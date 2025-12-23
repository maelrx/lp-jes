"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        step: "1",
        title: "Agora",
        description: "15 min de preenchimento. Mapeamento completo. Confidencial."
    },
    {
        step: "2",
        title: "Dias 1-3",
        description: "Análise manual (não robô). Identificação de oportunidades não-óbvias."
    },
    {
        step: "3",
        title: "Dia 5",
        description: "Entrega do Relatório PDF de 20+ páginas. Valor real: R$ 1.500 (Gratuito)."
    },
    {
        step: "4",
        title: "Depois",
        description: "Você decide. Se houver fit, convite para Meet Estratégico. Sem pressão."
    }
];

export function ProcessSection() {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 50% 40% at 20% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                    linear-gradient(180deg, #12100E 0%, #0A0908 100%)
                `
            }}
        >
            {/* Noise */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        O Que Acontece Após o Formulário
                    </motion.span>

                    <motion.h2
                        className="font-display font-bold text-[#F5F0E8] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Transparência <span className="text-gradient-gold">Completa</span>
                    </motion.h2>
                </div>

                {/* Steps */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative text-center"
                            >
                                {/* Step number */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E1B17] to-[#0A0908] border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                    <span className="text-[#D4AF37] font-display text-2xl font-bold">{item.step}</span>
                                </div>

                                {/* Connector line */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-[#D4AF37]/10" />
                                )}

                                {/* Content */}
                                <h4 className="font-display font-semibold text-[#F5F0E8] text-xl mb-2">{item.title}</h4>
                                <p className="text-[#A69F93] text-sm font-light leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.a
                        href="https://forms.jessicamessias.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-display font-bold tracking-wider uppercase rounded-lg px-8 py-4 text-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all"
                    >
                        Começar Diagnóstico Agora
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
