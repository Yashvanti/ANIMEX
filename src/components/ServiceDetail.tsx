import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ServiceDetailProps {
  service: {
    title: string;
    desc: string;
    deliverables: string[];
  };
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-12 animate-in fade-in slide-in-from-bottom-10 duration-700 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-xs font-bold text-indigo-400 mb-16 hover:-translate-x-2 transition-all uppercase tracking-[0.2em] group"
        >
          <ArrowLeft size={16} className="group-hover:text-white transition-colors" /> Back to Home
        </button>

        <div className="space-y-20">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold tracking-[0.3em] text-indigo-400 uppercase">
              Service Breakdown
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">{service.title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-medium">{service.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-white/5">
            <div className="space-y-10">
              <h2 className="text-4xl font-black tracking-tight">What We Deliver</h2>
              <ul className="space-y-6">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-gray-400 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <CheckCircle2 className="text-indigo-400" size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-video rounded-[40px] overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/process/1200/800" 
                alt="Process" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Our Process</span>
              </div>
            </div>
          </div>

          <div className="pt-20">
            <h2 className="text-4xl font-black mb-16 tracking-tight">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative aspect-[3/4] rounded-[32px] overflow-hidden bg-[#111111] border border-white/5">
                  <img 
                    src={`https://picsum.photos/seed/project${i}/600/800`} 
                    alt="Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Case Study</span>
                      <h4 className="text-xl font-black text-white">Project Title {i}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
