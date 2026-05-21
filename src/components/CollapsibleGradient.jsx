import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CollapsibleGradient = ({ 
  children, 
  maxHeight = "300px", 
  buttonTextClosed = "Déployer", 
  buttonTextOpen = "Réduire",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('auto');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [children]);

  return (
    <div className={`relative ${className}`}>
      <div 
        className="overflow-hidden transition-all duration-700 ease-in-out relative"
        style={{ 
          maxHeight: isOpen ? contentHeight : maxHeight,
          opacity: isOpen ? 1 : 0.9
        }}
      >
        <div ref={contentRef} className="pb-16">
          {children}
        </div>
        
        {/* Dégradé au fond quand c'est fermé */}
        {!isOpen && (
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-kiri-950 via-kiri-950/80 to-transparent pointer-events-none z-10" />
        )}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 flex justify-center pb-4 pt-8 z-20 ${!isOpen ? 'bg-gradient-to-t from-kiri-950 via-kiri-950/50 to-transparent' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-6 py-2.5 bg-slate-900/80 hover:bg-cyan-950/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-md group"
        >
          {isOpen ? buttonTextOpen : buttonTextClosed}
          {isOpen ? (
            <ChevronUp size={16} className="text-cyan-500 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown size={16} className="text-cyan-500 group-hover:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CollapsibleGradient;
