"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Mic, Calendar, Lightbulb, ArrowRight, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const stats = [
    { icon: Users, value: "500+", label: "Attendees Expected", color: "from-blue-500 to-cyan-500" },
    { icon: Mic, value: "10+", label: "Industry Speakers", color: "from-violet-500 to-purple-500" },
    // { icon: Calendar, value: "1", label: "Day of Learning", color: "from-orange-500 to-amber-500" },
    // { icon: Lightbulb, value: "8+", label: "Workshop Sessions", color: "from-emerald-500 to-teal-500" },
];

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

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { theme } = useTheme();

    return (
        <section ref={ref} id="about" className="section-padding bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] ${theme === "dark" ? "bg-primary/5" : "bg-primary/3"
                }`} />
            <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] ${theme === "dark" ? "bg-blue-500/5" : "bg-blue-500/3"
                }`} />

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        About the Event
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Building the Next Generation of{" "}
                        <span className="text-gradient-orange">Cloud Leaders</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg">
                        For the Students, By the Students — A landmark event designed to revolutionize how learners engage with cloud technology.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
                    {/* Left - Description Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Main Description Card */}
                        <div className={`relative overflow-hidden rounded-2xl border p-6 sm:p-8 ${theme === "dark"
                            ? "border-white/10 bg-white/5 backdrop-blur-sm"
                            : "border-gray-200 bg-white shadow-lg"
                            }`}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                            <div className="relative space-y-4 text-muted-foreground">
                                <p className="text-base leading-relaxed">
                                    <strong className="text-foreground">AWS Student Community Day Sanjivani 2026</strong> is the region&apos;s largest student-led
                                    cloud event, organized by the AWS Cloud Club at Sanjivani College of Engineering.
                                </p>
                                <p className="text-base leading-relaxed">
                                    Building on the momentum of the global AWS community, this landmark event bridges the gap
                                    between classroom theory and industry-ready skills through expert-led sessions and live demonstrations.
                                </p>
                                <p className="text-base leading-relaxed">
                                    This one-day conference is crafted for students and early career professionals
                                    who want to explore the latest in cloud computing, connect with peers and
                                    industry experts, and gain practical exposure to AWS.
                                </p>
                            </div>
                        </div>

                        {/* Highlights Card */}
                        <div className={`relative overflow-hidden rounded-2xl border p-6 ${theme === "dark"
                            ? "border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10"
                            : "border-primary/20 bg-gradient-to-br from-primary/5 via-white to-blue-50"
                            }`}>
                            <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
                            <ul className="space-y-3">
                                {[
                                    "Expert talks from AWS Heroes and industry leaders",
                                    "Hands-on workshops with real-world cloud scenarios",
                                    "Networking with 500+ cloud enthusiasts",
                                    "Career guidance and live demonstrations",
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                        </span>
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#tickets" className="btn-primary group text-base inline-flex">
                                Get Your Ticket
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="https://konfhub.com/aws-student-community-day-sanjivani-2026"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn-secondary text-base inline-flex items-center gap-2 ${theme === "dark"
                                    ? "text-white/80 border-white/20 hover:border-white/40"
                                    : "text-aws-navy border-aws-navy/30 hover:border-aws-navy/50"
                                    }`}
                            >
                                View on KonfHub
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right - Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${theme === "dark"
                                        ? "border-white/10 bg-white/5 hover:bg-white/10"
                                        : "border-gray-200 bg-white hover:shadow-lg"
                                        }`}
                                >
                                    <div className={`absolute top-0 right-0 w-20 h-20 translate-x-6 -translate-y-6 rounded-full bg-gradient-to-br ${stat.color} opacity-20 transition-transform group-hover:scale-150`} />
                                    <div className={`inline-flex rounded-xl p-2.5 bg-gradient-to-br ${stat.color} mb-3`}>
                                        <stat.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-bold text-foreground">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Organizer Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className={`relative overflow-hidden rounded-2xl border p-6 ${theme === "dark"
                                ? "border-white/10 bg-white/5"
                                : "border-gray-200 bg-white"
                                }`}
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-2">Organized By</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                AWS Cloud Club at Sanjivani College of Engineering
                            </p>
                            <p className="text-xs text-muted-foreground italic mb-4">
                                &quot;Stay Connected, Grow Together&quot;
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${theme === "dark"
                                            ? "bg-white/10 text-white/80 hover:bg-white/20"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
