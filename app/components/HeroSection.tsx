'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697614e3abe8b1c14155f946/464b2caa8_total.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M 100 0 L 150 200 L 120 200 L 180 400"
          stroke="#ef4444"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.path
          d="M 800 0 L 750 300 L 780 300 L 720 500"
          stroke="#dc2626"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 1 }}
        />
      </svg>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600/30 to-rose-600/30 border border-red-500/40 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-red-300" />
          <span className="text-red-200 font-medium text-sm">พรรคทันเด้อ • เลือกตั้งสภานักเรียน</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          <span className="text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">Make it</span>
          <br />
          <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(239,68,68,0.8)]">
            Thunder
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          โรงเรียนที่อบอุ่น พื้นที่ที่เข้าใจ
          <br />
          <span className="text-red-300">เริ่มใหม่ไปด้วยกัน</span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection('#policies')}
          className="group relative px-10 py-4 rounded-full font-semibold text-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-rose-600 transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0.5 rounded-full bg-black/80 group-hover:bg-black/60 transition-colors" />
          <span className="relative z-10 flex items-center gap-2 text-red-300 group-hover:text-red-200">
            ดูนโยบายของเรา
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-red-500/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
