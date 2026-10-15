import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

interface EarthMeshProps {
  isReducedMotion?: boolean;
  atmosphereIntensity?: number;
  showInfraredGlow?: boolean;
}

function createProceduralEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep ocean background
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
  oceanGrad.addColorStop(0, '#0a2353');
  oceanGrad.addColorStop(0.5, '#0d3278');
  oceanGrad.addColorStop(1, '#0a2353');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, 1024, 512);

  // Land masses stylized (Americas, Eurasia, Africa, Australia)
  ctx.fillStyle = '#1e784f';

  // North America
  ctx.beginPath();
  ctx.ellipse(250, 140, 90, 60, -0.2, 0, Math.PI * 2);
  ctx.fill();

  // South America
  ctx.beginPath();
  ctx.ellipse(320, 320, 60, 90, 0.2, 0, Math.PI * 2);
  ctx.fill();

  // Eurasia
  ctx.beginPath();
  ctx.ellipse(650, 130, 150, 70, 0, 0, Math.PI * 2);
  ctx.fill();

  // Africa
  ctx.beginPath();
  ctx.ellipse(550, 260, 70, 90, 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Australia
  ctx.beginPath();
  ctx.ellipse(820, 340, 50, 40, -0.1, 0, Math.PI * 2);
  ctx.fill();

  // Polar ice caps
  ctx.fillStyle = '#e8f4fd';
  ctx.fillRect(0, 0, 1024, 35);
  ctx.fillRect(0, 475, 1024, 37);

  // Add terrain shading details
  ctx.fillStyle = '#165e3e';
  ctx.beginPath();
  ctx.ellipse(260, 150, 60, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(640, 140, 100, 40, 0, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

function createProceduralCloudTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, 1024, 512);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';

  // Swirling atmospheric cloud bands
  for (let i = 0; i < 28; i++) {
    const x = (i * 38) % 1024;
    const y = 80 + Math.sin(i * 0.7) * 160 + ((i * 15) % 180);
    const rx = 50 + (i % 6) * 15;
    const ry = 15 + (i % 4) * 8;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

const EarthMesh: React.FC<EarthMeshProps> = ({
  isReducedMotion = false,
  atmosphereIntensity = 1,
  showInfraredGlow = false,
}) => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const earthTexture = useMemo(() => createProceduralEarthTexture(), []);
  const cloudTexture = useMemo(() => createProceduralCloudTexture(), []);

  useFrame((_, delta) => {
    if (!isReducedMotion) {
      if (earthRef.current) {
        earthRef.current.rotation.y += delta * 0.06;
      }
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += delta * 0.08;
      }
    }
  });

  return (
    <group>
      {/* Planetary Sphere */}
      <mesh ref={earthRef} rotation={[0.2, 0.4, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Cloud Sphere */}
      <mesh ref={cloudsRef} rotation={[0.2, 0.4, 0]}>
        <sphereGeometry args={[2.03, 48, 48]} />
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Atmospheric Rim Fresnel Glow */}
      <mesh scale={[1.08, 1.08, 1.08]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#4DA3FF"
          transparent
          opacity={0.22 * atmosphereIntensity}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outgoing Infrared Emission Ring */}
      {showInfraredGlow && (
        <mesh scale={[1.15, 1.15, 1.15]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial
            color="#FF665A"
            transparent
            opacity={0.25}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}
    </group>
  );
};

export interface CinematicEarth3DProps {
  className?: string;
  isReducedMotion?: boolean;
  atmosphereIntensity?: number;
  showInfraredGlow?: boolean;
}

export const CinematicEarth3D: React.FC<CinematicEarth3DProps> = ({
  className = '',
  isReducedMotion = false,
  atmosphereIntensity = 1,
  showInfraredGlow = false,
}) => {
  return (
    <div className={`w-full h-full relative ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.4, 4.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        {/* Directional sunlight from upper left */}
        <directionalLight position={[-6, 4, 4]} intensity={2.2} color="#FFF8EE" />
        <directionalLight position={[6, -2, -3]} intensity={0.15} color="#4DA3FF" />
        
        <EarthMesh
          isReducedMotion={isReducedMotion}
          atmosphereIntensity={atmosphereIntensity}
          showInfraredGlow={showInfraredGlow}
        />

        <Stars
          radius={50}
          depth={40}
          count={1000}
          factor={3}
          saturation={0}
          fade
          speed={isReducedMotion ? 0 : 0.5}
        />
      </Canvas>
    </div>
  );
};
