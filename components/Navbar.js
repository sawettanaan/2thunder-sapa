import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-red-500/20 shadow-lg shadow-red-500/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 via-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/50">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-rose-400 bg-clip-text text-transparent">Thunder</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-red-400 font-medium transition-colors">หน้าแรก</a>
          <a href="#timeline" className="text-gray-300 hover:text-red-400 font-medium transition-colors">ไทม์ไลน์</a>
          <a href="#policies" className="text-gray-300 hover:text-red-400 font-medium transition-colors">นโยบาย</a>
          <a href="#members" className="text-gray-300 hover:text-red-400 font-medium transition-colors">ทีมงาน</a>
        </div>
      </div>
    </nav>
  );
}
