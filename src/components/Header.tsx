import { Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="mb-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-[#8DA1B9] shadow-lg shadow-[#8DA1B9]/20 flex items-center justify-center text-white">
          <Terminal size={20} />
        </div>
        <span className="text-2xl font-black tracking-tight text-slate-900">BRIAN HODGE<span className="text-brand-pink">.</span></span>
      </div>
    </header>
  );
};

export default Header;
