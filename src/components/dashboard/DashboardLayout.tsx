"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Zap, 
  LayoutDashboard, 
  List, 
  CreditCard, 
  LifeBuoy, 
  Settings, 
  Menu,
  Bell,
  Wallet,
  Globe,
  Share2,
  Layers,
  Code
} from "lucide-react";
import { motion } from "framer-motion";

// --- Mapped from Old HTML Sidebar ---
const sidebarItems = [
  { icon: LayoutDashboard, label: "New Order", href: "/dashboard" },
  { icon: Layers, label: "Mass Order", href: "/dashboard/mass-order" },
  { icon: List, label: "Orders", href: "/dashboard/orders" },
  { icon: Globe, label: "Services", href: "/dashboard/services" },
  { icon: CreditCard, label: "Add Funds", href: "/dashboard/deposit" },
  { icon: LifeBuoy, label: "Tickets", href: "/dashboard/tickets" },
  { icon: Share2, label: "Affiliates", href: "/dashboard/affiliates" },
  { icon: Zap, label: "Child Panel", href: "/dashboard/child-panel" },
  { icon: Code, label: "API", href: "/dashboard/api" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* --- SIDEBAR --- */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="bg-[#0B1120] text-white flex-shrink-0 relative hidden md:flex flex-col border-r border-slate-800 z-20"
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            {isSidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="font-bold text-lg tracking-tight whitespace-nowrap"
              >
                BoostSphere
              </motion.span>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative overflow-hidden ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl" 
                  />
                )}
                <item.icon className={`w-5 h-5 relative z-10 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                {isSidebarOpen && (
                  <span className="font-medium text-sm relative z-10">{item.label}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-slate-800">
           <div className={`flex items-center gap-3 ${!isSidebarOpen && "justify-center"}`}>
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces" className="w-9 h-9 rounded-full border border-slate-600" />
              {isSidebarOpen && (
                 <div className="overflow-hidden">
                    <div className="text-sm font-bold truncate">Chioma A.</div>
                    <div className="text-xs text-slate-400 truncate">Account Settings</div>
                 </div>
              )}
           </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: isSidebarOpen ? 0 : -260 }}
        className="md:hidden fixed top-0 left-0 w-64 h-full bg-[#0B1120] text-white flex flex-col border-r border-slate-800 z-50"
      >
        <div className="h-20 flex items-center px-6 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">BoostSphere</span>
          </div>
        </div>

        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative overflow-hidden ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 bg-blue-600 rounded-xl" 
                  />
                )}
                <item.icon className={`w-5 h-5 relative z-10 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                <span className="font-medium text-sm relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces" className="w-9 h-9 rounded-full border border-slate-600" />
            <div className="overflow-hidden">
              <div className="text-sm font-bold truncate">Chioma A.</div>
              <div className="text-xs text-slate-400 truncate">Account Settings</div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 z-10">
           <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                 <Menu size={20} />
              </button>
              <h2 className="text-xl font-bold text-slate-800">New Order</h2>
           </div>

           <div className="flex items-center gap-4 md:gap-6">
              {/* Wallet Balance (Critical Feature) */}
              <div className="hidden md:flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Wallet size={16} />
                 </div>
                 <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Balance (NGN)</div>
                    <div className="text-sm font-extrabold text-slate-900">₦ 0.00</div>
                 </div>
                 <Link href="/dashboard/deposit" className="ml-2 text-xs font-bold text-blue-600 hover:underline">
                    Add Funds
                 </Link>
              </div>

              <button className="relative p-2 text-slate-400 hover:text-slate-600">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
           </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
           {children}
        </main>

      </div>
    </div>
  );
}