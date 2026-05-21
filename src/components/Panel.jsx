import React from 'react';

const Panel = ({ children, className = "", hover = true, variant = "default" }) => {
  const variants = {
    default: "",
    danger: "border-red-900/40 shadow-[0_0_20px_rgba(220,38,38,0.05)]",
    info: "border-cyan-900/40 shadow-[0_0_20px_rgba(34,211,238,0.05)]",
    warning: "border-orange-900/40 shadow-[0_0_20px_rgba(249,115,22,0.05)]",
  };

  return (
    <div className={`glass-panel rounded-2xl p-8 lg:p-10 transition-all duration-500 ${variants[variant]} ${className} ${hover ? 'group hover:shadow-2xl' : ''}`}>
      {/* Coins Technologiques (HUD) */}
      <div className="tech-corner tc-tl"></div>
      <div className="tech-corner tc-tr"></div>
      <div className="tech-corner tc-bl"></div>
      <div className="tech-corner tc-br"></div>
      
      {/* Effet Scanline */}
      <div className="scanline rounded-2xl"></div>
      {hover && <div className="scanline-animated hidden group-hover:block rounded-2xl"></div>}
      
      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Panel;
