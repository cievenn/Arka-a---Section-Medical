import React from 'react';

const SectionHeader = ({ icon: Icon, title, subtitle, colorClass = "text-cyan-400 text-glow-cyan" }) => (
  <div className="relative pb-8 mb-14 mt-6">
    {/* Titre principal */}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif flex items-center gap-5 ${colorClass}`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full group-hover:bg-cyan-400/40 transition-colors duration-500"></div>
        <div className="p-4 bg-kiri-900/80 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-xl shadow-cyan-900/20 relative z-10">
          {Icon && <Icon size={40} className="transform group-hover:scale-110 transition-transform duration-500" />}
        </div>
      </div>
      <span className="tracking-wide leading-tight">{title}</span>
    </h2>

    {/* Sous-titre */}
    <p className="text-slate-400/80 text-xs md:text-sm mt-5 font-mono uppercase tracking-[0.3em] pl-[84px] md:pl-[92px] max-w-3xl leading-relaxed">
      {subtitle}
    </p>

    {/* Barre décorative animée */}
    <div className="absolute bottom-0 left-0 right-0 h-px">
      <div className="absolute left-0 w-64 h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-slate-700/80 via-slate-700/30 to-transparent"></div>
    </div>

    {/* Dot lumineux au bout de la barre */}
    <div className="absolute bottom-[-4px] left-64 w-[10px] h-[10px] rounded-full bg-cyan-300 animate-glow-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]"></div>
  </div>
);

export default SectionHeader;
