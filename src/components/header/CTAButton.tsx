import { Theme } from "@/lib/theme";

export default function CTAButton() {
  return (
    <button className={`${Theme.backgroundColors.cyan} ${Theme.textColors.dark} ${Theme.typography.fontWeight.medium} px-5 py-2 ${Theme.borderRadius.lg} ${Theme.shadows.md} hover:${Theme.backgroundColors.cyanHover} ${Theme.transitions.all}`}>
      Get started
    </button>
  );
}