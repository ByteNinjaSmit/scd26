"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";

const organizers = [
    {
        name: "Aarav Kulkarni",
        role: "Lead Organizer",
        title: "AWS Cloud Club Captain",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Ishita Desai",
        role: "Co-Organizer",
        title: "Technical Lead",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Rohan Patil",
        role: "Core Team",
        title: "DevOps Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Kavya Sharma",
        role: "Core Team",
        title: "Cloud Architect",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Arjun Mehta",
        role: "Core Team",
        title: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Diya Joshi",
        role: "Core Team",
        title: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Vivaan Chopra",
        role: "Core Team",
        title: "Marketing Lead",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    },
    {
        name: "Anaya Reddy",
        role: "Core Team",
        title: "Event Coordinator",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
];

const Organizers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-background">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Event Organizers
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Meet Our Organizing Team
                    </h2>
                    <p className="text-muted-foreground">
                        The passionate team behind AWS Student Community Day, dedicated to
                        bringing you an amazing learning experience.
                    </p>
                </motion.div>

                {/* Organizers Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {organizers.map((organizer, index) => (
                        <motion.div
                            key={organizer.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.05 * index }}
                            className="group text-center"
                        >
                            {/* Image */}
                            <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-2xl">
                                <Image
                                    src={organizer.image}
                                    alt={organizer.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-aws-navy/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                {/* Social Icons */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <a href="#" className="flex h-7 w-7 items-center justify-center rounded-md bg-white/90 text-aws-navy transition-colors hover:bg-primary hover:text-white">
                                        <Linkedin className="h-3.5 w-3.5" />
                                    </a>
                                    <a href="#" className="flex h-7 w-7 items-center justify-center rounded-md bg-white/90 text-aws-navy transition-colors hover:bg-primary hover:text-white">
                                        <Github className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-semibold text-foreground">{organizer.name}</h3>
                            <p className="text-sm text-primary">{organizer.role}</p>
                            <p className="text-xs text-muted-foreground">{organizer.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Organizers;
