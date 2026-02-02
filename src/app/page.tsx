import { FlaskConical, FileCheck, Globe, ArrowRight } from 'lucide-react';
import { TechIcon } from '@/components/TechIcon';
import content from '@/data/content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tricare Global | Premium Ingredient Sourcing & Manufacturing Insights (Est. 2015)",
  description: "Australian-based specialist in high-fidelity ingredient sourcing and global manufacturing compliance. Since 2015, Tricare provides technical insights and supply chain security for health and nutrition manufacturers worldwide.",
  keywords: "Ingredient Sourcing Australia, Nutraceutical Compliance, Manufacturing Insights, Supply Chain Security",
};

export default function Home() {
  const { home } = content.pages;
  const { estYear } = content.siteConfig;

  const quickFactIcons = [
    <TechIcon key="0" icon={FileCheck} className="w-12 h-12" />,
    <TechIcon key="1" icon={FlaskConical} className="w-12 h-12" />,
    <TechIcon key="2" icon={Globe} className="w-12 h-12" />,
  ];

  return (
    <div className="flex flex-col gap-0 bg-slate-50">
      {/* 
        Hero Section: "Gold Standard" Boutique Lab
        Layout: Mobile pt-24 pb-24, Desktop pt-32 pb-40
      */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
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
          <div className="max-w-5xl mx-auto text-center">
            {/* Tech Label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-slate-300"></div>
              <span className="font-mono text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                Est. {estYear} // Global Sourcing
              </span>
              <div className="h-[1px] w-12 bg-slate-300"></div>
            </div>

            {/* Title: Mobile text-3xl, Desktop text-6xl */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 drop-shadow-sm leading-tight">
              {home.title}
            </h1>

            {/* Subtitle: text-lg md:text-xl */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              {home.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/categories" className="btn-primary shadow-lg shadow-blue-500/10 rounded-sm">
                View Categories
              </a>
              <a href="/contact" className="px-8 py-3 rounded-sm font-bold text-slate-600 border border-slate-200 hover:bg-white hover:text-slate-900 transition-all bg-white/50 backdrop-blur-sm">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Negative Margin: Mobile -mt-16, Desktop -mt-32 */}
      <section className="relative z-20 -mt-16 md:-mt-32 pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.quickFacts.map((fact: any, index: number) => (
              <div
                key={index}
                className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm transition-all"
              >
                <div className="mb-6">
                  {quickFactIcons[index]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">
                  {fact.title}
                </h3>
                <p className="text-slate-600 text-base m-0 leading-relaxed">
                  {fact.text}
                </p>
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
              <div className="section-header border-l-4 border-[#2563eb] pl-6 mb-8">
                <span className="tech-label">04 // CONNECT</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 m-0">
                  Ready to discuss sourcing?
                </h2>
              </div>
              <p className="text-lg text-slate-600 mb-0">
                We work with manufacturers worldwide to source production-ready ingredients.
              </p>
            </div>
            <div className="relative z-10">
              <a href="/contact" className="btn-primary text-lg px-10 py-4 shadow-lg shadow-blue-500/10 rounded-sm">
                Contact Us
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
