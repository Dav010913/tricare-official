import { Search, Cog, Target, ArrowRight } from 'lucide-react';
import { TechIcon } from '@/components/TechIcon';
import content from '@/data/content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insight | Tricare',
    description: content.pages.insight.header,
};

const stepIcons = [
    <TechIcon key="0" icon={Search} className="w-12 h-12" />,
    <TechIcon key="1" icon={Cog} className="w-12 h-12" />,
    <TechIcon key="2" icon={Target} className="w-12 h-12" />,
];

export default function Insight() {
    const { insight } = content.pages;

    return (
        <div className="flex flex-col gap-0 bg-slate-50">
            {/* 
                Hero Section: "Gold Standard" Boutique Lab
                Layout: Mobile pt-24 pb-24, Desktop pt-32 pb-40
            */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.png"
                        alt="Laboratory Crystal Texture"
                        className="w-full h-full object-cover opacity-20"
                    />
                    {/* Light Overlay for Airiness */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent" />
                </div>

                <div className="container relative z-10 pt-24 pb-24 md:pt-32 md:pb-40">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Tech Label */}
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                            <span className="font-mono text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                                03 // ANALYSIS
                            </span>
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 drop-shadow-sm leading-tight">
                            Insight
                        </h1>

                        {/* Subtitle: text-lg md:text-xl */}
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                            {insight.header}
                        </p>
                    </div>
                </div>
            </section>

            {/* Steps Grid - Negative Margin: -mt-16 md:-mt-32 */}
            <section className="relative z-20 -mt-16 md:-mt-32 pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insight.steps.map((step, index) => {
                            const [title, ...descParts] = step.split(' — ');
                            const description = descParts.join(' — ');

                            return (
                                <div
                                    key={index}
                                    className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all relative"
                                >
                                    <div className="absolute top-6 right-6 text-6xl font-black text-slate-200/50 z-0 select-none">
                                        0{index + 1}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="mb-8">
                                            {stepIcons[index]}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">
                                            {title}
                                        </h3>
                                        {description && (
                                            <p className="text-slate-600 text-base m-0 leading-relaxed">
                                                {description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Metrics - Spacing: mt-24 pb-20 */}
            {/* Reworked to remove BLACK background. Now White/Light. */}
            <section className="bg-slate-50 border-t border-slate-200 mt-24 pb-20">
                <div className="container pt-16">
                    <div className="p-6 md:p-10 rounded-sm bg-white border border-slate-100 shadow-sm relative overflow-hidden">

                        {/* Decorative Element - Soft Blue instead of dark */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 border-b border-slate-100 pb-8">
                                <div className="border-l-4 border-[#2563eb] pl-6">
                                    <span className="tech-label text-slate-500 block mb-2">03.1 // CRITERIA</span>
                                    <h2 className="text-3xl font-black text-slate-900 m-0">Assessment Parameters</h2>
                                </div>
                                <div className="text-slate-600 text-sm max-w-sm">
                                    Standard technical metrics evaluated during the sourcing process.
                                </div>
                            </div>

                            {/* Responsive Grid: cols-2 md:cols-4 */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                                {[
                                    { metric: 'Particle Size', unit: 'μm' },
                                    { metric: 'Moisture', unit: '%' },
                                    { metric: 'Solubility', unit: 'ml' },
                                    { metric: 'Consistency', unit: 'σ' },
                                ].map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-5xl font-black text-blue-500 mb-2">{item.unit}</div>
                                        <div className="text-sm font-bold tracking-widest uppercase text-slate-500">{item.metric}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
