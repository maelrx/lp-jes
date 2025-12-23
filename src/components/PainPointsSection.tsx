"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    UserX,
    TrendingDown,
    Users,
    FileQuestion,
    PhoneOff,
    Flame,
    ArrowRight
} from "lucide-react";

const painPoints = [
    {
        icon: UserX,
        category: "DEPENDÊNCIA OPERACIONAL",
        quote: "Três Anos Sem Férias Reais",
        description: "Sua equipe não consegue resolver 90% das situações sozinha. Resultado: você trabalha em feriados, cancela compromissos pessoais, adia descanso."
    },
    {
        icon: TrendingDown,
        category: "MARGEM COMPRIMIDA",
        quote: "Fatura R$ 80 Mil, Lucra R$ 14 Mil",
        description: "Custos fixos consomem 45% do faturamento. Precificação não considera margem real. Você trabalha 60 horas para lucrar menos que um cargo CLT."
    },
    {
        icon: Users,
        category: "TURNOVER DE EQUIPE",
        quote: "Oito Saídas em Doze Meses",
        description: "Ciclo repetitivo: treinar → adaptar → demissão. Sem cultura, você tem dependência pessoal disfarçada de equipe."
    },
    {
        icon: FileQuestion,
        category: "PROCESSOS NÃO DOCUMENTADOS",
        quote: "Tudo Está Na Minha Cabeça",
        description: "Sua equipe pergunta diariamente: Onde fica X? Como preenche Y? Você se tornou o sistema de busca da própria empresa."
    },
    {
        icon: PhoneOff,
        category: "CONVERSÃO BAIXA",
        quote: "Secretária Que Não Converte",
        description: "20 leads/semana → 4 agendamentos. Perda estimada: R$ 15 mil/mês. Ela sabe \"anotar recado\", não foi treinada para fechar."
    },
    {
        icon: Flame,
        category: "GESTÃO REATIVA",
        quote: "Apagando Incêndios Diários",
        description: "Sem KPIs. Sem rotina de análise. Decisões baseadas em \"achismo\". Você opera no modo sobrevivência, não no estratégico."
    }
];

export function PainPointsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

    return (
        <section
            ref={containerRef}
            className="py-24 md:py-32 relative overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 60% 40% at 30% 20%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
                    linear-gradient(180deg, #0A0908 0%, #12100E 50%, #0A0908 100%)
                `
            }}
        >
            {/* Noise */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

            {/* Floating orb */}
            <motion.div
                className="absolute top-1/4 right-[5%] w-[250px] h-[250px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    y: smoothY
                }}
            />

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
                        6 Sinais de Que Você Precisa Reestruturar Sua Operação
                    </motion.span>

                    <motion.h2
                        className="font-display font-bold text-[#F5F0E8] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Reconhece Algum <span className="text-gradient-gold">Desses Cenários?</span>
                    </motion.h2>

                    <motion.p
                        className="text-[#A69F93] text-lg font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Proprietárias de clínicas de estética enfrentam os mesmos gargalos estruturais.
                        A diferença está em identificá-los e corrigi-los de forma sistemática.
                    </motion.p>
                </div>

                {/* 6 Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {painPoints.map((pain, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group h-full glass-card rounded-2xl p-6 transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E1B17] to-[#0A0908] border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all">
                                <pain.icon className="w-6 h-6 text-[#D4AF37]" />
                            </div>

                            {/* Category */}
                            <span className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.2em] uppercase">
                                {pain.category}
                            </span>

                            {/* Quote */}
                            <h3 className="font-display font-semibold text-[#F5F0E8] text-xl mt-2 mb-3">
                                "{pain.quote}"
                            </h3>

                            {/* Description */}
                            <p className="text-[#A69F93] text-sm font-light leading-relaxed">
                                {pain.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Callout */}
                <motion.div
                    className="max-w-3xl mx-auto text-center glass-card rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20 relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Glow */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                            filter: "blur(40px)"
                        }}
                    />

                    <h3 className="font-display font-bold text-[#F5F0E8] text-2xl md:text-3xl mb-4 relative z-10">
                        Esses gargalos não indicam incompetência.
                        <br />
                        <span className="text-gradient-gold">Indicam ausência de sistema.</span>
                    </h3>
                    <p className="text-[#A69F93] text-lg font-light mb-8 relative z-10">
                        O problema não é sua capacidade técnica. O problema é que você ainda atua como executora, não como gestora.
                    </p>
                    <motion.a
                        href="https://forms.jessicamessias.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-display font-bold tracking-wider uppercase rounded-lg px-8 py-4 text-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all"
                    >
                        Mapear meus gargalos específicos
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
