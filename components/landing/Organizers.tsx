"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Shield, Zap } from "lucide-react";
import Image from "next/image";

/* ─────────── DATA ─────────── */

interface Member {
    name: string;
    designation: string;
    gradient: string;
    image?: string;
}

const organizers: Member[] = [
    { name: "Prof. Atul Mokal", designation: "Organizer", gradient: "from-blue-600 to-indigo-600", image: "/organiser/1536246949775-atul mokal.jpg" },
    { name: "Soham Deshmukh", designation: "Organizer", gradient: "from-primary to-orange-600", image: "/organiser/soham-deshmukh.jpeg" },
    { name: "Bhoomi Raut", designation: "Organizer", gradient: "from-purple-600 to-violet-600", image: "/organiser/bhoomi-raut.png"},
];

const operationsLeads: Member[] = [
    { name: "Atharva Narkhede", designation: "Operations Lead", gradient: "from-emerald-500 to-teal-600", image: "/organiser/atharva_narkhede.png" },
    { name: "Smitraj Bankar", designation: "Operations Lead", gradient: "from-cyan-500 to-blue-600", image: "/organiser/smitraj_bankar.jpeg" },
];

const coreCommitteeData = [
    { name: "Abhishek Sethi", image: "/organiser/UIT2M1121 - Abhishek Sethi.jpeg" },
    { name: "Aditya Arangale", image: "/organiser/IMG_20260313_191019 - Aditya Arangale.jpg" },
    { name: "Akanksha Muthe", image: "/organiser/SAVE_20250120_112941 - Akanksha Suresh Muthe.jpg" },
    { name: "Anushka Bhor", image: "/organiser/20250416_085059 - Anushka Bhor.jpg" },
    { name: "Arpita Anap", image: "/organiser/IMG_20260321_124713 - Arpita Anap.jpg" },
    { name: "Aryan Giri", image: "/organiser/IMG_20260317_204531 - Aryan Giri.jpg" },
    { name: "Atharv Gaikwad", image: "/organiser/IMG_0541 - Atharv Gaikwad.jpeg" },
    { name: "Ayush Solanke", image: "/organiser/POTO-2025-11-23-16-54-50 - Ayush Solanke.jpg" },
    { name: "Chaitanya Gurav", image: "/organiser/file_0000000e5187208b8fdc4247109d797 - Chaitanya Gurav.png" },
    { name: "Chanchal Shinde", image: "/organiser/IMG-20260313-WA0024 - Chanchal Shinde.jpg" },
    { name: "Chetana Rajput", image: "/organiser/IMG_20260317_230922 - Chetana Rajput.jpg" },
    { name: "Gagan Gaware", image: "/organiser/IMG_4465 - Gagan Gaware.png" },
    { name: "Gayatri Bakale", image: "/organiser/file_00000000dc78720bafb6361ac1b784f0~2 - gayatri Bakle.png" },
    { name: "Harshad Vighe", image: "/organiser/1766232476700 - Harshad Vighe.jpg" },
    { name: "Harshada Salunke", image: "/organiser/photo of harshada.s - Harshada Salunke.jpeg" },
    { name: "Hindavi Shewale", image: "/organiser/Screenshot_20250713-094454_Instagram - Hindavi Shewale.jpg" },
    { name: "Manish Kharche", image: "/organiser/IMG_20260313_183743 - Manish Kharche.png" },
    { name: "Krish Bavariya", image: "/organiser/WhatsApp Image 2026-03-18 at 7.43.46 PM - KRISH BAVARIYA.jpeg" },
    { name: "Mahima Varma", image: "/organiser/IMG-20260315-WA0042 - Mahima Varma.jpg" },
    { name: "Manali Jawale", image: "/organiser/1000253346 - Manali Jawale.jpg" },
    { name: "More Nishad", image: "/organiser/IMG_7469 - Nishad More.jpeg" },
    { name: "Pooja Daware", image: "/organiser/IMG-20250807-WA0011 - Pooja Daware.jpg" },
    { name: "Prerna Bhamre", image: "/organiser/IMG-20260204-WA0002 - Prerna Bhamre.jpg" },
    { name: "Priyanka Tribhuvan", image: "/organiser/IMG-20260318-WA0006(1) - Priyanka Tribhuvan.jpg" },
    { name: "Priyanka Pawar", image: "/organiser/51370-removebg-preview - Priyanka Pawar.png" },
    { name: "Ritesh Gursal", image: "/organiser/IMG_20260314_201209 - Ritesh Gursal.jpg" },
    { name: "Rushikesh Arsule", image: "/organiser/IMG_20260323_204855 - Rushikesh Arsule.jpg" },
    { name: "Sahil Bansod", image: "/organiser/file_000000005b2071fa9a8a271a952379ab - Sahil Bansod.png" },
    { name: "Saikrishn Shelar", image: "/organiser/1774125908008 - Saikrishn Shelar.png" },
    { name: "Saish Aher", image: "/organiser/IMG_20260323_233037 - Saish Aher.png" },
    { name: "Sakshi Sandip Navale", image: "/organiser/DSC_3228 - Sakshi Navale.JPG" },
    { name: "Samradni Dahiphale", image: "/organiser/samradhni dahiphale.jpeg" },
    { name: "Samruddhi Bhosale", image: "/organiser/samruddhi bhosale.jpeg" },
    { name: "Samruddhi Ghorpade", image: "/organiser/IMG_20260317_160326 - Samruddhi Ghorpade.jpg" },
    { name: "Sanskruti Shinde", image: "/organiser/IMG_20240202_170719~2 - Sanskruti Shinde.jpg" },
    { name: "Suhas Muthe", image: "/organiser/IMG_8220 - Suhas Muthe.jpeg" },
    { name: "Vaishnavi Muthe", image: "/organiser/IMG_20260208_211756 - Vaishnavi Muthe.jpg" },
    { name: "Vivek Avhad", image: "/organiser/IMG_1008 - Vivek Avhad.jpeg" },
    { name: "Vrushabh Sakhale", image: "/organiser/IMG_20260317_165648 - VRUSHABH SAKHALE.png" },
    { name: "Nannaware Yash", image: "/organiser/Screenshot_20260314_181225 - Yash Nannaware.jpg" },
    { name: "Nayan Gawali", image: "/organiser/IMG_7675 - Nayan Gawali.jpeg" }
];

