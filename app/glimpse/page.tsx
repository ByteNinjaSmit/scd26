"use client";

import { motion } from "framer-motion";
import Masonry from "@/components/ui/Masonry";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useTheme } from "@/components/ThemeProvider";

import glimpsData from "@/lib/data/gallery.json";

const CLOUD_NAME = "dqiccx9zt";
const OPTIMIZED_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_800`;
const BLUR_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_50,e_blur:1000`;

const glimpsItems = glimpsData.map(asset => ({
    id: asset.public_id,
    img: `${OPTIMIZED_BASE}/${asset.public_id}`,
    blur: `${BLUR_BASE}/${asset.public_id}`,
    width: asset.width,
    height: asset.height,
    alt: `SCD'26 Event Image ${asset.public_id}`,
    url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${asset.public_id}`
}));

export default function GlimpsPage() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen ${theme === "dark" ? "bg-[#050505]" : "bg-white"}`}>
            <Navbar />
            
            <main className="pt-32 pb-20 overflow-hidden">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 ${theme === "dark" ? "text-white" : "text-aws-navy"}`}>
                            SCD'26 <span className="text-primary text-gradient-orange">Glimpse</span>
                        </h1>
                        <p className={`max-w-2xl mx-auto text-lg ${theme === "dark" ? "text-white/60" : "text-aws-navy/60"}`}>
                            Relive the moments of AWS Student Community Day Sanjivani 2026. 
                            From technical deep dives to community connections.
                        </p>
                    </motion.div>

                    <div className="min-h-[1000px]">
                        <Masonry
                            items={glimpsItems}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.03}
                            animateFrom="bottom"
                            scaleOnHover
                            hoverScale={0.98}
                            blurToFocus
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
