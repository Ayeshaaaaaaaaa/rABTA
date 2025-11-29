import { Theme } from "@/lib/theme";

export default function NavLinks() {
  const links = ["Products", "Solutions", "Services", "Contact Us"];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <a
          key={link}
          href={link === "Contact Us" ? "#contact" : "#"} 
          className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.medium} hover:${Theme.textColors.gray300} ${Theme.transitions.all}`}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}