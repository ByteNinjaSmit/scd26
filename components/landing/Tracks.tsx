"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Briefcase, Rocket, ChevronRight } from "lucide-react";

const tracks = [
    {
        id: 1,
        name: "AWS Foundations",
        level: "Beginner Level",
        color: "from-emerald-500 to-teal-600",
        icon: BookOpen,
        description: "Perfect for beginners! Learn the basics of cloud computing, AWS core services, and get hands-on experience with fundamental AWS tools.",
        topics: [
            { title: "Introduction to AWS", description: "Core services overview and AWS console navigation" },
            { title: "EC2 Hands-on Lab", description: "Launch and configure your first virtual server" },
            { title: "Storage Solutions", description: "S3, EBS, and data management best practices" },
            { title: "Security Basics", description: "IAM, security groups, and access management" },
        ],
    },
    {
        id: 2,
        name: "Soft Skills, Hard Impact",
        level: "Career Development",
        color: "from-violet-500 to-purple-600",
        icon: Briefcase,
        description: "Boost your career prospects in cloud computing! Learn how to build compelling resumes, create professional profiles, and ace technical interviews.",
        topics: [
            { title: "Resume Building for Cloud Roles", description: "Craft compelling resumes that highlight your cloud skills" },
            { title: "Professional Profile Development", description: "Build strong LinkedIn and GitHub profiles" },
            { title: "Job Search Strategies", description: "Navigate job boards and networking effectively" },
            { title: "Technical Interview Preparation", description: "Master cloud-focused interviews and certifications" },
        ],
    },
    {
        id: 3,
        name: "AWS: Intermediate to Advanced",
        level: "Intermediate to Advanced",
        color: "from-primary to-amber-500",
        icon: Rocket,
        description: "Take your AWS skills to the next level! Explore advanced cloud architectures, best practices, and cutting-edge AWS services.",
        topics: [
            { title: "Advanced Cloud Architecture", description: "Design scalable, resilient, and cost-effective solutions" },
            { title: "Advanced Security & Compliance", description: "Implement enterprise-grade security and governance" },
            { title: "Performance & Cost Optimization", description: "Advanced techniques for efficiency and cost management" },
            { title: "Emerging AWS Technologies", description: "Latest AWS services and industry trends" },
        ],
    },
];

const Tracks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTrack, setActiveTrack] = useState(0);

    return (
        <section ref={ref} id="tracks" className="section-padding bg-secondary/30">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Learning Tracks
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Choose Your Learning Path
                    </h2>
                    <p className="text-muted-foreground">
                        Dive deep into AWS technologies with our three specialized tracks. Each track
                        offers hands-on workshops, expert talks, and practical labs designed for different skill levels.
                    </p>
                </motion.div>

                {/* Track Tabs - Mobile */}
                <div className="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
                    {tracks.map((track, index) => (
                        <button
                            key={track.id}
                            onClick={() => setActiveTrack(index)}
                            className={`flex-shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition-all ${activeTrack === index
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Track {track.id}
                        </button>
                    ))}
                </div>

                {/* Track Cards */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${activeTrack === index ? "block" : "hidden lg:block"
                                }`}
                        >
                            {/* Header Gradient */}
                            <div className={`relative h-32 bg-gradient-to-r ${track.color} p-6`}>
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="relative">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                            Track {track.id}
                                        </span>
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                            {track.level}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{track.name}</h3>
                                </div>
                                {/* Icon */}
                                <div className="absolute -bottom-6 right-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-lg">
                                        <track.icon className="h-6 w-6 text-foreground" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 pt-8">
                                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                                    {track.description}
                                </p>

                                {/* Topics */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-foreground">Workshops & Topics</h4>
                                    {track.topics.map((topic, i) => (
                                        <div key={i} className="group/topic flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50">
                                            <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                            <div>
                                                <div className="text-sm font-medium text-foreground">{topic.title}</div>
                                                <div className="text-xs text-muted-foreground">{topic.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
