
import { Theme } from "@/lib/theme";
import { useTheme } from '@/contexts/ThemeContext';

interface PainPointCardProps {
  title: string;
  description: string;
}

export default function PainPointCard({ title, description }: PainPointCardProps) {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? Theme.backgroundColors.darkCard : Theme.backgroundColors.lightCard} ${Theme.borderRadius.lg} ${Theme.shadows.md} p-6 flex flex-col gap-3`}>
      <h3 className={`${Theme.typography.fontSize.xl} ${Theme.typography.fontWeight.semibold} ${theme === 'dark' ? Theme.textColors.darkText : Theme.textColors.lightText}`}>{title}</h3>
      <p className={theme === 'dark' ? Theme.textColors.darkMuted : Theme.textColors.lightMuted}>{description}</p>
    </div>
  );
}