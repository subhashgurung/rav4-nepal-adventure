"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CreditCard } from "lucide-react";
import stripePromise from "@/lib/stripe";

interface ReserveButtonProps {
    className?: string;
}

export function ReserveButton({ className = "" }: ReserveButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);

        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const { url, error } = await response.json();

            if (error) {
                console.error("Checkout error:", error);
                setIsLoading(false);
                return;
            }

            // Redirect to Stripe Checkout
            if (url) {
                window.location.href = url;
            }
        } catch (error) {
            console.error("Checkout error:", error);
            setIsLoading(false);
        }
    };

    return (
        <motion.button
            onClick={handleCheckout}
            disabled={isLoading}
            className={`
        relative overflow-hidden group
        px-8 py-4 rounded-full
        bg-toyota-red hover:bg-toyota-red-dark
        text-white font-headline font-semibold text-lg uppercase tracking-wider
        transition-all duration-300
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="relative z-10 flex items-center justify-center gap-3">
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        <CreditCard className="w-5 h-5" />
                        Reserve Your RAV4 — $500
                    </>
                )}
            </span>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ filter: "blur(20px)" }}
            />
        </motion.button>
    );
}
