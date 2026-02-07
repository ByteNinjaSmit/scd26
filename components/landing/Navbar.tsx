"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Speakers", href: "#speakers" },
    { name: "Agenda", href: "#agenda" },
    { name: "Tickets", href: "#tickets" },
    { name: "Venue", href: "#venue" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme, mounted } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-aws-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <div className="section-container">
                    <nav className="flex h-16 items-center justify-between sm:h-20">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2 sm:gap-3 sm:-ml-4 md:-ml-6 lg:-ml-9">
                            {mounted && (
                                <Image
                                    src={theme === "dark" || isScrolled
                                        ? "/Gemini_Generated_Image_drzn1hdrzn1hdrzn (1).png"
                                        : "/AWSCC_logo_Sanjivani (2).png"
                                    }
                                    alt="AWS Cloud Club Logo"
                                    width={80}
                                    height={80}
                                    className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
                                />
                            )}
                            <span className={`text-base font-bold sm:text-lg md:text-xl ${isScrolled || theme === "dark" ? "text-white" : "text-aws-navy"
                                }`}>
                                AWS <span className="text-primary">Cloud Club</span>
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden items-center gap-6 md:flex">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all ${isScrolled || theme === "dark"
                                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30"
                                    : "border-aws-navy/20 bg-aws-navy/10 text-aws-navy hover:bg-aws-navy/20 hover:border-aws-navy/30"
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {mounted ? (
                                    theme === "dark" ? (
                                        <Sun className="h-4 w-4" />
                                    ) : (
                                        <Moon className="h-4 w-4" />
                                    )
                                ) : (
                                    <Sun className="h-4 w-4 opacity-0" />
                                )}
                            </button>

                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled || theme === "dark" ? "text-white/70" : "text-aws-navy/70"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#tickets"
                                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                            >
                                Get Tickets
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${isScrolled || theme === "dark" ? "text-white" : "text-aws-navy"
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-aws-navy pt-20 md:hidden"
                    >
                        <div className="section-container">
                            <div className="flex flex-col gap-4 py-8">
                                {/* Mobile Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-3 text-lg font-medium text-white/80 transition-colors hover:text-primary"
                                    aria-label="Toggle theme"
                                >
                                    {mounted && (
                                        theme === "dark" ? (
                                            <>
                                                <Sun className="h-5 w-5" />
                                                <span>Light Mode</span>
                                            </>
                                        ) : (
                                            <>
                                                <Moon className="h-5 w-5" />
                                                <span>Dark Mode</span>
                                            </>
                                        )
                                    )}
                                </button>

                                <div className="h-px bg-white/20" />

                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-white/80 transition-colors hover:text-primary"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#tickets"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mt-4 w-full rounded-lg bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
                                >
                                    Get Tickets
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
