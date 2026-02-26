"use client"
import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

const ContactModal = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onSuccess();
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in slide-in-from-bottom-4">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#95ADB6]/20 text-[#95ADB6]">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="mb-2 text-3xl font-black text-slate-900">Message Received!</h3>
        <p className="text-slate-600 font-medium">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
          <input
            required
            type="text"
            className="w-full rounded-2xl border border-black/5 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#EF959C]/50 focus:ring-4 focus:ring-[#EF959C]/10 transition-all"
            placeholder="Brian"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
          <input
            type="tel"
            className="w-full rounded-2xl border border-black/5 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#8DA1B9]/50 focus:ring-4 focus:ring-[#8DA1B9]/10 transition-all"
            placeholder="07525..."
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
        <input
          required
          type="email"
          className="w-full rounded-2xl border border-black/5 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#95ADB6]/50 focus:ring-4 focus:ring-[#95ADB6]/10 transition-all"
          placeholder="name@company.com"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
        <textarea
          required
          rows={4}
          className="w-full rounded-2xl border border-black/5 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#CBB3BF]/50 focus:ring-4 focus:ring-[#CBB3BF]/10 transition-all resize-none"
          placeholder="I'm looking for a developer to help with..."
        />
      </div>

      <button
        disabled={isSubmitting}
        className="group w-full rounded-[1.5rem] bg-slate-900 py-5 text-sm font-black text-white hover:bg-slate-800 transition-all hover:shadow-xl active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
        )}
      </button>
    </form>
  );
};

export default ContactModal;
