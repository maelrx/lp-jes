"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    CheckCircle2,
    Star,
    ArrowRight,
    Instagram,
    Shield,
    Plus,
    Minus,
    Lock,
    Gem,
    ShieldCheck,
    BadgeCheck,
    X,
    Award,
    Users,
    BarChart3
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { TiltCard } from "./ui/TiltCard";
import { HeroSection } from "./HeroSection";
import { PainPointsSection } from "./PainPointsSection";
import { RoadmapSection } from "./RoadmapSection";
import { SocialProofSection } from "./SocialProofSection";
import { ProcessSection } from "./ProcessSection";
import { FinalCTASection } from "./FinalCTASection";
import { ScrollAnimate } from "./ScrollAnimate";

// --- Utility Components ---

function Section({
    children,
    className = "",
    id = "",
    style
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}) {
    return (
        <section id={id} className={`relative w-full px-4 py-20 md:py-28 overflow-hidden ${className}`} style={style}>
            {children}
        </section>
    );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`max-w-7xl mx-auto relative z-10 px-6 lg:px-12 ${className}`}>
            {children}
        </div>
    );
}

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#D4AF37]/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-[#D4AF37] transition-colors group"
            >
                <span className="font-display font-semibold text-lg text-[#F5F0E8] group-hover:text-[#D4AF37] transition-colors">{title}</span>
                {isOpen ? <Minus className="w-5 h-5 text-[#D4AF37]" /> : <Plus className="w-5 h-5 text-[#D4AF37]/60" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
            >
                <div className="text-[#A69F93] leading-relaxed font-light">
                    {children}
                </div>
            </div>
        </div>
    );
}

// --- Main Component ---

