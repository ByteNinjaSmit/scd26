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

/* ─────────── DATA ─────────── */

const morningSchedule = [
    { time: "7:00 – 9:00", title: "Registration & Breakfast", subtitle: "Networking", icon: Coffee, accent: "#f59e0b" },
    { time: "9:00 – 9:30", title: "Guest Arrival | Saraswati Pooja | Felicitation", subtitle: "SCD Kickstart", icon: Sparkles, accent: "#a855f7" },
    { time: "9:30 – 10:30", title: "Welcome Note", subtitle: "College Administration Address", icon: GraduationCap, accent: "#3b82f6" },
    { time: "10:30 – 11:10", title: "Vishal Alhat", subtitle: "Keynote Address", icon: Mic2, accent: "#ff9900" },
    { time: "11:10 – 11:50", title: "Panel Discussion", subtitle: "Industry-Academia Connect", icon: MessageSquare, accent: "#10b981" },
    { time: "11:50 – 12:25", title: "Bhoomi Raut", subtitle: "Kiro : SDD", icon: Presentation, accent: "#f43f5e" },
    { time: "12:25 – 13:00", title: "Sponsor Reserved", subtitle: "", icon: Users, accent: "#64748b" },
    { time: "13:00 – 14:15", title: "Lunch & Networking", subtitle: "", icon: Utensils, accent: "#22c55e" },
];

const tracks = [
    {
        name: "Track 1",
        venue: "Banquet Hall / Annual Edition",
        icon: Monitor,
        gradient: "from-[#ff9900] to-[#e68800]",
        accentBorder: "border-orange-200 dark:border-orange-800/50",
        cardAccentBg: "bg-orange-50/80 dark:bg-orange-950/20",
        accent: "#ff9900",
        sessions: [
            { time: "14:15 – 14:50", speaker: "Ramandeep Chandna", title: "From Student to AWS Golden Jacket – Building Your Cloud Future" },
            { time: "14:50 – 15:25", speaker: "Abhishek Maurya", title: '"But It Works on My Machine!": A Student\'s Guide to Docker, CI/CD, and Cloud Deployments' },
            { time: "15:25 – 16:00", speaker: "Soham Deshmukh (tentative)", title: "" },
        ],
    },
    {
        name: "Track 2",
        venue: "Seminar Hall / DevOps",
        icon: Cloud,
        gradient: "from-[#0073bb] to-[#2e8dd6]",
        accentBorder: "border-blue-200 dark:border-blue-800/50",
        cardAccentBg: "bg-blue-50/80 dark:bg-blue-950/20",
        accent: "#0073bb",
        sessions: [
            { time: "14:15 – 14:50", speaker: "Rahul Shivalkar", title: "Building an Event-Driven Three-Tier Application on AWS" },
            { time: "14:50 – 15:25", speaker: "Sankalp Paranjpe", title: "Introduction to AWS MCP Servers" },
            { time: "15:25 – 16:00", speaker: "Himanshu Sangshetti", title: "Building Stateful Systems with Lambda Durable Functions, EventBridge, and Step Functions" },
        ],
    },
    {
        name: "Track 3",
        venue: "107 Hall SU / AI-ML",
        icon: Cpu,
        gradient: "from-emerald-500 to-teal-500",
        accentBorder: "border-emerald-200 dark:border-emerald-800/50",
        cardAccentBg: "bg-emerald-50/80 dark:bg-emerald-950/20",
        accent: "#10b981",
        sessions: [
            { time: "14:15 – 14:50", speaker: "Tribhuvan Mishra", title: "Building Production-Ready GenAI Applications on AWS" },
            { time: "14:50 – 15:25", speaker: "Varsha Verma", title: "AI-Powered Developer: Coding 10x Faster with Amazon Q" },
            { time: "15:25 – 16:00", speaker: "Ganesh Lad", title: "Application or Website Hosting on AWS Using Load Balancing and Auto Scaling with High Availability" },
        ],
    },
];

const closingSchedule = [
    { time: "16:00 – 16:30", title: "Hi-Tea", subtitle: "Soul String Performance", icon: Music, accent: "#ec4899" },
    { time: "16:30 – 17:00", title: "Closing Note", subtitle: "Goodies Distribution, Stage Action", icon: Gift, accent: "#ff9900" },
];

/* ─────────── COMPONENT ─────────── */

