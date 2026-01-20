"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Transform for inner content movement (moves in same direction, slightly more)
    const innerX = useTransform(springX, (val) => val * 0.5);
    const innerY = useTransform(springY, (val) => val * 0.5);

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
            }}
            className={`magnetic-btn relative overflow-hidden group ${className}`}
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                style={{ x: innerX, y: innerY }}
                className="relative z-10 flex items-center gap-2"
            >
                {children}
            </motion.span>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-toyota-red to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "blur(20px)" }}
            />

            {/* Button background */}
            <div className="absolute inset-0 bg-toyota-red rounded-full transition-transform duration-300 group-hover:scale-105" />
        </motion.button>
    );
}
