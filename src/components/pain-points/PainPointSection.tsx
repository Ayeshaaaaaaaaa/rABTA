
import PainPointCard from "./PainPointCard";
import { Theme } from "@/lib/theme";
import { useTheme } from '@/contexts/ThemeContext';

const painPoints = [
  {
    title: "IT Issues Disrupting Workday?",
    description: "We proactively prevent downtime and tech headaches so your team stays focused and stress-free.",
  },
  {
    title: "Data Security Concerns?",
    description: "Our cybersecurity experts guard your data 24/7 so you never have to think twice about security.",
  },
  {
    title: "Compliance Worries?",
    description: "We keep your systems and documentation audit-ready, so compliance is one less burden.",
  },
  {
    title: "Slow IT Support?",
    description: "Rabta’s friendly help desk resolves issues quickly with a personal touch that keeps users happy.",
  },
];

export default function PainPointsSection() {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? Theme.backgroundColors.darkSection : Theme.backgroundColors.lightSection} max-w-7xl mx-auto px-6 py-20`}>
      <h2 className={`${Theme.typography.fontSize['3xl']} ${Theme.typography.fontWeight.bold} ${theme === 'dark' ? Theme.textColors.darkText : Theme.textColors.lightText} mb-10`}>Pain Points We Solve</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {painPoints.map((point, idx) => (
          <PainPointCard key={idx} title={point.title} description={point.description} />
        ))}
      </div>
    </section>
  );
}