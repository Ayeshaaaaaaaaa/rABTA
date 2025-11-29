import { Theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";


export default function USPCard({ title, description }: { title: string; description: string }) {
return (
<div
className={`relative p-8 ${Theme.dimensions.cardHeight} flex flex-col justify-between ${Theme.borderRadius['3xl']} border border-white/15 ${Theme.shadows.xl} ${Theme.transitions.all} group
${Theme.backgroundColors.gradientPurpleDark}
${Theme.effects.hoverShadowPurple} ${Theme.effects.borderPurple40}`}
>
<div>
<h3 className={`${Theme.typography.fontSize["3xl"]} ${Theme.typography.fontWeight.bold} ${Theme.textColors.light} ${Theme.typography.lineHeight.tight}`}>{title}</h3>
<p className={`${Theme.typography.fontSize.lg} ${Theme.typography.fontWeight.medium} ${Theme.typography.lineHeight.normal} mt-4 ${Theme.textColors.light} text-justify`}>{description}</p>
</div>


<div className="flex items-center justify-between mt-6">
<div className="flex items-center gap-2 text-white/80">
<div className={`w-8 h-8 ${Theme.borderRadius.full} ${Theme.effects.bgWhite10} flex items-center justify-center`} />
<span className="text-sm font-medium">Learn More</span>
</div>


<div className={`p-3 ${Theme.borderRadius.full} ${Theme.effects.bgWhite10} group-hover:bg-purple-600 ${Theme.transitions.all} ${Theme.shadows.lg}`}>
<ArrowRight className="w-4 h-4 text-white" />
</div>
</div>
</div>
);
}