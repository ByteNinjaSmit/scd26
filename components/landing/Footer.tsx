"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/sanjivani-aws-cloud-club/" },
    { name: "Instagram", url: "https://www.instagram.com/awscloudclubscoe/" },
    { name: "YouTube", url: "https://youtube.com/@awscloudclubscoe?si=2l-njsZ-1yQ0ARGz" },
    { name: "X (Twitter)", url: "https://x.com/awscloudclub_" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61558989331553" },
    { name: "WhatsApp", url: "https://www.whatsapp.com/channel/0029VaWLCzx1dAw6VIcsib0v" },
    { name: "Meetup", url: "https://www.meetup.com/aws-cloud-club-sanjivani-college-of-engineering" },
    { name: "GitHub", url: "https://github.com/aws-cloud-club-scoe" },
];

const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tickets", href: "#tickets" },
    { name: "Speakers", href: "#speakers" },
    { name: "Venue", href: "#venue" },
];

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`border-t border-border py-12 bg-background/50 backdrop-blur-md`}>
            <div className="section-container">
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2"
                    >
                        <div className="mb-3 text-2xl font-bold text-foreground">
                            AWS <span className="text-primary">Cloud Club</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                            Sanjivani College of Engineering
                        </p>
                        <p className="text-sm text-muted-foreground italic mb-4">
                            Stay Connected. Grow Together.
                        </p>
                        <a
                            href="mailto:awscloudclubscoe@gmail.com"
                            className="text-sm text-primary hover:underline"
                        >
                            awscloudclubscoe@gmail.com
                        </a>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="https://konfhub.com/aws-student-community-day-sanjivani-2026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary font-medium hover:underline"
                                >
                                    Register Now →
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                        <div className="flex flex-wrap gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${theme === "dark"
                                        ? "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-border" />

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xs text-muted-foreground text-center sm:text-left"
                    >
                        © 2026 AWS Student Community Day Sanjivani. All rights reserved.
                    </motion.p>
                    {/* <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-xs text-muted-foreground"
                    >
                        <a
                            href="https://konfhub.com/aws-student-community-day-sanjivani-2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            Powered by KonfHub
                        </a>
                    </motion.div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
