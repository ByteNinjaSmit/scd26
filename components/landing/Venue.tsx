"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink, Navigation, Train, Plane, Building2 } from "lucide-react";

const nearbyLocations = [
    {
        icon: Building2,
        name: "Shirdi Sai Baba Temple",
        distance: "~15 km",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        icon: Train,
        name: "Kopargaon Railway Station",
        distance: "~1 km",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Plane,
        name: "Shirdi Airport",
        distance: "~20 km",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
];

const Venue = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary border border-primary/20"
                    >
                        <MapPin className="h-4 w-4" />
                        The Venue
                    </motion.span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Where Innovation Meets
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Join us at the prestigious Sanjivani College of Engineering campus
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
                    {/* Map Card with Gradient Border */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative h-full"
                    >
                        {/* Gradient border wrapper */}
                        <div className="absolute -inset-[2px] bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative h-full rounded-3xl bg-card overflow-hidden shadow-xl">
                            {/* Map Header */}
                            <div className="px-6 py-4 bg-gradient-to-r from-secondary to-secondary/50 border-b border-border flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Location Map</h4>
                                        <p className="text-xs text-muted-foreground">Interactive Google Maps</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-400" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <span className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                            </div>

                            {/* Map iframe */}
                            <div className="aspect-[4/3] lg:aspect-auto lg:h-[calc(100%-64px)] w-full bg-secondary">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4518.304054880741!2d74.4936901778391!3d19.902378923438757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc450021382c51%3A0x18ffae92278cc362!2sSANJIVANI%20BANQUET%20HALL!5e1!3m2!1sen!2sin!4v1770478900252!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Sanjivani Banquet Hall - Event Venue"
                                    className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Address Card with Gradient Border */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative h-full"
                    >
                        {/* Gradient border wrapper */}
                        <div className="absolute -inset-[2px] bg-gradient-to-br from-accent via-primary to-accent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative h-full rounded-3xl bg-card shadow-xl flex flex-col">
                            {/* Venue Header with gradient */}
                            <div className="px-6 py-5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-border">
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                                        className="p-3 rounded-2xl bg-gradient-to-br from-primary to-amber-500 shadow-lg shadow-primary/25"
                                    >
                                        <MapPin className="h-7 w-7 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                            Sanjivani Banquet Hall
                                        </h3>
                                        <p className="text-sm text-primary font-medium flex items-center gap-1.5 mt-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                            Sanjivani College of Engineering Campus
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                        Full Address
                                    </h4>
                                    <address className="not-italic text-foreground leading-relaxed text-base">
                                        Station Road, Opposite Sanjivani Factory,<br />
                                        Singnapur, Kopargaon,<br />
                                        <span className="text-primary font-medium">Maharashtra, India</span>
                                    </address>
                                </div>

                                {/* Nearby Locations */}
                                <div className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 border-2 border-border/80">
                                    <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-primary/10">
                                            <Navigation className="h-4 w-4 text-primary" />
                                        </div>
                                        Nearby Locations
                                    </h4>
                                    <ul className="space-y-3">
                                        {nearbyLocations.map((location, index) => (
                                            <motion.li
                                                key={location.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                                className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group/item"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg ${location.bgColor}`}>
                                                        <location.icon className={`h-4 w-4 ${location.color}`} />
                                                    </div>
                                                    <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                                                        {location.name}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                                                    {location.distance}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-6">
                                    <a
                                        href="https://maps.app.goo.gl/JJjwq5aC8osWZ89u8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full btn-primary group/btn justify-center text-base"
                                    >
                                        <Navigation className="h-5 w-5 group-hover/btn:animate-pulse" />
                                        Get Directions
                                        <ExternalLink className="h-4 w-4 opacity-70" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