const Agenda = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTrack, setActiveTrack] = useState(0);

    return (
        <section
            ref={ref}
            id="agenda"
            className="section-padding relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/40"
        >
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="section-container relative z-10">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-primary"
                    >
                        <Calendar className="h-4 w-4" />
                        March 28, 2026
                    </motion.div>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Agenda of the Day
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        A packed day of learning, workshops, and networking opportunities.
                    </p>
                </motion.div>

                {/* ── MORNING TIMELINE ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Morning</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>

                    <div className="relative">
                        {/* Central timeline line (desktop) */}
                        <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-border" />

                        <div className="space-y-4 sm:space-y-6">
                            {morningSchedule.map((item, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={item.time}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                                        className={`relative flex items-start gap-4 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                                    >
                                        {/* Card */}
                                        <div className={`flex-1 sm:w-[calc(50%-28px)] ${isLeft ? "sm:pr-10" : "sm:pl-10"}`}>
                                            <div
                                                className="group relative rounded-2xl border border-border/50 bg-card p-4 sm:p-5
                                                    shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-black/20
                                                    transition-all duration-300 hover:-translate-y-0.5"
                                            >
                                                {/* Accent top stripe */}
                                                <div
                                                    className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                                    style={{ backgroundColor: item.accent }}
                                                />

                                                <div className="flex items-start gap-3 pt-1">
                                                    {/* Icon */}
                                                    <div
                                                        className="flex-shrink-0 p-2.5 rounded-xl text-white shadow-md"
                                                        style={{ backgroundColor: item.accent }}
                                                    >
                                                        <item.icon className="h-4 w-4" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                                            <span
                                                                className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white"
                                                                style={{ backgroundColor: item.accent }}
                                                            >
                                                                <Clock className="h-2.5 w-2.5" />
                                                                {item.time}
                                                            </span>
                                                        </div>
                                                        <h4 className="font-semibold text-foreground text-sm sm:text-[15px] leading-snug">
                                                            {item.title}
                                                        </h4>
                                                        {item.subtitle && (
                                                            <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                                                                {item.subtitle}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Center dot (desktop) */}
                                        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-5 z-10 items-center justify-center">
                                            <div
                                                className="w-3.5 h-3.5 rounded-full border-[3px] border-card shadow-sm"
                                                style={{ backgroundColor: item.accent }}
                                            />
                                        </div>

                                        {/* Mobile dot */}
                                        <div className="sm:hidden absolute left-6 -translate-x-1/2 top-6 z-10">
                                            <div
                                                className="w-3 h-3 rounded-full border-2 border-card"
                                                style={{ backgroundColor: item.accent }}
                                            />
                                        </div>

                                        {/* Spacer for opposite side (desktop) */}
                                        <div className="hidden sm:block sm:w-[calc(50%-28px)]" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

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
                            14:15 – 16:00
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
                    </div>

                    {/* Tab switcher (all screens) */}
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
                    <div className="relative">
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
                                    <div>
                                        {/* Track header card */}
                                        <div
                                            className={`rounded-2xl bg-gradient-to-r ${track.gradient} p-5 sm:p-6 mb-5 relative overflow-hidden`}
                                        >
                                            {/* Decorative circles */}
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

                                        {/* Sessions grid */}
                                        <div className="grid gap-4 sm:grid-cols-3">
                                            {track.sessions.map((session, sIdx) => (
                                                <motion.div
                                                    key={sIdx}
                                                    initial={{ opacity: 0, y: 12 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: sIdx * 0.08 }}
                                                    className={`group relative rounded-2xl border ${track.accentBorder} ${track.cardAccentBg} p-5
                                                        hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black/20 hover:-translate-y-0.5
                                                        transition-all duration-300`}
                                                >
                                                    {/* Session number badge */}
                                                    <div
                                                        className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white shadow-md"
                                                        style={{ backgroundColor: track.accent }}
                                                    >
                                                        {sIdx + 1}
                                                    </div>

                                                    <span
                                                        className="inline-flex items-center gap-1 text-[11px] font-bold text-white px-2.5 py-1 rounded-lg mb-3"
                                                        style={{ backgroundColor: track.accent }}
                                                    >
                                                        <Clock className="h-3 w-3" />
                                                        {session.time}
                                                    </span>

                                                    <h5 className="font-bold text-foreground text-base mb-1.5">
                                                        {session.speaker}
                                                    </h5>

                                                    {session.title && (
                                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                                            {session.title}
                                                        </p>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>
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
                    className="mb-10"
                >
                    {/* Section label */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-pink-500 dark:text-pink-400">Closing</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-pink-500/30 to-transparent" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {closingSchedule.map((item, index) => (
                            <motion.div
                                key={item.time}
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.45 + index * 0.08 }}
                                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-5 sm:p-6
                                    shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-black/20
                                    hover:-translate-y-0.5 transition-all duration-300"
                            >
                                {/* Colored left accent bar */}
                                <div
                                    className="absolute left-0 top-3 bottom-3 w-1 rounded-full"
                                    style={{ backgroundColor: item.accent }}
                                />

                                <div className="flex items-start gap-4 pl-3">
                                    <div
                                        className="flex-shrink-0 p-3 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: item.accent }}
                                    >
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <span
                                            className="inline-flex items-center gap-1 text-[11px] font-bold text-white px-2.5 py-0.5 rounded-full mb-2"
                                            style={{ backgroundColor: item.accent }}
                                        >
                                            <Clock className="h-2.5 w-2.5" />
                                            {item.time}
                                        </span>
                                        <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                                        {item.subtitle && (
                                            <p className="text-muted-foreground text-sm mt-0.5">{item.subtitle}</p>
                                        )}
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
