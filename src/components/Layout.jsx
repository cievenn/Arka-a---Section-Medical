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
    <div className="min-h-screen bg-kiri-900 text-slate-100 font-sans selection:bg-cyan-900 selection:text-white flex overflow-hidden relative">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Brume de fond animée */}
      <div className="kiri-mist-container">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="mist-particle w-96 h-96"
            style={{
              left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * -30}s`, animationDuration: `${30 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* ═══ Sidebar Desktop ═══ */}
      <aside className="w-80 bg-kiri-950/85 border-r border-slate-800/60 flex-col z-20 backdrop-blur-3xl shadow-2xl hidden md:flex shrink-0 relative">
        {/* Glow effect on the edge */}
        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-900/50 to-transparent"></div>

        {/* Logo Header */}
        <div className="p-8 border-b border-slate-800/60 flex items-center gap-5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative">
            <Droplet className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" size={42} strokeWidth={1.5} />
            <div className="absolute inset-0 animate-glow-pulse bg-cyan-400/20 rounded-full blur-xl"></div>
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-white tracking-[0.15em] text-glow-cyan leading-tight">KIRIGAKURE</h1>
            <p className="text-[0.65rem] font-mono text-cyan-400/70 tracking-[0.4em] mt-1">SECTEUR MÉDICAL</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8 px-6 space-y-3 overflow-y-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 px-3">
            <div className="h-px bg-slate-800 flex-1"></div>
            <p className="text-[0.65rem] font-mono text-slate-500 tracking-[0.25em] uppercase">Manuscrit Intégral</p>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.path;
            
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 text-sm font-medium text-left outline-none group relative overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r from-cyan-950/60 to-transparent text-cyan-300 border border-cyan-800/40 shadow-[0_0_25px_rgba(34,211,238,0.08)]' 
                    : 'text-slate-400 border border-transparent hover:bg-slate-900/50 hover:text-slate-200 hover:border-slate-800'}`}
              >
                {isActive && (
                  <>
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)] rounded-r-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent pointer-events-none"></div>
                  </>
                )}
                <div className={`p-2 rounded-lg transition-colors duration-300 ${isActive ? 'bg-cyan-900/30' : 'bg-transparent group-hover:bg-slate-800/50'}`}>
                  <Icon size={20} className={`${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'} transition-colors shrink-0`} />
                </div>
                <span className="tracking-wide">{tab.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Sidebar */}
        <div className="p-6 border-t border-slate-800/60 bg-gradient-to-t from-red-950/10 to-transparent relative">
          <div className="flex items-center gap-3 justify-center text-[0.65rem] text-red-500/80 font-mono text-center tracking-[0.2em] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            Dossier Classifié.<br/>Consultation Surveillée.
          </div>
        </div>
      </aside>

      {/* ═══ Main Content Area ═══ */}
      <main ref={mainRef} className="flex-1 flex flex-col h-screen overflow-y-auto z-10 scroll-smooth relative">
        {/* Header Mobile */}
        <header className="md:hidden bg-kiri-950/95 backdrop-blur-xl border-b border-slate-800/60 p-4 flex items-center justify-between sticky top-0 z-30 shadow-xl">
          <div className="flex items-center gap-3">
            <Droplet className="text-cyan-400" size={28} />
            <div>
              <span className="font-serif font-bold text-white tracking-widest text-glow-cyan block leading-none text-lg">KIRI MED</span>
            </div>
          </div>
          <select 
            className="bg-slate-900 border border-cyan-900/50 text-cyan-300 text-sm p-2.5 rounded-lg outline-none font-mono focus:border-cyan-400 cursor-pointer shadow-lg"
            value={location.pathname}
            onChange={(e) => navigate(e.target.value)}
          >
            {tabs.map(tab => <option key={tab.path} value={tab.path} className="bg-slate-900">{tab.label}</option>)}
          </select>
        </header>

        {/* Content Wrapper */}
        <div className="flex-1 p-6 md:p-12 lg:p-20 max-w-7xl mx-auto w-full pb-24 relative">
          <div className="relative z-10 animate-fade-in-up">
            <Outlet />
          </div>
        </div>

        {/* Footer Global */}
        <footer className="border-t border-slate-800/40 py-8 px-8 text-center z-10 bg-kiri-950/30 backdrop-blur-sm">
          <p className="text-[0.65rem] font-mono text-slate-500 tracking-[0.3em] uppercase">
            ARKAÏA — SECTION MÉDICALE — KIRIGAKURE NO SATO
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
