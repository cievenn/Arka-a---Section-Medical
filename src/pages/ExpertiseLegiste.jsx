import React from 'react';
import {
  Skull, FileArchive, Search, Fingerprint, Eye, Droplet,
  AlertTriangle, Lock, ShieldAlert, ThermometerSnowflake,
  Microscope, Dna, Scissors
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import CollapsibleGradient from '../components/CollapsibleGradient';
import Divider from '../components/Divider';

const ExpertiseLegiste = () => (
  <div className="space-y-16 pb-10">
    <SectionHeader icon={Skull} title="IV. Expertise Médico-Légale" subtitle="La Morgue, Kinjutsu, Médecine Expérimentale et Autopsies" colorClass="text-purple-400 text-glow-purple" />


    {/* PROTOCOLE AUTOPSIE */}
    <div>
      <h3 className="text-2xl lg:text-3xl font-serif text-white mb-10 flex items-center gap-4 justify-center">
        <span className="w-8 h-px bg-purple-500"></span>
        Protocole d'Autopsie Standard (P.A.S)
        <span className="w-8 h-px bg-purple-500"></span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Panel className="flex flex-col relative overflow-hidden group hover:border-cyan-500/50 transition-colors" hover={false}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500/50"></div>
          <div className="text-cyan-400 mb-6 flex justify-between items-center">
            <Search size={32} />
            <span className="font-mono text-5xl font-black opacity-20">01</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-3">Examen Externe</h4>
          <ul className="space-y-3 text-sm text-slate-300 font-mono flex-1">
            <li className="flex gap-2"><span className="text-cyan-500">›</span> Photographie et croquis des lésions.</li>
            <li className="flex gap-2"><span className="text-cyan-500">›</span> Prélèvements sous-unguéaux (ADN agresseur).</li>
            <li className="flex gap-2"><span className="text-cyan-500">›</span> Analyse des lividités (heure du décès).</li>
            <li className="flex gap-2"><span className="text-cyan-500">›</span> Étude de la rigidité cadavérique.</li>
          </ul>
        </Panel>

        <Panel className="flex flex-col relative overflow-hidden group hover:border-rose-500/50 transition-colors" hover={false}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500/50"></div>
          <div className="text-rose-400 mb-6 flex justify-between items-center">
            <Scissors size={32} />
            <span className="font-mono text-5xl font-black opacity-20">02</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-3">Incision Menton-Pubis</h4>
          <ul className="space-y-3 text-sm text-slate-300 font-mono flex-1">
            <li className="flex gap-2"><span className="text-rose-500">›</span> Incision en Y.</li>
            <li className="flex gap-2"><span className="text-rose-500">›</span> Résection du plastron sterno-costal.</li>
            <li className="flex gap-2"><span className="text-rose-500">›</span> Prélèvement en bloc des organes (technique de Virchow ou Zenker).</li>
            <li className="flex gap-2"><span className="text-rose-500">›</span> Pesée de chaque organe vitaux.</li>
          </ul>
        </Panel>

        <Panel className="flex flex-col relative overflow-hidden group hover:border-amber-500/50 transition-colors" hover={false}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500/50"></div>
          <div className="text-amber-400 mb-6 flex justify-between items-center">
            <Microscope size={32} />
            <span className="font-mono text-5xl font-black opacity-20">03</span>
          </div>
          <h4 className="text-lg font-bold text-white mb-3">Tox/Histo & Clôture</h4>
          <ul className="space-y-3 text-sm text-slate-300 font-mono flex-1">
            <li className="flex gap-2"><span className="text-amber-500">›</span> Prélèvements : sang, urine, bile, humeur vitrée.</li>
            <li className="flex gap-2"><span className="text-amber-500">›</span> Recherche de poisons (Herbe au Loup).</li>
            <li className="flex gap-2"><span className="text-amber-500">›</span> Remise en place des organes (ou substitut).</li>
            <li className="flex gap-2"><span className="text-amber-500">›</span> Suture en surjet (baseball stitch).</li>
          </ul>
        </Panel>
      </div>
    </div>

    <Divider symbol="cross" />

    {/* SECRET MÉDICAL ET DŌJUTSU */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Panel className="border-indigo-900/40 bg-gradient-to-br from-kiri-950 to-indigo-950/20 h-full">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4 border-b border-indigo-900/50 pb-4">
          <div className="p-2 bg-indigo-900/40 rounded-xl"><Eye className="text-indigo-400" size={24} /></div>
          Extraction de Dōjutsu
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          La récupération d'un œil aux propriétés génétiques spéciales (Byakugan, Sharingan) est une priorité absolue. Un Dōjutsu se nécrose rapidement si le nerf optique est sectionné sans stase.
        </p>
        <div className="bg-black/50 p-5 rounded-xl border border-indigo-900/30">
          <strong className="text-indigo-400 font-mono uppercase tracking-widest text-xs block mb-3 border-b border-indigo-900/50 pb-2">Protocole d'Énucléation</strong>
          <ol className="list-decimal list-inside text-sm text-slate-300 space-y-2 font-mono">
            <li>Section des muscles oculomoteurs via Scalpel de Chakra.</li>
            <li>Infiltration d'un fluide conservateur (base: Racine de Réglisse).</li>
            <li>Section nette du nerf optique.</li>
            <li>Plongée immédiate dans un bocal de liquide amniotique artificiel de grade médical militaire.</li>
          </ol>
        </div>
      </Panel>

      <Panel className="border-cyan-900/40 bg-gradient-to-br from-kiri-950 to-cyan-950/20 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4 border-b border-cyan-900/50 pb-4">
            <div className="p-2 bg-cyan-900/40 rounded-xl"><Search className="text-cyan-400" size={24} /></div>
            Recherche de Lésions Internes
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            L'autopsie d'un shinobi assassiné demande de traquer des blessures invisibles à l'œil nu, souvent perpétrées par du Taijutsu avancé ou du Ninjutsu d'infiltration.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 items-start bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-500 mt-0.5">›</span>
              <span className="text-sm text-slate-300">Recherche de micro-hématomes sur les méridiens (Jūken).</span>
            </li>
            <li className="flex gap-3 items-start bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
              <span className="text-cyan-500 mt-0.5">›</span>
              <span className="text-sm text-slate-300">Analyse de la liquéfaction cellulaire (Rasengan / Choc de vent).</span>
            </li>
          </ul>
        </div>
      </Panel>
    </div>

    <Divider symbol="diamond" />

    {/* ZONES INTERDITES / KINJUTSU */}
    <Panel className="border-red-900/60 bg-kiri-950 relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.1)]">
      {/* Background Alerts */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-600"></div>
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-red-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>

      {/* Danger Tape */}
      <div className="absolute -right-16 top-10 rotate-45 bg-red-600 text-black font-black uppercase tracking-[0.5em] text-xs py-2 px-32 shadow-lg">RESTRICTED SECTION - OININ CLEARANCE ONLY</div>

      <div className="flex flex-col items-center justify-center mb-10 mt-6">
        <Lock size={48} className="text-red-600 mb-4" />
        <h3 className="text-3xl font-serif text-red-500 uppercase tracking-widest text-glow-red">Kinjutsu & Expérimentations</h3>
        <p className="text-red-400/80 font-mono text-sm mt-2 tracking-widest uppercase">Niveau d'accréditation: Mizukage / Médecin-Chef</p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-xl relative group">
          <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h4 className="text-red-400 font-bold text-lg mb-2 flex items-center gap-2">
            <ShieldAlert size={20} /> Edo Tensei (Réincarnation des Âmes)
          </h4>
          <p className="text-sm text-red-200/80 leading-relaxed font-mono">
            <strong className="text-red-500 uppercase tracking-wide border-b border-red-900/50 pb-0.5 mr-2">Classification: Hérésie Médicale de Rang S.</strong>
            Nécessite un sacrifice humain vivant et l'ADN du défunt. La section médicale a pour consigne d'incinérer toute trace ADN suspecte tombant entre de mauvaises mains.
          </p>
        </div>

        <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-xl relative group">
          <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h4 className="text-red-400 font-bold text-lg mb-2 flex items-center gap-2">
            <ShieldAlert size={20} /> Greffes ADN Aberrantes (Chimères)
          </h4>
          <p className="text-sm text-red-200/80 leading-relaxed font-mono">
            <strong className="text-red-500 uppercase tracking-wide border-b border-red-900/50 pb-0.5 mr-2">Classification: Kinjutsu Expérimental.</strong>
            Tentatives d'implanter le Kekkei Genkai de Mokuton ou les cellules d'entités divines. Le taux de mortalité (rejet sous forme de transformation monstrueuse ou combustion) avoisine les 99.9%. Toute expérience non avalisée par Kiri est punie de mort.
          </p>
        </div>

        <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-xl relative group">
          <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h4 className="text-red-400 font-bold text-lg mb-2 flex items-center gap-2">
            <ShieldAlert size={20} /> Jutsu de Transfert de Vie (Kishō Tensei)
          </h4>
          <p className="text-sm text-red-200/80 leading-relaxed font-mono">
            <strong className="text-red-500 uppercase tracking-wide border-b border-red-900/50 pb-0.5 mr-2">Classification: Rang S.</strong>
            Le médecin transfère sa propre force vitale en échange de celle du patient. Si la cible est morte, l'utilisateur meurt inévitablement en ravivant la cible. Strictement proscrit pour préserver l'élite médicale du village.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xs text-red-500/50 font-mono tracking-[0.3em] uppercase">Document confidentiel. Toute fuite d'informations entraînera l'intervention des Oinin.</p>
      </div>
    </Panel>
  </div>
);

export default ExpertiseLegiste;