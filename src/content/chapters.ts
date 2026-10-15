export interface NavItem {
  id: string;
  label: string;
  number: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'intro', label: 'Introduction', number: '00' },
  { id: 'definition', label: 'Definition', number: '01' },
  { id: 'science', label: 'The Science', number: '02' },
  { id: 'comparison', label: 'Natural vs Enhanced', number: '03' },
  { id: 'causes', label: 'Causes', number: '04' },
  { id: 'impacts', label: 'Impacts', number: '05' },
  { id: 'evidence', label: 'Evidence', number: '06' },
  { id: 'solutions', label: 'Solutions', number: '07' },
  { id: 'future', label: 'The Future', number: '08' },
  { id: 'references', label: 'References', number: '09' },
];

export interface HeroContent {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  supportingCopy: string;
  exploreButton: string;
  simulationButton: string;
}

export const HERO_CONTENT: HeroContent = {
  eyebrow: 'A SCROLL-DRIVEN SCIENCE STORY',
  titleLine1: 'THE GREENHOUSE',
  titleLine2: 'EFFECT',
  subtitle: "Earth’s Natural Shield. Humanity’s Climate Challenge.",
  supportingCopy:
    'What keeps our planet warm enough to support life — and why is that natural process changing?',
  exploreButton: 'Explore the Science',
  simulationButton: 'Jump to the Simulation',
};
