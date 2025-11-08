import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <Hero />
      <Projects />
      <Services />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
