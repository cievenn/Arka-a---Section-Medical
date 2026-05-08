import React from 'react';
import { 
  Dna, Microscope, Scissors, Syringe, HeartPulse, 
  AlertTriangle, Biohazard, Bone, Activity
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import Quote from '../components/Quote';
import Divider from '../components/Divider';

const ExpertiseLegiste = () => (
  <div className="space-y-10 pb-10">
    <SectionHeader icon={Microscope} title="IV. Chirurgie Avancée et Sciences du Chakra Médical" subtitle="Opérations spécialisées, régénération, transplantations et recherche biomédicale shinobi" />

    {/* Principe Fondamental */}
    <Quote author="Ketsugen Chinoike">
      Le chakra ne remplace pas la médecine. Il accélère, manipule et force les mécanismes biologiques existants.
    </Quote>

    <Divider symbol="cross" />

    {/* Section Chirurgie & Bistouri */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Panel className="border-blue-900/30">
        <h3 className="text-xl font-bold text-blue-400 mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Scissors className="text-blue-400 shrink-0"/> Chirurgie Shinobi & Bistouri
        </h3>
        <p className="text-base text-slate-200 mb-5 leading-relaxed">
          Branche avancée combinant techniques chirurgicales classiques et contrôle du chakra pour traiter destructions organiques, blessures de guerre et lésions par Ninjutsu.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-black/40 border border-blue-900/50 rounded-xl">
            <h4 className="text-cyan-400 font-bold text-base mb-2">Le Bistouri de Chakra (Chakura no Mesu)</h4>
            <p className="text-sm text-slate-300 leading-relaxed">Transforme le chakra en lame chirurgicale extrêmement fine. Permet d'inciser les tissus sans ouvrir massivement le corps, d'atteindre les organes internes et de couper les nerfs. La profondeur est contrôlée par le flux, réduisant le risque infectieux.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-3 border-green-500">
              <strong className="text-green-400 block mb-2">Médical</strong>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Chirurgie interne</li>
                <li>Retrait de toxines</li>
                <li>Séparation de nécroses</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border-l-3 border-red-500">
              <strong className="text-red-400 block mb-2">Offensif</strong>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Section musculaire/nerveuse</li>
                <li>Hémorragie interne</li>
                <li>Paralysie (requiert précision)</li>
              </ul>
            </div>
          </div>
        </div>
      </Panel>

      <Panel className="border-emerald-900/30">
        <h3 className="text-xl font-bold text-emerald-400 mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Syringe className="text-emerald-400 shrink-0"/> Microchirurgie
        </h3>
        <p className="text-base text-slate-200 mb-5 leading-relaxed">
          Interventions extrêmement précises nécessitant une stabilité mentale parfaite et une connaissance chirurgicale des flux internes.
        </p>
        <div className="bg-black/40 p-5 rounded-xl border border-emerald-900/50">
          <h4 className="text-emerald-300 font-bold text-base mb-3">Cibles cliniques</h4>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 bg-emerald-900/30 text-emerald-400 text-sm rounded-full border border-emerald-800/50">Nerfs & Vaisseaux</span>
            <span className="px-3 py-1.5 bg-emerald-900/30 text-emerald-400 text-sm rounded-full border border-emerald-800/50">Tenketsu</span>
            <span className="px-3 py-1.5 bg-emerald-900/30 text-emerald-400 text-sm rounded-full border border-emerald-800/50">Tissus cérébraux</span>
          </div>
          <div className="p-3 bg-red-950/30 border-l-3 border-red-500 rounded-lg text-sm text-slate-200">
            <strong className="text-red-400">Danger de l'intervention :</strong> La moindre erreur de contrôle du chakra peut provoquer paralysie, mort cérébrale, hémorragie interne ou la perte définitive du système circulatoire de chakra du patient.
          </div>
        </div>
      </Panel>
    </div>

    <Divider symbol="diamond" />

    {/* Section Régénération */}
    <Panel className="border-indigo-900/30 bg-gradient-to-br from-slate-900 to-indigo-950/10">
      <h3 className="text-xl font-bold text-indigo-400 mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
        <HeartPulse className="text-indigo-400 shrink-0"/> Régénération Cellulaire & Sōzō Saisei
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-base text-slate-200 mb-4 leading-relaxed">La régénération médicale consiste à accélérer artificiellement la reconstruction tissulaire par la division cellulaire (mitose).</p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"/>Stimule la division cellulaire et la synthèse protéique.</li>
            <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0"/>Maintient les cellules viables malgré les traumatismes massifs.</li>
            <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"/><span><span className="text-red-300 font-semibold">Limite :</span> Toute régénération consomme énormément d'énergie et épuise la durée de vie (les cellules humaines ont une limite naturelle de division).</span></li>
          </ul>
        </div>
        <div className="bg-indigo-950/30 border border-indigo-500/30 p-6 rounded-xl relative overflow-hidden group">
          <Dna className="absolute -right-4 -top-4 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors duration-500" size={100} />
          <h4 className="font-serif text-xl text-indigo-300 font-bold mb-3 relative z-10">Création Rebirth (Sōzō Saisei)</h4>
          <p className="text-sm text-slate-200 relative z-10 mb-3 leading-relaxed">Sommet du ninjutsu médical (créé par Tsunade). Libère une réserve titanesque de chakra pour forcer les cellules à se diviser instantanément et reconstruire les organes vitaux détruits.</p>
          <p className="text-sm text-red-400 font-bold relative z-10 border-t border-indigo-900/50 pt-3 mt-3">
            Contrepartie fatale : Force l'organisme au-delà de sa limite de Hayflick. Réduit irrémédiablement l'espérance de vie du praticien.
          </p>
        </div>
      </div>
    </Panel>

    {/* Greffes, Expérimentations et Interdits */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Panel className="border-purple-900/30">
        <h3 className="font-bold text-purple-400 mb-4 flex items-center gap-2 border-b border-slate-700/50 pb-3 text-lg">
          <Bone size={20}/> Greffes & Transplants
        </h3>
        <p className="text-sm text-slate-200 mb-4 leading-relaxed">Remplacement tissulaire/organique incluant l'implantation d'éléments puissants (Sharingan, Cellules de Hashirama).</p>
        <div className="bg-black/40 p-3 rounded-lg border border-purple-900/30 text-sm">
          <strong className="text-slate-300 block mb-2">Risques Majeurs :</strong>
          <ul className="list-disc list-inside text-red-400 space-y-1">
            <li>Rejet immunitaire massif</li>
            <li>Incompatibilité de Chakra</li>
            <li>Dégénérescence mentale</li>
            <li>Mutation corporelle incontrôlable</li>
          </ul>
        </div>
      </Panel>

      <Panel className="border-cyan-900/30">
        <h3 className="font-bold text-cyan-400 mb-4 flex items-center gap-2 border-b border-slate-700/50 pb-3 text-lg">
          <Microscope size={20}/> Recherche Médicale
        </h3>
        <p className="text-sm text-slate-200 mb-4 leading-relaxed">Expérimentations visant à réduire la mortalité et comprendre les maladies rares, toxines et hybridations.</p>
        <div className="bg-black/40 p-3 rounded-lg border border-cyan-900/30 text-sm">
          <strong className="text-green-400 block mb-2">Autorisé :</strong>
          <span className="text-slate-300">Recherche thérapeutique, élaboration d'antidotes, chirurgie régénérative contrôlée.</span>
        </div>
      </Panel>

      <Panel className="border-red-900/30 bg-red-950/10">
        <h3 className="font-bold text-red-500 mb-4 flex items-center gap-2 border-b border-slate-700/50 pb-3 text-lg">
          <Biohazard size={20}/> Médecine Interdite
        </h3>
        <p className="text-sm text-slate-200 mb-4 leading-relaxed">Pratiques classées <strong className="text-red-400">Kinjutsu</strong> (Techniques Interdites) à cause de leur dangerosité extrême.</p>
        <div className="bg-black/40 p-3 rounded-lg border border-red-900/30 text-sm">
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Modifications génétiques illégales</li>
            <li>Tests humains forcés</li>
            <li>Résurrection & cadavres</li>
            <li>Fusion biologique & suppression</li>
          </ul>
        </div>
      </Panel>
    </div>
  </div>
);

export default ExpertiseLegiste;