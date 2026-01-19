"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  Code, 
  Copy, 
  Check, 
  Server, 
  Database, 
  Terminal, 
  DollarSign, 
  RefreshCcw, 
  XCircle,
  Download
} from "lucide-react";

const codeSnippets = {
  serviceList: `[
  {
    "service": 1,
    "name": "Followers",
    "type": "Default",
    "category": "First Category",
    "rate": "0.90",
    "min": "50",
    "max": "10000",
    "refill": true,
    "cancel": true
  }
]`,
  addOrder: `{
  "order": 23501
}`,
  orderStatus: `{
  "charge": "0.27819",
  "start_count": "3572",
  "status": "Partial",
  "remains": "157",
  "currency": "USD"
}`,
  multiStatus: `{
  "1": {
    "charge": "0.27819",
    "start_count": "3572",
    "status": "Partial",
    "remains": "157",
    "currency": "USD"
  },
  "10": { "error": "Incorrect order ID" }
}`,
  balance: `{
  "balance": "100.84292",
  "currency": "USD"
}`
};

const sections = [
  { id: "intro", label: "Introduction", icon: Terminal },
  { id: "services", label: "Service List", icon: Server },
  { id: "add", label: "Add Order", icon: Database },
  { id: "status", label: "Order Status", icon: Code },
  { id: "refill", label: "Refill", icon: RefreshCcw },
  { id: "cancel", label: "Cancel", icon: XCircle },
  { id: "balance", label: "User Balance", icon: DollarSign },
];

export default function ApiPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">Documentation</h3>
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === section.id 
                        ? "bg-blue-50 text-blue-600" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <section.icon size={16} />
                    {section.label}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-100 px-3">
                 <a 
                   href="/example.txt" 
                   target="_blank"
                   className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
                 >
                    <Download size={14} /> Download PHP Example
                 </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            
            <section id="intro" className="scroll-mt-24">
               <h1 className="text-3xl font-bold text-slate-900 mb-4">API Documentation</h1>
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">HTTP Method</div>
                        <div className="font-mono text-sm font-bold text-blue-600">POST</div>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">API URL</div>
                        <div className="font-mono text-sm font-bold text-slate-700 break-all">https://reallysimplesocial.com/api/v2</div>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">Response Format</div>
                        <div className="font-mono text-sm font-bold text-green-600">JSON</div>
                     </div>
                  </div>
               </div>
            </section>

            <SectionBlock 
               id="services" 
               title="Service List" 
               params={[
                 { key: "key", desc: "Your API key" },
                 { key: "action", desc: "services" }
               ]}
               response={codeSnippets.serviceList}
               onCopy={(text: string) => handleCopy(text, "services")}
               copied={copied === "services"}
            />

            <SectionBlock 
               id="add" 
               title="Add Order" 
               params={[
                 { key: "key", desc: "Your API key" },
                 { key: "action", desc: "add" },
                 { key: "service", desc: "Service ID" },
                 { key: "link", desc: "Link to page" },
                 { key: "quantity", desc: "Needed quantity" },
                 { key: "runs (opt)", desc: "Runs to deliver (Drip-feed)" },
                 { key: "interval (opt)", desc: "Interval in minutes" }
               ]}
               response={codeSnippets.addOrder}
               onCopy={(text: string) => handleCopy(text, "add")}
               copied={copied === "add"}
            />

            <SectionBlock 
               id="status" 
               title="Order Status" 
               params={[
                 { key: "key", desc: "Your API key" },
                 { key: "action", desc: "status" },
                 { key: "order", desc: "Order ID" }
               ]}
               response={codeSnippets.orderStatus}
               onCopy={(text: string) => handleCopy(text, "status")}
               copied={copied === "status"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div id="refill" className="scroll-mt-24">
                   <h3 className="text-lg font-bold text-slate-900 mb-3">Refill</h3>
                   <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <ParamTable params={[
                         { key: "action", desc: "refill" },
                         { key: "order", desc: "Order ID" }
                      ]} />
                   </div>
                </div>
                <div id="cancel" className="scroll-mt-24">
                   <h3 className="text-lg font-bold text-slate-900 mb-3">Cancel</h3>
                   <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <ParamTable params={[
                         { key: "action", desc: "cancel" },
                         { key: "order", desc: "Order ID" }
                      ]} />
                   </div>
                </div>
            </div>

            <SectionBlock 
               id="balance" 
               title="User Balance" 
               params={[
                 { key: "key", desc: "Your API key" },
                 { key: "action", desc: "balance" }
               ]}
               response={codeSnippets.balance}
               onCopy={(text: string) => handleCopy(text, "balance")}
               copied={copied === "balance"}
            />

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const SectionBlock = ({ id, title, params, response, onCopy, copied }: any) => (
  <section id={id} className="scroll-mt-24">
     <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-blue-600 rounded-full" /> {title}
     </h2>
     <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
           
           <div className="p-6 border-b md:border-b-0 md:border-r border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-4">Parameters</h4>
              <ParamTable params={params} />
           </div>

           <div className="bg-[#0f172a] p-6 relative group">
              <div className="flex justify-between items-center mb-2">
                 <h4 className="text-xs font-bold text-slate-400 uppercase">Response (JSON)</h4>
                 <button 
                   onClick={() => onCopy(response)}
                   className="text-slate-400 hover:text-white transition-colors"
                 >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                 </button>
              </div>
              <pre className="text-xs font-mono text-blue-300 overflow-x-auto custom-scrollbar">
                 {response}
              </pre>
           </div>
        </div>
     </div>
  </section>
);

const ParamTable = ({ params }: any) => (
  <table className="w-full text-sm text-left">
     <thead>
        <tr className="border-b border-slate-100">
           <th className="pb-2 font-medium text-slate-500">Parameter</th>
           <th className="pb-2 font-medium text-slate-500">Description</th>
        </tr>
     </thead>
     <tbody className="divide-y divide-slate-100">
        {params.map((p: any, i: number) => (
           <tr key={i}>
              <td className="py-2.5 font-mono text-blue-600 font-medium pr-4">{p.key}</td>
              <td className="py-2.5 text-slate-600">{p.desc}</td>
           </tr>
        ))}
     </tbody>
  </table>
);
