import React, { useState } from 'react';
import { 
  Syringe, Activity, Biohazard, AlertOctagon, Crosshair, 
  Scissors, AlertTriangle, Flame, Zap, Brain, Droplets, Bone
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import CollapsibleGradient from '../components/CollapsibleGradient';
import Divider from '../components/Divider';

const ProceduresOperatoires = () => {
  const [activeTab, setActiveTab] = useState('theorie');

  return (
    <div className="space-y-12 pb-10">
      <SectionHeader icon={Syringe} title="III. Interventions d’Urgence" subtitle="Soins immédiats, traumatologie et médecine de front" />

      {/* Navigation Tabs Centered & Enhanced */}
      <div className="flex justify-center mb-14 relative z-20">
        <div className="inline-flex bg-kiri-950/80 p-2.5 rounded-[2rem] border border-slate-700/50 shadow-2xl backdrop-blur-xl relative">
          {/* Indicateur de fond actif animé */}
          <div 
            className="absolute top-2.5 bottom-2.5 w-[calc(50%-10px)] rounded-full transition-transform duration-500 ease-out z-0"
            style={{ 
              transform: activeTab === 'theorie' ? 'translateX(0)' : 'translateX(100%)',
              background: activeTab === 'theorie' 
                ? 'linear-gradient(90deg, rgba(234,88,12,0.8), rgba(220,38,38,0.8))' 
                : 'linear-gradient(90deg, rgba(6,182,212,0.8), rgba(59,130,246,0.8))',
              boxShadow: activeTab === 'theorie'
                ? '0 0 20px rgba(234,88,12,0.4)'
                : '0 0 20px rgba(6,182,212,0.4)'
            }}
          ></div>

          <button
            onClick={() => setActiveTab('theorie')}
            className={`relative flex items-center justify-center gap-3 w-48 py-4 rounded-full font-bold transition-all duration-500 z-10 ${
              activeTab === 'theorie' 
                ? 'text-white' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brain className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'theorie' ? 'scale-110 animate-pulse' : ''}`} />
            <span className="tracking-widest uppercase text-xs">Théorie</span>
          </button>
          
          <button
            onClick={() => setActiveTab('protocoles')}
            className={`relative flex items-center justify-center gap-3 w-48 py-4 rounded-full font-bold transition-all duration-500 z-10 ${
              activeTab === 'protocoles' 
                ? 'text-white' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Crosshair className={`w-5 h-5 transition-transform duration-300 ${activeTab === 'protocoles' ? 'scale-110 animate-pulse' : ''}`} />
            <span className="tracking-widest uppercase text-xs">Protocoles</span>
          </button>
        </div>
      </div>

      <div className="transition-all duration-700 animate-fade-in-up">
        {activeTab === 'theorie' && (
          <div className="space-y-12">
            {/* Traumatologie et Genjutsu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Panel className="border-orange-900/40 bg-gradient-to-br from-kiri-950 to-orange-950/20" hover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4 border-b border-orange-900/50 pb-4">
                  <div className="p-2 bg-orange-900/40 rounded-xl"><Activity className="text-orange-400" size={24}/></div>
                  Traumatologie Élémentaire
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed italic border-l-2 border-orange-500/50 pl-4">Le médecin doit impérativement distinguer la nature élémentaire d'une blessure pour ne pas aggraver le pronostic vital.</p>
                <div className="space-y-5">
                  <div className="p-5 bg-black/50 border border-slate-800 rounded-xl relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
                    <h4 className="text-orange-400 font-bold text-sm mb-2 flex items-center gap-2 uppercase tracking-widest"><Flame size={16}/> Lésions Katon</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Nécrose de coagulation. Exige un débridement chirurgical immédiat pour éviter la putréfaction des tissus.
                    </p>
                  </div>
                  <div className="p-5 bg-black/50 border border-slate-800 rounded-xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                    <h4 className="text-blue-400 font-bold text-sm mb-2 flex items-center gap-2 uppercase tracking-widest"><Zap size={16}/> Lésions Raiton</h4>
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      Dégâts internes invisibles. Le courant traverse les nerfs et vaisseaux sanguins.
                    </p>
                    <div className="text-xs bg-blue-950/30 p-2 rounded text-blue-200 border border-blue-900/50">
                      <strong className="text-blue-400">Risques :</strong> Arrêt cardiaque (asystolie) et rhabdomyolyse sévère.
                    </div>
                  </div>
                </div>
              </Panel>

              <Panel className="border-purple-900/40 bg-gradient-to-br from-kiri-950 to-purple-950/20" hover={false}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4 border-b border-purple-900/50 pb-4">
                  <div className="p-2 bg-purple-900/40 rounded-xl"><Brain className="text-purple-400" size={24}/></div>
                  Pathologie Cognitive
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed italic border-l-2 border-purple-500/50 pl-4">Les illusions ne sont pas que des mirages. Ce sont des agressions physiques directes sur le SNC.</p>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-800"></div>
                  
                  <div className="space-y-6">
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-purple-900/80 border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                      <h4 className="text-purple-400 font-bold text-sm mb-1 uppercase tracking-widest">Le Traumatisme</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">Les Genjutsu altèrent de force le flux de chakra dans le cortex cérébral.</p>
                    </div>
                    
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-900/80 border-2 border-red-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                      <h4 className="text-red-400 font-bold text-sm mb-1 uppercase tracking-widest">Conséquences</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">Transmission de signaux aberrants, menant à la catatonie ou à des lésions cérébrales.</p>
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-cyan-900/80 border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                      <h4 className="text-cyan-400 font-bold text-sm mb-1 uppercase tracking-widest">Traitement</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">Réinitialisation invasive du flux neuro-chakratique par Iryō-Ninjutsu pour purger le système.</p>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>

            <Divider symbol="cross" />

            <Panel className="flex flex-col bg-kiri-950 border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-serif text-white mb-6 border-b border-slate-700/50 pb-4 flex items-center gap-4">
                <span className="w-10 h-1 bg-cyan-500 rounded-full"></span>
                Arsenal Ninjutsu Médical
              </h3>
              
              <div className="bg-slate-900/40 p-5 rounded-xl border-l-2 border-cyan-500/50 mb-8 text-sm text-slate-300 leading-relaxed">
                <strong className="text-cyan-400 block mb-2 font-mono uppercase tracking-widest text-xs">Accréditation Progressive</strong>
                Système en 4 niveaux d’accès au savoir médical. Tout le monde commence basique (soins de survie sans chakra) et progresse uniquement par preuves sur le terrain. Chaque palier débloque des compétences plus dangereuses jusqu’aux connaissances interdites. Ce n’est pas une hiérarchie de force, mais des autorisations progressives à manipuler la vie et la mort.
              </div>
              
              <CollapsibleGradient maxHeight="600px" buttonTextClosed="Déployer l'arsenal médical complet" className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { name: 'Paume Mystique (Shōsen Jutsu)', level: 1, classif: 'Ninjutsu Médical pur', color: 'cyan', desc: 'Application directe de chakra sur une plaie pour accélérer drastiquement la coagulation et la cicatrisation. Immobilise le patient et le soigneur pendant le processus constant de guérison.' },
                    { name: 'Paume de Guérison (Chikatsu Saisei)', level: 2, classif: 'Médical, Coopération, Supplémentaire', color: 'blue', desc: 'Procédure chirurgicale lourde reconstituant des tissus ou organes détruits via un médium génétique (ex: cheveux). Nécessite une unité de soins intensifs et des relais de médecins.' },
                    { name: 'Extraction de Maladie (Saikan Chūshutsu)', level: 1, classif: 'Ninjutsu Médical pur', color: 'cyan', desc: 'Utilisation d\'un fluide aqueux et d\'un scalpel de chakra pour inciser, attirer et extraire un poison ou un pathogène du corps du patient pour ensuite l\'analyser.' },
                    { name: 'Activation Cellulaire (Saibō no Kasseijutsu)', level: 3, classif: 'Médical, Régénération, Supplémentaire', color: 'purple', desc: 'Stimulation simultanée de l\'intégralité des cellules d\'un patient pour forcer l\'organisme à s\'autoréparer pendant une chirurgie à très haut risque.' },
                    { name: 'Scalpel de Chakra (Chakura no Mesu)', level: 1, classif: 'Médical, Offensif, Supplémentaire', color: 'cyan', desc: 'Formation d\'une lame de chakra aiguisée autour des mains. Utilisé en chirurgie pour inciser sans ouvrir la peau, ou en combat pour sectionner muscles, tendons et artères de l\'intérieur.' },
                    { name: 'Perturbation des Voies (Ranshinshō)', level: 3, classif: 'Médical, Offensif (Débat: Raiton)', color: 'purple', desc: 'Conversion du chakra médical en électricité injectée dans le système nerveux central. Brouille totalement la coordination motrice (ex: vouloir bouger le bras droit fait bouger la jambe gauche).' },
                    { name: 'Médecine Sombre (Ankoku Ijutsu)', level: 3, classif: 'Ninjutsu Médical, Offensif', color: 'purple', desc: 'Pratique occulte utilisant des serpents de chakra sombre pour effectuer des chirurgies internes létales visant à tuer, torturer ou mutiler la cible de l\'intérieur.' },
                    { name: 'Anesthésie Secrète (Masui Sejutsu)', level: 4, classif: 'Ninjutsu Médical, Supplémentaire', color: 'red', desc: 'Morsure par des serpents de chakra engendrant un gonflement violacé des veines et une paralysie temporaire immédiate du système moteur de la cible.' },
                    { name: 'Injection de Chakra (Fortifiante)', level: 4, classif: 'Ninjutsu Médical, Supplémentaire', color: 'red', desc: 'Infusion d\'un chakra médical obscur permettant de surcharger l\'endurance et la puissance des alliés, décuplant leur force au détriment de leur santé à long terme.' },
                    { name: 'Soins à Grande Échelle (Kōiki Kaifuku)', level: 4, classif: 'Ninjutsu Médical pur, Supplémentaire', color: 'red', desc: 'Technique de base permettant de soigner simultanément jusqu\'à trois cibles alliées sur un champ de bataille, ou un membre de l\'escouade en retrait.' },
                    { name: 'Transfert de Chakra (Chakura Jōto)', level: 2, classif: 'Ninjutsu, Ninjutsu Médical', color: 'blue', desc: 'Transfert pur du propre chakra de l\'utilisateur vers une cible pour restaurer son endurance, soigner ses blessures internes ou amplifier ses propres techniques.' },
                    { name: 'Auto-Guérison (Jiko Saiseijutsu)', level: 4, classif: 'Médical, Technique de Régénération', color: 'red', desc: 'Régénération massive permettant de reconstituer des membres entiers ou des organes vitaux. Dépend souvent d\'un noyau interne stabilisateur ou d\'une manipulation génétique artificielle complexe.' },
                    { name: 'Suiton Médical : Moustiques d\'Eau', level: 2, classif: 'Médical, Élémentaire (Eau/Suiton)', color: 'blue', desc: 'Création d\'insectes aqueux qui s\'infiltrent dans le corps pour extraire et annuler les poisons toxiques. Procédure décrite comme extrêmement douloureuse.' },
                    { name: 'Brume Empoisonnée (Dokugiri)', level: 3, classif: 'Médical, Offensif, Poison', color: 'purple', desc: 'Conversion du chakra en une brume toxique chimique crachée par la bouche. L\'inhalation est souvent fatale ou entraîne une paralysie systémique instantanée.' },
                  ].map(({ name, level, classif, color, desc }) => (
                    <div key={name} className="p-5 bg-black/40 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors relative overflow-hidden group flex flex-col">
                      <div className={`absolute top-0 left-0 bottom-0 w-1 bg-${color}-500 shadow-[0_0_10px_currentColor] text-${color}-500`}></div>
                      <div className="flex justify-between items-start mb-3">
                        <strong className={`text-${color}-400 text-sm font-bold tracking-wider uppercase group-hover:text-glow-${color === 'emerald' ? 'cyan' : color} transition-all`}>{name}</strong>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded bg-${color}-950 border border-${color}-900 text-${color}-300 shrink-0 ml-4`}>NIV {level}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest border-b border-slate-800/50 pb-2">{classif}</span>
                      <span className="text-slate-400 text-sm leading-relaxed flex-1 pt-1">{desc}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleGradient>
            </Panel>

            {/* Avertissement Critique */}
            <div className="p-8 lg:p-10 bg-red-950/40 border border-red-600/50 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.15)] flex gap-6 items-start relative overflow-hidden group mt-12">
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 rotate-12 scale-150 pointer-events-none">
                <AlertTriangle size={200} className="text-red-500" />
              </div>
              <div className="p-4 bg-red-900/50 rounded-2xl shrink-0 mt-1 relative z-10 border border-red-500/30">
                <AlertTriangle className="text-red-500 animate-pulse" size={36} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-red-400 mb-4 uppercase tracking-widest text-glow-red">Danger : L'Épuisement du Chakra</h3>
                <p className="text-base text-red-100/90 leading-relaxed">
                  Le médecin shinobi maintient un flux intracellulaire constant. S'il ne gère pas ses réserves, le corps, vidé de son énergie vitale, cannibalise la viabilité de ses propres cellules. Cet état conduit inexorablement au coma puis à la mort cellulaire systémique. 
                  <br/><br/>
                  <strong className="text-white bg-red-900/80 px-4 py-1.5 rounded inline-block border border-red-500/50 uppercase tracking-widest text-xs font-mono shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                    Un médecin épuisé est un cadavre en sursis.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'protocoles' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Panel className="border-slate-700/50 bg-gradient-to-br from-kiri-950 to-slate-900">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-4 border-b border-slate-700/50 pb-4">
                  <div className="p-2.5 bg-slate-800 rounded-xl border border-slate-700"><Crosshair className="text-slate-400" size={20}/></div>
                  Protocoles de Survie
                </h3>
                
                <div className="relative pl-6 space-y-8">
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-slate-800"></div>
                  
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    </div>
                    <strong className="text-emerald-400 font-mono tracking-widest uppercase text-xs block mb-2">Phase I : Urgence immédiate</strong>
                    <span className="text-slate-300 text-sm leading-relaxed block p-4 bg-black/30 border border-slate-800 rounded-xl">Empêcher la mort immédiate : arrêt d'hémorragie massive, position latérale (PLS), maintien des voies respiratoires.</span>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-red-950 border-2 border-red-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    </div>
                    <strong className="text-red-400 font-mono tracking-widest uppercase text-xs block mb-2">Phase II : Sous le feu</strong>
                    <span className="text-slate-300 text-sm leading-relaxed block p-4 bg-black/30 border border-slate-800 rounded-xl">Interdiction d'intervenir à découvert. Autosoins (garrots) pour les blessés conscients. Taijutsu défensif (désaxement) pour le médecin.</span>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-cyan-950 border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    </div>
                    <strong className="text-cyan-400 font-mono tracking-widest uppercase text-xs block mb-2">Phase III : Stabilisation Tactique</strong>
                    <span className="text-slate-300 text-sm leading-relaxed block p-4 bg-black/30 border border-slate-800 rounded-xl">Rendre le patient transportable : perfusion/remplacement sanguin, immobilisation des fractures, contrôle température.</span>
                  </div>
                </div>
              </Panel>

              <Panel className="border-red-900/50 bg-gradient-to-br from-kiri-950 to-red-950/30 relative overflow-hidden flex flex-col justify-center">
                <Biohazard size={200} className="absolute -right-10 -bottom-10 text-red-900/20 pointer-events-none" />
                <div className="relative z-10 text-center px-4">
                  <div className="inline-flex p-4 bg-red-900/30 rounded-full border border-red-500/50 mb-6 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                    <AlertOctagon size={48} className="text-red-500" />
                  </div>
                  <h3 className="text-2xl font-black text-red-400 mb-4 uppercase tracking-widest">Quarantaine</h3>
                  <p className="text-sm text-red-200/80 leading-relaxed font-mono max-w-sm mx-auto">
                    Isolement total immédiat en cas d'infection aéroportée ou parasites. <br/><br/>
                    <strong className="text-white bg-red-600 px-3 py-1 rounded shadow-[0_0_15px_rgba(220,38,38,0.8)]">INCINÉRATION</strong><br/>
                    systématique de l'équipement contaminé.
                  </p>
                </div>
              </Panel>
            </div>

            <Divider symbol="diamond" />

            {/* PROTOCOLES OPÉRATOIRES */}
            <h3 className="text-3xl font-serif text-white mb-10 text-center">Fiches Opératoires</h3>

            {/* PROTOCOLE DES COUPURES */}
            <Panel className="border-cyan-900/30 bg-kiri-950">
              <h4 className="text-xl font-bold text-cyan-400 mb-8 flex items-center gap-3 border-b border-slate-700/50 pb-4 tracking-wider">
                <Droplets className="text-cyan-400 shrink-0"/> Protocole d'Incision & Lacération
              </h4>
              <div className="space-y-6">
                <div className="p-6 bg-black/40 border border-emerald-900/30 rounded-xl relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-emerald-400 font-bold text-lg">Petite Entaille</h5>
                    <span className="font-mono text-xs text-emerald-300 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">Roll 67-100</span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm pl-4 font-mono">
                    <li><strong className="text-emerald-200">Décontamination:</strong> Irrigation sérum physio + antiseptique.</li>
                    <li><strong className="text-emerald-200">Hémostase:</strong> Baume cicatrisant hémostatique.</li>
                    <li><strong className="text-emerald-200">Contention:</strong> Pansement adhésif stérile.</li>
                  </ol>
                </div>

                <div className="p-6 bg-black/40 border border-orange-900/30 rounded-xl relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-orange-400 font-bold text-lg">Moyenne Entaille</h5>
                    <span className="font-mono text-xs text-orange-300 bg-orange-950 border border-orange-800 px-3 py-1 rounded-full">Roll 34-66</span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm pl-4 font-mono">
                    <li><strong className="text-orange-200">Exploration:</strong> Vérification absence corps étrangers (shuriken).</li>
                    <li><strong className="text-orange-200">Anesthésie:</strong> Infiltration lidocaïne 2% (berges).</li>
                    <li><strong className="text-orange-200">Suture:</strong> Fil monofilament (3-0). Affrontement bord à bord.</li>
                  </ol>
                </div>

                <div className="p-6 bg-black/40 border border-red-900/30 rounded-xl relative overflow-hidden group shadow-[0_0_20px_rgba(220,38,38,0.05)]">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-red-400 font-bold text-lg">Ouverture Cavitaire Massive</h5>
                    <span className="font-mono text-xs text-red-300 bg-red-950 border border-red-800 px-3 py-1 rounded-full flex gap-2"><span>Roll 1-33</span> <span className="text-red-500 font-bold">URGENCE</span></span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-3 text-sm pl-4 leading-relaxed font-mono">
                    <li><strong className="text-red-200">Hémostase:</strong> Garrot tactique ou <em className="text-red-400 font-bold">packing</em> (remplissage gaze hémostatique).</li>
                    <li><strong className="text-red-200">Hypovolémie:</strong> 2 voies veineuses périphériques. Perfusion O-.</li>
                    <li><strong className="text-red-200">Chirurgie:</strong> Débridement tissus nécrosés.</li>
                    <li>
                      <strong className="text-red-200">Suture Étagée:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1 text-slate-400">
                        <li>Profond (Muscles): Fil résorbable tressé + <em className="text-cyan-400">Fils de Chakra</em> (Optionnel).</li>
                        <li>Superficiel (Peau): Suture lourde.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </Panel>

            {/* PROTOCOLE OSTÉOSYNTHÈSE */}
            <Panel className="border-indigo-900/30 bg-kiri-950">
              <h4 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-3 border-b border-slate-700/50 pb-4 tracking-wider">
                <Bone className="text-indigo-400 shrink-0"/> Ostéosynthèse & Squelette
              </h4>
              <div className="space-y-6">
                <div className="p-6 bg-black/40 border border-emerald-900/30 rounded-xl relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-emerald-400 font-bold text-lg">Fracture Incomplète</h5>
                    <span className="font-mono text-xs text-emerald-300 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">Roll 67-100</span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm pl-4 font-mono">
                    <li><strong className="text-emerald-200">Contention:</strong> Attelle rigide thermoformable.</li>
                    <li><strong className="text-emerald-200">Thérapie:</strong> <em className="text-indigo-300">Paume Osseuse</em> (stimulation ostéoblastes).</li>
                  </ol>
                </div>

                <div className="p-6 bg-black/40 border border-orange-900/30 rounded-xl relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-orange-400 font-bold text-lg">Fracture avec Déplacement</h5>
                    <span className="font-mono text-xs text-orange-300 bg-orange-950 border border-orange-800 px-3 py-1 rounded-full">Roll 34-66</span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm pl-4 font-mono">
                    <li><strong className="text-orange-200">Sédation:</strong> Anesthésie générale (relâchement musculaire).</li>
                    <li><strong className="text-orange-200">Exposition:</strong> Incision, pose d'écarteurs Farabeuf.</li>
                    <li><strong className="text-orange-200">Réduction:</strong> Traction manuelle via davier à os.</li>
                    <li><strong className="text-orange-200">Fixation:</strong> Plaque d'ostéosynthèse en titane vissée.</li>
                  </ol>
                </div>

                <div className="p-6 bg-black/40 border border-red-900/30 rounded-xl relative overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.05)]">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-red-400 font-bold text-lg">Comminutive Ouverte (Broyée)</h5>
                    <span className="font-mono text-xs text-red-300 bg-red-950 border border-red-800 px-3 py-1 rounded-full flex gap-2"><span>Roll 1-33</span> <span className="text-red-500 font-bold">URGENCE</span></span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-3 text-sm pl-4 leading-relaxed font-mono">
                    <li><strong className="text-red-200">Infection:</strong> Triple dose d'antibiotiques immédiate. Lavage massif.</li>
                    <li><strong className="text-red-200">Protocole Séquestre:</strong> Retrait méticuleux de chaque éclat d'os mort pour éviter l'ostéomyélite.</li>
                    <li><strong className="text-red-200">Fixation:</strong> Pose d'un Fixateur Externe. Fiches métalliques dans l'os sain traversant la peau, reliées par une barre externe.</li>
                    <li><strong className="text-red-200">Drainage:</strong> Pose d'un drain de Redon.</li>
                  </ol>
                </div>
              </div>
            </Panel>

            {/* PROTOCOLE BRÛLURES */}
            <Panel className="border-orange-900/30 bg-kiri-950">
              <h4 className="text-xl font-bold text-orange-400 mb-8 flex items-center gap-3 border-b border-slate-700/50 pb-4 tracking-wider">
                <Flame className="text-orange-400 shrink-0"/> Protocole Réanimation Brûlures
              </h4>
              <div className="space-y-6">
                <div className="p-6 bg-black/40 border border-emerald-900/30 rounded-xl relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-emerald-400 font-bold text-lg">Brûlure 1er Degré</h5>
                    <span className="font-mono text-xs text-emerald-300 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">Roll 67-100</span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm pl-4 font-mono">
                    <li><strong className="text-emerald-200">Refroidissement:</strong> Compresses stériles (15 min minimum).</li>
                    <li><strong className="text-emerald-200">Topique:</strong> Gel d'aloès médical.</li>
                  </ol>
                </div>

                <div className="p-6 bg-black/40 border border-orange-900/30 rounded-xl relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-orange-400 font-bold text-lg">Brûlure 2ème Degré</h5>
                    <span className="font-mono text-xs text-orange-300 bg-orange-950 border border-orange-800 px-3 py-1 rounded-full">Roll 34-66</span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-2 text-sm pl-4 font-mono">
                    <li><strong className="text-orange-200">Asepsie:</strong> Nettoyage bétadine. Drainer les phlyctènes sans retirer le toit.</li>
                    <li><strong className="text-orange-200">Tannage:</strong> Sulfadiazine argentique.</li>
                    <li><strong className="text-orange-200">Pansement:</strong> Tulle gras occlusif.</li>
                  </ol>
                </div>

                <div className="p-6 bg-black/40 border border-red-900/30 rounded-xl relative overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.05)]">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                  <div className="flex justify-between items-center mb-4 pl-4 border-b border-slate-800 pb-3">
                    <h5 className="text-red-400 font-bold text-lg">Brûlure 3ème Degré (Carbonisation)</h5>
                    <span className="font-mono text-xs text-red-300 bg-red-950 border border-red-800 px-3 py-1 rounded-full flex gap-2"><span>Roll 1-33</span> <span className="text-red-500 font-bold">URGENCE</span></span>
                  </div>
                  <ol className="list-decimal list-inside text-slate-300 space-y-3 text-sm pl-4 leading-relaxed font-mono">
                    <li><strong className="text-red-200">Réa Liquidienne:</strong> Perfusion massive (Formule de Baxter) via G5/Ringer-Lactate. Éviter l'arrêt cardiaque dû à la perte de plasma.</li>
                    <li><strong className="text-red-200">Escharotomie:</strong> Si effet garrot, inciser l'armure de cuir (eschare) jusqu'au vif.</li>
                    <li><strong className="text-red-200">Nécroparage:</strong> Exciser les tissus carbonisés jusqu'à ce que la chair saigne.</li>
                    <li>
                      <strong className="text-red-200">Greffe Cutanée:</strong>
                      <ul className="list-disc list-inside ml-6 mt-1 text-slate-400">
                        <li>Autogreffe (peau saine passée au mésheur).</li>
                        <li><strong className="text-orange-400">Clause Kiri:</strong> Utilisation d'allogreffe de cadavres de la Morgue si patient brûlé à +80%.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </Panel>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceduresOperatoires;