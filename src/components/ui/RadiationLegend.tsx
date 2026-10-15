import React from 'react';

interface RadiationLegendProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const RadiationLegend: React.FC<RadiationLegendProps> = ({
  className = '',
  variant = 'compact',
}) => {
  return (
    <div
      role="region"
      aria-label="Scientific Radiation Visual Language Key"
      className={`bg-navy/85 backdrop-blur-md border border-atmos-blue/20 rounded-xl p-3.5 text-xs text-app-muted shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-atmos-blue/15">
        <span className="font-semibold text-app-text tracking-wider uppercase text-[11px] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-atmos-blue animate-pulse" />
          Radiation Key & Conventions
        </span>
        <span className="text-[10px] text-atmos-blue font-mono px-1.5 py-0.5 rounded bg-atmos-blue/10 border border-atmos-blue/20">
          Standardized
        </span>
      </div>

      <div className={`grid ${variant === 'full' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3' : 'grid-cols-2 gap-2.5'}`}>
        {/* Incoming Shortwave */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-4 shrink-0 overflow-visible" viewBox="0 0 32 16" aria-hidden="true">
            <line x1="2" y1="8" x2="24" y2="8" stroke="#FFB454" strokeWidth="2.5" />
            <polygon points="24,4 32,8 24,12" fill="#FFB454" />
          </svg>
          <div>
            <div className="text-sun-amber font-semibold leading-tight">Solar [SW]</div>
            <div className="text-[10px] text-app-muted/80">Incoming shortwave</div>
          </div>
        </div>

        {/* Reflected Solar */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-4 shrink-0 overflow-visible" viewBox="0 0 32 16" aria-hidden="true">
            <line x1="2" y1="8" x2="22" y2="8" stroke="#FFB454" strokeWidth="2" strokeDasharray="3 2" strokeOpacity="0.75" />
            <path d="M22,5 L28,8 L22,11" fill="none" stroke="#FFB454" strokeWidth="2" strokeOpacity="0.75" />
          </svg>
          <div>
            <div className="text-sun-amber/80 font-semibold leading-tight">Reflected [SW]</div>
            <div className="text-[10px] text-app-muted/80">Albedo / unabsorbed</div>
          </div>
        </div>

        {/* Terrestrial Infrared */}
        <div className="flex items-center gap-2">
          <svg className="w-8 h-4 shrink-0 overflow-visible" viewBox="0 0 32 16" aria-hidden="true">
            <path
              d="M2,8 Q8,2 14,8 T26,8"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.5"
            />
            <circle cx="28" cy="8" r="3" fill="#FF665A" />
          </svg>
          <div>
            <div className="text-ir-coral font-semibold leading-tight">Terrestrial [IR]</div>
            <div className="text-[10px] text-app-muted/80">Outgoing longwave</div>
          </div>
        </div>

        {/* Atmosphere / Surface / Solutions */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center shrink-0">
            <span className="w-3 h-3 rounded-full bg-atmos-blue/30 border border-atmos-blue" />
            <span className="w-3 h-3 rounded-full bg-mint/30 border border-mint" />
          </div>
          <div>
            <div className="text-atmos-blue font-semibold leading-tight flex items-center gap-1">
              <span>Atmosphere</span>
              <span className="text-mint font-normal text-[10px]">& Solutions</span>
            </div>
            <div className="text-[10px] text-app-muted/80">Oceans / Interventions</div>
          </div>
        </div>
      </div>
    </div>
  );
};
