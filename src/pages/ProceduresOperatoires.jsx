import React from 'react';
import { 
  Syringe, Activity, Biohazard, AlertOctagon, Crosshair, 
  Scissors, AlertTriangle, Flame, Zap, Brain 
} from 'lucide-react';
import Panel from '../components/Panel';
import SectionHeader from '../components/SectionHeader';
import CollapsibleGradient from '../components/CollapsibleGradient';
import Divider from '../components/Divider';

const ProceduresOperatoires = () => (
  <div className="space-y-10 pb-10">
    <SectionHeader icon={Syringe} title="III. Médecine de Terrain et Intervention d’Urgence" subtitle="Soins immédiats, stabilisation, traumatologie et médecine militaire en environnement hostile" />

    {/* Traumatologie et Genjutsu */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Panel className="border-orange-900/30 bg-gradient-to-br from-slate-900 to-orange-950/10">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Activity className="text-orange-400 shrink-0"/> Traumatologie Élémentaire
        </h3>
        <p className="text-base text-slate-200 mb-5 leading-relaxed">Le médecin doit impérativement distinguer la nature élémentaire d'une blessure pour ne pas aggraver le pronostic vital.</p>
        <div className="space-y-4">
          <div className="p-5 bg-black/40 border-l-3 border-orange-500 rounded-r-lg">
            <h4 className="text-orange-400 font-bold text-base mb-2 flex items-center gap-2"><Flame size={18}/> Lésions Thermiques (Katon / Explosifs)</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Provoquent une nécrose de coagulation superficielle ou profonde. Exige un débridement chirurgical immédiat pour éviter la putréfaction et l'infection des tissus.
            </p>
          </div>
          <div className="p-5 bg-black/40 border-l-3 border-blue-400 rounded-r-lg">
            <h4 className="text-blue-400 font-bold text-base mb-2 flex items-center gap-2"><Zap size={18}/> Lésions Électriques (Raiton)</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">
              Dégâts internes dévastateurs et souvent invisibles (marques de fougère cutanées). Le courant traverse les voies de moindre résistance : nerfs, muscles et vaisseaux sanguins.
            </p>
            <p className="text-sm text-slate-400">
              <strong className="text-red-400">Risques :</strong> Arrêt cardiaque (asystolie), arrêt respiratoire, et rhabdomyolyse sévère (destruction musculaire libérant toxines et détruisant les reins).
            </p>
          </div>
        </div>
      </Panel>

      <Panel className="border-purple-900/30 bg-gradient-to-br from-slate-900 to-purple-950/10">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Brain className="text-purple-400 shrink-0"/> Pathologie Cognitive
        </h3>
        <p className="text-base text-slate-200 mb-5 leading-relaxed">Les illusions ne sont pas que des mirages. Ce sont des agressions physiques directes sur le système nerveux central.</p>
        <div className="p-5 bg-black/40 border border-purple-900/50 rounded-xl space-y-4">
          <div>
            <h4 className="text-purple-400 font-bold text-base mb-2">Traumatisme Genjutsu</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Contrairement aux simples hallucinations, les Genjutsu de haut rang altèrent physiquement et de force le flux de chakra dans le cortex cérébral de la victime.
            </p>
          </div>
          <div>
            <h4 className="text-slate-100 font-bold text-base mb-2">Conséquences Cliniques</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Inflige un traumatisme neurologique et cognitif majeur. Les synapses transmettent des signaux de douleur aberrants, menant à la catatonie ou à des lésions cérébrales irréversibles.
            </p>
          </div>
          <div className="pt-3 border-t border-purple-900/50">
            <h4 className="text-cyan-400 font-bold text-base mb-2">Traitement</h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              Ne relève pas de la psychiatrie classique. Nécessite une réinitialisation invasive du flux neuro-chakratique par Iryō-Ninjutsu pour purger le système.
            </p>
          </div>
        </div>
      </Panel>
    </div>

    <Divider symbol="cross" />

    {/* Arsenal et Logistique */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Panel className="flex flex-col">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-3">Arsenal Ninjutsu Médical</h3>
        <CollapsibleGradient maxHeight="350px" buttonTextClosed="Déployer l'arsenal médical" className="flex-1">
          <ul className="space-y-5 text-base">
            {[
              { name: 'Paume Mystique (Shōsen Jutsu)', color: 'cyan', desc: 'Accélère la mitose cellulaire. Traite lacérations et hémorragies internes.' },
              { name: 'Diagnostic (Mukizu Shindan)', color: 'blue', desc: 'Cartographie interne instantanée via pulsations de chakra dans les Tenketsu.' },
              { name: 'Garrot de Chakra (Shiketsu)', color: 'red', desc: 'Restreint radicalement le flux sanguin/chakra d\'un membre pour stopper l\'exsanguination.' },
              { name: 'Bistouri de Chakra (Chakra no Mesu)', color: 'purple', desc: 'Incision interne sans effraction cutanée. Redoutable en Taijutsu pour sectionner les nerfs.' },
              { name: 'Extraction Délicate de Maladie (Saikan Chūshutsu)', color: 'emerald', desc: 'Incision ciblée permettant d\'infuser une bulle de chakra pour aspirer et expulser physiquement les molécules de poison ou les venins complexes hors du flux sanguin. Offre un délai critique pour synthétiser un antidote.' },
              { name: 'Remède Rajeunissant (Fukugen Ryōhō)', color: 'indigo', desc: 'Onde de choc de chakra purifié qui réaligne les perturbations du réseau de tenketsu. Dissipe instantanément les paralysies internes induites par des neurotoxines ou les traumatismes cognitifs sévères liés aux Genjutsu.' },
              { name: 'Réparation Vitale (Kyūsho Shūzen)', color: 'rose', desc: 'Mesure de sauvetage extrême. Stimulation directe du tronc cérébral par le chakra pour forcer la relance des fonctions autonomes (pouls, respiration) d\'un patient au seuil de la mort.' },
            ].map(({ name, color, desc }) => (
              <li key={name} className={`p-4 bg-slate-800/20 rounded-xl border-l-4 border-${color}-500 hover:bg-${color}-900/10 transition-colors`}>
                <strong className={`text-${color}-400 text-lg font-serif tracking-wide block mb-2`}>{name}</strong>
                <span className="text-slate-300 leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </CollapsibleGradient>
      </Panel>

      <div className="space-y-8">
        <Panel className="border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800/40">
          <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
            <Crosshair className="text-slate-400 shrink-0"/> Protocoles de Soins et Survie
          </h3>
          <p className="text-base text-slate-200 mb-5 italic leading-relaxed">
            La première médecine sur un champ de bataille est la supériorité de feu. Un médecin abattu condamne l'intégralité de son escouade. La prise en charge se décompose en trois phases :
          </p>
          <div className="space-y-4 text-base">
            <div className="p-4 bg-black/40 border-l-3 border-emerald-500 rounded-r-lg hover:bg-slate-800/50 transition-colors">
              <strong className="text-emerald-400 block mb-2">I. Premiers Secours (Urgence immédiate)</strong>
              <span className="text-slate-300 text-sm leading-relaxed">Interventions réflexes visant exclusivement à empêcher une mort immédiate et gagner du temps. Inclut l'arrêt d'une hémorragie massive, la position latérale de sécurité (PLS) et le maintien des voies respiratoires ouvertes.</span>
            </div>
            <div className="p-4 bg-black/40 border-l-3 border-red-500 rounded-r-lg hover:bg-slate-800/50 transition-colors">
              <strong className="text-red-400 block mb-2">II. Soins sur le Terrain (Sous le feu)</strong>
              <span className="text-slate-300 text-sm leading-relaxed">
                Interdiction d'intervenir à découvert. Les blessés conscients appliquent des autosoins (garrots mécaniques). Le médecin emploie un Taijutsu purement défensif (désaxement) pour éviter l'ennemi. Les soins complexes sont formellement différés jusqu'à la mise à couvert.
              </span>
            </div>
            <div className="p-4 bg-black/40 border-l-3 border-cyan-500 rounded-r-lg hover:bg-slate-800/50 transition-colors">
              <strong className="text-cyan-400 block mb-2">III. Stabilisation Tactique</strong>
              <span className="text-slate-300 text-sm leading-relaxed">Empêcher la dégradation des organes pour rendre le patient transportable. Comprend la gestion du volume sanguin (perfusion/remplacement), l'immobilisation stricte des fractures et le contrôle impératif de la température corporelle.</span>
            </div>
          </div>
        </Panel>

        <Panel className="border-red-900/50 bg-gradient-to-br from-slate-900 to-red-950/40 relative overflow-hidden group">
          <Biohazard size={140} className="absolute -right-10 -bottom-10 text-red-900/20 group-hover:text-red-900/40 transition-colors duration-500" />
          <h3 className="text-xl font-bold text-red-400 mb-4 relative z-10 flex items-center gap-2">
            <AlertOctagon size={22}/> Protocole de Quarantaine
          </h3>
          <p className="text-base text-slate-200 relative z-10 leading-relaxed font-mono">
            Isolement total et immédiat en cas d'infection par virus de chakra (poisons aéroportés) ou parasites physiques (spores / insectes hostiles). <strong className="text-red-300">INCINÉRATION</strong> systématique de l'équipement contaminé.
          </p>
        </Panel>
      </div>
    </div>

    <Divider symbol="diamond" />

    {/* Protocoles de Suture */}
    <Panel className="border-indigo-900/30 bg-gradient-to-br from-slate-900 to-indigo-950/10">
      <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
        <Scissors className="text-indigo-400 shrink-0"/> Protocoles de Suture (Fermeture Tissulaire)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
        <div className="p-5 bg-indigo-950/30 border border-indigo-900/50 rounded-xl flex flex-col">
          <strong className="text-indigo-300 block mb-3 text-lg">Sutures Énergétiques (Damage Control)</strong>
          <p className="text-slate-300 mb-5 flex-1 leading-relaxed">
            Techniques d'urgence (<em className="text-slate-200">Kizu Saishū</em> ou <em className="text-slate-200">Rinji Hōgō</em>) utilisant un afflux massif de chakra pour lier temporairement les tissus et pallier les nerfs détruits. <br/><br/>
            <strong className="text-orange-400">Avertissement :</strong> Effet palliatif transitoire. À l'expiration du jutsu, la plaie peut se rouvrir avec une sévérité hémorragique accrue.
          </p>
          <div className="bg-black/50 p-4 rounded-lg border border-slate-800 font-mono text-sm">
            <span className="text-cyan-400 block mb-3 border-b border-slate-700 pb-2">Lancer de dé (/roll) — Temps avant réouverture :</span>
            <ul className="text-slate-200 space-y-1 grid grid-cols-2">
              <li>01 - 24 : <span className="text-red-400 font-bold">1 heure</span></li>
              <li>25 - 49 : <span className="text-orange-400 font-bold">1 jour</span></li>
              <li>50 - 74 : <span className="text-yellow-400 font-bold">4 jours</span></li>
              <li>75 - 100 : <span className="text-green-400 font-bold">1 semaine</span></li>
            </ul>
          </div>
        </div>
        <div className="p-5 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <strong className="text-slate-100 block mb-3 text-lg">Sutures Biomécaniques (Définitives)</strong>
          <p className="text-slate-300 leading-relaxed">
            Fermeture chirurgicale physique via fil résorbable. Obligatoire en soins post-opératoires pour assurer la guérison par première, seconde ou troisième intention, et éviter la nécrose tissulaire. C'est la seule méthode garantissant la viabilité à long terme d'une plaie grave traitée sur le terrain.
          </p>
        </div>
      </div>
    </Panel>

    {/* Avertissement */}
    <div className="mt-10 p-8 bg-red-950/50 border-2 border-red-600 rounded-2xl shadow-[0_0_25px_rgba(220,38,38,0.2)] flex gap-5 items-start relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
        <AlertTriangle size={150} />
      </div>
      <AlertTriangle className="text-red-500 shrink-0 mt-1 relative z-10" size={36} />
      <div className="relative z-10">
        <h3 className="text-xl font-black text-red-500 mb-3 uppercase tracking-wide">Danger Clinique : L'Épuisement du Chakra</h3>
        <p className="text-base text-red-100 leading-relaxed font-medium">
          Le médecin shinobi maintient un flux intracellulaire constant d'une finesse chirurgicale. S'il ne gère pas ses réserves, le corps, vidé de son énergie vitale, cannibalise la viabilité de ses propres cellules. Cet état pathologique gravissime conduit inexorablement à la léthargie, au coma, puis à la mort cellulaire systémique. <strong className="text-white bg-red-900/80 px-3 py-1 rounded ml-1 border border-red-500/50">Un médecin épuisé est un cadavre en sursis.</strong>
        </p>
      </div>
    </div>
  </div>
);

export default ProceduresOperatoires;