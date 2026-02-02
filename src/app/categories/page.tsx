import { FlaskConical, Leaf, Droplets, Dna, Beaker, ArrowRight } from 'lucide-react';
import { TechIcon } from '@/components/TechIcon';
import content from '@/data/content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ingredient Categories | Tricare Global',
    description: content.pages.categories.intro,
};

export default function Categories() {
    const { categories } = content.pages;

    const categoryIcons = [
        <TechIcon key="0" icon={Droplets} className="w-12 h-12" />,
        <TechIcon key="1" icon={FlaskConical} className="w-12 h-12" />,
        <TechIcon key="2" icon={Beaker} className="w-12 h-12" />,
        <TechIcon key="3" icon={Dna} className="w-12 h-12" />,
        <TechIcon key="4" icon={Leaf} className="w-12 h-12" />,
    ];

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
                                01 // INGREDIENTS
                            </span>
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 drop-shadow-sm leading-tight">
                            Categories
                        </h1>

                        {/* Subtitle: text-lg md:text-xl */}
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                            {categories.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Grid - Negative Margin: -mt-16 md:-mt-32 */}
            <section className="relative z-20 -mt-16 md:-mt-32 pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.items.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    {categoryIcons[index]}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-base m-0 leading-relaxed mb-8 flex-grow">
                                    {item.desc}
                                </p>
                                <div className="pt-6 border-t border-slate-200/50 mt-auto">
                                    <span className="tech-label text-[#2563eb]">
                                        CAT. {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Spacing: py-16 - Internal Padding: p-6 md:p-10 */}
            <section className="py-16 bg-slate-50 border-t border-slate-200 mt-16">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 bg-white border border-slate-100 p-6 md:p-10 shadow-sm rounded-sm relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-3xl font-black text-slate-900 mb-2">Need something else?</h2>
                            <p className="m-0 text-slate-600">Specialized sourcing available on request.</p>
                        </div>
                        <div className="relative z-10">
                            <a href="/contact" className="btn-primary text-lg px-10 py-4 shadow-lg shadow-blue-500/10 rounded-sm">
                                Request Information
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
