import React, { useState } from 'react';
import { IMPACT_SCENES, IMPACTS_NOTE, ImpactScene } from '@/content/impacts';
import { EarthScene } from '@/components/scenes/EarthScene';
import {
  Thermometer,
  Waves,
  CloudRain,
  Fish,
  HeartPulse,
  Info,
  ChevronRight,
} from 'lucide-react';

interface ImpactsSectionProps {
  isReducedMotion: boolean;
}

export const ImpactsSection: React.FC<ImpactsSectionProps> = ({
  isReducedMotion,
}) => {
  const [activeImpactIndex, setActiveImpactIndex] = useState<number>(0);
  const activeImpact: ImpactScene = IMPACT_SCENES[activeImpactIndex];

  const getImpactIcon = (id: string) => {
    switch (id) {
      case 'temperature':
        return <Thermometer className="w-4 h-4 text-ir-coral" />;
      case 'ice-and-seas':
        return <Waves className="w-4 h-4 text-atmos-blue" />;
      case 'extremes':
        return <CloudRain className="w-4 h-4 text-sun-amber" />;
      case 'ecosystems':
        return <Fish className="w-4 h-4 text-teal-400" />;
      case 'agriculture-health':
        return <HeartPulse className="w-4 h-4 text-rose-400" />;
      default:
        return <Thermometer className="w-4 h-4 text-ir-coral" />;
    }
  };

  return (
    <section
      id="impacts"
      aria-labelledby="impacts-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-navy/60 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 05</span>
            <span>·</span>
            <span>Systemic Consequences</span>
          </div>
          <h2
            id="impacts-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            Consequences for the Planet and Society
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Follow the physical and societal outcomes resulting from shifts in global radiative forcing and thermodynamic equilibria.
          </p>
        </div>

        {/* Five Impact Selector Tabs */}
        <div
          role="tablist"
          aria-label="Five progressive climate impacts"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {IMPACT_SCENES.map((impact, index) => {
            const isActive = activeImpactIndex === index;
            return (
              <button
                key={impact.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`impact-panel-${impact.id}`}
                id={`impact-tab-${impact.id}`}
                onClick={() => setActiveImpactIndex(index)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  isActive
                    ? 'bg-atmos-blue text-space border-atmos-blue font-bold shadow-lg shadow-atmos-blue/20 scale-[1.02]'
                    : 'bg-navy/70 text-app-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                    Impact 0{impact.impactNumber}
                  </span>
                  {getImpactIcon(impact.id)}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate">
                  {impact.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Stage: Central Earth + Impact Graphic + Editorial Narration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Canvas (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-navy/40 border border-atmos-blue/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[460px]">
            {/* Header pill */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-atmos-blue uppercase tracking-wider">
                Systemic Dynamic: {activeImpact.title}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-app-text">
                0{activeImpact.impactNumber} / 05
              </span>
            </div>

            {/* Schematic Visual tailored per impact */}
            <div className="relative w-full aspect-[16/10] max-h-[380px] my-auto flex items-center justify-center">
              {/* IMPACT 1: Rising Temperatures (Schematic Planetary Anomaly Glow) */}
              {activeImpact.id === 'temperature' && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    <EarthScene
                      size="100%"
                      isReducedMotion={isReducedMotion}
                      atmosphereIntensity={1.4}
                      showInfraredGlow={true}
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-ir-coral/40 animate-ping opacity-30 pointer-events-none" />
                  </div>
                  <div className="mt-4 text-center text-xs font-mono text-sun-amber">
                    Global Surface Energy Imbalance: Net Positive Retention
                  </div>
                </div>
              )}

              {/* IMPACT 2: Melting Land Ice vs Floating Sea Ice */}
              {activeImpact.id === 'ice-and-seas' && (
                <svg viewBox="0 0 500 300" className="w-full h-full overflow-visible">
                  {/* Continental Land Mass on Left with Glacier */}
                  <polygon points="20,280 200,280 200,140 80,180 20,280" fill="#1E293B" />
                  {/* Land Glacier (Melting, adding mass) */}
                  <polygon points="40,210 160,150 190,170 120,230" fill="#E0F2FE" opacity="0.9" />
                  <text x="70" y="160" fill="#0284C7" fontSize="10" fontWeight="bold">Land Ice (Glacier)</text>
                  <text x="70" y="174" fill="#64748B" fontSize="8.5">Adds volume to ocean</text>

                  {/* Ocean Water Basin with Rising Sea Level Marker */}
                  <rect x="200" y="190" width="280" height="90" fill="#0369A1" opacity="0.8" />
                  <line x1="200" y1="190" x2="480" y2="190" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="320" y="210" textAnchor="middle" fill="#BAE6FD" fontSize="10" fontWeight="bold">
                    Rising Sea Level: Meltwater + Thermal Expansion
                  </text>

                  {/* Floating Sea Ice on Right (Distinctly distinguished) */}
                  <rect x="360" y="180" width="80" height="20" rx="3" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1" />
                  <text x="400" y="172" textAnchor="middle" fill="#0284C7" fontSize="9.5" fontWeight="bold">
                    Floating Sea Ice
                  </text>
                  <text x="400" y="240" textAnchor="middle" fill="#CBD5E1" fontSize="8.5">
                    (Already displaces water volume)
                  </text>
                </svg>
              )}

              {/* IMPACT 3: Extreme Heat & Changing Precipitation */}
              {activeImpact.id === 'extremes' && (
                <svg viewBox="0 0 500 300" className="w-full h-full overflow-visible">
                  {/* Left: Heatwave & Drought zone */}
                  <rect x="40" y="160" width="190" height="110" rx="10" fill="#451A03" opacity="0.4" stroke="#D97706" strokeWidth="1.5" />
                  <circle cx="135" cy="110" r="30" fill="#F59E0B" opacity="0.8" />
                  <text x="135" y="190" textAnchor="middle" fill="#FDE68A" fontSize="11" fontWeight="bold">
                    Amplified Heatwaves & Dry Spells
                  </text>
                  <text x="135" y="210" textAnchor="middle" fill="#D1D5DB" fontSize="9">
                    Faster soil moisture evaporation
                  </text>

                  {/* Right: Heavy Rainfall & Extreme Precipitation */}
                  <rect x="270" y="160" width="190" height="110" rx="10" fill="#0C4A6E" opacity="0.4" stroke="#0284C7" strokeWidth="1.5" />
                  {/* Cloud with Rain lines */}
                  <path d="M330,110 Q350,90 380,95 Q410,85 430,110 Q445,115 440,130 Q430,140 330,140 Z" fill="#94A3B8" />
                  <line x1="350" y1="145" x2="340" y2="175" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 3" />
                  <line x1="380" y1="145" x2="370" y2="175" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 3" />
                  <line x1="410" y1="145" x2="400" y2="175" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="3 3" />
                  <text x="365" y="200" textAnchor="middle" fill="#BAE6FD" fontSize="11" fontWeight="bold">
                    Intense Downpours
                  </text>
                  <text x="365" y="218" textAnchor="middle" fill="#D1D5DB" fontSize="9">
                    Warmer air holds +7% moisture per °C
                  </text>
                </svg>
              )}

              {/* IMPACT 4: Ecosystem Disruption (Coral Bleaching & Habitats) */}
              {activeImpact.id === 'ecosystems' && (
                <svg viewBox="0 0 500 300" className="w-full h-full overflow-visible">
                  {/* Ocean Bed */}
                  <rect x="30" y="240" width="440" height="50" fill="#134E4A" rx="4" />
                  {/* Healthy Coral on Left */}
                  <path d="M80,240 Q90,170 110,180 Q130,150 145,240 Z" fill="#F43F5E" />
                  <circle cx="110" cy="170" r="12" fill="#FB7185" />
                  <text x="110" y="260" textAnchor="middle" fill="#FECDD3" fontSize="10" fontWeight="bold">Healthy Coral Reef</text>

                  {/* Bleached Coral on Center-Right (Thermal stress) */}
                  <path d="M260,240 Q270,170 290,180 Q310,150 325,240 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
                  <circle cx="290" cy="170" r="12" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
                  <text x="290" y="260" textAnchor="middle" fill="#CBD5E1" fontSize="10" fontWeight="bold">Thermal Bleaching</text>

                  {/* Shifting Terrestrial Habitat Network on Right */}
                  <g transform="translate(390, 160)">
                    <circle cx="0" cy="0" r="16" fill="#047857" />
                    <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="8">Habitat</text>
                    <line x1="0" y1="-20" x2="0" y2="-55" stroke="#34D399" strokeWidth="2" strokeDasharray="3 2" />
                    <polygon points="0,-55 -4,-45 4,-45" fill="#34D399" />
                    <text x="35" y="-35" fill="#34D399" fontSize="9">Poleward Shift</text>
                  </g>
                </svg>
              )}

              {/* IMPACT 5: Agriculture and Human Health */}
              {activeImpact.id === 'agriculture-health' && (
                <svg viewBox="0 0 500 300" className="w-full h-full overflow-visible">
                  {/* Crop Thermal & Water Stress (Left) */}
                  <rect x="50" y="150" width="180" height="120" rx="10" fill="#1C1917" stroke="#D97706" strokeWidth="1" />
                  <text x="140" y="180" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    Crop Stress & Water Deficits
                  </text>
                  <text x="140" y="200" textAnchor="middle" fill="#D6D3D1" fontSize="9">
                    Thermal thresholds during flowering
                  </text>
                  <text x="140" y="220" textAnchor="middle" fill="#A8A29E" fontSize="9">
                    Regional yield sensitivities
                  </text>

                  {/* Urban Heat & Human Health (Right) */}
                  <rect x="270" y="150" width="180" height="120" rx="10" fill="#1C1917" stroke="#F43F5E" strokeWidth="1" />
                  <text x="360" y="180" textAnchor="middle" fill="#FB7185" fontSize="11" fontWeight="bold">
                    Human Health & Heat Vulnerability
                  </text>
                  <text x="360" y="200" textAnchor="middle" fill="#D6D3D1" fontSize="9">
                    Wet-bulb temperature stress
                  </text>
                  <text x="360" y="220" textAnchor="middle" fill="#A8A29E" fontSize="9">
                    Depends on local adaptation capacity
                  </text>
                </svg>
              )}
            </div>

            {/* Key concepts pill list */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {activeImpact.keyConcepts.map((concept, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-app-muted"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Narration Card (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div
              id={`impact-panel-${activeImpact.id}`}
              role="tabpanel"
              aria-labelledby={`impact-tab-${activeImpact.id}`}
              className="bg-navy/50 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg"
            >
              <div className="text-xs font-mono text-atmos-blue uppercase tracking-widest mb-2">
                Consequence 0{activeImpact.impactNumber} of 5
              </div>
              <h3 className="text-2xl font-bold text-app-text mb-4">
                {activeImpact.title}
              </h3>
              <p className="text-base sm:text-lg text-app-text/95 leading-relaxed font-normal mb-6">
                “{activeImpact.narration}”
              </p>
              <div className="p-4 rounded-xl bg-space/70 border border-white/10 text-xs text-app-muted space-y-2">
                <span className="font-semibold text-app-text">Physical Mechanism:</span>
                <p className="leading-relaxed">{activeImpact.scientificMechanism}</p>
              </div>

              {/* Navigation button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <button
                  disabled={activeImpactIndex === 0}
                  onClick={() => setActiveImpactIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium text-app-muted hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeImpactIndex === IMPACT_SCENES.length - 1}
                  onClick={() => setActiveImpactIndex((prev) => Math.min(IMPACT_SCENES.length - 1, prev + 1))}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium bg-atmos-blue text-space font-semibold hover:bg-sky-400 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <span>Next Consequence</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Scientific Disclaimers & Notes */}
            <div className="bg-space/60 border border-white/10 rounded-2xl p-5 flex items-start gap-3 text-xs text-app-muted">
              <Info className="w-4 h-4 text-atmos-blue shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                “{IMPACTS_NOTE}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
