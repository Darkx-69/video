import React, { useState } from 'react';
import {
  SIMULATION_SETTINGS,
  SIMULATION_CONTENT,
  SimulationSetting,
} from '@/content/stages';
import { RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

interface QualitativeSimulationProps {
  isReducedMotion?: boolean;
}

// Generate stable deterministic positions for the 22 possible gas markers
const STABLE_POSITIONS = [
  // 5 primary baseline markers (Level 0, 1, 2)
  { id: 'm1', x: 260, y: 220, gas: 'CO₂' },
  { id: 'm2', x: 420, y: 240, gas: 'H₂O' },
  { id: 'm3', x: 540, y: 200, gas: 'CH₄' },
  { id: 'm4', x: 340, y: 280, gas: 'N₂O' },
  { id: 'm5', x: 620, y: 260, gas: 'CO₂' },
  // 7 additional markers for present-day baseline (Total: 12) (Level 1, 2)
  { id: 'm6', x: 180, y: 250, gas: 'H₂O' },
  { id: 'm7', x: 300, y: 190, gas: 'O₃' },
  { id: 'm8', x: 480, y: 280, gas: 'CO₂' },
  { id: 'm9', x: 380, y: 220, gas: 'CH₄' },
  { id: 'm10', x: 570, y: 240, gas: 'N₂O' },
  { id: 'm11', x: 220, y: 290, gas: 'CO₂' },
  { id: 'm12', x: 670, y: 210, gas: 'H₂O' },
  // 10 additional markers for higher concentration (Total: 22) (Level 2)
  { id: 'm13', x: 140, y: 220, gas: 'CO₂' },
  { id: 'm14', x: 280, y: 260, gas: 'CH₄' },
  { id: 'm15', x: 440, y: 190, gas: 'CO₂' },
  { id: 'm16', x: 510, y: 230, gas: 'H₂O' },
  { id: 'm17', x: 610, y: 290, gas: 'CO₂' },
  { id: 'm18', x: 360, y: 310, gas: 'N₂O' },
  { id: 'm19', x: 460, y: 320, gas: 'CH₄' },
  { id: 'm20', x: 200, y: 190, gas: 'CO₂' },
  { id: 'm21', x: 650, y: 270, gas: 'CH₄' },
  { id: 'm22', x: 530, y: 310, gas: 'CO₂' },
];

export const QualitativeSimulation: React.FC<QualitativeSimulationProps> = ({
  isReducedMotion: _isReducedMotion = false,
}) => {
  // Level 1 is the default Present-day illustrative baseline
  const [level, setLevel] = useState<number>(1);
  const activeSetting: SimulationSetting = SIMULATION_SETTINGS[level];

  // Stable markers filtered by count
  const visibleMarkers = STABLE_POSITIONS.slice(0, activeSetting.markerCount);

  const handleReset = () => {
    setLevel(1);
  };

  return (
    <div
      id="simulation"
      className="bg-navy/70 border-2 border-atmos-blue/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sun-amber/15 border border-sun-amber/30 text-sun-amber text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Science Lab</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-app-text tracking-tight">
          {SIMULATION_CONTENT.heading}
        </h3>
        <p className="mt-2 text-app-muted text-sm sm:text-base">
          “{SIMULATION_CONTENT.supportingCopy}”
        </p>
      </div>

      {/* Screen reader live announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current simulation setting is {activeSetting.label}. Gas marker count is approximately{' '}
        {activeSetting.markerCount}, with approximately {activeSetting.interactionPercentage}%
        simulated infrared interactions.
      </div>

      {/* Interactive Stage Canvas (SVG) */}
      <div className="relative w-full aspect-[16/9] max-h-[460px] bg-space/90 rounded-2xl border border-white/10 overflow-hidden mb-8 shadow-inner">
        <svg
          viewBox="0 0 800 450"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Simulation illustration showing greenhouse gas molecules absorbing and re-emitting terrestrial infrared"
        >
          <defs>
            <linearGradient id="simSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#050816" />
              <stop offset="60%" stopColor="#0B1226" />
              <stop offset="100%" stopColor="#112248" />
            </linearGradient>
            <linearGradient id="simSurface" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>

          {/* Sky Backdrop */}
          <rect x="0" y="0" width="800" height="450" fill="url(#simSky)" />

          {/* Curved Earth Surface */}
          <path
            d="M0,350 Q400,320 800,350 L800,450 L0,450 Z"
            fill="url(#simSurface)"
          />

          {/* Constant Solar Shortwave Inputs (Kept constant across all settings as specified) */}
          <g opacity="0.45">
            <line x1="80" y1="40" x2="160" y2="340" stroke="#FFB454" strokeWidth="3" />
            <polygon points="160,340 148,330 165,325" fill="#FFB454" />
            <line x1="720" y1="40" x2="640" y2="340" stroke="#FFB454" strokeWidth="3" />
            <polygon points="640,340 635,325 652,330" fill="#FFB454" />
            <text x="70" y="30" fill="#FFB454" fontSize="11" fontWeight="bold">Constant Solar Input [SW]</text>
          </g>

          {/* Outgoing Infrared Radiation Rays */}
          {/* Direct rays that escape to space */}
          <g>
            {/* Escaping Ray 1 (always escapes) */}
            <path
              d="M120,345 Q135,280 120,220 T120,100 T120,20"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.5"
            />
            <circle cx="120" cy="18" r="4" fill="#FF665A" />

            {/* Escaping Ray 2 (escapes in lower & baseline, intercepted in higher) */}
            {level < 2 && (
              <>
                <path
                  d="M480,335 Q495,260 480,180 T480,60 T480,15"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2.5"
                />
                <circle cx="480" cy="15" r="4" fill="#FF665A" />
              </>
            )}

            {/* Escaping Ray 3 (escapes in lower, intercepted in baseline & higher) */}
            {level === 0 && (
              <>
                <path
                  d="M340,335 Q355,270 340,190 T340,70 T340,20"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2.5"
                />
                <circle cx="340" cy="20" r="4" fill="#FF665A" />
              </>
            )}
          </g>

          {/* Intercepted and Re-emitted Rays */}
          <g>
            {/* Interaction 1 (Present in baseline & higher) */}
            {level >= 1 && (
              <>
                <path
                  d="M260,340 Q270,300 260,260 T260,220"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2.5"
                />
                {/* Re-emitted downward */}
                <path
                  d="M260,220 Q240,270 245,340"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />
                <circle cx="245" cy="342" r="3.5" fill="#FF665A" />
                {/* Re-emitted upward */}
                <path
                  d="M260,220 Q280,140 270,40"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="270" cy="38" r="3.5" fill="#FF665A" />
              </>
            )}

            {/* Interaction 2 (Present in all levels, representing natural fraction) */}
            <path
              d="M420,335 Q430,290 420,240"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.5"
            />
            {/* Re-emitted downward */}
            <path
              d="M420,240 Q400,285 410,335"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />
            <circle cx="410" cy="337" r="3.5" fill="#FF665A" />
            {/* Re-emitted upward */}
            <path
              d="M420,240 Q440,150 430,30"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <circle cx="430" cy="28" r="3.5" fill="#FF665A" />

            {/* Interaction 3 (Higher concentration extra interaction) */}
            {level === 2 && (
              <>
                <path
                  d="M610,345 Q620,310 610,290"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2.5"
                />
                <path
                  d="M610,290 Q590,320 600,345"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                />
                <circle cx="600" cy="348" r="3.5" fill="#FF665A" />
                <path
                  d="M610,290 Q630,180 620,50"
                  fill="none"
                  stroke="#FF665A"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                <circle cx="620" cy="48" r="3.5" fill="#FF665A" />
              </>
            )}
          </g>

          {/* Gas Molecules Markers Layer */}
          {visibleMarkers.map((m) => (
            <g key={m.id} className="transition-all duration-500">
              <circle
                cx={m.x}
                cy={m.y}
                r="13"
                fill="#0B1226"
                stroke="#4DA3FF"
                strokeWidth="2"
              />
              <text
                x={m.x}
                y={m.y + 4}
                textAnchor="middle"
                fill="#F5F7FB"
                fontSize="8.5"
                fontWeight="bold"
              >
                {m.gas}
              </text>
            </g>
          ))}

          {/* Active Gas Marker Count Badge inside Stage */}
          <rect x="20" y="390" width="220" height="42" rx="8" fill="#0B1226" stroke="#4DA3FF" strokeWidth="1" />
          <text x="32" y="408" fill="#4DA3FF" fontSize="11" fontWeight="bold">
            Simulated Gas Density
          </text>
          <text x="32" y="422" fill="#A9B4C8" fontSize="10">
            {activeSetting.markerCount} illustrative markers rendered
          </text>
        </svg>
      </div>

      {/* Synchronized Dual Controls: Slider + Equivalent Buttons */}
      <div className="space-y-6">
        {/* Buttons Switcher */}
        <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Simulation concentration settings">
          {SIMULATION_SETTINGS.map((s) => {
            const isSelected = level === s.level;
            return (
              <button
                key={s.key}
                role="radio"
                aria-checked={isSelected}
                onClick={() => setLevel(s.level)}
                className={`flex-1 min-w-[200px] px-4 py-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-atmos-blue text-space border-atmos-blue font-bold shadow-lg shadow-atmos-blue/20'
                    : 'bg-space/60 text-app-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-mono">
                    Setting 0{s.level + 1}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-space animate-pulse" />}
                </div>
                <div className="text-sm font-semibold mt-1">{s.label}</div>
              </button>
            );
          })}
        </div>

        {/* 3-Position Slider Control */}
        <div className="bg-space/70 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="concentration-slider" className="text-xs font-mono text-atmos-blue uppercase tracking-wider">
              Qualitative Slider (3 Positions)
            </label>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-app-muted hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Baseline</span>
            </button>
          </div>

          <input
            id="concentration-slider"
            type="range"
            min={0}
            max={2}
            step={1}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full h-3 bg-navy rounded-lg appearance-none cursor-pointer accent-atmos-blue"
            aria-valuemin={0}
            aria-valuemax={2}
            aria-valuenow={level}
            aria-valuetext={activeSetting.label}
          />

          <div className="flex justify-between text-xs text-app-muted/80 mt-2 font-mono">
            <span>1. Lower</span>
            <span>2. Baseline</span>
            <span>3. Higher</span>
          </div>
        </div>

        {/* Qualitative Dynamic Meter (No numbers, purely qualitative) */}
        <div className="bg-space/80 border border-atmos-blue/20 rounded-2xl p-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-app-text">{SIMULATION_CONTENT.meterLabel}</span>
            <span className="text-ir-coral font-mono">{activeSetting.meterDescription}</span>
          </div>

          {/* Qualitative Bar Gauge */}
          <div className="h-4 w-full bg-navy rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sun-amber via-ir-coral to-red-500 transition-all duration-500"
              style={{
                width: level === 0 ? '30%' : level === 1 ? '60%' : '95%',
              }}
            />
          </div>

          <p className="text-xs text-app-muted leading-relaxed">
            {activeSetting.description}
          </p>
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="bg-navy/90 border border-sun-amber/30 rounded-xl p-4 flex items-start gap-3 text-xs text-app-muted">
          <AlertCircle className="w-4 h-4 text-sun-amber shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium text-app-text/90">
            “{SIMULATION_CONTENT.disclaimer}”
          </p>
        </div>
      </div>
    </div>
  );
};
