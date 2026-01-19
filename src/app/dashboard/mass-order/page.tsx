"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Layers, 
  Info, 
  Copy, 
  Check, 
  Search, 
  ArrowRight
} from "lucide-react";

const services = [
  { id: 907, name: "Instagram Followers | 99 Day Refill", category: "Instagram" },
  { id: 908, name: "Instagram Followers | 365 Day Refill", category: "Instagram" },
  { id: 745, name: "Instagram Likes | No Refill", category: "Instagram" },
  { id: 215, name: "TikTok Likes | Instant", category: "TikTok" },
  { id: 8126, name: "TikTok Views | 1M Speed", category: "TikTok" },
  { id: 9817, name: "Twitter Retweets | Nigerian", category: "Twitter" },
  { id: 10731, name: "YouTube Views | Non Drop", category: "YouTube" },
];

export default function MassOrderPage() {
  const [orders, setOrders] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toString().includes(searchTerm)
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mass Order</h1>
          <p className="text-slate-500 text-sm mt-1">Place multiple orders at once using the format below.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-blue-900">
                 <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <Info size={16} /> Required Format
                 </h3>
                 <div className="font-mono text-xs bg-white/60 border border-blue-200 rounded-lg p-3 space-y-1">
                    <div className="flex gap-2">
                       <span className="font-bold text-blue-600">service_id</span>
                       <span className="text-slate-400">|</span>
                       <span className="font-bold text-green-600">link</span>
                       <span className="text-slate-400">|</span>
                       <span className="font-bold text-purple-600">quantity</span>
                    </div>
                 </div>
                 <p className="text-xs mt-3 opacity-80">
                    Example: <span className="font-mono select-all">907 | https://instagram.com/user | 1000</span>
                 </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <Layers size={16} className="text-blue-600" /> Order Input
                    </h3>
                 </div>
                 <div className="p-1">
                    <textarea 
                       className="w-full h-80 p-5 bg-white text-slate-700 font-mono text-sm border-0 focus:ring-0 resize-none outline-none leading-relaxed placeholder:text-slate-300"
                       placeholder={`907 | https://instagram.com/user1 | 1000\n908 | https://instagram.com/user2 | 500\n215 | https://tiktok.com/@video | 10000`}
                       value={orders}
                       onChange={(e) => setOrders(e.target.value)}
                    ></textarea>
                 </div>
                 <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2">
                       Submit Mass Order <ArrowRight size={16} />
                    </button>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-6">
                 <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <Search size={16} className="text-slate-400" /> Service ID Lookup
                    </h3>
                 </div>
                 
                 <div className="p-4 border-b border-slate-100">
                    <input 
                       type="text" 
                       placeholder="Search Instagram, Likes..." 
                       className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>

                 <div className="max-h-[400px] overflow-y-auto custom-scrollbar p-2">
                    {filteredServices.length > 0 ? (
                       filteredServices.map((service) => (
                          <div 
                             key={service.id} 
                             className="group p-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between cursor-default border border-transparent hover:border-slate-100"
                          >
                             <div className="flex-1 min-w-0 pr-3">
                                <div className="flex items-center gap-2 mb-1">
                                   <span className="text-[10px] font-bold uppercase text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                                      {service.category}
                                   </span>
                                   <span className="font-mono text-xs font-bold text-blue-600">ID: {service.id}</span>
                                </div>
                                <p className="text-xs text-slate-700 truncate font-medium">{service.name}</p>
                             </div>
                             
                             <button 
                                onClick={() => handleCopy(service.id)}
                                className="p-2 rounded-md hover:bg-white hover:shadow-sm text-slate-400 hover:text-blue-600 transition-all border border-transparent hover:border-slate-200"
                                title="Copy ID"
                             >
                                {copiedId === service.id ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                             </button>
                          </div>
                       ))
                    ) : (
                       <div className="p-8 text-center text-xs text-slate-400">
                          No services found.
                       </div>
                    )}
                 </div>
              </div>
           </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
