"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Video, 
  Youtube, 
  Code, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Activity 
} from "lucide-react";

// --- SMM Services Data ---
const services = [
  {
    id: "instagram",
    title: "Instagram Growth",
    description: "Boost visibility with authentic followers.",
    icon: Instagram,
    stats: { label: "New Followers", value: "+1,250", color: "bg-pink-500" },
    features: [
      { title: "Real HQ Followers", desc: "Active profiles with stories and posts." },
      { title: "Auto-Likes Subscription", desc: "Get likes instantly when you post." },
      { title: "Story Views", desc: "Boost your engagement rate significantly." }
    ]
  },
  {
    id: "tiktok",
    title: "Viral TikTok",
    description: "Drive organic views to your videos.",
    icon: Video,
    stats: { label: "Video Views", value: "+50.4k", color: "bg-black" },
    features: [
      { title: "Instant Views", desc: "Hit the 'For You' page faster." },
      { title: "TikTok Likes", desc: "High retention likes from real users." },
      { title: "Live Stream Viewers", desc: "Boost your live stream authority." }
    ]
  },
  {
    id: "youtube",
    title: "YouTube Studio",
    description: "Grow your channel safely.",
    icon: Youtube,
    stats: { label: "Watch Hours", value: "+4,000", color: "bg-red-600" },
    features: [
      { title: "High Retention Views", desc: "Non-drop views for monetization." },
      { title: "Organic Subscribers", desc: "Real people subscribing to your channel." },
      { title: "Social Shares", desc: "Rank higher in search results." }
    ]
  },
  {
    id: "api",
    title: "Reseller API",
    description: "Automate orders for your panel.",
    icon: Code,
    stats: { label: "API Requests", value: "240/m", color: "bg-blue-600" },
    features: [
      { title: "Instant Integration", desc: "Connect your SMM panel in minutes." },
      { title: "Sync Statuses", desc: "Auto-update order status for clients." },
      { title: "Drip-feed Logic", desc: "Built-in automated drip-feed support." }
    ]
  }
];

const FeatureMockup = ({ activeService }: { activeService: any }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-slate-50 rounded-l-3xl overflow-hidden border-r border-slate-100">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full" />

      {/* The Dashboard Card */}
      <motion.div 
        key={activeService.id}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-4 md:inset-8 bg-white rounded-xl shadow-xl border border-slate-200/60 overflow-hidden flex flex-col"
      >
        {/* Mock Header */}
        <div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-white">
           <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-400/20" />
             <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
             <div className="w-3 h-3 rounded-full bg-green-400/20" />
           </div>
           <div className="text-xs font-bold text-slate-400 uppercase">Live Analytics</div>
        </div>

        {/* Mock Content */}
        <div className="p-6 flex-1 bg-slate-50/30 relative flex flex-col justify-center items-center">
           
           {/* Service Icon Bubble */}
           <div className={`w-16 h-16 rounded-2xl ${activeService.stats.color} shadow-lg flex items-center justify-center mb-6`}>
              <activeService.icon className="text-white w-8 h-8" />
           </div>

           {/* Big Stat */}
           <div className="text-center mb-8">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                {activeService.stats.label}
              </h3>
              <div className="text-5xl font-extrabold text-slate-900 tracking-tight">
                {activeService.stats.value}
              </div>
              <div className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                 <TrendingUp size={12} /> +24% this week
              </div>
           </div>

           {/* Floating "Active" Badge */}
           <motion.div 
             initial={{ x: 50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="absolute bottom-6 right-6 bg-slate-900 text-white p-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs font-medium"
           >
             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
             Order Completed
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("instagram");
  
  // Find the currently active service object
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
            Everything you need <br /> to go viral
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Select a platform to see how we can help you grow your audience instantly.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`text-left p-6 rounded-xl transition-all duration-300 border ${
                  isActive
                    ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20 transform scale-[1.02]"
                    : "bg-white border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                }`}
              >
                <service.icon className={`w-6 h-6 mb-4 ${isActive ? "text-white" : "text-blue-600"}`} />
                <h3 className={`font-bold text-sm mb-1 ${isActive ? "text-white" : "text-slate-900"}`}>
                  {service.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isActive ? "text-blue-100" : "text-slate-500"}`}>
                  {service.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          
          {/* LEFT: Visual Mockup (Dynamic) */}
          <div className="lg:w-7/12 relative">
             <FeatureMockup activeService={activeService} />
          </div>

          {/* RIGHT: Feature List (Dynamic) */}
          <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center bg-white">
             
             <div className="mb-8">
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wide">
                 <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 Available Now
               </span>
             </div>

             <div className="space-y-8">
                {activeService.features.map((feature, idx) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                     <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                       <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                       {feature.title}
                     </h4>
                     <p className="text-sm text-slate-500 leading-relaxed pl-7">
                       {feature.desc}
                     </p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}