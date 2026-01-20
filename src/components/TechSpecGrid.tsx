"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Mountain, Settings, Gauge, Shield, Zap, Compass } from "lucide-react";

interface Spec {
    icon: React.ReactNode;
    title: string;
    value: string;
    unit: string;
    description: string;
}

const specs: Spec[] = [
    {
        icon: <Mountain size={24} />,
        title: "Ground Clearance",
        value: "8.6",
        unit: "inches",
        description: "Elevated stance for obstacle clearing and water fording up to 500mm.",
    },
    {
        icon: <Settings size={24} />,
        title: "Multi-Terrain Select",
        value: "6",
        unit: "modes",
        description: "Mud, Sand, Rock, Snow, Dirt, Normal — instant adaptation at your fingertips.",
    },
    {
        icon: <Gauge size={24} />,
        title: "TRD Suspension",
        value: "2.0",
        unit: "inch lift",
        description: "Nitrogen-charged Bilstein shocks with progressive spring rates.",
    },
    {
        icon: <Zap size={24} />,
        title: "Hybrid Power",
        value: "302",
        unit: "HP",
        description: "Combined system output with instant electric torque for responsive acceleration.",
    },
    {
        icon: <Shield size={24} />,
        title: "Skid Plates",
        value: "4.5",
        unit: "mm thick",
        description: "Full aluminum underbody protection for engine, transmission, and fuel tank.",
    },
    {
        icon: <Compass size={24} />,
        title: "Approach Angle",
        value: "19",
        unit: "degrees",
        description: "Optimized front geometry for steep inclines and trail obstacles.",
    },
];

function SpecCard({ spec, index }: { spec: Spec; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            className="spec-card group relative overflow-hidden rounded-2xl glass"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
        >
            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-toyota-red group-hover:bg-toyota-red group-hover:text-white transition-all duration-300">
                    {spec.icon}
                </div>

                {/* Title */}
                <h3 className="font-headline font-semibold text-lg mb-4 text-white/90">
                    {spec.title}
                </h3>

                {/* Value - Exploded View Style */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-mono text-4xl md:text-5xl font-bold text-gradient-red">
                        {spec.value}
                    </span>
                    <span className="font-mono text-sm uppercase tracking-wider text-white/50">
                        {spec.unit}
                    </span>
                </div>

                {/* Description - Revealed on Hover */}
                <motion.p
                    className="text-sm text-white/60 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: "auto" }}
                    transition={{ delay: 0.3 }}
                >
                    {spec.description}
                </motion.p>

                {/* Hover Arrow */}
                <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <ArrowUpRight size={20} className="text-toyota-red" />
                </motion.div>
            </div>

            {/* Background Glow on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-20 bg-gradient-radial from-toyota-red/10 via-transparent to-transparent" />
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-toyota-red/30 transition-colors duration-300" />
        </motion.div>
    );
}

export function TechSpecGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            id="specs"
            ref={containerRef}
            className="relative py-24 md:py-32 bg-abyss"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    style={{ y }}
                >
                    <motion.p
                        className="text-xs font-mono uppercase tracking-widest text-toyota-red mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Technical Specifications
                    </motion.p>
                    <motion.h2
                        className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="text-gradient">Built for the</span>
                        <br />
                        <span className="text-gradient-red">Extreme.</span>
                    </motion.h2>
                </motion.div>

                {/* Spec Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {specs.map((spec, index) => (
                        <SpecCard key={spec.title} spec={spec} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="#footer"
                        className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/50 hover:text-toyota-red transition-colors"
                    >
                        View Complete Specifications
                        <ArrowUpRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
