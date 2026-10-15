export interface TakeawayItem {
  id: number;
  numberStr: string;
  statement: string;
  detail: string;
}

export const CHAPTER_TAKEAWAYS: TakeawayItem[] = [
  {
    id: 1,
    numberStr: '01',
    statement: 'The natural greenhouse effect makes Earth habitable.',
    detail: 'Without naturally occurring greenhouse gases, Earth’s surface temperature would be inhospitably frigid.',
  },
  {
    id: 2,
    numberStr: '02',
    statement: 'Greenhouse gases absorb and re-emit infrared radiation.',
    detail: 'Gases in our atmosphere intercept outgoing terrestrial thermal energy, redirecting portions back toward the surface.',
  },
  {
    id: 3,
    numberStr: '03',
    statement: 'Human activities increase greenhouse gas concentrations.',
    detail: 'Fossil fuel combustion, land clearing, agriculture, and industrial processes add billions of tons of gases yearly.',
  },
  {
    id: 4,
    numberStr: '04',
    statement: 'The enhanced greenhouse effect contributes to global warming and climate change.',
    detail: 'Higher gas concentrations trap extra thermal energy, driving shifts in planetary climate systems and extreme weather risks.',
  },
  {
    id: 5,
    numberStr: '05',
    statement: 'Emissions reductions and adaptation can limit future risks.',
    detail: 'Coordinated global mitigation combined with local resilient adaptation provides the roadmap for a sustainable future.',
  },
];

export const FUTURE_CONTENT = {
  eyebrow: 'CHAPTER 08 — SUMMARY & OUTLOOK',
  title: 'The Future Is Shaped by Our Choices',
  closingStatement: 'UNDERSTANDING OUR PLANET IS THE FIRST STEP TOWARD PROTECTING IT.',
  finalLine: 'PROTECT OUR PLANET. SHAPE OUR FUTURE.',
  exploreAgainButton: 'Explore Again',
};
