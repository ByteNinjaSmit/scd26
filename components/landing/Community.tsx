"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, ArrowRight } from "lucide-react";

const socialLinks = [
    {
        name: "Meetup",
        url: "https://www.meetup.com/aws-cloud-club-sanjivani-college-of-engineering/",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8c0-3.866-3.134-7-7-7S4 4.134 4 8c0 2.577 1.395 4.827 3.471 6.036-.155.316-.301.64-.428.974C6.366 16.822 6 18.39 6 20v2h12v-2c0-1.61-.366-3.178-1.043-4.99a8.067 8.067 0 0 1-.428-.974C18.605 12.827 20 10.577 20 8z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/sanjivani-aws-cloud-club/",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/awscloudclubscoe/",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        name: "X",
        url: "https://x.com/awscloudclub",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

const upcomingUpdates = [
    "Call for Papers (CFP)",
    "Ticket Announcements",
    "Speaker Reveals",
    "Partner Updates",
];

const Community = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="community" className="section-padding text-white">
            <div className="section-container">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left - Stay Updated */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex rounded-xl bg-primary/20 p-3">
                            <Bell className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Stay Updated
                        </h2>
                        <p className="mb-6 text-white/60">
                            Tickets vanish faster than a serverless function. Stay tuned for:
                        </p>
                        <ul className="mb-8 space-y-3">
                            {upcomingUpdates.map((update, index) => (
                                <motion.li
                                    key={update}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <ArrowRight className="h-4 w-4 text-primary" />
                                    <span className="text-white/80">{update}</span>
                                </motion.li>
                            ))}
                        </ul>
                        {/* <button className="btn-primary">
                            Get Notified
                            <ArrowRight className="h-4 w-4" />
                        </button> */}
                    </motion.div>

                    {/* Right - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="mb-6 text-xl font-semibold">Follow Us</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:border-primary/50"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                                        {social.icon}
                                    </div>
                                    <span className="font-medium text-white/80 group-hover:text-white">
                                        {social.name}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Community;
