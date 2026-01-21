"use client";

import React from "react";
import Link from "next/link";
import { CreditCard, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const Marquee = () => (
  <div className="relative py-12 overflow-hidden bg-white border-b border-slate-100">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    
    <div className="flex gap-12 animate-scroll-slow whitespace-nowrap">
       {[1, 2, 3, 4].map((i) => (
          <React.Fragment key={i}>
             <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Automate Growth</span>
             <span className="text-4xl md:text-5xl text-blue-400">✦</span>
             <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Instant Delivery</span>
             <span className="text-4xl md:text-5xl text-blue-400">✦</span>
             <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">API for Resellers</span>
             <span className="text-4xl md:text-5xl text-blue-400">✦</span>
          </React.Fragment>
       ))}
    </div>

    <style jsx>{`
      @keyframes scroll-slow {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll-slow {
        animation: scroll-slow 60s linear infinite;
      }
    `}</style>
  </div>
);

export default function FooterCTA() {
  return (
    <>
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden px-6 py-24 md:py-32 text-center">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[#0B1120]">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-900 to-purple-900 opacity-90" />
               <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-40 mix-blend-screen" />
               <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[150px] opacity-30 mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
               <span className="inline-block text-blue-200 font-bold text-xs tracking-[0.2em] uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                 Join 2,000+ Nigerian Resellers
               </span>
               
               <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                 Stop wasting time growing manually. Automate it.
               </h2>
               
               <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
                 Get the engagement you need to trigger algorithms and go viral. Instant delivery, cheapest prices in the market.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/auth" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
                     Create Free Account
                  </Link>
                  <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                     Check Prices
                  </button>
               </div>

               <div className="flex items-center justify-center gap-6 text-xs font-medium text-blue-200/60 pt-2">
                  <span className="flex items-center gap-1.5"><CreditCard size={14} /> Pay with Paystack/Transfer</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> Instant Activation</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
               
               <div className="col-span-2 md:col-span-1">
                  <Image src="/images/PNG/Logo Black Text font 02.png" alt="BoostSphere" width={160} height={40} className="h-8 w-auto mb-6" />
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                     The world's fastest and cheapest SMM panel for Instagram, TikTok, YouTube, and more.
                  </p>
                  <Link href="/auth" className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                     Get Started
                  </Link>
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm">Services</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram Likes</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">TikTok Views</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">YouTube Subscribers</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter Followers</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm">Features</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">API for Resellers</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Drip-feed</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Mass Order</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Child Panels</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm">Support</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">API Documentation</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Service Status</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="font-bold text-slate-900 mb-6 text-sm">Legal</h4>
                  <ul className="space-y-3 text-sm text-slate-500">
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Refund Policy</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
               <span className="text-xs text-slate-400">© 2026 BoostSphere Inc. All rights reserved.</span>
               <div className="flex gap-6 text-xs text-slate-400">
                  <a href="#" className="hover:text-slate-600">Privacy</a>
                  <a href="#" className="hover:text-slate-600">Terms</a>
                  <a href="#" className="hover:text-slate-600">Twitter</a>
               </div>
            </div>
         </div>
      </footer>
    </>
  );
}