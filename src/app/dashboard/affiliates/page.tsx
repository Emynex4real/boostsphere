"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Users, 
  Link as LinkIcon, 
  Copy, 
  Check, 
  DollarSign, 
  TrendingUp, 
  MousePointerClick,
  UserPlus,
  History
} from "lucide-react";

const stats = {
  referralLink: "https://boostsphere.com/ref/chioma2026",
  commissionRate: "10%",
  minPayout: 1000,
  visits: 1240,
  registrations: 85,
  referrals: 42,
  conversionRate: "6.8%",
  totalEarnings: 45000,
  availableEarnings: 12500
};

const payouts = [
  { id: 1, date: "Jan 10, 2026", amount: 15000, status: "Paid" },
  { id: 2, date: "Dec 15, 2025", amount: 17500, status: "Paid" },
];

export default function AffiliatesPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(stats.referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const canRequestPayout = stats.availableEarnings >= stats.minPayout;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Referrals & Earnings</h1>
            <p className="text-slate-500 text-sm mt-1">Invite friends and earn {stats.commissionRate} commission on their spend.</p>
          </div>
          
          <button 
            disabled={!canRequestPayout}
            className={`px-6 py-2.5 font-bold rounded-xl text-sm transition-colors shadow-lg ${
              canRequestPayout 
                ? "bg-green-600 hover:bg-green-700 text-white shadow-green-600/20" 
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
             Request Payout (₦ {stats.availableEarnings.toLocaleString()})
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
           <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Your Referral Link</label>
           <div className="flex gap-2">
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-mono text-sm flex items-center gap-2">
                 <LinkIcon size={16} className="text-slate-400" />
                 {stats.referralLink}
              </div>
              <button 
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl font-bold transition-colors flex items-center gap-2"
              >
                 {copied ? <Check size={18} /> : <Copy size={18} />}
                 {copied ? "Copied!" : "Copy"}
              </button>
           </div>
           <div className="mt-4 flex gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" /> Commission: {stats.commissionRate}</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Min Payout: ₦{stats.minPayout.toLocaleString()}</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
              <div className="relative z-10">
                 <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Total Earnings</div>
                 <div className="text-3xl font-extrabold tracking-tight">₦ {stats.totalEarnings.toLocaleString()}</div>
                 <div className="mt-4 flex gap-3 text-xs font-medium text-blue-100">
                    <div className="px-2 py-1 bg-white/20 rounded-lg">Available: ₦ {stats.availableEarnings.toLocaleString()}</div>
                 </div>
              </div>
              <DollarSign className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10" />
           </div>

           <StatCard icon={MousePointerClick} label="Total Visits" value={stats.visits} color="bg-purple-50 text-purple-600" />
           <StatCard icon={UserPlus} label="Registrations" value={stats.registrations} color="bg-orange-50 text-orange-600" />
           <StatCard icon={Users} label="Active Referrals" value={stats.referrals} color="bg-pink-50 text-pink-600" />
           <StatCard icon={TrendingUp} label="Conversion Rate" value={stats.conversionRate} color="bg-green-50 text-green-600" />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
           <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <History size={18} className="text-slate-400" /> Payout History
              </h3>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                 <thead>
                    <tr className="border-b border-slate-100 text-slate-500 font-medium">
                       <th className="px-6 py-3 w-1/3">Date</th>
                       <th className="px-6 py-3 w-1/3">Amount</th>
                       <th className="px-6 py-3 w-1/3 text-right">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {payouts.map((payout) => (
                       <tr key={payout.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-3.5 text-slate-600">{payout.date}</td>
                          <td className="px-6 py-3.5 font-bold text-slate-900">₦ {payout.amount.toLocaleString()}</td>
                          <td className="px-6 py-3.5 text-right">
                             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                                <Check size={12} /> {payout.status}
                             </span>
                          </td>
                       </tr>
                    ))}
                    {payouts.length === 0 && (
                       <tr>
                          <td colSpan={3} className="px-6 py-8 text-center text-slate-400">
                             No payout history found.
                          </td>
                       </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

const StatCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
     <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
        <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{value}</h3>
     </div>
     <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={24} />
     </div>
  </div>
);
