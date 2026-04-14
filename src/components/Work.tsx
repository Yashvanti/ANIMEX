import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { cn } from '@/src/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All Work');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = ['All Work', 'Graphic Design', '2D Animation', '3D Animation', 'Web Design', 'Video Editing'];

  const projects = [
    { id: 1, title: 'Neon Brand Identity', category: 'Graphic Design', img: 'https://picsum.photos/seed/work1/800/600' },
    { id: 2, title: 'SaaS Dashboard UI', category: 'Web Design', img: 'https://picsum.photos/seed/work2/800/600' },
    { id: 3, title: 'Abstract 3D Motion', category: '3D Animation', img: 'https://picsum.photos/seed/work3/800/600' },
    { id: 4, title: 'Corporate Promo', category: 'Video Editing', img: 'https://picsum.photos/seed/work4/800/600' },
    { id: 5, title: 'Character Animation', category: '2D Animation', img: 'https://picsum.photos/seed/work5/800/600' },
    { id: 6, title: 'E-commerce Platform', category: 'Web Design', img: 'https://picsum.photos/seed/work6/800/600' },
  ];

  const filteredProjects = activeFilter === 'All Work' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useGSAP(() => {
    gsap.from('.work-header > *', {
      scrollTrigger: {
        trigger: '.work-header',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animate projects on filter change
    gsap.fromTo('.project-card', 
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, [activeFilter]);

  return (
    <section id="work" ref={sectionRef} className="py-24 px-6 md:px-12 bg-white text-dark">
      <div className="max-w-7xl mx-auto">
        <div className="work-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Recent <span className="text-primary">Masterpieces</span>
            </h2>
          </div>
          <button className="px-8 py-4 bg-dark text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
            View All Works
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-bold transition-all duration-300',
                activeFilter === filter 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
