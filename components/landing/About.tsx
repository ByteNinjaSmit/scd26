"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
    { value: 600, suffix: "+", label: "devs attending in-person" },
    { value: 10, suffix: "+", label: "legendary tech speakers" },
    { value: 12, suffix: "+", label: "deep-dive sessions on tech" },
];

const focusAreas = [
    {
        title: "EXPERT-LED\nSESSIONS",
        gradient: "bg-gradient-to-r from-violet-400 to-indigo-600",
        items: [
            "Learn from AWS professionals and industry leaders sharing real-world insights and best practices.",
            "Explore architectural patterns and live demonstrations for scalable cloud solutions.",
            "Get exclusive tips on optimizing performance and security for large-scale deployments."
        ]
    },
    {
        title: "AGENTIC AI &\nGENAI",
        gradient: "bg-gradient-to-r from-amber-400 to-orange-600",
        items: [
            "Dive deep into the latest advancements in AI, building autonomous agents, and scaling GenAI applications.",
            "Integrate Foundation Models with Amazon Bedrock and troubleshoot production scaling challenges.",
            "Master Prompt Engineering and Retrieval-Augmented Generation (RAG) for smarter AI responses."
        ]
    },
    {
        title: "NETWORKING\nOPPORTUNITIES",
        gradient: "bg-gradient-to-r from-pink-400 to-red-600",
        items: [
            "Connect with peers, speakers, and cloud professionals through breakout discussions and group coding.",
            "Build meaningful relationships and professional connections that last beyond the event day.",
            "Interact with AWS Community Builders and Heroes about global community leadership and growth."
        ]
    },
    {
        title: "CAREER\nGROWTH",
        gradient: "bg-gradient-to-r from-lime-400 to-green-600",
        items: [
            "Gain exposure to real-world cloud use cases, career pathways, and industry-demanded skillsets.",
            "Learn how certifications and hands-on projects can accelerate your technical career trajectory.",
            "Discover internship and job opportunities in the cloud ecosystem directly from hiring experts."
        ]
    }
];

// Reusable component to animate numbers from 0 to target
const AnimatedCounter = ({ target, suffix }: { target: number, suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const duration = 2000; // Animation duration in milliseconds

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out quad function
            const easeOutProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeOutProgress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [target]);

    return (
        <span>
            {count}{suffix}
        </span>
    );
};

const About = () => {
    return (
        <section id="about" className="relative w-full overflow-hidden py-20 lg:py-32">

            {/* Wavy lines decoration - abstract implementation using SVG */}
            <div className="absolute top-10 left-0 w-[400px] h-[400px] -translate-x-1/3 opacity-[0.15] z-0 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="stroke-white stroke-[0.3] fill-none w-full h-full">
                    {[...Array(15)].map((_, i) => (
                        <path key={i} d={`M10,${40 + i * 4} Q60,${10 - i * 2} 100,${50 + i * 3} T190,${50 + i * 2}`} />
                    ))}
                </svg>
            </div>

            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] translate-x-1/3 opacity-[0.15] z-0 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="stroke-red-500 stroke-[0.3] fill-none w-full h-full">
                    {[...Array(20)].map((_, i) => (
                        <path key={i} d={`M10,${20 + i * 5} Q80,${-10 + i * 8} 120,${60 + i * 2} T190,${80 + i * 4}`} />
                    ))}
                </svg>
            </div>

            <div className="section-container relative z-10 mx-auto px-4 max-w-5xl">

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto text-center space-y-8 mb-16 px-4 md:px-10"
                >
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
AWS Student Community Day Sanjivani 2026 is the region's largest student-led cloud event, organized by the AWS Cloud Club at Sanjivani College of Engineering.
Building on the momentum of the global AWS community, this landmark event bridges the gap between classroom theory and industry-ready skills through expert-led sessions and live demonstrations.                    </p>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
This one-day conference is crafted for students and early career professionals who want to explore the latest in cloud computing, connect with peers and industry experts, and gain practical exposure to AWS.                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full md:w-11/12 border border-white/20 mb-24 bg-[#2A110B]/60 backdrop-blur-sm hover:border-white/30 transition-colors shadow-2xl">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-8 md:p-12 flex flex-col justify-center items-start border-white/10 ${index !== 0 ? 'md:border-l' : ''} ${index !== stats.length - 1 ? 'border-b md:border-b-0' : ''}`}
                            >
                                <h3 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-base md:text-lg text-white/80 max-w-[150px] leading-snug">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Areas Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        WHAT YOU'LL EXPERIENCE
                    </h2>
                </motion.div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-12 lg:gap-y-16 mx-auto mt-16 max-w-5xl">
                    {focusAreas.map((area, index) => {
                        // Create scrambled effect: Evens look slightly pulled up and left, Odds pulled down and right
                        const isEven = index % 2 === 0;
                        const staggerClass = isEven ? "md:-mt-8 md:-ml-4" : "md:mt-8 md:ml-4";
                        
                        // Alternate the rotation direction of the titles
                        const rotationClass = isEven ? "-rotate-2" : "rotate-2";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-[#3D323A]/30 backdrop-blur-md rounded-xl p-6 lg:p-8 flex flex-col border border-white/10 hover:border-white/30 hover:bg-[#3D323A]/60 transition-all duration-300 shadow-xl group ${staggerClass}`}
                            >
                                {/* Gradient Pill Title - Permanently tilted, scales on hover */}
                                <div className="flex justify-center mb-6 relative -top-12">
                                    <div className={`px-5 py-3 md:px-6 w-11/12 ${area.gradient} rounded-sm shadow-xl transform ${rotationClass} transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl`}>
                                        <h3 className="text-white font-black text-lg md:text-xl xl:text-2xl uppercase tracking-wider text-center whitespace-pre-line leading-tight drop-shadow-md">
                                            {area.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Bullet Points (Negative margin to pull list up since title is shifted up) */}
                                <ul className="space-y-5 -mt-6">
                                    {area.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start text-white/90">
                                            <span className="mr-4 mt-2 h-1 w-1 rounded-full bg-white flex-shrink-0" />
                                            <span className="text-sm md:text-[15px] font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default About;
