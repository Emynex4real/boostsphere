"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Updated SMM FAQ Data ---
const faqs = [
  {
    question: "What is an SMM Panel?",
    answer: "An SMM (Social Media Marketing) panel is an automated platform where you can buy social media services like followers, likes, views, and comments to grow your online presence quickly."
  },
  {
    question: "Is it safe to use your services?",
    answer: "Yes, absolutely. We use high-quality profiles and safe delivery methods that comply with social media algorithms to ensure your account remains safe and secure."
  },
  {
    question: "What is the 'Drip-feed' feature?",
    answer: "Drip-feed allows you to build engagement gradually. For example, instead of getting 1,000 likes at once, you can set it to deliver 100 likes every 30 minutes to make the growth look organic."
  },
  {
    question: "Do you offer API support for resellers?",
    answer: "Yes! We have a fully documented API that allows you to connect your own panel to ours and resell our services automatically. You can find the documentation in your dashboard."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including Credit/Debit Cards, Paystack (for Nigeria), Crypto, and Bank Transfers. Funds are added to your wallet instantly."
  },
  {
    question: "How long does it take to start an order?",
    answer: "Most orders start instantly (within 0-5 minutes) after you place them. However, some services may take a bit longer depending on the server load."
  },
  {
    question: "What is a 'Refill' guarantee?",
    answer: "If you purchase a 'Refill' service and your followers drop within the guarantee period (e.g., 30 days), you can click the Refill button to restore them for free."
  },
  {
    question: "Can I cancel an order after placing it?",
    answer: "Orders are processed automatically, so they usually cannot be cancelled once placed. However, if an order gets stuck or fails, the system will automatically refund your balance."
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight font-display">
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