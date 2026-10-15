export interface GasFact {
  id: string;
  chemicalFormula: string;
  name: string;
  description: string;
  lifetimeBadge: string;
  potencyBadge: string;
  sourceType: string;
}

export interface DefinitionStep {
  stepNumber: number;
  title: string;
  narration: string;
}

export const DEFINITION_STEPS: DefinitionStep[] = [
  {
    stepNumber: 1,
    title: 'A planet wrapped in air',
    narration: 'Earth is surrounded by a thin layer of gases — the atmosphere.',
  },
  {
    stepNumber: 2,
    title: 'The atmosphere and energy',
    narration:
      'This thin layer does more than provide the air we breathe. It shapes how energy moves through our climate.',
  },
  {
    stepNumber: 3,
    title: 'Greenhouse gases',
    narration:
      'A few gases play an outsized role: water vapour, carbon dioxide, methane, nitrous oxide, and ozone. They differ in how strongly they interact with infrared radiation and in how long they stay in the atmosphere. They do not all contribute equally.',
  },
  {
    stepNumber: 4,
    title: 'Earth emits infrared radiation',
    narration:
      'Warmed by the Sun, Earth’s surface gives off energy as invisible infrared radiation. Greenhouse gases interact with it.',
  },
  {
    stepNumber: 5,
    title: 'The Definition',
    narration:
      'The greenhouse effect is a natural process in which certain atmospheric gases absorb and re-emit infrared radiation, affecting Earth’s energy balance and keeping the planet warmer than it would otherwise be.',
  },
];

export const GAS_FACTS: GasFact[] = [
  {
    id: 'h2o',
    chemicalFormula: 'H₂O',
    name: 'Water vapour',
    description:
      'The most abundant greenhouse gas. Its amount in the air depends strongly on temperature, so it mostly responds to climate rather than directly driving change.',
    lifetimeBadge: 'Days to weeks (Feedback gas)',
    potencyBadge: 'Variable by humidity',
    sourceType: 'Evaporation / Hydrological cycle',
  },
  {
    id: 'co2',
    chemicalFormula: 'CO₂',
    name: 'Carbon dioxide',
    description:
      'Released by burning fossil fuels and by land-use change. It can remain in the climate system for a very long time.',
    lifetimeBadge: 'Centuries to millennia',
    potencyBadge: 'Climate reference driver',
    sourceType: 'Fossil combustion & land change',
  },
  {
    id: 'ch4',
    chemicalFormula: 'CH₄',
    name: 'Methane',
    description:
      'Absorbs infrared radiation strongly, and is released by livestock, rice paddies, landfills, and fossil-fuel systems. It persists in the atmosphere for a shorter time than CO₂.',
    lifetimeBadge: 'Approx. 12 years',
    potencyBadge: 'High radiative efficiency',
    sourceType: 'Agriculture, waste & fossil leaks',
  },
  {
    id: 'n2o',
    chemicalFormula: 'N₂O',
    name: 'Nitrous oxide',
    description:
      'Released largely from fertilised soils and some industrial processes. It is long-lived.',
    lifetimeBadge: 'Over 100 years',
    potencyBadge: 'Strong warming potential',
    sourceType: 'Fertilised soils & industry',
  },
  {
    id: 'o3',
    chemicalFormula: 'O₃',
    name: 'Ozone',
    description:
      'Acts as a greenhouse gas in the lower atmosphere. This is a separate topic from the ozone hole.',
    lifetimeBadge: 'Hours to weeks (Troposphere)',
    potencyBadge: 'Regional greenhouse actor',
    sourceType: 'Photochemical reactions & smog',
  },
];

export const DEFINITION_PULL_QUOTE =
  'The greenhouse effect is a natural process in which certain atmospheric gases absorb and re-emit infrared radiation, affecting Earth’s energy balance and keeping the planet warmer than it would otherwise be.';

export const DEFINITION_NOTES = [
  'Gas markers are explanatory symbols, not molecular-scale objects.',
  'The greenhouse effect is not the same thing as the ozone hole.',
];
