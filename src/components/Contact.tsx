import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-header > *', {
      scrollTrigger: {
        trigger: '.contact-header',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.contact-info > *', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: sectionRef });

  const services = ['Graphic Design', '2D Animation', '3D Animation', 'Web Design & Dev', 'Video Editing'];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 md:px-12 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-10 blur-[150px] bg-gradient-to-br from-primary via-secondary to-blue-500 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="contact-header text-center mb-20">
          <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We'll get back within 24 hours with a plan tailored to your vision.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Info */}
          <div className="contact-info lg:col-span-5 space-y-10">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold">hello@animexstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">+1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-500">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">New York, NY — Remote Worldwide</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Form */}
          <div className="contact-form lg:col-span-7 bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10">
            <form className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-bold text-white uppercase tracking-widest">What service are you interested in?</p>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <label key={service} className="cursor-pointer">
                      <input type="checkbox" className="hidden peer" />
                      <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold peer-checked:bg-primary peer-checked:border-primary transition-all block">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Title / Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Brand Identity Design" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Budget Range</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-dark">Under $500</option>
                  <option className="bg-dark">$500 - $2,000</option>
                  <option className="bg-dark">$2,000 - $5,000</option>
                  <option className="bg-dark">$5,000 - $10,000</option>
                  <option className="bg-dark">$10,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tell us about your project...</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Describe your vision, goals, and any specific requirements..."></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
