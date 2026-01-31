import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/pic/total.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600/30 to-rose-600/30 border border-red-500/40 mb-8 backdrop-blur-sm">
          <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <span className="text-red-200 font-medium text-sm">พรรคทันเด้อ • เลือกตั้งสภานักเรียน</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
          <span className="text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">Make it</span><br/>
          <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(239,68,68,0.8)]">Thunder</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          โรงเรียนที่อบอุ่น พื้นที่ที่เข้าใจ<br/>
          <span className="text-red-300">เริ่มใหม่ไปด้วยกัน</span>
        </p>
        <a href="#policies" className="inline-block px-10 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-red-200 hover:text-white transition-all shadow-lg">ดูนโยบายของเรา</a>
      </div>
    </section>
  );
}
