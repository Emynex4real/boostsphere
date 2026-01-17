"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ThumbsUp, 
  Mail, 
  Edit, 
  EyeOff, 
  Pin, 
  Globe, 
  Lock, 
  Sliders, 
  Merge, 
  Shield, 
  Palette 
} from "lucide-react";

const tickerItems = [
  { icon: Merge, label: "Merge duplicate posts" },
  { icon: Globe, label: "Set custom domain" },
  { icon: Edit, label: "Guest posts" },
  { icon: Shield, label: "Set board privacy" },
  { icon: Users, label: "Vote on behalf" },
  { icon: Palette, label: "Custom brand colors" },
  { icon: Sliders, label: "Priority score" },
];

const bottomFeatures = [
  {
    icon: Users,
    title: "Link feedback to customers",
    desc: "Automatically fetch the right customer or create a new one."
  },
  {
    icon: ThumbsUp,
    title: "Upvotes & Downvotes",
    desc: "Votes help you see which feedback is popular among your users."
  },
  {
    icon: Mail,
    title: "Subscribe users for updates",
    desc: "Let users subscribe for updates and get notified when there's an update."
  },
  {
    icon: Edit,
    title: "Post on behalf",
    desc: "Allows your customer support team to post on behalf of your users."
  },
  {
    icon: EyeOff,
    title: "Hide posts",
    desc: "Hide posts if they're not relevant to your product."
  },
  {
    icon: Pin,
    title: "Pin posts & comments",
    desc: "Pin posts and comments so they stay at the top of your board!"
  }
];

const PrioritizationTable = () => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-[10px] w-full max-w-[280px]">
    <div className="flex justify-between border-b border-slate-100 pb-2 mb-2 font-bold text-slate-700">
      <span>Value vs Effort</span>
      <span className="bg-slate-800 text-white px-1.5 rounded">600</span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-500">Impact</span>
        <div className="flex text-yellow-400">★★★★<span className="text-slate-200">★</span></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-500">Design Effort</span>
        <div className="flex text-yellow-400">★★<span className="text-slate-200">★★★</span></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-500">Dev Effort</span>
        <div className="flex text-yellow-400">★★★<span className="text-slate-200">★★</span></div>
      </div>
    </div>
  </div>
);

const FlagGrid = () => (
  <div className="grid grid-cols-4 gap-4 text-3xl opacity-90">
    {['🇬🇧','🇩🇪','🇷🇺','🇩🇰','🇸🇪','🇮🇹','🇹🇷','🇪🇸','🇫🇷','🇵🇱','🇵🇹','🇨🇿'].map((flag, i) => (
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

const PrivacyLock = () => (
  <div className="relative w-full max-w-[280px] h-32 bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col p-3 gap-2">
    <div className="h-2 w-1/3 bg-slate-100 rounded" />
    <div className="h-2 w-full bg-slate-50 rounded" />
    <div className="h-2 w-2/3 bg-slate-50 rounded" />
    <div className="h-2 w-full bg-slate-50 rounded" />
    
    <div className="absolute inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center">
      <div className="w-12 h-12 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white">
        <Lock size={24} />
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
            Feedback Tool Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">
            See all features
          </h2>
          <p className="text-lg text-slate-500">
            All the features you need to easily centralize product feedback and build better products.
          </p>
        </div>

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

        <div className="grid md:grid-cols-3 gap-8 mb-20">
           
           <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Feature prioritization</h3>
              <p className="text-sm text-slate-500 mb-8">Prioritize smartly, balancing customer needs with strategy.</p>
              <div className="w-full flex justify-center group-hover:-translate-y-2 transition-transform duration-300">
                 <PrioritizationTable />
              </div>
           </div>

           <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Set native language</h3>
              <p className="text-sm text-slate-500 mb-8">Customize the language of your portal to resonate with your audience.</p>
              <div className="w-full flex justify-center py-4">
                 <FlagGrid />
              </div>
           </div>

           <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Set boards privacy</h3>
              <p className="text-sm text-slate-500 mb-8">Control board privacy, allowing you to control who sees feedback.</p>
              <div className="w-full flex justify-center group-hover:-translate-y-2 transition-transform duration-300">
                 <PrivacyLock />
              </div>
           </div>

        </div>

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
