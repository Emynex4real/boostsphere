"use client";

import React, { useState, useMemo } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Search, 
  Copy, 
  Check, 
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const rawServicesData = [
  // Instagram
  { id: 907, category: "Instagram", name: "Instagram Followers | 99 Day Refill", rate: 1000.00, min: 50, max: 200000, time: "1h 24m" },
  { id: 908, category: "Instagram", name: "Instagram Followers | 365 Day Refill", rate: 1500.00, min: 50, max: 200000, time: "1h 43m" },
  { id: 34779, category: "Instagram", name: "Instagram Followers | Nigerian Service", rate: 40000.00, min: 10, max: 20000, time: "17 min" },
  { id: 745, category: "Instagram", name: "Instagram Likes | No Refill", rate: 302.79, min: 10, max: 200000, time: "12 min" },
  { id: 17791, category: "Instagram", name: "Instagram Likes | HQ Instant", rate: 500.00, min: 50, max: 10000, time: "Instant" },
  { id: 6978, category: "Instagram", name: "Instagram Story Views", rate: 16.72, min: 10, max: 20000, time: "4h" },
  { id: 10751, category: "Instagram", name: "Instagram Comments | Random", rate: 11825.99, min: 10, max: 10000, time: "37 min" },
  { id: 11069, category: "Instagram", name: "Instagram Views | Video/Reels", rate: 1.75, min: 100, max: 2000000, time: "7 min" },
  
  // Twitter
  { id: 9817, category: "Twitter", name: "Twitter Retweets | Nigerian Accounts", rate: 190943.92, min: 100, max: 600, time: "44h" },
  { id: 9816, category: "Twitter", name: "Twitter Likes | Nigerian Accounts", rate: 114478.89, min: 100, max: 600, time: "24h" },
  { id: 6451, category: "Twitter", name: "Twitter Views | No Refill", rate: 11.36, min: 100, max: 2000000, time: "2 min" },
  { id: 10166, category: "Twitter", name: "Twitter Space Listeners | 5 Min", rate: 271.88, min: 50, max: 10001, time: "7 min" },
  
  // TikTok
  { id: 507, category: "TikTok", name: "TikTok Followers | No Refill", rate: 2600.00, min: 10, max: 200000, time: "50 min" },
  { id: 215, category: "TikTok", name: "TikTok Likes | No Refill", rate: 30.32, min: 10, max: 200000, time: "16 min" },
  { id: 8126, category: "TikTok", name: "TikTok Views | No Refill", rate: 17.93, min: 100, max: 20000000, time: "1 min" },
  { id: 6946, category: "TikTok", name: "TikTok Comments | Random", rate: 2205.27, min: 10, max: 20000, time: "5 min" },
  
  // YouTube
  { id: 10731, category: "YouTube", name: "YouTube Views | Non Drop", rate: 3000.00, min: 100, max: 200000, time: "7h" },
  { id: 10735, category: "YouTube", name: "YouTube Likes | Non Drop", rate: 866.23, min: 100, max: 20000, time: "2h 36m" },
  { id: 10654, category: "YouTube", name: "YouTube Subscribers", rate: 3151.28, min: 10, max: 2000, time: "24h" },
  
  // Facebook
  { id: 10660, category: "Facebook", name: "Facebook Profile Followers", rate: 600.00, min: 10, max: 20000, time: "6 min" },
  { id: 10744, category: "Facebook", name: "Facebook Page Followers", rate: 400.00, min: 10, max: 20000, time: "11 min" },
  { id: 9969, category: "Facebook", name: "Facebook Page Likes", rate: 500.00, min: 10, max: 200000, time: "23 min" },
  { id: 10124, category: "Facebook", name: "Facebook Post Likes", rate: 194.64, min: 10, max: 20000, time: "1h" },
  
  // Telegram
  { id: 10326, category: "Telegram", name: "Telegram Members | Non Drop", rate: 1500.00, min: 10, max: 100000, time: "37 min" },
  { id: 2330, category: "Telegram", name: "Telegram Premium | 7 Days", rate: 7457.53, min: 10, max: 20000, time: "9 min" },
  { id: 9904, category: "Telegram", name: "Telegram Post Views | Last 1 Post", rate: 4.17, min: 10, max: 2000000, time: "25 min" },
  
  // Spotify
  { id: 8826, category: "Spotify", name: "Spotify Track Plays", rate: 345.16, min: 500, max: 200000, time: "77h" },
  { id: 8857, category: "Spotify", name: "Spotify Followers", rate: 458.99, min: 100, max: 2000000, time: "24h" },
  
  // Others
  { id: 11031, category: "LinkedIn", name: "LinkedIn Profile Followers", rate: 30847.59, min: 50, max: 10000, time: "62h" },
  { id: 10987, category: "Snapchat", name: "Snapchat Followers", rate: 39132.64, min: 10, max: 2000, time: "10h" },
  { id: 10613, category: "Discord", name: "Discord Members | No Refill", rate: 3920.74, min: 20, max: 1500, time: "24 min" },
];

const categoriesList = ["All", "Instagram", "TikTok", "Twitter", "Facebook", "YouTube", "Telegram", "Spotify", "LinkedIn", "Snapchat", "Discord"];

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredServices = useMemo(() => {
    return rawServicesData.filter((service) => {
      const matchesSearch = 
        service.name.toLowerCase().includes(search.toLowerCase()) || 
        service.id.toString().includes(search);
      const matchesCategory = activeCategory === "All" || service.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const handleCopy = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6 pb-20">
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Services List</h1>
          <p className="text-slate-500 text-sm mt-1">Browse our real-time service rates and updates.</p>
        </div>

        <div className="sticky top-0 z-30 pt-2 pb-6 bg-slate-50/95 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search by ID or Name..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

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
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  <th className="p-4 w-20">ID</th>
                  <th className="p-4">Service</th>
                  <th className="p-4 w-32">Rate (1k)</th>
                  <th className="p-4 w-32">Min / Max</th>
                  <th className="p-4 w-32">Avg Time</th>
                  <th className="p-4 w-24">Action</th>
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
                        transition={{ delay: index * 0.03 }}
                        className="hover:bg-blue-50/30 transition-colors group"
                      >
                        <td className="p-4 font-mono text-slate-400 font-bold">{service.id}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              service.category === 'Instagram' ? 'bg-pink-500' :
                              service.category === 'TikTok' ? 'bg-black' :
                              service.category === 'Twitter' ? 'bg-sky-500' :
                              'bg-slate-400'
                            }`} />
                            <span className="font-medium text-slate-800">{service.name}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg font-bold text-xs">
                            ₦{service.rate.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-4 text-slate-500 text-xs">
                          {service.min} / {service.max.toLocaleString()}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                            <Clock size={14} />
                            {service.time}
                          </div>
                        </td>
                        <td className="p-4">
                          <button 
                            onClick={() => handleCopy(service.id)}
                            className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-colors relative"
                            title="Copy ID"
                          >
                            {copiedId === service.id ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-12 text-center text-slate-400">
                        <div className="flex flex-col items-center gap-2">
                          <Search size={32} className="opacity-20" />
                          <p>No services found matching "{search}"</p>
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
    </DashboardLayout>
  );
}
