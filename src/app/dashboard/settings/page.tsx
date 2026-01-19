"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { 
  User, 
  Globe, 
  Key, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  Save, 
  ShieldCheck, 
  Mail
} from "lucide-react";

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState("a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6");
  const [showKey, setShowKey] = useState(false);
  const [is2FA, setIs2FA] = useState(false);
  const [email, setEmail] = useState("emynex4real@gmail.com");

  const generateNewKey = () => {
    const newKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8 pb-20">
        
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your profile, security, and API access.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           
           <div className="space-y-8">
              
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <User size={16} /> Profile Details
                    </h3>
                 </div>
                 <div className="p-6 space-y-5">
                    <div>
                       <label className="text-xs font-bold text-slate-500 uppercase">Username</label>
                       <input type="text" value="emynex4real" disabled className="w-full mt-2 p-3 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500" />
                    </div>
                    <div>
                       <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                       <div className="flex gap-2 mt-2">
                          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 p-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none" />
                          <button className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                             <Mail size={18} />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <Globe size={16} /> Preferences
                    </h3>
                 </div>
                 <div className="p-6 space-y-5">
                    <div>
                       <label className="text-xs font-bold text-slate-500 uppercase">Language</label>
                       <select className="w-full mt-2 p-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none">
                          <option value="en">English</option>
                          <option value="fr">French</option>
                          <option value="es">Spanish</option>
                       </select>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-slate-500 uppercase">Timezone</label>
                       <select className="w-full mt-2 p-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none">
                          <option value="UTC">(UTC) Greenwich Mean Time</option>
                          <option value="WAT" selected>(UTC +1:00) West Africa Time</option>
                          <option value="EST">(UTC -5:00) Eastern Standard Time</option>
                       </select>
                    </div>
                    <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                       <Save size={16} /> Save Changes
                    </button>
                 </div>
              </div>

           </div>

           <div className="space-y-8">
              
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <Key size={16} /> API Access
                    </h3>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Active</span>
                 </div>
                 <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-500">Use this key to integrate with our API. Keep it secret.</p>
                    <div className="relative">
                       <input 
                          type={showKey ? "text" : "password"} 
                          value={apiKey} 
                          readOnly 
                          className="w-full p-4 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono text-slate-700 tracking-wider"
                       />
                       <button 
                          onClick={() => setShowKey(!showKey)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                       >
                          {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                       </button>
                    </div>
                    <div className="flex gap-3">
                       <button 
                          onClick={() => navigator.clipboard.writeText(apiKey)}
                          className="flex-1 py-2.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                       >
                          Copy Key
                       </button>
                       <button 
                          onClick={generateNewKey}
                          className="flex-1 py-2.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                       >
                          <RefreshCw size={14} /> Generate New
                       </button>
                    </div>
                 </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                       <ShieldCheck size={16} /> Security
                    </h3>
                 </div>
                 <div className="p-6 space-y-6">
                    
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                       <div>
                          <div className="font-bold text-sm text-slate-900">Two-Factor Authentication</div>
                          <div className="text-xs text-slate-500 mt-0.5">Secure your account with email codes.</div>
                       </div>
                       <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked={is2FA} onChange={() => setIs2FA(!is2FA)} />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                       </label>
                    </div>

                    <div className="space-y-4 pt-2">
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Change Password</h4>
                       <input type="password" placeholder="Current Password" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm" />
                       <div className="grid grid-cols-2 gap-4">
                          <input type="password" placeholder="New Password" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm" />
                          <input type="password" placeholder="Confirm New" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm" />
                       </div>
                       <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors">
                          Update Password
                       </button>
                    </div>

                 </div>
              </div>

           </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
