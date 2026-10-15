import React from 'react';

interface RadiationMechanismSVGProps {
  currentStage: number; // 1 to 6
  isReducedMotion?: boolean;
  className?: string;
}

export const RadiationMechanismSVG: React.FC<RadiationMechanismSVGProps> = ({
  currentStage,
  isReducedMotion = false,
  className = '',
}) => {
  return (
    <div className={`relative w-full aspect-[16/10] max-h-[500px] select-none ${className}`}>
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Greenhouse effect physical mechanism diagram showing Stage ${currentStage}`}
        role="img"
      >
        <defs>
          {/* Space / Upper Atmosphere Gradient */}
          <linearGradient id="spaceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050816" />
            <stop offset="45%" stopColor="#0B1226" />
            <stop offset="100%" stopColor="#132347" />
          </linearGradient>

          {/* Atmosphere Band Gradient */}
          <linearGradient id="atmosBandGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4DA3FF" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#4DA3FF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4DA3FF" stopOpacity="0.32" />
          </linearGradient>

          {/* Earth Curved Surface Gradient */}
          <linearGradient id="earthSurfaceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="40%" stopColor="#172554" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          {/* Land Surface Gradient */}
          <linearGradient id="landSurfaceGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset="50%" stopColor="#047857" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Sun Glow Gradient */}
          <radialGradient id="sunGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="30%" stopColor="#FFB454" />
            <stop offset="70%" stopColor="#FF9020" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB454" stopOpacity="0" />
          </radialGradient>

          {/* Surface Warming Glow */}
          <radialGradient id="warmingSurfaceGlow" cx="50%" cy="100%" r="80%">
            <stop offset="0%" stopColor="#FFB454" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#FF665A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </radialGradient>

          {/* Re-emission Radial Flash */}
          <radialGradient id="reemissionGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF665A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF665A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Deep Space Sky Backdrop */}
        <rect x="0" y="0" width="800" height="500" fill="url(#spaceGradient)" />

        {/* 2. Earth Curved Surface (Bottom Area) */}
        {/* Ocean Body */}
        <path
          d="M0,370 Q400,340 800,370 L800,500 L0,500 Z"
          fill="url(#earthSurfaceGradient)"
        />

        {/* Land Mass on the Left and Center */}
        <path
          d="M60,366 Q200,348 380,358 Q340,390 180,410 Q80,395 60,366 Z"
          fill="url(#landSurfaceGradient)"
        />
        {/* Ice / Bright Reflective Surface on Right */}
        <path
          d="M620,360 Q720,354 800,368 L800,430 Q700,420 620,360 Z"
          fill="#E0F2FE"
          opacity="0.9"
        />
        <text x="690" y="390" fill="#0369A1" fontSize="11" fontWeight="bold">
          Ice / Snow
        </text>

        {/* Earth Crust & Ocean Labels */}
        <text x="180" y="380" fill="#A7F3D0" fontSize="12" fontWeight="600">
          Land Surface
        </text>
        <text x="470" y="400" fill="#93C5FD" fontSize="12" fontWeight="600">
          Ocean
        </text>

        {/* Stage 3 Warming Glow on Surface */}
        {currentStage >= 3 && (
          <path
            d="M0,368 Q400,338 800,368 L800,410 Q400,380 0,410 Z"
            fill="url(#warmingSurfaceGlow)"
            className={isReducedMotion ? '' : 'animate-pulse'}
          />
        )}

        {/* 3. Atmospheric Layer Band */}
        <path
          d="M0,170 Q400,140 800,170 L800,368 Q400,338 0,368 Z"
          fill="url(#atmosBandGradient)"
        />
        {/* Atmosphere boundary line */}
        <path
          d="M0,170 Q400,140 800,170"
          stroke="#4DA3FF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.5"
          fill="none"
        />
        <text x="25" y="160" fill="#4DA3FF" fontSize="11" fontWeight="bold" letterSpacing="1">
          ATMOSPHERE BOUNDARY (TROPOPAUSE)
        </text>

        {/* 4. Clouds in the Atmosphere */}
        <g opacity="0.85">
          {/* Cloud 1 (Center-Left) */}
          <path
            d="M190,240 Q205,220 230,225 Q255,215 275,235 Q295,230 300,250 Q310,270 290,275 Q200,285 190,240 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
          {/* Cloud 2 (Center-Right) */}
          <path
            d="M480,220 Q500,200 530,210 Q560,200 580,220 Q605,225 600,245 Q590,265 560,260 Q480,265 480,220 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </g>

        {/* 5. Gas Markers in Atmosphere (Representing H2O, CO2, CH4, N2O) */}
        <g>
          {/* Gas 1: CO2 */}
          <circle cx="340" cy="230" r="14" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
          <text x="340" y="234" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">CO₂</text>

          {/* Gas 2: H2O */}
          <circle cx="430" cy="270" r="14" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
          <text x="430" y="274" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">H₂O</text>

          {/* Gas 3: CH4 */}
          <circle cx="230" cy="310" r="13" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
          <text x="230" y="314" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">CH₄</text>

          {/* Gas 4: N2O */}
          <circle cx="630" cy="260" r="13" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
          <text x="630" y="264" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">N₂O</text>

          {/* Gas 5: O3 */}
          <circle cx="510" cy="190" r="12" fill="#0B1226" stroke="#4DA3FF" strokeWidth="2" />
          <text x="510" y="194" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">O₃</text>
        </g>

        {/* 6. The Sun (Top Left Corner) */}
        <g transform="translate(90, 70)">
          <circle cx="0" cy="0" r="65" fill="url(#sunGlowGrad)" />
          <circle cx="0" cy="0" r="32" fill="#FFFBEB" />
          <circle cx="0" cy="0" r="30" fill="#FFB454" />
          <text x="0" y="4" textAnchor="middle" fill="#050816" fontSize="12" fontWeight="bold">
            SUN
          </text>
        </g>

        {/* ---------------------------------------------------- */}
        {/* STAGE-SPECIFIC RADIATION VISUALS                     */}
        {/* ---------------------------------------------------- */}

        {/* STAGE 1: Incoming Solar Shortwave Radiation */}
        {/* Solid amber straight arrows, filled triangular arrowheads, label SW */}
        <g id="stage-1-solar-arrows" opacity={currentStage >= 4 ? 0.35 : 1}>
          {/* Arrow 1: Toward Land */}
          <line x1="120" y1="100" x2="220" y2="210" stroke="#FFB454" strokeWidth="4" />
          {/* Arrow 2: Toward Cloud 1 */}
          <line x1="140" y1="90" x2="240" y2="220" stroke="#FFB454" strokeWidth="4" />
          {/* Arrow 3: Toward Surface / Ocean */}
          <line x1="160" y1="85" x2="380" y2="340" stroke="#FFB454" strokeWidth="4" />
          <polygon points="380,340 368,328 385,325" fill="#FFB454" />
          {/* Arrow 4: Toward Ice Surface */}
          <line x1="180" y1="75" x2="680" y2="345" stroke="#FFB454" strokeWidth="3.5" />
          <polygon points="680,345 665,338 680,332" fill="#FFB454" />

          {/* SW Label badge */}
          <rect x="250" y="130" width="46" height="22" rx="4" fill="#0B1226" stroke="#FFB454" strokeWidth="1.5" />
          <text x="273" y="145" textAnchor="middle" fill="#FFB454" fontSize="11" fontWeight="bold">SW</text>
        </g>

        {/* STAGE 2: Reflected Sunlight */}
        {/* Dashed amber straight arrows with open chevron heads and reduced opacity */}
        {currentStage >= 2 && (
          <g id="stage-2-reflection" opacity={currentStage >= 4 ? 0.45 : 0.9}>
            {/* Reflection from Cloud */}
            <line
              x1="240"
              y1="220"
              x2="310"
              y2="100"
              stroke="#FFB454"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              strokeOpacity="0.85"
            />
            {/* Open chevron head */}
            <path d="M300,112 L310,100 L318,114" fill="none" stroke="#FFB454" strokeWidth="2.5" strokeOpacity="0.85" />

            {/* Reflection from Ice / Snow Surface */}
            <line
              x1="680"
              y1="345"
              x2="760"
              y2="140"
              stroke="#FFB454"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              strokeOpacity="0.85"
            />
            {/* Open chevron head */}
            <path d="M748,154 L760,140 L768,156" fill="none" stroke="#FFB454" strokeWidth="2.5" strokeOpacity="0.85" />

            {/* Reflection Label */}
            <rect x="315" y="85" width="90" height="20" rx="4" fill="#0B1226" stroke="#FFB454" strokeWidth="1" strokeDasharray="3 2" />
            <text x="360" y="99" textAnchor="middle" fill="#FFB454" fontSize="10" fontWeight="bold">Reflected [SW]</text>
          </g>
        )}

        {/* STAGE 3: Surface Absorption & Warming Glow */}
        {currentStage >= 3 && (
          <g id="stage-3-absorption">
            {/* Direct solar penetration hitting land surface */}
            <line x1="130" y1="105" x2="160" y2="350" stroke="#FFB454" strokeWidth="3.5" />
            <polygon points="160,350 148,340 165,335" fill="#FFB454" />

            {/* Heat shimmer lines above warm surface */}
            <path
              d="M130,340 Q135,325 130,310 M170,340 Q175,325 170,310 M210,340 Q215,325 210,310"
              fill="none"
              stroke="#FFB454"
              strokeWidth="2"
              opacity="0.75"
              className={isReducedMotion ? '' : 'animate-shimmer'}
            />
            <rect x="140" y="325" width="100" height="20" rx="4" fill="#0B1226" stroke="#FFB454" strokeWidth="1" />
            <text x="190" y="339" textAnchor="middle" fill="#FFB454" fontSize="10" fontWeight="bold">Absorbed Energy</text>
          </g>
        )}

        {/* STAGE 4: Outgoing Terrestrial Infrared Radiation */}
        {/* Coral sinusoidal waves with circular heads, label IR */}
        {currentStage >= 4 && (
          <g id="stage-4-infrared">
            {/* Direct escaping IR ray 1 (Escaping to space cleanly) */}
            <path
              d="M480,360 Q495,310 480,260 T480,160 T480,60"
              fill="none"
              stroke="#FF665A"
              strokeWidth="3"
            />
            <circle cx="480" cy="55" r="4.5" fill="#FF665A" />
            <text x="495" y="60" fill="#FF665A" fontSize="11" fontWeight="bold">IR (Escapes to Space)</text>

            {/* IR ray 2 rising from land toward atmosphere */}
            <path
              d="M260,360 Q275,320 260,280 T260,200"
              fill="none"
              stroke="#FF665A"
              strokeWidth="3"
            />
            <circle cx="260" cy="195" r="4.5" fill="#FF665A" />

            {/* IR Label badge */}
            <rect x="235" y="315" width="46" height="22" rx="4" fill="#0B1226" stroke="#FF665A" strokeWidth="1.5" />
            <text x="258" y="330" textAnchor="middle" fill="#FF665A" fontSize="11" fontWeight="bold">IR</text>
          </g>
        )}

        {/* STAGE 5: Absorption & Re-emission */}
        {/* Greenhouse gases absorb some IR and re-emit in all directions (some up, some back to surface) */}
        {currentStage >= 5 && (
          <g id="stage-5-reemission">
            {/* Interaction with CO2 at (340, 230) */}
            <circle cx="340" cy="230" r="28" fill="url(#reemissionGlow)" className={isReducedMotion ? '' : 'animate-ping'} opacity="0.4" />
            {/* Downward re-emitted IR back to Earth surface */}
            <path
              d="M340,245 Q355,285 340,320 T335,360"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.8"
            />
            <circle cx="335" cy="365" r="4" fill="#FF665A" />
            <text x="348" y="340" fill="#FF665A" fontSize="10" fontWeight="bold">Re-emitted downward</text>

            {/* Upward re-emitted IR toward space */}
            <path
              d="M340,215 Q325,170 340,130 T345,65"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.5"
            />
            <circle cx="345" cy="60" r="4" fill="#FF665A" />
            <text x="355" y="75" fill="#FF665A" fontSize="10" fontWeight="bold">Re-emitted upward</text>

            {/* Interaction with H2O at (430, 270) */}
            <path
              d="M430,285 Q415,315 425,355"
              fill="none"
              stroke="#FF665A"
              strokeWidth="2.5"
            />
            <circle cx="425" cy="358" r="3.5" fill="#FF665A" />
          </g>
        )}

        {/* STAGE 6: Earth's Energy Balance & Ocean Heat Storage */}
        {currentStage === 6 && (
          <g id="stage-6-balance">
            {/* Ocean Heat Storage Reservoir graphic */}
            <rect x="420" y="420" width="160" height="42" rx="6" fill="#0B1226" stroke="#4DA3FF" strokeWidth="1.5" />
            <text x="500" y="438" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="bold">
              Ocean Heat Storage
            </text>
            <text x="500" y="452" textAnchor="middle" fill="#A9B4C8" fontSize="9">
              Buffers thermal changes over time
            </text>

            {/* Balance status pill in upper atmosphere */}
            <rect x="580" y="30" width="190" height="36" rx="8" fill="#0B1226" stroke="#67E8B5" strokeWidth="2" />
            <circle cx="598" cy="48" r="5" fill="#67E8B5" />
            <text x="680" y="45" textAnchor="middle" fill="#67E8B5" fontSize="11" fontWeight="bold">
              Dynamic Energy Balance
            </text>
            <text x="680" y="58" textAnchor="middle" fill="#A9B4C8" fontSize="9">
              Gains vs. Losses over time
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
