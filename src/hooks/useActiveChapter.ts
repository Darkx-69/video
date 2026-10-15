import { useState, useEffect } from 'react';

const CHAPTER_IDS = [
  'intro',
  'definition',
  'science',
  'comparison',
  'causes',
  'impacts',
  'evidence',
  'solutions',
  'future',
  'references',
];

export function useActiveChapter() {
  const [activeChapter, setActiveChapter] = useState<string>('intro');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check current chapter in view
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = CHAPTER_IDS.length - 1; i >= 0; i--) {
        const id = CHAPTER_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveChapter(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
      setActiveChapter(id);
    }
  };

  return { activeChapter, scrollProgress, navigateToChapter };
}
