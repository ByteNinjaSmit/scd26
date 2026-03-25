"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Calendar,
    Clock,
    Coffee,
    Mic2,
    Users,
    Utensils,
    Music,
    Gift,
    GraduationCap,
    Presentation,
    MessageSquare,
    Sparkles,
    Monitor,
    Cpu,
    Cloud,
} from "lucide-react";

/* ─────────── TYPES ─────────── */

interface Speaker {
    name: string;
    designation: string;
    company: string;
    gradient: string;
    image?: string;
}

interface MainStageItem {
    time: string;
    title: string;
    description?: string;
    tag?: string;
    tagColor?: string;
    speakers?: Speaker[];
}

/* ─────────── DATA ─────────── */

const mainStageSchedule: MainStageItem[] = [
    {
        time: "7:00 AM",
        title: "Registration & Breakfast | Networking",
        tag: "Check-in",
        tagColor: "bg-blue-600",
    },
    {
        time: "9:00 AM",
        title: "Guest Arrival | Saraswati Pooja | Felicitation | SCD Kickstart",
        tag: "Ceremony",
        tagColor: "bg-purple-600",
    },
    {
        time: "9:30 AM",
        title: "Welcome Note | College Administration Address",
        description: "Opening address by the college administration welcoming all attendees and setting the tone for the day.",
        tag: "Welcome",
        tagColor: "bg-blue-600",
    },
    {
        time: "10:20 AM",
        title: "Keynote Address",
        description: "The opening keynote setting the vision for cloud innovation and the future of AWS for students and professionals.",
        tag: "Keynote",
        tagColor: "bg-[#ff9900]",
        speakers: [
            {
                name: "Vishal Alhat",
                designation: "Developer Advocate",
                company: "AWS",
                gradient: "from-[#ff9900] to-[#e68800]",
                image: "", // vishal-alhat.jpg missing
            },
        ],
    },
    {
        time: "11:00 AM",
        title: "Industry-Academia Connect",
        description: "A moderated panel discussion exploring how industry and academia can collaborate to build the next generation of cloud professionals.",
        tag: "Panel Discussion",
        tagColor: "bg-emerald-600",
    },
    {
        time: "11:40 AM",
        title: "Kiro : SDD",
        description: "Explore spec-driven development with Kiro and how it transforms the way modern applications are built and deployed.",
        tag: "Tech Talk",
        tagColor: "bg-rose-600",
        speakers: [
            {
                name: "Bhoomi Raut",
                designation: "AWS Community Builder",
                company: "Persistent Systems",
                gradient: "from-violet-500 to-purple-600",
                image: "", // bhoomi-raut.jpg missing
            },
        ],
    },
    {
        time: "12:15 PM",
        title: "Building an Event-Driven Three-Tier Application on AWS",
        description: "Deep dive into building scalable, decoupled applications using AWS event-driven services.",
        tag: "Tech Talk",
        tagColor: "bg-blue-500",
        speakers: [
            {
                name: "Rahul Shivalkar",
                designation: "Lead DevOps Engineer",
                company: "EPAM",
                gradient: "from-blue-500 to-cyan-600",
                image: "/speakers/IMG_1684 - Rahul Shivalkar.jpg",
            },
        ],
    },
    {
        time: "12:50 PM",
        title: "Beyond the Console: Leading the Next Generation of Cloud Builders",
        description: "A session focused on student leadership and community building in the cloud ecosystem.",
        tag: "Community",
        tagColor: "bg-teal-600",
        speakers: [
            {
                name: "Soham Deshmukh",
                designation: "Captain",
                company: "AWS Cloud Club - SCOE",
                gradient: "from-teal-500 to-emerald-600",
                image: "", 
            },
        ],
    },
    {
        time: "1:15 PM",
        title: "Lunch & Networking",
        tag: "Break",
        tagColor: "bg-green-600",
    },
];

