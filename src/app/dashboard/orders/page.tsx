"use client";

import React, { useState, useMemo } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  MoreHorizontal
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type OrderStatus = "Pending" | "In progress" | "Completed" | "Partial" | "Processing" | "Canceled";

interface Order {
  id: number;
  date: string;
  link: string;
  charge: string;
  start_count: number;
  quantity: number;
  service: string;
  status: OrderStatus;
  remains: number;
}

const mockOrders: Order[] = [
  { id: 450921, date: "2026-01-19", link: "https://instagram.com/user_one", charge: "₦ 1,500", start_count: 1204, quantity: 1000, service: "Instagram Followers | 365 Day Refill", status: "In progress", remains: 450 },
  { id: 450920, date: "2026-01-18", link: "https://tiktok.com/@dance_vid", charge: "₦ 500", start_count: 50, quantity: 5000, service: "TikTok Views | Instant", status: "Completed", remains: 0 },
  { id: 450919, date: "2026-01-18", link: "https://twitter.com/tweet/123", charge: "₦ 2,300", start_count: 10, quantity: 200, service: "Twitter Retweets | Nigerian", status: "Pending", remains: 200 },
  { id: 450918, date: "2026-01-17", link: "https://facebook.com/page_id", charge: "₦ 800", start_count: 5000, quantity: 100, service: "Facebook Page Likes", status: "Processing", remains: 100 },
  { id: 450917, date: "2026-01-16", link: "https://instagram.com/p/post_id", charge: "₦ 450", start_count: 320, quantity: 1000, service: "Instagram Likes | HQ", status: "Completed", remains: 0 },
  { id: 450916, date: "2026-01-15", link: "https://youtube.com/watch?v=xyz", charge: "₦ 12,000", start_count: 0, quantity: 4000, service: "YouTube Watch Hours", status: "Partial", remains: 1200 },
  { id: 450915, date: "2026-01-14", link: "https://t.me/channel_link", charge: "₦ 1,200", start_count: 150, quantity: 500, service: "Telegram Members", status: "Canceled", remains: 500 },
  { id: 450914, date: "2026-01-14", link: "https://spotify.com/track/abc", charge: "₦ 300", start_count: 100, quantity: 1000, service: "Spotify Plays", status: "Completed", remains: 0 },
  { id: 450913, date: "2026-01-13", link: "https://instagram.com/brand_acct", charge: "₦ 4,500", start_count: 10200, quantity: 5000, service: "Instagram Followers | VIP", status: "In progress", remains: 2100 },
];

const tabs = ["All", "Pending", "In progress", "Completed", "Partial", "Processing", "Canceled"];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredOrders = useMemo(() => {
    return mockOrders.filter((order) => {
      const matchesTab = activeTab === "All" || order.status === activeTab;
      const matchesSearch = 
        order.id.toString().includes(search) || 
        order.link.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const handleCopy = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "In progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Processing": return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Partial": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Canceled": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6 pb-20">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Orders History</h1>
            <p className="text-slate-500 text-sm mt-1">Track and manage all your SMM orders.</p>
          </div>
          
          <div className="relative w-full md:w-80 group">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
             <input 
               type="text" 
               placeholder="Search Order ID or Link..." 
               className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
             />
          </div>
        </div>

        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex gap-1 bg-white p-1 rounded-xl border border-slate-200 w-fit shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                    isActive ? "text-blue-700" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeOrderTab"
                      className="absolute inset-0 bg-blue-50 rounded-lg border border-blue-100"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                  <th className="p-4 w-24">ID</th>
                  <th className="p-4 w-32">Date</th>
                  <th className="p-4 min-w-[200px]">Service</th>
                  <th className="p-4 min-w-[200px]">Link</th>
                  <th className="p-4 w-24">Quantity</th>
                  <th className="p-4 w-24">Charge</th>
                  <th className="p-4 w-32">Status</th>
                  <th className="p-4 w-24">Remains</th>
                  <th className="p-4 w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <AnimatePresence mode="popLayout">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <motion.tr 
                        key={order.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="hover:bg-blue-50/30 transition-colors group"
                      >
                        <td className="p-4">
                          <button 
                            onClick={() => handleCopy(order.id)}
                            className="font-mono text-slate-500 hover:text-blue-600 font-medium flex items-center gap-1.5 transition-colors"
                            title="Copy ID"
                          >
                            {order.id}
                            {copiedId === order.id ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="opacity-0 group-hover:opacity-100" />}
                          </button>
                        </td>
                        <td className="p-4 text-slate-500 text-xs">{order.date}</td>
                        <td className="p-4 font-medium text-slate-800 text-xs">{order.service}</td>
                        <td className="p-4">
                          <a 
                            href={order.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-xs flex items-center gap-1 max-w-[180px] truncate"
                          >
                            {order.link} <ExternalLink size={10} />
                          </a>
                        </td>
                        <td className="p-4 text-slate-600 font-mono text-xs">{order.quantity.toLocaleString()}</td>
                        <td className="p-4 font-bold text-slate-700 text-xs">{order.charge}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wide ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 text-slate-400 text-xs">{order.remains}</td>
                        <td className="p-4 text-right">
                           <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600">
                              <MoreHorizontal size={16} />
                           </button>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={9} className="p-12 text-center text-slate-400">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                             <Search size={20} className="opacity-30" />
                          </div>
                          <p>No orders found matching your filters.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-slate-200 bg-slate-50/50 flex justify-between items-center text-xs text-slate-500">
             <span>Showing {filteredOrders.length} orders</span>
             <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
             </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
