"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Sponsor data - easy to add more sponsors later
const sponsors = {
    grandPatron: [
        {
            name: "Amazon Web Services",
            logo: "/aws-logo.png",
            width: 200,
            height: 80,
        },
    ],
    platformPartner: [
        {
            name: "KonfHub",
            logo: "/konfhub-logo.png",
            width: 180,
            height: 60,
        },
    ],
};

const communityPartners = [
    "AWS Cloud Club UdeA",
    "AWS Cloud Club EAN",
    "AWS Cloud Club Pune",
    "AWS User Group Maharashtra",
];

const Supporters = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Our Sponsors
                    </span>
                    <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Powered by <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Amazing Partners</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We&apos;re grateful to our sponsors who make this event possible and support
                        the growth of the cloud computing community.
                    </p>
                </motion.div>

                {/* Grand Patron Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
                        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                            Grand Patron
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/50" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-12">
                        {sponsors.grandPatron.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105">
                                    {/* Subtle glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        width={sponsor.width}
                                        height={sponsor.height}
                                        className="relative object-contain drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
                                    />
                                </div>
                                <p className="mt-3 text-center text-sm font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {sponsor.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Platform Partner Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border/50" />
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                            Platform Partner
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border/50" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-12">
                        {sponsors.platformPartner.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative flex items-center justify-center p-5 transition-all duration-500 group-hover:scale-105">
                                    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        width={sponsor.width}
                                        height={sponsor.height}
                                        className="relative object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                                    />
                                </div>
                                <p className="mt-2 text-center text-sm font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {sponsor.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Community Partners */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="mb-8 flex items-center justify-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/30" />
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                            Community Partners
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/30" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {communityPartners.map((partner, index) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                className="rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                            >
                                {partner}
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}

                {/* Become a Sponsor CTA */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative mx-auto max-w-2xl"
                >
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-lg opacity-50" />
                    <div className="relative rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm p-10 text-center">
                        <h3 className="mb-3 text-2xl font-bold text-foreground">
                            Interested in Sponsoring?
                        </h3>
                        <p className="mb-6 text-muted-foreground">
                            Help us make this event even better and reach more students
                        </p>
                        <a
                            href="mailto:sponsors@awscloudclub.dev"
                            className="btn-primary inline-flex items-center gap-2 group"
                        >
                            Become a Sponsor
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Supporters;
