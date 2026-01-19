"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-blue-600 fill-current" /> 
          <span className="font-bold text-xl text-slate-900 tracking-tight">BoostSphere</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/how-it-works" className="hover:text-blue-600 transition-colors">How it Works</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth" className="text-sm font-bold text-slate-600 hover:text-slate-900">
            Login
          </Link>
          <Link href="/auth" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
            Sign up for free
          </Link>
        </div>

        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4"
        >
          <Link href="/services" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Services</Link>
          <Link href="/how-it-works" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">How it Works</Link>
          <Link href="/pricing" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Pricing</Link>
          <Link href="/contact" className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Contact</Link>
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link href="/auth" className="block text-center py-2 text-sm font-bold text-slate-600 hover:text-slate-900">
              Login
            </Link>
            <Link href="/auth" className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
              Sign up for free
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
