/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedService, setSelectedService] = useState<{ title: string; desc: string; deliverables: string[] } | null>(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [selectedService]);

  const handleNavClick = (sectionId: string) => {
    setSelectedService(null);
    // Use a small timeout to allow the home page to render before scrolling
    setTimeout(() => {
      if (sectionId === '#' || !sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      try {
        const target = document.querySelector(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.warn('Invalid selector:', sectionId);
      }
    }, 100);
  };

  return (
    <main className="relative bg-dark">
      <Navbar onNavClick={handleNavClick} />
      {selectedService ? (
        <ServiceDetail 
          service={selectedService} 
          onBack={() => setSelectedService(null)} 
        />
      ) : (
        <>
          <Hero />
          <About />
          <Services onExplore={(s) => setSelectedService(s)} />
          <Work />
          <Team />
          <Contact />
        </>
      )}
      <Footer />
    </main>
  );
}