const tracks = [
    {
        name: "Track 1",
        venue: "Solar Banquet Hall",
        icon: Monitor,
        gradient: "from-[#ff9900] to-[#e68800]",
        accentBorder: "border-orange-200 dark:border-orange-800/50",
        cardAccentBg: "bg-orange-50/80 dark:bg-orange-950/20",
        accent: "#ff9900",
        sessions: [
            {
                time: "2:15 PM",
                speaker: "Ramandeep Chandna",
                designation: "Systems Engineering Manager - AWS",
                company: "EPAM Systems",
                title: "From Student to AWS Golden Jacket – Building Your Cloud Future",
                gradient: "from-[#ff9900] to-amber-600",
                image: "/speakers/IMG-20260131-WA0099~2 - Ramandeep Chandna.jpg",
            },
            {
                time: "2:50 PM",
                speaker: "Sankalp Paranjpe",
                designation: "Cloud Security Consultant",
                company: "Big4 Consulting",
                title: "Introduction to AWS MCP Servers",
                gradient: "from-cyan-500 to-blue-600",
                image: "",
            },
            {
                time: "3:25 PM",
                speaker: "Himanshu Sangshetti",
                designation: "Solutions Associate",
                company: "ZS",
                title: "Building Stateful Systems with Lambda Durable Functions, EventBridge, and Step Functions",
                gradient: "from-rose-500 to-pink-600",
                image: "/speakers/1730829822070 - Himanshu Sangshetti.jpeg",
            },
        ],
    },
    {
        name: "Track 2",
        venue: "TEDx / Seminar Hall",
        icon: Cloud,
        gradient: "from-[#0073bb] to-[#2e8dd6]",
        accentBorder: "border-blue-200 dark:border-blue-800/50",
        cardAccentBg: "bg-blue-50/80 dark:bg-blue-950/20",
        accent: "#0073bb",
        sessions: [
            {
                time: "2:15 PM",
                speaker: "Tribhuvan Mishra",
                designation: "Cloud Infra Specialist",
                company: "Wipro Technologies",
                title: "Building Production-Ready GenAI Applications on AWS",
                gradient: "from-emerald-500 to-teal-600",
                image: "/speakers/IMG_1774 - Tribhuban Mishra.png",
            },
            {
                time: "2:50 PM",
                speaker: "Abhishek Maurya",
                designation: "Senior Cloud Engineer",
                company: "Orange Business India",
                title: '"But It Works on My Machine!": A Student\'s Guide to Docker, CI/CD, and Cloud Deployments',
                gradient: "from-fuchsia-500 to-purple-600",
                image: "/speakers/IMG_7376 - Abhishek.JPG",
            },
            {
                time: "3:25 PM",
                speaker: "Ganesh Lad",
                designation: "COE",
                company: "Cloudera Inc.",
                title: "Application or website hosting on aws using loadbalancing and auto scaling with High availability",
                gradient: "from-amber-500 to-orange-600",
                image: "/speakers/IMG_8583 - Ganesh Taware.jpeg",
            },
        ],
    },
];

const closingSchedule = [
    { time: "4:00 PM", title: "Hi-Tea & Music Performance", icon: Music, accent: "#ec4899" },
    { time: "4:30 PM", title: "Closing Note & Goodies Distribution", icon: Gift, accent: "#ff9900" },
];

/* ─────────── HELPERS ─────────── */

function getInitials(name: string) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

/* ─────────── COMPONENT ─────────── */

