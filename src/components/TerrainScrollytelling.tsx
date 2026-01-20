"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TerrainZone {
    id: string;
    title: string;
    subtitle: string;
    spec: string;
    specDetail: string;
    video: string;
}

const terrainZones: TerrainZone[] = [
    {
        id: "mustang",
        title: "Mustang Desert",
        subtitle: "Upper Himalayan Plateau",
        spec: "AWD-i",
        specDetail: "Intelligence that grips. Dynamic torque vectoring adapts to shifting sands in milliseconds.",
        video: "/videos/himalaya.mp4",
    },
    {
        id: "himalaya",
        title: "Himalayan Heights",
        subtitle: "15,000+ Feet Elevation",
        spec: "Multi-Terrain Select",
        specDetail: "Adapt. Conquer. Six terrain modes calibrated for Nepal's diverse landscapes.",
        video: "/videos/himalaya.mp4",
    },
    {
        id: "terai",
        title: "Terai Mud",
        subtitle: "Monsoon Lowlands",
        spec: "TRD Suspension",
        specDetail: "Engineered for chaos. 2-inch lift with high-clearance geometry.",
        video: "/videos/nepal-mud.mp4",
    },
];

function SpecCard({ zone, progress }: { zone: TerrainZone; progress: number }) {
    const opacity = Math.max(0, 1 - Math.abs(progress - 0.5) * 3);
    const x = (progress - 0.5) * 100;

    return (
        <motion.div
            className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 max-w-sm"
            style={{
                opacity,
                x,
            }}
        >
            <div className="glass-dark rounded-2xl p-6 md:p-8">
                {/* Location Tag */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-toyota-red rounded-full animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                        {zone.subtitle}
                    </span>
                </div>

                {/* Zone Title */}
                <h3 className="font-headline font-bold text-2xl md:text-3xl mb-4 text-gradient">
                    {zone.title}
                </h3>

                {/* Spec Highlight */}
                <div className="border-l-2 border-toyota-red pl-4">
                    <p className="font-mono text-toyota-red text-sm uppercase tracking-wider mb-2">
                        {zone.spec}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                        {zone.specDetail}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export function TerrainScrollytelling() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Calculate which zone we're in (0-1 for each zone)
    const zone1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
    const zone2Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
    const zone3Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

    // Video opacities for cross-fade
    const video1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const video2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
    const video3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

    return (
        <section
            id="terrain"
            ref={containerRef}
            className="relative h-[300vh]"
        >
            {/* Sticky Video Container */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Video Layers with Cross-fade */}
                {terrainZones.map((zone, index) => {
                    const opacities = [video1Opacity, video2Opacity, video3Opacity];
                    return (
                        <motion.div
                            key={zone.id}
                            className="absolute inset-0"
                            style={{ opacity: opacities[index] }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={zone.video} type="video/mp4" />
                            </video>
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-abyss/40" />
                        </motion.div>
                    );
                })}

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-abyss via-transparent to-abyss/80" />
                <div className="absolute inset-0 bg-gradient-to-b from-abyss via-transparent to-abyss" />

                {/* Section Header */}
                <motion.div
                    className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs font-mono uppercase tracking-widest text-toyota-red mb-4">
                        Terrain Sync Technology
                    </p>
                    <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        <span className="text-gradient">One Vehicle.</span>
                        <br />
                        <span className="text-white/60">Every Terrain.</span>
                    </h2>
                </motion.div>

                {/* Spec Cards */}
                <SpecCard zone={terrainZones[0]} progress={zone1Progress.get()} />
                <SpecCard zone={terrainZones[1]} progress={zone2Progress.get()} />
                <SpecCard zone={terrainZones[2]} progress={zone3Progress.get()} />

                {/* Progress Indicator */}
                <div className="absolute left-8 bottom-8 flex flex-col gap-2">
                    {terrainZones.map((zone, index) => (
                        <motion.div
                            key={zone.id}
                            className="flex items-center gap-3"
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [index * 0.33, index * 0.33 + 0.1, (index + 1) * 0.33 - 0.1, (index + 1) * 0.33],
                                    [0.3, 1, 1, 0.3]
                                ),
                            }}
                        >
                            <div className="w-8 h-0.5 bg-white/30 overflow-hidden">
                                <motion.div
                                    className="h-full bg-toyota-red"
                                    style={{
                                        width: useTransform(
                                            scrollYProgress,
                                            [index * 0.33, (index + 1) * 0.33],
                                            ["0%", "100%"]
                                        ),
                                    }}
                                />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                                {zone.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
