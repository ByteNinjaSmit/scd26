"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const Agenda = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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

                {/* Reveal Soon Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col items-center justify-center py-16"
                >
                    <div className="relative mb-6">
                        <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full" />
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-lg">
                            <Sparkles className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Reveal Soon</h3>
                    <p className="text-center text-muted-foreground max-w-md">
                        We&apos;re crafting an exciting agenda packed with sessions and activities. Stay tuned!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Agenda;
