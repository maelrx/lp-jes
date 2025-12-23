"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Calendar, Headphones } from "lucide-react";
import { ScrollAnimate } from "./ScrollAnimate";

const phases = [
    {
        phase: "FASE 1",
        title: "FUNDAÇÃO",
        weeks: "Semanas 1-3",
        focus: "Estrutura e Equipe",
        topics: [
            "Transição de mentalidade executora para gestora",
            "Contratação, treinamento e retenção de equipe",
            "Documentação de processos operacionais (SOPs)"
        ]
    },
    {
        phase: "FASE 2",
        title: "CRESCIMENTO",
        weeks: "Semanas 4-6",
        focus: "Vendas e Margem",
        topics: [
            "Scripts de conversão e fechamento consultivo",
            "Gestão financeira e precificação estratégica",
            "Mapeamento de jornada do paciente"
        ]
    },
    {
        phase: "FASE 3",
        title: "LIBERDADE",
        weeks: "Semanas 7-9",
        focus: "Autonomia e Estratégia",
        topics: [
            "Gestão por dados (não por intuição)",
            "Planejamento estratégico trimestral",
            "Estruturação para ausências programadas"
        ]
    }
];

const deliverables = [
    {
        icon: FileText,
        title: "50+ Templates",
        description: "Scripts, planilhas e SOPs prontos para uso"
    },
    {
        icon: Calendar,
        title: "Cronograma 90 Dias",
        description: "Planejamento dia a dia do que executar"
    },
    {
        icon: Headphones,
        title: "Suporte Semanal",
        description: "Acompanhamento da implementação"
    }
];

export function RoadmapSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="py-24 md:py-32 relative overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 50% 30% at 80% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                    radial-gradient(ellipse 40% 30% at 10% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 50%),
                    linear-gradient(180deg, #12100E 0%, #0A0908 50%, #12100E 100%)
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
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        Método Novo Nível | 90 Dias
                    </motion.span>

                    <motion.h2
                        className="font-display font-bold text-[#F5F0E8] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Estrutura de <span className="text-gradient-gold">Implementação</span>
                    </motion.h2>

                    <motion.p
                        className="text-[#A69F93] text-lg font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Não é curso gravado. É mentoria de implementação com suporte semanal.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto mb-16">
                    {/* Progress Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#221F1B] hidden lg:block">
                        <motion.div
                            className="w-full bg-gradient-to-b from-[#D4AF37] to-[#A68B2A]"
                            style={{ height: lineProgress }}
                        />
                    </div>

                    {/* Phases */}
                    <div className="space-y-12 lg:space-y-0">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${i > 0 ? 'lg:mt-8' : ''}`}
                            >
                                {/* Content */}
                                <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                                    <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-500">
                                        {/* Glow on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Phase badge */}
                                        <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                            <span className="px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] text-xs font-bold rounded-full">
                                                {phase.phase}
                                            </span>
                                            <span className="text-[#6B6560] text-sm">{phase.weeks}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-display font-bold text-[#F5F0E8] text-2xl mb-2">{phase.title}</h3>
                                        <p className="text-[#D4AF37] text-sm font-medium mb-6">Foco: {phase.focus}</p>

                                        {/* Topics */}
                                        <ul className={`space-y-3 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                                            {phase.topics.map((topic, j) => (
                                                <li key={j} className={`flex items-start gap-3 text-[#A69F93] text-sm ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#0A0908] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Deliverables */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {deliverables.map((item, i) => (
                        <ScrollAnimate key={i} delay={i + 1}>
                            <div className="text-center p-6 rounded-xl glass-card hover:border-[#D4AF37]/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-[#D4AF37]" />
                                </div>
                                <h4 className="font-display font-semibold text-[#F5F0E8] text-xl mb-2">{item.title}</h4>
                                <p className="text-[#A69F93] text-sm font-light">{item.description}</p>
                            </div>
                        </ScrollAnimate>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a
                        href="https://forms.jessicamessias.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-display font-bold tracking-wider uppercase rounded-lg px-8 py-4 text-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all"
                    >
                        Identificar meus gargalos prioritários
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
