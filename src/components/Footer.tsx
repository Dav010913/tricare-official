import Link from 'next/link';
import content from '@/data/content.json';

export default function Footer() {
    const { siteConfig } = content;

    return (
        <footer className="bg-white border-t border-slate-100 pt-16 md:pt-24 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">

                    {/* Col 1: Brand Identity */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2 text-slate-900 mb-4">
                            <span className="text-xl font-black tracking-tighter uppercase">TRICARE</span>
                        </div>
                        <p className="text-[11px] text-slate-400 max-w-[180px] leading-relaxed uppercase tracking-wider">
                            Precision Sourcing for Modern Manufacturing.
                        </p>
                    </div>

                    {/* Col 2: Directory */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
                            Directory
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'Categories', 'Compliance', 'Insight'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Connect */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
                            Connect
                        </h4>
                        <ul className="space-y-5">
                            <li>
                                <span className="block text-[9px] font-black text-slate-300 mb-1 tracking-widest">EMAIL</span>
                                <a href={`mailto:${siteConfig.contactEmail}`} className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors break-all">
                                    {siteConfig.contactEmail}
                                </a>
                            </li>
                            <li>
                                <span className="block text-[9px] font-black text-slate-300 mb-1 tracking-widest">ABN</span>
                                <span className="text-xs font-mono text-slate-500">
                                    {siteConfig.abn}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Headquarters */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
                            Headquarters
                        </h4>
                        <p className="text-xs font-bold text-slate-900 mb-1">
                            Sydney, Australia
                        </p>
                        <p className="text-[11px] text-slate-400 uppercase tracking-wide">
                            Global Sourcing Hub
                        </p>
                    </div>

                </div>
            </div>

            {/* Bottom Bar: The "Boutique Lab" Precision Row */}
            <div className="border-t border-slate-50 mt-12 pt-10">
                <div className="container flex justify-center">
                    <p className="!text-[9px] !tracking-[0.4em] uppercase text-slate-400 font-medium text-center">
                        © 2026 Tricare Global. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}