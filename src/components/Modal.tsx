import { useState } from "react";
import { X, CheckCircle2, Send } from 'lucide-react';

const ModalWindow = ({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-lg" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#F9F6F4]/50 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full ${maxWidth} max-h-[90vh] overflow-hidden rounded-[3rem] border border-black/5 bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 flex flex-col`}>
        {/* Header */}
        <div className="p-8 md:p-12 pb-4 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{title}</h3>
            {subtitle && <p className="text-slate-500 font-medium mt-2">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-3 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto px-8 md:px-12 pb-12 scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
