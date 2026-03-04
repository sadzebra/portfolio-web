"use client"
import { useState, useEffect } from 'react';
import BentoBox from './BentoBox';
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';
import WorkHistory from './WorkHistory';
import {
  GitMerge,
  Linkedin,
  ExternalLink,
  Mail,
  Terminal,
  Sparkles,
  ArrowUpRight,
  Zap,
  Coffee,
  Film,
  Trophy,
  Layers,
  Cpu,
  FileDown,
  Code2,
  Binary,
  Box,
  Rocket,
  ShoppingBag,
  Globe
} from 'lucide-react';
import ModalWindow from './Modal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeStackSlide, setActiveStackSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const weekendProjects = PORTFOLIO_DATA.weekendProjects;
  const techStacks = PORTFOLIO_DATA.techStacks;
  const experienceHistory = PORTFOLIO_DATA.careerTimeline;
  const callToAction = PORTFOLIO_DATA.callToActions;
  const strategicValue = PORTFOLIO_DATA.strategicValue;

  useEffect(() => {
    if (PORTFOLIO_DATA.profile.seo) {
      document.title = PORTFOLIO_DATA.profile.seo.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', PORTFOLIO_DATA.profile.seo.description);
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    // Auto-cycle Tech Stack
    const timer = setInterval(() => {
      setActiveStackSlide((prev) => (prev + 1) % techStacks.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [techStacks.length]);

  if (!mounted) return null;

  if (activeProject) {
    return <ProjectDetail project={activeProject} onBack={() => setActiveProject(null)} />;
  }

  // Palette Mapping:
  // #8DA1B9 - brand-slate
  // #95ADB6 - brand-teal
  // #CBB3BF - brand-mauve
  // #DBC7BE - brand-beige
  // #EF959C - brand-pink

  return (
    <div className="min-h-screen bg-[#F9F6F4] p-4 text-slate-700 selection:bg-bran-pink/30 md:p-8 lg:p-12 font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-brand-slate/10 blur-[120px]" />
        <div className="absolute -right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-bran-pink/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl relative">
        <header className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#8DA1B9] shadow-lg shadow-[#8DA1B9]/20 flex items-center justify-center text-white">
              <Terminal size={20} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">BRIAN HODGE<span className="text-brand-pink">.</span></span>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-flow-row">
          <BentoBox
            bgColor="bg-brand-beige"
            className="col-span-1 row-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 lg:row-span-2 flex flex-col justify-between border-none"
          >
            <div>
              <div className="relative mb-4 inline-block">
                <div className="h-24 w-24 rounded-[2rem] bg-slate-900 shadow-xl ring-4 ring-white flex items-center justify-center text-white text-3xl font-black">BH</div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-[#DBC7BE] bg-green-500" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Open to Opportunities</span>
              </div>
              {/* <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Open to Opportunities</span> */}
              <h1 className="text-5xl font-black text-slate-900 md:text-6xl leading-tight tracking-tighter">
                Building products <br />
                <span className="text-white italic">From Concept To Scale</span>
              </h1>
              <p className="mt-6 text-lg font-medium text-slate-700/80 max-w-md">
                I help companies turn ambitious ideas into production-ready reality. By taking full ownership of the stack, I ensure your product is fast, scalable, and built on a foundation that lasts.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <button
                onClick={() => setActiveModal('contact')}
                className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95 flex items-center gap-2">
                <Mail size={20} />Let's Talk
              </button>
              <div className="flex gap-2">
                <a href="https://github.com/sadzebra" target="_blank" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"><GitMerge size={20} /></a>
                <a href="https://www.linkedin.com/in/brian-hodge-bh/" target="_blank" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"><Linkedin size={20} /></a>
                <a href="#" download className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-slate-700" title="Download CV">
                  <FileDown size={20} />
                </a>
              </div>
            </div>
          </BentoBox>

          <BentoBox title="Technical Toolkit" icon={Code2} bgColor="bg-[#95ADB6]" className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-1 border-none min-h-[240px]">
            <div className="relative h-full flex flex-col overflow-hidden">
              <div className="flex transition-transform duration-700 ease-in-out flex-1" style={{ transform: `translateX(-${activeStackSlide * 100}%)` }}>
                {techStacks.map((stack, index) => (
                  <div key={index} className="w-full shrink-0">
                    <div className="mb-4"><span className="text-[10px] font-black uppercase tracking-widest text-slate-800/60 bg-white/20 px-2 py-0.5 rounded-md">{stack.category}</span></div>
                    <div className="flex flex-wrap gap-2 pr-4">{stack.skills.map((tech) => (<span key={tech} className="rounded-xl bg-white/30 px-3 py-1.5 text-xs font-bold text-slate-800 ring-1 ring-white/20">{tech}</span>))}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-auto pt-6">
                {techStacks.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveStackSlide(idx)} className={`h-1.5 rounded-full transition-all duration-500 ${activeStackSlide === idx ? 'w-8 bg-slate-800' : 'w-1.5 bg-slate-800/20'}`} />
                ))}
              </div>
            </div>
          </BentoBox>

          <BentoBox
            bgColor="bg-brand-pink"
            onClick={() => setActiveModal('history')}
            className="col-span-1 lg:col-span-1 flex flex-col items-center justify-center border-none text-white text-center"
          >
            <Zap size={32} className="mb-4 animate-pulse" />
            <span className="text-4xl font-black text-slate-800">15+</span>
            <span className="text-xs font-black uppercase tracking-widest leading-tight">Years Of experiences</span>
            <ArrowUpRight size={14} className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity" />
          </BentoBox>

          <BentoBox
            title="Expertise & Value"
            icon={Trophy}
            className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 bg-white/80"          >
            <div className="absolute top-0 right-0 -m-8 h-32 w-32 rounded-full bg-[#EF959C]/5 blur-3xl" />
            <ul className="grid grid-cols-1 gap-4 mt-2">
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-black/5 hover:bg-white transition-all hover:shadow-sm">
                <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-xl bg-[#EF959C]/10 text-[#EF959C] shrink-0">
                  <Layers size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-base">Architecture Design</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Designing scalable frontend architectures and reusable component systems that accelerate team velocity.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-black/5 hover:bg-white transition-all hover:shadow-sm">
                <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-xl bg-[#8DA1B9]/10 text-[#8DA1B9] shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-base">Systems Engineering</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Developing robust backends with a focus on data integrity, high availability, and API performance.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-black/5 hover:bg-white transition-all hover:shadow-sm">
                <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-xl bg-[#95ADB6]/10 text-[#95ADB6] shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-base">Technical Strategy</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Bridging the gap between business requirements and technical implementation through rapid prototyping.</p>
                </div>
              </li>
            </ul>
          </BentoBox>

          <div className="col-span-1 sm:col-span-2 lg:col-span-6 flex items-center justify-between px-4 py-8">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[#EF959C]" /> Experimental Projects
            </h2>
            <span className="h-px flex-1 bg-black/5 mx-6"></span>
          </div>

          <BentoBox
            bgColor={weekendProjects[1].color}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 border-none flex flex-col items-center justify-center text-center p-8 min-h-[220px]"
            onClick={() => setActiveProject(weekendProjects[1])}
          >
            <Film size={32} className="text-white mb-4 transition-transform group-hover:scale-110 duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">{weekendProjects[1].title}</span>
            <ArrowUpRight size={14} className="absolute top-6 right-6 text-white/40 group-hover:text-white transition-colors" />
          </BentoBox>

          <BentoBox
            bgColor={weekendProjects[2].color}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 border-none flex flex-col items-center justify-center text-center p-8 min-h-[220px]"
            onClick={() => setActiveProject(weekendProjects[2])}
          >
            <Coffee size={32} className="text-white mb-4 transition-transform group-hover:scale-110 duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">{weekendProjects[2].title}</span>
            <ArrowUpRight size={14} className="absolute top-6 right-6 text-white/40 group-hover:text-white transition-colors" />
          </BentoBox>

          <BentoBox
            bgColor={weekendProjects[0].color}
            className="col-span-1 row-span-2 sm:col-span-2 lg:col-span-4 lg:row-span-2 p-0 flex flex-col border-none text-white cursor-pointer"
            onClick={() => setActiveProject(weekendProjects[0])}
          >
            <div className="p-10">
              <div className="flex items-center justify-between mb-4"><span className="text-xs font-black uppercase tracking-[0.2em] text-white/60">Featured Lab</span><ExternalLink size={20} className="text-white/60" /></div>
              <h4 className="text-4xl font-black mb-4 tracking-tighter leading-none">{PORTFOLIO_DATA.weekendProjects[0].title}</h4>
              <p className="text-white/80 text-lg font-medium max-w-sm">{PORTFOLIO_DATA.weekendProjects[0].shortDescription}</p>
            </div>

            {/* META MOCKUP: Portfolio-style branding blocks */}
            <div className="mt-auto px-10">
              <div className="h-56 w-full rounded-t-[3rem] bg-white/10 backdrop-blur-md border-x border-t border-white/20 p-6 flex flex-col gap-3">
                <div className="flex gap-3 h-1/2">
                  <div className="w-2/3 bg-[#DBC7BE]/30 rounded-2xl border border-white/10" />
                  <div className="w-1/3 flex flex-col gap-3">
                    <div className="h-full bg-[#95ADB6]/30 rounded-xl border border-white/10" />
                    <div className="h-full bg-[#EF959C]/30 rounded-xl border border-white/10" />
                  </div>
                </div>
                <div className="flex gap-3 h-1/2">
                  <div className="w-1/3 bg-[#8DA1B9]/30 rounded-xl border border-white/10" />
                  <div className="w-2/3 bg-white/10 rounded-2xl border border-white/10" />
                </div>
              </div>
            </div>
          </BentoBox>

          <BentoBox
            bgColor={weekendProjects[3].color}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 border-none flex flex-col items-center justify-center text-center p-8 min-h-[220px]"
            onClick={() => setActiveProject(weekendProjects[3])}
          >
            <Binary size={32} className="text-white mb-4 transition-transform group-hover:scale-110 duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">{weekendProjects[3].title}</span>
            <ArrowUpRight size={14} className="absolute top-6 right-6 text-white/40 group-hover:text-white transition-colors" />
          </BentoBox>

          <BentoBox
            bgColor={weekendProjects[4].color}
            className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 border-none flex flex-col items-center justify-center text-center p-8 min-h-[220px]"
            onClick={() => setActiveProject(weekendProjects[4])}
          >
            <Box size={32} className="text-white mb-4 transition-transform group-hover:scale-110 duration-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">{weekendProjects[4].title}</span>
            <ArrowUpRight size={14} className="absolute top-6 right-6 text-white/40 group-hover:text-white transition-colors" />
          </BentoBox>

          <BentoBox bgColor={callToAction[0].bgColor} className="col-span-1 sm:col-span-2 lg:col-span-6 border-none text-white flex flex-col md:flex-row items-center justify-between gap-8 p-12 my-4">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/60">{callToAction[0].subtitle}</span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter">{callToAction[0].title}</h3>
            </div>
            <button onClick={() => setActiveModal('contact')} className="group whitespace-nowrap rounded-2xl bg-white px-8 py-5 font-black text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:shadow-2xl active:scale-95 flex items-center gap-3">
              {callToAction[0].buttonText} <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </BentoBox>

          <div className="col-span-1 sm:col-span-2 lg:col-span-6 flex items-center justify-between px-4 py-8">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[#8DA1B9]" /> Client Projects
            </h2>
            <span className="h-px flex-1 bg-black/5 mx-6"></span>
          </div>

          {PORTFOLIO_DATA.caseStudies?.[0] && (
            <BentoBox bgColor="bg-[#8DA1B9]" className="col-span-1 row-span-2 sm:col-span-2 lg:col-span-4 lg:row-span-2 p-0 flex flex-col border-none text-white cursor-pointer" onClick={() => openProjectModal(PORTFOLIO_DATA.caseStudies[0])}>
              <div className="p-10">
                <div className="flex items-center justify-between mb-4"><span className="text-xs font-black uppercase tracking-[0.2em] text-white/60">Featured Experience</span><ExternalLink size={20} className="text-white/60" /></div>
                <h4 className="text-4xl font-black mb-4 tracking-tighter leading-none">{PORTFOLIO_DATA.caseStudies[0].title}</h4>
                <p className="text-white/80 text-lg font-medium max-w-sm">Driving conversion through headless architecture and custom migration.</p>
              </div>
              <div className="mt-auto px-10"><div className="h-56 w-full rounded-t-[3rem] bg-white/20 backdrop-blur-md border-x border-t border-white/30 p-8 flex flex-col justify-end"><div className="h-3 w-1/2 bg-white/40 rounded-full mb-3" /><div className="h-3 w-1/3 bg-white/40 rounded-full" /></div></div>
            </BentoBox>
          )}

          {PORTFOLIO_DATA.caseStudies?.[1] && (
            <BentoBox bgColor="bg-[#EF959C]" className="col-span-1 sm:col-span-2 lg:col-span-2 border-none flex flex-col justify-between text-white" onClick={() => openProjectModal(PORTFOLIO_DATA.caseStudies[1])}>
              <div>
                <ShoppingBag size={24} className="mb-4" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Client Strategy</span>
                <h5 className="text-xl font-black leading-tight mt-1">Along Came Loulou</h5>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-bold py-1 px-3 bg-white/20 rounded-full">WooCommerce</span>
                <ArrowUpRight size={18} />
              </div>
            </BentoBox>
          )}

          {PORTFOLIO_DATA.caseStudies?.[2] && (
            <BentoBox bgColor="bg-white" className="col-span-1 sm:col-span-2 lg:col-span-2 border-none flex flex-col justify-between" onClick={() => openProjectModal(PORTFOLIO_DATA.caseStudies[2])}>
              <div>
                <Globe size={24} className="mb-4 text-[#95ADB6]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Consultancy</span>
                <h5 className="text-xl font-black leading-tight mt-1">Freelance Hub</h5>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-bold py-1 px-3 bg-slate-100 rounded-full">Coming Soon</span>
                <ArrowUpRight size={18} className="text-slate-300" />
              </div>
            </BentoBox>
          )}

          <div className="col-span-1 sm:col-span-2 lg:col-span-6 mt-12 mb-8">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-4"><span className="h-2 w-2 rounded-full bg-slate-800" /> Strategic Technical Impact</h2>
          </div>

          {strategicValue?.map((item, idx) => {
            const StrategicIcon = item.icon;
            return (
              <BentoBox key={idx} className="col-span-1 sm:col-span-2 lg:col-span-2 border-none bg-white">
                <div className="flex gap-6 items-center">
                  <div className={`h-14 w-14 rounded-[1.25rem] ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                    {StrategicIcon && <StrategicIcon size={28} />}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-slate-900 leading-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </BentoBox>);
          })}

          <BentoBox bgColor={callToAction[1].bgColor} className="col-span-1 sm:col-span-2 lg:col-span-6 border-none text-white flex flex-col md:flex-row items-center justify-between gap-8 p-12 my-4">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/60">{callToAction[1].subtitle}</span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter">{callToAction[1].title}</h3>
            </div>
            <button onClick={() => setActiveModal('contact')} className="group whitespace-nowrap rounded-2xl bg-white px-8 py-5 font-black text-slate-900 transition-all hover:bg-[#EF959C] hover:text-white hover:shadow-2xl active:scale-95 flex items-center gap-3">
              {callToAction[1].buttonText} <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </BentoBox>

        </div>

        <footer className="mt-20 border-t border-black/5 pt-10 flex flex-col md:flex-row items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <p>© 2024 Brian Hodge Design Studio. All Rights Reserved.</p>
        </footer>
      </div>
      <ModalWindow
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal === 'contact' ? "Let's build something great." : "Career Timeline"}
        subtitle={activeModal === 'contact' ? "Tell me about your project or opportunity." : "15+ years of engineering impact."}
        maxWidth={activeModal === 'history' ? "max-w-4xl" : "max-w-lg"}
      >
        {activeModal === 'contact' && <ContactForm onSuccess={() => setActiveModal(null)} />}
        {activeModal === 'history' && <WorkHistory />}
      </ModalWindow>
    </div >
  );
}
