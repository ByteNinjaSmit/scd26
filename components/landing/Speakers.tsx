"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic2, Building2, Briefcase, ExternalLink, User } from "lucide-react";
import Image from "next/image";

/* ─────────── SPEAKER DATA ─────────── */

const speakers = [
    {
        name: "Vishal Alhat",
        designation: "Developer Advocate",
        company: "AWS",
        topic: "Keynote",
        image: "/speakers/vishal-alhat.jpg",
    },
    {
        name: "Bhoomi Raut",
        designation: "AWS Community Builder",
        company: "Persistent Systems",
        topic: "Kiro : Spec Driven Development",
        image: "/speakers/bhoomi-raut.jpg",
    },
    {
        name: "Tribhuvan Mishra",
        designation: "Cloud Infra Specialist",
        company: "Wipro Technologies",
        topic: "Building Production-Ready GenAI Applications on AWS",
        image: "/speakers/tribhuvan-mishra.jpg",
    },
    {
        name: "Rahul Shivalkar",
        designation: "Lead DevOps Engineer",
        company: "EPAM",
        topic: "Building an Event-Driven Three-Tier Application on AWS",
        image: "/speakers/rahul-shivalkar.jpg",
    },
    {
        name: "Himanshu Sangshetti",
        designation: "Solutions Associate",
        company: "ZS",
        topic: "Building a Self-Healing Security Pipeline: When Bedrock Agents Fix Your Vulnerabilities",
        image: "/speakers/himanshu-sangshetti.jpg",
    },
    {
        name: "Ganesh Rajesh Lad",
        designation: "COE",
        company: "Cloudera Inc.",
        topic: "Cloud Computing Workshop",
        image: "/speakers/ganesh-lad.jpg",
    },
    {
        name: "Varsha Verma",
        designation: "Tech Lead",
        company: "Accenture Technologies",
        topic: "No Perimeter, No Problem: Building Zero Trust on AWS",
        image: "/speakers/varsha-verma.jpg",
    },
    {
        name: "Ramandeep Chandna",
        designation: "Systems Engineering Manager - AWS",
        company: "EPAM Systems",
        topic: "From Student to AWS Golden Jacket - Building Your Cloud Future",
        image: "/speakers/ramandeep-chandna.jpg",
    },
    {
        name: "Sankalp Paranjpe",
        designation: "Cloud Security Consultant",
        company: "Big4 Consulting",
        topic: "Introduction to AWS MCP Servers",
        image: "/speakers/sankalp-paranjpe.jpg",
    },
    {
        name: "Abhishek Maurya",
        designation: "Senior Cloud Engineer",
        company: "Orange Business India",
        topic: "But It Works on My Machine!: A Student's Guide to Docker, CI/CD, and Cloud Deployments",
        image: "/speakers/abhishek-maurya.jpg",
    },
    {
        name: "Soham Deshmukh",
        designation: "",
        company: "",
        topic: "Beyond the Console: Leading the Next Generation of Cloud Builders",
        image: "/speakers/soham-deshmukh.jpg",
    },
];

/* ─────────── COMPONENT ─────────── */

const Speakers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="speakers" className="section-padding bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary border border-primary/20"
                    >
                        <Mic2 className="h-4 w-4" />
                        Expert Speakers
                    </motion.span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Learn from Industry Leaders
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg">
                        Our speakers are AWS experts, industry professionals, and thought leaders
                        who will share their knowledge and experience with you.
                    </p>
                </motion.div>

                {/* Speaker Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
                            className="group relative rounded-xl border border-border bg-card hover:border-primary/20
                                hover:shadow-lg dark:hover:shadow-black/20 hover:-translate-y-0.5
                                transition-all duration-200 overflow-hidden"
                        >
                            <div className="p-5">
                                <div className="flex items-start gap-4">
                                    {/* Speaker Photo */}
                                    <div className="relative flex-shrink-0">
                                        <div className="w-16 h-16 rounded-xl bg-secondary dark:bg-muted border border-border overflow-hidden">
                                            <Image
                                                src={speaker.image}
                                                alt={speaker.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                                                    const icon = document.createElement('div');
                                                    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground/40"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
                                                    target.parentElement!.appendChild(icon);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Speaker Info */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-foreground text-base leading-tight mb-1 truncate">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-xs text-primary font-medium flex items-center gap-1 mb-0.5">
                                            <Briefcase className="h-3 w-3 flex-shrink-0" />
                                            <span className="truncate">{speaker.designation}</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Building2 className="h-3 w-3 flex-shrink-0" />
                                            <span className="truncate">{speaker.company}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Talk Topic */}
                                <div className="mt-3 pt-3 border-t border-border/50">
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        <span className="font-semibold text-foreground">Talk:</span>{" "}
                                        {speaker.topic}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom accent line on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
