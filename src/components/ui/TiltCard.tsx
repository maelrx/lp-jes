"use client";

import React from "react";
import { motion } from "framer-motion";

export const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px rgba(212, 175, 55, 0.15)",
                borderColor: "rgba(212, 175, 55, 0.4)"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative ${className}`}
        >
            {children}
        </motion.div>
    );
};
