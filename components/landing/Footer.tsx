"use client";

import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-background py-12">
            <div className="section-container">
                <div className="flex flex-col items-center text-center">
                    {/* Logo / Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <div className="mb-2 text-2xl font-bold text-foreground">
                            AWS <span className="text-primary">Cloud Club</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Sanjivani College of Engineering
                        </p>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mb-8 text-muted-foreground"
                    >
                        Stay Connected. Grow Together.
                    </motion.p>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm"
                    >
                        <a
                            href="https://x.com/awscloudclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            Twitter
                        </a>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <a
                            href="https://www.linkedin.com/company/sanjivani-aws-cloud-club/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            LinkedIn
                        </a>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <a
                            href="mailto:contact@awscloudclub.dev"
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            Email
                        </a>
                    </motion.div>

                    {/* Divider */}
                    <div className="mb-6 h-px w-full max-w-xs bg-border" />

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xs text-muted-foreground"
                    >
                        © 2026 AWS Student Community Day Sanjivani. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
