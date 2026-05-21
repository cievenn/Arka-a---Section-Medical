import React, { useState } from 'react';
import { 
  BookOpen, Activity, Droplet, Biohazard, TestTube, Syringe, 
  Flame, Zap, Brain, Fish, Dna, AlertTriangle, Microscope, 
  Heart, Network 
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import CollapsibleGradient from '../components/CollapsibleGradient';
import Divider from '../components/Divider';
import ImagePlaceholder from '../components/ImagePlaceholder';
import chakraImage from '../assets/chakra.png';

const EducationTheorie = () => {
  const [activeTab, setActiveTab] = useState('survie');

  return (
  <div className="space-y-16 pb-10">
    <SectionHeader icon={BookOpen} title="II. Sciences Biomédicales" subtitle="Étude du corps humain, du réseau de chakra et des mécanismes biologiques" />

    {/* Rangée 1 : Biologie et Chakra Médical */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <Panel className="flex flex-col h-full" variant="info">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 border-b border-cyan-900/50 pb-4">
          <div className="p-2.5 bg-cyan-900/40 rounded-xl border border-cyan-800/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]"><Microscope className="text-cyan-400" size={24}/></div>
          Biologie Cellulaire
        </h3>
        <p className="text-base text-slate-300 leading-relaxed mb-8 italic border-l-4 border-cyan-500/50 pl-4 bg-slate-900/30 py-3 rounded-r-xl">
          Le chakra médical ne guérit pas "magiquement". Il agit en forçant et en accélérant les processus biologiques existants au sein de la cellule.
        </p>
        <div className="space-y-5 mb-8 flex-1">
          <div className="p-5 bg-black/40 border-l-4 border-cyan-500 rounded-xl hover:bg-black/60 transition-colors group">
            <strong className="text-cyan-400 block mb-2 font-mono uppercase tracking-widest text-sm group-hover:text-glow-cyan transition-all">Niveau Cellulaire & Tissulaire</strong>
            <span className="text-slate-300 text-sm leading-relaxed">Stimulation des mitochondries pour relancer l'ATP. Accélération de la division cellulaire (mitose) et fusion des tissus déchirés.</span>
          </div>
          <div className="p-5 bg-black/40 border-l-4 border-blue-500 rounded-xl hover:bg-black/60 transition-colors group">
            <strong className="text-blue-400 block mb-2 font-mono uppercase tracking-widest text-sm group-hover:text-glow-cyan transition-all">Niveau Organique</strong>
            <span className="text-slate-300 text-sm leading-relaxed">Maintien artificiel des organes défaillants et prévention de la nécrose systémique.</span>
          </div>
        </div>
        
        {/* Alerte Fish */}
        <div className="p-6 bg-gradient-to-r from-red-950/40 to-slate-900/80 border border-red-900/50 rounded-xl relative overflow-hidden group">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none"></div>
          <h4 className="text-red-400 font-bold mb-3 flex items-center gap-3 text-base">
            <Fish size={20} className="text-red-500"/> Le Test de l'Infusion
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white px-2 py-0.5 bg-red-900/80 rounded uppercase text-xs mr-2">Danger</strong> 
            Si le médecin injecte un chakra instable, la surcharge énergétique provoque la combustion des cellules. L'exercice consiste à soigner un poisson sans le tuer.
          </p>
        </div>
      </Panel>

      <Panel className="flex flex-col h-full bg-gradient-to-bl from-kiri-950 to-blue-950/20">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 border-b border-blue-900/50 pb-4">
          <div className="p-2.5 bg-blue-900/40 rounded-xl border border-blue-800/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]"><Network className="text-blue-400" size={24}/></div>
          Réseau de Chakra
        </h3>
        <p className="text-base text-slate-300 leading-relaxed mb-8">
          Le <span className="text-blue-300 font-semibold font-mono tracking-wide">Keirakukei</span> est un système énergétique parallèle aux systèmes sanguin et nerveux, composé de conduits et de 361 points de sortie (Tenketsu).
        </p>
        <div className="grid gap-4 flex-1">
          <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors relative group">
            <div className="absolute inset-y-0 left-0 w-1 bg-cyan-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <strong className="text-cyan-300 block mb-2 font-mono uppercase tracking-wider text-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div> Énergie Physique (Yang)</strong>
            <span className="text-slate-300 text-sm leading-relaxed">Issue de l'énergie cellulaire. Moteur principal de la régénération tissulaire.</span>
          </div>
          <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-colors relative group">
            <div className="absolute inset-y-0 left-0 w-1 bg-purple-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <strong className="text-purple-300 block mb-2 font-mono uppercase tracking-wider text-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div> Énergie Spirituelle (Yin)</strong>
            <span className="text-slate-300 text-sm leading-relaxed">Issue du cortex cérébral et de la focalisation intellectuelle absolue.</span>
          </div>
          <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors relative group">
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <strong className="text-blue-300 block mb-2 font-mono uppercase tracking-wider text-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div> Interaction Organique</strong>
            <span className="text-slate-300 text-sm leading-relaxed">Imbriqué dans le système nerveux. Un blocage des tenketsu entraîne la paralysie.</span>
          </div>
        </div>
      </Panel>
    </div>

    <div className="px-4">
      <ImagePlaceholder src={chakraImage} caption="Modélisation Scan 3D — Réseau de Chakra (Keirakukei) et Tenketsu" />
    </div>

    {/* Rangée 2 : Physiologie et Anatomie */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Panel>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 border-b border-emerald-900/50 pb-4">
          <div className="p-2.5 bg-emerald-900/40 rounded-xl border border-emerald-800/50"><Activity className="text-emerald-400" size={24}/></div>
          Physiologie & Systèmes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
            <strong className="text-emerald-400 block mb-3 text-sm font-mono uppercase tracking-widest border-b border-emerald-900/30 pb-2">Système Nerveux</strong>
            <span className="text-slate-300 text-sm leading-relaxed">SNC (Cerveau, moelle) et SNP. Transmission électrique. Lésion = paralysie.</span>
          </div>
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
            <strong className="text-emerald-400 block mb-3 text-sm font-mono uppercase tracking-widest border-b border-emerald-900/30 pb-2">Système Musculaire</strong>
            <span className="text-slate-300 text-sm leading-relaxed">+600 muscles. Mouvement, thermorégulation.</span>
          </div>
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
            <strong className="text-emerald-400 block mb-3 text-sm font-mono uppercase tracking-widest border-b border-emerald-900/30 pb-2">Système Squelettique</strong>
            <span className="text-slate-300 text-sm leading-relaxed">~206 os. Protection vitale et production sanguine.</span>
          </div>
          <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
            <strong className="text-emerald-400 block mb-3 text-sm font-mono uppercase tracking-widest border-b border-emerald-900/30 pb-2">Tissus Fondamentaux</strong>
            <span className="text-slate-300 text-sm leading-relaxed">Épithélial, Conjonctif, Musculaire, Nerveux.</span>
          </div>
        </div>
      </Panel>

      <Panel className="bg-gradient-to-br from-kiri-950 to-rose-950/10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4 border-b border-rose-900/50 pb-4">
          <div className="p-2.5 bg-rose-900/40 rounded-xl border border-rose-800/50"><Heart className="text-rose-400" size={24}/></div>
          Organes Vitaux
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-slate-800">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <span className="text-sm text-slate-300"><strong className="text-slate-100">Cerveau :</strong> Contrôle absolu</span>
            </div>
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-slate-800">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <span className="text-sm text-slate-300"><strong className="text-slate-100">Cœur :</strong> Pompe systémique</span>
            </div>
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-slate-800">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <span className="text-sm text-slate-300"><strong className="text-slate-100">Poumons :</strong> Échanges O₂/CO₂</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-slate-800">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <span className="text-sm text-slate-300"><strong className="text-slate-100">Foie :</strong> Détoxification</span>
            </div>
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-slate-800">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <span className="text-sm text-slate-300"><strong className="text-slate-100">Reins :</strong> Filtration</span>
            </div>
            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-slate-800">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
              <span className="text-sm text-slate-300"><strong className="text-slate-100">Estomac :</strong> Absorption</span>
            </div>
          </div>
        </div>
        <div className="p-5 bg-rose-950/30 border border-rose-900/50 rounded-xl relative overflow-hidden group">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rose-500/10 to-transparent pointer-events-none"></div>
          <strong className="text-rose-400 block mb-2 text-sm font-mono tracking-widest uppercase flex items-center gap-2"><Biohazard size={16}/> Septicémie</strong>
          <p className="text-sm text-slate-300 leading-relaxed">
            Infection généralisée du sang. État critique immédiat nécessitant une antibiothérapie massive et l'extraction du foyer infectieux.
          </p>
        </div>
      </Panel>
    </div>

    <Divider symbol="cross" />

    {/* Rangée 3 : Hématologie */}
    <Panel className="border-red-900/40 bg-gradient-to-br from-kiri-950 to-red-950/20 relative overflow-hidden p-8 lg:p-12">
      <div className="absolute -right-10 top-0 opacity-[0.03] pointer-events-none"><Syringe size={300} /></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h3 className="text-3xl font-serif text-red-400 mb-6 flex items-center gap-4 justify-center text-glow-red">
          <Syringe size={32} /> Hématologie Shinobi & Flux Vital
        </h3>
        
        <p className="text-base text-slate-300 mb-12 text-center italic leading-relaxed max-w-3xl mx-auto">
          Chez les shinobi, le sang transporte des cellules gorgées de chakra. Une hémorragie équivaut à une perte simultanée de vie et d'énergie. Le système ABO/Rhésus dicte la survie.
        </p>

        {/* Grille des Groupes Sanguins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { group: 'A', items: [
              { label: 'A+', desc: 'Antigènes A + RhD.', recv: 'A+, A-, O+, O-', give: 'A+, AB+' },
              { label: 'A-', desc: 'Antigène A.', recv: 'A-, O-', give: 'A+, A-, AB+, AB-' },
            ]},
            { group: 'B', items: [
              { label: 'B+', desc: 'Antigènes B + RhD.', recv: 'B+, B-, O+, O-', give: 'B+, AB+' },
              { label: 'B-', desc: 'Antigène B.', recv: 'B-, O-', give: 'B+, B-, AB+, AB-' },
            ]},
            { group: 'AB', items: [
              { label: 'AB+', desc: 'Antigènes A, B + RhD.', recv: 'Tous les groupes', give: 'AB+', badge: 'Receveur Univ.', badgeColor: 'emerald' },
              { label: 'AB-', desc: 'Antigènes A + B.', recv: 'AB-, A-, B-, O-', give: 'AB+, AB-' },
            ]},
            { group: 'O', items: [
              { label: 'O+', desc: 'Aucun antigène A/B.', recv: 'O+, O-', give: 'O+, A+, B+, AB+' },
              { label: 'O-', desc: 'Aucun antigène.', recv: 'O- uniquement', give: 'Tous les groupes', badge: 'Donneur Univ.', badgeColor: 'cyan' },
            ]},
          ].map(({ group, items }) => (
            <div key={group} className="space-y-4">
              {items.map(({ label, desc, recv, give, badge, badgeColor }) => (
                <div key={label} className={`p-5 bg-black/60 border border-red-900/30 rounded-xl hover:border-red-500/50 transition-colors group/card relative overflow-hidden ${badge ? `shadow-[0_0_20px_rgba(${badgeColor === 'emerald' ? '16,185,129' : '6,182,212'},0.1)] border-${badgeColor}-900/50` : ''}`}>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${badgeColor ? badgeColor : 'red'}-500/50 group-hover/card:bg-${badgeColor ? badgeColor : 'red'}-400 transition-colors`}></div>
                  
                  <div className="flex justify-between items-center mb-3 mt-1">
                    <span className={`text-2xl font-black font-mono tracking-tighter ${badge ? `text-${badgeColor}-400` : 'text-red-400'}`}>{label}</span>
                    {badge && <span className={`text-[9px] uppercase bg-${badgeColor}-950 text-${badgeColor}-400 border border-${badgeColor}-800/50 px-2.5 py-1 rounded-full tracking-widest font-bold shadow-[0_0_10px_rgba(${badgeColor === 'emerald' ? '16,185,129' : '6,182,212'},0.3)]`}>{badge}</span>}
                  </div>
                  
                  <p className="text-xs text-slate-400 mb-4 h-8">{desc}</p>
                  
                  <div className="space-y-2 text-xs font-mono bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-emerald-400 font-bold">REÇOIT:</span> 
                      <span className="text-slate-300 text-right">{recv}</span>
                    </div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-blue-400 font-bold">DONNE:</span> 
                      <span className="text-slate-300 text-right">{give}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-950/30 border border-red-900/50 rounded-2xl flex gap-4 items-start shadow-inner">
            <AlertTriangle size={24} className="text-red-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-red-400 mb-2 font-mono uppercase tracking-widest text-sm">Choc Immunologique</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Le sang Négatif peut être donné au Positif, mais perfuser du Positif à un Négatif provoque un choc mortel. L'analyse visuelle de la viscosité permet d'évaluer l'épuisement métabolique avant le Diagnostic Sans Faille.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-slate-900/80 border border-slate-700/50 rounded-2xl flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Activity size={24} className="text-cyan-400 shrink-0 mt-1 relative z-10" />
            <div className="relative z-10 w-full">
              <h4 className="font-bold text-cyan-400 mb-4 font-mono uppercase tracking-widest text-sm border-b border-slate-700/50 pb-2">Génération RP (D100)</h4>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-300">
                <div>
                  <span className="text-slate-500 block mb-2 uppercase">1er Jet : Groupe</span>
                  <ul className="space-y-1.5">
                    <li>01-25 : <span className="text-red-400 font-bold bg-red-950/50 px-1.5 py-0.5 rounded">O</span></li>
                    <li>26-50 : <span className="text-red-400 font-bold bg-red-950/50 px-1.5 py-0.5 rounded">A</span></li>
                    <li>51-75 : <span className="text-red-400 font-bold bg-red-950/50 px-1.5 py-0.5 rounded">B</span></li>
                    <li>76-100: <span className="text-red-400 font-bold bg-red-950/50 px-1.5 py-0.5 rounded">AB</span></li>
                  </ul>
                </div>
                <div>
                  <span className="text-slate-500 block mb-2 uppercase">2ème Jet : Polarité</span>
                  <ul className="space-y-1.5">
                    <li>01-85 : <span className="text-blue-400 font-bold bg-blue-950/50 px-1.5 py-0.5 rounded">(+) POS</span></li>
                    <li>86-100: <span className="text-emerald-400 font-bold bg-emerald-950/50 px-1.5 py-0.5 rounded">(-) NEG</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Panel>

    <Divider symbol="diamond" />

    {/* Rangée 4 : Toxicologie, Pharmacologie et Botanique */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Panel className="lg:col-span-1 border-emerald-900/30 bg-gradient-to-b from-kiri-950 to-emerald-950/10 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-emerald-900/50 pb-4">
          <div className="p-2 bg-emerald-900/40 rounded-xl"><Biohazard className="text-emerald-400" size={20}/></div>
          Pharmaco-Toxicologie
        </h3>
        <div className="space-y-8 text-sm flex-1">
          <div>
            <h4 className="text-emerald-400 font-mono tracking-widest uppercase text-xs mb-4">Classes Pharmacologiques</h4>
            <ul className="space-y-3">
              {[
                ['Analgésiques', 'Douleur'], ['Anti-inflammatoires', 'Inflammation'],
                ['Antibiotiques', 'Infections'], ['Anticoagulants', 'Fluidification'],
                ['Anesthésiants', 'Perte conscience']
              ].map(([name, use]) => (
                <li key={name} className="flex justify-between items-center bg-slate-900/60 border border-slate-800/80 p-3 rounded-lg hover:border-emerald-500/30 transition-colors group">
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{name}</span>
                  <span className="text-slate-400 text-xs text-right max-w-[50%] leading-tight">{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-red-400 font-mono tracking-widest uppercase text-xs mb-4 flex items-center gap-2"><AlertTriangle size={14}/> Agents Toxiques</h4>
            <div className="space-y-3">
              {[
                { name: 'Hémotoxines', color: 'red', desc: 'Détruisent la coagulation (hémorragie fulgurante ou thrombose).' },
                { name: 'Neurotoxines', color: 'purple', desc: 'Bloquent les synapses (paralysie, asphyxie, dégénérescence).' },
                { name: 'Cytotoxines', color: 'emerald', desc: 'Nécrose localisée foudroyante qui liquéfie les tissus.' },
              ].map(({ name, color, desc }) => (
                <div key={name} className={`p-4 bg-black/40 border border-${color}-900/30 border-l-2 border-l-${color}-500 rounded-lg hover:bg-black/60 transition-colors`}>
                  <strong className={`text-${color}-400 block font-mono text-xs uppercase tracking-wider mb-1.5`}>{name}</strong>
                  <span className="text-slate-300 text-xs leading-relaxed block">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <Panel className="lg:col-span-2 flex flex-col h-full bg-gradient-to-br from-kiri-950 to-slate-900">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-4">
          <div className="p-2 bg-yellow-900/30 border border-yellow-800/50 rounded-xl"><TestTube className="text-yellow-400" size={20}/></div>
          Botanique Paramédicale Intégrale
        </h3>
        
        <div className="rounded-xl border border-slate-700/50 bg-black/30 shadow-inner flex-1 p-6 space-y-8">
          
          {/* TABS NAVIGATION */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <button 
              onClick={() => setActiveTab('survie')}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${
                activeTab === 'survie' 
                  ? 'bg-green-900/60 text-green-300 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]' 
                  : 'bg-slate-900/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              Survie & Herboristerie
            </button>
            <button 
              onClick={() => setActiveTab('pharmacopee')}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${
                activeTab === 'pharmacopee' 
                  ? 'bg-cyan-900/60 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                  : 'bg-slate-900/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              Pharmacopée Scientifique
            </button>
            <button 
              onClick={() => setActiveTab('toxines')}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-widest transition-all ${
                activeTab === 'toxines' 
                  ? 'bg-red-900/60 text-red-300 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                  : 'bg-slate-900/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              Stimulants & Toxines
            </button>
          </div>

          {/* CATÉGORIE 1 */}
          {activeTab === 'survie' && (
            <div className="animate-fadeInUp">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
                <h4 className="text-lg font-bold text-green-400 font-mono tracking-widest uppercase">Catégorie 1 : Herboristerie Commune & Survie</h4>
              </div>
              <p className="text-sm text-slate-300 italic mb-6 border-l-2 border-green-900/50 pl-4">
                La base de la médecine de terrain. Ces plantes sont utilisables par tous les ninjas pour se soigner, récupérer de l'énergie et survivre en milieu hostile sans consommer de chakra.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Plantain (Plantago major)', desc: 'Cicatrisant et anti-inflammatoire d\'urgence, appliqué en cataplasme de feuilles écrasées directement sur les plaies.' },
                  { name: 'Consoude', desc: 'Accélère la régénération des tissus et soulage les fractures légères sous forme d\'onguent (Attention : usage externe uniquement, toxique en interne).' },
                  { name: 'Ortie (Urtica dioica)', desc: 'Tonique post-combat riche en minéraux, utilisé en infusion pour réduire drastiquement la fatigue musculaire.' },
                  { name: 'Camomille (Matricaria chamomilla)', desc: 'Favorise la récupération mentale, le sommeil et calme les tensions après les missions intensives.' },
                  { name: 'Lavande (Lavandula angustifolia)', desc: 'Apaisante et stabilisatrice de chakra, idéale en infusion ou en huile pour soutenir la méditation ninja.' },
                  { name: 'Mousse des Rivières', desc: 'Traitement d\'urgence pour les ulcères et les inflammations gastriques.' },
                  { name: 'Secours Shinobi', desc: 'Comestible de terrain soutenant la survie prolongée en milieu hostile.' },
                  { name: 'Herbe Géante', desc: 'Plante rustique de brousse aux applications paramédicales diverses.' }
                ].map(item => (
                  <div key={item.name} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-green-500/30 transition-colors relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500/50 group-hover:bg-green-400 transition-colors"></div>
                    <strong className="text-green-300 block mb-1 font-mono text-sm pl-2">{item.name}</strong>
                    <span className="text-slate-400 text-xs leading-relaxed pl-2 block">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CATÉGORIE 2 */}
          {activeTab === 'pharmacopee' && (
            <div className="animate-fadeInUp">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-cyan-500 rounded-full"></div>
                <h4 className="text-lg font-bold text-cyan-400 font-mono tracking-widest uppercase">Catégorie 2 : Pharmacopée & Antidotes</h4>
              </div>
              <p className="text-sm text-slate-300 italic mb-6 border-l-2 border-cyan-900/50 pl-4">
                Les espèces complexes traitées en laboratoire. Réservées aux médecins qualifiés pour la création de sérums, de remèdes lourds et le traitement des blessures de haut rang.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Racine de Dragon', desc: 'Composant fondamental pour la synthèse d\'antidotes universels.' },
                  { name: 'Cochléaire', desc: 'Agent purifiant essentiel dans la conception d\'antidotes complexes.' },
                  { name: 'Herbes Blanches', desc: 'Cicatrisant d\'urgence absolue pour les lacérations sévères et hémorragies massives.' },
                  { name: 'Herbes Multicolores', desc: 'Mélange synergique agissant comme un puissant antalgique et cicatrisant.' },
                  { name: 'Réglisse (Kanzō)', desc: 'Stabilisateur biochimique utilisé dans les drogues médicales avancées.' },
                  { name: 'Cactus Détoxifiant', desc: 'Utilisé pour l\'extraction d\'agents neutralisants contre les venins.' },
                  { name: 'Matatabi (Vigne)', desc: 'Tonique systémique protégeant le foie et la pompe cardiaque.' },
                  { name: 'Racine de Rehmannia', desc: 'Stimule la régénération du système nerveux et des tissus osseux.' },
                  { name: 'Clou de Girofle', desc: 'Antiseptique et antibactérien naturel de haute efficacité.' },
                  { name: 'Cistanche / Épimède', desc: 'Plantes de base pour l\'élaboration de préparations curatives complexes.' },
                  { name: 'Megusurisō (Œil)', desc: 'Réduit drastiquement la fatigue oculaire et nerveuse liée à l\'utilisation prolongée des Dōjutsu.' },
                  { name: 'Orchidée du Désert', desc: 'Distillée en parfum médical, elle perturbe le flux de chakra pour dissiper les Genjutsu.' },
                  { name: 'Racine de Pivoine', desc: 'Antispasmodique puissant utilisé pour stopper les convulsions.' },
                  { name: 'Fleur Nouvelle Lune', desc: 'Base fondamentale pour les médicaments neurologiques et psychiatriques (Unité Psy).' },
                  { name: 'Herbe d\'Armure', desc: 'Fortifiant tissulaire préventif.' },
                  { name: 'Feuille Arbre de Vie', desc: 'Spécimen extrêmement rare, remède contre les maladies dégénératives.' },
                  { name: 'Fleur de Jofuku', desc: 'Panacée miracle légendaire (Danger : souvent protégée par des illusions léthales).' }
                ].map(item => (
                  <div key={item.name} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/30 transition-colors relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></div>
                    <strong className="text-cyan-300 block mb-1 font-mono text-sm pl-2">{item.name}</strong>
                    <span className="text-slate-400 text-xs leading-relaxed pl-2 block">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CATÉGORIE 3 */}
          {activeTab === 'toxines' && (
            <div className="animate-fadeInUp">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-6 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <h4 className="text-lg font-bold text-red-400 font-mono tracking-widest uppercase">Catégorie 3 : Stimulants & Toxines</h4>
              </div>
              <p className="text-sm text-red-200/80 italic mb-6 border-l-2 border-red-900/50 pl-4 bg-red-950/20 py-2 rounded-r">
                La zone de danger. Plantes altérant violemment le métabolisme pour booster les capacités militaires ou pour empoisonner. À manipuler avec une précision clinique.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Racine de Ginseng (Panax ginseng)', desc: 'Boost temporaire d\'endurance et de concentration. C\'est l\'équivalent naturel (et l\'ingrédient principal) des pilules militaires.' },
                  { name: 'Carotte d\'Énergie', desc: 'Additif pour pilules ninja offrant un boost d\'endurance massif.' },
                  { name: 'Herbe Brasier', desc: 'Effet thermogénique stimulant provoquant une surcharge physique temporaire.' },
                  { name: 'Écorce de Cannelle', desc: 'Vasodilatateur puissant favorisant la circulation accélérée du chakra.' },
                  { name: 'Sauge Officinale (Salvia officinalis)', desc: 'Antiseptique et stimulant nerveux. (Attention - Effet toxique contrôlé : un surdosage entraîne des effets indésirables sévères, réservée aux ninjas expérimentés).' },
                  { name: 'Herbe au Loup', desc: 'Poison neurotoxique et cytotoxique brut, mortel si non traité.' },
                  { name: 'Aconit (Acônito)', desc: 'Racine hautement toxique possédant de puissants effets sédatifs et analgésiques.' },
                  { name: 'Herbe Mandra', desc: 'Plante extrêmement amère aux vertus sédatives foudroyantes.' }
                ].map(item => (
                  <div key={item.name} className="p-4 bg-black/40 border border-red-900/30 rounded-lg hover:border-red-500/50 transition-colors relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600/50 group-hover:bg-red-500 transition-colors"></div>
                    <strong className="text-red-400 block mb-1 font-mono text-sm pl-2 group-hover:text-glow-red transition-all">{item.name}</strong>
                    <span className="text-slate-300 text-xs leading-relaxed pl-2 block">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Panel>
    </div>
  </div>
  );
};

export default EducationTheorie;