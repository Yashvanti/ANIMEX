import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.from('.about-img', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.about-content > *', {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.8')
    .from('.stat-item', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.4');
  }, { scope: sectionRef });

  const stats = [
    { value: '500+', label: 'Projects Done' },
    { value: '120+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Active' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 md:px-12 bg-white text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image/Graphic */}
        <div className="about-img relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <img 
              src="https://picsum.photos/seed/agency/800/1000" 
              alt="Our Work" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay UI Elements */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">500+</div>
                <div>
                  <p className="text-xs font-bold text-dark">Projects</p>
                  <p className="text-[10px] text-gray-500">Completed Successfully</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 bg-dark text-white p-4 rounded-2xl shadow-lg">
              <p className="text-xs font-bold">10+ Years</p>
              <p className="text-[10px] text-gray-400">Of Experience</p>
            </div>
          </div>
          {/* Decorative background shape */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        {/* Right: Content */}
        <div className="about-content space-y-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              Architects of the <span className="text-primary">Virtual World</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Animex Studio isn't just an agency — we are a collective of dreamers and doers. We don't just design; we <span className="font-bold text-dark">engineer emotions</span> through pixels and polygons. Our mission is to bridge the gap between imagination and reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/20 transition-colors group">
                <h3 className="text-3xl font-black text-dark mb-1 group-hover:text-primary transition-colors">{stat.value}</h3>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <button className="px-10 py-4 bg-dark text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-xl shadow-black/10">
            Meet The Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