const Agenda = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTrack, setActiveTrack] = useState(0);

    return (
        <section
            ref={ref}
            id="agenda"
            className="section-padding relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
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

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-10 text-center"
                >
                    <h2 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl uppercase">
                        Agenda
                    </h2>

                    {/* Tab buttons - Main Stage only since no workshop data */}
                    <div className="flex justify-center gap-3">
                        <button className="px-6 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold uppercase tracking-wider transition-all">
                            Main Stage
                        </button>
                    </div>
                </motion.div>

                {/* ── STAGE CARDS ── */}
                <div className="space-y-4 mb-16 max-w-5xl mx-auto">
                    {mainStageSchedule.map((item, index) => (
                        <motion.div
                            key={item.time + item.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            className="group relative bg-[#0a0a0a] border border-white/10 overflow-hidden
                                hover:border-primary/40 hover:bg-[#111111] transition-all duration-500 rounded-md
                                hover:shadow-[0_0_30px_-10px_rgba(255,153,0,0.15)]"
                        >
                            <div className="flex relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">
                                {/* LEFT: Tag + Time */}
                                <div className="flex-shrink-0 w-[140px] sm:w-[180px] p-6 flex flex-col justify-start border-r border-white/10 group-hover:border-primary/20 transition-colors duration-500">
                                    {item.tag && (
                                        <span className={`inline-flex self-start items-center text-[10px] sm:text-[11px] font-bold text-white px-3 py-1 rounded-[4px] mb-3 shadow-md ${item.tagColor}`}>
                                            {item.tag}
                                        </span>
                                    )}
                                    <span className="text-xl sm:text-2xl font-black text-white tracking-wide group-hover:text-primary transition-colors duration-300">
                                        {item.time}
                                    </span>
                                </div>

                                {/* RIGHT: Content */}
                                <div className="flex-1 p-6 flex flex-col justify-center">
                                    {/* Title */}
                                    <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2 font-montserrat">
                                        {item.title}
                                    </h4>

                                    {/* Description */}
                                    {item.description && (
                                        <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
                                            {item.description}
                                        </p>
                                    )}

                                    {/* Speakers */}
                                    {item.speakers && item.speakers.length > 0 && (
                                        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
                                            {item.speakers.map((speaker) => (
                                                <div key={speaker.name} className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${speaker.gradient} flex items-center justify-center flex-shrink-0 overflow-hidden ring-1 ring-white/10`}>
                                                        {speaker.image ? (
                                                            <div
                                                                className="w-full h-full bg-cover bg-center"
                                                                style={{ backgroundImage: `url('${speaker.image}')` }}
                                                            />
                                                        ) : (
                                                            <span className="text-white text-xs font-black">
                                                                {getInitials(speaker.name)}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex flex-col justify-center">
                                                        <p className="text-sm font-bold text-white leading-tight">
                                                            {speaker.name}
                                                        </p>
                                                        <p className="text-[12px] text-primary leading-snug">
                                                            {speaker.designation}{speaker.company ? `, ${speaker.company}` : ""}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── AFTERNOON TRACKS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-16"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">Afternoon Tracks</span>
                        <span className="text-[10px] font-medium text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded-full">
                            2:15 – 4:00 PM
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
                    </div>

                    {/* Tab switcher */}
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none lg:justify-center">
                        {tracks.map((track, idx) => (
                            <button
                                key={track.name}
                                onClick={() => setActiveTrack(idx)}
                                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300
                                    ${activeTrack === idx
                                        ? "text-white shadow-lg"
                                        : "text-muted-foreground bg-secondary/80 border border-border hover:border-primary/20 hover:text-foreground"
                                    }`}
                                style={activeTrack === idx ? { backgroundColor: track.accent } : {}}
                            >
                                <track.icon className="h-4 w-4" />
                                <span>{track.name}</span>
                                <span className={`text-[10px] font-normal ${activeTrack === idx ? "text-white/80" : "text-muted-foreground"}`}>
                                    · {track.venue.split("/")[0].trim()}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Active track content */}
                    <div className="relative max-w-5xl mx-auto">
                        {tracks.map((track, trackIdx) => (
                            <motion.div
                                key={track.name}
                                initial={false}
                                animate={{
                                    opacity: activeTrack === trackIdx ? 1 : 0,
                                    y: activeTrack === trackIdx ? 0 : 10,
                                    position: activeTrack === trackIdx ? "relative" as const : "absolute" as const,
                                }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className={`w-full ${activeTrack === trackIdx ? "" : "pointer-events-none top-0 left-0"}`}
                            >
                                {activeTrack === trackIdx && (
                                    <div className="space-y-3">
                                        {/* Track header */}
                                        <div
                                            className={`rounded-xl bg-gradient-to-r ${track.gradient} p-5 sm:p-6 relative overflow-hidden`}
                                        >
                                            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
                                            <div className="absolute -right-4 -bottom-10 w-24 h-24 rounded-full bg-white/5" />
                                            <div className="relative flex items-center gap-4">
                                                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                                    <track.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white">{track.name}</h4>
                                                    <p className="text-white/80 text-sm">{track.venue}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sessions as cards matching main stage style */}
                                        {track.sessions.map((session, sIdx) => (
                                            <motion.div
                                                key={sIdx}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: sIdx * 0.08 }}
                                                className="group relative bg-[#0a0a0a] border border-white/10 overflow-hidden
                                                    hover:bg-[#111111] transition-all duration-500 rounded-md"
                                                style={{ '&:hover': { borderColor: track.accent } } as any}
                                            >
                                                <div className="flex relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">
                                                    {/* LEFT: Time */}
                                                    <div className="flex-shrink-0 w-[140px] sm:w-[180px] p-6 flex flex-col justify-start border-r border-white/10 transition-colors duration-500 group-hover:border-white/20">
                                                        <span
                                                            className="inline-flex self-start items-center text-[10px] sm:text-[11px] font-bold text-white px-3 py-1 rounded-[4px] mb-3 shadow-md"
                                                            style={{ backgroundColor: track.accent }}
                                                        >
                                                            Session {sIdx + 1}
                                                        </span>
                                                        <span 
                                                            className="text-xl sm:text-2xl font-black text-white tracking-wide transition-colors duration-300"
                                                        >
                                                            {session.time}
                                                        </span>
                                                    </div>

                                                    {/* RIGHT: Content */}
                                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                                        <h5 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2 font-montserrat">
                                                            {session.title}
                                                        </h5>

                                                        {/* Speaker */}
                                                        <div className="mt-5 flex items-center gap-3">
                                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${session.gradient} flex items-center justify-center flex-shrink-0 overflow-hidden ring-1 ring-white/10`}>
                                                                {session.image ? (
                                                                    <div
                                                                        className="w-full h-full bg-cover bg-center"
                                                                        style={{ backgroundImage: `url('${session.image}')` }}
                                                                    />
                                                                ) : (
                                                                    <span className="text-white text-xs font-black">
                                                                        {getInitials(session.speaker)}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="min-w-0 flex flex-col justify-center">
                                                                <p className="text-sm font-bold text-white leading-tight">
                                                                    {session.speaker}
                                                                </p>
                                                                {(session.designation || session.company) && (
                                                                    <p className="text-[12px] text-primary leading-snug">
                                                                        {session.designation}{session.company ? `, ${session.company}` : ""}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── CLOSING ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-10 max-w-5xl mx-auto"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400">Closing</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-pink-500/30 to-transparent" />
                    </div>

                    <div className="space-y-3">
                        {closingSchedule.map((item, index) => (
                            <motion.div
                                key={item.time}
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.45 + index * 0.08 }}
                                className="group relative bg-[#0a0a0a] border border-white/10 overflow-hidden
                                    hover:bg-[#111111] transition-all duration-500 rounded-md"
                                style={{ '&:hover': { borderColor: item.accent } } as any}
                            >
                                <div className="flex relative z-10 transform transition-transform duration-500 group-hover:translate-x-1">
                                    {/* LEFT: Time */}
                                    <div className="flex-shrink-0 w-[140px] sm:w-[180px] p-6 flex items-center justify-start border-r border-white/10 transition-colors duration-500 group-hover:border-white/20">
                                        <span className="text-xl sm:text-2xl font-black text-white tracking-wide transition-colors duration-300">
                                            {item.time}
                                        </span>
                                    </div>

                                    {/* RIGHT: Content */}
                                    <div className="flex-1 p-6 flex items-center gap-4">
                                        <div
                                            className="flex-shrink-0 p-3 rounded-lg text-white shadow-md"
                                            style={{ backgroundColor: item.accent }}
                                        >
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug font-montserrat">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── FOOTER NOTE ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                >
                    <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">SCOE</span> – Sanjivani College of Engineering &nbsp;|&nbsp;
                        <span className="font-semibold">Solar Banquet Hall</span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Agenda;
