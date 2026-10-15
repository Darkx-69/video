import React, { useState } from 'react';
import {
  DEFINITION_STEPS,
  GAS_FACTS,
  DEFINITION_PULL_QUOTE,
  DEFINITION_NOTES,
  GasFact,
} from '@/content/gases';
import { EarthScene } from '@/components/scenes/EarthScene';
import { RadiationLegend } from '@/components/ui/RadiationLegend';
import { Info, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface DefinitionSectionProps {
  isReducedMotion: boolean;
}

export const DefinitionSection: React.FC<DefinitionSectionProps> = ({
  isReducedMotion,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedGas, setSelectedGas] = useState<GasFact>(GAS_FACTS[0]);

  // Visual parameters derived from step
  const atmosphereIntensity = currentStep >= 2 ? 1.4 : 0.4;
  const showInfraredGlow = currentStep >= 4;

  return (
    <section
      id="definition"
      aria-labelledby="definition-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-navy/60 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 01</span>
            <span>·</span>
            <span>Planetary Fundamentals</span>
          </div>
          <h2
            id="definition-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            What Is the Greenhouse Effect?
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Follow the five foundational steps that govern how our atmosphere intercepts and redistributes planetary energy.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Definition progressive steps"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar"
        >
          {DEFINITION_STEPS.map((step) => {
            const isActive = currentStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                role="tab"
                aria-selected={isActive}
                aria-controls={`step-panel-${step.stepNumber}`}
                id={`step-tab-${step.stepNumber}`}
                onClick={() => setCurrentStep(step.stepNumber)}
                className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-atmos-blue text-space border-atmos-blue shadow-lg shadow-atmos-blue/20 font-semibold'
                    : 'bg-navy/70 text-app-muted hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive ? 'bg-space text-atmos-blue' : 'bg-white/10 text-app-muted'
                  }`}
                >
                  {step.stepNumber}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Grid: Interactive Visualizer + Narration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Earth Stage Visual (Left / Center) */}
          <div className="lg:col-span-7 bg-navy/40 border border-atmos-blue/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center min-h-[460px]">
            {/* Step badge in stage */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-space/80 border border-white/10 px-3 py-1 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-atmos-blue animate-pulse" />
              <span className="text-app-text font-medium">
                Step {currentStep}: {DEFINITION_STEPS[currentStep - 1].title}
              </span>
            </div>

            {/* Earth Visualizer with atmospheric changes */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center my-4">
              <EarthScene
                size="100%"
                className="w-full h-full"
                isReducedMotion={isReducedMotion}
                atmosphereIntensity={atmosphereIntensity}
                showInfraredGlow={showInfraredGlow}
                forceSVG={currentStep === 3} // Gas markers overlay nicely on vector view
              />

              {/* Step 3: Interactive Gas Markers floating in the atmosphere */}
              {currentStep >= 3 && (
                <div
                  className="absolute inset-0 pointer-events-auto"
                  aria-label="Atmospheric gas markers"
                >
                  {GAS_FACTS.map((gas, index) => {
                    // Position markers in an atmospheric ring around Earth
                    const angle = (index * (360 / GAS_FACTS.length) - 60) * (Math.PI / 180);
                    const radiusPercent = 42; // percentage from center
                    const left = 50 + radiusPercent * Math.cos(angle);
                    const top = 50 + radiusPercent * Math.sin(angle);
                    const isSelected = selectedGas.id === gas.id;

                    return (
                      <button
                        key={gas.id}
                        onClick={() => setSelectedGas(gas)}
                        aria-label={`View facts for greenhouse gas ${gas.chemicalFormula} ${gas.name}`}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-xs font-bold transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-atmos-blue ${
                          isSelected
                            ? 'bg-atmos-blue text-space scale-110 shadow-atmos-blue/40 ring-2 ring-white'
                            : 'bg-navy/90 text-app-text border border-atmos-blue/40 hover:bg-atmos-blue/20 hover:scale-105'
                        }`}
                        style={{ left: `${left}%`, top: `${top}%` }}
                      >
                        {gas.chemicalFormula}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Step 4: Coral Infrared Waves around Earth */}
              {showInfraredGlow && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <svg className="w-full h-full overflow-visible animate-pulse" viewBox="0 0 400 400">
                    <circle
                      cx="200"
                      cy="200"
                      r="175"
                      fill="none"
                      stroke="#FF665A"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      strokeOpacity="0.8"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="190"
                      fill="none"
                      stroke="#FF665A"
                      strokeWidth="1.5"
                      strokeDasharray="4 8"
                      strokeOpacity="0.5"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Radiation Legend */}
            <div className="w-full mt-4">
              <RadiationLegend variant="compact" />
            </div>
          </div>

          {/* Narration & Educational Details (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Step Narration Card */}
            <div
              id={`step-panel-${currentStep}`}
              role="tabpanel"
              aria-labelledby={`step-tab-${currentStep}`}
              className="bg-navy/50 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-lg"
            >
              <div className="text-xs font-mono text-atmos-blue uppercase tracking-widest mb-2">
                Step {currentStep} of 5
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-app-text mb-4">
                {DEFINITION_STEPS[currentStep - 1].title}
              </h3>
              <p className="text-base sm:text-lg text-app-text/90 leading-relaxed font-normal">
                “{DEFINITION_STEPS[currentStep - 1].narration}”
              </p>

              {/* Step 3 Gas Details Card */}
              {currentStep === 3 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-xs font-mono text-sun-amber uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Select a Gas Marker:</span>
                  </div>

                  {/* Gas Pill Switcher */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {GAS_FACTS.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setSelectedGas(g)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          selectedGas.id === g.id
                            ? 'bg-atmos-blue text-space border-atmos-blue font-bold'
                            : 'bg-white/5 text-app-muted border-white/10 hover:text-white'
                        }`}
                      >
                        {g.chemicalFormula} — {g.name}
                      </button>
                    ))}
                  </div>

                  {/* Active Gas Fact Detail */}
                  <div className="bg-space/80 border border-atmos-blue/30 rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-app-text">
                        {selectedGas.chemicalFormula} — {selectedGas.name}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-atmos-blue/15 text-atmos-blue border border-atmos-blue/30">
                        {selectedGas.potencyBadge}
                      </span>
                    </div>
                    <p className="text-sm text-app-muted leading-relaxed">
                      “{selectedGas.description}”
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-app-muted/80">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        Lifetime: {selectedGas.lifetimeBadge}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        Source: {selectedGas.sourceType}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step Navigation Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-app-muted hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Step
                </button>
                <span className="text-xs font-mono text-app-muted">
                  {currentStep} / {DEFINITION_STEPS.length}
                </span>
                <button
                  disabled={currentStep === DEFINITION_STEPS.length}
                  onClick={() => setCurrentStep((prev) => Math.min(DEFINITION_STEPS.length, prev + 1))}
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-atmos-blue text-space font-semibold hover:bg-sky-400 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Scientific Disclaimers & Notes */}
            <div className="bg-space/60 border border-white/10 rounded-xl p-4 space-y-2 text-xs text-app-muted">
              {DEFINITION_NOTES.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-atmos-blue shrink-0 mt-0.5" />
                  <p>“{note}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 5 Definition Pull Quote (Prominent Presentation) */}
        <div className="mt-16 bg-gradient-to-r from-navy via-navy/90 to-space border-2 border-atmos-blue/30 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-10 w-64 h-64 bg-atmos-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-mono tracking-widest uppercase text-atmos-blue px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/20">
              The Scientific Definition
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-app-text leading-snug">
              “{DEFINITION_PULL_QUOTE}”
            </blockquote>
            <div className="flex items-center justify-center gap-3 text-xs text-app-muted">
              <CheckCircle2 className="w-4 h-4 text-mint" />
              <span>Fundamental Earth Energy Balance Principle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
