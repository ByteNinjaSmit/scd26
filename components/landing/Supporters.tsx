"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// AWS and Partner logos as images
const AWSLogo = () => (
    <Image
        src="/aws-logo.png"
        alt="Amazon Web Services"
        width={180}
        height={60}
        className="object-contain"
    />
);

const KonfHubLogo = () => (
    <Image
        src="/konfhub-logo.png"
        alt="KonfHub"
        width={160}
        height={50}
        className="object-contain"
    />
);

const partnerCategories = [
    {
        title: "Grand Patron",
        partners: [
            { name: "Amazon Web Services", Logo: AWSLogo, description: "Leading cloud platform providing the infrastructure for this event" },
        ],
    },
    {
        title: "Platform Partner",
        partners: [
            { name: "KonfHub", Logo: KonfHubLogo, description: "Event management and ticketing platform" },
        ],
    },
];

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
        <section ref={ref} className="section-padding bg-secondary/30">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Our Sponsors
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Powered by Amazing Partners
                    </h2>
                    <p className="text-muted-foreground">
                        We&apos;re grateful to our sponsors who make this event possible and support
                        the growth of the cloud computing community.
                    </p>
                </motion.div>

                {/* Main Partners */}
                <div className="space-y-12">
                    {partnerCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * catIndex }}
                            className="text-center"
                        >
                            <h3 className="mb-6 text-lg font-semibold text-muted-foreground">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {category.partners.map((partner) => (
                                    <div
                                        key={partner.name}
                                        className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 min-w-[280px]"
                                    >
                                        <div className="mb-4 h-16 flex items-center justify-center">
                                            <partner.Logo />
                                        </div>
                                        <p className="text-sm text-muted-foreground text-center max-w-[200px]">
                                            {partner.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Community Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16"
                >
                    <h3 className="mb-6 text-center text-lg font-semibold text-muted-foreground">
                        Community Partners
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {communityPartners.map((partner) => (
                            <div
                                key={partner}
                                className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:shadow-sm"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Become a Sponsor CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 rounded-2xl border border-border bg-card p-8 text-center"
                >
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                        Interested in Sponsoring?
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                        Help us make this event even better and reach more students
                    </p>
                    <a href="mailto:sponsors@awscloudclub.dev" className="btn-primary">
                        Become a Sponsor
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Supporters;
