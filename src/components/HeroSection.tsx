"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReserveButton } from "./ReserveButton";
import { ScrollMouseIcon } from "./ScrollMouseIcon";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax: video moves at 0.5x speed
    const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Text parallax and fade
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative h-[120vh] overflow-hidden"
        >
            {/* Video Background with Parallax */}
            <motion.div
                className="absolute inset-0 video-parallax"
                style={{ y: videoY, scale: videoScale }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-transparent to-abyss" />
                <div className="absolute inset-0 bg-gradient-to-r from-abyss/40 via-transparent to-abyss/40" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4"
                style={{ y: textY, opacity: textOpacity }}
            >
                {/* Tagline */}
                <motion.p
                    className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-toyota-red mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Introducing
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <span className="text-gradient">TAME THE</span>
                    <br />
                    <span className="text-gradient-red">UNTAMED.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="text-lg md:text-xl lg:text-2xl font-light text-white/70 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    The 2026 Toyota RAV4. Engineered for the Wilds of Nepal.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                >
                    <ReserveButton />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <ScrollMouseIcon />
        </section>
    );
}
