"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Presentation, Code2, Network, TrendingUp } from "lucide-react";

const reasons = [
    {
        icon: Presentation,
        title: "Expert-Led Sessions",
        description: "Learn from AWS professionals and industry leaders sharing real-world insights and best practices.",
    },
    {
        icon: Code2,
        title: "Hands-on Workshops",
        description: "Apply cloud concepts through guided demonstrations and practical, interactive learning experiences.",
    },
    {
        icon: Network,
        title: "Networking Opportunities",
        description: "Connect with peers, speakers, and cloud professionals. Build relationships that last beyond the event.",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Gain exposure to real-world cloud use cases, career pathways, and industry-demanded skills.",
    },
];

const WhyAttend = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-secondary/50">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Why Attend
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        What You&apos;ll Experience
                    </h2>
                    <p className="text-muted-foreground">
                        Join us this March 2026 at Sanjivani College of Engineering for a high-energy
                        cloud learning experience designed for future builders.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="relative">
                                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                                    <reason.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-foreground">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAttend;
