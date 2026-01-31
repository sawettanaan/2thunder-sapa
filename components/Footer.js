import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-300 to-rose-400 bg-clip-text text-transparent">Thunder Party</span>
            </div>
            <p className="text-gray-400 leading-relaxed">โรงเรียนที่อบอุ่น พื้นที่ที่เข้าใจ<br/><span className="text-red-400/80">Make it Better.</span></p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><span className="text-xl">📞</span> ข้อมูลติดต่อ</h3>
            <div className="space-y-3">
              <a href="tel:098-909-6562" className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors"><span>098-909-6562</span></a>
              <a href="mailto:sawettanaan@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors"><span>sawettanaan@gmail.com</span></a>
              <a href="https://instagram.com/thunderparty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors"><span>@thunderparty</span></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><span className="text-xl">👨‍💻</span> ทีมผู้พัฒนา</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3"><span>นายเศวตนันท์ พิพัฒตั้งสมบัติ</span></div>
            </div>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent mb-8"></div>
        <div className="text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">สร้างด้วย <span className="text-red-500">♥</span> โดยพรรคทันเด้อ • รวมเร็วแบบ Thunder ⚡</p>
        </div>
      </div>
    </footer>
  );
}
