import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set([badgeRef.current, titleRef.current, descRef.current, btnsRef.current], {
      y: 50,
      opacity: 0
    });

    // 0:00 - Hero section appears with fade + upward motion
    tl.to([badgeRef.current, titleRef.current, descRef.current, btnsRef.current], {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out'
    });

    // 0:03 - Text slides from left (simulated by a slight x-offset reveal)
    tl.from(titleRef.current, {
      x: -30,
      duration: 1,
      ease: 'power3.out'
    }, 0.5);

    // 0:05 - Image zoom parallax (background shape)
    gsap.to(bgRef.current, {
      scale: 1.1,
      duration: 10,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

    // Floating animation for the background shape
    gsap.to('.hero-bg-shape', {
      y: 20,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Background Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="hero-bg-shape absolute w-[800px] h-[800px] opacity-30 blur-[100px] bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-full" />
        <img 
          src="https://picsum.photos/seed/liquid/1920/1080" 
          alt="Abstract Liquid" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          The Future of Digital Art
        </div>

        <h1 ref={titleRef} className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] mb-8 text-white uppercase">
          <span className="block">WE CREATE</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">BRAND ICONS</span>
        </h1>

        <p ref={descRef} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          We blend high-end 3D artistry, stunning graphics, and cutting-edge web development to build brands that dominate the market.
        </p>

        <div ref={btnsRef} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#services"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-indigo-500/20 text-sm uppercase tracking-wider text-center"
          >
            Explore Services
          </a>
          <a 
            href="#work"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors text-sm uppercase tracking-wider text-center"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
