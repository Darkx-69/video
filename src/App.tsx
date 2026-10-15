import { useActiveChapter } from '@/hooks/useActiveChapter';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { DefinitionSection } from '@/components/sections/DefinitionSection';
import { ScienceSection } from '@/components/sections/ScienceSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { CausesSection } from '@/components/sections/CausesSection';
import { ImpactsSection } from '@/components/sections/ImpactsSection';
import { EvidenceSection } from '@/components/sections/EvidenceSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { FutureSection } from '@/components/sections/FutureSection';
import { ReferencesSection } from '@/components/sections/ReferencesSection';

export function App() {
  const { activeChapter, scrollProgress, navigateToChapter } = useActiveChapter();
  const { isReducedMotion, toggleReducedMotion } = useReducedMotionSafe();

  return (
    <div className="relative min-h-screen bg-space text-app-text selection:bg-atmos-blue/30 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar
        activeChapter={activeChapter}
        scrollProgress={scrollProgress}
        onNavigate={navigateToChapter}
        isReducedMotion={isReducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />

      {/* Main Documentary Content */}
      <main id="main-content" className="focus:outline-none">
        {/* Chapter 0: Hero */}
        <HeroSection
          onNavigate={navigateToChapter}
          isReducedMotion={isReducedMotion}
        />

        {/* Chapter 1: Definition */}
        <DefinitionSection isReducedMotion={isReducedMotion} />

        {/* Chapter 2: Science Mechanism & Simulation */}
        <ScienceSection isReducedMotion={isReducedMotion} />

        {/* Chapter 3: Natural vs Enhanced Comparison */}
        <ComparisonSection isReducedMotion={isReducedMotion} />

        {/* Chapter 4: Human Emission Causes */}
        <CausesSection isReducedMotion={isReducedMotion} />

        {/* Chapter 5: Systemic Impacts */}
        <ImpactsSection isReducedMotion={isReducedMotion} />

        {/* Chapter 6: Empirical Evidence */}
        <EvidenceSection isReducedMotion={isReducedMotion} />

        {/* Chapter 7: Solutions Pathways */}
        <SolutionsSection isReducedMotion={isReducedMotion} />

        {/* Chapter 8: Future Takeaways */}
        <FutureSection
          onNavigate={navigateToChapter}
          isReducedMotion={isReducedMotion}
        />
      </main>

      {/* Scientific References & Footer */}
      <ReferencesSection
        onNavigate={navigateToChapter}
        isReducedMotion={isReducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />
    </div>
  );
}

export default App;
