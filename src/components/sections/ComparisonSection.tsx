import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/content/comparison';
import { EarthScene } from '@/components/scenes/EarthScene';
import { CheckCircle2, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

interface ComparisonSectionProps {
  isReducedMotion: boolean;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  isReducedMotion,
}) => {
  const [selectedView, setSelectedView] = useState<'both' | 'natural' | 'enhanced'>('both');

  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="relative min-h-screen py-24 bg-gradient-to-b from-space via-navy/60 to-space border-t border-white/5"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Chapter 03</span>
            <span>·</span>
            <span>Comparative Planetary Physics</span>
          </div>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-app-text tracking-tight"
          >
            {COMPARISON_CONTENT.sectionTitle}
          </h2>
          <p className="mt-3 text-app-muted text-base sm:text-lg">
            Understand the vital difference between Earth’s life-sustaining natural atmosphere and the human-driven intensification shifting our climate equilibrium.
          </p>
        </div>

        {/* View Mode Switcher (Great for accessibility and mobile) */}
        <div className="flex items-center gap-2" role="group" aria-label="Comparison View Filter">
          <button
            onClick={() => setSelectedView('both')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              selectedView === 'both'
                ? 'bg-atmos-blue text-space border-atmos-blue shadow'
                : 'bg-white/5 text-app-muted border-white/10 hover:text-white'
            }`}
          >
            Side-by-Side Comparison
          </button>
          <button
            onClick={() => setSelectedView('natural')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              selectedView === 'natural'
                ? 'bg-mint text-space border-mint shadow'
                : 'bg-white/5 text-app-muted border-white/10 hover:text-white'
            }`}
          >
            Natural Only
          </button>
          <button
            onClick={() => setSelectedView('enhanced')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              selectedView === 'enhanced'
                ? 'bg-sun-amber text-space border-sun-amber shadow'
                : 'bg-white/5 text-app-muted border-white/10 hover:text-white'
            }`}
          >
            Enhanced Only
          </button>
        </div>

        {/* Split Comparison Cards (Desktop: 2 columns, Mobile: vertical stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Natural Greenhouse Effect */}
          {(selectedView === 'both' || selectedView === 'natural') && (
            <div className="bg-navy/50 border-2 border-mint/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-mint" />
                    <span className="text-xs font-mono uppercase tracking-wider text-mint font-semibold">
                      Baseline State
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-mint/15 text-mint text-[11px] font-mono border border-mint/30">
                    Life-Supporting
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-app-text mb-3">
                  {COMPARISON_CONTENT.naturalTitle}
                </h3>
                <p className="text-base text-app-text/90 leading-relaxed font-normal mb-6">
                  “{COMPARISON_CONTENT.naturalNarration}”
                </p>

                {/* Natural Earth Illustration */}
                <div className="relative w-full aspect-square max-w-[280px] mx-auto my-6 flex items-center justify-center">
                  <EarthScene
                    size="100%"
                    isReducedMotion={isReducedMotion}
                    atmosphereIntensity={0.8}
                    showInfraredGlow={false}
                    variant="natural"
                  />
                  {/* Natural balanced radiation indicators */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-[115%] h-[115%] rounded-full border border-mint/20 animate-pulse" />
                  </div>
                </div>

                {/* Key Attributes List */}
                <ul className="space-y-2.5 text-xs text-app-muted border-t border-white/10 pt-6">
                  {COMPARISON_CONTENT.naturalTraits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-mint shrink-0 mt-0.5" />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-mint/80 font-mono">
                ✓ Stable planetary thermal equilibrium
              </div>
            </div>
          )}

          {/* Card 2: Enhanced Greenhouse Effect */}
          {(selectedView === 'both' || selectedView === 'enhanced') && (
            <div className="bg-navy/50 border-2 border-ir-coral/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-ir-coral" />
                    <span className="text-xs font-mono uppercase tracking-wider text-ir-coral font-semibold">
                      Human-Driven State
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-ir-coral/15 text-ir-coral text-[11px] font-mono border border-ir-coral/30">
                    Energy Imbalance
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-app-text mb-3">
                  {COMPARISON_CONTENT.enhancedTitle}
                </h3>
                <p className="text-base text-app-text/90 leading-relaxed font-normal mb-6">
                  “{COMPARISON_CONTENT.enhancedNarration}”
                </p>

                {/* Enhanced Earth Illustration (Restrained, not scorched) */}
                <div className="relative w-full aspect-square max-w-[280px] mx-auto my-6 flex items-center justify-center">
                  <EarthScene
                    size="100%"
                    isReducedMotion={isReducedMotion}
                    atmosphereIntensity={1.5}
                    showInfraredGlow={true}
                    variant="enhanced"
                  />
                  {/* Subtle coral infrared trap halo */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-[125%] h-[125%] rounded-full border border-ir-coral/40" />
                  </div>
                </div>

                {/* Key Attributes List */}
                <ul className="space-y-2.5 text-xs text-app-muted border-t border-white/10 pt-6">
                  {COMPARISON_CONTENT.enhancedTraits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-ir-coral shrink-0 mt-0.5" />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-ir-coral/80 font-mono">
                ⚠ Net positive radiative forcing accumulating heat
              </div>
            </div>
          )}
        </div>

        {/* Central Key Takeaway Banner */}
        <div className="bg-gradient-to-r from-navy via-space to-navy border-2 border-sun-amber/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sun-amber/15 border border-sun-amber/30 text-sun-amber text-xs font-mono uppercase tracking-widest">
            Essential Takeaway
          </div>
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-app-text tracking-wide max-w-4xl mx-auto leading-snug">
            {COMPARISON_CONTENT.keyTakeaway}
          </h4>
          <p className="text-base sm:text-lg text-app-muted max-w-3xl mx-auto leading-relaxed">
            “{COMPARISON_CONTENT.supportingCopy}”
          </p>
        </div>
      </div>
    </section>
  );
};
