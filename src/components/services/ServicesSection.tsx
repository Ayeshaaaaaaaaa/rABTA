'use client'
import { useState } from "react";
import { Headphones, ShieldCheck, RefreshCcw, Network, Brain, Phone, Router, Cloud, Book, HeartPlus, ToolCase, HousePlus, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { AnimatePresence } from "framer-motion";
import { Theme } from "@/lib/theme";
import { services } from "@/data/serviceItems"; 
export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const cardsPerView = 3;
  const totalPages = Math.ceil(services.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCards = services.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  return (
    <section className={`py-15 ${Theme.backgroundColors.brandDark}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`${Theme.typography.fontSize['4xl']} md:${Theme.typography.fontSize['5xl']} ${Theme.typography.fontWeight.bold} ${Theme.textColors.light} text-center mb-12`}>
          Services
        </h2>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 pt-12">
          <AnimatePresence mode="wait">
            {visibleCards.map((service, index) => (
              <ServiceCard 
                key={`${currentIndex}-${index}`} 
                {...service} 
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className={`p-3 ${Theme.borderRadius.full} ${Theme.backgroundColors.purple900} ${Theme.textColors.light} hover:${Theme.backgroundColors.indigo700} ${Theme.transitions.all} ${Theme.shadows.lg}`}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#5d3eff] w-8" : "bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className={`p-3 ${Theme.borderRadius.full} ${Theme.backgroundColors.purple900} ${Theme.textColors.light} hover:${Theme.backgroundColors.indigo700} ${Theme.transitions.all} ${Theme.shadows.lg}`}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}