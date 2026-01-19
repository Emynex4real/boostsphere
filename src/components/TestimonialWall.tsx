"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Twitter, Linkedin } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  platform: "twitter" | "linkedin";
  content: React.ReactNode;
};

// --- Updated Testimonials (Matching Really Simple Social Content + Localized Faces) ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samuel",
    handle: "@samuel_growth",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=faces", // Black Male Professional
    platform: "twitter",
    content: (
      <>
        Support was <span className="bg-blue-50 text-blue-700 px-1 font-semibold">extremely quick</span> and helpful. I've used other SMM panels before, but BoostSphere is by far the best. Highly recommended!
      </>
    ),
  },
  {
    id: 2,
    name: "Peter",
    handle: "@peter_marketing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces", // Black Male Casual
    platform: "linkedin",
    content: (
      <>
        No other social media panel comes close. The <span className="bg-blue-50 text-blue-700 px-1 font-semibold">prices are unbeatable</span> and the delivery is always instant. My clients are very happy.
      </>
    ),
  },
  {
    id: 3,
    name: "Ibro",
    handle: "@ibro_influencer",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces", // Black Female Smiling
    platform: "twitter",
    content: (
      <>
        They do their best to get you the <span className="bg-blue-50 text-blue-700 px-1 font-semibold">followers you want</span>. I really appreciate the quality of the profiles, they look 100% real.
      </>
    ),
  },
  {
    id: 4,
    name: "Chinedu Okeke",
    handle: "@chinedu_biz",
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&h=100&fit=crop&crop=faces", // Black Female Professional
    platform: "linkedin",
    content: (
      <>
        I was skeptical at first, but the <span className="bg-blue-50 text-blue-700 px-1 font-semibold">Instagram followers stuck</span>. No drops after 3 months. Definitely using this for my other brands.
      </>
    ),
  },
  {
    id: 5,
    name: "Sarah Johnson",
    handle: "@sarah_socials",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces", // Black Female Corporate
    platform: "twitter",
    content: (
      <>
        The <span className="bg-blue-50 text-blue-700 px-1 font-semibold">Drip-feed feature</span> is a game changer. It makes the growth look completely organic to the algorithm. 🚀
      </>
    ),
  },
  {
    id: 6,
    name: "David O.",
    handle: "@david_reseller",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces", // Black Male Portrait
    platform: "linkedin",
    content: (
      <>
        I resell these services to my own local clients. The <span className="bg-blue-50 text-blue-700 px-1 font-semibold">API is rock solid</span> and lets me automate my entire business.
      </>
    ),
  }
];

const TestimonialCard = ({ data }: { data: Testimonial }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-6 break-inside-avoid hover:shadow-md hover:border-blue-100 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <img 
          src={data.avatar} 
          alt={data.name} 
          className="w-10 h-10 rounded-full border border-slate-100 object-cover" 
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-none">{data.name}</h4>
          <span className="text-xs text-slate-500">{data.handle}</span>
        </div>
      </div>
      {data.platform === "twitter" ? (
        <Twitter className="w-4 h-4 text-slate-400" />
      ) : (
        <Linkedin className="w-4 h-4 text-slate-400" />
      )}
    </div>

    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>

    <p className="text-sm text-slate-600 leading-relaxed">
      {data.content}
    </p>
  </motion.div>
);

export default function TestimonialWall() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">
            Wall of Love <span className="text-blue-600">💙</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See what our customers have to say about growing their social presence with BoostSphere.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full shadow-sm hover:bg-slate-50 transition-all">
                Load more reviews
            </button>
        </div> */}

      </div>
    </section>
  );
}