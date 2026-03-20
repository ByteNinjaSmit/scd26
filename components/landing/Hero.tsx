"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Ticket } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";
import LightRays from "@/components/ui/LightRays";

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
            className="mt-8 flex flex-col items-center"
        >
            <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${theme === "dark" ? "text-white/50" : "text-aws-navy/50"
                }`}>
                Event Starts In
            </div>
            <div className="flex flex-wrap justify-center gap-3">
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
        <section className="relative min-h-screen overflow-hidden transition-colors duration-300">

            {/* LightRays Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-100 mix-blend-screen">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#d4d4d4"
                    raysSpeed={0.8}
                    lightSpread={15.0}
                    rayLength={15.0}
                    followMouse={true}
                    mouseInfluence={0.15}
                    noiseAmount={0.2}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={2}
                    saturation={1}
                />
            </div>

            <div className="section-container relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
                {/* Main Content */}
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-8 flex flex-col items-center w-full"
                    >
                        <h1 className={`text-5xl sm:text-[4rem] lg:text-[6rem] xl:text-[7.25rem] font-black tracking-tighter uppercase leading-none mb-2 sm:mb-4 text-center ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>
                            AWS STUDENT
                        </h1>
                        <h2 className={`text-3xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] font-light tracking-[0.05em] sm:tracking-[0.1em] uppercase leading-none text-center ${theme === "dark" ? "text-white/90" : "text-aws-navy/90"}`}>
                            COMMUNITY DAY
                        </h2>

                        <div className="mt-6 sm:mt-8 w-full max-w-3xl">
                            <p className={`text-base sm:text-lg lg:text-2xl font-normal tracking-wide uppercase text-center ${theme === "dark" ? "text-white/90" : "text-aws-navy/90"}`}>
                                MARCH 28, 2026 • SANJIVANI COLLEGE OF ENGINEERING
                            </p>
                        </div>
                    </motion.div>

                    {/* Description */}
                    {/* <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`mb-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-white/80" : "text-aws-navy/80"
                            }`}
                    >
                        Join us for a full day of learning, networking, and innovation!
                        Discover the latest AWS technologies through hands-on workshops,
                        inspiring talks, and connect with fellow cloud enthusiasts.
                    </motion.p> */}

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <a href="https://konfhub.com/aws-student-community-day-sanjivani-2026" target="_blank" rel="noopener noreferrer" className="btn-primary group text-base px-8 py-3">
                            <Ticket className="h-5 w-5 mr-2" />
                            Register Now
                            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="#about" className={`btn-secondary text-base px-8 py-3 ${theme === "dark"
                            ? "text-white/90 border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm"
                            : "text-aws-navy border-aws-navy/30 hover:border-aws-navy/50 bg-aws-navy/5 backdrop-blur-sm"
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
                        className={`mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base font-medium ${theme === "dark" ? "text-white/80" : "text-aws-navy/80"
                            }`}
                    >
                        <div className="flex items-center gap-2 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span>7:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>Kopargaon, Maharashtra</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
                            <Users className="h-5 w-5 text-primary" />
                            <span>500+ Attendees</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
