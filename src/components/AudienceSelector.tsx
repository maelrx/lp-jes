"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

type AudienceLevel = "beginner" | "intermediate" | "advanced";

const audienceData = {
    beginner: {
        label: "Iniciante (30-50k)",
        pain: "Agenda vazia e conversão baixa",
        description: "Você ainda depende de indicações e sofre para fechar tratamentos de alto valor. Sua clínica não tem previsibilidade.",
        color: "bg-gray-100",
        borderColor: "border-gray-200"
    },
    intermediate: {
        label: "Intermediária (50-100k)",
        pain: "Equipe roda e dinheiro some",
        description: "Você fatura bem, mas o lucro não aparece. Sua equipe comete erros básicos e você sente que paga para trabalhar.",
        color: "bg-marsala-primary/5",
        borderColor: "border-marsala-primary/20"
    },
    advanced: {
        label: "Avançada (150k+)",
        pain: "Prisão de luxo e burnout",
        description: "Sua clínica é enorme, mas você é escrava dela. Se você tirar férias, o faturamento cai pela metade.",
        color: "bg-gold-rose/10",
        borderColor: "border-gold-rose/30"
    }
};

export function AudienceSelector() {
    const [selectedLevel, setSelectedLevel] = useState<AudienceLevel>("intermediate");

    return (
        <section className="py-24 bg-cream text-coffee relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-coffee">
                        Qual o seu <span className="text-marsala-primary italic">Momento Atual?</span>
                    </h2>
                    <p className="font-sans text-lg text-coffee/70 max-w-2xl mx-auto">
                        Identifique onde você está para entender o que está travando seu crescimento.
                    </p>
                </div>

                <div className="@container">
                    <div className="grid lg:grid-cols-3 gap-6 mb-12">
                        {(Object.keys(audienceData) as AudienceLevel[]).map((level) => (
                            <React.Fragment key={level}>
                                <button
                                    onClick={() => setSelectedLevel(level)}
                                    className={`
                                        relative p-6 rounded-xl border-2 text-left transition-all duration-300 group w-full
                                        ${selectedLevel === level
                                            ? "border-marsala-primary bg-white shadow-xl scale-105 z-10"
                                            : "border-coffee/10 bg-white/50 hover:border-marsala-primary/50 hover:bg-white"
                                        }
                                    `}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`font-serif text-xl ${selectedLevel === level ? "text-marsala-primary" : "text-coffee/60"}`}>
                                            {audienceData[level].label}
                                        </span>
                                        {selectedLevel === level && (
                                            <motion.div
                                                layoutId="check"
                                                className="text-marsala-primary"
                                            >
                                                <CheckCircle2 className="w-6 h-6" />
                                            </motion.div>
                                        )}
                                    </div>
                                    <div className={`h-1 w-full rounded-full bg-gray-100 overflow-hidden`}>
                                        <motion.div
                                            className="h-full bg-marsala-primary"
                                            initial={{ width: "0%" }}
                                            animate={{ width: level === 'beginner' ? '33%' : level === 'intermediate' ? '66%' : '100%' }}
                                        />
                                    </div>
                                </button>

                                {/* Mobile Details (Accordion Style) */}
                                <AnimatePresence>
                                    {selectedLevel === level && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="lg:hidden overflow-hidden"
                                        >
                                            <div className={`mt-4 p-6 rounded-2xl border ${audienceData[level].borderColor} ${audienceData[level].color} backdrop-blur-sm shadow-lg`}>
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-3 text-marsala-primary">
                                                        <AlertCircle className="w-6 h-6 shrink-0" />
                                                        <h3 className="font-serif text-xl text-coffee">
                                                            <span className="text-marsala-primary">{audienceData[level].pain}</span>
                                                        </h3>
                                                    </div>
                                                    <p className="text-base text-coffee/80 leading-relaxed font-light">
                                                        {audienceData[level].description}
                                                    </p>
                                                    <div className="pt-4 border-t border-coffee/10 mt-2">
                                                        <div className="flex items-center gap-2 text-gold-rose font-bold uppercase tracking-wider text-xs">
                                                            <ArrowRight className="w-3 h-3" />
                                                            O Método Cúpula resolve:
                                                        </div>
                                                        <p className="mt-1 text-coffee font-medium text-sm">
                                                            {level === 'beginner' && "Módulo 1: Mentalidade de Dona & Vendas High Ticket"}
                                                            {level === 'intermediate' && "Módulo 3: Equipe de Alta Performance & Processos"}
                                                            {level === 'advanced' && "Módulo 4: Gestão Invisível & Autogerenciamento"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Desktop Details (Original Layout) */}
                    <div className="hidden lg:block max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedLevel}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className={`p-8 md:p-12 rounded-3xl border ${audienceData[selectedLevel].borderColor} ${audienceData[selectedLevel].color} backdrop-blur-sm shadow-2xl`}
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="p-4 rounded-full bg-white/50 border border-coffee/10 text-marsala-primary shrink-0">
                                        <AlertCircle className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-4 flex-1">
                                        <h3 className="font-serif text-2xl md:text-3xl text-coffee">
                                            A Realidade: <span className="text-marsala-primary">{audienceData[selectedLevel].pain}</span>
                                        </h3>
                                        <p className="text-lg text-coffee/80 leading-relaxed font-light">
                                            {audienceData[selectedLevel].description}
                                        </p>

                                        <div className="pt-6 border-t border-coffee/10 mt-6">
                                            <div className="flex items-center gap-2 text-gold-rose font-bold uppercase tracking-wider text-sm">
                                                <ArrowRight className="w-4 h-4" />
                                                O Método Cúpula resolve isso com:
                                            </div>
                                            <p className="mt-2 text-coffee font-medium">
                                                {selectedLevel === 'beginner' && "Módulo 1: Mentalidade de Dona & Vendas High Ticket"}
                                                {selectedLevel === 'intermediate' && "Módulo 3: Equipe de Alta Performance & Processos"}
                                                {selectedLevel === 'advanced' && "Módulo 4: Gestão Invisível & Autogerenciamento"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
