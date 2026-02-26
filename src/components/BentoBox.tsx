const BentoBox = ({ children, className = "", title, icon: Icon, bgColor = "bg-white", onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-black/5 p-8 shadow-sm transition-all duration-500 
        ${onClick ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-2' : 'hover:shadow-md'} 
        ${bgColor} ${className}`}
    >
      {(Icon || title) && (
        <div className="flex items-center gap-4 mb-6">
          {Icon && (
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/50 text-slate-700 shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md shrink-0">
              <Icon size={22} />
            </div>
          )}
          {title && <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-tight">{title}</h3>}
        </div>
      )}

      {children}
    </div>
  );
};

export default BentoBox;