const coreCommittee: Member[] = coreCommitteeData.map(member => ({
    ...member,
    designation: "Core Committee",
    gradient: "from-slate-700 to-slate-900"
}));

/* ─────────── HELPERS ─────────── */

function getInitials(name: string) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

/* ─────────── COMPONENT ─────────── */

const MemberCard = ({ member, index, isSmall = false }: { member: Member, index: number, isSmall?: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-col items-center group"
        >
            <div className="relative mb-4">
                {/* Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${member.gradient} opacity-0 blur-lg rounded-full group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Avatar Circle */}
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`${isSmall ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-24 h-24 sm:w-28 sm:h-28'} rounded-full p-[1px] bg-gradient-to-b from-white/20 to-transparent relative z-10 overflow-hidden bg-card cursor-pointer`}
                >
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/5 flex items-center justify-center">
                        {member.image ? (
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                width={120} 
                                height={120} 
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                        ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                                <span className={`${isSmall ? 'text-sm' : 'text-xl'} font-bold text-white`}>
                                    {getInitials(member.name)}
                                </span>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
            
            <div className="text-center">
                <h4 className={`${isSmall ? 'text-[10px] sm:text-xs' : 'text-sm sm:text-base'} font-bold text-white uppercase tracking-wider mb-1 font-montserrat`}>
                    {member.name}
                </h4>
                <p className={`${isSmall ? 'text-[9px]' : 'text-[10px]'} text-primary font-medium uppercase tracking-[0.15em]`}>
                    {member.designation}
                </p>
            </div>
        </motion.div>
    );
};

const Organizers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="organizers" className="section-padding relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                        Event Organizers
                    </span>
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase font-montserrat">
                        The People Behind it
                    </h2>
                    <p className="text-white/60">
                        The passionate team dedicated to bringing you the largest student-led cloud event in the region.
                    </p>
                </motion.div>

                <div className="space-y-24 max-w-7xl mx-auto">
                    {/* Organizers Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <Shield className="h-5 w-5 text-primary" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest font-montserrat">Organizers</h3>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                            {organizers.map((member, i) => (
                                <MemberCard key={member.name} member={member} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Operations Leads Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <Zap className="h-5 w-5 text-emerald-500" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest font-montserrat">Operations Leads</h3>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl">
                            {operationsLeads.map((member, i) => (
                                <MemberCard key={member.name} member={member} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Core Committee Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <User className="h-5 w-5 text-slate-400" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest font-montserrat">Core Committee</h3>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-10 gap-x-6">
                            {coreCommittee.map((member, i) => (
                                <MemberCard key={member.name} member={member} index={i} isSmall />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;
