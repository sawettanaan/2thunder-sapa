'use client';

import { motion } from 'framer-motion';
import { Calendar, Megaphone, Vote, Rocket } from 'lucide-react';

const timelineData = [
  {
    date: '24 ม.ค. - 10 ก.พ. 2569',
    title: 'หาเสียง',
    description: 'นำเสนอนโยบายหน้าเสาธงและโรงอาหาร',
    icon: Megaphone,
    active: true,
  },
  {
    date: '11 ก.พ. 2569',
    title: 'เลือกตั้ง 🗳️',
    description: 'เข้าคูหา Thunder',
    icon: Vote,
    active: false,
  },
  {
    date: '12 ก.พ. 2569',
    title: 'เริ่มการทำงาน',
    description: 'ประกาศผลและเริ่มดำเนินงานทันที',
    icon: Rocket,
    active: false,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 mb-6">
            <Calendar className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Election Timeline
          </h2>
          <p className="text-gray-400 text-lg">เส้นทางสู่การเปลี่ยนแปลง</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent md:-translate-x-1/2" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                      item.active
                        ? 'bg-gradient-to-br from-red-500 to-rose-600 shadow-red-500/40'
                        : 'bg-gray-800/80 border border-gray-700'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${item.active ? 'text-white' : 'text-gray-400'}`}
                    />
                  </motion.div>
                  {item.active && (
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-red-500/40 blur-xl animate-pulse" />
                  )}
                </div>

                <div
                  className={`ml-28 md:ml-0 md:w-[calc(50%-4rem)] ${
                    isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      item.active
                        ? 'bg-gradient-to-br from-red-600/10 to-rose-600/10 border-red-500/30'
                        : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        item.active ? 'text-red-400' : 'text-gray-500'
                      }`}
                    >
                      {item.date}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
