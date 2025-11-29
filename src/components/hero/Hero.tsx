'use client';

import HeroIcons from "./HeroIcons";
import { Theme } from "@/lib/theme";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { AnimatedWords } from "@/lib/animatedText";
export default function Hero() {
  const [animationData, setAnimationData] = useState<any>(null);
  

  return (
    <section className="w-full bg-gradient-to-br from-from-purple-900 via-violet-800 to-indigo-900 animate-gradient  py-30 px-6 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
    
        <motion.h1 
          className={`${Theme.typography.fontSize['6xl']} lg:${Theme.typography.fontSize['6xl']} ${Theme.typography.fontWeight.bold} ${Theme.textColors.light} ${Theme.typography.lineHeight.tight}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          Compliance, Productivity, Security <br />
          <span className={Theme.textColors.blue300}>Handled</span>
        </motion.h1>

          <motion.p
          className={`mt-6 ${Theme.typography.fontSize.lg} lg:${Theme.typography.fontSize.xl}
          ${Theme.textColors.purple100} max-w-2xl mx-auto ${Theme.typography.lineHeight.relaxed} text-center`}
          initial={{ opacity: 1 }}  
          animate={{ opacity: 1 }}
        >
          <AnimatedWords
            text="
              Experience worry-free IT management that powers your business. Rabta's expert team keeps you compliant with regulations, boosts your team's productivity, and locks down your cybersecurity – all without interrupting your workflow.
            "
          />
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#quote"
            className={`inline-block ${Theme.backgroundColors.primary} ${Theme.textColors.light} px-8 py-4 ${Theme.typography.fontSize.lg} ${Theme.borderRadius.xl} hover:${Theme.backgroundColors.primaryHover} ${Theme.transitions.all} ${Theme.shadows.md}`}
          >
            Request My Quote
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <HeroIcons />
        </motion.div>
        
      </div>
    </section>
  );
}