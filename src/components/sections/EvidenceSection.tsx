import React, { useState } from 'react';
import {
  EVIDENCE_INTRO,
  INSTRUMENTS,
  EVIDENCE_TABS,
  EvidenceTab,
} from '@/content/evidence';
import {
  Activity,
  Compass,
  Radio,
  Satellite,
  Anchor,
  Layers,
  ExternalLink,
  Info,
} from 'lucide-react';

interface EvidenceSectionProps {
  isReducedMotion: boolean;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({
  isReducedMotion: _isReducedMotion,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('composition');
  const activeTab: EvidenceTab =
    EVIDENCE_TABS.find((t) => t.id === activeTabId) || EVIDENCE_TABS[0];

  const getInstrumentIcon = (id: string) => {
    switch (id) {
      case 'station':
        return <Radio className="w-5 h-5 text-atmos-blue" />;
      case 'surface':
        return <Compass className="w-5 h-5 text-sun-amber" />;
      case 'satellite':
        return <Satellite className="w-5 h-5 text-mint" />;
      case 'buoy':
        return <Anchor className="w-5 h-5 text-sky-400" />;
      case 'ice-core':
        return <Layers className="w-5 h-5 text-indigo-300" />;
      default:
        return <Activity className="w-5 h-5 text-atmos-blue" />;
    }
  };

  return (
    <section
      id="evidence"
      aria-labelledby="evidence-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-navy/50 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 06</span>
            <span>·</span>
            <span>Empirical Foundations</span>
          </div>
          <h2
            id="evidence-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            {EVIDENCE_INTRO.heading}
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            “{EVIDENCE_INTRO.introCopy}”
          </p>
        </div>

        {/* 1. WEATHER VS CLIMATE COMPARISON CARD */}
        <div className="bg-navy/60 border-2 border-atmos-blue/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono text-atmos-blue uppercase tracking-wider font-semibold">
                Fundamental Distinction
              </span>
              <h3 className="text-2xl font-bold text-app-text">Weather vs. Climate</h3>
              <p className="text-sm text-app-muted leading-relaxed">
                Weather represents chaotic short-term fluctuations in the local atmosphere, whereas climate represents multi-decadal statistical distributions and systemic trajectories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="p-3.5 rounded-xl bg-space/80 border border-sun-amber/30 text-xs">
                <span className="font-bold text-sun-amber block mb-1">
                  {EVIDENCE_INTRO.weatherLabel}
                </span>
                <span className="text-app-muted text-[11px]">Daily rain, temperature spikes, wind gusts</span>
              </div>
              <div className="p-3.5 rounded-xl bg-space/80 border border-mint/30 text-xs">
                <span className="font-bold text-mint block mb-1">
                  {EVIDENCE_INTRO.climateLabel}
                </span>
                <span className="text-app-muted text-[11px]">30+ year moving statistical averages</span>
              </div>
            </div>
          </div>

          {/* Conceptual Chart: Jagged Weather Line vs Smooth Long-term Climate Line */}
          <div className="relative w-full aspect-[16/7] max-h-[300px] bg-space/90 rounded-2xl border border-white/10 p-4 overflow-hidden">
            {/* Conceptual Badge Header (MANDATORY REQUIREMENT) */}
            <div className="absolute top-3 right-4 z-10 px-3 py-1 rounded bg-navy/90 border border-sun-amber/40 text-[10px] font-mono text-sun-amber font-semibold">
              {EVIDENCE_INTRO.conceptualBadge}
            </div>

            <svg viewBox="0 0 700 240" className="w-full h-full overflow-visible">
              {/* Word-labelled Axes (No fabricated numbers) */}
              <line x1="60" y1="20" x2="60" y2="200" stroke="#475569" strokeWidth="1.5" />
              <line x1="60" y1="200" x2="660" y2="200" stroke="#475569" strokeWidth="1.5" />

              {/* Axis Word Labels */}
              <text x="360" y="225" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="bold">
                Time (Decades) →
              </text>
              <text x="25" y="110" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="bold" transform="rotate(-90 25 110)">
                Temperature Metric →
              </text>

              {/* Jagged Short-Term Weather Line */}
              <path
                d="M70,170 L100,130 L130,185 L160,110 L190,165 L220,120 L250,175 L280,105 L310,150 L340,95 L370,140 L400,85 L430,135 L460,75 L490,115 L520,70 L550,110 L580,60 L610,95 L640,45"
                fill="none"
                stroke="#FFB454"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.75"
              />

              {/* Smooth Long-Term Climate Trend Line */}
              <path
                d="M70,175 Q200,160 350,125 T640,55"
                fill="none"
                stroke="#4DA3FF"
                strokeWidth="3.5"
              />

              {/* Chart Inset Legend */}
              <g transform="translate(80, 40)">
                <line x1="0" y1="0" x2="30" y2="0" stroke="#FFB454" strokeWidth="2" strokeDasharray="4 2" />
                <text x="38" y="4" fill="#FFB454" fontSize="10">Weather: High variability short-term fluctuations</text>
                <line x1="0" y1="20" x2="30" y2="20" stroke="#4DA3FF" strokeWidth="3" />
                <text x="38" y="24" fill="#4DA3FF" fontSize="10" fontWeight="bold">Climate: Multi-decade upward trend</text>
              </g>
            </svg>
          </div>

          {/* Preserved Caption */}
          <div className="mt-4 p-4 rounded-xl bg-space/70 border border-white/10 text-xs text-app-muted flex items-center gap-2.5">
            <Info className="w-4 h-4 text-sun-amber shrink-0" />
            <p className="font-medium text-app-text/90 italic">
              “{EVIDENCE_INTRO.weatherCaption}”
            </p>
          </div>
        </div>

        {/* 2. FIVE OBSERVATIONAL INSTRUMENTS GRID */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-app-text">
              Five Core Global Observation Instruments
            </h3>
            <span className="text-xs font-mono text-atmos-blue">Continuous Multi-Platform Sensing</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INSTRUMENTS.map((inst) => (
              <div
                key={inst.id}
                className="bg-navy/40 border border-white/10 hover:border-atmos-blue/40 rounded-2xl p-5 backdrop-blur-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-space/80 border border-white/10 flex items-center justify-center mb-3">
                    {getInstrumentIcon(inst.id)}
                  </div>
                  <h4 className="text-sm font-bold text-app-text mb-1">{inst.name}</h4>
                  <div className="text-[11px] font-mono text-atmos-blue mb-2.5">{inst.role}</div>
                  <p className="text-xs text-app-muted leading-relaxed">{inst.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INTERACTIVE EVIDENCE EXPLORER (4 TABS) */}
        <div className="bg-navy/60 border-2 border-atmos-blue/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          <div>
            <span className="text-xs font-mono text-mint uppercase tracking-wider font-semibold">
              Interactive Evidence Explorer
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-app-text mt-1">
              Independent Lines of Scientific Proof
            </h3>
          </div>

          {/* Four Keyboard-Accessible Tabs */}
          <div
            role="tablist"
            aria-label="Interactive Evidence Explorer Tabs"
            className="grid grid-cols-2 lg:grid-cols-4 gap-2"
          >
            {EVIDENCE_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`evidence-tabpanel-${tab.id}`}
                  id={`evidence-tab-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-atmos-blue text-space border-atmos-blue font-bold shadow-lg shadow-atmos-blue/20'
                      : 'bg-space/60 text-app-muted border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="text-xs font-semibold">{tab.tabTitle}</div>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Panel */}
          <div
            id={`evidence-tabpanel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`evidence-tab-${activeTab.id}`}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Conceptual Graphic (Left 7 Cols) */}
            <div className="lg:col-span-7 bg-space/90 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              {/* Mandatory Conceptual Chart Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-atmos-blue font-semibold uppercase">
                  {activeTab.heading}
                </span>
                <span className="px-2.5 py-1 rounded bg-navy border border-sun-amber/40 text-[10px] font-mono text-sun-amber font-semibold">
                  {EVIDENCE_INTRO.conceptualBadge}
                </span>
              </div>

              {/* Conceptual Chart SVG */}
              <div className="relative w-full aspect-[16/9] max-h-[300px]">
                <svg viewBox="0 0 600 300" className="w-full h-full overflow-visible">
                  {/* Axes */}
                  <line x1="60" y1="20" x2="60" y2="250" stroke="#334155" strokeWidth="2" />
                  <line x1="60" y1="250" x2="560" y2="250" stroke="#334155" strokeWidth="2" />

                  {/* Word-labelled Axes */}
                  <text x="310" y="275" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="bold">
                    {activeTab.chartAxisX} →
                  </text>
                  <text x="25" y="135" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="bold" transform="rotate(-90 25 135)">
                    {activeTab.chartAxisY} →
                  </text>

                  {/* Conceptual Trajectories */}
                  {activeTab.id === 'composition' && (
                    <g>
                      {/* Keeling-style curve with seasonal oscillation */}
                      <path
                        d="M70,230 Q150,210 250,170 T420,110 T550,45"
                        fill="none"
                        stroke="#FFB454"
                        strokeWidth="3.5"
                      />
                      <text x="400" y="80" fill="#FFB454" fontSize="11" fontWeight="bold">
                        Uninterrupted Atmospheric Rise
                      </text>
                    </g>
                  )}

                  {activeTab.id === 'temperature-trends' && (
                    <g>
                      <path
                        d="M70,220 L120,210 L180,215 L240,195 L300,185 L360,160 L420,130 L480,95 L550,55"
                        fill="none"
                        stroke="#FF665A"
                        strokeWidth="3.5"
                      />
                      <text x="340" y="70" fill="#FF665A" fontSize="11" fontWeight="bold">
                        Global Mean Surface Temperature Multi-Agency Trajectory
                      </text>
                    </g>
                  )}

                  {activeTab.id === 'ocean-sea-level' && (
                    <g>
                      <path
                        d="M70,235 Q200,215 350,165 T550,60"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="3.5"
                      />
                      <text x="340" y="90" fill="#38BDF8" fontSize="11" fontWeight="bold">
                        Ocean Heat Content & Altimetric Sea Level Rise
                      </text>
                    </g>
                  )}

                  {activeTab.id === 'historical-climate' && (
                    <g>
                      {/* Glacial-interglacial oscillations */}
                      <path
                        d="M70,210 Q120,110 170,210 T270,210 T370,210 T470,210 T550,70"
                        fill="none"
                        stroke="#A78BFA"
                        strokeWidth="3"
                      />
                      <text x="310" y="75" fill="#A78BFA" fontSize="11" fontWeight="bold">
                        Trapped Ancient Air in Polar Ice Cores (800k Years)
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              <div className="mt-3 text-xs text-app-muted leading-relaxed">
                {activeTab.chartConcept}
              </div>
            </div>

            {/* Narration, Source & Method Details (Right 5 Cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="p-6 rounded-2xl bg-space/70 border border-white/10 space-y-4">
                <h4 className="text-xl font-bold text-app-text">{activeTab.tabTitle}</h4>
                <p className="text-sm sm:text-base text-app-text/95 leading-relaxed">
                  “{activeTab.narration}”
                </p>

                <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-atmos-blue font-semibold block mb-0.5">
                      Measurement Methodology:
                    </span>
                    <p className="text-app-muted leading-relaxed">{activeTab.measurementMethod}</p>
                  </div>

                  <div>
                    <span className="text-mint font-semibold block mb-0.5">
                      Scientific Source & Lead Agencies:
                    </span>
                    <p className="text-app-muted leading-relaxed">{activeTab.sourceInformation}</p>
                  </div>
                </div>

                {/* External Official Link (Secured in new tab) */}
                <a
                  href={activeTab.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-atmos-blue/15 text-atmos-blue border border-atmos-blue/30 hover:bg-atmos-blue hover:text-space text-xs font-semibold transition-all"
                >
                  <span>{activeTab.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
