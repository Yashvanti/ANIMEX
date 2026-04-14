import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Palette, Box, Video, Code, Layers, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  desc: string;
  deliverables: string[];
}

interface ServicesProps {
  onExplore: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onExplore }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.service-header > *', {
      scrollTrigger: {
        trigger: '.service-header',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.set('.services-grid', { perspective: 1000 });

    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 85%',
      },
      y: 100,
      z: -200,
      opacity: 0,
      rotateX: -20,
      rotateY: 10,
      scale: 0.8,
      duration: 1.8,
      stagger: {
        amount: 1,
        from: "start"
      },
      ease: 'expo.out',
      clearProps: 'all'
    });

    gsap.to('.service-icon', {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 1,
        from: "random"
      }
    });
  }, { scope: sectionRef });

  const services = [
    {
      icon: <Palette className="text-indigo-500" size={24} />,
      title: 'Graphic Design',
      desc: 'Logos, branding, and marketing assets.',
      num: '01',
      color: 'indigo',
      deliverables: ['Logo Design', 'Brand Identity', 'Marketing Assets', 'Social Media Graphics']
    },
    {
      icon: <Layers className="text-purple-500" size={24} />,
      title: '2D Animation',
      desc: 'Explainer videos and motion graphics storytelling.',
      num: '02',
      color: 'purple',
      deliverables: ['Explainer Videos', 'Motion Graphics', 'Character Animation', 'Social Media Ads']
    },
    {
      icon: <Box className="text-blue-500" size={24} />,
      title: '3D Animation & Visualization',
      desc: 'Photorealistic renders and architectural walkthroughs.',
      num: '03',
      color: 'blue',
      deliverables: ['Photorealistic Renders', 'Architectural Walkthroughs', 'Product Visualization', '3D Modeling']
    },
    {
      icon: <Code className="text-indigo-500" size={24} />,
      title: 'Website Design & Development',
      desc: 'High-performance, pixel-perfect web solutions.',
      num: '04',
      color: 'indigo',
      deliverables: ['UI/UX Design', 'Custom Web Development', 'E-commerce Solutions', 'Responsive Design']
    },
    {
      icon: <Video className="text-purple-500" size={24} />,
      title: 'Video Editing & Post-Production',
      desc: 'Cinematic editing, color grading, and VFX.',
      num: '05',
      color: 'purple',
      deliverables: ['Cinematic Editing', 'Color Grading', 'Visual Effects (VFX)', 'Sound Design']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="service-header text-center mb-24">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white leading-[0.9]">
            Services We <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Master</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium text-lg">
            Every pixel we push, every polygon we sculpt — crafted with intent, driven by excellence.
          </p>
        </div>

        {/* Staggered Grid: 3 on top, 2 on bottom centered */}
        <div className="services-grid flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card group relative p-10 rounded-[40px] bg-[#111111] border border-white/5 hover:border-indigo-500/30 transition-all duration-700 flex flex-col justify-between w-full md:w-[calc(33.333%-22px)] lg:w-[calc(33.333%-22px)] min-h-[440px] hover:-translate-y-2",
                index >= 3 && "md:w-[calc(33.333%-22px)]"
              )}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-indigo-500/[0.05] to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_20px_80px_rgba(79,70,229,0.1)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className={cn(
                    "service-icon w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-700 shadow-inner",
                    service.color === 'indigo' ? "bg-indigo-500/10 border border-indigo-500/20 shadow-indigo-500/20" : 
                    service.color === 'purple' ? "bg-purple-500/10 border border-purple-500/20 shadow-purple-500/20" :
                    "bg-blue-500/10 border border-blue-500/20 shadow-blue-500/20"
                  )}>
                    {service.icon}
                  </div>
                  <span className="text-sm font-black text-white/5 group-hover:text-white/20 transition-colors tracking-widest">{service.num}</span>
                </div>
                <h3 className="text-3xl font-black mb-6 text-white group-hover:text-indigo-400 transition-colors leading-tight">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base font-medium opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
              </div>
              
              <button 
                onClick={() => onExplore(service)}
                className="relative z-10 inline-flex items-center gap-3 text-xs font-bold text-indigo-400 group-hover:text-white transition-all mt-10 uppercase tracking-[0.2em]"
              >
                Explore <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
