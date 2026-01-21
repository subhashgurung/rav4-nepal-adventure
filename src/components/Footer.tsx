"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ExternalLink, Instagram, Youtube, Twitter } from "lucide-react";
import { ReserveButton } from "./ReserveButton";

const footerLinks = [
    { name: "Build & Price", href: "#" },
    { name: "Find a Dealer", href: "#" },
    { name: "Compare Models", href: "#" },
    { name: "Owners", href: "#" },
];

const socialLinks = [
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { name: "YouTube", icon: <Youtube size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
];

function MouseFollowTagline() {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const relativeX = e.clientX - rect.left - centerX;
            const relativeY = e.clientY - rect.top - centerY;

            mouseX.set(relativeX * 0.1);
            mouseY.set(relativeY * 0.1);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            return () => container.removeEventListener("mousemove", handleMouseMove);
        }
    }, [mouseX, mouseY]);

    // Rotation based on mouse position
    const rotateX = useTransform(y, [-20, 20], [5, -5]);
    const rotateY = useTransform(x, [-20, 20], [-5, 5]);

    return (
        <div ref={containerRef} className="relative py-16 md:py-24 overflow-hidden">
            <motion.div
                className="text-center"
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    transformPerspective: 1000,
                }}
            >
                <motion.p
                    className="text-xs font-mono uppercase tracking-widest text-white/30 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Toyota Nepal
                </motion.p>
                <motion.h2
                    className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-toyota-red">Let&apos;s Go</span>
                    <br />
                    <span className="text-white">Places.</span>
                </motion.h2>
            </motion.div>

            {/* Glow effect */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-toyota-red/10 rounded-full blur-3xl pointer-events-none"
                style={{ x, y }}
            />
        </div>
    );
}

export function Footer() {
    return (
        <footer
            id="footer"
            className="relative bg-void border-t border-white/5"
        >
            {/* Interactive Tagline Section */}
            <MouseFollowTagline />

            {/* Reserve CTA */}
            <div className="flex justify-center pb-12">
                <ReserveButton />
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-toyota-red rounded-full flex items-center justify-center">
                                <span className="text-white font-bold font-headline">T</span>
                            </div>
                            <div>
                                <p className="font-headline font-bold text-xl">RAV4</p>
                                <p className="text-xs font-mono text-white/50">Nepal Adventure Edition</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                            Experience the thrill of Nepal&apos;s untamed landscapes with the most capable RAV4 ever built. From the high deserts of Mustang to the monsoon trails of Terai.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-toyota-red transition-colors flex items-center gap-2 group"
                                    >
                                        {link.name}
                                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-6">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-toyota-red hover:border-toyota-red/50 transition-all"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30 font-mono">
                        © 2026 Toyota Motor Corporation. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                            Terms of Use
                        </a>
                        <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
                            Accessibility
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
