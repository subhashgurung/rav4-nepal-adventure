"use client";

import { motion } from "framer-motion";
import { Mouse, ChevronDown } from "lucide-react";

export function ScrollMouseIcon() {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
        >
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                Scroll to Discover
            </span>

            <div className="relative">
                {/* Mouse outline */}
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                    {/* Scroll dot */}
                    <motion.div
                        className="w-1.5 h-1.5 bg-toyota-red rounded-full"
                        animate={{
                            y: [0, 12, 0],
                            opacity: [1, 0.3, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Chevron below */}
                <motion.div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2"
                    animate={{
                        y: [0, 4, 0],
                        opacity: [0.5, 0.2, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                    }}
                >
                    <ChevronDown size={16} className="text-white/30" />
                </motion.div>
            </div>
        </motion.div>
    );
}
