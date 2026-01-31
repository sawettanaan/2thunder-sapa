import React from 'react';

const policies = [
  { title: 'สภามาแนะ', desc: 'แนะนำกิจกรรมสำหรับ Portfolio' },
  { title: 'แวะมาบอกสภา', desc: 'ช่องทางปรึกษาแบบไม่ระบุตัวตน' },
  { title: 'สุขใดเล่าจะเท่าสุขา', desc: 'ส่งเสริมการดูแลห้องน้ำให้ปราศจากกลิ่น' },
  { title: 'สานต่อรุ่นพี่', desc: 'สานต่อนโยบายจากสภารุ่นก่อนๆ' },
  { title: 'คอนเทนต์มีรางวัล', desc: 'แข่งขันคลิป TikTok' },
  { title: 'สนับสนุน E-sport', desc: 'จัดแข่งขันในโรงเรียนเพื่อหาตัวแทนไปแข่งนอกโรงเรียน' },
  { title: 'ธนาคารข้อสอบเก่า', desc: 'รวบรวมแจกข้อสอบเก่าในการเข้ามหาลัย หรือ ม.4 ห้อง SMTE' },
  { title: 'Thunder Express', desc: 'ของหายพี่หา' },
];

export default function Policies() {
  return (
    <section id="policies" className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 mb-6">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            <span className="text-red-300 text-sm font-medium">8 นโยบาย</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">นโยบายของเรา</h2>
          <p className="text-gray-400 text-lg">คลิกเพื่อดูรายละเอียดแต่ละนโยบาย</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {policies.map((p, i) => (
            <div key={i} className="group cursor-pointer p-5 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-red-500/40 hover:bg-gray-900/80 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/20 to-rose-600/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4z"/><path d="M4 8h16v2H4z"/><path d="M4 12h16v2H4z"/><path d="M4 16h16v2H4z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-300 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
