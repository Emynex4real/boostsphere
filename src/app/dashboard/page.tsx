"use client";

import React, { useState, useMemo } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  AlertCircle, 
  Zap, 
  Info, 
  Clock, 
  Package, 
  TrendingUp, 
  CheckCircle2,
  Search,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- FULL CATEGORY LIST (Extracted from your HTML) ---
const categories = [
  "Instagram Followers",
  "Instagram Followers | Server II",
  "Instagram Followers | Nigerian Service",
  "Instagram Likes",
  "Instagram Likes | Alternative Server",
  "Instagram Stories",
  "Instagram Stories | Nigerian Accounts",
  "Instagram Auto Likes",
  "Instagram Comments",
  "Instagram Comments Like",
  "Instagram Views",
  "Instagram Shares",
  "Instagram Statistics",
  "Twitter Retweets | Nigerian Service",
  "Twitter Likes | Nigerian Service",
  "Twitter Views",
  "Twitter Impressions",
  "Twitter Space Listeners",
  "Twitter Livestream",
  "Twitter Statistics | Poll | Clicks",
  "TikTok Followers | No Refill",
  "TikTok Likes",
  "TikTok Likes | US Service",
  "TikTok Comments",
  "TikTok Live Stream Comments",
  "TikTok Comment Likes",
  "TikTok Views",
  "TikTok Saves",
  "TikTok Live Services",
  "YouTube Views | Non Drop",
  "YouTube Likes",
  "YouTube Comments",
  "YouTube Emoji Comments",
  "YouTube Shorts Views",
  "YouTube Livestream Views",
  "Facebook Profile Followers",
  "Facebook Page Followers",
  "Facebook Page Likes",
  "Facebook Post Likes",
  "Facebook Post Reactions",
  "Facebook Reels",
  "Facebook Post Shares",
  "Facebook Events",
  "Facebook Comments",
  "Facebook Story Views",
  "Facebook Video Views",
  "Facebook Plays",
  "Facebook Live Stream",
  "Telegram Members",
  "Telegram Premium Members",
  "Telegram Comments",
  "Telegram Post Views",
  "Telegram Reactions",
  "Telegram Votes",
  "Snapchat Services",
  "Reddit Services",
  "LinkedIn",
  "Discord",
  "Spotify Free Plays",
  "Spotify Search Plays",
  "Spotify Followers",
  "Spotify Podcast",
  "Spotify Monthly Listeners",
  "Spotify Saves"
];

// --- MOCKED SERVICES (These usually come from an API, but I added key ones here) ---
const allServices = [
  // Instagram
  { id: 907, category: "Instagram Followers", name: "ID: 907 - Instagram Followers | 99 Day Refill", rate: 1000, min: 50, max: 200000, speed: "10k/day" },
  { id: 908, category: "Instagram Followers", name: "ID: 908 - Instagram Followers | 365 Day Refill", rate: 1500, min: 100, max: 500000, speed: "20k/day" },
  { id: 34779, category: "Instagram Followers | Nigerian Service", name: "ID: 34779 - Nigerian Real Followers", rate: 4500, min: 20, max: 10000, speed: "500/day" },
  { id: 17791, category: "Instagram Likes", name: "ID: 17791 - Instagram HQ Likes [Instant]", rate: 500, min: 50, max: 10000, speed: "Instant" },
  
  // Twitter
  { id: 11142, category: "Twitter Retweets | Nigerian Service", name: "ID: 11142 - Twitter Retweets [Nigerian]", rate: 8000, min: 10, max: 2000, speed: "Slow" },
  
  // TikTok
  { id: 76920, category: "TikTok Followers | No Refill", name: "ID: 76920 - TikTok Followers [Cheap]", rate: 1200, min: 100, max: 10000, speed: "5k/day" },
  { id: 28524, category: "TikTok Views", name: "ID: 28524 - TikTok Views [Instant]", rate: 50, min: 1000, max: 10000000, speed: "1M/day" },

  // Facebook
  { id: 59430, category: "Facebook Page Followers", name: "ID: 59430 - Page Followers [Non Drop]", rate: 2500, min: 100, max: 100000, speed: "2k/day" },

  // Generic fallback for other categories
  { id: 9999, category: "Other", name: "Select a Category to see services", rate: 0, min: 0, max: 0, speed: "-" }
];

