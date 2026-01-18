"use client";

import React from "react";
import { 
  Zap, 
  Menu, 
  X, 
  ArrowRight, 
  Play, 
  BarChart3, 
  CheckCircle2, 
  Bell 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import FeatureShowcase from "@/components/FeatureShowcase";
import TestimonialWall from "@/components/TestimonialWall";
import AllFeatures from "@/components/AllFeatures";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          {/* Replaced Supahub Purple Bolt with BoostSphere Blue */}
          <Zap className="w-6 h-6 text-blue-600 fill-current" /> 
          <span className="font-bold text-xl text-slate-900 tracking-tight">BoostSphere</span>
        </div>

        {/* Desktop Links - Matches Supahub's simple text style */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Demo</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Changelog</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Blog</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth" className="text-sm font-bold text-slate-600 hover:text-slate-900">
            Login
          </Link>
          <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
            Sign up for free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

// This mocks the "Floating Dashboard" image from your screenshot using CSS
const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 perspective-1000">
      
      {/* 1. Main Dashboard (Center) */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden aspect-[16/9]"
      >
        {/* Mock Header */}
        <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-slate-50/50">
          <div className="flex gap-4 items-center">
             <div className="h-2 w-24 bg-slate-200 rounded-full" />
             <div className="h-2 w-16 bg-slate-200 rounded-full" />
          </div>
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
             <div className="h-4 w-4 bg-blue-600 rounded-full" />
          </div>
        </div>
        
        {/* Mock Body Content */}
        <div className="p-8 grid grid-cols-12 gap-6">
           {/* Sidebar */}
           <div className="hidden md:block col-span-3 space-y-3">
              <div className="h-10 w-full bg-blue-50 rounded-lg border border-blue-100" />
              <div className="h-10 w-full bg-white rounded-lg border border-slate-100" />
              <div className="h-10 w-full bg-white rounded-lg border border-slate-100" />
           </div>
           
           {/* Main Content Area */}
           <div className="col-span-12 md:col-span-9 space-y-6">
              <div className="flex justify-between items-center">
                 <div className="h-8 w-48 bg-slate-100 rounded-md" />
                 <button className="px-4 py-2 bg-blue-600 rounded-md text-white text-xs font-bold">Add Feedback</button>
              </div>
              
              {/* Mock List Items */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border border-slate-100 rounded-lg flex gap-4 items-start shadow-sm hover:border-blue-200 transition-colors">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-slate-300" />
                      <span className="text-xs font-bold text-slate-400">12</span>
                   </div>
                   <div className="space-y-2 flex-1">
                      <div className="h-4 w-3/4 bg-slate-100 rounded" />
                      <div className="h-2 w-1/2 bg-slate-50 rounded" />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </motion.div>

      {/* 2. Floating "Changelog" Card (Left) */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute -left-8 top-24 z-30 w-64 bg-white border border-slate-100 shadow-xl rounded-xl p-5 hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-3">
           <span className="w-2 h-2 rounded-full bg-blue-500" />
           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Changelog</span>
        </div>
        <div className="text-sm font-bold text-slate-800 mb-1">Intercom Integration</div>
        <div className="text-xs text-slate-500 leading-relaxed">
           We just shipped a new integration to sync your chats directly.
        </div>
      </motion.div>

      {/* 3. Floating "Roadmap" Card (Right) */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -right-8 bottom-32 z-30 w-72 bg-white border border-slate-100 shadow-xl rounded-xl p-5 hidden lg:block"
      >
         <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
            <span className="text-xs font-bold text-slate-900 uppercase">Roadmap</span>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Q2 2026</span>
         </div>
         <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
               <span className="text-slate-600 font-medium">Dark Mode</span>
               <span className="flex text-yellow-400">★★★★★</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
               <div className="bg-blue-600 h-1.5 rounded-full w-3/4" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400">
               <span>In Progress</span>
               <span>78%</span>
            </div>
         </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        
        {/* Subtle Background Blurs (Replaces Supahub's purple blurs with Blue) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-40 left-0 w-[450px] h-[400px] bg-cyan-50/30 rounded-full blur-[80px] -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Eyebrow Text */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
              Customer Feedback & Feature Request Tool
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15] font-display">
            Central hub to collect feedback  <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              announce product updates
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            BoostSphere is your all-in-one solution for customer feedback management and feature request prioritization.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/auth" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200">
              <Zap className="w-5 h-5" /> Sign up for free
            </Link>
            <Link href="/auth" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-lg border border-slate-200 transition-all shadow-sm">
              See BoostSphere Demo
            </Link>
          </div>

          {/* Social Proof Avatars */}
          <div className="pt-6 flex flex-col items-center gap-3">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
             </div>
             <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm text-slate-500 font-medium">loved by 300+ customers</span>
             </div>
          </div>

        </div>

        {/* Dashboard Mockup */}
        <DashboardMockup />

      </section>

      <FeatureShowcase />
      <TestimonialWall />
      <AllFeatures />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}