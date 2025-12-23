'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, User } from 'lucide-react';

interface Message {
    id: string;
    role: string;
    content: string;
}

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat() as any;
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current?.focus(), 400);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    // Ultra smooth easing - like Apple
    const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

    return (
        <>
            <style jsx global>{`
                .scrollbar-clean::-webkit-scrollbar { width: 6px; }
                .scrollbar-clean::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-clean::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                }
                .scrollbar-clean::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }
            `}</style>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
                        onClick={handleClose}
                    />
                )}
            </AnimatePresence>

            {/* Fixed container - full screen flex with items at bottom */}
            <div className="fixed inset-0 z-[9999] flex items-end justify-center pb-8 pointer-events-none">
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="chat-window"
                            initial={{ opacity: 0, scaleY: 0, scaleX: 0.9 }}
                            animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
                            exit={{ opacity: 0, scaleY: 0, scaleX: 0.9 }}
                            transition={{ duration: 0.7, ease: smoothEase }}
                            style={{ transformOrigin: "bottom center" }}
                            className="w-[420px] h-[600px] bg-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 overflow-hidden flex flex-col rounded-3xl pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white/80" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">Domus AI</h3>
                                        <p className="text-white/50 text-xs">Sempre online</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-white/10 rounded-xl text-white/50 hover:text-white transition-all duration-200"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-clean bg-black/30">
                                {messages.length === 0 && (
                                    <div className="h-full flex flex-col items-center justify-center text-center p-6 text-white/50 space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                                            <Sparkles className="w-8 h-8 text-white/60" />
                                        </div>
                                        <div>
                                            <h4 className="text-white text-lg font-medium mb-1">Como posso ajudar?</h4>
                                            <p className="text-sm max-w-[280px] leading-relaxed text-white/40">
                                                Tire suas dúvidas sobre a mentoria e o método.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {messages.map((m: Message) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, ease: smoothEase }}
                                        key={m.id}
                                        className={cn(
                                            "flex gap-3 max-w-[85%]",
                                            m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                                        )}
                                    >
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/15",
                                            m.role === 'user' ? "bg-white/15" : "bg-white/10"
                                        )}>
                                            {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-white/80" />}
                                        </div>
                                        <div className={cn(
                                            "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                                            m.role === 'user'
                                                ? "bg-white/15 text-white rounded-tr-sm"
                                                : "bg-white/10 text-white/90 border border-white/10 rounded-tl-sm"
                                        )}>
                                            {m.content}
                                        </div>
                                    </motion.div>
                                ))}

                                {isLoading && (
                                    <div className="flex gap-3 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                                            <Sparkles className="w-4 h-4 text-white/80" />
                                        </div>
                                        <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                                            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                            <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-white/10 bg-black/40 backdrop-blur-xl">
                                <form onSubmit={handleSubmit} className="relative flex items-center">
                                    <input
                                        ref={inputRef}
                                        value={input ?? ''}
                                        onChange={handleInputChange ?? (() => { })}
                                        placeholder="Digite sua mensagem..."
                                        className="w-full bg-white/10 border border-white/15 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-200"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !(input || '').trim()}
                                        className="absolute right-2 p-2 bg-white/15 hover:bg-white/25 disabled:bg-transparent disabled:text-white/20 text-white rounded-lg transition-all duration-200"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            key="chat-button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: smoothEase }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleOpen}
                            className="w-[210px] flex items-center justify-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl shadow-black/20 text-white hover:bg-white/15 transition-all duration-200 pointer-events-auto"
                        >
                            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                                <Sparkles className="w-2.5 h-2.5 text-white/90" />
                            </div>
                            <span className="text-xs font-medium text-white/90">Pergunte para a Domus AI</span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
