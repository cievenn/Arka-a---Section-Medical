import React from 'react';
import { 
  Scale, 
  ShieldAlert, 
  ChevronRight, 
  AlertOctagon, 
  Activity, 
  HeartPulse, 
  Syringe, 
  FlaskConical, 
  Skull, 
  Brain,
  BookOpen
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import Divider from '../components/Divider';
import ImagePlaceholder from '../components/ImagePlaceholder';
import legalImage from '../assets/legal.png';

const CadreLegal = () => (
  <div className="space-y-20 pb-10">
    {/* SECTION I: Cadre Légal */}
    <div>
      <SectionHeader icon={Scale} title="I. Autorité Médicale et Régulation" subtitle="Organisation, hiérarchie, éthique et administration" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel className="flex flex-col h-full" variant="default">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700/50 pb-4 flex items-center gap-4">
            <div className="p-2 bg-cyan-900/50 rounded-lg"><ShieldAlert className="text-cyan-400" size={24} /></div>
            Les 4 Lois Fondamentales
          </h3>
          <div className="space-y-4 flex-1">
            <div className="group relative overflow-hidden bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></div>
              <div className="flex gap-4 items-start">
                <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">01.</span> 
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">Le médecin ne doit <strong className="text-cyan-300">jamais</strong> cesser le traitement tant que ses coéquipiers respirent.</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></div>
              <div className="flex gap-4 items-start">
                <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">02.</span> 
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">Le médecin ne doit <strong className="text-cyan-300">jamais</strong> s'engager sur la ligne de front. S'exposer est une trahison tactique.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></div>
              <div className="flex gap-4 items-start">
                <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">03.</span> 
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">Le médecin doit être le <strong className="text-cyan-300">dernier survivant</strong> de son peloton. Sa vie garantit celle des autres.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-purple-500/50 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all"></div>
              <div className="flex gap-4 items-start">
                <span className="text-purple-400 font-mono text-xl font-bold shrink-0 mt-0.5">04.</span> 
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">Seuls ceux maîtrisant le Sceau de la Force d'une Centaine (<em className="text-purple-300 font-semibold">Byakugō</em>) sont exemptés de ces règles.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-red-950/60 to-black border border-red-900/50 rounded-xl relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 p-2 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"><AlertOctagon size={120}/></div>
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-3 relative z-10 text-lg uppercase tracking-wide">
              <div className="p-1.5 bg-red-900/50 rounded text-red-400"><AlertOctagon size={18}/></div>
              Déontologie & Bioéthique
            </h4>
            <p className="text-sm text-red-100/80 leading-relaxed relative z-10">
              Interdiction absolue des expérimentations humaines abusives ou manipulations génétiques coercitives. <br/><br/><strong className="text-red-300 px-2 py-1 bg-red-950/50 rounded border border-red-900/30">Note de Kiri :</strong> La réquisition de prisonniers pour "études anatomiques validées" reste soumise à l'approbation stricte du Mizukage.
            </p>
          </div>
        </Panel>

        <div className="space-y-8 flex flex-col">
          <Panel className="flex-1">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-3 flex items-center gap-3">Hiérarchie de la Section</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center p-4 bg-cyan-950/20 hover:bg-cyan-900/30 border border-cyan-900/30 rounded-xl transition-colors cursor-default">
                <span className="text-cyan-400 font-bold flex items-center gap-2"><ChevronRight size={16}/> Médecin-Chef (Mizuiryō)</span> 
                <span className="text-cyan-400/60 text-xs tracking-widest uppercase">Autorité suprême</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-950/20 hover:bg-purple-900/30 border border-purple-900/30 rounded-xl transition-colors cursor-default">
                <span className="text-purple-400 font-bold flex items-center gap-2"><ChevronRight size={16}/> Maître Légiste</span> 
                <span className="text-purple-400/60 text-xs tracking-widest uppercase">Morgue & Expertises</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-xl transition-colors cursor-default">
                <span className="text-slate-200 font-bold flex items-center gap-2"><ChevronRight size={16}/> Iryō-nin Rang A/B</span> 
                <span className="text-slate-500 text-xs tracking-widest uppercase">Chirurgiens Actifs</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/20 hover:bg-slate-800/40 border border-slate-800/50 rounded-xl transition-colors cursor-default">
                <span className="text-slate-400 font-bold flex items-center gap-2"><ChevronRight size={16}/> Apprentis</span> 
                <span className="text-slate-600 text-xs tracking-widest uppercase">Soutien / Stagiaires</span>
              </div>
            </div>
          </Panel>

          <Panel variant="danger">
            <h3 className="text-xl font-bold text-red-200 mb-6 border-b border-red-900/50 pb-3 uppercase tracking-wider text-sm flex items-center gap-2">
              Sanctions Disciplinaires
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col p-4 bg-black/40 border border-yellow-900/30 border-l-4 border-l-yellow-500 rounded-lg hover:bg-black/60 transition-colors">
                <strong className="text-yellow-500 font-mono text-sm mb-2 uppercase tracking-wide">Niveau 1 : Négligence</strong> 
                <span className="text-slate-300 text-sm leading-relaxed">Suspension de chakra temporaire et TIG.</span>
              </li>
              <li className="flex flex-col p-4 bg-black/40 border border-orange-900/30 border-l-4 border-l-orange-500 rounded-lg hover:bg-black/60 transition-colors">
                <strong className="text-orange-500 font-mono text-sm mb-2 uppercase tracking-wide">Niveau 2 : Violation du secret</strong> 
                <span className="text-slate-300 text-sm leading-relaxed">Emprisonnement et marquage d'un sceau de restriction cérébrale. La protection génétique est absolue.</span>
              </li>
              <li className="flex flex-col p-4 bg-black/40 border border-red-900/30 border-l-4 border-l-red-600 rounded-lg relative overflow-hidden group">
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-red-600/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <strong className="text-red-500 font-mono text-sm mb-2 uppercase tracking-wide">Niveau 3 : Trahison ADN</strong> 
                <span className="text-red-200/90 text-sm leading-relaxed relative z-10">Exécution immédiate par la Brigade des Chasseurs de Déserteurs (Oinin).</span>
              </li>
            </ul>
          </Panel>
        </div>
      </div>

      <div className="mt-12">
        <ImagePlaceholder src={legalImage} caption="Schéma Hiérarchique de la Section Médicale" />
      </div>
    </div>

    <Divider symbol="diamond" />

    {/* SECTION II: Organisation et Doctrine Médicale */}
    <div>
      <SectionHeader icon={Activity} title="II. Organisation et Doctrine" subtitle="Structure Opérationnelle et Fonctions Spécialisées" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Panel className="bg-gradient-to-br from-kiri-950 to-cyan-950/20 relative overflow-hidden group" hover={true}>
          <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-700"><HeartPulse size={160} /></div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-5 flex items-center gap-3 relative z-10">
            <HeartPulse size={26} className="text-cyan-400" /> Définition du Médecin Ninja
          </h3>
          <p className="text-slate-300 text-base leading-relaxed relative z-10">
            Le médecin ninja (<em className="text-cyan-300 font-semibold">Iryō-nin</em>) est une unité hybride : force militaire, soigneur et scientifique. Véritable pilier de survie, il gère le diagnostic tactique, la chirurgie d'urgence et la recherche sous pression extrême. Sa pratique exige une maîtrise millimétrée du chakra pour stimuler la régénération et neutraliser les traumatismes, où la moindre erreur peut être fatale.
          </p>
        </Panel>

        <Panel className="bg-gradient-to-br from-kiri-950 to-purple-950/20 relative overflow-hidden group" hover={true}>
          <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-700"><BookOpen size={160} /></div>
          <h3 className="text-2xl font-bold text-purple-400 mb-5 flex items-center gap-3 relative z-10">
            <BookOpen size={26} className="text-purple-400" /> Doctrine de Formation
          </h3>
          <p className="text-slate-300 text-base leading-relaxed relative z-10">
            La formation médicale impose une progression stricte. Il est mortellement dangereux de tenter de maîtriser toutes les branches simultanément. L'accès aux techniques de haut niveau ou recherches sensibles est conditionné par des évaluations drastiques des chefs de section, afin de prévenir les dérives éthiques et accidents.
          </p>
        </Panel>
      </div>

      {/* Les 5 Unités Spécialisées */}
      <h3 className="text-2xl lg:text-3xl font-serif text-white mb-10 flex items-center gap-4">
        <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
        Les 5 Unités Spécialisées
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Unité 1 */}
        <Panel className="flex flex-col group border-slate-800 hover:border-cyan-500/50" hover={false}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 bg-cyan-950/60 rounded-xl text-cyan-400 border border-cyan-900/50 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:scale-110 transition-transform duration-500"><Activity size={24} /></div>
            <div>
              <div className="text-xs text-cyan-400 font-mono uppercase tracking-[0.2em] mb-1">L'Avant-Garde</div>
              <h4 className="font-bold text-white text-lg leading-tight">1. Unité de Traumatologie</h4>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-300 flex-1 bg-black/20 p-5 rounded-xl border border-slate-800/50">
            <p><strong className="text-cyan-200 block mb-1">Rôle</strong> Soins au Combat Tactique (TCCC) et triage algorithmique (START/SALT).</p>
            <p><strong className="text-cyan-200 block mb-1">Actes</strong> Stabilisation des hémorragies massives, pneumothorax, garrots de chakra.</p>
            <p><strong className="text-cyan-200 block mb-1">Matériel</strong> Pilules Hyōrōgan (ATP), Sang universel (O-).</p>
          </div>
        </Panel>

        {/* Unité 2 */}
        <Panel className="flex flex-col group border-slate-800 hover:border-emerald-500/50" hover={false}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 bg-emerald-950/60 rounded-xl text-emerald-400 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-500"><Syringe size={24} /></div>
            <div>
              <div className="text-xs text-emerald-400 font-mono uppercase tracking-[0.2em] mb-1">Le Bloc</div>
              <h4 className="font-bold text-white text-lg leading-tight">2. Unité de Chirurgie</h4>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-300 flex-1 bg-black/20 p-5 rounded-xl border border-slate-800/50">
            <p><strong className="text-emerald-200 block mb-1">Rôle</strong> Réparations structurelles lourdes et reconstruction tissulaire.</p>
            <p><strong className="text-emerald-200 block mb-1">Actes</strong> Incisions moléculaires via Bistouri de Chakra (Chakra no Mesu).</p>
            <p><strong className="text-emerald-200 block mb-1">Recherche</strong> Techniques Rang S (ex: Chikatsu Saisei) pour reconstituer des membres.</p>
          </div>
        </Panel>

        {/* Unité 3 */}
        <Panel className="flex flex-col group border-slate-800 hover:border-amber-500/50" hover={false}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 bg-amber-950/60 rounded-xl text-amber-400 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:scale-110 transition-transform duration-500"><FlaskConical size={24} /></div>
            <div>
              <div className="text-xs text-amber-400 font-mono uppercase tracking-[0.2em] mb-1">Le Labo</div>
              <h4 className="font-bold text-white text-lg leading-tight">3. Unité Scientifique</h4>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-300 flex-1 bg-black/20 p-5 rounded-xl border border-slate-800/50">
            <p><strong className="text-amber-200 block mb-1">Rôle</strong> Identification des menaces biochimiques, synthèse d'antidotes.</p>
            <p><strong className="text-amber-200 block mb-1">Actes</strong> Extraction Délicate de Maladie (Saikan Chuushutsu), pharmacocinétique.</p>
            <p><strong className="text-amber-200 block mb-1">Botanique</strong> Raffinement de plantes rares (Herbe d'Armure, Racine de Dragon).</p>
          </div>
        </Panel>

        {/* Unité 4 */}
        <Panel className="flex flex-col group border-slate-800 hover:border-slate-400/50" hover={false}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 bg-slate-800/80 rounded-xl text-slate-300 border border-slate-700/50 shadow-[0_0_15px_rgba(148,163,184,0.15)] group-hover:scale-110 transition-transform duration-500"><Skull size={24} /></div>
            <div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-[0.2em] mb-1">La Section Noire</div>
              <h4 className="font-bold text-white text-lg leading-tight">4. Morgue & Renseignement</h4>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-300 flex-1 bg-black/20 p-5 rounded-xl border border-slate-800/50">
            <p><strong className="text-slate-200 block mb-1">Rôle</strong> Autopsies, prélèvement ADN et contre-espionnage biologique.</p>
            <p><strong className="text-slate-200 block mb-1">Actes</strong> Détection de lésions cellulaires invisibles (Jūken, Rasengan).</p>
            <p><strong className="text-slate-200 block mb-1">Conservation</strong> Banque de souches cellulaires et Dōjutsu sous stase.</p>
          </div>
        </Panel>

        {/* Unité 5 */}
        <Panel className="flex flex-col group border-slate-800 hover:border-indigo-500/50 md:col-span-2 lg:col-span-2" hover={false}>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 bg-indigo-950/60 rounded-xl text-indigo-400 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.15)] group-hover:scale-110 transition-transform duration-500"><Brain size={24} /></div>
            <div>
              <div className="text-xs text-indigo-400 font-mono uppercase tracking-[0.2em] mb-1">L'Unité Psy</div>
              <h4 className="font-bold text-white text-lg leading-tight">5. Neuropsychiatrie & Résilience</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300 flex-1">
            <div className="bg-black/20 p-5 rounded-xl border border-slate-800/50">
              <strong className="text-indigo-300 block mb-2">Rôle</strong> Traitement des traumatismes et suivi de la santé mentale des troupes.
            </div>
            <div className="bg-black/20 p-5 rounded-xl border border-slate-800/50">
              <strong className="text-indigo-300 block mb-2">Actes</strong> Réinitialisation neuro-chakratique, thérapie du SSPT et triage.
            </div>
            <div className="bg-black/20 p-5 rounded-xl border border-slate-800/50">
              <strong className="text-indigo-300 block mb-2">Soutien</strong> Exercices de résilience cognitive et médiation entre les clans.
            </div>
          </div>
        </Panel>
      </div>
    </div>

    <Divider symbol="cross" />

    {/* SECTION III: Triage et Logistique */}
    <div>
      <SectionHeader icon={Activity} title="III. Protocoles de Terrain" subtitle="Triage et Logistique" colorClass="text-emerald-400 text-glow-emerald" />
      
      <div className="space-y-8">
        <Panel>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-900/30 border border-emerald-500/30 rounded-xl text-emerald-400">
              <Activity size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Triage de Combat (MASCAL)</h3>
          </div>
          
          <p className="text-base text-slate-300 mb-10 font-mono bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 leading-relaxed italic border-l-4 border-l-cyan-500">
            "Le médecin shinobi doit refuser rationnellement les soins à un camarade jugé au-delà de tout secours pour préserver son chakra."
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Triage ROUGE */}
            <div className="group relative overflow-hidden bg-kiri-900 border border-red-900/60 p-6 rounded-2xl hover:border-red-500 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.2)] hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
              <div className="text-red-500 font-black text-2xl mb-4 flex items-center justify-between mt-2">
                ROUGE 
                <span className="text-[10px] bg-red-950/80 border border-red-800/50 px-3 py-1.5 rounded-full text-red-200 tracking-widest">IMMÉDIAT</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">Urgence vitale. Survie possible si intervention immédiate (hémorragie massive, pneumothorax).</p>
            </div>

            {/* Triage JAUNE */}
            <div className="group relative overflow-hidden bg-kiri-900 border border-yellow-700/60 p-6 rounded-2xl hover:border-yellow-500 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)] hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
              <div className="text-yellow-500 font-black text-2xl mb-4 flex items-center justify-between mt-2">
                JAUNE 
                <span className="text-[10px] bg-yellow-950/80 border border-yellow-800/50 px-3 py-1.5 rounded-full text-yellow-200 tracking-widest">DIFFÉRÉ</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">Grave. Nécessite chirurgie mais peut patienter quelques heures (fractures ouvertes, brûlures).</p>
            </div>

            {/* Triage VERT */}
            <div className="group relative overflow-hidden bg-kiri-900 border border-green-800/60 p-6 rounded-2xl hover:border-green-500 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.2)] hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
              <div className="text-green-500 font-black text-2xl mb-4 flex items-center justify-between mt-2">
                VERT 
                <span className="text-[10px] bg-green-950/80 border border-green-800/50 px-3 py-1.5 rounded-full text-green-200 tracking-widest">MINEUR</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">"Blessés marchants". Lésions n'engageant pas le pronostic vital. Autosoins conseillés.</p>
            </div>

            {/* Triage NOIR */}
            <div className="group relative overflow-hidden bg-kiri-900 border border-slate-700 p-6 rounded-2xl hover:border-slate-400 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(148,163,184,0.2)] hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-500 shadow-[0_0_10px_rgba(148,163,184,0.8)]"></div>
              <div className="text-slate-400 font-black text-2xl mb-4 flex items-center justify-between mt-2">
                NOIR 
                <span className="text-[10px] bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300 tracking-widest">DÉCÉDÉ</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Lésions cataclysmiques. Survie impossible. Ne gaspiller aucun chakra. Soins palliatifs exclusifs.</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <h3 className="text-xl font-bold text-white mb-5 border-b border-slate-700/50 pb-3 flex items-center gap-3">
            <span className="p-2 bg-slate-800 rounded-lg"><FlaskConical size={20} className="text-slate-300" /></span>
            Logistique de Terrain
          </h3>
          <p className="text-base text-slate-300 leading-relaxed p-4 bg-slate-900/30 rounded-xl border border-slate-800/50">
            Maintien strict des kits : Pilules de rations militaires (<span className="text-cyan-300 font-mono font-bold bg-cyan-950/50 px-2 py-0.5 rounded">Hyōrōgan</span>) pour forcer la production d'ATP, poches de sang universel (O-), et antidotes à large spectre synthétisés via Racine de Dragon.
          </p>
        </Panel>
      </div>
    </div>
  </div>
);

export default CadreLegal;