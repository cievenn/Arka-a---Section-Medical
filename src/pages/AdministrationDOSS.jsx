import React from 'react';
import { 
  FileArchive, Activity, FileText, Skull, 
  Database, Eye, Flame
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import Divider from '../components/Divider';

const AdministrationDOSS = () => {
  return (
    <div className="space-y-12 pb-10 animate-in fade-in duration-700">
      <SectionHeader icon={Database} title="V. Médecine Légale, Investigations et Archives Biologiques" subtitle="Autopsies, analyses médico-légales, identification des jutsu et conservation des données médicales" />

      <div className="relative min-h-[600px]">
        <div className="space-y-10 w-full">
          
          {/* Objectifs & Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Panel className="lg:col-span-1 border-purple-900/30 bg-gradient-to-b from-purple-950/20 to-slate-900/80 p-6">
              <h4 className="text-purple-400 font-bold text-sm mb-6 font-mono tracking-widest border-b border-purple-900/50 pb-3">/ OBJECTIFS GLOBAUX</h4>
              <div className="space-y-8 text-sm text-slate-200">
                <div>
                  <strong className="block text-slate-100 mb-3 uppercase tracking-wider text-xs">Déterminations :</strong>
                  <ul className="list-disc list-inside text-slate-400 space-y-2 marker:text-purple-500">
                    <li>Comment la victime est morte</li>
                    <li>Mort naturelle vs provoquée</li>
                    <li>Implication d'un Jutsu</li>
                    <li>Altération du corps</li>
                  </ul>
                </div>
                <div>
                  <strong className="block text-slate-100 mb-3 uppercase tracking-wider text-xs">Recherches Cliniques :</strong>
                  <ul className="list-disc list-inside text-slate-400 space-y-2 marker:text-purple-500">
                    <li>Fractures & Brûlures internes</li>
                    <li>Lésions nerveuses</li>
                    <li>Traces de chakra & Sceaux</li>
                    <li>Destruction organique</li>
                    <li>Altérations génétiques</li>
                  </ul>
                </div>
              </div>
            </Panel>

            <Panel className="lg:col-span-3 border-slate-700/50 bg-slate-900/40 p-6">
              <h4 className="text-cyan-400 font-bold text-sm mb-6 font-mono tracking-widest border-b border-slate-700/50 pb-3">/ PROTOCOLE OPÉRATOIRE D'AUTOPSIE (3 PHASES)</h4>
              
              <div className="space-y-5">
                {/* Phase 1 */}
                <div className="bg-black/50 border border-slate-800 p-6 rounded-xl hover:border-cyan-900/50 transition-colors flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 shrink-0">
                    <h5 className="text-white font-bold text-lg mb-2 flex items-center gap-2"><Eye size={18} className="text-cyan-400"/> I. Examen Externe</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Analyse visuelle et palpation initiale du corps avant toute incision.</p>
                  </div>
                  <div className="md:w-2/3 flex flex-wrap gap-2.5 content-start font-mono text-xs">
                    {[
                      { text: 'Blessures visibles', color: 'text-cyan-300 border-cyan-900/50 bg-cyan-950/20' },
                      { text: 'Brûlures / Sceaux', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Traces de combat', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Tatouages / Marques', color: 'text-cyan-300 border-cyan-900/50 bg-cyan-950/20' },
                      { text: 'Cicatrices', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Signes de poison', color: 'text-red-300 border-red-900/50 bg-red-950/20' },
                      { text: 'Décoloration', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Rigidité cadavérique', color: 'text-cyan-300 border-cyan-900/50 bg-cyan-950/20' },
                      { text: 'État des yeux', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Perturbations Tenketsu', color: 'text-purple-300 border-purple-900/50 bg-purple-950/20' },
                      { text: 'État des ongles', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Résidus de chakra', color: 'text-purple-300 border-purple-900/50 bg-purple-950/20' },
                      { text: 'Écoulements', color: 'text-slate-300 border-slate-700 bg-slate-800' },
                      { text: 'Altérations cellules', color: 'text-purple-300 border-purple-900/50 bg-purple-950/20' },
                    ].map((item, i) => (
                      <span key={i} className={`px-3 py-1.5 border rounded-md ${item.color}`}>
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-black/50 border border-slate-800 p-6 rounded-xl hover:border-blue-900/50 transition-colors flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 shrink-0">
                    <h5 className="text-white font-bold text-lg mb-2 flex items-center gap-2"><Activity size={18} className="text-blue-400"/> II. Examen Interne</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Ouverture thoracique et crânienne. Utilisation de scanner de chakra post-mortem.</p>
                  </div>
                  <div className="md:w-2/3 space-y-4 text-sm font-mono">
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                      <span className="text-blue-400 font-bold block mb-1 text-xs uppercase tracking-wider">Cibles :</span>
                      <span className="text-slate-300">Organes, Os, Cerveau, Poumons, Cœur, Réseau Vasculaire.</span>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                      <span className="text-red-400 font-bold block mb-1 text-xs uppercase tracking-wider">Lésions :</span>
                      <span className="text-slate-300">Hémorragies, perforations, nécroses, thromboses, thermiques/électriques.</span>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                      <span className="text-purple-400 font-bold block mb-1 text-xs uppercase tracking-wider">Keirakukei :</span>
                      <span className="text-slate-300">Destruction des conduits, saturation en chakra, résidus élémentaires.</span>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-black/50 border border-slate-800 p-6 rounded-xl hover:border-green-900/50 transition-colors flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 shrink-0">
                    <h5 className="text-white font-bold text-lg mb-2 flex items-center gap-2"><FileText size={18} className="text-green-400"/> III. Prélèvements</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">Extraction de biomatériaux pour analyses ADN et banques de souches.</p>
                  </div>
                  <div className="md:w-2/3 flex flex-wrap gap-3 content-start font-mono text-xs">
                    {['Sang (Fémoral)', 'Urine', 'Moelle osseuse', 'Liquide gastrique', 'Tissus organiques', 'Follicules pileux', 'Humeur vitrée', 'Organes ciblés'].map(item => (
                      <span key={item} className="px-4 py-2 bg-slate-800 border border-slate-600 text-slate-200 rounded-lg shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          <Divider symbol="diamond" />

          {/* Causes de mort */}
          <Panel className="border-red-900/30 p-8">
            <h4 className="text-red-400 font-bold text-sm mb-6 font-mono tracking-widest border-b border-red-900/50 pb-3 flex items-center gap-2"><Skull size={18}/> / CLASSIFICATION DES CAUSES DE MORT</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              
              <div className="p-5 border border-red-900/40 bg-red-950/10 rounded-xl hover:bg-red-950/20 transition-colors">
                <div className="text-red-500 font-bold text-sm uppercase tracking-widest mb-3 border-b border-red-900/30 pb-2">Hémorragique</div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">Perte massive de sang provoquant chute de pression, arrêt circulatoire et insuffisance organique.</p>
                <div className="text-xs text-slate-400 font-mono bg-black/40 p-3 rounded border border-red-900/20">
                  <strong className="text-red-300 block mb-1">Armes/Causes :</strong> Armes blanches, taijutsu lourd, scalpels chakra offensifs.
                </div>
              </div>

              <div className="p-5 border border-blue-900/40 bg-blue-950/10 rounded-xl hover:bg-blue-950/20 transition-colors">
                <div className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-3 border-b border-blue-900/30 pb-2">Neurologique</div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">Destruction irréversible du cerveau, de la moelle épinière ou du système nerveux central.</p>
                <div className="text-xs text-slate-400 font-mono bg-black/40 p-3 rounded border border-blue-900/20">
                  <strong className="text-blue-300 block mb-1">Armes/Causes :</strong> Raiton de haut niveau, trauma crânien, Genjutsu neurologique extrême.
                </div>
              </div>

              <div className="p-5 border border-cyan-900/40 bg-cyan-950/10 rounded-xl hover:bg-cyan-950/20 transition-colors">
                <div className="text-cyan-500 font-bold text-sm uppercase tracking-widest mb-3 border-b border-cyan-900/30 pb-2">Respiratoire</div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">Privation totale d'oxygène entraînant l'asphyxie cellulaire et l'arrêt cérébral.</p>
                <div className="text-xs text-slate-400 font-mono bg-black/40 p-3 rounded border border-cyan-900/20">
                  <strong className="text-cyan-300 block mb-1">Armes/Causes :</strong> Noyade Suiton, fumées Katon, écrasement thoracique Doton, paralysie.
                </div>
              </div>

              <div className="p-5 border border-orange-900/40 bg-orange-950/10 rounded-xl hover:bg-orange-950/20 transition-colors">
                <div className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3 border-b border-orange-900/30 pb-2">Destruction</div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">Les organes vitaux deviennent instantanément non fonctionnels (fusion, vaporisation, nécrose).</p>
                <div className="text-xs text-slate-400 font-mono bg-black/40 p-3 rounded border border-orange-900/20">
                  <strong className="text-orange-300 block mb-1">Armes/Causes :</strong> Carbonisation interne, nécrose tissulaire massive, surcharge chakra.
                </div>
              </div>

            </div>
          </Panel>

          {/* Rapport Post-Mortem */}
          <Panel className="border-slate-800 bg-slate-900/50 p-8">
            <div className="flex justify-between items-center mb-8 border-b border-slate-700/80 pb-4">
              <h4 className="text-slate-200 font-bold text-sm font-mono tracking-widest">/ STANDARD DU RAPPORT POST-MORTEM</h4>
              <span className="text-xs bg-slate-800 border border-slate-600 px-4 py-1.5 text-slate-300 font-mono rounded-full tracking-wider">DOC-CLASSIFIÉ</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-mono text-slate-300">
              <div className="bg-black/60 p-5 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-colors shadow-inner">
                <strong className="text-cyan-400 block mb-3 text-lg">1. Identification</strong>
                <p className="text-slate-400 leading-relaxed">Nom, âge estimé, clan, unité militaire d'attache, matricule shinobi.</p>
              </div>
              <div className="bg-black/60 p-5 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-colors shadow-inner">
                <strong className="text-cyan-400 block mb-3 text-lg">2. Externe</strong>
                <p className="text-slate-400 leading-relaxed">État général, blessures visibles, anomalies physiques, rigidité.</p>
              </div>
              <div className="bg-black/60 p-5 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-colors shadow-inner">
                <strong className="text-cyan-400 block mb-3 text-lg">3. Interne</strong>
                <p className="text-slate-400 leading-relaxed">État des organes, lésions internes invisibles, foyers d'hémorragies.</p>
              </div>
              <div className="bg-black/60 p-5 border border-slate-700 rounded-xl hover:border-green-500/50 transition-colors shadow-inner">
                <strong className="text-green-400 block mb-3 text-lg">4. Conclusion</strong>
                <p className="text-slate-400 leading-relaxed">Cause exacte de la mort, heure approximative, Jutsu ou Arme hypothétique.</p>
              </div>
            </div>
          </Panel>

        </div>
      </div>
    </div>
  );
};

export default AdministrationDOSS;