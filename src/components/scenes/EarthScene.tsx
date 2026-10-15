import React, { Suspense, useState, useEffect } from 'react';
import { ProceduralEarthSVG } from './ProceduralEarthSVG';
import { CinematicEarth3D } from './CinematicEarth3D';
import { useWebGLSupport } from '@/hooks/useWebGLSupport';

interface EarthSceneProps {
  className?: string;
  size?: number | string;
  showInfraredGlow?: boolean;
  atmosphereIntensity?: number;
  isReducedMotion?: boolean;
  forceSVG?: boolean;
  variant?: 'natural' | 'enhanced' | 'dawn' | 'subdued';
  rotation?: number;
}

export const EarthScene: React.FC<EarthSceneProps> = ({
  className = '',
  size = 420,
  showInfraredGlow = false,
  atmosphereIntensity = 1,
  isReducedMotion = false,
  forceSVG = false,
  variant = 'natural',
  rotation = 0,
}) => {
  const hasWebGL = useWebGLSupport();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldRenderSVG = forceSVG || isReducedMotion || !hasWebGL || !mounted;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {shouldRenderSVG ? (
        <ProceduralEarthSVG
          size={size}
          showInfraredGlow={showInfraredGlow}
          atmosphereIntensity={atmosphereIntensity}
          rotation={rotation}
          variant={variant}
        />
      ) : (
        <Suspense
          fallback={
            <ProceduralEarthSVG
              size={size}
              showInfraredGlow={showInfraredGlow}
              atmosphereIntensity={atmosphereIntensity}
              rotation={rotation}
              variant={variant}
            />
          }
        >
          <CinematicEarth3D
            isReducedMotion={isReducedMotion}
            atmosphereIntensity={atmosphereIntensity}
            showInfraredGlow={showInfraredGlow}
          />
        </Suspense>
      )}
    </div>
  );
};
