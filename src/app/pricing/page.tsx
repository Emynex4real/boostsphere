"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Footer = () => (
  <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <Image src="/images/PNG/Logo Black Text font 02.png" alt="BoostSphere" width={160} height={40} className="h-8 w-auto mx-auto mb-6" />
      <p className="text-xs text-slate-500 mb-6">The #1 SMM Panel for Resellers.</p>
      <div className="text-xs text-slate-400">© 2026 BoostSphere Inc. All rights reserved.</div>
    </div>
  </footer>
);

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    desc: "Perfect for individuals looking to boost their own profiles.",
    features: [
      "Access to 1,000+ Services",
      "Pay-as-you-go",
      "Instant Delivery",
      "24/7 Ticket Support",
      "Drip-feed Enabled"
    ],
    button: "Create Free Account",
    active: false
  },
  {
    name: "Reseller (Child Panel)",
    price: "₦18,000",
    period: "per month",
    desc: "Start your own SMM business. We host everything for you.",
    features: [
      "Everything in Starter",
      "Your Own Domain (white label)",
      "Set Your Own Prices",
      "Connect Unlimited APIs",
      "Accept Payments (Paystack/Crypto)",
      "Free SSL Certificate"
    ],
    button: "Rent Panel Now",
    active: true,
    highlight: "Most Popular"
  },
  {
    name: "VIP Wholesaler",
    price: "Custom",
    period: "rates",
    desc: "For big agencies spending over ₦1M monthly.",
    features: [
      "Everything in Starter",
      "Discounted Service Rates",
      "Priority Order Processing",
      "Dedicated Account Manager",
      "Early Access to New Services",
      "Custom API Integration"
    ],
    button: "Contact Sales",
    active: false
  }
];

const faqs = [
  { q: "Is the monthly fee for everyone?", a: "No! The monthly fee of ₦18,000 is ONLY if you want to rent a Child Panel to sell to others. Standard users pay ₦0/month." },
  { q: "Can I cancel my Child Panel?", a: "Yes, you can cancel your subscription at any time. Your panel will remain active until the end of the billing period." },
  { q: "Do you accept Crypto?", a: "Yes, we accept USDT, Bitcoin, and Local Bank Transfers (Naira) for all deposits." },
  { q: "Are the followers real?", a: "We offer different tiers. Our 'Real' and 'High Quality' services come from genuine profiles with pictures and posts." },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            Clear & Transparent
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display">
            Flexible Plans for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Every Budget</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Join for free and pay only for what you use, or upgrade to a Child Panel to start your own SMM empire.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 border ${
                  plan.active 
                    ? "bg-slate-900 text-white border-slate-900 shadow-2xl shadow-blue-900/20 scale-105 z-10" 
                    : "bg-white text-slate-900 border-slate-200 shadow-xl shadow-slate-200/50"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.highlight}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-lg font-bold mb-2 ${plan.active ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className={`text-sm ${plan.active ? "text-slate-400" : "text-slate-500"}`}>/ {plan.period}</span>
                  </div>
                  <p className={`text-sm mt-4 leading-relaxed ${plan.active ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.desc}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={18} className={plan.active ? "text-blue-400" : "text-blue-600"} />
                      <span className={plan.active ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/auth"
                  className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.active 
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30" 
                      : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200"
                  }`}
                >
                  {plan.button} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-blue-500" /> {faq.q}
                </h4>
                <p className="text-sm text-slate-500 ml-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
