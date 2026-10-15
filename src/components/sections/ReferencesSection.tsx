import {
  SCIENTIFIC_REFERENCES,
  REFERENCES_CONTENT,
} from '@/content/references';
import { ExternalLink, ArrowUp, Eye, EyeOff, ShieldCheck } from 'lucide-react';

interface ReferencesSectionProps {
  onNavigate: (id: string) => void;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  onNavigate,
  isReducedMotion,
  onToggleReducedMotion,
}) => {
  const handleBackToTop = () => {
    onNavigate('intro');
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.focus();
  };

  return (
    <footer
      id="references"
      aria-labelledby="references-heading"
      className="relative bg-space border-t border-white/10 pt-20 pb-16 text-app-muted"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* References Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atmos-blue/10 border border-atmos-blue/30 text-atmos-blue text-xs font-mono uppercase tracking-widest mb-3">
            <span>Authoritative Sources</span>
          </div>
          <h2
            id="references-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-app-text tracking-tight"
          >
            {REFERENCES_CONTENT.heading}
          </h2>
        </div>

        {/* Official Reference Links Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCIENTIFIC_REFERENCES.map((ref) => (
            <a
              key={ref.badge}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy/60 hover:bg-navy/90 border border-white/10 hover:border-atmos-blue/50 rounded-2xl p-6 transition-all group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-atmos-blue/15 text-atmos-blue text-[11px] font-mono border border-atmos-blue/30">
                    {ref.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-app-muted group-hover:text-atmos-blue transition-colors" />
                </div>
                <h3 className="text-base font-bold text-app-text group-hover:text-atmos-blue transition-colors mb-2">
                  {ref.name}
                </h3>
                <div className="text-xs text-app-muted/70 font-mono mb-2">
                  {ref.organization}
                </div>
                <p className="text-xs text-app-muted leading-relaxed">
                  {ref.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-atmos-blue font-medium">
                <span>Visit portal</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Preserved Educational Disclaimer Note */}
        <div className="bg-navy/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex items-start gap-4 text-xs sm:text-sm text-app-muted leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-atmos-blue shrink-0 mt-0.5" />
          <div>
            <p className="italic text-app-text/90 font-medium">
              “{REFERENCES_CONTENT.note}”
            </p>
          </div>
        </div>

        {/* Bottom Utility Bar: Site Title, Controls, Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-app-text tracking-wide">
              {REFERENCES_CONTENT.siteTitle}
            </div>
            <div className="text-xs text-app-muted/70">
              {REFERENCES_CONTENT.siteSubtitle}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Reduced Motion Toggle Button */}
            <button
              onClick={onToggleReducedMotion}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-2 transition-all ${
                isReducedMotion
                  ? 'bg-amber-500/20 text-sun-amber border-sun-amber/40'
                  : 'bg-white/5 text-app-muted border-white/10 hover:text-white'
              }`}
            >
              {isReducedMotion ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Reduced Motion: Active</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Standard Motion</span>
                </>
              )}
            </button>

            {/* Back to Top Button */}
            <button
              onClick={handleBackToTop}
              className="px-4 py-2 rounded-xl bg-atmos-blue/20 hover:bg-atmos-blue text-atmos-blue hover:text-space border border-atmos-blue/30 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{REFERENCES_CONTENT.backToTopText}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
