"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Search, 
  Clock, 
  ArrowRight
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

const rawServicesData = [
  { id: 907, category: "Instagram", name: "Instagram Followers | 99 Day Refill", rate: 1000.00, min: 50, max: 200000, time: "1h 24m" },
  { id: 908, category: "Instagram", name: "Instagram Followers | 365 Day Refill", rate: 1500.00, min: 50, max: 200000, time: "1h 43m" },
  { id: 34779, category: "Instagram", name: "Instagram Followers | Nigerian Service", rate: 40000.00, min: 10, max: 20000, time: "17 min" },
  { id: 745, category: "Instagram", name: "Instagram Likes | No Refill", rate: 302.79, min: 10, max: 200000, time: "12 min" },
  { id: 17791, category: "Instagram", name: "Instagram Likes | HQ Instant", rate: 500.00, min: 50, max: 10000, time: "Instant" },
  { id: 6978, category: "Instagram", name: "Instagram Story Views", rate: 16.72, min: 10, max: 20000, time: "4h" },
  { id: 9817, category: "Twitter", name: "Twitter Retweets | Nigerian Accounts", rate: 190943.92, min: 100, max: 600, time: "44h" },
  { id: 9816, category: "Twitter", name: "Twitter Likes | Nigerian Accounts", rate: 114478.89, min: 100, max: 600, time: "24h" },
  { id: 6451, category: "Twitter", name: "Twitter Views | No Refill", rate: 11.36, min: 100, max: 2000000, time: "2 min" },
  { id: 507, category: "TikTok", name: "TikTok Followers | No Refill", rate: 2600.00, min: 10, max: 200000, time: "50 min" },
  { id: 215, category: "TikTok", name: "TikTok Likes | No Refill", rate: 30.32, min: 10, max: 200000, time: "16 min" },
  { id: 8126, category: "TikTok", name: "TikTok Views | No Refill", rate: 17.93, min: 100, max: 20000000, time: "1 min" },
  { id: 10731, category: "YouTube", name: "YouTube Views | Non Drop", rate: 3000.00, min: 100, max: 200000, time: "7h" },
  { id: 10735, category: "YouTube", name: "YouTube Likes | Non Drop", rate: 866.23, min: 100, max: 20000, time: "2h 36m" },
  { id: 10660, category: "Facebook", name: "Facebook Profile Followers", rate: 600.00, min: 10, max: 20000, time: "6 min" },
  { id: 10744, category: "Facebook", name: "Facebook Page Followers", rate: 400.00, min: 10, max: 20000, time: "11 min" },
  { id: 10326, category: "Telegram", name: "Telegram Members | Non Drop", rate: 1500.00, min: 10, max: 100000, time: "37 min" },
  { id: 8826, category: "Spotify", name: "Spotify Track Plays", rate: 345.16, min: 500, max: 200000, time: "77h" },
];

const categoriesList = ["All", "Instagram", "TikTok", "Twitter", "Facebook", "YouTube", "Telegram", "Spotify"];

export default function PublicServicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    return rawServicesData.filter((service) => {
      const matchesSearch = 
        service.name.toLowerCase().includes(search.toLowerCase()) || 
        service.id.toString().includes(search);
      const matchesCategory = activeCategory === "All" || service.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            Unbeatable Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pricing</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Browse our catalog of thousands of high-quality social media services. 
            Prices are listed per 1,000 quantity.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
            <div className="flex gap-2">
              {categoriesList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <th className="p-5 w-20">ID</th>
                    <th className="p-5">Service</th>
                    <th className="p-5 w-40">Rate (per 1k)</th>
                    <th className="p-5 w-40">Min / Max</th>
                    <th className="p-5 w-40">Avg Time</th>
                    <th className="p-5 w-32"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <AnimatePresence>
                    {filteredServices.length > 0 ? (
                      filteredServices.map((service, index) => (
                        <motion.tr 
                          key={service.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: index * 0.02 }}
                          className="hover:bg-blue-50/30 transition-colors group"
                        >
                          <td className="p-5 font-mono text-slate-400 font-bold">{service.id}</td>
                          <td className="p-5">
                            <div className="flex items-center gap-3">
                              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                service.category === 'Instagram' ? 'bg-pink-500' :
                                service.category === 'TikTok' ? 'bg-black' :
                                service.category === 'Twitter' ? 'bg-sky-500' :
                                'bg-slate-400'
                              }`} />
                              <span className="font-medium text-slate-900">{service.name}</span>
                            </div>
                          </td>
                          <td className="p-5">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg font-bold text-xs">
                              ₦{service.rate.toLocaleString()}
                            </span>
                          </td>
                          <td className="p-5 text-slate-500 text-xs font-mono">
                            {service.min} / {service.max.toLocaleString()}
                          </td>
                          <td className="p-5">
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                              <Clock size={14} className="text-slate-400" />
                              {service.time}
                            </div>
                          </td>
                          <td className="p-5 text-right">
                            <Link 
                              href="/auth"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                            >
                              Order <ArrowRight size={12} />
                            </Link>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-16 text-center text-slate-400">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                              <Search size={24} className="opacity-30" />
                            </div>
                            <p>No services found matching your search.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
