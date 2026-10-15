import React, { useState } from 'react';
import { SCIENCE_STAGES, ScienceStage } from '@/content/stages';
import { RadiationMechanismSVG } from '@/components/diagrams/RadiationMechanismSVG';
import { QualitativeSimulation } from '@/components/diagrams/QualitativeSimulation';
import { RadiationLegend } from '@/components/ui/RadiationLegend';
import { ChevronRight, Info, CheckCircle2 } from 'lucide-react';

interface ScienceSectionProps {
  isReducedMotion: boolean;
}

export const ScienceSection: React.FC<ScienceSectionProps> = ({
  isReducedMotion,
}) => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const activeStage: ScienceStage =
    SCIENCE_STAGES.find((s) => s.id === activeStageId) || SCIENCE_STAGES[0];

  return (
    <section
      id="science"
      aria-labelledby="science-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-navy/50 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 02</span>
            <span>·</span>
            <span>The Radiative Mechanism</span>
          </div>
          <h2
            id="science-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            How the Greenhouse Effect Works
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Understand how energy flows from the Sun through our atmosphere, warms the surface, and is regulated through infrared absorption and re-emission.
          </p>
        </div>

        {/* Six-Stage Mechanism Stage Selector */}
        <div
          role="tablist"
          aria-label="Six physical mechanism stages"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {SCIENCE_STAGES.map((stage) => {
            const isActive = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`stage-panel-${stage.id}`}
                id={`stage-tab-${stage.id}`}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-atmos-blue text-space border-atmos-blue font-bold shadow-lg shadow-atmos-blue/20 scale-[1.02]'
                    : 'bg-navy/70 text-app-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-[11px] font-mono uppercase tracking-wider mb-1 opacity-80">
                  {stage.numberStr}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate">
                  {stage.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Visualization and Narration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Persistent SVG Diagram (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-navy/40 border border-atmos-blue/20 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-mono text-atmos-blue uppercase tracking-wider">
                Physical Energy Flow Diagram
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-app-text">
                Stage {activeStage.id} of 6
              </span>
            </div>

            <RadiationMechanismSVG
              currentStage={activeStageId}
              isReducedMotion={isReducedMotion}
            />

            <div className="mt-4">
              <RadiationLegend variant="compact" />
            </div>
          </div>

          {/* Narration and Scientific Micro-notes (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              id={`stage-panel-${activeStage.id}`}
              role="tabpanel"
              aria-labelledby={`stage-tab-${activeStage.id}`}
              className="bg-navy/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-lg"
            >
              <div className="text-xs font-mono text-sun-amber uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sun-amber animate-pulse" />
                <span>{activeStage.numberStr}</span>
              </div>
              <h3 className="text-2xl font-bold text-app-text mb-4">
                {activeStage.title}
              </h3>
              <p className="text-base sm:text-lg text-app-text/95 leading-relaxed font-normal">
                “{activeStage.narration}”
              </p>

              {/* Micro-note preserved for Stage 5 */}
              {activeStage.microNote && (
                <div className="mt-6 p-4 rounded-xl bg-space/80 border border-sun-amber/30 text-xs text-app-muted flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-sun-amber shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-medium text-app-text">
                    “{activeStage.microNote}”
                  </p>
                </div>
              )}

              {/* Sequential controls */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={activeStageId === 1}
                  onClick={() => setActiveStageId((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-app-muted hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={activeStageId === SCIENCE_STAGES.length}
                  onClick={() => setActiveStageId((prev) => Math.min(SCIENCE_STAGES.length, prev + 1))}
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-atmos-blue text-space font-semibold hover:bg-sky-400 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stage Quick Summary Card */}
            <div className="bg-space/60 border border-white/10 rounded-xl p-5 space-y-3 text-xs text-app-muted">
              <div className="text-app-text font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-mint" />
                <span>Key Takeaway for this Stage:</span>
              </div>
              <p className="leading-relaxed">
                {activeStageId === 1 && 'Solar shortwave radiation arrives unimpeded through space as the primary thermodynamic driver.'}
                {activeStageId === 2 && 'Albedo reflects approximately one-third of solar shortwave energy back into space without warming the surface.'}
                {activeStageId === 3 && 'Absorbed shortwave energy thermalizes in surface soil, rock, and water, raising terrestrial temperatures.'}
                {activeStageId === 4 && 'The heated planet sheds thermal energy as invisible longwave infrared waves back toward space.'}
                {activeStageId === 5 && 'Greenhouse gases absorb specific infrared wavelengths, isotropically re-emitting radiation in all directions.'}
                {activeStageId === 6 && 'A planet in equilibrium radiates as much energy to space as it absorbs from the Sun, with oceans buffering adjustments.'}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Simulation: Placed immediately after mechanism */}
        <div className="pt-8">
          <QualitativeSimulation isReducedMotion={isReducedMotion} />
        </div>
      </div>
    </section>
  );
};
