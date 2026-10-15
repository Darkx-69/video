import React, { useState } from 'react';
import { CAUSE_SCENES, CAUSES_CONVERGENCE, CauseScene } from '@/content/causes';
import { Trees, Wheat, Factory, Trash2, Info } from 'lucide-react';

interface CausesSectionProps {
  isReducedMotion: boolean;
}

export const CausesSection: React.FC<CausesSectionProps> = ({
  isReducedMotion,
}) => {
  const [activeSceneId, setActiveSceneId] = useState<string>('fossil-fuels');
  const activeScene: CauseScene =
    CAUSE_SCENES.find((s) => s.id === activeSceneId) || CAUSE_SCENES[0];

  const getSceneIcon = (id: string) => {
    switch (id) {
      case 'fossil-fuels':
        return <Factory className="w-4 h-4 text-sun-amber" />;
      case 'deforestation':
        return <Trees className="w-4 h-4 text-emerald-400" />;
      case 'agriculture':
        return <Wheat className="w-4 h-4 text-yellow-400" />;
      case 'industry':
        return <Factory className="w-4 h-4 text-sky-400" />;
      case 'waste':
        return <Trash2 className="w-4 h-4 text-purple-400" />;
      default:
        return <Factory className="w-4 h-4 text-sun-amber" />;
    }
  };

  return (
    <section
      id="causes"
      aria-labelledby="causes-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-navy/50 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 04</span>
            <span>·</span>
            <span>Anthropogenic Drivers</span>
          </div>
          <h2
            id="causes-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            What Is Strengthening the Greenhouse Effect?
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Examine the primary human activities that release greenhouse gases into Earth’s shared atmosphere.
          </p>
        </div>

        {/* Five Emission Sources Switcher Tabs */}
        <div
          role="tablist"
          aria-label="Five human emission sources"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {CAUSE_SCENES.map((scene) => {
            const isActive = activeSceneId === scene.id;
            return (
              <button
                key={scene.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`cause-panel-${scene.id}`}
                id={`cause-tab-${scene.id}`}
                onClick={() => setActiveSceneId(scene.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isActive
                    ? 'bg-atmos-blue text-space border-atmos-blue font-bold shadow-lg shadow-atmos-blue/20 scale-[1.02]'
                    : 'bg-navy/70 text-app-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                    Scene 0{scene.sceneNumber}
                  </span>
                  {getSceneIcon(scene.id)}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate">
                  {scene.title}
                </div>
                <div className="text-[11px] font-mono opacity-80 mt-1">
                  Gas: {scene.gasType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Scene Stage (Illustration + Narration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Scientific Illustration Container (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-navy/40 border border-atmos-blue/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[440px]">
            {/* Top Atmospheric Band (Common shared accumulation zone) */}
            <div className="w-full bg-space/80 border border-atmos-blue/30 rounded-xl p-3 flex items-center justify-between text-xs mb-6">
              <span className="font-mono text-atmos-blue font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-atmos-blue animate-pulse" />
                Shared Atmospheric Reservoir
              </span>
              <span className="text-app-muted font-mono text-[11px]">
                Target Gas: <strong className="text-sun-amber">{activeScene.gasType}</strong>
              </span>
            </div>

            {/* Dynamic Illustrated Scene SVG */}
            <div className="relative w-full aspect-[16/10] max-h-[360px] my-auto flex items-center justify-center">
              <svg
                viewBox="0 0 600 360"
                className="w-full h-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
                aria-label={`Illustration for ${activeScene.title}`}
              >
                <defs>
                  <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                </defs>

                {/* Ground plane */}
                <rect x="0" y="260" width="600" height="100" fill="url(#groundGrad)" />

                {/* SCENE 1: Fossil Fuels (Power station, smokestacks, vehicles) */}
                {activeScene.id === 'fossil-fuels' && (
                  <g id="scene-fossil">
                    {/* Power Plant main building */}
                    <rect x="120" y="160" width="160" height="100" fill="#334155" rx="4" />
                    <rect x="140" y="180" width="30" height="40" fill="#1E293B" />
                    <rect x="190" y="180" width="30" height="40" fill="#1E293B" />
                    <rect x="240" y="180" width="25" height="40" fill="#1E293B" />
                    {/* Smokestack 1 */}
                    <polygon points="150,160 170,160 165,80 155,80" fill="#475569" />
                    {/* Smokestack 2 */}
                    <polygon points="210,160 230,160 225,90 215,90" fill="#475569" />
                    {/* Rising CO2 emissions markers */}
                    <g className={isReducedMotion ? '' : 'animate-bounce'}>
                      <circle cx="160" cy="50" r="14" fill="#0B1226" stroke="#FFB454" strokeWidth="2" />
                      <text x="160" y="54" textAnchor="middle" fill="#FFB454" fontSize="9" fontWeight="bold">CO₂</text>
                      <circle cx="220" cy="60" r="14" fill="#0B1226" stroke="#FFB454" strokeWidth="2" />
                      <text x="220" y="64" textAnchor="middle" fill="#FFB454" fontSize="9" fontWeight="bold">CO₂</text>
                    </g>
                    {/* Vehicles on transit corridor */}
                    <rect x="360" y="240" width="70" height="20" rx="4" fill="#64748B" />
                    <circle cx="375" cy="260" r="6" fill="#0F172A" />
                    <circle cx="415" cy="260" r="6" fill="#0F172A" />
                    <text x="395" y="254" textAnchor="middle" fill="#FFFFFF" fontSize="8">Transport</text>
                  </g>
                )}

                {/* SCENE 2: Deforestation (Canopy loss, carbon release, no sensational flames) */}
                {activeScene.id === 'deforestation' && (
                  <g id="scene-forest">
                    {/* Standing healthy trees on left */}
                    <polygon points="100,260 115,260 110,210 105,210" fill="#78350F" />
                    <circle cx="108" cy="180" r="32" fill="#059669" />
                    <polygon points="160,260 175,260 170,210 165,210" fill="#78350F" />
                    <circle cx="168" cy="170" r="38" fill="#10B981" />
                    {/* Cleared / Stored Carbon loss indicator */}
                    <rect x="280" y="235" width="40" height="25" rx="3" fill="#92400E" />
                    <text x="300" y="252" textAnchor="middle" fill="#FEF3C7" fontSize="8" fontWeight="bold">Stump</text>
                    {/* Shrinking Carbon Store indicator badge */}
                    <rect x="370" y="140" width="160" height="50" rx="8" fill="#0B1226" stroke="#059669" strokeWidth="1.5" />
                    <text x="450" y="162" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">
                      Biological Carbon Store
                    </text>
                    <text x="450" y="178" textAnchor="middle" fill="#A9B4C8" fontSize="9">
                      Forest biomass & soil sink reduced
                    </text>
                    {/* Released CO2 markers */}
                    <circle cx="280" cy="90" r="14" fill="#0B1226" stroke="#FFB454" strokeWidth="2" />
                    <text x="280" y="94" textAnchor="middle" fill="#FFB454" fontSize="9" fontWeight="bold">CO₂</text>
                  </g>
                )}

                {/* SCENE 3: Agriculture and Livestock (Cattle, rice paddies, fertilizer) */}
                {activeScene.id === 'agriculture' && (
                  <g id="scene-agri">
                    {/* Ruminant Cattle stylized */}
                    <rect x="120" y="210" width="70" height="35" rx="6" fill="#D97706" />
                    <rect x="105" y="195" width="25" height="25" rx="4" fill="#B45309" />
                    <line x1="130" y1="245" x2="130" y2="260" stroke="#B45309" strokeWidth="4" />
                    <line x1="175" y1="245" x2="175" y2="260" stroke="#B45309" strokeWidth="4" />
                    {/* Enteric Methane marker */}
                    <circle cx="130" cy="130" r="14" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
                    <text x="130" y="134" textAnchor="middle" fill="#4DA3FF" fontSize="9" fontWeight="bold">CH₄</text>
                    <text x="130" y="156" textAnchor="middle" fill="#A9B4C8" fontSize="8">Livestock</text>

                    {/* Flooded rice paddy field */}
                    <rect x="250" y="250" width="130" height="15" fill="#0284C7" />
                    <line x1="270" y1="240" x2="270" y2="255" stroke="#15803D" strokeWidth="3" />
                    <line x1="300" y1="238" x2="300" y2="255" stroke="#15803D" strokeWidth="3" />
                    <line x1="330" y1="240" x2="330" y2="255" stroke="#15803D" strokeWidth="3" />
                    <circle cx="310" cy="110" r="14" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
                    <text x="310" y="114" textAnchor="middle" fill="#4DA3FF" fontSize="9" fontWeight="bold">CH₄</text>
                    <text x="310" y="136" textAnchor="middle" fill="#A9B4C8" fontSize="8">Rice Paddies</text>

                    {/* Fertilized soil section */}
                    <rect x="420" y="245" width="120" height="20" fill="#475569" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <circle cx="480" cy="100" r="14" fill="#0B1226" stroke="#A855F7" strokeWidth="2" />
                    <text x="480" y="104" textAnchor="middle" fill="#A855F7" fontSize="9" fontWeight="bold">N₂O</text>
                    <text x="480" y="126" textAnchor="middle" fill="#A9B4C8" fontSize="8">Fertilised Soils</text>
                  </g>
                )}

                {/* SCENE 4: Industrial Processes (Cement plant, rotary kiln, silos) */}
                {activeScene.id === 'industry' && (
                  <g id="scene-cement">
                    {/* Raw Material Silo */}
                    <rect x="100" y="140" width="50" height="120" rx="4" fill="#64748B" />
                    <path d="M100,140 Q125,120 150,140 Z" fill="#475569" />
                    {/* Rotary Kiln (inclined calcination cylinder) */}
                    <polygon points="170,220 330,170 335,195 175,245" fill="#94A3B8" />
                    {/* Production pathways conveyor */}
                    <line x1="150" y1="230" x2="340" y2="230" stroke="#334155" strokeWidth="6" />
                    {/* Plant buildings */}
                    <rect x="360" y="160" width="120" height="100" fill="#334155" rx="4" />
                    {/* Chemical process CO2 marker (CaCO3 calcination) */}
                    <circle cx="270" cy="90" r="14" fill="#0B1226" stroke="#FFB454" strokeWidth="2" />
                    <text x="270" y="94" textAnchor="middle" fill="#FFB454" fontSize="9" fontWeight="bold">CO₂</text>
                    <text x="270" y="116" textAnchor="middle" fill="#FFB454" fontSize="8">Calcination (Chemical)</text>
                  </g>
                )}

                {/* SCENE 5: Waste Management (Landfill cross section, decomposing waste) */}
                {activeScene.id === 'waste' && (
                  <g id="scene-waste">
                    {/* Landfill pit excavation */}
                    <polygon points="120,260 160,330 440,330 480,260" fill="#292524" />
                    {/* Compacted organic layers */}
                    <rect x="170" y="280" width="260" height="15" fill="#78350F" opacity="0.8" />
                    <rect x="180" y="305" width="240" height="15" fill="#451A03" opacity="0.9" />
                    {/* Subterranean anaerobic digestion label */}
                    <text x="300" y="325" textAnchor="middle" fill="#D6D3D1" fontSize="9">
                      Anaerobic Microbial Decomposition
                    </text>
                    {/* Rising methane emissions */}
                    <circle cx="250" cy="120" r="14" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
                    <text x="250" y="124" textAnchor="middle" fill="#4DA3FF" fontSize="9" fontWeight="bold">CH₄</text>
                    <circle cx="350" cy="90" r="14" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
                    <text x="350" y="94" textAnchor="middle" fill="#4DA3FF" fontSize="9" fontWeight="bold">CH₄</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Elements list tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {activeScene.elements.map((el, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-app-muted"
                >
                  {el}
                </span>
              ))}
            </div>
          </div>

          {/* Narration Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div
              id={`cause-panel-${activeScene.id}`}
              role="tabpanel"
              aria-labelledby={`cause-tab-${activeScene.id}`}
              className="bg-navy/50 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg"
            >
              <div className="text-xs font-mono text-sun-amber uppercase tracking-widest mb-2">
                Scene 0{activeScene.sceneNumber} of 5
              </div>
              <h3 className="text-2xl font-bold text-app-text mb-4">
                {activeScene.title}
              </h3>
              <p className="text-base sm:text-lg text-app-text/95 leading-relaxed font-normal mb-6">
                “{activeScene.narration}”
              </p>
              <div className="p-4 rounded-xl bg-space/70 border border-white/10 text-xs text-app-muted space-y-2">
                <span className="font-semibold text-app-text">Visual Context:</span>
                <p>{activeScene.visualDescription}</p>
              </div>
            </div>

            {/* Scientific Disclaimers & Notes */}
            <div className="bg-space/60 border border-white/10 rounded-2xl p-5 flex items-start gap-3 text-xs text-app-muted">
              <Info className="w-4 h-4 text-atmos-blue shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                “{CAUSES_CONVERGENCE.note}”
              </p>
            </div>
          </div>
        </div>

        {/* Convergence Section Banner */}
        <div className="bg-gradient-to-r from-space via-navy to-space border-2 border-atmos-blue/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <span className="inline-block text-xs font-mono tracking-widest uppercase text-atmos-blue px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/20">
            {CAUSES_CONVERGENCE.eyebrow}
          </span>
          <h4 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-mint max-w-4xl mx-auto leading-snug">
            {CAUSES_CONVERGENCE.headline}
          </h4>
          <p className="text-sm text-app-muted max-w-2xl mx-auto">
            All five emission pathways elevate the atmospheric greenhouse gas burden, retaining incremental thermal energy in the global climate system.
          </p>
        </div>
      </div>
    </section>
  );
};
