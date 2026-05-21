import React from 'react';
import { 
  FileArchive, Database, ShieldAlert, FolderLock, 
  Terminal, ShieldCheck, HardDrive, Key, Fingerprint
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import Divider from '../components/Divider';

const AdministrationDOSS = () => (
  <div className="space-y-16 pb-10">
    <SectionHeader icon={FileArchive} title="V. Dossiers & Administration" subtitle="Gestion des données, classification et protocoles de secret médical" colorClass="text-slate-200 text-glow-cyan" />

    {/* NIVEAUX D'ACCREDITATION */}
    <Panel className="border-slate-700/50 bg-gradient-to-br from-kiri-950 to-slate-900/40 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent pointer-events-none"></div>
      
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 border-b border-slate-700/50 pb-4 relative z-10">
        <div className="p-2 bg-slate-800 rounded-xl border border-slate-700"><Key className="text-slate-400" size={24}/></div>
        Niveaux d'Accréditation
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {/* Niveau C */}
        <div className="flex flex-col group p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-slate-500/50 transition-all hover:-translate-y-1 hover:shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-2xl font-black text-slate-500 group-hover:text-slate-400 transition-colors">C-Class</span>
            <ShieldCheck size={20} className="text-slate-600" />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed font-mono flex-1 border-t border-slate-800 pt-3">
            Accès aux dossiers médicaux standards, groupes sanguins et blessures mineures. <br/><span className="text-slate-500 mt-2 block">Accès: Apprentis, Infirmiers.</span>
          </p>
        </div>

        {/* Niveau B */}
        <div className="flex flex-col group p-5 bg-cyan-950/20 border border-cyan-900/30 rounded-xl hover:border-cyan-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(34,211,238,0.1)]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-2xl font-black text-cyan-500 group-hover:text-cyan-400 transition-colors">B-Class</span>
            <ShieldCheck size={20} className="text-cyan-600" />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-mono flex-1 border-t border-cyan-900/50 pt-3">
            Accès aux bilans chirurgicaux, prescriptions de poisons et données biométriques de base. <br/><span className="text-cyan-500/70 mt-2 block">Accès: Médecins Actifs, Chūnin.</span>
          </p>
        </div>

        {/* Niveau A */}
        <div className="flex flex-col group p-5 bg-purple-950/20 border border-purple-900/30 rounded-xl hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.1)]">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-2xl font-black text-purple-500 group-hover:text-purple-400 transition-colors">A-Class</span>
            <ShieldAlert size={20} className="text-purple-600" />
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-mono flex-1 border-t border-purple-900/50 pt-3">
            Rapports d'autopsie avancés, profils ADN, dossiers psychiatriques. <br/><span className="text-purple-500/70 mt-2 block">Accès: Médecin-Chef, Maître Légiste.</span>
          </p>
        </div>

        {/* Niveau S */}
        <div className="flex flex-col group p-5 bg-red-950/20 border border-red-900/30 rounded-xl hover:border-red-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(220,38,38,0.1)] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-8 h-8 bg-red-600 rotate-45 translate-x-4 -translate-y-4"></div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-2xl font-black text-red-500 group-hover:text-red-400 transition-colors text-glow-red">S-Class</span>
            <FolderLock size={20} className="text-red-600" />
          </div>
          <p className="text-sm text-red-200/80 leading-relaxed font-mono flex-1 border-t border-red-900/50 pt-3">
            Registres de Kinjutsu, stockages Dōjutsu, expérimentations classifiées. <br/><span className="text-red-500 font-bold mt-2 block">Accès: Mizukage Uniquement.</span>
          </p>
        </div>
      </div>
    </Panel>

    <Divider symbol="dot" />

    {/* TERMINAL DE DONNÉES */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Panel className="lg:col-span-2 border-slate-700/50 bg-black flex flex-col font-mono relative overflow-hidden" hover={false}>
        {/* En-tête Terminal */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-slate-500 tracking-widest">KIRI_MED_OS v3.1.4 - SYSTEM_TERMINAL</span>
          <Terminal size={14} className="text-slate-500" />
        </div>

        {/* Contenu Terminal */}
        <div className="mt-12 p-2 space-y-4 text-sm">
          <div className="text-green-400">
            <span className="opacity-50">root@kirigakure-med:~$</span> ./init_dossier.sh --post-mortem
          </div>
          <div className="text-slate-300 pl-4 border-l-2 border-slate-800 space-y-2">
            <p>[INFO] Initialisation du rapport d'autopsie...</p>
            <p>[INFO] Chargement du protocole légiste... <span className="text-green-400">OK</span></p>
          </div>
          
          <div className="text-green-400">
            <span className="opacity-50">root@kirigakure-med:~$</span> cat format_rapport_post_mortem.txt
          </div>
          
          <div className="bg-slate-900/50 p-6 rounded border border-slate-800 text-cyan-100/90 leading-relaxed">
            <div className="text-cyan-500 mb-6 font-bold border-b border-slate-700 pb-2 flex justify-between">
              <span>=== MODÈLE : RAPPORT D'EXPERTISE POST-MORTEM ===</span>
              <span>REF: PM-{Math.floor(Math.random() * 90000) + 10000}-KR</span>
            </div>
            
            {/* 1. Identification */}
            <div className="mb-6">
              <h4 className="text-cyan-400 font-bold mb-2">1. IDENTIFICATION DU SUJET</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm border-l-2 border-slate-800 pl-3">
                <p><span className="text-slate-500">Nom/Prénom:</span> [CLASSIFIÉ]</p>
                <p><span className="text-slate-500">Âge/Sexe:</span> ____ / ____</p>
                <p><span className="text-slate-500">Groupe Sanguin:</span> [ A / B / AB / O ] [ +/- ]</p>
                <p><span className="text-slate-500">Niveau Accréditation:</span> [ C / B / A / S ]</p>
                <p><span className="text-slate-500">Grade:</span> ____</p>
              </div>
            </div>

            {/* 2. Examen Externe */}
            <div className="mb-6">
              <h4 className="text-cyan-400 font-bold mb-2">2. EXAMEN EXTERNE</h4>
              <div className="space-y-2 text-sm border-l-2 border-slate-800 pl-3">
                <p><span className="text-slate-500">État général et Rigidité cadavérique:</span> <span className="border-b border-slate-700/50 border-dashed inline-block w-64"></span></p>
                <p><span className="text-slate-500">Blessures visibles (lacérations, brûlures):</span></p>
                <div className="border border-slate-800 border-dashed h-10 w-full bg-black/20"></div>
                <p><span className="text-slate-500">Anomalies physiques notables:</span> <span className="border-b border-slate-700/50 border-dashed inline-block w-64"></span></p>
              </div>
            </div>

            {/* 3. Examen Interne */}
            <div className="mb-6">
              <h4 className="text-cyan-400 font-bold mb-2">3. EXAMEN INTERNE</h4>
              <div className="space-y-2 text-sm border-l-2 border-slate-800 pl-3">
                <p><span className="text-slate-500">État des organes vitaux:</span></p>
                <div className="border border-slate-800 border-dashed h-10 w-full bg-black/20"></div>
                <p><span className="text-slate-500">Lésions internes & Foyers d'hémorragies:</span></p>
                <div className="border border-slate-800 border-dashed h-10 w-full bg-black/20"></div>
              </div>
            </div>

            {/* 4. Conclusion */}
            <div>
              <h4 className="text-cyan-400 font-bold mb-2">4. CONCLUSION LÉGISTE</h4>
              <div className="grid grid-cols-2 gap-4 text-sm border-l-2 border-slate-800 pl-3 mb-4">
                <p><span className="text-slate-500">Heure approx. du décès:</span> ____:____</p>
                <p><span className="text-slate-500">Cause exacte de la mort:</span> <span className="border-b border-slate-700/50 border-dashed inline-block w-32"></span></p>
              </div>
              <div className="text-sm border-l-2 border-slate-800 pl-3 space-y-2">
                <p><span className="text-slate-500">Arme ou Jutsu hypothétique responsable:</span></p>
                <div className="border border-slate-800 border-dashed h-10 w-full bg-black/20"></div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <div className="text-right">
                  <span className="text-slate-500 text-xs block mb-1">Visa du Médecin Légiste:</span>
                  <div className="border border-slate-800 border-dashed h-12 w-32 flex items-center justify-center bg-black/20">
                    <Fingerprint size={24} className="text-cyan-900/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-green-400 flex items-center gap-2">
            <span className="opacity-50">root@kirigakure-med:~$</span> <div className="w-2 h-4 bg-green-400 animate-pulse"></div>
          </div>
        </div>
      </Panel>

      <div className="space-y-8 flex flex-col">
        <Panel className="border-red-900/30 bg-gradient-to-bl from-kiri-950 to-red-950/20 flex-1">
          <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-3 border-b border-red-900/50 pb-3">
            <Database size={20} /> Protection des Données
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Les archives médicales de Kirigakure ne sont pas que du papier. Elles contiennent les faiblesses génétiques, les maladies et les limites de chaque ninja du village.
          </p>
          <ul className="space-y-3 font-mono text-xs">
            <li className="p-3 bg-black/40 rounded border border-red-900/30 flex items-start gap-3">
              <ShieldAlert size={14} className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-slate-400">Tout dossier sortant de l'enceinte de l'hôpital doit être scellé avec un Fūinjutsu d'auto-combustion.</span>
            </li>
            <li className="p-3 bg-black/40 rounded border border-red-900/30 flex items-start gap-3">
              <ShieldAlert size={14} className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-slate-400">Tentative de piratage du réseau d'information = Exécution.</span>
            </li>
          </ul>
        </Panel>

        <Panel className="border-cyan-900/30 bg-gradient-to-tl from-kiri-950 to-cyan-950/20">
          <h3 className="text-lg font-bold text-cyan-400 mb-6 flex items-center gap-3 border-b border-cyan-900/50 pb-3">
            <HardDrive size={20} /> Base de Données Biométrique
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-mono">
            Chaque shinobi blessé gravement subit un prélèvement sanguin obligatoire. Les échantillons sont stockés dans la section la plus reculée et gardée de l'hôpital. Cela permet de :
          </p>
          <ul className="list-disc list-inside text-sm text-slate-400 mt-4 space-y-2 pl-2">
            <li>Identifier les cadavres mutilés.</li>
            <li>Préparer des transfusions d'urgence (clones sanguins).</li>
            <li>Étudier les Kekkei Genkai en secret.</li>
          </ul>
        </Panel>
      </div>
    </div>
  </div>
);

export default AdministrationDOSS;