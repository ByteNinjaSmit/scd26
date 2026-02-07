"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, User } from "lucide-react";

const agendaTabs = [
    { id: "all", label: "All Sessions" },
    { id: "track1", label: "Track 1" },
    { id: "track2", label: "Track 2" },
    { id: "track3", label: "Track 3" },
];

const agenda = [
    {
        time: "08:00 AM - 09:00 AM",
        title: "Registration & Breakfast",
        speaker: "Event Team",
        track: "all",
        type: "General",
        level: "All",
    },
    {
        time: "09:00 AM - 10:00 AM",
        title: "Opening Keynote: The Future of Cloud Computing",
        speaker: "AWS Solutions Architect",
        track: "all",
        type: "Keynote",
        level: "All",
    },
    {
        time: "10:15 AM - 11:00 AM",
        title: "Introduction to AWS & Cloud Basics",
        speaker: "Dr. Rajesh Kumar",
        track: "track1",
        type: "Workshop",
        level: "Beginner",
    },
    {
        time: "10:15 AM - 11:00 AM",
        title: "Building Your Cloud Career Portfolio",
        speaker: "Priya Sharma",
        track: "track2",
        type: "Talk",
        level: "All",
    },
    {
        time: "10:15 AM - 11:00 AM",
        title: "Advanced Serverless Architecture Patterns",
        speaker: "Amit Patel",
        track: "track3",
        type: "Workshop",
        level: "Advanced",
    },
    {
        time: "11:15 AM - 12:00 PM",
        title: "EC2 Hands-on Lab: Your First Server",
        speaker: "Vikram Singh",
        track: "track1",
        type: "Lab",
        level: "Beginner",
    },
    {
        time: "11:15 AM - 12:00 PM",
        title: "Technical Interview Masterclass",
        speaker: "Sneha Reddy",
        track: "track2",
        type: "Talk",
        level: "All",
    },
    {
        time: "11:15 AM - 12:00 PM",
        title: "AI/ML on AWS: From Zero to Hero",
        speaker: "Ananya Gupta",
        track: "track3",
        type: "Workshop",
        level: "Intermediate",
    },
    {
        time: "12:00 PM - 01:00 PM",
        title: "Lunch & Networking",
        speaker: "All Attendees",
        track: "all",
        type: "Break",
        level: "All",
    },
    {
        time: "01:00 PM - 02:00 PM",
        title: "S3 & Storage Best Practices",
        speaker: "Rahul Deshmukh",
        track: "track1",
        type: "Workshop",
        level: "Beginner",
    },
    {
        time: "01:00 PM - 02:00 PM",
        title: "Networking Strategies for Cloud Professionals",
        speaker: "Meera Joshi",
        track: "track2",
        type: "Talk",
        level: "All",
    },
    {
        time: "01:00 PM - 02:00 PM",
        title: "Container Orchestration with EKS",
        speaker: "Amit Patel",
        track: "track3",
        type: "Workshop",
        level: "Advanced",
    },
    {
        time: "02:15 PM - 03:00 PM",
        title: "IAM & Security Fundamentals",
        speaker: "Dr. Rajesh Kumar",
        track: "track1",
        type: "Workshop",
        level: "Beginner",
    },
    {
        time: "03:15 PM - 04:00 PM",
        title: "Panel Discussion: Cloud Careers in 2026",
        speaker: "Industry Leaders",
        track: "all",
        type: "Panel",
        level: "All",
    },
    {
        time: "04:00 PM - 05:00 PM",
        title: "Closing Keynote & Networking",
        speaker: "Event Team",
        track: "all",
        type: "General",
        level: "All",
    },
];

const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
        Keynote: "bg-primary/10 text-primary",
        Workshop: "bg-emerald-500/10 text-emerald-600",
        Talk: "bg-violet-500/10 text-violet-600",
        Lab: "bg-blue-500/10 text-blue-600",
        Panel: "bg-amber-500/10 text-amber-600",
        Break: "bg-muted text-muted-foreground",
        General: "bg-muted text-muted-foreground",
    };
    return colors[type] || colors.General;
};

const Agenda = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState("all");

    const filteredAgenda = agenda.filter(
        (item) => activeTab === "all" || item.track === "all" || item.track === activeTab
    );

    return (
        <section ref={ref} id="agenda" className="section-padding bg-secondary/30">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Event Agenda
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Full Day Schedule
                    </h2>
                    <p className="text-muted-foreground">
                        A packed day of learning, workshops, and networking opportunities.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8 flex flex-wrap justify-center gap-2"
                >
                    {agendaTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${activeTab === tab.id
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </motion.div>

                {/* Agenda List */}
                <div className="mx-auto max-w-4xl space-y-3">
                    {filteredAgenda.map((item, index) => (
                        <motion.div
                            key={`${item.time}-${item.title}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-card hover:border-primary/30"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-start gap-4">
                                    {/* Time */}
                                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap">
                                        <Clock className="h-4 w-4 text-primary" />
                                        {item.time}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <User className="h-3.5 w-3.5" />
                                                {item.speaker}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${getTypeColor(item.type)}`}>
                                        {item.type}
                                    </span>
                                    {item.level !== "All" && (
                                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                                            {item.level}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agenda;
