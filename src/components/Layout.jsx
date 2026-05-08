import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Droplet, Scale, BookOpen, Syringe, Skull, FileArchive } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const tabs = [
    { path: '/', label: 'I. Cadre Légal', icon: Scale },
    { path: '/science-anatomie', label: 'II. Science & Anatomie', icon: BookOpen },
    { path: '/medecine-intervention', label: 'III. Procédures', icon: Syringe },
    { path: '/chirurgie-chakra', label: 'IV. Chirurgie Chakra', icon: Skull },
    { path: '/medecine-archive', label: 'V. Archive Médicale', icon: FileArchive },
  ];

  // Scroll progress tracking
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = mainEl;
      const progress = scrollHeight - clientHeight > 0
        ? (scrollTop / (scrollHeight - clientHeight)) * 100
        : 0;
      setScrollProgress(progress);
    };
    mainEl.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--kiri-dark)] text-[var(--text-primary)] font-sans selection:bg-cyan-900 selection:text-white flex overflow-hidden relative">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Brume de fond animée */}
      <div className="kiri-mist-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="mist-particle w-80 h-80"
            style={{
              left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * -25}s`, animationDuration: `${25 + Math.random() * 25}s`
            }}
          />
        ))}
      </div>

      {/* ═══ Sidebar Desktop ═══ */}
      <aside className="w-80 bg-slate-950/85 border-r border-slate-800/60 flex-col z-20 backdrop-blur-2xl shadow-2xl hidden md:flex shrink-0">
        {/* Logo Header */}
        <div className="p-8 border-b border-slate-800/60 flex items-center gap-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Droplet className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" size={40} strokeWidth={1.5} />
          <div>
            <h1 className="font-serif text-2xl font-bold text-white tracking-widest text-glow-cyan">KIRIGAKURE</h1>
            <p className="text-xs font-mono text-cyan-400/80 tracking-[0.3em] mt-1.5">SECTEUR MÉDICAL</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <p className="text-xs font-mono text-slate-500 mb-6 px-3 tracking-[0.2em] uppercase">Manuscrit Intégral</p>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.path;
            
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-300 text-[0.95rem] font-medium text-left outline-none group relative overflow-hidden
                  ${isActive 
                    ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/50 shadow-[0_0_20px_rgba(34,211,238,0.12)]' 
                    : 'text-slate-400 border border-transparent hover:bg-slate-900/60 hover:text-slate-200'}`}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] rounded-r"></div>}
                <Icon size={20} className={`${isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'} transition-colors shrink-0`} />
                <span className="tracking-wide">{tab.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Sidebar */}
        <div className="p-5 border-t border-slate-800/60 text-xs text-red-500/70 font-mono text-center tracking-widest leading-relaxed bg-red-950/10">
          DOSSIER CLASSIFIÉ.<br/>CONSULTATION SURVEILLÉE.
        </div>
      </aside>

      {/* ═══ Main Content Area ═══ */}
      <main ref={mainRef} className="flex-1 flex flex-col h-screen overflow-y-auto z-10 scroll-smooth relative">
        {/* Header Mobile */}
        <header className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/60 p-4 flex items-center justify-between sticky top-0 z-30 shadow-xl">
          <div className="flex items-center gap-3">
            <Droplet className="text-cyan-400" size={28} />
            <div>
              <span className="font-serif font-bold text-white tracking-widest text-glow-cyan block leading-none text-lg">KIRI MED</span>
            </div>
          </div>
          <select 
            className="bg-slate-900 border border-cyan-900/50 text-cyan-300 text-sm p-2.5 rounded-lg outline-none font-mono focus:border-cyan-400 cursor-pointer"
            value={location.pathname}
            onChange={(e) => navigate(e.target.value)}
          >
            {tabs.map(tab => <option key={tab.path} value={tab.path}>{tab.label}</option>)}
          </select>
        </header>

        {/* Content Wrapper */}
        <div className="flex-1 p-6 md:p-10 lg:p-16 max-w-6xl mx-auto w-full pb-24">
          <div className="relative z-10 animate-fade-in-up">
            <Outlet />
          </div>
        </div>

        {/* Footer Global */}
        <footer className="border-t border-slate-800/40 py-6 px-8 text-center z-10">
          <p className="text-xs font-mono text-slate-600 tracking-widest">
            ARKAÏA — SECTION MÉDICALE — KIRIGAKURE NO SATO
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
