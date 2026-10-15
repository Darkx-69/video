import React from 'react';

interface ProceduralEarthSVGProps {
  className?: string;
  size?: number | string;
  showInfraredGlow?: boolean;
  atmosphereIntensity?: number;
  rotation?: number;
  variant?: 'natural' | 'enhanced' | 'dawn' | 'subdued';
}

export const ProceduralEarthSVG: React.FC<ProceduralEarthSVGProps> = ({
  className = '',
  size = 380,
  showInfraredGlow = false,
  atmosphereIntensity = 1,
  rotation = 0,
  variant = 'natural',
}) => {
  const isEnhanced = variant === 'enhanced';
  const isDawn = variant === 'dawn';

  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Scientific illustration of planet Earth showing oceans, continents, and atmosphere"
      role="img"
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Space Background Glow */}
          <radialGradient id="spaceGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4DA3FF" stopOpacity={0.12 * atmosphereIntensity} />
            <stop offset="70%" stopColor="#0B1226" stopOpacity="0" />
          </radialGradient>

          {/* Atmospheric Rim Halo */}
          <radialGradient id="atmosHalo" cx="35%" cy="30%" r="70%">
            <stop offset="60%" stopColor="#4DA3FF" stopOpacity={0.8 * atmosphereIntensity} />
            <stop offset="78%" stopColor="#0077FF" stopOpacity={0.45 * atmosphereIntensity} />
            <stop offset="92%" stopColor="#4DA3FF" stopOpacity={0.25 * atmosphereIntensity} />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </radialGradient>

          {/* Ocean Sphere Gradient with Directional Sunlight */}
          <radialGradient id="oceanSurface" cx="30%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="25%" stopColor="#1D4ED8" />
            <stop offset="55%" stopColor="#0F2B66" />
            <stop offset="85%" stopColor="#081432" />
            <stop offset="100%" stopColor="#030714" />
          </radialGradient>

          {/* Landmass Shading Gradient */}
          <linearGradient id="landGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDawn ? "#67E8B5" : "#10B981"} />
            <stop offset="40%" stopColor={isDawn ? "#34D399" : "#059669"} />
            <stop offset="80%" stopColor="#065F46" />
            <stop offset="100%" stopColor="#022C22" />
          </linearGradient>

          {/* Terminator Shadow Curve (Day/Night) */}
          <linearGradient id="terminatorShadow" x1="25%" y1="20%" x2="90%" y2="85%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0" />
            <stop offset="55%" stopColor="#000000" stopOpacity="0.2" />
            <stop offset="80%" stopColor="#030714" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#02040A" stopOpacity="0.97" />
          </linearGradient>

          {/* Infrared Emission Glow if active */}
          <radialGradient id="irGlow" cx="50%" cy="50%" r="50%">
            <stop offset="75%" stopColor="#FF665A" stopOpacity="0" />
            <stop offset="90%" stopColor="#FF665A" stopOpacity={isEnhanced ? "0.45" : "0.25"} />
            <stop offset="100%" stopColor="#FF665A" stopOpacity="0" />
          </radialGradient>

          {/* Clip path for globe surface */}
          <clipPath id="globeClip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
        </defs>

        {/* Ambient atmospheric outer halo */}
        <circle cx="200" cy="200" r="185" fill="url(#spaceGlow)" />
        <circle
          cx="200"
          cy="200"
          r="162"
          fill="none"
          stroke="#4DA3FF"
          strokeWidth="12"
          strokeOpacity={0.25 * atmosphereIntensity}
          className="transition-all duration-700"
        />
        <circle
          cx="200"
          cy="200"
          r="154"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="4"
          strokeOpacity={0.5 * atmosphereIntensity}
        />

        {/* Infrared glow ring when active */}
        {showInfraredGlow && (
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="url(#irGlow)"
            className="animate-pulse"
          />
        )}

        {/* Globe Surface within clip */}
        <g clipPath="url(#globeClip)">
          {/* Base Ocean Sphere */}
          <circle cx="200" cy="200" r="150" fill="url(#oceanSurface)" />

          {/* Continents & Landmasses */}
          <g
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '200px 200px',
              transition: 'transform 0.4s ease-out',
            }}
          >
            {/* North America */}
            <path
              d="M110,110 Q140,95 170,120 Q180,140 160,165 Q145,185 130,170 Q115,160 100,140 Z"
              fill="url(#landGreen)"
              opacity="0.9"
            />
            {/* South America */}
            <path
              d="M140,190 Q170,200 165,240 Q150,280 135,260 Q125,230 130,205 Z"
              fill="url(#landGreen)"
              opacity="0.9"
            />
            {/* Eurasia */}
            <path
              d="M200,95 Q260,85 300,120 Q310,150 270,165 Q230,150 215,125 Z"
              fill="url(#landGreen)"
              opacity="0.88"
            />
            {/* Africa */}
            <path
              d="M195,160 Q240,165 245,210 Q235,260 210,250 Q185,215 190,175 Z"
              fill="url(#landGreen)"
              opacity="0.92"
            />
            {/* Southeast Asia & Oceania */}
            <circle cx="280" cy="225" r="16" fill="url(#landGreen)" opacity="0.85" />
            <circle cx="295" cy="245" r="10" fill="url(#landGreen)" opacity="0.85" />
            <path
              d="M260,240 Q285,235 290,265 Q270,275 255,255 Z"
              fill="url(#landGreen)"
              opacity="0.88"
            />
            {/* Arctic Ice Cap */}
            <ellipse cx="200" cy="65" rx="70" ry="20" fill="#E0F2FE" opacity="0.75" />
            {/* Antarctic Ice Cap */}
            <ellipse cx="200" cy="340" rx="85" ry="22" fill="#E0F2FE" opacity="0.8" />
          </g>

          {/* Cloud layers (semi-transparent swirling patterns) */}
          <g opacity="0.45">
            <path
              d="M100,130 Q150,110 210,135 T310,120 Q260,150 200,145 T95,135 Z"
              fill="#FFFFFF"
            />
            <path
              d="M130,175 Q180,195 240,170 T320,185 Q260,195 190,180 T125,180 Z"
              fill="#FFFFFF"
            />
            <path
              d="M120,230 Q170,220 230,245 T290,230 Q240,255 180,245 T115,235 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* Planetary Sun Glint / Specular highlight */}
          <ellipse
            cx="145"
            cy="135"
            rx="45"
            ry="25"
            fill="#FFFFFF"
            opacity="0.18"
            transform="rotate(-20 145 135)"
          />

          {/* Day / Night Terminator Shadow */}
          <circle cx="200" cy="200" r="150" fill="url(#terminatorShadow)" />
        </g>

        {/* Crisp Atmospheric Inner Edge Rim */}
        <circle
          cx="200"
          cy="200"
          r="149"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="3.5"
          strokeOpacity={0.6 * atmosphereIntensity}
        />
      </svg>
    </div>
  );
};
