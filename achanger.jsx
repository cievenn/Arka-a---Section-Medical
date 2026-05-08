import React, { useState } from 'react';
import { 
  Droplet, Activity, Skull, Brain, BookOpen, ShieldAlert, 
  Crosshair, Fingerprint, Syringe, Eye, AlertOctagon, 
  FileText, Scale, Biohazard, TestTube, FileArchive, Layers,
  ChevronRight
} from 'lucide-react';

// --- STYLES GLOBAUX ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Fira+Code:wght@300;400;600&family=Inter:wght@300;400;600&display=swap');

    :root {
      --kiri-cyan: #06b6d4;
      --kiri-cyan-glow: rgba(6, 182, 212, 0.4);
      --kiri-dark: #020617;
      --kiri-panel: rgba(15, 23, 42, 0.65);
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--kiri-dark);
      background-image: 
        linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
      background-size: 30px 30px;
      background-position: center center;
    }

    h1, h2, h3, .font-serif { font-family: 'Cinzel', serif; }
    .font-mono { font-family: 'Fira Code', monospace; }

    /* Animations Brume */
    @keyframes drift {
      0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
      33% { transform: translate(30px, -50px) scale(1.1); opacity: 0.25; }
      66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.15; }
      100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
    }
    
    .kiri-mist-container {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      pointer-events: none; z-index: 0;
      background: radial-gradient(circle at 50% 50%, transparent 0%, #020617 100%);
    }

    .mist-particle {
      position: absolute;
      background: radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%);
      filter: blur(40px);
      border-radius: 50%;
      animation: drift 25s infinite ease-in-out alternate;
    }

    /* Effets Panels & Glassmorphism */
    .glass-panel {
      background: var(--kiri-panel);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(51, 65, 85, 0.5);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.02);
      position: relative;
    }
    
    .glass-panel:hover {
      border-color: rgba(6, 182, 212, 0.3);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6), 0 0 15px var(--kiri-cyan-glow);
    }

    /* Décorations Tech/Ninja */
    .tech-corner {
      position: absolute; width: 8px; height: 8px; border: 2px solid transparent;
      transition: all 0.3s ease;
    }
    .glass-panel:hover .tech-corner { border-color: var(--kiri-cyan); }
    .tc-tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
    .tc-tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
    .tc-bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
    .tc-br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

    /* Texte & Lueur */
    .text-glow-cyan { text-shadow: 0 0 15px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.4); }
    .text-glow-red { text-shadow: 0 0 15px rgba(225, 29, 72, 0.8), 0 0 30px rgba(225, 29, 72, 0.4); }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: rgba(2, 6, 23, 0.8); border-radius: 4px; }
    ::-webkit-scrollbar-thumb { background: rgba(6, 182, 212, 0.4); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(6, 182, 212, 0.8); }
    
    /* Ligne de scan */
    .scanline {
      width: 100%; height: 2px;
      background: linear-gradient(to right, transparent, rgba(6, 182, 212, 0.8), transparent);
      position: absolute; top: 0; left: 0;
      animation: scan 4s ease-in-out infinite;
      pointer-events: none; z-index: 10;
      box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
    }
    @keyframes scan {
      0% { top: 0; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
  `}</style>
);

// --- COMPOSANTS DE DÉCORATION ---
const Panel = ({ children, className = "", hover = true }) => (
  <div className={`glass-panel rounded-sm p-6 transition-all duration-300 ${className} ${hover ? 'group' : ''}`}>
    <div className="tech-corner tc-tl"></div>
    <div className="tech-corner tc-tr"></div>
    <div className="tech-corner tc-bl"></div>
    <div className="tech-corner tc-br"></div>
    {children}
  </div>
);

const SectionHeader = ({ icon: Icon, title, subtitle, colorClass = "text-cyan-400 text-glow-cyan" }) => (
  <div className="border-b border-slate-700/60 pb-5 mb-8 relative">
    <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
    <h2 className={`text-3xl lg:text-4xl font-serif flex items-center gap-4 ${colorClass}`}>
      <div className="p-2 bg-slate-900/50 rounded-sm border border-slate-700/50 shadow-inner">
        <Icon size={36} />
      </div>
      {title}
    </h2>
    <p className="text-slate-400 text-sm mt-3 font-mono uppercase tracking-[0.2em]">{subtitle}</p>
  </div>
);

// --- I. CADRE LÉGAL ET DISCIPLINAIRE ---
const CadreLegal = () => (
  <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
    <SectionHeader icon={Scale} title="I. Cadre Légal et Disciplinaire" subtitle="Section de Contrôle - Le « Côté Police »" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Panel className="flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700/50 pb-3 flex items-center gap-3">
          <ShieldAlert className="text-cyan-500" /> Les 4 Lois Fondamentales
        </h3>
        <ul className="space-y-5 text-sm font-medium flex-1 text-slate-300">
          <li className="flex gap-4 items-start p-3 hover:bg-slate-800/30 rounded transition-colors">
            <span className="text-cyan-500 font-mono text-lg font-bold">01.</span> 
            <p className="leading-relaxed">Le médecin ne doit <strong className="text-cyan-300">jamais</strong> cesser le traitement tant que ses coéquipiers respirent.</p>
          </li>
          <li className="flex gap-4 items-start p-3 hover:bg-slate-800/30 rounded transition-colors">
            <span className="text-cyan-500 font-mono text-lg font-bold">02.</span> 
            <p className="leading-relaxed">Le médecin ne doit <strong className="text-cyan-300">jamais</strong> s'engager sur la ligne de front. S'exposer est une trahison tactique.</p>
          </li>
          <li className="flex gap-4 items-start p-3 hover:bg-slate-800/30 rounded transition-colors">
            <span className="text-cyan-500 font-mono text-lg font-bold">03.</span> 
            <p className="leading-relaxed">Le médecin doit être le <strong className="text-cyan-300">dernier survivant</strong> de son peloton. Sa vie garantit celle des autres.</p>
          </li>
          <li className="flex gap-4 items-start p-3 hover:bg-slate-800/30 rounded transition-colors">
            <span className="text-cyan-500 font-mono text-lg font-bold">04.</span> 
            <p className="leading-relaxed">Seuls ceux maîtrisant le Sceau de la Force d'une Centaine (<em className="text-cyan-200">Byakugō</em>) sont exemptés de ces règles.</p>
          </li>
        </ul>

        <div className="mt-6 p-5 bg-gradient-to-br from-red-950/40 to-black border border-red-900/50 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10"><AlertOctagon size={80}/></div>
          <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2 relative z-10"><AlertOctagon size={18}/> Déontologie & Bioéthique</h4>
          <p className="text-xs text-slate-400 leading-relaxed relative z-10">
            Interdiction absolue des expérimentations humaines abusives ou manipulations génétiques coercitives. <strong className="text-slate-200">Note de Kiri :</strong> La réquisition de prisonniers pour "études anatomiques validées" reste soumise à l'approbation stricte du Mizukage.
          </p>
        </div>
      </Panel>

      <div className="space-y-8">
        <Panel>
          <h3 className="text-xl font-bold text-white mb-5 border-b border-slate-700/50 pb-2">Hiérarchie de la Section</h3>
          <div className="space-y-4 text-sm font-mono">
            <div className="flex justify-between items-center p-2 hover:bg-cyan-900/20 rounded transition-colors"><span className="text-cyan-400 font-bold flex items-center gap-2"><ChevronRight size={14}/> Médecin-Chef (Mizuiryō)</span> <span className="text-xs text-slate-500">Autorité suprême</span></div>
            <div className="flex justify-between items-center p-2 hover:bg-purple-900/20 rounded transition-colors"><span className="text-purple-400 font-bold flex items-center gap-2"><ChevronRight size={14}/> Maître Légiste</span> <span className="text-xs text-slate-500">Morgue & Expertises</span></div>
            <div className="flex justify-between items-center p-2 hover:bg-slate-800/50 rounded transition-colors"><span className="text-slate-300 font-bold flex items-center gap-2"><ChevronRight size={14}/> Iryō-nin Rang A/B</span> <span className="text-xs text-slate-500">Chirurgiens Actifs</span></div>
            <div className="flex justify-between items-center p-2 hover:bg-slate-800/50 rounded transition-colors"><span className="text-slate-500 font-bold flex items-center gap-2"><ChevronRight size={14}/> Apprentis</span> <span className="text-xs text-slate-600">Soutien / Stagiaires</span></div>
          </div>
        </Panel>

        <Panel className="border-red-900/30 bg-gradient-to-b from-slate-900/60 to-red-950/20">
          <h3 className="text-xl font-bold text-red-100 mb-5 border-b border-red-900/30 pb-2">Sanctions Disciplinaires</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col p-3 bg-black/40 border-l-2 border-yellow-500 rounded-r-sm">
              <strong className="text-yellow-500 font-mono mb-1">Niveau 1 : Négligence</strong> 
              <span className="text-slate-400">Suspension de chakra temporaire et TIG.</span>
            </li>
            <li className="flex flex-col p-3 bg-black/40 border-l-2 border-orange-500 rounded-r-sm">
              <strong className="text-orange-500 font-mono mb-1">Niveau 2 : Violation du secret</strong> 
              <span className="text-slate-400">Emprisonnement et marquage d'un sceau de restriction cérébrale.</span>
            </li>
            <li className="flex flex-col p-3 bg-black/40 border-l-2 border-red-600 rounded-r-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-red-600/20 to-transparent"></div>
              <strong className="text-red-400 font-mono mb-1">Niveau 3 : Trahison / Vente ADN</strong> 
              <span className="text-slate-300">Exécution immédiate par la Brigade des Chasseurs de Déserteurs (Oinin).</span>
            </li>
          </ul>
        </Panel>
      </div>
    </div>
  </div>
);

// --- II. ÉDUCATION ET THÉORIE ---
const EducationTheorie = () => (
  <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
    <SectionHeader icon={BookOpen} title="II. Éducation et Théorie" subtitle="Le Cahier de Cours - Savoirs Fondamentaux" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Panel>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 border-b border-slate-700/50 pb-2"><Activity className="text-cyan-500"/> Anatomie & Keirakukei</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          Le corps possède 361 <strong className="text-cyan-400 font-mono text-glow-cyan">Tenketsu</strong> régulant le flux d'énergie. Le chakra médical requiert une compréhension parfaite de l'équilibre binaire :
        </p>
        <ul className="text-sm space-y-3">
          <li className="p-3 bg-slate-800/30 rounded border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
            <strong className="text-cyan-300 block mb-1">Énergie Physique (Yang)</strong>
            <span className="text-slate-400">Issue de l'ATP mitochondrial et de la respiration cellulaire. Véritable moteur de la régénération tissulaire forcée.</span>
          </li>
          <li className="p-3 bg-slate-800/30 rounded border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
            <strong className="text-purple-300 block mb-1">Énergie Spirituelle (Yin)</strong>
            <span className="text-slate-400">Issue du cortex cérébral, de la focalisation intellectuelle et de l'expérience du ninja.</span>
          </li>
        </ul>
      </Panel>

      <Panel>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 border-b border-slate-700/50 pb-2"><Droplet className="text-blue-400"/> Lore Médical de Kiri</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          Étude obligatoire des mutations génétiques spécifiques aux clans de l'Eau pour anticiper les rejets lors des soins d'urgence :
        </p>
        <ul className="text-sm space-y-3 text-slate-400">
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div> <p><strong className="text-blue-300 font-mono">Hōzuki :</strong> Hydratation cellulaire instable. Ne jamais utiliser de chakra Raiton médical, risque de vaporisation.</p></li>
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></div> <p><strong className="text-slate-200 font-mono">Kaguya :</strong> Densité osseuse anormale. Le Bistouri de chakra est inefficace pour trancher leur squelette.</p></li>
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div> <p><strong className="text-cyan-300 font-mono">Environnement :</strong> Le chakra médical gagne 15% de conductivité dans un air saturé de Suiton (ex: Kirigakure no Jutsu).</p></li>
        </ul>
      </Panel>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Panel className="lg:col-span-1 border-green-900/30 bg-gradient-to-b from-slate-900/60 to-green-950/10">
        <h3 className="text-xl font-bold text-green-100 mb-4 flex items-center gap-3 border-b border-green-900/30 pb-2"><Biohazard className="text-green-500"/> Toxicologie</h3>
        <div className="space-y-4 text-sm">
          <div className="p-4 bg-black/40 border border-green-900/30 hover:border-green-500/50 transition-colors rounded">
            <strong className="text-red-400 block font-mono mb-1">Hémotoxines</strong> 
            <span className="text-slate-400">Détruisent la coagulation (hémorragie interne fulgurante ou thrombose massive).</span>
          </div>
          <div className="p-4 bg-black/40 border border-green-900/30 hover:border-green-500/50 transition-colors rounded">
            <strong className="text-purple-400 block font-mono mb-1">Neurotoxines (Hanzō)</strong> 
            <span className="text-slate-400">Bloquent les synapses. Induisent paralysie et asphyxie. Le venin noir détruit la membrane neuronale.</span>
          </div>
          <div className="p-4 bg-black/40 border border-green-900/30 hover:border-green-500/50 transition-colors rounded">
            <strong className="text-green-400 block font-mono mb-1">Cytotoxines</strong> 
            <span className="text-slate-400">Provoquent une nécrose localisée foudroyante qui liquéfie littéralement la chair.</span>
          </div>
        </div>
      </Panel>

      <Panel className="lg:col-span-2 flex flex-col h-[550px]">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 shrink-0 border-b border-slate-700/50 pb-2"><TestTube className="text-yellow-400"/> Botanique Paramédicale Intégrale</h3>
        <div className="overflow-y-auto flex-1 rounded border border-slate-700/50 bg-slate-950/50 relative shadow-inner">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-cyan-400 uppercase bg-slate-900/90 backdrop-blur-md sticky top-0 z-10 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
              <tr>
                <th className="px-5 py-4 tracking-wider">Espèce Végétale</th>
                <th className="px-5 py-4 tracking-wider">Propriétés / Application Clinique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              {[
                { name: "Herbe d'Armure", color: "text-slate-300", desc: "Fortifiant tissulaire préventif." },
                { name: "Herbe au Loup", color: "text-green-400", desc: "Poison neuro/cytotoxique brut." },
                { name: "Racine de Dragon", color: "text-yellow-500", desc: "Base pour antidotes universels." },
                { name: "Aconit (Acônito)", color: "text-purple-400", desc: "Racine toxique, puissants effets analgésiques et sédatifs." },
                { name: "Réglisse (Kanzō)", color: "text-slate-300", desc: "Stabilisateur biochimique pour drogues médicales." },
                { name: "Clou de Girofle", color: "text-orange-300", desc: "Antiseptique et antibactérien naturel." },
                { name: "Cistanche / Épimède", color: "text-slate-300", desc: "Plantes de base pour préparations curatives complexes." },
                { name: "Écorce de Cannelle", color: "text-orange-400", desc: "Vasodilatateur, favorise la circulation du chakra." },
                { name: "Racine de Ginseng", color: "text-red-300", desc: "Boost énergétique majeur, ingrédient des pilules militaires." },
                { name: "Racine de Pivoine", color: "text-pink-300", desc: "Antispasmodique puissant, stoppe les convulsions." },
                { name: "Racine de Rehmannia", color: "text-slate-300", desc: "Régénération du système nerveux et des tissus osseux." },
                { name: "Rac. Saposhnikovia", color: "text-slate-300", desc: "Médecine traditionnelle anti-maladies systémiques." },
                { name: "Rhizome de Curcuma", color: "text-yellow-400", desc: "Anti-inflammatoire et propriétés curatives générales." },
                { name: "Secours Shinobi", color: "text-green-300", desc: "Comestible de terrain. Soutient la survie en milieu hostile." },
                { name: "Herbes Blanches", color: "text-white", desc: "Cicatrisant d'urgence pour lacérations sévères (cf. Zabuza)." },
                { name: "Megusurisō (Œil)", color: "text-cyan-300", desc: "Réduit drastiquement la fatigue liée aux Dōjutsu." },
                { name: "Cochléaire", color: "text-lime-400", desc: "Agent purifiant utilisé dans la synthèse d'antidotes complexes." },
                { name: "Carotte d'Énergie", color: "text-orange-500", desc: "Boost d'endurance massif, additif pour pilules ninja." },
                { name: "Herbe Mandra", color: "text-slate-400", desc: "Plante extrêmement amère aux puissantes vertus sédatives." },
                { name: "Matatabi (Vigne)", color: "text-blue-300", desc: "Tonique systémique, protège le foie et la pompe cardiaque." },
                { name: "Herbe Géante", color: "text-emerald-500", desc: "Applications paramédicales diverses et rustiques de brousse." },
                { name: "Fleur de Jofuku", color: "text-red-500", desc: "Panacée miracle. /!\\ DANGER : Protégée par des illusions léthales." },
                { name: "Feuille Arbre de Vie", color: "text-green-500", desc: "Extrêmement rares. Remède contre les maladies dégénératives." },
                { name: "Fleur Nouvelle Lune", color: "text-indigo-300", desc: "Bases pour médicaments psychiatriques et neurologiques." },
                { name: "Cactus Détoxifiant", color: "text-emerald-400", desc: "Sert à l'extraction d'agents neutralisants pour venins." },
                { name: "Herbes Multicolores", color: "text-yellow-300", desc: "Mélange synergique. Puissant antalgique et cicatrisant." },
                { name: "Herbe Brasier", color: "text-red-400", desc: "Effet thermogénique stimulant. Surcharge physique temporaire." },
                { name: "Orchidée du Désert", color: "text-fuchsia-400", desc: "Distillée en parfum médical, perturbe et dissipe les Genjutsu." },
                { name: "Mousse des Rivières", color: "text-teal-400", desc: "Traitement d'urgence des ulcères et inflammations gastriques." },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-cyan-900/20 transition-colors group">
                  <td className={`px-5 py-3 font-bold ${item.color} group-hover:text-glow-cyan`}>{item.name}</td>
                  <td className="px-5 py-3 text-slate-400 group-hover:text-slate-200">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  </div>
);

// --- III. PROCÉDURES OPÉRATOIRES ---
const ProceduresOperatoires = () => (
  <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
    <SectionHeader icon={Syringe} title="III. Procédures Opératoires" subtitle="Le Savoir-Faire - Protocoles de Terrain" />

    <Panel>
      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3"><Activity className="text-cyan-500"/> Triage de Combat (MASCAL)</h3>
      <p className="text-sm text-slate-400 mb-6 font-mono border-b border-slate-700/50 pb-4">
        Le médecin shinobi doit refuser rationnellement les soins à un camarade jugé au-delà de tout secours pour préserver son chakra.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-red-900/60 p-5 rounded-md hover:border-red-500 transition-all shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:-translate-y-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
          <div className="text-red-500 font-black text-xl mb-3 flex items-center justify-between">ROUGE <span className="text-xs bg-red-900/50 px-2 py-1 rounded text-red-200">IMMÉDIAT</span></div>
          <p className="text-sm text-slate-300 leading-relaxed">Urgence vitale. Survie possible si intervention immédiate (hémorragie massive, pneumothorax).</p>
        </div>
        <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-yellow-700/60 p-5 rounded-md hover:border-yellow-500 transition-all shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
          <div className="text-yellow-500 font-black text-xl mb-3 flex items-center justify-between">JAUNE <span className="text-xs bg-yellow-900/50 px-2 py-1 rounded text-yellow-200">DIFFÉRÉ</span></div>
          <p className="text-sm text-slate-300 leading-relaxed">Grave. Nécessite chirurgie mais peut patienter quelques heures (fractures ouvertes, brûlures).</p>
        </div>
        <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-green-800/60 p-5 rounded-md hover:border-green-500 transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:-translate-y-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
          <div className="text-green-500 font-black text-xl mb-3 flex items-center justify-between">VERT <span className="text-xs bg-green-900/50 px-2 py-1 rounded text-green-200">MINEUR</span></div>
          <p className="text-sm text-slate-300 leading-relaxed">"Blessés marchants". Lésions n'engageant pas le pronostic vital. Autosoins conseillés.</p>
        </div>
        <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-black border border-slate-700 p-5 rounded-md hover:border-slate-400 transition-all hover:-translate-y-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-500"></div>
          <div className="text-slate-400 font-black text-xl mb-3 flex items-center justify-between">NOIR <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">DÉCÉDÉ</span></div>
          <p className="text-sm text-slate-400 leading-relaxed">Lésions cataclysmiques. Survie impossible. Ne gaspiller aucun chakra. Soins palliatifs exclusifs.</p>
        </div>
      </div>
    </Panel>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Panel>
        <h3 className="text-xl font-bold text-white mb-5 border-b border-slate-700/50 pb-2">Arsenal Ninjutsu Médical</h3>
        <ul className="space-y-4 text-sm">
          <li className="p-3 bg-slate-800/20 rounded border-l-4 border-cyan-500 hover:bg-cyan-900/10 transition-colors">
            <strong className="text-cyan-400 text-lg font-serif tracking-wide block mb-1">Paume Mystique (Shōsen Jutsu)</strong>
            <span className="text-slate-400">Accélère la mitose cellulaire. Traite lacérations et hémorragies internes.</span>
          </li>
          <li className="p-3 bg-slate-800/20 rounded border-l-4 border-blue-400 hover:bg-blue-900/10 transition-colors">
            <strong className="text-blue-400 text-lg font-serif tracking-wide block mb-1">Diagnostic (Mukizu Shindan)</strong>
            <span className="text-slate-400">Cartographie interne instantanée via pulsations de chakra dans les Tenketsu.</span>
          </li>
          <li className="p-3 bg-slate-800/20 rounded border-l-4 border-red-500 hover:bg-red-900/10 transition-colors">
            <strong className="text-red-400 text-lg font-serif tracking-wide block mb-1">Garrot de Chakra (Shiketsu)</strong>
            <span className="text-slate-400">Restreint radicalement le flux sanguin/chakra d'un membre pour stopper l'exsanguination.</span>
          </li>
          <li className="p-3 bg-slate-800/20 rounded border-l-4 border-purple-500 hover:bg-purple-900/10 transition-colors">
            <strong className="text-purple-400 text-lg font-serif tracking-wide block mb-1">Bistouri de Chakra (Chakra no Mesu)</strong>
            <span className="text-slate-400">Incision interne sans effraction cutanée. Redoutable en Taijutsu pour sectionner les nerfs.</span>
          </li>
        </ul>
      </Panel>

      <div className="space-y-8">
        <Panel>
          <h3 className="text-xl font-bold text-white mb-3 border-b border-slate-700/50 pb-2">Logistique de Terrain</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Maintien strict des kits : Pilules de rations militaires (<span className="text-cyan-300 font-mono">Hyōrōgan</span>) pour forcer la production d'ATP, poches de sang universel (O-), et antidotes à large spectre synthétisés via Racine de Dragon.
          </p>
        </Panel>
        
        <Panel className="border-red-900/50 bg-gradient-to-br from-slate-900 to-red-950/40 relative overflow-hidden group">
          <Biohazard size={140} className="absolute -right-10 -bottom-10 text-red-900/20 group-hover:text-red-900/40 transition-colors duration-500" />
          <h3 className="text-xl font-bold text-red-400 mb-3 relative z-10 flex items-center gap-2">
            <AlertOctagon size={20}/> Protocole de Quarantaine
          </h3>
          <p className="text-sm text-slate-300 relative z-10 leading-relaxed font-mono">
            Isolement total et immédiat en cas d'infection par virus de chakra (poisons aéroportés) ou parasites physiques (spores / insectes hostiles). <strong className="text-red-300">INCINÉRATION</strong> systématique de l'équipement contaminé.
          </p>
        </Panel>
      </div>
    </div>
  </div>
);

// --- IV. EXPERTISE LÉGISTE ---
const ExpertiseLegiste = () => (
  <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
    <SectionHeader icon={Skull} title="IV. Expertise Légiste et Morgue" subtitle="La Section Noire - Étude des Défunts" colorClass="text-purple-400 text-glow-purple" />
    <style>{`.text-glow-purple { text-shadow: 0 0 15px rgba(168, 85, 247, 0.8); }`}</style>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Panel className="border-purple-900/30">
        <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3 border-b border-purple-900/30 pb-3"><Layers className="text-purple-400"/> Protocole d'Autopsie Standard</h3>
        <ol className="space-y-4 text-sm text-slate-300 font-mono">
          <li className="flex gap-4 p-3 bg-slate-900/50 rounded border border-slate-800">
            <span className="text-purple-500 font-bold text-lg">01.</span>
            <div><strong className="text-slate-100 block mb-1">Examen Externe</strong> Recherche de signatures de chakra ennemies et brûlures d'empreintes de mudras.</div>
          </li>
          <li className="flex gap-4 p-3 bg-slate-900/50 rounded border border-slate-800">
            <span className="text-purple-500 font-bold text-lg">02.</span>
            <div><strong className="text-slate-100 block mb-1">Incision en Y</strong> Ouverture thoracique et abdominale standard pour l'examen des organes vitaux.</div>
          </li>
          <li className="flex gap-4 p-3 bg-slate-900/50 rounded border border-slate-800">
            <span className="text-purple-500 font-bold text-lg">03.</span>
            <div><strong className="text-slate-100 block mb-1">Prélèvement Keirakukei</strong> Extraction sélective des fibres du réseau de chakra pour analyser la puissance résiduelle du tueur.</div>
          </li>
          <li className="flex gap-4 p-3 bg-slate-900/50 rounded border border-slate-800">
            <span className="text-purple-500 font-bold text-lg">04.</span>
            <div><strong className="text-slate-100 block mb-1">Analyse Moléculaire</strong> Détection des dommages invisibles (destructions cellulaires internes type Rasengan ou Jūken).</div>
          </li>
        </ol>
      </Panel>

      <div className="space-y-8">
        <Panel>
          <h3 className="text-xl font-bold text-cyan-400 mb-3 border-b border-slate-700/50 pb-2">Préservation Organique (Fūinjutsu)</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Utilisation experte de sceaux de gel temporel. <strong className="text-white">Objectif :</strong> conserver indéfiniment les membres sectionnés, organes viables ou yeux spéciaux (Dōjutsu) récupérés sur le terrain en vue de greffes militaires futures.
          </p>
        </Panel>

        <Panel className="border-red-900/50 bg-black shadow-[0_0_30px_rgba(220,38,38,0.15)] relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-500 to-red-900"></div>
          <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-red-900/50 pb-2 flex items-center gap-2">
            <Skull size={20}/> Recherche Morbide (Kinjutsu)
          </h3>
          <div className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-red-400 text-lg font-serif block mb-2 text-glow-red">Technique de l'Âme Morte (Shikon no Jutsu)</strong>
            <p className="mb-3">Technique secrète de rang A. Permet de réactiver artificiellement le cœur et la circulation sanguine d'un cadavre récent via des impulsions chirurgicales ultra-précises de chakra.</p>
            <div className="bg-red-950/40 p-3 rounded text-xs font-mono border border-red-900/50 text-red-200">
              USAGE KIRI : Utilisé par la morgue pour étudier in-vivo la diffusion des nouvelles toxines ennemies sur un corps où le pronostic vital n'est plus engagé.
            </div>
          </div>
        </Panel>
      </div>
    </div>
  </div>
);

// --- V. ADMINISTRATION & D.O.S.S ---
const AdministrationDOSS = () => {
  const [dossTab, setDossTab] = useState('casier');
  const [currentStatus, setCurrentStatus] = useState('ACTIF');

  const statusConfig = {
    'ACTIF': { color: 'text-green-400', bg: 'from-green-900/40 to-slate-900/80', border: 'border-green-500', glow: 'shadow-[0_0_20px_rgba(34,197,94,0.4)]', icon: '🟢', desc: 'Prêt pour toute mission. Pleine capacité de combat.' },
    'RESTREINT': { color: 'text-yellow-400', bg: 'from-yellow-900/40 to-slate-900/80', border: 'border-yellow-500', glow: 'shadow-[0_0_20px_rgba(234,179,8,0.4)]', icon: '🟡', desc: 'Missions de bureau, garde du village ou escorte légère uniquement. Blessure ou trauma en guérison.' },
    'INACTIF': { color: 'text-orange-500', bg: 'from-orange-900/40 to-slate-900/80', border: 'border-orange-500', glow: 'shadow-[0_0_20px_rgba(249,115,22,0.4)]', icon: '🔴', desc: 'Hospitalisation requise. Maintien en cuve médicale ou soins intensifs.' },
    'REFORMÉ': { color: 'text-red-500', bg: 'from-red-900/60 to-black', border: 'border-red-600', glow: 'shadow-[0_0_30px_rgba(220,38,38,0.6)]', icon: '❌', desc: "Inapte définitivement. Selon le protocole de Kiri, le sujet est un poids mort." }
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <SectionHeader icon={FileArchive} title="V. Administration & D.O.S.S." subtitle="Dossier Officiel de Suivi Shinobi" />

      {/* Menu interne DOSS */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { id: 'casier', label: 'Identité & Casier', icon: Fingerprint },
          { id: 'psycho', label: 'Profil Psycho', icon: Brain },
          { id: 'ops', label: 'Cicatrices & Mods', icon: Crosshair },
          { id: 'status', label: 'Jugement Médical', icon: Activity },
          { id: 'logistique', label: 'Inventaire & Réquisitions', icon: FileText }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = dossTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setDossTab(tab.id)}
              className={`px-5 py-3 text-sm font-mono transition-all duration-300 border rounded flex items-center gap-2 ${
                isActive 
                  ? 'bg-cyan-900/60 text-cyan-300 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                  : 'bg-slate-900/50 text-slate-400 border-slate-700/50 hover:bg-slate-800/80 hover:text-cyan-400 hover:border-cyan-800'
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Conteneur de contenu avec hauteur min pour éviter les sauts */}
      <div className="min-h-[500px] relative">
        
        {/* SOUS-ONGLET: CASIER */}
        {dossTab === 'casier' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-right-4 duration-300 absolute inset-0">
            <Panel className="col-span-1 p-3 flex flex-col items-center justify-center relative !border-cyan-900/50 overflow-hidden">
               <div className="scanline"></div>
               <div className="w-full aspect-[3/4] bg-gradient-to-b from-slate-800 to-black relative flex items-center justify-center border border-slate-700">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50"></div>
                  <Skull size={120} className="text-slate-700 opacity-40 drop-shadow-2xl" />
                  
                  {/* Faux tampon "Classified" */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red-600/60 text-red-600/60 font-black text-2xl tracking-widest p-2 -rotate-12 pointer-events-none rounded mix-blend-screen shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                    CLASSIFIED
                  </div>

                  <div className="absolute bottom-4 left-0 w-full text-center bg-cyan-950/90 py-2 text-xs font-mono text-cyan-400 border-y border-cyan-800 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    MATRICULE: KR-7489-Z
                  </div>
               </div>
            </Panel>
            
            <div className="col-span-2 space-y-6">
              <Panel className="p-0 overflow-hidden">
                <div className="bg-slate-800/80 px-6 py-3 border-b border-slate-700/50"><h4 className="text-cyan-400 font-bold font-mono text-sm tracking-widest">DONNÉES BIOMÉTRIQUES</h4></div>
                <div className="p-6 grid grid-cols-2 gap-6 font-mono text-sm">
                  <div><span className="text-slate-500 block mb-1 text-xs uppercase">Nom de code</span><span className="text-white text-xl tracking-widest text-glow-cyan">SILENCE (無音)</span></div>
                  <div><span className="text-slate-500 block mb-1 text-xs uppercase">Âge Biologique</span><span className="text-white text-lg">24 ans</span></div>
                  <div><span className="text-slate-500 block mb-1 text-xs uppercase">Groupe Sanguin</span><span className="text-red-400 font-bold text-lg bg-red-950/50 px-2 py-0.5 rounded border border-red-900/50">AB- (Haut risque)</span></div>
                  <div><span className="text-slate-500 block mb-1 text-xs uppercase">Affinités Naturelles</span><span className="text-cyan-400 text-lg">Suiton</span> <span className="text-slate-600">/</span> <span className="text-slate-300">Fūton</span></div>
                </div>
              </Panel>

              <Panel>
                <h4 className="text-cyan-400 font-bold font-mono text-sm tracking-widest mb-4 border-b border-slate-700/50 pb-2">ANTÉCÉDENTS & GÉNÉTIQUE</h4>
                <div className="space-y-4">
                  <div className="bg-slate-900/50 p-3 rounded border-l-2 border-yellow-500">
                    <strong className="text-slate-300 text-sm block mb-1">Allergies Identifiées :</strong>
                    <p className="text-slate-400 text-sm font-mono">Choc anaphylactique aux analgésiques dérivés de l'Aconit.</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded border-l-2 border-orange-500">
                    <strong className="text-slate-300 text-sm block mb-1">Failles / Mutations :</strong>
                    <p className="text-slate-400 text-sm font-mono leading-relaxed">Trait récessif clanique mineur. Sensibilité accrue (12%) aux techniques Raiton. Réseau de tenketsu du bras droit affaibli suite à un ancien trauma perforant.</p>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        )}

        {/* SOUS-ONGLET: PSYCHO */}
        {dossTab === 'psycho' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-right-4 duration-300 absolute inset-0">
            <Panel>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-3 flex items-center gap-2"><Activity className="text-red-500"/> Indices Comportementaux</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between font-mono mb-2">
                    <span className="text-slate-300 text-sm">Indice de Soif de Sang (Chizakura)</span>
                    <span className="text-red-400 font-bold bg-red-950/50 px-2 rounded border border-red-900/50 text-xs flex items-center">85% - CRITIQUE</span>
                  </div>
                  <div className="w-full bg-slate-900 border border-slate-700 h-3 rounded-full overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-red-800 to-red-500 w-[85%] h-full shadow-[0_0_10px_rgba(239,68,68,0.8)] relative">
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-mono mb-2">
                    <span className="text-slate-300 text-sm">Loyauté au Mizukage</span>
                    <span className="text-cyan-400 font-bold bg-cyan-950/50 px-2 rounded border border-cyan-900/50 text-xs flex items-center">92% - ABSOLUE</span>
                  </div>
                  <div className="w-full bg-slate-900 border border-slate-700 h-3 rounded-full overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-cyan-800 to-cyan-400 w-[92%] h-full shadow-[0_0_10px_rgba(6,182,212,0.6)] relative"></div>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel className="bg-gradient-to-br from-slate-900/80 to-purple-950/20 border-purple-900/30">
              <h3 className="text-xl font-bold text-white mb-5 border-b border-purple-900/30 pb-3 flex items-center gap-2"><Eye className="text-purple-400"/> Notes - Division Torture</h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed italic border-l-4 border-slate-600 pl-4 py-1">
                  « Sujet froid et calculateur. L'empathie est totalement atrophiée. Excellent candidat pour l'assassinat silencieux. Ne montre aucune hésitation face aux cibles civiles si l'ordre est donné. »
                </p>
                <div className="p-4 bg-black/40 rounded border border-slate-800">
                  <h4 className="text-slate-400 text-xs uppercase tracking-widest font-mono mb-2">Bilan Psychologique</h4>
                  <p className="text-sm text-slate-300">Présente un <strong className="text-purple-300">SSPT massif refoulé</strong> lié aux décisions de triage "Noir" passées (perte d'escouade).</p>
                </div>
                <div className="p-4 bg-cyan-950/30 rounded border border-cyan-900/50">
                  <span className="block text-cyan-500 font-bold font-mono text-xs mb-1 uppercase tracking-widest">Directive de Manipulation :</span> 
                  <span className="text-sm text-slate-200">Le sujet est hautement réactif à la manipulation via l'honneur du village. Privilégier les directives froides et martiales.</span>
                </div>
              </div>
            </Panel>
          </div>
        )}

        {/* SOUS-ONGLET: OPS/CICATRICES */}
        {dossTab === 'ops' && (
          <div className="animate-in slide-in-from-right-4 duration-300 absolute inset-0">
            <Panel className="h-full">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3"><Crosshair className="text-red-500"/> Cadastre des Cicatrices</h3>
              <p className="text-sm text-slate-400 mb-8 font-mono border-b border-slate-700/50 pb-4">
                Une cicatrice est un registre de guerre cutané. À Kiri, toute marque dans le dos est présumée infamante (tentative de fuite).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/60 p-5 rounded-md border border-slate-700 hover:border-slate-500 transition-colors group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-bold text-white font-mono tracking-wide flex items-center gap-2"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> TORSE (QUADRANT G)</span>
                    <span className="text-xs px-3 py-1 font-mono uppercase bg-black border border-slate-600 rounded-full text-slate-300 group-hover:bg-slate-800 transition-colors">Glorieuse</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">Brûlure chimique sévère (Acide). Séquelle d'un affrontement direct avec l'Anbu du village de Kumo.</p>
                </div>

                <div className="bg-red-950/20 p-5 rounded-md border border-red-900/50 hover:border-red-500/50 transition-colors group relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-1 h-full bg-red-600/50 group-hover:bg-red-500 transition-colors"></div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-bold text-white font-mono tracking-wide flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> DOS (OMOPLATE)</span>
                    <span className="text-xs px-3 py-1 font-mono uppercase bg-red-950 border border-red-800 rounded-full text-red-400 shadow-[0_0_10px_rgba(220,38,38,0.2)]">Infamante</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">Coupure profonde de Katana. Suspicion de retraite non autorisée en territoire ennemi. <strong className="text-red-400">Surveillance accrue requise.</strong></p>
                </div>
              </div>
            </Panel>
          </div>
        )}

        {/* SOUS-ONGLET: STATUS */}
        {dossTab === 'status' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-right-4 duration-300 absolute inset-0">
            <Panel className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-2">Définir l'Aptitude Terrain</h3>
              <div className="space-y-4">
                {Object.keys(statusConfig).map((key) => {
                  const isActive = currentStatus === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setCurrentStatus(key)}
                      className={`w-full p-4 flex items-center gap-4 border transition-all duration-300 rounded-md outline-none
                        ${isActive 
                          ? `bg-slate-900 ${statusConfig[key].border} ${statusConfig[key].color} ${statusConfig[key].glow} scale-[1.02] bg-gradient-to-r ${statusConfig[key].bg}` 
                          : 'bg-slate-900/50 border-slate-700/50 text-slate-500 hover:bg-slate-800 hover:border-slate-600'}
                      `}
                    >
                      <span className="text-3xl filter drop-shadow-md">{statusConfig[key].icon}</span>
                      <span className="font-black tracking-widest font-serif text-lg">{key}</span>
                      {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-current animate-ping"></div>}
                    </button>
                  )
                })}
              </div>
            </Panel>

            <div className={`glass-panel p-10 flex flex-col justify-center items-center text-center transition-all duration-500 border-2 rounded-lg relative overflow-hidden ${statusConfig[currentStatus].border} ${statusConfig[currentStatus].glow}`}>
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-b ${statusConfig[currentStatus].bg} pointer-events-none`}></div>
              {currentStatus === 'REFORMÉ' && <div className="absolute inset-0 bg-red-900/20 animate-pulse pointer-events-none"></div>}
              
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-2">
                <span>Rapport Officiel</span>
                <span>ID: {Math.floor(Math.random() * 90000) + 10000}</span>
              </div>
              
              <AlertOctagon size={80} className={`mb-6 opacity-80 ${statusConfig[currentStatus].color} drop-shadow-2xl`} />
              
              <h1 className={`text-5xl font-black font-serif tracking-widest mb-6 ${statusConfig[currentStatus].color}`} style={{textShadow: `0 0 30px currentColor`}}>
                {currentStatus}
              </h1>
              
              <p className="text-slate-200 text-lg leading-relaxed max-w-sm relative z-10">
                {statusConfig[currentStatus].desc}
              </p>

              {currentStatus === 'REFORMÉ' && (
                <div className="mt-8 w-full p-4 bg-red-950 border border-red-600 text-red-200 text-sm font-mono shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                  /!\ AVERTISSEMENT : LA SÉLECTION DE CE STATUT AUTORISE L'ÉQUIPE DES CHASSEURS DE DÉSERTEURS (HUNTER-NIN) À DISPOSER DU CORPS. DÉCISION IRRÉVOCABLE.
                </div>
              )}
            </div>
          </div>
        )}

        {/* SOUS-ONGLET: LOGISTIQUE */}
        {dossTab === 'logistique' && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-300 absolute inset-0 w-full">
             <Panel className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3"><TestTube className="text-cyan-500"/> Inventaire des Stocks</h3>
                  <p className="text-sm text-slate-400 font-mono">Dernière mise à jour post-mission (Rang B+)</p>
                </div>
                <div className="flex gap-6 text-right">
                  <div className="bg-slate-900/80 border border-slate-700 rounded p-4 shadow-inner min-w-[150px]">
                    <span className="text-cyan-500 text-xs font-bold uppercase tracking-wider block mb-2">Antidotes (Large Spectre)</span> 
                    <span className="font-mono text-3xl font-black text-white text-glow-cyan">42 <span className="text-sm text-slate-500 font-sans">unités</span></span>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700 rounded p-4 shadow-inner min-w-[150px]">
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider block mb-2">Pilules Hyōrōgan</span> 
                    <span className="font-mono text-3xl font-black text-white" style={{textShadow: '0 0 15px rgba(234,179,8,0.5)'}}>128 <span className="text-sm text-slate-500 font-sans">unités</span></span>
                  </div>
                </div>
             </Panel>

             <Panel className="bg-slate-900/30">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700/50 pb-2 flex items-center gap-2"><FileText className="text-purple-400"/> Protocole de Réquisition</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  Le formulaire <strong className="font-mono text-purple-300">4-B</strong> est requis pour demander l'accès à des prisonniers de guerre aux fins d'études anatomiques, de tests de toxicologie in-vivo, ou de prélèvement génétique. Validation du Mizukage requise.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-900 to-slate-900 border border-cyan-700 text-cyan-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] rounded text-sm font-mono font-bold tracking-widest transition-all duration-300 group flex items-center gap-3">
                  GÉNÉRER FORMULAIRE 4-B <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </Panel>
          </div>
        )}
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL (LAYOUT) ---
export default function App() {
  const [activeTab, setActiveTab] = useState('legal');

  const tabs = [
    { id: 'legal', label: 'I. Cadre Légal', icon: Scale },
    { id: 'theorie', label: 'II. Éducation & Théorie', icon: BookOpen },
    { id: 'procedures', label: 'III. Procédures Opératoires', icon: Syringe },
    { id: 'legiste', label: 'IV. Chirurgie & Recherche', icon: Skull },
    { id: 'doss', label: 'V. Service Médico-Légal', icon: FileArchive },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'legal': return <CadreLegal />;
      case 'theorie': return <EducationTheorie />;
      case 'procedures': return <ProceduresOperatoires />;
      case 'legiste': return <ExpertiseLegiste />;
      case 'doss': return <AdministrationDOSS />;
      default: return <CadreLegal />;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-900 selection:text-white flex overflow-hidden relative">
      <GlobalStyles />
      
      {/* Brume de fond animée */}
      <div className="kiri-mist-container">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="mist-particle w-72 h-72"
            style={{
              left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * -20}s`, animationDuration: `${20 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      {/* Sidebar Desktop - Effet Verre Dépoli */}
      <aside className="w-80 bg-slate-950/80 border-r border-slate-800/80 flex flex-col z-20 backdrop-blur-xl shadow-2xl hidden md:flex shrink-0">
        <div className="p-8 border-b border-slate-800/80 flex items-center gap-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Droplet className="text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" size={40} strokeWidth={1.5} />
          <div>
            <h1 className="font-serif text-2xl font-bold text-white tracking-widest text-glow-cyan">KIRIGAKURE</h1>
            <p className="text-[0.65rem] font-mono text-cyan-400 tracking-[0.3em] mt-1 opacity-80">SECTEUR MÉDICAL</p>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          <p className="text-[0.65rem] font-mono text-slate-500 mb-6 px-2 tracking-[0.2em]">MANUSCRIT INTÉGRAL</p>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded transition-all duration-300 text-sm font-medium text-left outline-none group relative overflow-hidden
                  ${isActive 
                    ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                    : 'text-slate-400 border border-transparent hover:bg-slate-900/50 hover:text-slate-200'}
                `}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>}
                <Icon size={20} className={`${isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'} transition-colors`} />
                <span className="tracking-wide">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-800/80 text-[0.7rem] text-red-500/80 font-mono text-center tracking-widest leading-relaxed bg-red-950/10">
          DOSSIER CLASSIFIÉ.<br/>CONSULTATION SURVEILLÉE.
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto z-10 scroll-smooth relative">
        {/* Header Mobile */}
        <header className="md:hidden bg-slate-950/90 backdrop-blur-md border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30 shadow-lg">
            <div className="flex items-center gap-3">
                <Droplet className="text-cyan-500" size={28} />
                <div>
                  <span className="font-serif font-bold text-white tracking-widest text-glow-cyan block leading-none">KIRI MED</span>
                </div>
            </div>
            <select 
                className="bg-slate-900 border border-cyan-900 text-cyan-300 text-sm p-2 rounded outline-none font-mono focus:border-cyan-500"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
            >
                {tabs.map(tab => <option key={tab.id} value={tab.id}>{tab.label}</option>)}
            </select>
        </header>

        {/* Content Wrapper */}
        <div className="flex-1 p-6 lg:p-12 max-w-6xl mx-auto w-full pb-24">
          <div className="relative z-10">
             {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}