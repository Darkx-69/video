import React, { useState } from 'react';
import {
  SOLUTION_SCENES,
  MITIGATION_VS_ADAPTATION,
  SolutionScene,
} from '@/content/solutions';
import { EarthScene } from '@/components/scenes/EarthScene';
import {
  Sun,
  Zap,
  Bike,
  Trees,
  Recycle,
  Building2,
  Users,
  CheckCircle2,
  Shield,
  Sparkles,
} from 'lucide-react';

interface SolutionsSectionProps {
  isReducedMotion: boolean;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  isReducedMotion,
}) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('renewable-energy');
  const activeSolution: SolutionScene =
    SOLUTION_SCENES.find((s) => s.id === activeSolutionId) || SOLUTION_SCENES[0];

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'renewable-energy':
        return <Sun className="w-4 h-4 text-sun-amber" />;
      case 'energy-efficiency':
        return <Zap className="w-4 h-4 text-mint" />;
      case 'sustainable-transport':
        return <Bike className="w-4 h-4 text-teal-300" />;
      case 'forest-conservation':
        return <Trees className="w-4 h-4 text-emerald-400" />;
      case 'agriculture-waste':
        return <Recycle className="w-4 h-4 text-lime-400" />;
      case 'government-industry':
        return <Building2 className="w-4 h-4 text-sky-400" />;
      case 'individual-action':
        return <Users className="w-4 h-4 text-pink-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-mint" />;
    }
  };

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-[#0A1A2F] to-[#0D243A] border-t border-white/5 transition-colors duration-1000"
    >
      {/* Luminous Dawn Ambient Background Glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mint/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-atmos-blue/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/15 border border-mint/30 text-mint text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 07</span>
            <span>·</span>
            <span>Pathways Forward</span>
          </div>
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            Solutions and the Way Forward
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Achieving climate stability requires rapid decarbonisation, systemic policy interventions, technological deployment, and community resilience.
          </p>
        </div>

        {/* 1. SEVEN INTERACTIVE SOLUTION PATHWAYS TABS */}
        <div className="space-y-6">
          <div
            role="tablist"
            aria-label="Seven solution pathways"
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5"
          >
            {SOLUTION_SCENES.map((sol) => {
              const isActive = activeSolutionId === sol.id;
              return (
                <button
                  key={sol.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`sol-panel-${sol.id}`}
                  id={`sol-tab-${sol.id}`}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-mint text-space border-mint font-bold shadow-lg shadow-mint/20 scale-[1.03]'
                      : 'bg-navy/70 text-app-muted border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                      0{sol.solutionNumber}
                    </span>
                    {getSolutionIcon(sol.id)}
                  </div>
                  <div className="text-xs font-semibold leading-tight">
                    {sol.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Stage: Visual Diagram + Narration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Illustration Card (Left 7 Cols) */}
            <div className="lg:col-span-7 bg-navy/50 border border-mint/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[440px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-mint uppercase tracking-wider font-semibold">
                  Clean Solution: {activeSolution.title}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-mint/15 text-mint border border-mint/30">
                  Pathway 0{activeSolution.solutionNumber} of 07
                </span>
              </div>

              {/* Dynamic Solution SVG */}
              <div className="relative w-full aspect-[16/10] max-h-[340px] my-auto flex items-center justify-center">
                <svg viewBox="0 0 600 340" className="w-full h-full overflow-visible">
                  {/* Subtle Mint Connecting Pathway Background */}
                  <path
                    d="M30,280 Q150,220 300,260 T570,220"
                    fill="none"
                    stroke="#67E8B5"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                    opacity="0.4"
                  />

                  {/* SOL 1: Renewable Energy (Solar, wind, smart grid) */}
                  {activeSolution.id === 'renewable-energy' && (
                    <g>
                      {/* Wind Turbines */}
                      <line x1="160" y1="280" x2="160" y2="120" stroke="#E2E8F0" strokeWidth="4" />
                      <circle cx="160" cy="120" r="6" fill="#FFFFFF" />
                      {/* Rotating blades */}
                      <g className={isReducedMotion ? '' : 'animate-spin origin-[160px_120px]'}>
                        <line x1="160" y1="120" x2="160" y2="70" stroke="#FFFFFF" strokeWidth="3" />
                        <line x1="160" y1="120" x2="203" y2="145" stroke="#FFFFFF" strokeWidth="3" />
                        <line x1="160" y1="120" x2="117" y2="145" stroke="#FFFFFF" strokeWidth="3" />
                      </g>
                      {/* Solar PV Panels */}
                      <polygon points="260,280 340,280 380,240 300,240" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
                      <line x1="280" y1="260" x2="360" y2="260" stroke="#60A5FA" strokeWidth="1" />
                      <line x1="320" y1="280" x2="340" y2="240" stroke="#60A5FA" strokeWidth="1" />
                      {/* Smart Grid Transmission Towers */}
                      <line x1="460" y1="280" x2="460" y2="160" stroke="#94A3B8" strokeWidth="3" />
                      <line x1="440" y1="190" x2="480" y2="190" stroke="#94A3B8" strokeWidth="2" />
                      <line x1="440" y1="190" x2="460" y2="160" stroke="#94A3B8" strokeWidth="1.5" />
                      <line x1="480" y1="190" x2="460" y2="160" stroke="#94A3B8" strokeWidth="1.5" />
                      <text x="320" y="310" textAnchor="middle" fill="#67E8B5" fontSize="11" fontWeight="bold">
                        Zero-Operational Emission Clean Electricity
                      </text>
                    </g>
                  )}

                  {/* SOL 2: Energy Efficiency (Insulated envelope, LEDs, heat pump) */}
                  {activeSolution.id === 'energy-efficiency' && (
                    <g>
                      {/* Efficient Building Architecture */}
                      <rect x="180" y="140" width="240" height="140" rx="6" fill="#1E293B" stroke="#67E8B5" strokeWidth="2.5" />
                      {/* Thermal Insulation Layer */}
                      <rect x="172" y="132" width="256" height="156" rx="8" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
                      <text x="300" y="120" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold">
                        High-Performance Thermal Insulation Envelope
                      </text>
                      {/* LED Luminaire */}
                      <circle cx="300" cy="180" r="14" fill="#FEF08A" opacity="0.9" />
                      <text x="300" y="210" textAnchor="middle" fill="#E2E8F0" fontSize="9">
                        Solid-State LED Lighting
                      </text>
                      {/* Heat Pump System */}
                      <rect x="220" y="240" width="50" height="30" rx="4" fill="#0284C7" />
                      <text x="245" y="258" textAnchor="middle" fill="#FFFFFF" fontSize="8">Heat Pump</text>
                    </g>
                  )}

                  {/* SOL 3: Sustainable Transport (Electric light rail, cycling greenways) */}
                  {activeSolution.id === 'sustainable-transport' && (
                    <g>
                      {/* Electric Light Rail Transit Train */}
                      <rect x="120" y="220" width="180" height="50" rx="8" fill="#0F766E" stroke="#2DD4BF" strokeWidth="2" />
                      <rect x="140" y="232" width="30" height="20" rx="2" fill="#E0F2FE" />
                      <rect x="185" y="232" width="30" height="20" rx="2" fill="#E0F2FE" />
                      <rect x="230" y="232" width="30" height="20" rx="2" fill="#E0F2FE" />
                      <text x="210" y="260" textAnchor="middle" fill="#CCFBF1" fontSize="9" fontWeight="bold">Electric Rail</text>
                      {/* Active mobility / Protected Cycle Greenway */}
                      <rect x="340" y="255" width="200" height="20" rx="4" fill="#047857" />
                      <circle cx="380" cy="245" r="10" fill="none" stroke="#67E8B5" strokeWidth="2" />
                      <circle cx="410" cy="245" r="10" fill="none" stroke="#67E8B5" strokeWidth="2" />
                      <line x1="380" y1="245" x2="395" y2="235" stroke="#67E8B5" strokeWidth="2" />
                      <line x1="410" y1="245" x2="395" y2="235" stroke="#67E8B5" strokeWidth="2" />
                      <text x="440" y="295" textAnchor="middle" fill="#67E8B5" fontSize="10" fontWeight="bold">
                        Protected Active Transit Corridors
                      </text>
                    </g>
                  )}

                  {/* SOL 4: Forest Conservation and Restoration */}
                  {activeSolution.id === 'forest-conservation' && (
                    <g>
                      {/* Preserved mature trees & native reforestation */}
                      <circle cx="160" cy="200" r="45" fill="#065F46" />
                      <circle cx="230" cy="180" r="55" fill="#059669" />
                      <circle cx="310" cy="190" r="50" fill="#10B981" />
                      <circle cx="380" cy="210" r="40" fill="#34D399" />
                      {/* Saplings / Reforestation planting */}
                      <circle cx="450" cy="240" r="22" fill="#6EE7B7" />
                      <circle cx="490" cy="250" r="16" fill="#A7F3D0" />
                      <text x="300" y="300" textAnchor="middle" fill="#67E8B5" fontSize="11" fontWeight="bold">
                        Biological Carbon Sinks & Restored Terrestrial Canopies
                      </text>
                    </g>
                  )}

                  {/* SOL 5: Agriculture and Waste */}
                  {activeSolution.id === 'agriculture-waste' && (
                    <g>
                      {/* Precision Agriculture */}
                      <rect x="120" y="230" width="160" height="50" rx="6" fill="#14532D" />
                      <text x="200" y="260" textAnchor="middle" fill="#86EFAC" fontSize="10" fontWeight="bold">
                        Precision Nutrient Management
                      </text>
                      {/* Landfill Methane Biogas Capture Dome */}
                      <path d="M340,280 Q420,160 500,280 Z" fill="#1E293B" stroke="#67E8B5" strokeWidth="2" />
                      <circle cx="420" cy="200" r="14" fill="#0B1226" stroke="#67E8B5" strokeWidth="1.5" />
                      <text x="420" y="204" textAnchor="middle" fill="#67E8B5" fontSize="8" fontWeight="bold">CH₄</text>
                      <text x="420" y="245" textAnchor="middle" fill="#E2E8F0" fontSize="9">
                        Active Biogas Capture
                      </text>
                    </g>
                  )}

                  {/* SOL 6: Government and Industry */}
                  {activeSolution.id === 'government-industry' && (
                    <g>
                      {/* Civic Public Infrastructure */}
                      <rect x="140" y="160" width="140" height="120" rx="4" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="2" />
                      <polygon points="140,160 210,120 280,160" fill="#2563EB" />
                      <text x="210" y="220" textAnchor="middle" fill="#DBEAFE" fontSize="9" fontWeight="bold">
                        Policy & Standards
                      </text>
                      {/* Upgraded Clean Industry */}
                      <rect x="320" y="170" width="160" height="110" rx="4" fill="#334155" stroke="#67E8B5" strokeWidth="2" />
                      <text x="400" y="220" textAnchor="middle" fill="#67E8B5" fontSize="9" fontWeight="bold">
                        Low-Carbon Manufacturing
                      </text>
                      <text x="300" y="315" textAnchor="middle" fill="#94A3B8" fontSize="10">
                        Multi-lateral Capital & Industrial Standard Alignment
                      </text>
                    </g>
                  )}

                  {/* SOL 7: Individual Action */}
                  {activeSolution.id === 'individual-action' && (
                    <g>
                      {/* Household Electrification & Community */}
                      <circle cx="220" cy="210" r="35" fill="#047857" opacity="0.8" />
                      <text x="220" y="214" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                        Home Efficiency
                      </text>
                      <circle cx="310" cy="190" r="40" fill="#0F766E" opacity="0.8" />
                      <text x="310" y="194" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                        Active Mobility
                      </text>
                      <circle cx="400" cy="215" r="35" fill="#1E3A8A" opacity="0.8" />
                      <text x="400" y="219" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">
                        Civic Advocacy
                      </text>
                      <text x="310" y="295" textAnchor="middle" fill="#67E8B5" fontSize="11" fontWeight="bold">
                        Collective Grassroots Momentum & Cultural Change
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Visual elements pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {activeSolution.visualElements.map((el, i) => (
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
                id={`sol-panel-${activeSolution.id}`}
                role="tabpanel"
                aria-labelledby={`sol-tab-${activeSolution.id}`}
                className="bg-navy/50 border border-mint/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-lg"
              >
                <div className="text-xs font-mono text-mint uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Pathway 0{activeSolution.solutionNumber}</span>
                </div>
                <h3 className="text-2xl font-bold text-app-text mb-2">
                  {activeSolution.title}
                </h3>
                <div className="text-xs font-mono text-app-muted mb-4">
                  {activeSolution.tagline}
                </div>
                <p className="text-base sm:text-lg text-app-text/95 leading-relaxed font-normal">
                  “{activeSolution.narration}”
                </p>
              </div>

              {/* Systemic Context Note */}
              <div className="bg-space/60 border border-white/10 rounded-2xl p-5 text-xs text-app-muted">
                <span className="font-semibold text-mint block mb-1">
                  Systemic Integration:
                </span>
                <p className="leading-relaxed">
                  No single pathway can deliver climate stability in isolation. Rapid progress requires deploying renewable energy, industrial efficiency, nature restoration, and policy incentives simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MITIGATION VS. ADAPTATION DUAL PILLAR CARD */}
        <div className="bg-navy/70 border-2 border-mint/40 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-mint uppercase tracking-widest font-semibold">
              The Dual Climate Imperatives
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-app-text mt-1">
              Mitigation vs. Adaptation
            </h3>
            <blockquote className="mt-4 text-base sm:text-lg text-app-text/95 font-medium border-l-2 border-mint pl-4 leading-relaxed">
              “{MITIGATION_VS_ADAPTATION.coreExplanation}”
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">
            {/* Mitigation Column */}
            <div className="bg-space/80 border border-mint/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-mint font-bold text-lg">
                <Shield className="w-5 h-5" />
                <span>{MITIGATION_VS_ADAPTATION.mitigation.title}</span>
              </div>
              <div className="text-xs font-mono text-app-muted">
                {MITIGATION_VS_ADAPTATION.mitigation.subtitle}
              </div>
              <p className="text-xs text-app-text/80 leading-relaxed">
                {MITIGATION_VS_ADAPTATION.mitigation.description}
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-app-muted">
                {MITIGATION_VS_ADAPTATION.mitigation.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adaptation Column */}
            <div className="bg-space/80 border border-atmos-blue/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-atmos-blue font-bold text-lg">
                <CheckCircle2 className="w-5 h-5" />
                <span>{MITIGATION_VS_ADAPTATION.adaptation.title}</span>
              </div>
              <div className="text-xs font-mono text-app-muted">
                {MITIGATION_VS_ADAPTATION.adaptation.subtitle}
              </div>
              <p className="text-xs text-app-text/80 leading-relaxed">
                {MITIGATION_VS_ADAPTATION.adaptation.description}
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-app-muted">
                {MITIGATION_VS_ADAPTATION.adaptation.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-atmos-blue shrink-0 mt-0.5" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. CONVERGENCE INTO UNIFIED EARTH */}
        <div className="bg-gradient-to-r from-space via-[#092236] to-space border border-mint/30 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center space-y-6 shadow-2xl">
          <div className="w-48 h-48 sm:w-56 sm:h-56">
            <EarthScene
              size="100%"
              isReducedMotion={isReducedMotion}
              atmosphereIntensity={1.2}
              showInfraredGlow={false}
              variant="dawn"
            />
          </div>
          <div className="max-w-2xl space-y-2">
            <h4 className="text-xl sm:text-2xl font-bold text-app-text">
              Converging Pathways Toward Planetary Equilibrium
            </h4>
            <p className="text-xs sm:text-sm text-app-muted leading-relaxed">
              When global mitigation cuts emissions at the source and regional adaptation protects communities, Earth’s energy balance stabilizes, securing a resilient future for humanity and the biosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
