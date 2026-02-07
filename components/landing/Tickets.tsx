"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Crown, Ticket, Clock } from "lucide-react";

const tickets = [
    {
        id: "golden",
        name: "Golden Ticket",
        subtitle: "Elite Access",
        price: "₹499 – ₹4,999",
        status: "available",
        deadline: "14th March 2026, 06:00 PM",
        cta: "Donate / Support",
        icon: Crown,
        featured: true,
        features: [
            { icon: "✨", text: "Exclusive Golden Badge" },
            { icon: "💺", text: "Front Row Elite Seating" },
            { icon: "🤝", text: "Inner Circle Networking" },
            { icon: "📣", text: "Social Media Spotlight" },
            { icon: "🚪", text: "Priority Entry" },
            { icon: "🎁", text: "Premium Swag Upgrade" },
            { icon: "📸", text: "Photo Opportunities" },
        ],
    },
    {
        id: "early-bird",
        name: "Early Bird Ticket",
        subtitle: "Conference Pass",
        price: "₹149",
        status: "coming-soon",
        deadline: "7th February 2026, 06:00 PM",
        cta: "Coming Soon",
        icon: Ticket,
        featured: false,
        features: [
            { icon: "💰", text: "Maximum Savings" },
            { icon: "📑", text: "Full Conference Access" },
            { icon: "💡", text: "Focused Breakout Sessions" },
            { icon: "☕", text: "Breakfast & High-Tea" },
            { icon: "🍽", text: "Lunch & Conversations" },
            { icon: "🎒", text: "Exclusive Goodie Bag" },
        ],
    },
    {
        id: "regular",
        name: "Regular Ticket",
        subtitle: "Standard Access",
        price: "₹249",
        status: "coming-soon",
        deadline: "7th February 2026, 06:00 PM",
        cta: "Coming Soon",
        icon: Ticket,
        featured: false,
        features: [
            { icon: "🌐", text: "Full Event Access" },
            { icon: "🛠", text: "Hands-On Learning" },
            { icon: "🚀", text: "Industry Insights" },
            { icon: "🥯", text: "Morning Refreshments" },
            { icon: "🍲", text: "Networking Lunch" },
            { icon: "📦", text: "Official Swag Bag" },
        ],
    },
];

const Tickets = () => {
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
                        Tickets
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Secure Your Spot
                    </h2>
                    <p className="text-muted-foreground">
                        Choose the experience that fits your journey. Limited seats available.
                    </p>
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
                                    : "border-border bg-card shadow-card"
                                } transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1`}
                        >
                            {ticket.featured && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-amber-500" />
                            )}

                            <div className="p-6 sm:p-8">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className={`inline-flex rounded-xl p-3 ${ticket.featured ? "bg-primary/20" : "bg-secondary"
                                            }`}>
                                            <ticket.icon className={`h-6 w-6 ${ticket.featured ? "text-primary" : "text-muted-foreground"
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
                                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="h-3.5 w-3.5" />
                                        {ticket.status === "available" ? "Available Till" : "Starts On"}: {ticket.deadline}
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="mb-8 space-y-3">
                                    {ticket.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-base">{feature.icon}</span>
                                            <span className="text-sm text-muted-foreground">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    disabled={ticket.status === "coming-soon"}
                                    className={`w-full rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 ${ticket.status === "available"
                                            ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]"
                                            : "bg-muted text-muted-foreground cursor-not-allowed"
                                        }`}
                                >
                                    {ticket.cta}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tickets;
