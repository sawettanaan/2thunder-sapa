'use client';

import { motion } from 'framer-motion';
import { Zap, Phone, Mail, Instagram, Code, Heart } from 'lucide-react';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  return (
    <footer className="bg-gradient-to-b from-black to-black/80 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={footerVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/50">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent">
                สภา Thunder
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              อยากเห็นโรงเรียนของเราดีขึ้น
              <br />
              <span className="text-red-400/80 font-semibold">เลือก Thunder</span>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={footerVariants}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-400" />
              ข้อมูลติดต่อ
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/thunder.swry/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-red-500/60 group-hover:text-red-400" />
                <span>@thunder.swry</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={footerVariants}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-red-400" />
              ทีมผู้พัฒนา
            </h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>นายเศวตนันท์ พิพัฒตั้งสมบัติ</span>
              </div>
              <p className="text-xs text-gray-500 ml-5">ผู้พัฒนาเว็บไซต์</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="origin-left h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            สร้างด้วย{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            {' '}โดยพรรคทันเด้อ • รวดเร็วแบบ Thunder{' '}
            <Zap className="w-4 h-4 text-yellow-400" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
