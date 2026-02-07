import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import WhyAttend from "@/components/landing/WhyAttend";
import Tracks from "@/components/landing/Tracks";
import Speakers from "@/components/landing/Speakers";
import Agenda from "@/components/landing/Agenda";
import Tickets from "@/components/landing/Tickets";
import Supporters from "@/components/landing/Supporters";
import Organizers from "@/components/landing/Organizers";
import Venue from "@/components/landing/Venue";
import Community from "@/components/landing/Community";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyAttend />
        <Tracks />
        <Speakers />
        <Agenda />
        <Tickets />
        <Supporters />
        <Organizers />
        <Venue />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
