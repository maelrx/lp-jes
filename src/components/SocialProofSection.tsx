"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    MapPin,
    TrendingUp
} from "lucide-react";

const beforeMetrics = [
    { label: "Faturamento", value: "R$ 0-5k/mês" },
    { label: "Processos", value: "Zero" },
    { label: "Proprietário", value: "84h/semana" },
    { label: "Férias", value: "5 anos sem" }
];

const afterMetrics = [
    { label: "Faturamento", value: "R$ 1M/ano" },
    { label: "Processos", value: "100% Doc." },
    { label: "Proprietário", value: "24h/semana" },
    { label: "Férias", value: "30 dias off" }
];

const implementation = [
    { period: "Mês 1-2", action: "Mapeamento gargalos" },
    { period: "Mês 3-6", action: "SOPs e Treinamento" },
    { period: "Mês 7-10", action: "Conversão e Precificação" },
    { period: "Mês 15+", action: "Gestão Autônoma" }
];

const whatWasDone = [
    "Todos os SOPs documentados (atendimento, orçamento)",
    "Secretária capacitada em conversão (não apenas agenda)",
    "Precificação baseada em margem real",
    "KPIs automatizados com alertas semanais",
    "Follow-up de pacientes estruturado",
    "Proprietário saiu 90% da operação diária"
];

export function SocialProofSection() {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
                    linear-gradient(180deg, #0A0908 0%, #12100E 50%, #0A0908 100%)
                `
            }}
        >
            {/* Noise */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="font-display font-bold text-[#F5F0E8] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Por Que Confiar <span className="text-gradient-gold">Neste Sistema?</span>
                    </motion.h2>

                    <motion.p
                        className="text-[#A69F93] text-lg font-light max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Framework testado por 7 anos na gestão operacional direta — com case documentado de R$ 0 a R$ 1M/ano.
                    </motion.p>
                </div>

                {/* Case Study Card */}
                <motion.div
                    className="max-w-5xl mx-auto glass-card rounded-3xl overflow-hidden border border-[#D4AF37]/20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#1E1B17] to-[#12100E] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D4AF37]/10">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-[#D4AF37]" />
                            <span className="text-[#A69F93] text-sm">São Paulo, SP — Case Detalhado</span>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-bold text-sm rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            <TrendingUp className="w-4 h-4" />
                            Resultado: R$ 1M/Ano
                        </div>
                    </div>

                    {/* Before / Implementation / After */}
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/10">
                        {/* Before */}
                        <div className="p-6 md:p-8">
                            <h4 className="text-[#6B6560] text-xs font-bold tracking-widest uppercase mb-4">
                                Mês 0 (Antes)
                            </h4>
                            <div className="space-y-3">
                                {beforeMetrics.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-[#6B6560] text-sm">{item.label}</span>
                                        <span className="text-[#F5F0E8] font-medium text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Implementation */}
                        <div className="p-6 md:p-8 bg-[#D4AF37]/5">
                            <h4 className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4">
                                Implementação
                            </h4>
                            <div className="space-y-3">
                                {implementation.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
                                        <span className="text-[#F5F0E8] text-sm">
                                            <strong className="text-[#D4AF37]">{item.period}:</strong> {item.action}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* After */}
                        <div className="p-6 md:p-8">
                            <h4 className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4">
                                Mês 18 (Depois)
                            </h4>
                            <div className="space-y-3">
                                {afterMetrics.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-[#6B6560] text-sm">{item.label}</span>
                                        <span className="text-[#D4AF37] font-bold text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* What Was Done */}
                    <div className="p-6 md:p-8 bg-[#1E1B17]/50 border-t border-[#D4AF37]/10">
                        <h4 className="font-display font-semibold text-[#F5F0E8] text-lg mb-4">O Que Foi Feito:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                            {whatWasDone.map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                    <span className="text-[#A69F93] text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="p-6 md:p-8 bg-gradient-to-r from-[#1A1714] to-[#12100E] text-center border-t border-[#D4AF37]/10">
                        <p className="font-display text-xl md:text-2xl text-[#E8D5A3] italic max-w-2xl mx-auto">
                            "Este modelo funciona porque foi estruturado com metodologia, não tentativa e erro aleatória."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
