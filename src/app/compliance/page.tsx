import { FileText, Shield, Lock, ArrowRight } from 'lucide-react';
import { TechIcon } from '@/components/TechIcon';
import content from '@/data/content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Compliance & QA | Tricare Global',
    description: content.pages.compliance.header,
};

const complianceIcons = [
    <TechIcon key="0" icon={FileText} className="w-12 h-12" />,
    <TechIcon key="1" icon={Shield} className="w-12 h-12" />,
    <TechIcon key="2" icon={Lock} className="w-12 h-12" />,
];

export default function Compliance() {
    const { compliance } = content.pages;

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
                                02 // QA & SAFETY
                            </span>
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 drop-shadow-sm leading-tight">
                            Compliance
                        </h1>

                        {/* Subtitle: text-lg md:text-xl */}
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
                            {compliance.header}
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid - Negative Margin: -mt-16 md:-mt-32 */}
            <section className="relative z-20 -mt-16 md:-mt-32 pb-0">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {compliance.points.map((point, index) => (
                            <div
                                key={index}
                                className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all h-full"
                            >
                                <div className="mb-6">
                                    {complianceIcons[index]}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">
                                    {point.label}
                                </h3>
                                <p className="text-slate-600 text-base m-0 leading-relaxed">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Container - Spacing: mt-24 py-20 - Internal Padding: p-6 md:p-10 */}
            <section className="py-20 bg-slate-50 border-t border-slate-200 mt-24">
                <div className="container">
                    <div className="p-6 md:p-10 rounded-sm bg-white border border-slate-100 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#2563eb] mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Data & Privacy Protocols</h2>
                            <p className="text-lg text-slate-600 mb-0 max-w-2xl mx-auto">
                                All supplier communications are handled via secure channels. NDAs are available upon request for sensitive formulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
