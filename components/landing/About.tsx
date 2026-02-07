"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mic } from "lucide-react";

const stats = [
    { icon: Users, value: "500+", label: "Attendees" },
    { icon: Mic, value: "15+", label: "Industry Speakers" },
];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-background">
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                            About the Event
                        </span>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Building the Next Generation of{" "}
                            <span className="text-gradient-orange">Cloud Leaders</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                AWS Student Community Day Sanjivani 2026 is the region&apos;s largest student-led
                                cloud event, organized by the AWS Cloud Club at Sanjivani College of Engineering.
                            </p>
                            <p>
                                Built on the momentum of the global AWS community, this landmark event is
                                designed &quot;For the Students, By the Students.&quot; It is a student-driven initiative
                                aimed at transforming how learners engage with cloud technology—bridging the gap
                                between classroom theory and industry-ready skills.
                            </p>
                            <p>
                                This one-day conference is crafted for students and early career professionals
                                who want to explore the latest in cloud computing, connect with peers and
                                industry experts, and gain practical exposure to AWS through expert-led sessions
                                and live demonstrations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6 justify-center"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                            >
                                <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                                <stat.icon className="mb-4 h-8 w-8 text-primary" />
                                <div className="text-3xl font-bold text-foreground sm:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
