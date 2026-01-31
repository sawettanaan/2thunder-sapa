'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Utensils,
  Laptop,
  Users,
  GraduationCap,
  Heart,
  Lightbulb,
  Leaf,
  Target,
  Shield,
  Sparkles,
  X,
} from 'lucide-react';

const policies = [
  {
    id: 1,
    title: 'สภามาแนะ',
    icon: BookOpen,
    shortDesc: 'แนะนำกิจกรรมสำหรับใส่ลง Portfolio',
    detail: 'หาค่ายหรืองานเเข่งเพื่อช้วยส่งเสริม Portfolio ของนักเรียนให้มีความน่าสนใจมากขึ้น',
  },
  {
    id: 2,
    title: 'แวะมาบอกสภา',
    icon: Users,
    shortDesc: 'ช่องทางปรึกษาแบบไม่ระบุตัวตน',
    detail: 'สร้างช่องทางเพื่อให้นักเรียนสามารถแสดงความคิดเห็นอย่างเปิดเผยและไม่กลัวบุลคลรอบข้าง',
  },
  {
    id: 3,
    title: 'สุขใดเล่าจะเท่าสุขา',
    icon: Heart,
    shortDesc: 'ห้องน้ำสะอาด',
    detail: 'ส่งเสริมการดูแลห้องน้ำให้ปราศจากกลิ่่นไม่พึงประสงค์',
  },
  {
    id: 4,
    title: 'สานต่อรุ่นพี่',
    icon: Target,
    shortDesc: 'สานต่อนโยบายจากสถารุ่นก่อนๆ',
    detail: 'สืบสานนโยบายต่อจากสถารุ่นพี่',
  },
  {
    id: 5,
    title: 'คอนเทนต์มีรางวัล',
    icon: Sparkles,
    shortDesc: 'แข่งขันคลิป TikTok',
    detail: 'จัดกิจกรรมแข่งขันทำคลิป TikTok เพื่อสร้างสรรค์ผลงานและรับรางวัล',
  },
  {
    id: 6,
    title: 'สนับสนุน E-sport',
    icon: Laptop,
    shortDesc: 'จัดแข่งขันในโรงเรียน',
    detail: 'สนับสนุนและจัดแข่งขัน E-sport เพื่อให้นักเรียนได้แสดงความสามารถ',
  },
  {
    id: 7,
    title: 'ธนาคารข้อสอบเก่า',
    icon: GraduationCap,
    shortDesc: 'แจกข้อสอบเก่า',
    detail: 'รวบรวมและแจกจ่ายข้อสอบเก่าให้นักเรียนเพื่อช่วยในการเตรียมตัว',
  },
  {
    id: 8,
    title: 'Thunder Express',
    icon: Shield,
    shortDesc: 'ของหายพี่หา',
    detail: 'หาของหายให้น้องๆหลังเลิกเรียน',
  },
];

export default function Policies() {
  const [selectedPolicy, setSelectedPolicy] = useState<typeof policies[0] | null>(null);

  return (
    <section
      id="policies"
      className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">8 นโยบาย</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            นโยบายของเรา
          </h2>
          <p className="text-gray-400 text-lg">
            คลิกเพื่อดูรายละเอียดแต่ละนโยบาย
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                onClick={() => setSelectedPolicy(policy)}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/40 to-gray-950/60 hover:border-red-500/30 transition-all duration-300 backdrop-blur"
                >
                  <div className="mb-4 p-4 rounded-xl bg-red-600/10 w-fit group-hover:bg-red-600/20 transition-colors">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{policy.title}</h3>
                  <p className="text-gray-400 text-sm">{policy.shortDesc}</p>
                  <div className="mt-4 inline-block">
                    <span className="text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
                      อ่านเพิ่มเติม →
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPolicy(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
            >
              <button
                onClick={() => setSelectedPolicy(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 p-4 rounded-xl bg-red-600/10 w-fit">
                {selectedPolicy && (() => {
                  const IconComponent = selectedPolicy.icon;
                  return <IconComponent className="w-8 h-8 text-red-400" />;
                })()}
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedPolicy.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {selectedPolicy.detail}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPolicy(null)}
                className="mt-8 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              >
                ปิด
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
