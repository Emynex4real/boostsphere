"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  CreditCard, 
  Landmark, 
  Smartphone, 
  AlertTriangle, 
  History, 
  CheckCircle2, 
  Play,
  Wallet
} from "lucide-react";

const transactions = [
  { id: "TRX-9928", date: "Jan 18, 2026", method: "Korapay (Transfer)", amount: 50000, status: "Success" },
  { id: "TRX-9927", date: "Jan 15, 2026", method: "Flutterwave (Card)", amount: 15000, status: "Success" },
  { id: "TRX-9926", date: "Jan 12, 2026", method: "Paystack (USSD)", amount: 5000, status: "Failed" },
];

const gateways = [
  { id: "korapay", name: "Korapay", methods: ["Transfer", "Card", "USSD"], icon: Landmark, color: "bg-blue-50 text-blue-600" },
  { id: "flutterwave", name: "Flutterwave", methods: ["Card", "Bank", "Barter"], icon: CreditCard, color: "bg-orange-50 text-orange-600" },
  { id: "paystack", name: "Paystack", methods: ["Card", "Transfer"], icon: Smartphone, color: "bg-green-50 text-green-600" },
];

export default function DepositPage() {
  const [selectedGateway, setSelectedGateway] = useState("korapay");
  const [amount, setAmount] = useState("");

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8 pb-20">
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Add Funds</h1>
          <p className="text-slate-500 text-sm mt-1">Deposit money into your wallet securely.</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-4 items-start text-amber-900">
           <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600" />
           <div className="text-sm leading-relaxed">
              <strong className="block font-bold mb-1">IMPORTANT NOTICE</strong>
              <ul className="list-disc pl-4 space-y-1 opacity-90">
                 <li>Please ensure you pay the <strong>exact amount</strong> shown on the payment page.</li>
                 <li>If your payment doesn't reflect immediately, please wait at least <strong>3 hours</strong> before opening a support ticket.</li>
                 <li>Send payment issues to <strong>support@boostsphere.com</strong>.</li>
              </ul>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs">1</span>
                    Select Payment Method
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {gateways.map((gw) => (
                       <button
                          key={gw.id}
                          onClick={() => setSelectedGateway(gw.id)}
                          className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                             selectedGateway === gw.id 
                               ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600" 
                               : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                       >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${gw.color}`}>
                             <gw.icon size={20} />
                          </div>
                          <div className="font-bold text-sm text-slate-900">{gw.name}</div>
                          <div className="text-[10px] text-slate-500 mt-1">{gw.methods.join(", ")}</div>
                          
                          {selectedGateway === gw.id && (
                             <div className="absolute top-2 right-2 text-blue-600">
                                <CheckCircle2 size={16} />
                             </div>
                          )}
                       </button>
                    ))}
                 </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs">2</span>
                    Enter Amount
                 </h3>
                 
                 <div className="relative max-w-sm">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">NGN</div>
                    <input 
                       type="number" 
                       placeholder="0.00"
                       className="w-full pl-14 pr-4 py-4 text-xl font-bold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                       value={amount}
                       onChange={(e) => setAmount(e.target.value)}
                    />
                 </div>
                 
                 <div className="flex gap-2 mt-4">
                    {[1000, 5000, 10000, 50000].map(amt => (
                       <button 
                          key={amt}
                          onClick={() => setAmount(amt.toString())}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg transition-colors"
                       >
                          + ₦{amt.toLocaleString()}
                       </button>
                    ))}
                 </div>

                 <button className="w-full mt-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                    Proceed to Payment <Wallet size={18} />
                 </button>
              </div>

           </div>

           <div className="lg:col-span-1 space-y-6">
              
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                    <Play size={16} className="text-red-500" />
                    <span className="text-xs font-bold text-slate-700 uppercase">How to Deposit</span>
                 </div>
                 <div className="aspect-video bg-black relative group cursor-pointer">
                    <iframe 
                       src="https://www.youtube.com/embed/M24-YsdRiMQ" 
                       className="w-full h-full"
                       title="How to add funds"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                    />
                 </div>
                 <div className="p-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                       Watch this short video to learn how to fund your wallet instantly using Bank Transfer or Card.
                    </p>
                 </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
                 <h4 className="font-bold text-slate-800 text-sm mb-4 flex items-center gap-2">
                    <History size={16} className="text-slate-400" /> Recent Deposits
                 </h4>
                 <div className="space-y-4">
                    {transactions.map((trx) => (
                       <div key={trx.id} className="flex justify-between items-center border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                          <div>
                             <div className="text-sm font-bold text-slate-700">₦ {trx.amount.toLocaleString()}</div>
                             <div className="text-[10px] text-slate-400">{trx.method}</div>
                          </div>
                          <div className="text-right">
                             <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                                trx.status === "Success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                             }`}>
                                {trx.status}
                             </span>
                             <div className="text-[10px] text-slate-400 mt-1">{trx.date}</div>
                          </div>
                       </div>
                    ))}
                 </div>
                 <button className="w-full mt-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    View All History
                 </button>
              </div>

           </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
