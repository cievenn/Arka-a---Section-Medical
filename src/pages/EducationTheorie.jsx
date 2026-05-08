import React from 'react';
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

const EducationTheorie = () => (
  <div className="space-y-10 pb-10">
    <SectionHeader icon={BookOpen} title="II. Sciences Biomédicales et Anatomie du Corps" subtitle="Étude du corps humain, du réseau de chakra, des maladies et des mécanismes biologiques" />

    {/* Rangée 1 : Biologie et Chakra Médical */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <Panel className="flex flex-col border-cyan-900/30 bg-gradient-to-br from-slate-900 to-cyan-950/10">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Microscope className="text-cyan-400 shrink-0"/> Biologie Cellulaire & Théorie Médicale
        </h3>
        <p className="text-base text-slate-200 leading-relaxed mb-5">
          Le chakra médical ne guérit pas "magiquement". Il agit en forçant et en accélérant les processus biologiques existants au sein de la cellule (unité fondamentale du vivant).
        </p>
        <div className="space-y-4 mb-5 text-base text-slate-300 flex-1">
          <div className="p-4 bg-black/40 border-l-3 border-cyan-500 rounded-r-lg">
            <strong className="text-cyan-400 block mb-1">Niveau Cellulaire & Tissulaire</strong>
            Stimulation des mitochondries pour relancer l'ATP. Accélération de la division cellulaire (mitose) et fusion des tissus déchirés.
          </div>
          <div className="p-4 bg-black/40 border-l-3 border-blue-500 rounded-r-lg">
            <strong className="text-blue-400 block mb-1">Niveau Organique</strong>
            Maintien artificiel des organes défaillants et prévention de la nécrose systémique.
          </div>
        </div>
        <div className="p-5 bg-gradient-to-r from-cyan-950/50 to-blue-900/20 border-l-3 border-cyan-500 rounded-r-lg">
          <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2 text-base"><Fish size={18}/> Le Contrôle Microscopique (Test de l'Infusion)</h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            <strong className="text-red-400">⚠️ Attention :</strong> Si le médecin injecte un chakra instable ou brutal, la surcharge énergétique provoque <strong className="text-white">instantanément la combustion ou l'explosion</strong> des cellules. L'exercice de référence consiste à soigner un poisson sans le tuer.
          </p>
        </div>
      </Panel>

      <Panel className="flex flex-col border-blue-900/30 bg-gradient-to-br from-slate-900 to-blue-950/10">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Network className="text-blue-400 shrink-0"/> Keirakukei (Réseau de Chakra)
        </h3>
        <p className="text-base text-slate-200 leading-relaxed mb-5">
          Système énergétique parallèle aux systèmes sanguin et nerveux. Composé de conduits et de 361 <strong className="text-blue-300 font-mono">Tenketsu</strong> (points de sortie).
        </p>
        <ul className="text-base space-y-4 flex-1 mb-5">
          <li className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
            <strong className="text-cyan-300 block mb-1">Énergie Physique (Yang)</strong>
            <span className="text-slate-300">Issue de l'énergie cellulaire. Moteur de la régénération tissulaire.</span>
          </li>
          <li className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
            <strong className="text-purple-300 block mb-1">Énergie Spirituelle (Yin)</strong>
            <span className="text-slate-300">Issue du cortex cérébral, de la focalisation intellectuelle.</span>
          </li>
          <li className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
            <strong className="text-slate-100 block mb-1">Interaction Organique</strong>
            <span className="text-slate-300">Le réseau de chakra est imbriqué dans les organes et le système nerveux. Un blocage des tenketsu entraîne une paralysie ou une défaillance organique grave.</span>
          </li>
        </ul>
      </Panel>
    </div>

    <ImagePlaceholder src={chakraImage} caption="Illustration — Réseau de Chakra (Keirakukei) et Tenketsu" aspectRatio="21/9" />

    {/* Rangée 2 : Physiologie et Anatomie */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <Panel>
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Activity className="text-emerald-400 shrink-0"/> Physiologie & Systèmes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
          <div className="space-y-4">
            <div className="bg-slate-800/30 p-4 rounded-lg">
              <strong className="text-emerald-400 block mb-2">Système Nerveux</strong>
              <span className="text-slate-300 text-sm">SNC (Cerveau, moelle épinière) et SNP. Transmission électrique et chimique. Lésion = paralysie/perte sensorielle.</span>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg">
              <strong className="text-emerald-400 block mb-2">Système Musculaire</strong>
              <span className="text-slate-300 text-sm">+600 muscles (squelettique, cardiaque, lisse). Mouvement, thermorégulation.</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-slate-800/30 p-4 rounded-lg">
              <strong className="text-emerald-400 block mb-2">Système Squelettique</strong>
              <span className="text-slate-300 text-sm">~206 os. Protection vitale et production sanguine via la moelle osseuse.</span>
            </div>
            <div className="bg-slate-800/30 p-4 rounded-lg">
              <strong className="text-emerald-400 block mb-2">Tissus Fondamentaux</strong>
              <span className="text-slate-300 text-sm">Épithélial (protection), Conjonctif (soutien), Musculaire, Nerveux.</span>
            </div>
          </div>
        </div>
      </Panel>

      <Panel>
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-slate-700/50 pb-3">
          <Heart className="text-rose-400 shrink-0"/> Organes Vitaux & Pathologies
        </h3>
        <div className="grid grid-cols-2 gap-4 text-base mb-5">
          <ul className="space-y-3 text-slate-300">
            <li><strong className="text-slate-100">Cerveau :</strong> Centre de contrôle absolu.</li>
            <li><strong className="text-slate-100">Cœur :</strong> Pompe systémique. Arrêt = mort.</li>
            <li><strong className="text-slate-100">Poumons :</strong> Échanges O₂ / CO₂.</li>
          </ul>
          <ul className="space-y-3 text-slate-300">
            <li><strong className="text-slate-100">Foie :</strong> Détoxification chimique.</li>
            <li><strong className="text-slate-100">Reins :</strong> Filtration sanguine.</li>
            <li><strong className="text-slate-100">Estomac/Intestins :</strong> Absorption.</li>
          </ul>
        </div>
        <div className="p-4 bg-rose-950/20 border-l-3 border-rose-500 rounded-lg text-sm text-slate-200">
          <strong className="text-rose-400 block mb-1">Infections & Septicémie</strong>
          Causées par des agents pathogènes (virus, bactéries, parasites). La septicémie (infection généralisée du sang) est un état critique immédiat en traumatologie.
        </div>
      </Panel>
    </div>

    <Divider symbol="diamond" />

    {/* Rangée 3 : Hématologie */}
    <Panel className="border-red-900/40 bg-gradient-to-br from-slate-900 to-red-950/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5"><Syringe size={150} /></div>
      <h3 className="text-2xl font-bold text-red-400 mb-3 flex items-center gap-3 relative z-10">
        <Syringe className="text-red-500 shrink-0"/> Hématologie Shinobi & Flux Vital
      </h3>
      <p className="text-base text-slate-200 mb-8 relative z-10 italic border-b border-red-900/30 pb-5 leading-relaxed">
        La circulation sanguine est un circuit fermé propulsant nutriments et oxygène. Chez les shinobi, le sang transporte également des cellules riches en chakra. Une hémorragie équivaut donc à une perte simultanée de vie et d'énergie. Le système ABO et le Rhésus dictent la survie lors des perfusions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative z-10 mb-8">
        {[
          { group: 'A', items: [
            { label: 'A+', desc: 'Antigènes A + RhD. Anticorps anti-B.', recv: 'A+, A-, O+, O-', give: 'A+, AB+' },
            { label: 'A-', desc: 'Antigène A. Anticorps anti-B.', recv: 'A-, O-', give: 'A+, A-, AB+, AB-' },
          ]},
          { group: 'B', items: [
            { label: 'B+', desc: 'Antigènes B + RhD. Anticorps anti-A.', recv: 'B+, B-, O+, O-', give: 'B+, AB+' },
            { label: 'B-', desc: 'Antigène B. Anticorps anti-A.', recv: 'B-, O-', give: 'B+, B-, AB+, AB-' },
          ]},
          { group: 'AB', items: [
            { label: 'AB+', desc: 'Antigènes A, B + RhD. Aucun anticorps.', recv: 'Tous les groupes', give: 'AB+', badge: 'Receveur Universel', badgeColor: 'green' },
            { label: 'AB-', desc: 'Antigènes A + B. Aucun anticorps.', recv: 'AB-, A-, B-, O-', give: 'AB+, AB-' },
          ]},
          { group: 'O', items: [
            { label: 'O+', desc: 'Aucun antigène A/B. Possède RhD.', recv: 'O+, O-', give: 'O+, A+, B+, AB+' },
            { label: 'O-', desc: 'Aucun antigène. Anticorps anti-A, anti-B.', recv: 'O- uniquement', give: 'Tous les groupes', badge: 'Donneur Universel', badgeColor: 'blue' },
          ]},
        ].map(({ group, items }) => (
          <div key={group} className="space-y-4">
            {items.map(({ label, desc, recv, give, badge, badgeColor }) => (
              <div key={label} className={`p-4 bg-black/40 border border-red-900/50 rounded-lg ${badge ? `shadow-[0_0_15px_rgba(${badgeColor === 'green' ? '34,197,94' : '59,130,246'},0.1)]` : ''}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${badge ? 'text-white' : 'text-red-400'} font-bold text-lg font-mono`}>{label}</span>
                  {badge && <span className={`text-[11px] uppercase bg-${badgeColor}-900/50 text-${badgeColor}-300 px-2 py-1 rounded-full`}>{badge}</span>}
                </div>
                <p className="text-sm text-slate-300 mb-2">{desc}</p>
                <div className="text-sm"><span className="text-green-400">Reçoit :</span> {recv}</div>
                <div className="text-sm"><span className="text-blue-400">Donne :</span> {give}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        <div className="p-5 bg-red-950/40 border-l-4 border-red-600 rounded-lg">
          <h4 className="font-bold text-red-400 mb-2 text-base flex items-center gap-2"><AlertTriangle size={18}/> Règle d'or en médecine d'urgence</h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            Le sang Négatif peut être donné au Positif, mais perfuser du sang Positif à un patient Négatif provoque un choc immunologique mortel. L'analyse visuelle de la viscosité et du fer permet d'évaluer l'épuisement métabolique avant le Diagnostic Sans Faille.
          </p>
        </div>
        <div className="p-5 bg-slate-900/80 border border-slate-700/50 rounded-lg font-mono text-sm">
          <h4 className="font-bold text-cyan-400 mb-3 border-b border-slate-700 pb-2">Analyse RP : Lancer de Dés</h4>
          <div className="flex justify-between text-slate-200">
            <div>
              <span className="text-slate-400 block mb-2">Dé n°1 : Groupe (1-100)</span>
              <ul className="space-y-1">
                <li>01 - 25 : <strong className="text-red-400">O</strong></li>
                <li>26 - 50 : <strong className="text-red-400">A</strong></li>
                <li>51 - 75 : <strong className="text-red-400">B</strong></li>
                <li>76 - 100 : <strong className="text-red-400">AB</strong></li>
              </ul>
            </div>
            <div>
              <span className="text-slate-400 block mb-2">Dé n°2 : Polarité (1-100)</span>
              <ul className="space-y-1">
                <li>01 - 85 : <strong className="text-blue-400">Positif (+)</strong></li>
                <li>86 - 100 : <strong className="text-blue-400">Négatif (-)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Panel>

    <Divider symbol="cross" />

    {/* Rangée 6 : Toxicologie, Pharmacologie et Botanique */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Panel className="lg:col-span-1 border-green-900/30 bg-gradient-to-b from-slate-900/60 to-green-950/10 flex flex-col">
        <h3 className="text-xl font-bold text-green-100 mb-5 flex items-center gap-3 border-b border-green-900/30 pb-3"><Biohazard className="text-green-500 shrink-0"/> Pharmaco-Toxicologie</h3>
        <div className="space-y-6 text-base overflow-y-auto pr-2 flex-1">
          <div>
            <h4 className="text-slate-200 font-bold mb-3 border-b border-slate-700/50 pb-2">Classes Pharmacologiques</h4>
            <ul className="space-y-2">
              {[
                ['Analgésiques', 'Douleur'], ['Anti-inflammatoires', 'Inflammation'],
                ['Antibiotiques', 'Infections bactériennes'], ['Anticoagulants', 'Fluidification sanguine'],
                ['Anesthésiants', 'Perte de conscience']
              ].map(([name, use]) => (
                <li key={name} className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg">
                  <span className="font-medium text-slate-200">{name}</span>
                  <span className="text-slate-400 text-sm">{use}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-200 font-bold mb-3 border-b border-slate-700/50 pb-2">Agents Toxiques</h4>
            {[
              { name: 'Hémotoxines', color: 'red', desc: 'Détruisent la coagulation (hémorragie fulgurante ou thrombose).' },
              { name: 'Neurotoxines', color: 'purple', desc: 'Bloquent les synapses (paralysie, asphyxie, convulsions, dégénérescence nerveuse).' },
              { name: 'Cytotoxines', color: 'green', desc: 'Nécrose localisée foudroyante qui détruit ou liquéfie les tissus cellulaires.' },
            ].map(({ name, color, desc }) => (
              <div key={name} className="p-4 bg-black/40 border border-green-900/30 rounded-lg mb-3">
                <strong className={`text-${color}-400 block font-mono mb-1`}>{name}</strong>
                <span className="text-slate-300 text-sm">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Panel>

      <Panel className="lg:col-span-2 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 shrink-0 border-b border-slate-700/50 pb-3"><TestTube className="text-yellow-400 shrink-0"/> Botanique Paramédicale Intégrale</h3>
        <CollapsibleGradient maxHeight="400px" buttonTextClosed="Déployer le manuel botanique" className="rounded-xl border border-slate-700/50 bg-slate-950/50 shadow-inner">
          <table className="w-full text-base text-left">
            <thead className="text-sm text-cyan-400 uppercase bg-slate-900/90 backdrop-blur-md sticky top-0 z-10 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
              <tr>
                <th className="px-6 py-4 tracking-wider">Espèce Végétale</th>
                <th className="px-6 py-4 tracking-wider">Propriétés / Application Clinique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono text-sm">
              {[
                { name: "Herbe d'Armure", color: "text-slate-200", desc: "Fortifiant tissulaire préventif." },
                { name: "Herbe au Loup", color: "text-green-400", desc: "Poison neuro/cytotoxique brut." },
                { name: "Racine de Dragon", color: "text-yellow-500", desc: "Base pour antidotes universels." },
                { name: "Aconit (Acônito)", color: "text-purple-400", desc: "Racine toxique, puissants effets analgésiques et sédatifs." },
                { name: "Réglisse (Kanzō)", color: "text-slate-200", desc: "Stabilisateur biochimique pour drogues médicales." },
                { name: "Clou de Girofle", color: "text-orange-300", desc: "Antiseptique et antibactérien naturel." },
                { name: "Cistanche / Épimède", color: "text-slate-200", desc: "Plantes de base pour préparations curatives complexes." },
                { name: "Écorce de Cannelle", color: "text-orange-400", desc: "Vasodilatateur, favorise la circulation du chakra." },
                { name: "Racine de Ginseng", color: "text-red-300", desc: "Boost énergétique majeur, ingrédient des pilules militaires." },
                { name: "Racine de Pivoine", color: "text-pink-300", desc: "Antispasmodique puissant, stoppe les convulsions." },
                { name: "Racine de Rehmannia", color: "text-slate-200", desc: "Régénération du système nerveux et des tissus osseux." },
                { name: "Rac. Saposhnikovia", color: "text-slate-200", desc: "Médecine traditionnelle anti-maladies systémiques." },
                { name: "Rhizome de Curcuma", color: "text-yellow-400", desc: "Anti-inflammatoire et propriétés curatives générales." },
                { name: "Secours Shinobi", color: "text-green-300", desc: "Comestible de terrain. Soutient la survie en milieu hostile." },
                { name: "Herbes Blanches", color: "text-white", desc: "Cicatrisant d'urgence pour lacérations sévères (cf. Zabuza)." },
                { name: "Megusurisō (Œil)", color: "text-cyan-300", desc: "Réduit drastiquement la fatigue liée aux Dōjutsu." },
                { name: "Cochléaire", color: "text-lime-400", desc: "Agent purifiant utilisé dans la synthèse d'antidotes complexes." },
                { name: "Carotte d'Énergie", color: "text-orange-500", desc: "Boost d'endurance massif, additif pour pilules ninja." },
                { name: "Herbe Mandra", color: "text-slate-300", desc: "Plante extrêmement amère aux puissantes vertus sédatives." },
                { name: "Matatabi (Vigne)", color: "text-blue-300", desc: "Tonique systémique, protège le foie et la pompe cardiaque." },
                { name: "Herbe Géante", color: "text-emerald-400", desc: "Applications paramédicales diverses et rustiques de brousse." },
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
                  <td className={`px-6 py-4 font-bold ${item.color} group-hover:text-glow-cyan`}>{item.name}</td>
                  <td className="px-6 py-4 text-slate-300 group-hover:text-slate-100">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CollapsibleGradient>
      </Panel>
    </div>
  </div>
);

export default EducationTheorie;