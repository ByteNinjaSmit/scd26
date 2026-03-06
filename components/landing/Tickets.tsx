"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, Crown, Ticket, Clock, ExternalLink, Users, Lock } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

// Unlock time for Early Bird and Regular tickets: Feb 7, 2026 at 9:00 PM IST
const TICKET_UNLOCK_TIME = new Date("2026-02-07T21:00:00+05:30").getTime();

const ticketsData = [
    {
        id: "golden",
        name: "Golden Ticket",
        subtitle: "Elite Access",
        price: "Min ₹499 - Max ₹4,999",
        priceNote: "Pay what you wish",
        unlockTime: null, // Always available
        deadline: "14th Mar 2026, 06:00 PM (GMT+05:30)",
        cta: "Donate",
        ctaLink: "https://konfhub.com/checkout/aws-student-community-day-sanjivani-2026?ticketId=73989",
        icon: Crown,
        featured: true,
        soldOut: false,
        seats: 100,
        features: [
            { icon: "✨", text: "Exclusive Golden Badge: Flash a premium golden badge for instant recognition as a top-tier supporter." },
            { icon: "💺", text: "Front Row Elite Seating: Claim VIP front-and-center seats for uninterrupted views of keynotes and technical deep dives." },
            { icon: "🤝", text: "Inner Circle Networking: Network exclusively with AWS Heroes, speakers, and industry legends in dedicated sessions." },
            { icon: "📣", text: "Social Media Spotlight: Get a featured shoutout on official social media channels." },
            { icon: "🚪", text: "Priority Entry: Skip the lines with fast-track access to beat the crowds and settle in early." },
            { icon: "🎁", text: "Premium Swag Upgrade: Receive upgraded merchandise, exclusive keepsakes, and priority workshop access." },
            { icon: "📸", text: "Photo Ops: Access custom photo opportunities with community icons and stage action." },
        ],
    },
    {
        id: "early-bird",
        name: "Early Bird Ticket",
        subtitle: "Conference Pass",
        price: "₹149",
        priceNote: "Limited time offer",
        unlockTime: TICKET_UNLOCK_TIME,
        deadline: "8th Mar 2026, 12:20 PM (GMT+05:30)",
        cta: "Get Early Bird",
        ctaLink: "https://konfhub.com/checkout/aws-student-community-day-sanjivani-2026?ticketId=73990",
        icon: Ticket,
        featured: false,
        soldOut: true,
        seats: 200,
        features: [
            { icon: "💰", text: "Maximum Savings: Secure your spot at the lowest price for a full day of learning and inspiration." },
            { icon: "📑", text: "Full Conference Access: Enjoy entry to all main conference tracks, keynote sessions, and interactive discussions." },
            { icon: "💡", text: "Focused Breakouts: Learn directly from industry experts through deep-dive sessions tailored to your interests." },
            { icon: "☕", text: "Breakfast & High-Tea: Fuel your day with morning refreshments and relaxing networking breaks." },
            { icon: "🍽️", text: "Lunch & Conversations: Enjoy a delicious lunch while connecting with leaders, peers, and community members." },
            { icon: "🎒", text: "Exclusive Goodie Bag: Walk away with event merchandise, partner gifts, and resources crafted for attendees." },
        ],
    },
    {
        id: "regular",
        name: "Regular Ticket",
        subtitle: "Standard Access",
        price: "₹249",
        priceNote: "Standard pricing",
        unlockTime: TICKET_UNLOCK_TIME,
        deadline: "14th Mar 2026, 06:00 PM (GMT+05:30)",
        cta: "Register",
        ctaLink: "https://konfhub.com/checkout/aws-student-community-day-sanjivani-2026?ticketId=73991",
        icon: Ticket,
        featured: false,
        soldOut: true,
        seats: 300,
        features: [
            { icon: "🌐", text: "Full Event Access: Unlock a full day of connection and learning alongside top minds in the industry." },
            { icon: "🛠️", text: "Hands-On Experience: Participate in expert-led sessions designed to help you apply new tools and techniques in real time." },
            { icon: "🚀", text: "Industry Insights: Learn directly from trailblazers through deep-dive sessions tailored to your expertise." },
            { icon: "🥯", text: "Morning Refreshments: Start strong and stay energized with provided breakfast and high-tea." },
            { icon: "🍲", text: "Networking Lunch: Savor a meal while exchanging ideas with speakers and fellow cloud enthusiasts." },
            { icon: "📦", text: "Official Swag Bag: Take home premium event merchandise and partner gifts to keep the inspiration going." },
            { icon: "📈", text: "Career Growth: Connect with early adopters, Industry professionals and AWS experts to shape your future in the cloud." },
        ],
    },
    {
        id: "late-bird",
        name: "Late Bird Ticket",
        subtitle: "Final Call Access",
        price: "₹399",
        priceNote: "Last Chance to Join",
        unlockTime: TICKET_UNLOCK_TIME,
        deadline: "28th Mar 2026, 06:00 PM (GMT+05:30)",
        cta: "Get Ticket",
        ctaLink: "https://konfhub.com/checkout/aws-student-community-day-sanjivani-2026?ticketId=81190",
        icon: Ticket,
        featured: false,
        soldOut: false,
        seats: 300,
        features: [
            { icon: "⚡", text: "Last Chance to Join: Don't miss out on the premier cloud event of the season. Secure your spot before doors close!" },
            { icon: "🌐", text: "Full Event Access: Experience the complete journey, from keynote inspirations to the final closing ceremony." },
            { icon: "🛠️", text: "Hands-On & Focused Breakouts: Gain unrestricted access to all expert-led sessions and technical deep-dives." },
            { icon: "🚀", text: "Industry Insights & Growth: Learn directly from trailblazers and connect with AWS experts to accelerate your career." },
            { icon: "☕", text: "Full Day Catering: Stay fueled from start to finish with breakfast, morning refreshments, high-tea, and a networking lunch." },
            { icon: "🎒", text: "Ultimate Swag Collection: Receive the complete event kit, including merchandise, partner gifts, and official resources." },
            { icon: "🤝", text: "Elite Networking: Join the inner circle of industry professionals and early adopters for high-value connections." },
        ],
    },
];

