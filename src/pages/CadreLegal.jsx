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
  <div className="space-y-16 pb-10">
    {/* SECTION I: Cadre Légal */}
    <div>
      <SectionHeader icon={Scale} title="I. Autorité Médicale et Régulation Shinobi" subtitle="Organisation, hiérarchie, éthique et administration des services médicaux du village" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel className="flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4 flex items-center gap-3">
            <ShieldAlert className="text-cyan-400 shrink-0" /> Les 4 Lois Fondamentales
          </h3>
          <ul className="space-y-5 text-base font-medium flex-1 text-slate-200">
            <li className="flex gap-4 items-start p-4 hover:bg-slate-800/30 rounded-lg transition-colors">
              <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">01.</span> 
              <p className="leading-relaxed">Le médecin ne doit <strong className="text-cyan-300">jamais</strong> cesser le traitement tant que ses coéquipiers respirent.</p>
            </li>
            <li className="flex gap-4 items-start p-4 hover:bg-slate-800/30 rounded-lg transition-colors">
              <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">02.</span> 
              <p className="leading-relaxed">Le médecin ne doit <strong className="text-cyan-300">jamais</strong> s'engager sur la ligne de front. S'exposer est une trahison tactique.</p>
            </li>
            <li className="flex gap-4 items-start p-4 hover:bg-slate-800/30 rounded-lg transition-colors">
              <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">03.</span> 
              <p className="leading-relaxed">Le médecin doit être le <strong className="text-cyan-300">dernier survivant</strong> de son peloton. Sa vie garantit celle des autres.</p>
            </li>
            <li className="flex gap-4 items-start p-4 hover:bg-slate-800/30 rounded-lg transition-colors">
              <span className="text-cyan-400 font-mono text-xl font-bold shrink-0 mt-0.5">04.</span> 
              <p className="leading-relaxed">Seuls ceux maîtrisant le Sceau de la Force d'une Centaine (<em className="text-cyan-200">Byakugō</em>) sont exemptés de ces règles.</p>
            </li>
          </ul>

          <div className="mt-8 p-6 bg-gradient-to-br from-red-950/40 to-black border border-red-900/50 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10"><AlertOctagon size={80}/></div>
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2 relative z-10 text-lg"><AlertOctagon size={20}/> Déontologie & Bioéthique</h4>
            <p className="text-sm text-slate-300 leading-relaxed relative z-10">
              Interdiction absolue des expérimentations humaines abusives ou manipulations génétiques coercitives. <strong className="text-slate-100">Note de Kiri :</strong> La réquisition de prisonniers pour "études anatomiques validées" reste soumise à l'approbation stricte du Mizukage.
            </p>
          </div>
        </Panel>

        <div className="space-y-8">
          <Panel>
            <h3 className="text-xl font-bold text-white mb-5 border-b border-slate-700/50 pb-3">Hiérarchie de la Section</h3>
            <div className="space-y-3 text-base font-mono">
              <div className="flex justify-between items-center p-3 hover:bg-cyan-900/20 rounded-lg transition-colors">
                <span className="text-cyan-400 font-bold flex items-center gap-2"><ChevronRight size={16}/> Médecin-Chef (Mizuiryō)</span> 
                <span className="text-sm text-slate-400">Autorité suprême</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-purple-900/20 rounded-lg transition-colors">
                <span className="text-purple-400 font-bold flex items-center gap-2"><ChevronRight size={16}/> Maître Légiste</span> 
                <span className="text-sm text-slate-400">Morgue & Expertises</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-slate-800/50 rounded-lg transition-colors">
                <span className="text-slate-200 font-bold flex items-center gap-2"><ChevronRight size={16}/> Iryō-nin Rang A/B</span> 
                <span className="text-sm text-slate-400">Chirurgiens Actifs</span>
              </div>
              <div className="flex justify-between items-center p-3 hover:bg-slate-800/50 rounded-lg transition-colors">
                <span className="text-slate-400 font-bold flex items-center gap-2"><ChevronRight size={16}/> Apprentis</span> 
                <span className="text-sm text-slate-500">Soutien / Stagiaires</span>
              </div>
            </div>
          </Panel>

          <Panel className="border-red-900/30 bg-gradient-to-b from-slate-900/60 to-red-950/20">
            <h3 className="text-xl font-bold text-red-100 mb-5 border-b border-red-900/30 pb-3">Sanctions Disciplinaires</h3>
            <ul className="space-y-4 text-base">
              <li className="flex flex-col p-4 bg-black/40 border-l-3 border-yellow-500 rounded-r-lg">
                <strong className="text-yellow-500 font-mono mb-1">Niveau 1 : Négligence</strong> 
                <span className="text-slate-300">Suspension de chakra temporaire et TIG.</span>
              </li>
              <li className="flex flex-col p-4 bg-black/40 border-l-3 border-orange-500 rounded-r-lg">
                <strong className="text-orange-500 font-mono mb-1">Niveau 2 : Violation du secret & Kekkai Genkai</strong> 
                <span className="text-slate-300">Emprisonnement et marquage d'un sceau de restriction cérébrale. La protection des données génétiques des clans est absolue.</span>
              </li>
              <li className="flex flex-col p-4 bg-black/40 border-l-3 border-red-600 rounded-r-lg relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-red-600/20 to-transparent"></div>
                <strong className="text-red-400 font-mono mb-1">Niveau 3 : Trahison / Vente ADN</strong> 
                <span className="text-slate-200">Exécution immédiate par la Brigade des Chasseurs de Déserteurs (Oinin).</span>
              </li>
            </ul>
          </Panel>
        </div>
      </div>

      {/* Placeholder image */}
      <ImagePlaceholder 
        src={legalImage} 
        caption="Hiérarchie de la Section Médicale" 
      />
    </div>

    <Divider symbol="droplet" />

    {/* SECTION II: Organisation et Doctrine Médicale */}
    <div>
      <SectionHeader icon={Activity} title="II. Organisation et Doctrine Médicale" subtitle="Structure Opérationnelle et Fonctions" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Panel className="border-cyan-900/30 bg-gradient-to-br from-slate-900 to-cyan-950/20">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-3">
            <HeartPulse size={22} /> Définition du Médecin Ninja
          </h3>
          <p className="text-slate-200 text-base leading-relaxed">
            Le médecin ninja (<em className="text-cyan-300">Iryō-nin</em>) est une unité hybride : à la fois force militaire, soigneur et scientifique. Véritable pilier de la survie du village, il gère le diagnostic tactique, la chirurgie d'urgence, la toxicologie et la recherche sous une pression extrême. Sa pratique exige une maîtrise millimétrée du chakra médical, indispensable pour stimuler la régénération cellulaire, traiter les blessures mortelles et neutraliser les traumatismes bio-chakratiques, où la moindre erreur peut être fatale.
          </p>
        </Panel>

        <Panel className="border-purple-900/30 bg-gradient-to-br from-slate-900 to-purple-950/20">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-3">
            <BookOpen size={22} /> Doctrine de Formation
          </h3>
          <p className="text-slate-200 text-base leading-relaxed">
            La formation médicale shinobi impose une progression stricte par domaines de spécialisation. Il est formellement interdit et mortellement dangereux de tenter de maîtriser toutes les branches avancées simultanément. L'accès aux techniques de haut niveau, aux chirurgies complexes ou aux recherches sensibles est conditionné par des évaluations drastiques et la validation des chefs de section, afin de prévenir les dérives éthiques et les accidents médicaux.
          </p>
        </Panel>
      </div>

      {/* Les 5 Unités Spécialisées */}
      <h3 className="text-2xl font-bold text-white mt-14 mb-8 border-b border-slate-700/50 pb-4">Les 5 Unités Spécialisées</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Unité 1 */}
        <Panel className="flex flex-col hover:border-cyan-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-cyan-950/50 rounded-lg text-cyan-400"><Activity size={24} /></div>
            <h4 className="font-bold text-slate-100 text-lg leading-tight">1. Unité de Traumatologie de Terrain</h4>
          </div>
          <div className="text-sm text-cyan-400 font-mono mb-4 uppercase tracking-wider">L'Avant-Garde</div>
          <ul className="space-y-3 text-base text-slate-300 flex-1">
            <li><strong className="text-slate-100">Rôle :</strong> Soins au Combat Tactique (TCCC) et triage algorithmique (START/SALT).</li>
            <li><strong className="text-slate-100">Actes :</strong> Stabilisation des hémorragies massives, pneumothorax, garrots de chakra.</li>
            <li><strong className="text-slate-100">Équipement :</strong> Pilules Hyōrōgan (ATP), Sang universel (O-).</li>
          </ul>
        </Panel>

        {/* Unité 2 */}
        <Panel className="flex flex-col hover:border-emerald-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-emerald-950/50 rounded-lg text-emerald-400"><Syringe size={24} /></div>
            <h4 className="font-bold text-slate-100 text-lg leading-tight">2. Unité de Chirurgie & Régénération</h4>
          </div>
          <div className="text-sm text-emerald-400 font-mono mb-4 uppercase tracking-wider">Le Bloc</div>
          <ul className="space-y-3 text-base text-slate-300 flex-1">
            <li><strong className="text-slate-100">Rôle :</strong> Réparations structurelles lourdes et reconstruction tissulaire.</li>
            <li><strong className="text-slate-100">Actes :</strong> Incisions moléculaires via Bistouri de Chakra (Chakra no Mesu), mitose accélérée.</li>
            <li><strong className="text-slate-100">Recherche :</strong> Techniques Rang S (ex: Chikatsu Saisei) pour reconstituer des membres.</li>
          </ul>
        </Panel>

        {/* Unité 3 */}
        <Panel className="flex flex-col hover:border-amber-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-amber-950/50 rounded-lg text-amber-400"><FlaskConical size={24} /></div>
            <h4 className="font-bold text-slate-100 text-lg leading-tight">3. Unité de Scientifique</h4>
          </div>
          <div className="text-sm text-amber-400 font-mono mb-4 uppercase tracking-wider">Le Labo</div>
          <ul className="space-y-3 text-base text-slate-300 flex-1">
            <li><strong className="text-slate-100">Rôle :</strong> Identification des menaces biochimiques, synthèse d'antidotes et dopants, et toutes sortes de recherches.</li>
            <li><strong className="text-slate-100">Actes :</strong> Extraction Délicate de Maladie (Saikan Chuushutsu), analyse pharmacocinétique.</li>
            <li><strong className="text-slate-100">Botanique :</strong> Raffinement de plantes rares (Herbe d'Armure, Racine de Dragon).</li>
          </ul>
        </Panel>

        {/* Unité 4 */}
        <Panel className="flex flex-col hover:border-slate-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-slate-800 rounded-lg text-slate-400"><Skull size={24} /></div>
            <h4 className="font-bold text-slate-100 text-lg leading-tight">4. Morgue & Renseignement Biologique</h4>
          </div>
          <div className="text-sm text-slate-400 font-mono mb-4 uppercase tracking-wider">La Section Noire</div>
          <ul className="space-y-3 text-base text-slate-300 flex-1">
            <li><strong className="text-slate-100">Rôle :</strong> Autopsies, prélèvement ADN et contre-espionnage biologique.</li>
            <li><strong className="text-slate-100">Actes :</strong> Shikon no Jutsu, détection de lésions cellulaires invisibles (Jūken, Rasengan).</li>
            <li><strong className="text-slate-100">Conservation :</strong> Banque de souches cellulaires et Dōjutsu sous stase.</li>
          </ul>
        </Panel>

        {/* Unité 5 */}
        <Panel className="flex flex-col hover:border-indigo-500/50 transition-colors md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 bg-indigo-950/50 rounded-lg text-indigo-400"><Brain size={24} /></div>
            <h4 className="font-bold text-slate-100 text-lg leading-tight">5. Neuropsychiatrie & Résilience</h4>
          </div>
          <div className="text-sm text-indigo-400 font-mono mb-4 uppercase tracking-wider">L'Unité Psy</div>
          <ul className="space-y-3 text-base text-slate-300 flex-1">
            <li><strong className="text-slate-100">Rôle :</strong> Traitement des traumatismes et suivi de la santé mentale des troupes.</li>
            <li><strong className="text-slate-100">Actes :</strong> Réinitialisation neuro-chakratique, thérapie du SSPT et des "lésions morales" liées au triage.</li>
            <li><strong className="text-slate-100">Soutien :</strong> Exercices de résilience cognitive et médiation entre les clans.</li>
          </ul>
        </Panel>
      </div>
    </div>

    <Divider symbol="cross" />

    {/* SECTION III: Triage et Logistique */}
    <div>
      <SectionHeader icon={Activity} title="III. Protocoles de Terrain" subtitle="Triage et Logistique" />
      
      <div className="space-y-8">
        <Panel>
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3"><Activity className="text-cyan-400 shrink-0"/></h3>
          <h3 className="text-2xl font-bold text-white mb-3">Triage de Combat (MASCAL)</h3>
          <p className="text-base text-slate-300 mb-8 font-mono border-b border-slate-700/50 pb-5 leading-relaxed">
            Le médecin shinobi doit refuser rationnellement les soins à un camarade jugé au-delà de tout secours pour préserver son chakra.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-red-900/60 p-6 rounded-xl hover:border-red-500 transition-all shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
              <div className="text-red-500 font-black text-xl mb-3 flex items-center justify-between">ROUGE <span className="text-xs bg-red-900/50 px-3 py-1.5 rounded-full text-red-200">IMMÉDIAT</span></div>
              <p className="text-base text-slate-200 leading-relaxed">Urgence vitale. Survie possible si intervention immédiate (hémorragie massive, pneumothorax).</p>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-yellow-700/60 p-6 rounded-xl hover:border-yellow-500 transition-all shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
              <div className="text-yellow-500 font-black text-xl mb-3 flex items-center justify-between">JAUNE <span className="text-xs bg-yellow-900/50 px-3 py-1.5 rounded-full text-yellow-200">DIFFÉRÉ</span></div>
              <p className="text-base text-slate-200 leading-relaxed">Grave. Nécessite chirurgie mais peut patienter quelques heures (fractures ouvertes, brûlures).</p>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-green-800/60 p-6 rounded-xl hover:border-green-500 transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <div className="text-green-500 font-black text-xl mb-3 flex items-center justify-between">VERT <span className="text-xs bg-green-900/50 px-3 py-1.5 rounded-full text-green-200">MINEUR</span></div>
              <p className="text-base text-slate-200 leading-relaxed">"Blessés marchants". Lésions n'engageant pas le pronostic vital. Autosoins conseillés.</p>
            </div>
            <div className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-black border border-slate-700 p-6 rounded-xl hover:border-slate-400 transition-all hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-500"></div>
              <div className="text-slate-400 font-black text-xl mb-3 flex items-center justify-between">NOIR <span className="text-xs bg-slate-800 px-3 py-1.5 rounded-full text-slate-300">DÉCÉDÉ</span></div>
              <p className="text-base text-slate-300 leading-relaxed">Lésions cataclysmiques. Survie impossible. Ne gaspiller aucun chakra. Soins palliatifs exclusifs.</p>
            </div>
          </div>
        </Panel>

        <Panel>
          <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700/50 pb-3">Logistique de Terrain</h3>
          <p className="text-base text-slate-200 leading-relaxed">
            Maintien strict des kits : Pilules de rations militaires (<span className="text-cyan-300 font-mono">Hyōrōgan</span>) pour forcer la production d'ATP, poches de sang universel (O-), et antidotes à large spectre synthétisés via Racine de Dragon.
          </p>
        </Panel>
      </div>
    </div>
  </div>
);

export default CadreLegal;