
'use client'
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Theme } from "@/lib/theme";

interface ServiceCardProps {
  badgeIcon: ReactNode;
  title: string;
  heading: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  gradient: string;
}

export default function ServiceCard({
  badgeIcon,
  title,
  heading,
  description,
  linkLabel,
  linkHref,
  gradient,
}: ServiceCardProps) {
  return (
    
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.04, y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={`${Theme.backgroundColors.gray100} ${Theme.borderRadius['3xl']} p-6 ${Theme.shadows.md} border border-gray-200 relative overflow-visible flex flex-col h-full`}
    >
      <div className={`absolute -top-10 left-6 ${Theme.dimensions.badgeSize} ${Theme.backgroundColors.light} ${Theme.borderRadius.full} ${Theme.shadows.md} flex items-center justify-center border`}>
        {badgeIcon}
      </div>

      <div className="flex flex-col flex-grow justify-between mt-16">
        <div
          className={`${Theme.borderRadius['2xl']} h-32 ${Theme.textColors.light} ${Theme.typography.fontWeight.semibold} ${Theme.typography.fontSize['3xl']} flex items-center justify-center ${gradient}`}
        >
          {title}
        </div>

        <div className="mt-6 flex-grow">
          <a href={linkHref} className={`${Theme.textColors.purple900} ${Theme.typography.fontWeight.semibold} ${Theme.typography.fontSize.lg} hover:underline`}>
            {heading}
          </a>
          <p className={`${Theme.textColors.gray700} mt-2 ${Theme.typography.fontSize.base} leading-relaxed text-justify`}>
            {description}
          </p>
        </div>

        
        <a
          className={`mt-6 flex items-center gap-2 ${Theme.typography.fontWeight.medium} ${Theme.textColors.black} hover:underline`}
        >
          {linkLabel} <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}