// Countdown component for locked tickets
const UnlockCountdown = ({ unlockTime }: { unlockTime: number }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = unlockTime - now;

            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor(difference / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [unlockTime]);

    return (
        <div className="flex items-center gap-1 text-xs font-mono">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
    );
};



const Tickets = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { theme } = useTheme();
    const [currentTime, setCurrentTime] = useState(Date.now());

    // Update current time every second to check unlock status
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const isTicketUnlocked = (unlockTime: number | null) => {
        if (unlockTime === null) return true;
        return currentTime >= unlockTime;
    };

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
                        <span className="text-primary font-bold">10-30% OFF</span>
                        <span className="text-muted-foreground">for bookings of 5-15 tickets!</span>
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {ticketsData.map((ticket, index) => {
                        const isUnlocked = isTicketUnlocked(ticket.unlockTime);

                        return (
                            <motion.div
                                key={ticket.id}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className={`relative rounded-2xl border ${ticket.featured
                                    ? "border-primary/50 bg-gradient-to-b from-primary/10 via-card to-card shadow-golden"
                                    : theme === "dark"
                                        ? "border-white/10 bg-white/5"
                                        : "border-gray-200 bg-white shadow-card"
                                    } transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${ticket.soldOut ? "opacity-90 grayscale-[0.5]" : ""}`}
                            >
                                {ticket.featured && (
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-amber-500 rounded-t-2xl overflow-hidden" />
                                )}

                                <div className="p-5 sm:p-6 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className={`inline-flex rounded-xl p-2.5 ${ticket.featured
                                                ? "bg-gradient-to-br from-amber-500 to-primary"
                                                : theme === "dark" ? "bg-white/10" : "bg-gray-100"
                                                }`}>
                                                <ticket.icon className={`h-5 w-5 ${ticket.featured ? "text-white" : "text-muted-foreground"
                                                    }`} />
                                            </div>
                                            {ticket.featured && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-primary">
                                                    <Sparkles className="h-3 w-3" />
                                                    Premium
                                                </span>
                                            )}
                                            {!isUnlocked && !ticket.soldOut && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-amber-600 dark:text-amber-400">
                                                    <Lock className="h-3 w-3" />
                                                    Coming Soon
                                                </span>
                                            )}
                                            {ticket.soldOut && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-red-600 dark:text-red-400">
                                                    Sold Out
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{ticket.name}</h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{ticket.subtitle}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-5">
                                        <div className={`font-bold text-foreground leading-none ${ticket.price.length > 15 ? "text-[22px]" : "text-2xl sm:text-3xl"}`}>{ticket.price}</div>
                                        <div className="text-[11px] sm:text-xs text-primary font-medium mt-1.5 mb-3">{ticket.priceNote}</div>
                                        <div className="space-y-1.5">
                                            <div className="flex items-start gap-2 text-[11px] sm:text-xs text-muted-foreground">
                                                <Clock className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                                                {isUnlocked ? (
                                                    <span className="leading-tight">Till: {ticket.deadline}</span>
                                                ) : (
                                                    <span className="leading-tight">Starts: 7th Feb 2026, 9:00 PM</span>
                                                )}
                                            </div>
                                            <div className="flex items-start gap-2 text-[11px] sm:text-xs text-muted-foreground">
                                                <Users className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                                                {ticket.soldOut ? (
                                                    <span className="text-red-500 font-medium leading-tight">Sold out</span>
                                                ) : (
                                                    <span className="leading-tight">Only few seats left</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <ul className="mb-6 space-y-2.5 flex-grow">
                                        {ticket.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="text-[13px] sm:text-sm flex-shrink-0 mt-0.5 leading-none">{feature.icon}</span>
                                                <span className="text-[11px] sm:text-[13px] text-muted-foreground leading-snug">
                                                    {/* Make the label (before colon) bold if it exists */}
                                                    {feature.text.includes(':')
                                                        ? <>
                                                            <strong className="text-foreground/80 font-semibold">{feature.text.split(':')[0]}:</strong>
                                                            {feature.text.substring(feature.text.indexOf(':') + 1)}
                                                        </>
                                                        : feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    {ticket.soldOut ? (
                                        <button
                                            disabled
                                            className={`w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold opacity-50 cursor-not-allowed ${theme === "dark"
                                                ? "bg-white/10 text-white/60"
                                                : "bg-gray-100 text-gray-500"
                                                }`}
                                        >
                                            Sold Out
                                        </button>
                                    ) : isUnlocked ? (
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
                                    ) : (
                                        <div className={`w-full flex flex-col items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold ${theme === "dark"
                                            ? "bg-white/10 text-white/60"
                                            : "bg-gray-100 text-gray-500"
                                            }`}>
                                            <div className="flex items-center gap-2">
                                                <Lock className="h-4 w-4" />
                                                <span>Unlocks in</span>
                                            </div>
                                            <UnlockCountdown unlockTime={ticket.unlockTime!} />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 text-center text-sm text-muted-foreground"
                >
                    All tickets include breakfast, high-tea, lunch, and official swag.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-3 text-center text-xs text-muted-foreground"
                >
                    <span className="font-medium text-foreground">Important:</span> Tickets are{" "}
                    <span className="font-semibold">non-refundable</span>. Accommodation will be
                    provided <span className="font-semibold">only for speakers</span>, strictly on{" "}
                    <span className="font-semibold">prior request</span> and subject to availability.
                </motion.p>


            </div>
        </section>
    );
};

export default Tickets;
