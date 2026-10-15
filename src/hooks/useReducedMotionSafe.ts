import { useState, useEffect } from 'react';

export function useReducedMotionSafe() {
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('prefers-reduced-motion-override');
    if (stored !== null) {
      return stored === 'true';
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('prefers-reduced-motion-override');
      if (stored === null) {
        setIsReducedMotion(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute(
        'data-reduced-motion',
        isReducedMotion ? 'true' : 'false'
      );
    }
  }, [isReducedMotion]);

  const toggleReducedMotion = () => {
    setIsReducedMotion((prev) => {
      const next = !prev;
      localStorage.setItem('prefers-reduced-motion-override', String(next));
      return next;
    });
  };

  return { isReducedMotion, toggleReducedMotion };
}
