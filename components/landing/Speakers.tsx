"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const speakers = [
    {
        name: "Dr. Rajesh Kumar",
        role: "AWS Solutions Architect",
        company: "Amazon Web Services",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Priya Sharma",
        role: "Cloud Engineer",
        company: "Microsoft",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Amit Patel",
        role: "DevOps Lead",
        company: "Google Cloud",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Sneha Reddy",
        role: "AI/ML Specialist",
        company: "AWS India",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Vikram Singh",
        role: "Cloud Architect",
        company: "Infosys",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Ananya Gupta",
        role: "Security Engineer",
        company: "TCS",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Rahul Deshmukh",
        role: "Full Stack Developer",
        company: "Wipro",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Meera Joshi",
        role: "Data Engineer",
        company: "Persistent Systems",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
];

const Speakers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="speakers" className="section-padding bg-background">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Expert Speakers
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Learn from Industry Leaders
                    </h2>
                    <p className="text-muted-foreground">
                        Our speakers are AWS experts, industry professionals, and thought leaders
                        who will share their knowledge and experience with you.
                    </p>
                </motion.div>

                {/* Speakers Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-aws-navy via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                {/* Social Links Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-aws-navy transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-aws-navy transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <Twitter className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                                <p className="text-sm text-primary">{speaker.role}</p>
                                <p className="text-xs text-muted-foreground">{speaker.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 rounded-2xl border border-border bg-card p-8 text-center"
                >
                    <h3 className="mb-2 text-xl font-semibold text-foreground">Want to be a Speaker?</h3>
                    <p className="mb-6 text-muted-foreground">
                        We&apos;re always looking for passionate speakers to share their knowledge with our community.
                    </p>
                    <a href="mailto:speakers@awscloudclub.dev" className="btn-primary">
                        Apply to Speak
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Speakers;
