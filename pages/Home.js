import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Timeline from '../components/Timeline';
import Policies from '../components/Policies';
import TeamMembers from '../components/TeamMembers';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-[Kanit,sans-serif]">
      {/* Lightning SVG Filter */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      <Navbar />
      <HeroSection />
      <Timeline />
      <Policies />
      <TeamMembers />
      <Footer />
    </div>
  );
}
