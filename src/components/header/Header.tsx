import Image from "next/image";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import { Theme } from "@/lib/theme";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className={`w-full ${Theme.backgroundColors.brandDark} ${Theme.textColors.light} sticky top-0 z-50`}>
      
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 h-20">
      
        <div className="flex items-center gap-10">
         
          <Image
            src="/rabta_logo.png"
            alt="Rabta Logo"
            width={200}
            height={50}
            className="cursor-pointer"
          />

          <NavLinks />
        </div>

        <div className="flex items-center gap-6">
          <span className={`hidden md:block ${Theme.typography.fontSize.base} ${Theme.textColors.muted}`}>
            Solutions for IT Teams
          </span>

          <ThemeToggle />

          <button className={`${Theme.typography.fontSize.base} ${Theme.textColors.muted} hover:opacity-100`}>Login</button>

          <CTAButton />
        </div>
      </div>
      <div className={`h-2 ${Theme.backgroundColors.brandGradient}`} />
    </header>
  );
}