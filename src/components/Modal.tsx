import { useState } from "react";
import { X, CheckCircle2, Send } from 'lucide-react';

const ModalWindow = ({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-lg" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#F9F6F4]/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose} />
      <div className={`relative w-full ${maxWidth} max-h-[90vh] overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 flex flex-col`}>
        <div className="p-6 md:p-8 pb-4 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter leading-none">{title}</h3>
            {subtitle && <p className="text-slate-500 text-xs font-medium mt-1.5">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="rounded-full p-2.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"><X size={20} /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 md:px-8 pb-8 scrollbar-hide">{children}</div>
      </div>
    </div>
  );
};

export default ModalWindow;
