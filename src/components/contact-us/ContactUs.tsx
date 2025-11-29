"use client";

import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { Theme } from "@/lib/theme";
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactFooter() {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? Theme.backgroundColors.darkSection : Theme.backgroundColors.lightSection} py-16 px-6 md:px-20`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h2 className={`${Theme.typography.fontSize['3xl']} md:${Theme.typography.fontSize['4xl']} ${Theme.typography.fontWeight.bold} ${theme === 'dark' ? Theme.textColors.darkText : Theme.textColors.lightText}`}>
            Let’s Connect and <span className={Theme.textColors.success}>Secure Your Success</span>
          </h2>
          <p className={`${theme === 'dark' ? Theme.textColors.darkMuted : Theme.textColors.lightMuted} ${Theme.typography.fontSize.lg} md:${Theme.typography.fontSize.xl}`}>
            We’re here to help strengthen your IT foundation. Reach out now for a personalized consultation or quote – our experts will respond within one business day to get you on the road to worry-free IT.
          </p>
          <a
            href="#"
            className={`inline-block mt-2 px-6 py-3 ${Theme.backgroundColors.secondary} ${Theme.textColors.light} ${Theme.typography.fontWeight.semibold} ${Theme.borderRadius.lg} ${Theme.shadows.lg} hover:${Theme.backgroundColors.secondaryHover} ${Theme.transitions.all} duration-300`}
          >
            Book a Consultation
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className={`${Theme.backgroundColors.secondary} p-8 ${Theme.borderRadius.full} ${Theme.shadows.lg} flex items-center justify-center`}>
            <FaNetworkWired className={`${Theme.textColors.success} w-16 h-16`} />
          </div>
        </div>
      </div>
    </section>
  );
}