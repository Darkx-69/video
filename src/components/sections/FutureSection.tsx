import React, { useState } from 'react';
import { CHAPTER_TAKEAWAYS, FUTURE_CONTENT } from '@/content/takeaways';
import { EarthScene } from '@/components/scenes/EarthScene';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FutureSectionProps {
  onNavigate: (id: string) => void;
  isReducedMotion: boolean;
}

export const FutureSection: React.FC<FutureSectionProps> = ({
  onNavigate,
  isReducedMotion,
}) => {
  const [activeStep, setActiveStep] = useState<number>(5); // default show all in subdued recap

  const handleExploreAgain = () => {
    onNavigate('intro');
    // Move keyboard focus to hero title
    const heading = document.getElementById('hero-title');
    if (heading) {
      heading.focus();
    }
  };

  return (
    <section
      id="future"
      aria-labelledby="future-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-[#0D243A] via-navy/80 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>{FUTURE_CONTENT.eyebrow}</span>
          </div>
          <h2
            id="future-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            {FUTURE_CONTENT.title}
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Review the five essential scientific conclusions that define our planetary present and illuminate our collective path forward.
          </p>
        </div>

        {/* Central Stage: Hero Earth Match + Sequential Takeaways */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Return to Cinematic Hero Earth */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              <EarthScene
                size="100%"
                isReducedMotion={isReducedMotion}
                atmosphereIntensity={1.2}
                variant="natural"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-atmos-blue tracking-wider uppercase">
                Earth's Radiant Equilibrium
              </span>
            </div>
          </div>

          {/* Right Column: Five Sequential Takeaways with Subdued Recap */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-sun-amber uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Takeaway Synthesis</span>
            </div>

            <div className="space-y-3">
              {CHAPTER_TAKEAWAYS.map((takeaway) => {
                const isCurrent = activeStep === takeaway.id;
                const isPast = activeStep > takeaway.id;

                return (
                  <div
                    key={takeaway.id}
                    onClick={() => setActiveStep(takeaway.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-navy/90 border-atmos-blue/60 shadow-lg shadow-atmos-blue/15 scale-[1.01]'
                        : isPast
                        ? 'bg-space/60 border-white/10 opacity-75 hover:opacity-100'
                        : 'bg-space/30 border-white/5 opacity-50'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                          isCurrent
                            ? 'bg-atmos-blue text-space'
                            : 'bg-white/10 text-app-muted'
                        }`}
                      >
                        {takeaway.numberStr}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-base font-bold text-app-text leading-snug">
                          “{takeaway.statement}”
                        </h3>
                        <p className="text-xs text-app-muted leading-relaxed">
                          {takeaway.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Step Controls */}
            <div className="flex items-center justify-between pt-2 text-xs text-app-muted font-mono">
              <button
                onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                disabled={activeStep === 1}
                className="hover:text-white disabled:opacity-20"
              >
                ← Previous
              </button>
              <span>Takeaway {activeStep} of 5</span>
              <button
                onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                disabled={activeStep === 5}
                className="hover:text-white disabled:opacity-20"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Reflective Climax Banner */}
        <div className="bg-gradient-to-r from-space via-navy to-space border-2 border-atmos-blue/40 rounded-3xl p-10 sm:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-mint">
              {FUTURE_CONTENT.closingStatement}
            </h4>
            <div className="text-lg sm:text-xl font-mono text-atmos-blue font-semibold tracking-wider">
              {FUTURE_CONTENT.finalLine}
            </div>
          </div>

          {/* Explore Again Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={handleExploreAgain}
              className="px-8 py-4 rounded-full bg-atmos-blue hover:bg-sky-400 text-space font-bold text-base flex items-center gap-3 shadow-xl shadow-atmos-blue/25 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-atmos-blue"
            >
              <span>{FUTURE_CONTENT.exploreAgainButton}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
