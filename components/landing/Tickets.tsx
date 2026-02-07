"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Crown, Ticket, Clock, ExternalLink, Users } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const tickets = [
    {
        id: "golden",
        name: "Golden Ticket",
        subtitle: "Elite Access",
        price: "₹499 – ₹4,999",
        priceNote: "Pay what you wish",
        status: "available",
        deadline: "14th March 2026, 6:00 PM",
        cta: "Support the Event",
        ctaLink: "https://konfhub.com/aws-student-community-day-sanjivani-2026",
        icon: Crown,
        featured: true,
        seats: 100,
        features: [
            { icon: "✨", text: "Exclusive Golden Badge" },
            { icon: "💺", text: "Front Row Elite Seating" },
            { icon: "🤝", text: "Inner Circle Networking with AWS Heroes" },
            { icon: "📣", text: "Social Media Spotlight & Shoutout" },
            { icon: "🚪", text: "Priority Fast-Track Entry" },
            { icon: "🎁", text: "Premium Swag & Workshop Access" },
            { icon: "📸", text: "Photo Ops with Speakers" },
        ],
    },
    {
        id: "early-bird",
        name: "Early Bird Ticket",
        subtitle: "Conference Pass",
        price: "₹149",
        priceNote: "Limited time offer",
        status: "available",
        deadline: "21st February 2026, 11:00 PM",
        cta: "Get Early Bird",
        ctaLink: "https://konfhub.com/aws-student-community-day-sanjivani-2026",
        icon: Ticket,
        featured: false,
        seats: 200,
        features: [
            { icon: "💰", text: "Maximum Savings - Lowest Price" },
            { icon: "📑", text: "Full Conference Access" },
            { icon: "💡", text: "Expert-Led Breakout Sessions" },
            { icon: "☕", text: "Breakfast & High-Tea" },
            { icon: "🍽️", text: "Networking Lunch" },
            { icon: "🎒", text: "Exclusive Goodie Bag" },
        ],
    },
    {
        id: "regular",
        name: "Regular Ticket",
        subtitle: "Standard Access",
        price: "₹249",
        priceNote: "Standard pricing",
        status: "available",
        deadline: "14th March 2026, 6:00 PM",
        cta: "Get Ticket",
        ctaLink: "https://konfhub.com/aws-student-community-day-sanjivani-2026",
        icon: Ticket,
        featured: false,
        seats: 300,
        features: [
            { icon: "🌐", text: "Full Event Access" },
            { icon: "🛠️", text: "Hands-On Workshop Experience" },
            { icon: "🚀", text: "Industry Insights & Deep Dives" },
            { icon: "🥯", text: "Morning Refreshments & High-Tea" },
            { icon: "🍲", text: "Networking Lunch" },
            { icon: "📦", text: "Official Swag Bag" },
            { icon: "📈", text: "Career Growth Opportunities" },
        ],
    },
];

const Tickets = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { theme } = useTheme();

    return (
        <section ref={ref} id="tickets" className="section-padding bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] ${theme === "dark" ? "bg-primary/5" : "bg-primary/3"
                }`} />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-12 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Tickets
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Secure Your Spot
                    </h2>
                    <p className="text-muted-foreground">
                        Choose the experience that fits your journey. Tickets vanish faster than a serverless function!
                    </p>
                </motion.div>

                {/* Group Discount Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`mb-8 rounded-2xl border p-4 text-center ${theme === "dark"
                        ? "border-primary/30 bg-primary/10"
                        : "border-primary/20 bg-primary/5"
                        }`}
                >
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-foreground">Group Discount:</span>
                        <span className="text-primary font-bold">10% OFF</span>
                        <span className="text-muted-foreground">for bookings of 10-20 tickets!</span>
                    </div>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {tickets.map((ticket, index) => (
                        <motion.div
                            key={ticket.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className={`relative overflow-hidden rounded-2xl border ${ticket.featured
                                ? "border-primary/50 bg-gradient-to-b from-primary/10 via-card to-card shadow-golden"
                                : theme === "dark"
                                    ? "border-white/10 bg-white/5"
                                    : "border-gray-200 bg-white shadow-card"
                                } transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
                        >
                            {ticket.featured && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-amber-500" />
                            )}

                            <div className="p-6 sm:p-8">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className={`inline-flex rounded-xl p-3 ${ticket.featured
                                            ? "bg-gradient-to-br from-amber-500 to-primary"
                                            : theme === "dark" ? "bg-white/10" : "bg-gray-100"
                                            }`}>
                                            <ticket.icon className={`h-6 w-6 ${ticket.featured ? "text-white" : "text-muted-foreground"
                                                }`} />
                                        </div>
                                        {ticket.featured && (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                                                <Sparkles className="h-3 w-3" />
                                                Premium
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{ticket.name}</h3>
                                    <p className="text-sm text-muted-foreground">{ticket.subtitle}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="text-3xl font-bold text-foreground">{ticket.price}</div>
                                    <div className="text-xs text-primary font-medium mt-1">{ticket.priceNote}</div>
                                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>Available till: {ticket.deadline}</span>
                                    </div>
                                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                        <Users className="h-3.5 w-3.5" />
                                        <span>{ticket.seats} seats available</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="mb-8 space-y-3">
                                    {ticket.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-base flex-shrink-0">{feature.icon}</span>
                                            <span className="text-sm text-muted-foreground">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href={ticket.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ${ticket.featured
                                        ? "bg-gradient-to-r from-amber-500 to-primary text-white hover:opacity-90 hover:scale-[1.02]"
                                        : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]"
                                        }`}
                                >
                                    {ticket.cta}
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 text-center text-sm text-muted-foreground"
                >
                    All tickets include breakfast, high-tea, lunch, and official swag. Prices are inclusive of taxes.
                </motion.p>
            </div>
        </section>
    );
};

export default Tickets;
