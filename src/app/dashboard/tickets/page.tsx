"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  MessageSquare, 
  Plus, 
  Paperclip, 
  Send, 
  Clock, 
  AlertCircle 
} from "lucide-react";

const mockTickets = [
  { id: 9281, subject: "Order #450921 Not Started", status: "Open", lastUpdate: "10 mins ago", message: "Hi, I placed this order 2 hours ago..." },
  { id: 9245, subject: "Refill Request for ID 4430", status: "Answered", lastUpdate: "2 hours ago", message: "We have initiated the refill..." },
  { id: 9100, subject: "Payment not reflecting", status: "Closed", lastUpdate: "1 day ago", message: "Resolved. Funds added." },
];

export default function TicketsPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-700";
      case "Answered": return "bg-blue-100 text-blue-700";
      case "Closed": return "bg-slate-100 text-slate-500";
      default: return "bg-slate-100 text-slate-500";
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Support Tickets</h1>
          <p className="text-slate-500 text-sm mt-1">Need help with an order? We usually reply within 15 minutes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                       <Plus size={18} className="text-blue-600" /> Create New Ticket
                    </h3>
                 </div>
                 
                 <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                       <div className="relative">
                          <select 
                             className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 appearance-none transition-all"
                             value={subject}
                             onChange={(e) => setSubject(e.target.value)}
                          >
                             <option value="" disabled>Select a Subject...</option>
                             <option value="order">Order Issue</option>
                             <option value="payment">Payment Issue</option>
                             <option value="refill">Refill Request</option>
                             <option value="cancel">Cancel Order</option>
                             <option value="other">Other</option>
                          </select>
                          <AlertCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                       </div>
                    </div>

                    {subject === "order" && (
                       <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                          <label className="text-xs font-bold text-slate-500 uppercase">Order ID</label>
                          <input 
                             type="text" 
                             placeholder="e.g. 450921" 
                             className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500"
                          />
                       </div>
                    )}

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                       <textarea 
                          rows={6}
                          placeholder="Describe your issue in detail..."
                          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all resize-none"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                       />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                       <button type="button" className="text-slate-400 hover:text-blue-600 flex items-center gap-2 text-sm font-medium transition-colors">
                          <Paperclip size={18} /> Attach File
                       </button>
                       <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                          Submit Ticket <Send size={16} />
                       </button>
                    </div>
                 </form>
              </div>
           </div>

           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                       <MessageSquare size={18} className="text-slate-400" /> Recent Tickets
                    </h3>
                 </div>
                 
                 <div className="divide-y divide-slate-100">
                    {mockTickets.map((ticket) => (
                       <div key={ticket.id} className="p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
                          <div className="flex justify-between items-start mb-2">
                             <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${getStatusColor(ticket.status)}`}>
                                {ticket.status}
                             </span>
                             <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                <Clock size={10} /> {ticket.lastUpdate}
                             </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                             {ticket.subject}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                             {ticket.message}
                          </p>
                       </div>
                    ))}
                 </div>
                 
                 <div className="p-4 border-t border-slate-100 text-center">
                    <button className="text-xs font-bold text-blue-600 hover:underline">View All History</button>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
