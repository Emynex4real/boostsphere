"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  MessageSquare, 
  Share2, 
  BarChart3, 
  Lock, 
  Copy, 
  Moon, 
  Rocket 
} from "lucide-react";

const features = [
  {
    id: "widgets",
    title: "In-app widgets",
    description: "Integrate feedback collection directly in your app.",
    icon: Zap
  },
  {
    id: "hub",
    title: "Feedback hub",
    description: "Centralize feedback for efficient analysis.",
    icon: MessageSquare
  },
  {
    id: "updates",
    title: "Share updates",
    description: "Engage users with easy-to-publish changelogs.",
    icon: Share2
  },
  {
    id: "prioritize",
    title: "Prioritize requests",
    description: "Rank feature requests by impact and effort.",
    icon: BarChart3
  }
];

const FeatureMockup = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-slate-50 rounded-l-3xl overflow-hidden border-r border-slate-100">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full" />

      <motion.div 
        key={activeTab}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-4 md:inset-8 bg-white rounded-xl shadow-xl border border-slate-200/60 overflow-hidden flex flex-col"
      >
        <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-white">
           <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-400/20" />
             <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
             <div className="w-3 h-3 rounded-full bg-green-400/20" />
           </div>
           <div className="text-xs font-bold text-slate-400">BoostSphere Dashboard</div>
        </div>

        <div className="p-6 flex-1 bg-slate-50/30 relative">
           <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-800">Welcome back, Michael 👋</h3>
              <p className="text-xs text-slate-500">Here is what we added while you were away.</p>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                 <div className="w-8 h-8 bg-blue-100 rounded-md mb-2 flex items-center justify-center">
                    <Rocket size={16} className="text-blue-600" />
                 </div>
                 <div className="h-2 w-16 bg-slate-200 rounded mb-1" />
                 <div className="h-2 w-24 bg-slate-100 rounded" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                 <div className="w-8 h-8 bg-purple-100 rounded-md mb-2 flex items-center justify-center">
                    <Moon size={16} className="text-purple-600" />
                 </div>
                 <div className="h-2 w-16 bg-slate-200 rounded mb-1" />
                 <div className="h-2 w-24 bg-slate-100 rounded" />
              </div>
           </div>

           <motion.div 
             initial={{ x: 50 }}
             animate={{ x: 0 }}
             className="absolute bottom-6 right-6 bg-slate-900 text-white p-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-medium"
           >
             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
             Live Sync Active
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("widgets");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3 block">
            Customer Feedback Tool
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
            Your complete customer <br /> feedback tool
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Organize all your feedback in one place, prioritize what to build next, and keep everyone updated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature) => {
            const isActive = activeTab === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                  isActive
                    ? "bg-blue-50 border-blue-200 shadow-sm"
                    : "bg-white border-slate-100 hover:border-blue-100 hover:bg-slate-50"
                }`}
              >
                <h3 className={`font-bold text-sm mb-2 ${isActive ? "text-blue-700" : "text-slate-900"}`}>
                  {feature.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isActive ? "text-blue-600/80" : "text-slate-500"}`}>
                  {feature.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          
          <div className="lg:w-7/12 relative">
             <FeatureMockup activeTab={activeTab} />
          </div>

          <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center bg-white">
             
             <div className="mb-8">
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-[10px] font-bold uppercase tracking-wide">
                 <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                 What's New
               </span>
             </div>

             <div className="space-y-8">
                
                <div className="group">
                   <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Lock className="w-5 h-5 text-blue-600" />
                     Single Sign-On (SSO)
                   </h4>
                   <p className="text-sm text-slate-500 leading-relaxed">
                     Introducing Single Sign-On (SSO) Authentication to BoostSphere, making user authentication easier and more secure.
                   </p>
                </div>

                <div className="group">
                   <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Copy className="w-5 h-5 text-blue-600" />
                     Merge duplicate posts
                   </h4>
                   <p className="text-sm text-slate-500 leading-relaxed">
                     We are thrilled to introduce a new feature: streamline your content management by merging duplicates instantly.
                   </p>
                </div>

                <div className="group">
                   <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                     <Moon className="w-5 h-5 text-blue-600" />
                     Dark mode
                   </h4>
                   <p className="text-sm text-slate-500 leading-relaxed">
                     Announcing the long-awaited Dark Mode feature has finally arrived on BoostSphere! 🌙
                   </p>
                </div>

             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
