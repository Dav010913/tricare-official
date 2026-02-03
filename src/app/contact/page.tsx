"use client";

import { useState } from 'react';
import { Mail, Info, Globe, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { TechIcon } from '@/components/TechIcon';
import content from '@/data/content.json';

export default function Contact() {
    const { contact } = content.pages;
    const { contactEmail } = content.siteConfig;

    // 状态管理：idle | sending | success | error
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);
        
        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                // @ts-ignore
                body: new URLSearchParams(formData).toString(),
            });
            setStatus('success');
            form.reset(); // 提交成功后清空表单
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="flex flex-col gap-0 bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/hero-bg.png"
                        alt="Laboratory Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent" />
                </div>

                <div className="container relative z-10 pt-24 pb-24 md:pt-32 md:pb-40">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                            <span className="font-mono text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                                04 // COMMUNICATIONS
                            </span>
                            <div className="h-[1px] w-12 bg-slate-300"></div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 drop-shadow-sm leading-tight">
                            Contact
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                            {contact.header}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-20 -mt-16 md:-mt-32 pb-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Form Section */}
                        <div className="lg:col-span-2 p-6 md:p-10 rounded-sm bg-white border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
                                <TechIcon icon={Send} className="w-10 h-10" />
                                <h2 className="text-2xl font-bold text-slate-900 m-0">Send Message</h2>
                            </div>

                            {status === 'success' ? (
                                <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                                    <button 
                                        onClick={() => setStatus('idle')}
                                        className="text-blue-600 font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    name="contact"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    data-netlify="true"
                                >
                                    {/* 关键：Netlify 识别表单所需的隐藏字段 */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Name</label>
                                            <input type="text" name="name" required placeholder="Full Name" className="w-full h-12 md:h-14 p-3 md:px-4 bg-slate-50 border border-slate-200 rounded-[2px] focus:border-[#2563eb] outline-none transition-colors text-slate-600 placeholder:text-slate-400" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Email</label>
                                            <input type="email" name="email" required placeholder="email@company.com" className="w-full h-12 md:h-14 p-3 md:px-4 bg-slate-50 border border-slate-200 rounded-[2px] focus:border-[#2563eb] outline-none transition-colors text-slate-600 placeholder:text-slate-400" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Company</label>
                                        <input type="text" name="company" placeholder="Company Name" className="w-full h-12 md:h-14 p-3 md:px-4 bg-slate-50 border border-slate-200 rounded-[2px] focus:border-[#2563eb] outline-none transition-colors text-slate-600 placeholder:text-slate-400" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Message</label>
                                        <textarea name="message" required rows={5} placeholder="How can we help?" className="w-full p-3 md:p-4 bg-slate-50 border border-slate-200 rounded-[2px] focus:border-[#2563eb] outline-none transition-colors text-slate-600 placeholder:text-slate-400"></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-sm font-bold">Something went wrong. Please try again or email us directly.</p>
                                    )}

                                    <div className="pt-4">
                                        <button 
                                            type="submit" 
                                            disabled={status === 'sending'}
                                            className="btn-primary w-full md:w-auto text-lg px-10 py-4 rounded-sm shadow-lg shadow-blue-500/20 disabled:opacity-70 flex items-center justify-center gap-2"
                                        >
                                            {status === 'sending' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Submit Inquiry'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Info Cards */}
                        <div className="flex flex-col gap-6">
                            <div className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <span className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-2 text-slate-400">Primary Email</span>
                                <a href={`mailto:${contactEmail}`} className="text-lg font-bold text-[#2563eb] break-all hover:underline">
                                    {contactEmail}
                                </a>
                            </div>

                            <div className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm border-l-4 border-l-amber-400 hover:shadow-md transition-all">
                                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-600 block mb-3">Notice</span>
                                <p className="text-slate-600 text-base m-0 leading-relaxed">
                                    {contact.note}
                                </p>
                            </div>

                            <div className="p-6 md:p-10 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <Globe className="w-8 h-8 text-[#2563eb] mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Global Network</h3>
                                <p className="text-slate-600 text-sm m-0 leading-relaxed">
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