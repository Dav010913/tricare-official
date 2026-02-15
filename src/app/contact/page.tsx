"use client";

import { Info, Globe, Upload } from 'lucide-react';
import content from '@/data/content.json';

export default function Contact() {
    const { contact } = content.pages;
    const { contactEmail } = content.siteConfig;

    return (
        <div className="flex flex-col gap-0 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.png"
                        alt="Laboratory Background"
                        className="w-full h-full object-cover opacity-15 grayscale"
                    />
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-transparent" />
                </div>

                <div className="container relative z-10 pt-32 pb-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                            <span className="font-mono text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase">
                                04 // COMMUNICATIONS
                            </span>
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter uppercase mb-6 drop-shadow-sm leading-none">
                            CONTACT
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-20 -mt-12 md:-mt-24 pb-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* Left Hero Card: LET'S CONNECT DIGITALLY */}
                        <div className="lg:col-span-8 relative overflow-hidden rounded-sm bg-[#F8FAFC] border border-slate-100 shadow-sm flex flex-col justify-center p-8 md:p-16 min-h-[400px]">
                            {/* Geometric/Molecular Background Pattern */}
                            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                        </pattern>
                                        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                    <rect width="100%" height="100%" fill="url(#dots)" />
                                    {/* Molecular lines */}
                                    <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="2" />
                                    <line x1="30%" y1="40%" x2="20%" y2="70%" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="10%" cy="20%" r="4" fill="currentColor" />
                                    <circle cx="30%" cy="40%" r="4" fill="currentColor" />
                                    <circle cx="20%" cy="70%" r="4" fill="currentColor" />
                                </svg>
                            </div>

                            <div className="relative z-10 max-w-xl">
                                <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[0.9] mb-6">
                                    LET’S CONNECT <br /> DIGITALLY
                                </h2>
                                <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10">
                                    We&apos;re building something new, for a smarter way to connect.
                                </p>
                                <div className="inline-flex p-4 rounded-full bg-blue-50 border border-blue-100">
                                    <Upload className="w-8 h-8 text-[#0052CC]" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        {/* Right Info Cards */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {/* Email Card */}
                            <div className="p-8 md:p-10 rounded-sm bg-white border border-slate-100 shadow-sm flex flex-col justify-center">
                                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase block mb-4 text-slate-400">Primary Email</span>
                                <a href={`mailto:${contactEmail}`} className="text-xl md:text-2xl font-black text-[#0052CC] break-all hover:underline leading-tight">
                                    {contactEmail}
                                </a>
                            </div>

                            {/* Notice Card */}
                            <div className="p-8 md:p-10 rounded-sm bg-white border border-slate-100 shadow-sm border-l-4 border-l-amber-400 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-4">
                                    <Info className="w-4 h-4 text-[#0052CC]" />
                                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#0052CC]">Notice</span>
                                </div>
                                <p className="text-[#1A1A1A] text-lg font-bold m-0 leading-tight">
                                    No file uploads on the site — please email COA/SDS to the address above.
                                </p>
                            </div>

                            {/* Global Network Card */}
                            <div className="p-8 md:p-10 rounded-sm bg-white border border-slate-100 shadow-sm flex flex-col justify-center">
                                <Globe className="w-10 h-10 text-[#0052CC] mb-6" strokeWidth={1.5} />
                                <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-3">Global Network</h3>
                                <p className="text-slate-500 text-base font-medium m-0 leading-relaxed">
                                    Connecting suppliers and manufacturers worldwide.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
