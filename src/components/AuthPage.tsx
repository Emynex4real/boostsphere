"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight
} from "lucide-react";
import Image from "next/image";

const TestimonialPanel = () => (
  <div className="hidden lg:flex w-1/2 bg-[#0B1120] relative overflow-hidden flex-col justify-between p-12 text-white">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-900 to-[#0B1120] opacity-90" />
    <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-blue-500 rounded-full blur-[150px] opacity-30 mix-blend-screen" />
    
    <div className="relative z-10 flex items-center">
      <Image src="/images/PNG/Logo white Text font 02.png" alt="BoostSphere" width={160} height={40} className="h-8 w-auto" />
    </div>

    <div className="relative z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
        <div className="flex gap-1 mb-4">
          {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />)}
        </div>
        <p className="text-lg leading-relaxed font-medium mb-6">
          "I've tried 5 different panels, but BoostSphere is the only one that delivers instant likes without dropping. My agency revenue doubled in just one month."
        </p>
        <div className="flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces" 
            alt="Chioma Adebayo" 
            className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover" 
          />
          <div>
            <h4 className="font-bold">Chioma Adebayo</h4>
            <span className="text-sm text-blue-200">Digital Marketer @ LagosTrends</span>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 text-sm text-blue-200/60">
      © 2026 BoostSphere Inc. The #1 SMM Panel in Nigeria.
    </div>
  </div>
);

const InputGroup = ({ 
  label, 
  type = "text", 
  placeholder, 
  icon: Icon,
  isPassword = false 
}: { 
  label: string; 
  type?: string; 
  placeholder: string; 
  icon: any; 
  isPassword?: boolean;
}) => {
  const [showPass, setShowPass] = useState(false);
  
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
        <input 
          type={isPassword ? (showPass ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
        />
        {isPassword && (
          <button 
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      
      <TestimonialPanel />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              {isLogin ? "Welcome back" : "Create Free Account"}
            </h1>
            <p className="text-slate-500">
              {isLogin ? "Enter your details to access your dashboard." : "Start growing your social media today."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.form 
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              
              {!isLogin && (
                <>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <InputGroup label="Full Name" placeholder="e.g. John Doe" icon={User} />
                    </div>
                    <div className="w-1/2">
                      <InputGroup label="Username" placeholder="e.g. johnny_d" icon={User} />
                    </div>
                  </div>
                  <InputGroup label="Phone Number" type="tel" placeholder="+234 800 000 0000" icon={Phone} />
                </>
              )}

              <InputGroup 
                label={isLogin ? "Email or Username" : "Email Address"} 
                type="email" 
                placeholder={isLogin ? "Enter your email" : "name@example.com"} 
                icon={Mail} 
              />
              
              <InputGroup label="Password" isPassword placeholder="••••••••" icon={Lock} />
              
              {!isLogin && (
                <InputGroup label="Confirm Password" isPassword placeholder="••••••••" icon={Lock} />
              )}

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">Forgot password?</a>
                </div>
              )}

              <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </motion.form>
          </AnimatePresence>

          <div className="pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}