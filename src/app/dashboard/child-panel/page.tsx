"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Globe, 
  Server, 
  User, 
  CreditCard, 
  CheckCircle2, 
  Copy
} from "lucide-react";

const currencies = [
  { code: "USD", name: "United States Dollar" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "INR", name: "Indian Rupee" },
];

export default function ChildPanelPage() {
  const [domain, setDomain] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8 pb-20">
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Rent a Panel</h1>
          <p className="text-slate-500 text-sm mt-1">Start your own SMM business with a fully white-labeled panel connected to ours.</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-4 items-start">
           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
              <Server size={18} />
           </div>
           <div className="flex-1">
              <h4 className="text-sm font-bold text-blue-900 mb-1">Before you start</h4>
              <p className="text-xs text-blue-800/80 mb-3 leading-relaxed">
                 You must update your domain nameservers to point to us before placing the order.
              </p>
              <div className="flex gap-4">
                 {["ns1.perfectdns.com", "ns2.perfectdns.com"].map((ns) => (
                    <button 
                      key={ns}
                      onClick={() => handleCopy(ns)}
                      className="bg-white border border-blue-200 px-3 py-1.5 rounded-lg text-xs font-mono text-blue-700 flex items-center gap-2 hover:bg-blue-50 transition-colors"
                    >
                       {ns}
                       {copied === ns ? <CheckCircle2 size={12} /> : <Copy size={12} opacity={0.5} />}
                    </button>
                 ))}
              </div>
           </div>
        </div>

        <form className="space-y-8">
           
           <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                 <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Globe size={16} /> Domain Configuration
                 </h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Domain Name</label>
                    <input 
                       type="text" 
                       placeholder="example.com" 
                       className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition-all"
                       value={domain}
                       onChange={(e) => setDomain(e.target.value)}
                    />
                    <p className="text-[10px] text-slate-400">Do not include http:// or https://</p>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Panel Currency</label>
                    <select 
                       className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none transition-all"
                       value={currency}
                       onChange={(e) => setCurrency(e.target.value)}
                    >
                       {currencies.map(c => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
                    </select>
                 </div>
              </div>
           </section>

           <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                 <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <User size={16} /> Admin Credentials
                 </h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Admin Username</label>
                    <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none" />
                 </div>
                 <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase">Password</label>
                       <input type="password" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase">Confirm Password</label>
                       <input type="password" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none" />
                    </div>
                 </div>
              </div>
           </section>

           <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <CreditCard size={24} />
                 </div>
                 <div>
                    <div className="text-sm font-medium text-slate-300">Monthly Subscription Cost</div>
                    <div className="text-2xl font-bold">NGN 18,000.00</div>
                 </div>
              </div>
              <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">
                 Submit Order
              </button>
           </div>

        </form>

      </div>
    </DashboardLayout>
  );
}
