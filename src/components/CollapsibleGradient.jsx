import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CollapsibleGradient = ({ children, maxHeight = "300px", buttonTextOpen = "Réduire", buttonTextClosed = "Déployer pour voir la suite", className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div 
        className="overflow-hidden transition-all duration-700 ease-in-out relative"
        style={{ maxHeight: isExpanded ? '8000px' : maxHeight }}
      >
        {children}
      </div>

      {/* Gradient Overlay & Button */}
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent flex items-end justify-center pb-3 pointer-events-none rounded-b-xl">
          <button 
            onClick={() => setIsExpanded(true)}
            className="pointer-events-auto flex items-center gap-2 bg-slate-800/90 hover:bg-cyan-900/60 border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] group backdrop-blur-sm cursor-pointer"
          >
            {buttonTextClosed} <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Collapse Button */}
      {isExpanded && (
        <div className="mt-6 flex justify-center border-t border-slate-800/50 pt-4">
          <button 
            onClick={() => setIsExpanded(false)}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-base font-semibold transition-colors group px-4 py-2 cursor-pointer"
          >
            <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" /> {buttonTextOpen}
          </button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleGradient;
