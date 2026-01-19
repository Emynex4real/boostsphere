"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  UserPlus, 
  Wallet, 
  MousePointerClick, 
  TrendingUp,
  ArrowRight,
  HelpCircle,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Footer = () => (
  <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-white fill-current" />
        </div>
        <span className="font-bold text-xl text-slate-900">BoostSphere</span>
      </div>
      <p className="text-xs text-slate-500 mb-6">The #1 SMM Panel for Resellers.</p>
      <div className="text-xs text-slate-400">© 2026 BoostSphere Inc. All rights reserved.</div>
    </div>
  </footer>
);

const steps = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up for free. No credit card or ID required. It takes less than 30 seconds.",
    icon: UserPlus,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Add Funds",
    desc: "Deposit funds into your wallet using Bank Transfer, Card, or Crypto via our secure gateways.",
    icon: Wallet,
    color: "bg-green-50 text-green-600"
  },
  {
    id: 3,
    title: "Select Service",
    desc: "Choose from 1,000+ services for Instagram, TikTok, or YouTube and paste your link.",
    icon: MousePointerClick,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    title: "Watch it Grow",
    desc: "Sit back and relax. Our automated system starts delivering your order instantly.",
    icon: TrendingUp,
    color: "bg-pink-50 text-pink-600"
  }
];

const faqs = [
  { q: "Do you need my password?", a: "No. We will never ask for your social media password. We only need the public link to your post or profile." },
  { q: "Is it safe for my account?", a: "Yes. We use high-quality profiles and natural delivery patterns to keep your account 100% safe." },
  { q: "How long does it take?", a: "Most orders start instantly (within minutes). Larger orders are delivered gradually to look organic." },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            Simple Process
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display">
            Go Viral in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-display">4 Simple Steps</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            BoostSphere makes social growth easy. No complex setups, no passwords, just instant results.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.color}`}>
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute top-4 right-6 text-6xl font-extrabold text-slate-100 -z-10">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-blue-500" /> {faq.q}
                </h4>
                <p className="text-sm text-slate-500 ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0B1120] rounded-[2.5rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Ready to boost your presence?
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Join 2,300+ creators and businesses growing with BoostSphere today.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link href="/auth" className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                  Get Started Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
