import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead 3D Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Elena Vance',
    role: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  }
];

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.team-header > *', {
      scrollTrigger: {
        trigger: '.team-header',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'expo.out'
    });
  }, { scope: sectionRef });

  return (
    <section id="team" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="team-header text-center mb-24">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase mb-6">
            The Visionaries
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white leading-[0.9]">
            Meet the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Architects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium text-lg">
            A collective of world-class artists, engineers, and storytellers pushing the boundaries of digital craft.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="team-card group relative">
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-[#111111] border border-white/5 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-black text-white mb-1 group-hover:text-indigo-400 transition-colors">{member.name}</h3>
                <p className="text-indigo-400/60 text-xs font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
