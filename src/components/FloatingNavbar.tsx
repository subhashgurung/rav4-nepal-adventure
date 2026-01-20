"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "Terrain", href: "#terrain" },
    { name: "Specs", href: "#specs" },
    { name: "Build Yours", href: "#footer" },
];

export function FloatingNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const { scrollY } = useScroll();

    // Transform values for the morphing effect
    const navWidth = useTransform(scrollY, [0, 100], ["90%", "auto"]);
    const navPadding = useTransform(scrollY, [0, 100], ["1.5rem 2rem", "0.75rem 1.5rem"]);
    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0.02)", "rgba(0, 0, 0, 0.6)"]
    );
    const navBlur = useTransform(scrollY, [0, 100], ["blur(10px)", "blur(30px)"]);
    const borderRadius = useTransform(scrollY, [0, 100], ["1.5rem", "9999px"]);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 nav-island"
                style={{
                    width: navWidth,
                    maxWidth: hasScrolled ? "fit-content" : "1200px",
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.div
                    className="flex items-center justify-between border border-white/10"
                    style={{
                        padding: navPadding,
                        background: navBackground,
                        backdropFilter: navBlur,
                        WebkitBackdropFilter: navBlur,
                        borderRadius: borderRadius,
                    }}
                >
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-8 h-8 bg-toyota-red rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm font-headline">T</span>
                        </div>
                        <motion.span
                            className="font-headline font-bold text-lg tracking-wider"
                            style={{
                                opacity: useTransform(scrollY, [0, 100], [1, 0]),
                                width: useTransform(scrollY, [0, 100], ["auto", "0px"]),
                                overflow: "hidden",
                            }}
                        >
                            RAV4
                        </motion.span>
                    </motion.a>

                    {/* Desktop Nav Links */}
                    <motion.div
                        className="hidden md:flex items-center gap-8"
                        style={{
                            opacity: useTransform(scrollY, [0, 100], [1, 1]),
                        }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors relative group"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-toyota-red group-hover:w-full transition-all duration-300" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>

                {/* Mobile Menu */}
                <motion.div
                    className="md:hidden mt-2 overflow-hidden"
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="glass rounded-2xl p-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.nav>
        </>
    );
}
