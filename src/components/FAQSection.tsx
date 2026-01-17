"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is BoostSphere?",
    answer: "BoostSphere is a customer feedback management platform that helps businesses collect, organize, and prioritize feedback from their customers."
  },
  {
    question: "Is BoostSphere free?",
    answer: "Yes. BoostSphere does come with a free plan. Paid plans start for only $19/month."
  },
  {
    question: "How is BoostSphere different from other feedback tools?",
    answer: "BoostSphere offers a user-friendly and intuitive interface, inspired by industry leaders, making it easy to collect and analyze customer feedback. We focus on helping you take action on insights."
  },
  {
    question: "Can I vote on behalf of my users?",
    answer: "Yes, you have the ability to vote on behalf of your users in BoostSphere. This is great for tracking feedback from sales calls or support tickets."
  },
  {
    question: "When should I use public vs private boards?",
    answer: "Use public boards when you want open feedback and engagement from customers. Use private boards when you want to limit visibility to specific internal teams."
  },
  {
    question: "How can I get started with BoostSphere?",
    answer: "To get started, simply sign up for a free account and begin collecting feedback from your customers and teammates immediately."
  },
  {
    question: "Can I use BoostSphere as both an internal and public tool?",
    answer: "Yes! You can use BoostSphere to collect feedback both from your internal team and from external users. Board privacy settings let you control who sees what."
  },
  {
    question: "Can I customize BoostSphere to match my brand?",
    answer: "Absolutely. BoostSphere offers customization options to ensure that the platform aligns with your brand's identity, so your customers experience a seamless transition."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Everything you need to know
          </h2>
          <p className="text-lg text-slate-500">
            If you have anything else you want to ask, <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-200 underline-offset-4 transition-all">reach out to us</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
