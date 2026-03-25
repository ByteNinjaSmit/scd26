"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Cloud, ChevronRight } from "lucide-react";

const tracks = [
    {
        name: "Track 1",
        title: "Cloud Career & Security",
        venue: "Solar Banquet Hall",
        icon: Sparkles,
        description: "Focus on cloud career paths, security engineering, and building resilient stateful systems on AWS.",
        gradient: "from-[#ff9900] to-amber-600",
    },
    {
        name: "Track 2",
        title: "DevOps & GenAI",
        venue: "TEDx / Seminar Hall",
        icon: Cloud,
        description: "Deep dive into production-ready GenAI, containerization with Docker, and high-availability hosting.",
        gradient: "from-blue-500 to-cyan-600",
    },
];

const Tracks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="tracks" className="section-padding relative overflow-hidden">
             {/* Background decorations */}
             <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Learning Tracks
                    </span>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl uppercase font-montserrat">
                        Choose Your Path
                    </h2>
                    <p className="text-white/60">
                        Dive deep into AWS technologies with our specialized tracks designed to accelerate your cloud journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(255,153,0,0.15)]">
                                {/* Glow Effect */}
                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${track.gradient} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 rounded-full blur-3xl`} />
                                
                                <div className="relative z-10">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${track.gradient} mb-6 shadow-lg`}>
                                        <track.icon className="h-6 w-6 text-white" />
                                    </div>
                                    
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                            {track.name}
                                        </span>
                                        <span className="h-px w-8 bg-primary/20" />
                                        <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
                                            {track.venue}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 font-montserrat uppercase">
                                        {track.title}
                                    </h3>
                                    
                                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                                        {track.description}
                                    </p>

                                    <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest group/link">
                                        View Schedule
                                        <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
