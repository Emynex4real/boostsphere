"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Activity, CheckCircle } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 perspective-1000">
      <motion.div 
        initial={{ rotateX: 20, opacity: 0, y: 50 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden aspect-[16/9]"
      >
        {/* Header */}
        <div className="h-12 border-b border-slate-100 bg-slate-50 flex items-center px-6 justify-between">
           <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-400" />
             <div className="w-3 h-3 rounded-full bg-yellow-400" />
             <div className="w-3 h-3 rounded-full bg-green-400" />
           </div>
           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">BoostSphere Panel</div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8 grid grid-cols-12 gap-3 sm:gap-6 h-full bg-slate-50/30">
           {/* Sidebar */}
           <div className="col-span-3 md:col-span-2 space-y-2 sm:space-y-4">
              <div className="h-8 w-full bg-blue-100/50 rounded-md text-blue-600 flex items-center px-3 text-xs font-bold gap-2">
                 <Activity size={14} /> Overview
              </div>
              <div className="h-8 w-full hover:bg-slate-100 rounded-md text-slate-500 flex items-center px-3 text-xs font-medium gap-2">
                 <Users size={14} /> Orders
              </div>
           </div>

           {/* Main Stats Area */}
           <div className="col-span-9 md:col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                 {/* Stat Card 1 */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Total Orders</div>
                    <div className="text-2xl font-bold text-slate-900">14,205</div>
                    <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                       <TrendingUp size={12} /> +12% this week
                    </div>
                 </div>
                 {/* Stat Card 2 */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Balance</div>
                    <div className="text-2xl font-bold text-slate-900">₦ 450,000</div>
                    <div className="text-xs text-blue-600 mt-1 font-medium">Auto-deposit active</div>
                 </div>
                 {/* Stat Card 3 */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                    <div className="text-xs text-blue-100 mb-1">Status</div>
                    <div className="text-lg font-bold">Gold Reseller</div>
                    <div className="text-xs text-blue-200 mt-2 flex items-center gap-1">
                       <CheckCircle size={12} /> Verified
                    </div>
                 </div>
              </div>

              {/* Fake Graph Area */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-48 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="w-full bg-blue-50 hover:bg-blue-100 rounded-t-sm relative group"
                    >
                       <div className="absolute bottom-0 w-full bg-blue-500/20 h-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
