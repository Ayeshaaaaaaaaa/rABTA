import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import PainPointsSection from "@/components/pain-points/PainPointSection";
import ServicesSection  from "@/components/services/ServicesSection";
import USPSection from "@/components/usp/USPSection";
import Calculator from "@/components/calculator/Calculator";
import ContactUS from "@/components/contact-us/ContactUs";
import { Theme } from "@/lib/theme";

export default function Home() {
  return (
    <div className={`min-h-screen ${Theme.backgroundColors.light} flex flex-col`}>
      <Header />

      <main className="flex flex-col">
        <Hero />
        <ServicesSection />
        <USPSection />
        <Calculator />
       <section id="contact">
          <ContactUS />
        </section>


      </main>
    </div>
  );
}