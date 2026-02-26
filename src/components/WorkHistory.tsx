import { useState } from 'react'
import { X, Calendar, MapPin } from 'lucide-react';

const WorkHistory = () => {

  const history = [
    {
      company: "Wishbone Games",
      location: "Cardiff",
      role: "Software Developer",
      period: "Dec 2024 — Jun 2025",
      color: "border-[#95ADB6]",
      details: [
        "Engineered high-performance interactive gaming experiences within a custom game engine.",
        "Focused on front-end delivery, ensuring high-fidelity animations and complex mechanics.",
        "Optimized application logic and asset handling for mobile and low-bandwidth connections."
      ]
    },
    {
      company: "Cardiff University",
      location: "Remote",
      role: "Software Developer (IDS Validation)",
      period: "Jun 2025 — Aug 2025",
      color: "border-[#EF959C]",
      details: [
        "Developed a specialized JS library for Information Delivery Specifications (IDS).",
        "Engineered high-fidelity data models by translating complex XML schemas into logic-driven classes.",
        "Built a custom error-handling system to detect schema violations and ensure data integrity."
      ]
    },
    {
      company: "3Radical",
      location: "Bristol",
      role: "Full Stack Developer",
      period: "Nov 2017 — Dec 2024",
      color: "border-[#8DA1B9]",
      details: [
        "Developed and maintained complex web applications for audience engagement campaigns.",
        "Built robust, scalable back-end systems using cloud services to enhance performance.",
        "Designed user-friendly interfaces enabling clients to execute campaigns effortlessly."
      ]
    },
    {
      company: "Freelance",
      location: "Cardiff",
      role: "Full Stack Developer",
      period: "Jul 2017 — Nov 2017",
      color: "border-[#CBB3BF]",
      details: ["Implemented web applications and websites using modern front-end tools and CMS platforms."]
    },
    {
      company: "Reachal",
      location: "Cardiff",
      role: "Full Stack Developer",
      period: "Oct 2015 — Sept 2017",
      color: "border-[#DBC7BE]",
      details: [
        "Took ownership of client-facing web application development and maintenance.",
        "Built performant interfaces and contributed to backend and database management."
      ]
    },
    {
      company: "Volante",
      location: "Bridgend",
      role: "Web Developer",
      period: "2011 — 2015",
      color: "border-slate-200",
      details: ["Developed company websites, user platforms, and admin panels with a focus on UX."]
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto px-8 md:px-12 pb-12 scrollbar-hide">
      <div className="space-y-10 relative">
        {/* Timeline Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-100" />

        {history.map((job, idx) => (
          <div key={idx} className="relative pl-10 group">
            {/* Timeline Dot */}
            <div className={`absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-white bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center z-10 transition-transform group-hover:scale-125`}>
              <div className={`h-2 w-2 rounded-full ${job.color.replace('border-', 'bg-')}`} />
            </div>

            <div className={`p-6 rounded-3xl border-l-4 ${job.color} bg-slate-50/50 hover:bg-white transition-colors duration-300`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg font-black text-slate-900 leading-none">{job.company}</h4>
                  <p className="text-sm font-bold text-slate-500 mt-1">{job.role}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Calendar size={12} /> {job.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <MapPin size={12} /> {job.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {job.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                    <span className="text-slate-300 mt-1.5 shrink-0">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
