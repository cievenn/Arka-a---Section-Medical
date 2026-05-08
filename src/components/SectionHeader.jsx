import React from 'react';

const SectionHeader = ({ icon: Icon, title, subtitle, colorClass = "text-cyan-400 text-glow-cyan" }) => (
  <div className="relative pb-6 mb-10">
    {/* Titre principal */}
    <h2 className={`text-3xl lg:text-4xl font-serif flex items-center gap-4 ${colorClass}`}>
      <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-700/50 shadow-lg shadow-cyan-500/5">
        {Icon && <Icon size={36} />}
      </div>
      <span>{title}</span>
    </h2>

    {/* Sous-titre */}
    <p className="text-slate-400 text-sm mt-4 font-mono uppercase tracking-[0.25em] pl-[68px]">
      {subtitle}
    </p>

    {/* Barre décorative animée */}
    <div className="absolute bottom-0 left-0 right-0 h-px">
      <div className="absolute left-0 w-48 h-px bg-gradient-to-r from-cyan-400 via-cyan-500/50 to-transparent"></div>
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-slate-700/60 via-slate-700/30 to-transparent"></div>
    </div>

    {/* Dot lumineux au bout de la barre */}
    <div className="absolute bottom-[-3px] left-48 w-[6px] h-[6px] rounded-full bg-cyan-400 animate-soft-pulse shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
  </div>
);

export default SectionHeader;
