"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

const Venue = () => {
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
                        The Venue
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Where Innovation Meets
                    </h2>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
                    >
                        <div className="aspect-video w-full bg-secondary">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7097567977!2d74.31661!3d19.4233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc6f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sSanjivani%20College%20of%20Engineering%2C%20Kopargaon!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Venue Location"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Address Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                                <MapPin className="h-8 w-8 text-primary" />
                            </div>

                            <h3 className="mb-2 text-2xl font-bold text-foreground">
                                Sanjivani College of Engineering
                            </h3>

                            <address className="mb-6 not-italic text-muted-foreground leading-relaxed">
                                Station Road, Opposite Sanjivani Factory,<br />
                                Singnapur, Kopargaon,<br />
                                Maharashtra, India
                            </address>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://maps.google.com/?q=Sanjivani+College+of+Engineering+Kopargaon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    <Navigation className="h-4 w-4" />
                                    View on Google Maps
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
