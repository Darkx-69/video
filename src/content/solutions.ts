export interface SolutionScene {
  id: string;
  solutionNumber: number;
  title: string;
  narration: string;
  tagline: string;
  visualElements: string[];
}

export const SOLUTION_SCENES: SolutionScene[] = [
  {
    id: 'renewable-energy',
    solutionNumber: 1,
    title: 'Renewable energy',
    narration:
      'Electricity from sources like solar, wind, and hydropower produces few or no greenhouse gas emissions during operation. When it replaces fossil-fuel generation, emissions fall.',
    tagline: 'Zero-carbon generation replacing fossil fuels',
    visualElements: ['High-efficiency solar photovoltaic arrays', 'Offshore and onshore wind turbines', 'Smart clean electric transmission grid'],
  },
  {
    id: 'energy-efficiency',
    solutionNumber: 2,
    title: 'Energy efficiency',
    narration:
      'Using less energy to get the same service — better insulation, efficient appliances, LED lighting — reduces wasted energy and the emissions that come with it.',
    tagline: 'Lowering demand and eliminating energy waste',
    visualElements: ['Thermal insulation envelope', 'Heat pump systems', 'High-efficiency solid-state LED lighting'],
  },
  {
    id: 'sustainable-transport',
    solutionNumber: 3,
    title: 'Sustainable transport',
    narration:
      'Public transport, walking, cycling, and cleaner vehicles can cut emissions from how we move people and goods.',
    tagline: 'Electrified transit, active mobility, and clean logistics',
    visualElements: ['Electrified light rail & bus networks', 'Protected active cycling & pedestrian greenways', 'Zero-emission freight & fleet electrification'],
  },
  {
    id: 'forest-conservation',
    solutionNumber: 4,
    title: 'Forest conservation and restoration',
    narration:
      'Protecting existing forests and restoring degraded land helps keep carbon stored and supports ecosystems.',
    tagline: 'Safeguarding biological carbon sinks and native biodiversity',
    visualElements: ['Primary old-growth forest protection', 'Native species reforestation', 'Ecological agroforestry corridors'],
  },
  {
    id: 'agriculture-waste',
    solutionNumber: 5,
    title: 'Agriculture and waste',
    narration:
      'Better farming practices, less food waste, and capturing methane from landfills and other sources reduce emissions of potent gases.',
    tagline: 'Regenerative soils, circular food systems, and methane capture',
    visualElements: ['Precision nitrogen application & cover cropping', 'Supply-chain food waste reduction', 'Active landfill methane capture & bioenergy'],
  },
  {
    id: 'government-industry',
    solutionNumber: 6,
    title: 'Government and industry',
    narration:
      'Large-scale emissions cuts need policy, investment, technology, and cooperation between governments, businesses, and communities.',
    tagline: 'Systemic policy frameworks, standards, and capital mobilization',
    visualElements: ['Clean industrial standards and carbon pricing', 'Green public infrastructure investments', 'Cross-sector civic and multilateral agreements'],
  },
  {
    id: 'individual-action',
    solutionNumber: 7,
    title: 'Individual action',
    narration:
      'Individual choices matter and can inspire change — but they work best alongside the broader systemic changes above. They cannot solve climate change alone.',
    tagline: 'Civic engagement, conscious consumption, and cultural shifts',
    visualElements: ['Household energy conservation & electrification', 'Plant-forward dietary shifts', 'Community engagement & policy advocacy'],
  },
];

export interface DualPathItem {
  title: string;
  definition: string;
  examples: string[];
}

export const MITIGATION_VS_ADAPTATION = {
  coreExplanation:
    'Mitigation reduces greenhouse gas emissions or removes them from the air. Adaptation prepares communities and ecosystems for the changes already underway and those to come. They are different, and we need both.',
  mitigation: {
    title: 'Mitigation',
    subtitle: 'Addressing the causes of climate change',
    description: 'Interventions that reduce emissions or enhance greenhouse gas sinks.',
    examples: [
      'Renewable energy deployment (solar, wind, hydro)',
      'Energy efficiency in buildings and industry',
      'Forest conservation and reforestation',
      'Electrification of transport systems',
    ],
  },
  adaptation: {
    title: 'Adaptation',
    subtitle: 'Managing the impacts and risks',
    description: 'Adjustments in ecological, social, or economic systems to moderate potential damages.',
    examples: [
      'Coastal flood defences and sea surge barriers',
      'Heat-resilient urban architecture and reflective roofs',
      'Drought-tolerant crop varieties and drip irrigation',
      'Early warning emergency warning systems',
    ],
  },
};
