"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
    Mic2,
    Building2,
    Briefcase,
    User,
    Sparkles,
    ChevronRight,
    Award,
    MessageSquare,
} from "lucide-react";
import Image from "next/image";

/* ─────────── SPEAKER DATA ─────────── */

const speakers = [
    {
        name: "Soham Deshmukh",
        designation: "Captain",
        company: "AWS Cloud Club - SCOE",
        topic: "Beyond the Console: Leading the Next Generation of Cloud Builders",
        image: "/speakers/soham-deshmukh.jpeg",
        featured: false,
        gradient: "from-teal-500 to-emerald-600",
        tag: "Speaker",
    },
    {
        name: "Bhoomi Raut",
        designation: "AWS Community Builder",
        company: "Persistent Systems",
        topic: "Kiro : Spec Driven Development",
        image: "/speakers/bhoomi-raut.png",
        featured: false,
        gradient: "from-violet-500 to-purple-600",
        tag: "Community Builder",
    },
    {
        name: "Vishal Alhat",
        designation: "Developer Advocate",
        company: "AWS",
        topic: "Keynote",
        image: "/speakers/vishal-alhat.jpg",
        featured: true,
        gradient: "from-[#ff9900] to-[#e68800]",
        tag: "Keynote Speaker",
    },
    {
        name: "Ramandeep Chandna",
        designation: "Systems Engineering Manager - AWS",
        company: "EPAM Systems",
        topic: "From Student to AWS Golden Jacket - Building Your Cloud Future",
        image: "/speakers/IMG-20260131-WA0099~2 - Ramandeep Chandna.jpg",
        featured: false,
        gradient: "from-[#ff9900] to-amber-600",
        tag: "AWS Expert",
    },
    {
        name: "Rahul Shivalkar",
        designation: "Lead DevOps Engineer",
        company: "EPAM",
        topic: "Building an Event-Driven Three-Tier Application on AWS",
        image: "/speakers/IMG_1684 - Rahul Shivalkar.jpg",
        featured: false,
        gradient: "from-blue-500 to-cyan-600",
        tag: "DevOps Lead",
    },
    {
        name: "Tribhuvan Mishra",
        designation: "Cloud Infra Specialist",
        company: "Wipro Technologies",
        topic: "Building Production-Ready GenAI Applications on AWS",
        image: "/speakers/IMG_1774 - Tribhuban Mishra.png",
        featured: false,
        gradient: "from-emerald-500 to-teal-600",
        tag: "Cloud Specialist",
    },
    {
        name: "Himanshu Sangshetti",
        designation: "Solutions Associate",
        company: "ZS",
        topic: "Building Stateful Systems with Lambda Durable Functions, EventBridge, and Step Functions",
        image: "/speakers/1730829822070 - Himanshu Sangshetti.jpeg",
        featured: false,
        gradient: "from-rose-500 to-pink-600",
        tag: "Solutions Expert",
    },
    {
        name: "Ganesh Rajesh Lad",
        designation: "COE",
        company: "Cloudera Inc.",
        topic: "Application or website hosting on aws using loadbalancing and auto scaling with High availability",
        image: "/speakers/IMG_8583 - Ganesh Taware.jpeg",
        featured: false,
        gradient: "from-amber-500 to-orange-600",
        tag: "Workshop Lead",
    },
    
    {
        name: "Sankalp Paranjpe",
        designation: "Cloud Security Consultant",
        company: "Big4 Consulting",
        topic: "Introduction to AWS MCP Servers",
        image: "/speakers/sankalp-paranjpe.JPG",
        featured: false,
        gradient: "from-cyan-500 to-blue-600",
        tag: "Security Consultant",
    },
    {
        name: "Abhishek Maurya",
        designation: "Senior Cloud Engineer",
        company: "Orange Business India",
        topic: "But It Works on My Machine!: A Student's Guide to Docker, CI/CD, and Cloud Deployments",
        image: "/speakers/IMG_7376 - Abhishek.JPG",
        featured: false,
        gradient: "from-fuchsia-500 to-purple-600",
        tag: "Cloud Engineer",
    },
];

/* ─────────── HELPERS ─────────── */

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

/* ─────────── SPEAKER PROFILE ─────────── */

const SpeakerProfile = ({
    speaker,
    index,
    isInView,
}: {
    speaker: (typeof speakers)[0];
    index: number;
    isInView: boolean;
}) => {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            className="flex flex-col items-center justify-center text-center p-6 group"
        >
            {/* Avatar container with glow */}
            <div className="relative mb-5">
                {/* Subtle outer glow that intensifies on hover */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${speaker.gradient} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Glowing border ring */}
                <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[2px] bg-gradient-to-b from-white/20 via-primary/30 to-transparent relative z-10 transition-transform duration-500 group-hover:scale-105`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-card">
                        {speaker.image && !imgError ? (
                            <Image
                                src={speaker.image}
                                alt={speaker.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${speaker.gradient} flex items-center justify-center`}>
                                <span className="text-white text-2xl font-bold">
                                    {getInitials(speaker.name)}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="flex flex-col items-center">
                <h3 className="font-montserrat font-black text-white text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-2">
                    {speaker.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/60 max-w-[200px] leading-snug font-medium">
                    {speaker.designation}{speaker.company ? `, ${speaker.company}` : ""}
                </p>
            </div>
        </motion.div>
    );
};

/* ─────────── MAIN SECTION ─────────── */

const Speakers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const featuredSpeaker = speakers.find((s) => s.featured)!;
    const otherSpeakers = speakers.filter((s) => !s.featured);

    return (
        <section ref={ref} id="speakers" className="section-padding relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
            </div>

            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold tracking-widest text-white sm:text-5xl lg:text-6xl uppercase font-montserrat">
                        Speakers
                    </h2>
                </motion.div>

                {/* Speaker Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
                    {speakers.map((speaker, index) => (
                        <SpeakerProfile
                            key={speaker.name}
                            speaker={speaker}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Bottom shine bar */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                />
            </div>

            {/* Custom slow spin animation */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                :global(.animate-spin-slow) {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Speakers;
