"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ThumbsUp, 
  Zap, 
  Repeat, 
  EyeOff, 
  CreditCard, 
  Globe, 
  Lock, 
  Sliders, 
  Server, 
  Shield, 
  Smartphone 
} from "lucide-react";

// --- SMM Ticker Items ---
const tickerItems = [
  { icon: Zap, label: "Instant Delivery" },
  { icon: Globe, label: "Global Services" },
  { icon: Server, label: "API for Resellers" },
  { icon: Shield, label: "Secure Payments" },
  { icon: Repeat, label: "Auto Refill" },
  { icon: Smartphone, label: "Mobile Friendly" },
  { icon: Sliders, label: "Drip-feed Logic" },
];

// --- SMM Bottom Grid Features ---
const bottomFeatures = [
  {
    icon: Server,
    title: "Mass Order Processing",
    desc: "Place thousands of orders at once using our bulk order format."
  },
  {
    icon: Repeat,
    title: "Refill Button",
    desc: "If followers drop, just click the refill button to restore them instantly."
  },
  {
    icon: Sliders,
    title: "Drip-feed Technology",
    desc: "Build engagement gradually. 1000 likes? Get 100 every 30 minutes."
  },
  {
    icon: Users,
    title: "Child Panels",
    desc: "Start your own SMM business by renting a panel connected to ours."
  },
  {
    icon: EyeOff,
    title: "Cancel Button",
    desc: "Made a mistake? Cancel pending orders instantly from your dashboard."
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Gateways",
    desc: "We accept Crypto, Cards, Paystack, and local Nigerian transfers."
  }
];

// --- New Visual: Service Speed Table (Replaces Prioritization) ---
const OrderSpeedTable = () => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-[10px] w-full max-w-[280px]">
    <div className="flex justify-between border-b border-slate-100 pb-2 mb-2 font-bold text-slate-700">
      <span>Service Speed</span>
      <span className="bg-green-100 text-green-700 px-1.5 rounded">Active</span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-500">Start Time</span>
        <div className="font-bold text-slate-900">0-5 Minutes</div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-500">Delivery Speed</span>
        <div className="font-bold text-slate-900">50k / Day</div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-500">Drop Rate</span>
        <div className="font-bold text-green-600">Non-Drop (0%)</div>
      </div>
    </div>
  </div>
);

const FlagGrid = () => (
  <div className="grid grid-cols-4 gap-4 text-3xl opacity-90">
    {['🇳🇬','🇬🇧','🇺🇸','🇬🇭','🇿🇦','🇰🇪','🇨🇦','🇦🇪','🇫🇷','🇩🇪','🇧🇷','🇮🇳'].map((flag, i) => (
      <motion.div 
        key={i} 
        whileHover={{ scale: 1.2 }}
        className="cursor-default"
      >
        {flag}
      </motion.div>
    ))}
  </div>
);

const AccountSafety = () => (
  <div className="relative w-full max-w-[280px] h-32 bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col p-3 gap-2">
    <div className="h-2 w-1/3 bg-slate-100 rounded" />
    <div className="h-2 w-full bg-slate-50 rounded" />
    <div className="h-2 w-2/3 bg-slate-50 rounded" />
    <div className="h-2 w-full bg-slate-50 rounded" />
    
    <div className="absolute inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center gap-3">
      <div className="bg-green-600 text-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2">
        <Shield size={14} /> No Password Needed
      </div>
    </div>
  </div>
);

export default function AllFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3 block">
            Powerful Automation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">
            See all features
          </h2>
          <p className="text-lg text-slate-500">
            All the tools you need to automate your social media growth and manage thousands of orders easily.
          </p>
        </div>

        {/* Ticker */}
        <div className="relative w-full overflow-hidden mb-20 group">
           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
           
           <div className="flex gap-4 animate-scroll whitespace-nowrap">
             {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-600 font-medium text-sm flex-shrink-0">
                   <item.icon size={16} className="text-blue-500" />
                   {item.label}
                </div>
             ))}
           </div>
        </div>

        {/* 3 Main Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
           
           {/* Card 1: Speed */}
           <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fastest Delivery</h3>
              <p className="text-sm text-slate-500 mb-8">Our automated system processes orders instantly. No waiting.</p>
              <div className="w-full flex justify-center group-hover:-translate-y-2 transition-transform duration-300">
                 <OrderSpeedTable />
              </div>
           </div>

           {/* Card 2: Targeted */}
           <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Targeted Services</h3>
              <p className="text-sm text-slate-500 mb-8">Get followers and likes from specific countries (Nigeria, USA, UK).</p>
              <div className="w-full flex justify-center py-4">
                 <FlagGrid />
              </div>
           </div>

           {/* Card 3: Safety */}
           <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Account Safety</h3>
              <p className="text-sm text-slate-500 mb-8">We never ask for your password. Only your username or post link is needed.</p>
              <div className="w-full flex justify-center group-hover:-translate-y-2 transition-transform duration-300">
                 <AccountSafety />
              </div>
           </div>

        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
           {bottomFeatures.map((feat, i) => (
             <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                   <feat.icon size={20} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
             </div>
           ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}