export default function HighEndLanding() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-[#0A0908] text-[#F5F0E8] selection:bg-[#D4AF37] selection:text-[#0A0908] font-body">

            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[#12100E] via-[#1E1B17] to-[#12100E] text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase text-center py-3 border-b border-[#D4AF37]/20 relative z-20">
                <span className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                    Restam apenas 4 diagnósticos gratuitos para esta semana
                </span>
            </div>

            {/* Header */}
            <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-3`}>
                <Container className="flex justify-center">
                    <div className={`
                        transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                        rounded-full flex items-center justify-between
                        h-14 px-6
                        ${isScrolled
                            ? "w-[95%] md:w-[60%] glass-card border-[#D4AF37]/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                            : "w-full bg-transparent border border-transparent"
                        }
                    `}>
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <Image src="/images/logowhite.png" alt="Jéssica Messias" width={54} height={54} className="w-14 h-14 object-contain" style={{ transform: 'translateY(2px)' }} />
                            <div className="font-display tracking-widest text-lg hidden sm:block">
                                <span className="text-[#F5F0E8]">JÉSSICA</span>
                                <span className="text-[#D4AF37]">MESSIAS</span>
                            </div>
                        </div>

                        <motion.a
                            href="https://forms.jessicamessias.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gradient-to-r from-[#D4AF37] to-[#A68B2A] text-[#0A0908] font-display font-bold uppercase tracking-wider rounded-full px-5 py-2.5 text-[10px] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                        >
                            Diagnóstico Grátis
                        </motion.a>
                    </div>
                </Container>
            </header>

            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. Pain Points Section (6 Cards) */}
            <PainPointsSection />

            {/* 3. Authority Section */}
            <Section
                className="bg-transparent"
                style={{
                    background: `
                        radial-gradient(ellipse 60% 40% at 70% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                        linear-gradient(180deg, #0A0908 0%, #12100E 50%, #0A0908 100%)
                    `
                } as React.CSSProperties}
            >
                {/* Noise */}
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

                <Container>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                        <motion.div
                            className="w-full md:w-2/5 relative"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative aspect-[3/4] max-w-sm mx-auto">
                                {/* Shadow escura para tridimensionalidade */}
                                <div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] z-0"
                                    style={{
                                        background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, transparent 70%)",
                                        filter: "blur(40px)"
                                    }}
                                />

                                <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden border border-[#D4AF37]/20" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(212, 175, 55, 0.1)' }}>
                                    <Image
                                        src="/images/jessica.webp"
                                        alt="Jéssica Messias - Gestora de Clínicas"
                                        fill
                                        className="object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                        <div className="w-full md:w-3/5 space-y-6">
                            <motion.span
                                className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                Quem é Jéssica Messias?
                            </motion.span>

                            <motion.h2
                                className="font-display font-bold text-[#F5F0E8]"
                                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Gestora de clínicas, <span className="text-gradient-gold">não guru de internet.</span>
                            </motion.h2>

                            <motion.p
                                className="text-[#A69F93] text-lg font-light leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Diferente de consultores que nunca pisaram no chão de clínica, eu gerenciei operações reais por 7 anos.
                                Desenvolvi o Protocolo Domus™ no campo de batalha, testando o que funciona para escalar faturamento
                                enquanto reduzia minha carga horária.
                            </motion.p>

                            {/* Credentials */}
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {[
                                    { icon: Users, text: "Mentora de +35 proprietárias de estética" },
                                    { icon: BarChart3, text: "Especialista em Processos e Gestão de Equipes" },
                                    { icon: Award, text: "MBA em Gestão em Saúde" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl glass-card">
                                        <item.icon className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                                        <span className="text-[#A69F93] text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 4. Methodology Section (Protocolo Domus) */}
            <Section
                id="metodo"
                style={{
                    background: `
                        radial-gradient(ellipse 50% 30% at 30% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
                        linear-gradient(180deg, #12100E 0%, #0A0908 100%)
                    `
                } as React.CSSProperties}
            >
                {/* Noise */}
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

                <Container>
                    <div className="text-center mb-12 md:mb-16">
                        <motion.span
                            className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            O Framework de Reestruturação Operacional
                        </motion.span>

                        <motion.h2
                            className="font-display font-bold text-[#F5F0E8] mb-4"
                            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Protocolo Domus™: <span className="text-gradient-gold">3 Pilares Para Autonomia</span>
                        </motion.h2>

                        <motion.p
                            className="text-[#A69F93] text-lg font-light max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Sistema desenvolvido em 7 anos de gestão prática. Implementável em 90 dias.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Lock,
                                title: "GESTÃO AUTO-REGULÁVEL",
                                before: "Equipe pergunta até decisões básicas. Nada funciona sem sua presença física.",
                                result: "Equipe resolve 85-90% das situações sem sua intervenção.",
                                quote: "\"Minha secretária hoje resolve sozinha. Antes ela me perguntava até sobre desconto de R$ 50.\"",
                                author: "Dra. Carolina M., Dermatologista"
                            },
                            {
                                icon: Gem,
                                title: "CONVERSÃO PREMIUM",
                                before: "20 leads semanais → 4 consultas. Conversão de 20%. Perda estimada: R$ 15 mil/mês.",
                                result: "Taxa de conversão: 50-65% sem aumento de leads.",
                                quote: "\"Conversão subiu de 35% para 68% em 60 dias. Minha secretária fecha sozinha.\"",
                                author: "Dra. Beatriz L., Odontologia HOF"
                            },
                            {
                                icon: Star,
                                title: "LIBERDADE OPERACIONAL",
                                before: "Zero férias nos últimos 3 anos. Medo de viajar porque 'tudo vai desmoronar'.",
                                result: "Capacidade de se ausentar por 15-30 dias com operação estável.",
                                quote: "\"Primeira vez em 5 anos que tirei férias reais — 30 dias no Caribe.\"",
                                author: "Ana Paula R., Biomédica Esteta"
                            }
                        ].map((pillar, i) => (
                            <ScrollAnimate key={i} delay={i + 1} className="h-full">
                                <div className="h-full glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.15)] hover:-translate-y-2 group">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E1B17] to-[#0A0908] border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all">
                                        <pillar.icon className="w-7 h-7 text-[#D4AF37]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase mb-4">
                                        {pillar.title}
                                    </h3>

                                    {/* Before */}
                                    <div className="mb-4">
                                        <span className="text-[10px] text-[#6B6560] uppercase tracking-wider font-semibold">Situação Atual:</span>
                                        <p className="text-[#A69F93] text-sm mt-1">{pillar.before}</p>
                                    </div>

                                    {/* Result */}
                                    <div className="mb-6 p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                                        <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold">Resultado:</span>
                                        <p className="text-[#F5F0E8] text-sm font-medium mt-1">{pillar.result}</p>
                                    </div>

                                    {/* Quote */}
                                    <div className="border-t border-[#D4AF37]/10 pt-4">
                                        <p className="text-[#E8D5A3] font-display italic text-sm mb-2">{pillar.quote}</p>
                                        <p className="text-[#6B6560] text-xs">— {pillar.author}</p>
                                    </div>
                                </div>
                            </ScrollAnimate>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 5. Roadmap Section (90 Days) */}
            <RoadmapSection />

            {/* 6. Social Proof Section (Case Study) */}
            <SocialProofSection />



            {/* 8. Process Section */}
            <ProcessSection />

            {/* 9. FAQ Section */}
            <Section
                style={{
                    background: `
                        radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 50%),
                        linear-gradient(180deg, #0A0908 0%, #12100E 100%)
                    `
                } as React.CSSProperties}
            >
                {/* Noise */}
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

                <Container className="max-w-3xl">
                    <motion.h2
                        className="font-display font-bold text-[#F5F0E8] text-center mb-12"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Perguntas <span className="text-gradient-gold">Frequentes</span>
                    </motion.h2>

                    <motion.div
                        className="glass-card rounded-2xl p-6 md:p-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <AccordionItem title="Quanto custa a mentoria completa?">
                            R$ 9.000 à vista ou 10x no cartão. O diagnóstico é 100% gratuito.
                        </AccordionItem>
                        <AccordionItem title="Tem garantia de resultado?">
                            Garantia de método testado (R$ 0 a R$ 1M). Resultado depende de execução. Oferecemos 90 dias de suporte.
                        </AccordionItem>
                        <AccordionItem title="Não tenho tempo para mais uma coisa">
                            Se você não criar tempo para estruturar, continuará no ciclo de incêndios. Investimento necessário: 2-3h/semana.
                        </AccordionItem>
                        <AccordionItem title="Já fiz cursos que não funcionaram">
                            Diferença crucial: Mentoria é implementação guiada com suporte, não apenas assistir vídeos.
                        </AccordionItem>
                        <AccordionItem title="Como sei se meu estágio é compatível?">
                            O diagnóstico serve exatamente para isso. Mapeamos faturamento, margem e gargalos para confirmar o fit.
                        </AccordionItem>
                        <AccordionItem title="Por que não mostra todo o conteúdo antes?">
                            Cada clínica tem gargalos únicos. Entregar tudo geraria paralisia. O diagnóstico personaliza o remédio.
                        </AccordionItem>
                    </motion.div>
                </Container>
            </Section>

            {/* 10. Final CTA Section */}
            <FinalCTASection />



            {/* Footer */}
            <footer className="bg-[#0A0908] text-[#A69F93] py-16 border-t border-[#D4AF37]/10">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <Image src="/images/logowhite.png" alt="Jéssica Messias" width={60} height={60} className="w-15 h-15 object-contain" />
                            <div className="text-xl font-display tracking-widest">
                                <span className="text-[#F5F0E8]">JÉSSICA</span>
                                <span className="text-[#D4AF37]">MESSIAS</span>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-6">
                            <a href="https://instagram.com/jessicamessias" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="mailto:contato@jessicamessias.com.br" className="text-sm hover:text-[#D4AF37] transition-colors">
                                contato@jessicamessias.com.br
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-xs tracking-widest text-[#6B6560]">
                            © 2026 Jéssica Messias. Todos os direitos reservados.
                        </p>
                    </div>
                </Container>
            </footer>
        </main>
    );
}
