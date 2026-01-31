import React from 'react';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/20 mb-6">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
            <span className="text-red-300 text-sm font-medium">Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Election Timeline</h2>
          <p className="text-gray-400 text-lg">เส้นทางสู่การเปลี่ยนแปลง</p>
        </div>
        <div className="space-y-12">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 11.08V12a10 10 0 11-5.93-9.14"/></svg>
            </div>
            <div className="ml-8">
              <span className="text-sm font-semibold text-red-400">24 ม.ค. - 11 ก.พ. 2569</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-2">หาเสียง</h3>
              <p className="text-gray-400">นำเสนอนโยบายหน้าเสาธงและโรงอาหาร</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
            </div>
            <div className="ml-8">
              <span className="text-sm font-semibold text-gray-500">11 ก.พ. 2569</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-2">เลือกตั้ง 🗳️</h3>
              <p className="text-gray-400">เข้าคูหา กาเบอร์พรรคทันเด้อ</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-800/80 border border-gray-700 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/><polyline points="7 11 12 16 17 11"/><line x1="12" y1="4" x2="12" y2="16"/></svg>
            </div>
            <div className="ml-8">
              <span className="text-sm font-semibold text-gray-500">12 ก.พ. 2569</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-2">เริ่มการทำงาน</h3>
              <p className="text-gray-400">ประกาศผลและเริ่มดำเนินงานทันที</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
