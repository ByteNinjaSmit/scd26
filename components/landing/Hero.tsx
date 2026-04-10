"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Trophy, Image as ImageIcon, Bell, Mic } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import LightRays from "@/components/ui/LightRays";

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section className="relative min-h-screen overflow-hidden transition-colors duration-300">

            {/* LightRays Background - UNCHANGED as per user request */}
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

                    {/* Mission Accomplished Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md flex items-center gap-3 shadow-golden"
                    >
                        <Trophy className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-sm sm:text-base font-black tracking-[0.05em] uppercase text-primary">
                            MISSION ACCOMPLISHED • MARCH 28, 2026 • SANJIVANI COLLEGE OF ENGINEERING
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-4 flex flex-col items-center w-full"
                    >
                        <h1 className={`text-5xl sm:text-[4rem] lg:text-[6rem] xl:text-[7.25rem] font-black tracking-tighter uppercase leading-none mb-2 sm:mb-4 text-center ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>
                            AWS STUDENT
                        </h1>
                        <h2 className={`text-3xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] font-light tracking-[0.05em] sm:tracking-[0.1em] uppercase leading-none text-center ${theme === "dark" ? "text-white/90" : "text-aws-navy/90"}`}>
                            COMMUNITY DAY
                        </h2>

                        <div className="mt-6 sm:mt-2 w-full max-w-4xl">
                            <p className={`text-lg sm:text-xl lg:text-3xl font-medium tracking-wide uppercase text-center ${theme === "dark" ? "text-white/90" : "text-aws-navy/90"}`}>
                                WAS A <span className="text-primary font-black drop-shadow-sm">PATH-BREAKING SUCCESS</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Description - Brief Recap */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`mb-3 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-white/70" : "text-aws-navy/70"
                            }`}
                    >
                        A huge thank you to the 500+ attendees, visionary speakers, and our 
                        dedicated organizers for making SCD Sanjivani 2026 the region's 
                        premier cloud celebration.
                    </motion.p>

                    {/* CTAs - Updated for post-event */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <a href="/glimpse" className="btn-primary group text-base px-10 py-4 bg-primary hover:scale-105 transition-transform">
                            <ImageIcon className="h-5 w-5 mr-3 fill-white" />
                            Gallery
                            <ArrowRight className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="#community" className={`btn-secondary text-base px-10 py-4 rounded-xl border-2 ${theme === "dark"
                            ? "text-white/90 border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm"
                            : "text-aws-navy border-aws-navy/30 hover:border-aws-navy/50 bg-aws-navy/5 backdrop-blur-sm"
                            } transition-all hover:scale-105`}>
                            <Bell className="h-5 w-5 mr-3" />
                            Stay Connected
                        </a>
                    </motion.div>

                    {/* Event Stats - Horizontal Line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className={`mt-16 flex flex-row items-center justify-center gap-8 sm:gap-20 border-t ${theme === "dark" ? "border-white/10" : "border-aws-navy/10"} pt-12 w-full max-w-5xl overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0`}
                    >
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-2xl bg-primary/10 mb-4 transition-transform group-hover:scale-110">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <span className={`text-4xl font-black ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>500+</span>
                            <span className={`text-[11px] font-bold uppercase tracking-[0.2em] mt-2 ${theme === "dark" ? "text-white/40" : "text-aws-navy/40"}`}>Attendees</span>
                        </div>
                        
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-2xl bg-primary/10 mb-4 transition-transform group-hover:scale-110">
                                <Mic className="w-6 h-6 text-primary" />
                            </div>
                            <span className={`text-4xl font-black ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>10</span>
                            <span className={`text-[11px] font-bold uppercase tracking-[0.2em] mt-2 ${theme === "dark" ? "text-white/40" : "text-aws-navy/40"}`}>Speakers</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="flex items-center justify-center w-12 h-12 mb-4 relative">
                                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                                <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />
                            </div>
                            <span className={`text-4xl font-black ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>SCD '27</span>
                            <span className={`text-[11px] font-bold uppercase tracking-[0.2em] mt-2 ${theme === "dark" ? "text-white/40" : "text-aws-navy/40"}`}>Coming Soon</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
