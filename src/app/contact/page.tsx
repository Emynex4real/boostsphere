"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, 
  Mail, 
  MessageSquare, 
  LifeBuoy, 
  Send,
  MapPin,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Footer = () => (
  <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-white fill-current" />
        </div>
        <span className="font-bold text-xl text-slate-900">BoostSphere</span>
      </div>
      <p className="text-xs text-slate-500 mb-6">The #1 SMM Panel for Resellers.</p>
      <div className="text-xs text-slate-400">© 2026 BoostSphere Inc. All rights reserved.</div>
    </div>
  </footer>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            24/7 Support
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-display">
            Get in touch with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Our Team</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have a question about an order, API integration, or payments? We are here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="space-y-6 lg:col-span-1">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-green-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">WhatsApp Support</h3>
                  <p className="text-sm text-slate-500 mb-2">Instant replies for payments.</p>
                  <a href="#" className="text-sm font-bold text-green-600 hover:underline">+234 800 123 4567</a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <p className="text-sm text-slate-500 mb-2">For general inquiries & partnerships.</p>
                  <a href="mailto:support@boostsphere.com" className="text-sm font-bold text-blue-600 hover:underline">support@boostsphere.com</a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:border-purple-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <LifeBuoy size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Technical Tickets</h3>
                  <p className="text-sm text-slate-500 mb-2">Order issues? Open a ticket.</p>
                  <Link href="/auth" className="text-sm font-bold text-purple-600 hover:underline">Open Dashboard</Link>
                </div>
              </motion.div>

              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Clock size={16} /> Mon-Sun: 24/7 Support
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} /> Lagos, Nigeria
                </div>
              </div>

            </div>

            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                      <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                      <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                    <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all">
                      <option>General Inquiry</option>
                      <option>Payment Issue</option>
                      <option>API Partnership</option>
                      <option>Report a Bug</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                    <textarea rows={6} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all resize-none" placeholder="How can we help you today?"></textarea>
                  </div>

                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </form>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
