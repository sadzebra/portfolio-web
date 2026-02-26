"use client"
import { useState } from 'react';
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ImageIcon,
  Play
} from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => {
  const galleryItems = project.gallery || [{ type: 'icon', icon: project.icon }];
  const [activeMedia, setActiveMedia] = useState(galleryItems[0]);
  return (
    <div className="min-h-screen bg-[#F9F6F4] p-4 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button
        onClick={onBack}
        className="mb-12 flex items-center gap-2 font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className={`aspect-video w-full rounded-[3rem] ${project.color} flex items-center justify-center p-12 shadow-2xl mb-4`}>
            {activeMedia.type === 'image' ? (
              <img
                src={activeMedia.url}
                alt="Project screenshot"
                className="w-full h-full object-cover"
              />
            ) : (
              <project.icon size={80} className="text-white drop-shadow-lg" />
            )}
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMedia(item)}
                className={`relative h-20 aspect-video rounded-xl overflow-hidden shrink-0 border-2 transition-all 
                ${activeMedia === item ? 'border-slate-900 scale-105 shadow-md' : 'border-transparent hover:border-slate-300'}`}
              >
                {item.type === 'video' ? (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white">
                    <Play size={20} fill="currentColor" />
                  </div>
                ) : item.type === 'image' ? (
                  <img src={item.url} className="w-full h-full object-cover" alt="" />
                ) : (
                  <div className={`w-full h-full ${project.color} flex items-center justify-center text-white/80`}>
                    <ImageIcon size={20} />
                  </div>
                )}
                {activeMedia === item && (
                  <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
                )}
              </button>
            ))}
          </div>

        </div>


        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#EF959C] mb-4">Weekend Project</span>
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">{project.title}</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="mb-10">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white rounded-xl border border-black/5 text-sm font-bold text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a href={project.live} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 active:scale-95">
              Launch Project <ExternalLink size={18} />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="px-6 flex items-center justify-center bg-white border-2 border-slate-200 text-slate-600 rounded-2xl hover:border-slate-900 hover:text-slate-900 transition-all active:scale-95 shadow-sm"
            >
              <Github size={20} />
            </a>          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
