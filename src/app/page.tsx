import React from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="selection:bg-sage-light selection:text-sage">
        <Navbar />
        <Hero />
        
        {/* Subtle Section Transition */}
        <div className="bg-paper py-20 flex justify-center border-y border-sage/5">
          <div className="text-earth font-serif italic text-3xl opacity-50 tracking-[0.2em]">
            Breathe In. Sip Slow.
          </div>
        </div>

        <Featured />
        <Story />
        <Menu />
        
        {/* Reservation Teaser */}
        <section className="py-32 bg-sage-light text-center relative z-0">
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-5xl md:text-7xl mb-8">Save Your Seat</h2>
            <p className="text-xl text-sage/70 max-w-xl mx-auto mb-12 italic leading-relaxed">
              We keep a few tables open for spontaneous visits, but a reservation ensures your favorite sun-drenched spot is waiting.
            </p>
            <button className="bg-earth text-white border-2 border-[#1A1A1A] px-12 py-5 rounded-[40px] text-lg font-medium hover:bg-sage transition-all hover:scale-105 shadow-lg">
              Book a Table
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
