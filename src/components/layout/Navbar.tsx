import { useState } from 'react';
import { Menu, X, EyeOff, Eye } from 'lucide-react';
import { NAV_ITEMS } from '@/content/chapters';

interface NavbarProps {
  activeChapter: string;
  scrollProgress: number;
  onNavigate: (id: string) => void;
  isReducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeChapter,
  scrollProgress,
  onNavigate,
  isReducedMotion,
  onToggleReducedMotion,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'definition', label: 'Definition' },
    { id: 'science', label: 'The Science' },
    { id: 'causes', label: 'Causes' },
    { id: 'impacts', label: 'Impacts' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'solutions', label: 'Solutions' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Main Content Link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 z-50 px-4 py-2 bg-atmos-blue text-space font-semibold rounded shadow-lg border border-white/20"
      >
        Skip to main content
      </a>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-space/85 backdrop-blur-md border-b border-white/10 transition-colors">
        {/* Scroll Progress Bar */}
        <div
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
          className="h-[3px] bg-white/5 w-full overflow-hidden"
        >
          <div
            className="h-full bg-gradient-to-r from-atmos-blue via-mint to-sun-amber transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo / Title */}
          <button
            onClick={() => handleLinkClick('intro')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-atmos-blue rounded-md px-1"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-atmos-blue via-navy to-mint p-[1.5px] shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-space flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-atmos-blue group-hover:bg-mint transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wider uppercase text-app-text">
                The Greenhouse Effect
              </span>
              <span className="text-[10px] text-app-muted/80 tracking-tight hidden sm:block">
                Earth’s Natural Shield · Humanity’s Challenge
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Documentary Chapters"
            className="hidden md:flex items-center gap-1 lg:gap-2 text-xs"
          >
            {mainNavItems.map((item) => {
              const isActive = activeChapter === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
                    isActive
                      ? 'bg-atmos-blue/20 text-atmos-blue border border-atmos-blue/40 shadow-sm'
                      : 'text-app-muted hover:text-app-text hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Controls: Reduced Motion & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleReducedMotion}
              title={isReducedMotion ? 'Motion disabled (Click to enable animations)' : 'Motion enabled (Click to reduce animations)'}
              aria-label={isReducedMotion ? 'Enable motion animations' : 'Reduce motion animations'}
              aria-pressed={isReducedMotion}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isReducedMotion
                  ? 'bg-amber-500/20 text-sun-amber border-sun-amber/40'
                  : 'bg-white/5 text-app-muted hover:text-app-text border-white/10'
              }`}
            >
              {isReducedMotion ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Motion Off</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Motion On</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-app-muted hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-atmos-blue"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-navy/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 space-y-2 animate-fadeIn"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="text-[11px] font-mono text-atmos-blue uppercase tracking-wider mb-2 px-3">
              Documentary Chapters
            </div>
            <div className="grid grid-cols-1 gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeChapter === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-atmos-blue/20 text-atmos-blue font-semibold border border-atmos-blue/30'
                        : 'text-app-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-app-muted/60">{item.number}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
