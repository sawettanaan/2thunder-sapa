import React from 'react';

const members = [
  { name: 'นางสาวธนภร จันทร์แป้น', role: 'ประธาน', color: 'from-red-500 to-rose-600', initials: 'ธจ' },
  { name: 'นางสาวธนัชชา เถาโคตศรี', role: 'รองประธาน', color: 'from-rose-500 to-pink-600', initials: 'ธช' },
  { name: 'นางสาวปภาวรินทร์ แก้วบุษทัน', role: 'เลขานุการ', color: 'from-pink-500 to-red-500', initials: 'ปก' },
  { name: 'นายเขตตะวัน บุญยิ้ม', role: 'คณะกรรมการ', color: 'from-red-600 to-rose-700', initials: 'ขบ' },
  { name: 'นายณัฎฐ์ภัทร์ มะโนวรรณา', role: 'คณะกรรมการ', color: 'from-rose-600 to-pink-600', initials: 'ณม' },
  { name: 'นายธนวุฒิ แวววับ', role: 'คณะกรรมการ', color: 'from-pink-600 to-red-600', initials: 'ทธ' },
  { name: 'นายเศวตนันท์ พิพัฒตั้งสมบัติ', role: 'คณะกรรมการ', color: 'from-red-700 to-rose-800', initials: 'ศพ' },
  { name: 'นางสาวธิดารัตน์ ตังขุนทด', role: 'คณะกรรมการ', color: 'from-rose-700 to-pink-700', initials: 'ธต' },
  { name: 'นางสาวประภาพร เรือทะมิน', role: 'คณะกรรมการ', color: 'from-pink-700 to-red-700', initials: 'ปร' },
  { name: 'นางสาวภัทรวดี ฤกษ์มงคล', role: 'คณะกรรมการ', color: 'from-red-500 to-rose-600', initials: 'ภฤ' },
];

export default function TeamMembers() {
  return (
    <section id="members" className="py-24 md:py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 mb-6">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
            <span className="text-red-300 text-sm font-medium">10 คน</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">ทีมงานของเรา</h2>
          <p className="text-gray-400 text-lg">ทีมงาน 10 คนที่จะมาเปลี่ยนโรงเรียน</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {members.map((m, i) => (
            <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-2xl p-4 text-center transition-all duration-300">
              <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-4 shadow-lg`}>
                <span className="text-2xl md:text-3xl font-bold text-white">{m.initials}</span>
              </div>
              <h3 className="text-sm md:text-base font-bold text-white mb-1">{m.name}</h3>
              <p className="text-xs md:text-sm text-red-400/80">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
