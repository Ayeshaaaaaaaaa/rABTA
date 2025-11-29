import { CheckCircle, BarChart2, ShieldCheck } from "lucide-react";
import { Theme } from "@/lib/theme";
import { motion } from "framer-motion";

export default function HeroIcons() {
  return (
    <div className="mt-14 flex justify-center gap-12 flex-wrap">

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: "0px 6px 20px rgba(0,0,0,0.15)" }}
          className={`${Theme.sizes.icon} ${Theme.borderColors.primary} border-2 ${Theme.borderRadius.full} flex items-center justify-center`}
        >
          <CheckCircle size={48} className={Theme.textColors.primary} />
        </motion.div>

        <p className={`${Theme.sizes.gap} ${Theme.typography.fontWeight.extrabold} ${Theme.textColors.light}`}>
          Compliance
        </p>
      </motion.div>

      <div className={`hidden md:block ${Theme.sizes.line} ${Theme.backgroundColors.primary}`} />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: "0px 6px 20px rgba(0,0,0,0.15)" }}
          className={`${Theme.sizes.icon} ${Theme.borderColors.success} border-2 ${Theme.borderRadius.full} flex items-center justify-center`}
        >
          <BarChart2 size={48} className={Theme.textColors.success} />
        </motion.div>

        <p className={`${Theme.sizes.gap} ${Theme.typography.fontWeight.extrabold} ${Theme.textColors.success}`}>
          Productivity
        </p>
      </motion.div>

      <div className={`hidden md:block ${Theme.sizes.line} ${Theme.backgroundColors.primary}`} />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: "0px 6px 20px rgba(0,0,0,0.15)" }}
          className={`${Theme.sizes.icon} ${Theme.borderColors.secondary} border-2 ${Theme.borderRadius.full} flex items-center justify-center`}
        >
          <ShieldCheck size={48} className={Theme.textColors.secondary} />
        </motion.div>

        <p className={`${Theme.sizes.gap} ${Theme.typography.fontWeight.extrabold} ${Theme.textColors.primary}`}>
          Security
        </p>
      </motion.div>
    </div>
  );
}