export default function DashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [isDripFeed, setIsDripFeed] = useState(false);
  
  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Drip feed state
  const [runs, setRuns] = useState<number | "">("");
  const [interval, setInterval] = useState<number | "">("");

  // Filter Services based on selected Category
  const availableServices = useMemo(() => {
    const filtered = allServices.filter(s => s.category === selectedCategory);
    return filtered.length > 0 ? filtered : [{ id: 0, name: "No services available for this category", rate: 0, min: 0, max: 0, speed: "-" }];
  }, [selectedCategory]);

  const [selectedService, setSelectedService] = useState(availableServices[0]);

  // Update selected service when category changes
  React.useEffect(() => {
    setSelectedService(availableServices[0]);
  }, [availableServices]);

  // Calculate Costs
  const serviceCost = quantity ? (Number(quantity) / 1000) * selectedService.rate : 0;
  const totalQuantity = isDripFeed && runs && quantity ? Number(runs) * Number(quantity) : quantity;
  const finalCost = isDripFeed && runs && quantity 
    ? (Number(totalQuantity) / 1000) * selectedService.rate 
    : serviceCost;

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8 pb-20">
        
        {/* 1. Important Update Alert (From HTML) */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start text-amber-900 animate-in fade-in slide-in-from-top-2">
           <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
           <div className="text-sm">
              <strong className="block font-bold mb-1">UPDATE 19/10/2025</strong>
              <p className="opacity-90">Known issue with drops for Instagram Followers due to update on some servers. Working on a fix. Please create a ticket for resolution.</p>
           </div>
        </div>

        {/* 2. Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <StatCard icon={Package} label="Total Orders" value="1,245" color="bg-blue-50 text-blue-600" />
           <StatCard icon={TrendingUp} label="Total Spent" value="₦ 450,000" color="bg-green-50 text-green-600" />
           <StatCard icon={Clock} label="Account Status" value="Active" color="bg-purple-50 text-purple-600" />
        </div>

        {/* 3. Main Order Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
           
           {/* LEFT COLUMN: Order Form */}
           <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Zap size={18} className="text-blue-600" /> New Order
                 </h3>
                 <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Search services..." 
                      className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-blue-500"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                 </div>
              </div>
              
              <div className="p-6 space-y-6 flex-1">
                 
                 {/* Category Select */}
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category</label>
                    <div className="relative group">
                       <select 
                          className="w-full p-3.5 pl-4 bg-slate-50 border border-slate-200 rounded-xl appearance-none text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer text-slate-700"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                       >
                          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-600 transition-colors">
                          <ChevronDown size={16} />
                       </div>
                    </div>
                 </div>

                 {/* Service Select */}
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service</label>
                    <div className="relative group">
                       <select 
                          className="w-full p-3.5 pl-4 bg-slate-50 border border-slate-200 rounded-xl appearance-none text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer text-slate-700"
                          value={selectedService.id}
                          onChange={(e) => setSelectedService(allServices.find(s => s.id === Number(e.target.value)) || availableServices[0])}
                       >
                          {availableServices.map((s) => (
                             <option key={s.id} value={s.id}>
                               {s.id === 0 ? s.name : `${s.name} - ₦${s.rate} per 1000`}
                             </option>
                          ))}
                       </select>
                       <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-600 transition-colors">
                          <ChevronDown size={16} />
                       </div>
                    </div>
                 </div>

                 {/* Link Input */}
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Link</label>
                    <input 
                       type="text" 
                       placeholder="https://instagram.com/username or Post Link"
                       className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                       value={link}
                       onChange={(e) => setLink(e.target.value)}
                    />
                 </div>

                 {/* Quantity & Charge Row */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quantity</label>
                       <input 
                          type="number" 
                          placeholder={`Min: ${selectedService.min} - Max: ${selectedService.max}`}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Charge</label>
                       <div className="w-full p-3.5 bg-blue-50 border border-blue-100 rounded-xl text-sm font-bold text-blue-700 flex justify-between items-center shadow-sm">
                          <span className="text-lg">₦ {finalCost.toFixed(2)}</span>
                          <span className="text-[10px] uppercase font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded">NGN</span>
                       </div>
                    </div>
                 </div>

                 {/* Drip-feed Toggle & Options */}
                 <div className="pt-2 border-t border-slate-100 mt-4">
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                       <div className="relative">
                          <input 
                             type="checkbox" 
                             className="sr-only" 
                             checked={isDripFeed} 
                             onChange={() => setIsDripFeed(!isDripFeed)} 
                          />
                          <div className={`w-11 h-6 rounded-full shadow-inner transition-colors duration-200 ${isDripFeed ? "bg-blue-600" : "bg-slate-200"}`}></div>
                          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${isDripFeed ? "translate-x-5" : "translate-x-0"}`}></div>
                       </div>
                       <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Enable Drip-feed</span>
                    </label>

                    <AnimatePresence>
                       {isDripFeed && (
                          <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden"
                          >
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                                <div className="space-y-2">
                                   <label className="text-xs font-bold text-slate-500 uppercase">Runs</label>
                                   <input 
                                      type="number" 
                                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none" 
                                      placeholder="e.g. 5" 
                                      value={runs}
                                      onChange={(e) => setRuns(Number(e.target.value))}
                                   />
                                </div>
                                <div className="space-y-2">
                                   <label className="text-xs font-bold text-slate-500 uppercase">Interval (Mins)</label>
                                   <input 
                                      type="number" 
                                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none" 
                                      placeholder="e.g. 60" 
                                      value={interval}
                                      onChange={(e) => setInterval(Number(e.target.value))}
                                   />
                                </div>
                                <div className="space-y-2">
                                   <label className="text-xs font-bold text-slate-500 uppercase">Total Qty</label>
                                   <div className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-bold text-slate-500">
                                      {totalQuantity || 0}
                                   </div>
                                </div>
                             </div>
                          </motion.div>
                       )}
                    </AnimatePresence>
                 </div>

                 <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 mt-4 hover:scale-[1.01] active:scale-[0.99]">
                    Submit Order <CheckCircle2 size={18} />
                 </button>
              </div>
           </div>

           {/* RIGHT COLUMN: Service Details & Help */}
           <div className="xl:col-span-1 space-y-6">
              
              {/* Dynamic Service Info Card */}
              <div className="bg-[#0f172a] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                 {/* Decorative background blur */}
                 <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-10 pointer-events-none" />
                 
                 <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                        <Info size={18} className="text-blue-400" /> Service Details
                    </h4>
                    
                    <div className="space-y-5 text-sm text-slate-300">
                        <DetailRow label="Service ID" value={selectedService.id.toString()} />
                        <DetailRow label="Rate per 1000" value={`₦ ${selectedService.rate}`} highlight />
                        <DetailRow label="Min Order" value={selectedService.min.toLocaleString()} />
                        <DetailRow label="Max Order" value={selectedService.max.toLocaleString()} />
                        <DetailRow label="Est. Speed" value={selectedService.speed} color="text-green-400" />
                    </div>

                    <div className="mt-8 p-4 bg-white/5 rounded-xl text-xs leading-relaxed text-slate-300 border border-white/5">
                        <strong className="text-white block mb-2 text-sm">Description:</strong>
                        <ul className="list-disc pl-4 space-y-1">
                           <li>High quality profiles</li>
                           <li>Refill button enabled (30 days)</li>
                           <li>Start time: 0-1 Hour</li>
                           <li>No password required</li>
                        </ul>
                    </div>
                 </div>
              </div>

              {/* Help & Support Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                 <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                    <Zap size={24} />
                 </div>
                 <h4 className="font-bold text-slate-900 text-lg">Need Help?</h4>
                 <p className="text-sm text-slate-500 mb-6 mt-2 px-4">
                    Check our tutorials or open a support ticket. We respond instantly.
                 </p>
                 <div className="grid grid-cols-2 gap-3">
                    <button className="w-full py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs transition-colors border border-slate-200">
                        Read Guide
                    </button>
                    <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-blue-600/20">
                        Open Ticket
                    </button>
                 </div>
              </div>

           </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

// --- Helper Components ---

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between transition-all hover:shadow-md">
     <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
        <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{value}</h3>
     </div>
     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
        <Icon size={24} />
     </div>
  </div>
);

const DetailRow = ({ label, value, highlight, color }: { label: string, value: string, highlight?: boolean, color?: string }) => (
  <div className="flex justify-between items-center">
     <span className="text-slate-400 font-medium">{label}</span>
     <span className={`font-bold font-mono ${highlight ? "text-white bg-blue-600 px-2 py-0.5 rounded text-xs" : (color || "text-white")}`}>
        {value}
     </span>
  </div>
);