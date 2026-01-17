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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Amunga",
    handle: "@davidamunga_",
    avatar: "https://i.pravatar.cc/150?u=1",
    platform: "twitter",
    content: (
      <>
        This is a <span className="bg-blue-50 text-blue-700 px-1 font-semibold">neat Canny alternative</span> 😌. The UI is much cleaner and faster.
      </>
    ),
  },
  {
    id: 2,
    name: "Jaisal Rathee",
    handle: "@RatheeJaisal",
    avatar: "https://i.pravatar.cc/150?u=2",
    platform: "twitter",
    content: (
      <>
        BoostSphere has completely changed how we <span className="bg-blue-50 text-blue-700 px-1 font-semibold">prioritize feature requests</span>. We now have a clear overview of our tasks and priorities.
      </>
    ),
  },
  {
    id: 3,
    name: "Clive Walkden",
    handle: "@clivewalkden",
    avatar: "https://i.pravatar.cc/150?u=3",
    platform: "twitter",
    content: (
      <>
        Love this, current tools seem <span className="bg-blue-50 text-blue-700 px-1 font-semibold">bloated</span> and you pay for features you don't want. Looking forward to seeing this progress!
      </>
    ),
  },
  {
    id: 4,
    name: "Emanuel Perez",
    handle: "@eperez_novus",
    avatar: "https://i.pravatar.cc/150?u=4",
    platform: "linkedin",
    content: (
      <>
        I dig this concept - BoostSphere helped us out a ton with <span className="bg-blue-50 text-blue-700 px-1 font-semibold">prioritizing customer feedback</span>!
      </>
    ),
  },
  {
    id: 5,
    name: "Anastasiya S.",
    handle: "@sidorere",
    avatar: "https://i.pravatar.cc/150?u=5",
    platform: "twitter",
    content: (
      <>
        Oh please do it! It's been a pain to <span className="bg-blue-50 text-blue-700 px-1 font-semibold">keep all feedback consolidated</span>. Especially when managing a portfolio of products, this adds the clarity we needed.
      </>
    ),
  },
  {
    id: 6,
    name: "Carmen López",
    handle: "@story_carmen",
    avatar: "https://i.pravatar.cc/150?u=6",
    platform: "linkedin",
    content: (
      <>
        When I worked as CSM, managing feedback was always challenging. <span className="bg-blue-50 text-blue-700 px-1 font-semibold">BoostSphere simplifies the task</span> perfectly.
      </>
    ),
  },
  {
    id: 7,
    name: "Michael Chen",
    handle: "@mchen_dev",
    avatar: "https://i.pravatar.cc/150?u=7",
    platform: "twitter",
    content: (
      <>
        Honestly, the <span className="bg-blue-50 text-blue-700 px-1 font-semibold">dark mode</span> is gorgeous. It makes reviewing user feedback at night so much easier on the eyes.
      </>
    ),
  },
  {
    id: 8,
    name: "Sarah Jenkins",
    handle: "@sarahj_pm",
    avatar: "https://i.pravatar.cc/150?u=8",
    platform: "linkedin",
    content: (
      <>
        Finally, a tool that doesn't cost an arm and a leg. The <span className="bg-blue-50 text-blue-700 px-1 font-semibold">free tier</span> is generous enough for us to get started immediately.
      </>
    ),
  },
  {
    id: 9,
    name: "Sarah Jenkins",
    handle: "@sarahj_pm",
    avatar: "https://i.pravatar.cc/150?u=8",
    platform: "linkedin",
    content: (
      <>
        Finally, a tool that doesn't cost an arm and a leg. The <span className="bg-blue-50 text-blue-700 px-1 font-semibold">free tier</span> is generous enough for us to get started immediately.
      </>
    ),
  },
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
          className="w-10 h-10 rounded-full border border-slate-100" 
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
            See what our customers have to say about building better products with BoostSphere.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full shadow-sm hover:bg-slate-50 transition-all">
                Load more reviews
            </button>
        </div>

      </div>
    </section>
  );
}
