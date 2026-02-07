"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Cloud, Code2, Users, Ticket, Zap, Server, Database } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import { useState, useEffect } from "react";

const floatingBadges = [
    { icon: Cloud, label: "Cloud Computing", color: "from-orange-500 to-amber-500" },
    { icon: Code2, label: "Hands-on Labs", color: "from-blue-500 to-cyan-500" },
    { icon: Users, label: "Networking", color: "from-violet-500 to-purple-500" },
];

const orbitIcons = [
    { icon: Server, delay: 0 },
    { icon: Database, delay: 0.5 },
    { icon: Zap, delay: 1 },
    { icon: Cloud, delay: 1.5 },
];

// Countdown Timer Component
const CountdownTimer = () => {
    const { theme } = useTheme();
    const targetDate = new Date("2026-03-28T07:00:00+05:30").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const timeUnits = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
        >
            <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${theme === "dark" ? "text-white/50" : "text-aws-navy/50"
                }`}>
                Event Starts In
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={unit.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className={`relative overflow-hidden rounded-2xl border backdrop-blur-md px-4 py-3 min-w-[70px] sm:min-w-[80px] text-center ${theme === "dark"
                            ? "border-white/10 bg-white/5"
                            : "border-aws-navy/10 bg-aws-navy/5"
                            }`}
                    >
                        {/* Animated gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-50" />
                        <motion.div
                            key={unit.value}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`relative text-2xl sm:text-3xl font-bold ${theme === "dark" ? "text-white" : "text-aws-navy"
                                }`}
                        >
                            {String(unit.value).padStart(2, "0")}
                        </motion.div>
                        <div className={`relative text-[10px] sm:text-xs uppercase tracking-wider mt-1 ${theme === "dark" ? "text-white/60" : "text-aws-navy/60"
                            }`}>
                            {unit.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Hero = () => {
    const { theme } = useTheme();

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
                            28th March 2026 • Sanjivani College of Engineering
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
                            className={`mx-auto lg:mx-0 mb-6 max-w-xl text-base sm:text-lg leading-relaxed ${theme === "dark" ? "text-white/60" : "text-aws-navy/70"
                                }`}
                        >
                            Join us for a full day of learning, networking, and innovation!
                            Discover the latest AWS technologies through hands-on workshops,
                            inspiring talks, and connect with fellow cloud enthusiasts.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <a href="https://konfhub.com/aws-student-community-day-sanjivani-2026" target="_blank" rel="noopener noreferrer" className="btn-primary group text-base">
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

                        {/* Countdown Timer */}
                        <CountdownTimer />

                        {/* Event Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className={`mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm ${theme === "dark" ? "text-white/60" : "text-aws-navy/70"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>7:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Kopargaon, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span>500+ Attendees Expected</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Premium Hero Visual */}
                    <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
                        {/* Background Glow Effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/30 blur-[100px]" />
                        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500/20 blur-[80px]" />
                        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-violet-500/20 blur-[80px]" />

                        {/* Animated Orbit Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[420px] h-[420px] rounded-full border border-primary/20"
                            style={{ borderStyle: 'dashed' }}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[320px] h-[320px] rounded-full border border-primary/30"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[220px] h-[220px] rounded-full border border-primary/40"
                            style={{ borderStyle: 'dashed' }}
                        />

                        {/* Orbiting Small Icons */}
                        {orbitIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15 + index * 5, repeat: Infinity, ease: "linear", delay: item.delay }}
                                className="absolute w-[380px] h-[380px]"
                                style={{ transformOrigin: 'center center' }}
                            >
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15 + index * 5, repeat: Infinity, ease: "linear", delay: item.delay }}
                                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-sm shadow-lg ${theme === "dark" ? "bg-white/10 border border-white/20" : "bg-white border border-gray-200"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5 text-primary" />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Center AWS Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-20"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className={`relative flex h-32 w-32 items-center justify-center rounded-3xl border-2 shadow-2xl ${theme === "dark"
                                    ? "border-primary/50 bg-gradient-to-br from-aws-navy to-aws-navy-deep"
                                    : "border-primary/30 bg-gradient-to-br from-white to-slate-100"
                                    }`}
                            >
                                {/* Inner glow */}
                                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
                                <Image
                                    src="/aws-logo.svg"
                                    alt="AWS"
                                    width={80}
                                    height={80}
                                    className="relative z-10"
                                    onError={(e) => {
                                        // Fallback to text if image fails
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <span className="text-4xl font-bold text-primary relative z-10">AWS</span>
                            </motion.div>
                        </motion.div>

                        {/* Floating Feature Cards */}
                        {floatingBadges.map((badge, index) => {
                            const positions = [
                                { top: '5%', right: '0%' },
                                { bottom: '15%', right: '-5%' },
                                { bottom: '5%', left: '0%' },
                            ];
                            const delays = [0.4, 0.6, 0.8];

                            return (
                                <motion.div
                                    key={badge.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: delays[index] }}
                                    className="absolute"
                                    style={positions[index]}
                                >
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                                        className={`flex items-center gap-3 rounded-2xl border backdrop-blur-md px-4 py-3 shadow-xl ${theme === "dark"
                                            ? "border-white/10 bg-white/5"
                                            : "border-gray-200 bg-white/90"
                                            }`}
                                    >
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${badge.color}`}>
                                            <badge.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <span className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>
                                            {badge.label}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Decorative floating particles */}
                        {[
                            { top: '25%', left: '30%', duration: 3, delay: 0 },
                            { top: '35%', left: '70%', duration: 3.5, delay: 0.5 },
                            { top: '55%', left: '25%', duration: 4, delay: 1 },
                            { top: '65%', left: '65%', duration: 3.2, delay: 1.5 },
                            { top: '45%', left: '50%', duration: 4.5, delay: 0.8 },
                            { top: '75%', left: '40%', duration: 3.8, delay: 1.2 },
                        ].map((particle, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-primary/40"
                                style={{
                                    top: particle.top,
                                    left: particle.left,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                    duration: particle.duration,
                                    repeat: Infinity,
                                    delay: particle.delay,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
