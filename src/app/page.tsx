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

// --- Imports ---
// Ensure you have created these files in your components folder
import Navbar from "@/components/Navbar";
import FeatureShowcase from "@/components/FeatureShowcase";
import TestimonialWall from "@/components/TestimonialWall";
import AllFeatures from "@/components/AllFeatures";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import HeroImage from "@/components/HeroImage"; // The new High-Fidelity Dashboard Image

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        
        {/* Subtle Background Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-40 left-0 w-[450px] h-[400px] bg-cyan-50/30 rounded-full blur-[80px] -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Eyebrow Text / Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               #1 SMM Panel in Nigeria
            </span>
          </div>

          {/* Heading - Updated for Social Growth */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15] font-display">
            The Fastest Way to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Grow Your Social Media
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Join 2,300+ agencies and brands using our fully automated panel to get genuine likes, followers, and engagement for Instagram, TikTok, and Twitter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/auth" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200">
              <Zap className="w-5 h-5" /> Get Started Now
            </Link>
            <Link href="/auth" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-lg border border-slate-200 transition-all shadow-sm flex items-center justify-center gap-2">
              <Play size={18} className="text-blue-600" /> View Services
            </Link>
          </div>

          {/* Social Proof Avatars - Updated to Nigerian Faces */}
          <div className="pt-6 flex flex-col items-center gap-3">
             <div className="flex -space-x-3">
                {/* Face 1 */}
                <img 
                  src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=faces" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100"
                />
                {/* Face 2 */}
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100"
                />
                {/* Face 3 */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100"
                />
                {/* Face 4 */}
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop&crop=faces" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover bg-slate-100"
                />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                  +2k
                </div>
             </div>
             <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <span className="text-sm text-slate-500 font-medium">Trusted by 2,000+ Nigerian creators</span>
             </div>
          </div>

        </div>

        {/* The New High-Fidelity Dashboard Image */}
        <HeroImage />

      </section>

      <FeatureShowcase />
      <TestimonialWall />
      <AllFeatures />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}