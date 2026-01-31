'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import Policies from './components/Policies';
import TeamMembers from './components/TeamMembers';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        body { background-color: #000; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #f59e0b, #ef4444); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #fbbf24, #f87171); }
        * { font-family: 'Kanit', sans-serif; }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <Navbar />
      <HeroSection />
      <Timeline />
      <Policies />
      <TeamMembers />
      <Footer />
    </div>
  );
}
