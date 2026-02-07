"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Cloud, Code2, Users, Ticket } from "lucide-react";

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
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-aws-navy-deep via-aws-navy to-[hsl(210,50%,20%)]">
            {/* Animated Grid Background */}
            <div className="hero-grid absolute inset-0 opacity-30" />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-aws-navy-deep/80" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-aws-blue-light/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

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

            <div className="section-container relative z-10 flex min-h-screen flex-col justify-center py-24 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Date Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90"
                        >
                            <Calendar className="h-4 w-4 text-primary" />
                            March 2026 • Sanjivani College of Engineering
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                        >
                            AWS Student
                            <span className="block text-gradient-orange">Community Day</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto lg:mx-0 mb-8 max-w-xl text-base text-white/60 sm:text-lg leading-relaxed"
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
                            className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className={`text-2xl font-bold sm:text-3xl ${stat.highlight ? 'text-primary' : 'text-white'}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-white/50 sm:text-sm">{stat.label}</div>
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
                            <a href="#about" className="btn-secondary text-white/80 border-white/20 hover:border-white/40 text-base">
                                Learn More
                            </a>
                        </motion.div>

                        {/* Event Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60"
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
                                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3 shadow-lg"
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                                                <badge.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className="font-medium text-white">{badge.label}</span>
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
                                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                                    <span className="text-3xl font-bold text-primary">AWS</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-white/40"
                    >
                        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                        <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="h-2 w-2 rounded-full bg-primary"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
