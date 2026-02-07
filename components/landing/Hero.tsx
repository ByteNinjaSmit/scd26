"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Cloud, Code2, Users, Ticket } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const floatingBadges = [
    { icon: Cloud, label: "Cloud Computing", delay: 0 },
    { icon: Code2, label: "Hands-on Labs", delay: 0.2 },
    { icon: Users, label: "Networking", delay: 0.4 },
];

const stats = [
    { value: "3", label: "Learning Tracks" },
    { value: "15+", label: "Expert Speakers" },
    { value: "500+", label: "Attendees" },
    { value: "Free", label: "Registration", highlight: true },
];

const Hero = () => {
    const { theme, mounted } = useTheme();

    return (
        <section className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${theme === "dark"
            ? "bg-gradient-to-br from-aws-navy-deep via-aws-navy to-[hsl(210,50%,20%)]"
            : "bg-gradient-to-br from-white via-slate-50 to-blue-50"
            }`}>
            {/* Animated Grid Background */}
            <div className={`hero-grid absolute inset-0 ${theme === "dark" ? "opacity-30" : "opacity-10"}`} />

            {/* Gradient Overlays */}
            <div className={`absolute inset-0 ${theme === "dark"
                ? "bg-gradient-to-b from-transparent via-transparent to-aws-navy-deep/80"
                : "bg-gradient-to-b from-transparent via-transparent to-white/80"
                }`} />
            <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[150px] rounded-full ${theme === "dark" ? "bg-aws-blue-light/10" : "bg-aws-blue/5"
                }`} />
            <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full ${theme === "dark" ? "bg-primary/10" : "bg-primary/5"
                }`} />

            {/* Floating Cloud Icon */}
            <motion.div
                className="absolute top-1/3 right-[15%] hidden lg:block"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="relative">
                    <Cloud className="h-24 w-24 text-primary/40" strokeWidth={1} />
                    <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full" />
                </div>
            </motion.div>

            <div className="section-container relative z-10 flex min-h-screen flex-col justify-center px-4 sm:px-6 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Date Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`mb-1 inline-flex items-center gap-2 rounded-full border backdrop-blur-sm px-4 py-2 text-sm font-medium ${theme === "dark"
                                ? "border-white/20 bg-white/5 text-white/90"
                                : "border-aws-navy/20 bg-aws-navy/5 text-aws-navy"
                                }`}
                        >
                            <Calendar className="h-4 w-4 text-primary" />
                            March 2026 • Sanjivani College of Engineering
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${theme === "dark" ? "text-white" : "text-aws-navy"
                                }`}
                        >
                            AWS Student
                            <span className="block text-gradient-orange">Community Day</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`mx-auto lg:mx-0 mb-4 max-w-xl text-base sm:text-lg leading-relaxed ${theme === "dark" ? "text-white/60" : "text-aws-navy/70"
                                }`}
                        >
                            Join us for a full day of learning, networking, and innovation!
                            Discover the latest AWS technologies through hands-on workshops,
                            inspiring talks, and connect with fellow cloud enthusiasts.
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mb-5 grid grid-cols-2 gap-4 sm:grid-cols-4"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className={`text-2xl font-bold sm:text-3xl ${stat.highlight ? 'text-primary' : theme === "dark" ? 'text-white' : 'text-aws-navy'}`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-xs sm:text-sm ${theme === "dark" ? "text-white/50" : "text-aws-navy/60"}`}>{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <a href="#tickets" className="btn-primary group text-base">
                                <Ticket className="h-4 w-4" />
                                Register Now
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#about" className={`btn-secondary text-base ${theme === "dark"
                                ? "text-white/80 border-white/20 hover:border-white/40"
                                : "text-aws-navy border-aws-navy/30 hover:border-aws-navy/50"
                                }`}>
                                Learn More
                            </a>
                        </motion.div>

                        {/* Event Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm ${theme === "dark" ? "text-white/60" : "text-aws-navy/70"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>8:00 AM - 5:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Kopargaon, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span>Students & Professionals Welcome</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Floating Badges */}
                    <div className="relative hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Central Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />

                            {/* Floating Badges */}
                            {floatingBadges.map((badge, index) => {
                                const positions = [
                                    { top: "10%", right: "10%" },
                                    { bottom: "30%", right: "0%" },
                                    { bottom: "10%", left: "20%" },
                                ];
                                return (
                                    <motion.div
                                        key={badge.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + badge.delay }}
                                        style={positions[index] as React.CSSProperties}
                                        className="absolute"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                                            className={`flex items-center gap-3 rounded-2xl border backdrop-blur-md px-5 py-3 shadow-lg ${theme === "dark"
                                                ? "border-white/10 bg-white/5"
                                                : "border-aws-navy/10 bg-white/80"
                                                }`}
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                                                <badge.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className={`font-medium ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>{badge.label}</span>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}

                            {/* AWS Logo Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className={`flex h-24 w-24 items-center justify-center rounded-2xl border backdrop-blur-md ${theme === "dark" ? "border-white/10 bg-white/5" : "border-aws-navy/10 bg-white/80"
                                    }`}>
                                    <span className="text-3xl font-bold text-primary">AWS</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;
