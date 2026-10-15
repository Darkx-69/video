import { ArrowDown, Gauge } from 'lucide-react';
import { HERO_CONTENT } from '@/content/chapters';
import { EarthScene } from '@/components/scenes/EarthScene';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
  isReducedMotion: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  isReducedMotion,
}) => {
  return (
    <section
      id="intro"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-cosmic-radial"
    >
      {/* Background Star Ambient Dots */}
      <div className="absolute inset-0 bg-space-mesh opacity-20 pointer-events-none" />

      {/* Solar Bloom Glow (Upper-right background lighting) */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sun-amber/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-atmos-blue/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-atmos-blue animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-atmos-blue font-semibold">
                {HERO_CONTENT.eyebrow}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-1">
              <h1
                id="hero-title"
                tabIndex={-1}
                className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-app-text leading-[1.08]"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  {HERO_CONTENT.titleLine1}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-atmos-blue via-sky-300 to-mint">
                  {HERO_CONTENT.titleLine2}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-medium text-app-text/90 tracking-wide border-l-2 border-atmos-blue pl-4">
              {HERO_CONTENT.subtitle}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-app-muted leading-relaxed max-w-2xl">
              “{HERO_CONTENT.supportingCopy}”
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('definition')}
                className="px-6 py-3.5 rounded-full bg-atmos-blue hover:bg-sky-400 text-space font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-atmos-blue/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-atmos-blue"
              >
                <span>{HERO_CONTENT.exploreButton}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={() => onNavigate('simulation')}
                className="px-6 py-3.5 rounded-full bg-navy/80 hover:bg-navy text-app-text border border-atmos-blue/30 hover:border-atmos-blue/60 font-medium text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-atmos-blue"
              >
                <Gauge className="w-4 h-4 text-sun-amber" />
                <span>{HERO_CONTENT.simulationButton}</span>
              </button>
            </div>

            {/* Quick Context Indicator */}
            <div className="pt-4 flex items-center gap-4 text-xs text-app-muted/80">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                10 Interactive Chapters
              </span>
              <span>·</span>
              <span>Peer-reviewed scientific foundations</span>
            </div>
          </div>

          {/* Right Cinematic Earth Column */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-square flex items-center justify-center">
              {/* Backing Ambient Atmospheric Glow */}
              <div
                className="absolute inset-0 rounded-full bg-atmos-blue/20 blur-3xl transform scale-90 pointer-events-none"
                aria-hidden="true"
              />

              {/* Central Planetary Earth */}
              <EarthScene
                size="100%"
                className="w-full h-full"
                isReducedMotion={isReducedMotion}
                atmosphereIntensity={1.1}
                variant="natural"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
