"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const FinalCTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const benefits = [
        "Free admission to all tracks and workshops",
        "Networking opportunities with industry experts",
        "AWS learning resources and materials",
        "Certificate of participation",
    ];

    return (
        <section ref={ref} className="section-padding relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 hero-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 text-center">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <Sparkles className="h-4 w-4" />
                            Limited Seats Available
                        </div>

                        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                            Ready to Join Us?
                        </h2>

                        <p className="mb-8 text-lg text-white/60 max-w-2xl mx-auto">
                            Don&apos;t miss this incredible opportunity to learn, network, and grow your cloud skills.
                            Registration is completely free, but seats are limited!
                        </p>

                        {/* Benefits */}
                        <div className="mb-10 grid gap-3 sm:grid-cols-2 text-left max-w-xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                                        <Check className="h-3.5 w-3.5 text-primary" />
                                    </div>
                                    <span className="text-sm text-white/80">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a href="#tickets" className="btn-primary text-base group w-full sm:w-auto">
                                Complete Registration
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </motion.div>

                        <p className="mt-6 text-sm text-white/40">
                            Registration closes on March 10, 2026 or when capacity is reached.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
