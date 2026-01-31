'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, X, GraduationCap, User } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'นางสาวธนภร จันทร์แป้น',
    role: 'ประธาน',
    color: 'from-red-500 to-rose-600',
    initials: 'นข',
    image: '/pic/จันทร์แป้น.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '101',
  },
  {
    id: 2,
    name: 'นางสาวธนัชชา เถาโคตศรี',
    role: 'รองประธาน',
    color: 'from-rose-500 to-pink-600',
    initials: 'มน',
    image: '/pic/มินนี่.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '102',
  },
  {
    id: 3,
    name: 'นางสาวปภาวรินทร์ แก้วบุญทัน',
    role: 'เลขานุการ',
    color: 'from-pink-500 to-red-500',
    initials: 'ก',
    image: '/pic/เกท.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '110',
  },
  {
    id: 4,
    name: 'นายเขตตะวัน บุญยิ้ม',
    role: 'คณะกรรมการ',
    color: 'from-red-600 to-rose-700',
    initials: 'ช',
    image: '/pic/ชิ.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '103',
  },
  {
    id: 5,
    name: 'นายณัฎฐ์ภัทร์ มะโนวรรณา',
    role: 'คณะกรรมการ',
    color: 'from-rose-600 to-pink-600',
    initials: 'เก',
    image: '/pic/เก่ง.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '104',
  },
  {
    id: 6,
    name: 'นายธนวุฒิ แวววับ',
    role: 'คณะกรรมการ',
    color: 'from-pink-600 to-red-600',
    initials: 'บ',
    image: '/pic/บอม.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '105',
  },
  {
    id: 7,
    name: 'นายเศวตนันท์ พิพัฒตั้งสมบัติ',
    role: 'คณะกรรมการ',
    color: 'from-red-700 to-rose-800',
    initials: 'เศ',
    image: '/pic/เศวต.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '106',
  },
  {
    id: 8,
    name: 'นางสาวธิดารัตน์ ตั่งขุนทด',
    role: 'คณะกรรมการ',
    color: 'from-rose-700 to-pink-700',
    initials: 'ให',
    image: '/pic/ใหม่.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '107',
  },
  {
    id: 9,
    name: 'นางสาวประภาพร เรือทะมิน',
    role: 'คณะกรรมการ',
    color: 'from-pink-700 to-red-700',
    initials: 'กา',
    image: '/pic/กาตูน.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '108',
  },
  {
    id: 10,
    name: 'นางสาวภัทรวดี ฤกษ์มงคล',
    role: 'คณะกรรมการ',
    color: 'from-red-500 to-rose-600',
    initials: 'เชี',
    image: '/pic/sh.jpg',
    class: 'ม.4/5',
    branch: 'SMTE',
    studentId: '109',
  },
];

export default function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

  return (
    <section
      id="members"
      className="py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-yellow-600/20 border border-red-500/30 mb-6">
            <Users className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">10 คน</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ทีมงานของเรา
          </h2>
          <p className="text-gray-400 text-lg">
            ทีมงาน 10 คนที่จะมาเปลี่ยนโรงเรียน
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.05 }}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -12 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${member.color} border-2 border-yellow-400/50 rounded-3xl p-6 text-center transition-all duration-300 backdrop-blur shadow-lg hover:shadow-2xl hover:border-yellow-300`}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4 shadow-lg border-2 border-white/30 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {member.initials}
                    </span>
                  )}
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-0.5 leading-tight">
                  {member.name.split(' ').slice(0, -1).join(' ')}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-yellow-300 mb-2">
                  {member.name.split(' ').pop()}
                </p>
                <p className="text-xs md:text-sm text-yellow-200 font-semibold mb-2">{member.role}</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-3" />
                <p className="text-xs text-gray-100">🎓 {member.class}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-6">
                <div className="w-72 h-96 flex-shrink-0 rounded-2xl bg-gradient-to-br from-red-600 to-yellow-600 flex items-center justify-center shadow-lg overflow-hidden">
                  {selectedMember.image ? (
                    <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-6xl font-bold text-white">
                      {selectedMember.initials}
                    </span>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedMember.name.split(' ').slice(0, -1).join(' ')}
                    </h2>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
                      {selectedMember.name.split(' ').pop()}
                    </h2>
                    <p className="text-base text-yellow-300 font-semibold">{selectedMember.role}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg border border-red-500/30">
                      <GraduationCap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-300 text-sm">ชั้นเรียน</p>
                        <p className="text-white font-semibold text-base">{selectedMember.class}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg border border-red-500/30">
                      <User className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-gray-300 text-sm">แขนง</p>
                        <p className="text-white font-semibold text-base">{selectedMember.branch}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg border border-red-500/30">
                      <div className="w-5 h-5 text-yellow-400 flex items-center justify-center text-xs font-bold flex-shrink-0">ID</div>
                      <div className="min-w-0">
                        <p className="text-gray-300 text-sm">เลขประจำตัว</p>
                        <p className="text-white font-semibold text-base">{selectedMember.studentId || 'ยังไม่ได้กรอก'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMember(null)}
                className="mt-4 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-red-600 to-yellow-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
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
