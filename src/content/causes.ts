export interface CauseScene {
  id: string;
  sceneNumber: number;
  title: string;
  gasType: 'CO₂' | 'CH₄' | 'N₂O' | 'CO₂ & CH₄' | 'CH₄ & N₂O';
  narration: string;
  visualDescription: string;
  elements: string[];
}

export const CAUSE_SCENES: CauseScene[] = [
  {
    id: 'fossil-fuels',
    sceneNumber: 1,
    title: 'Burning fossil fuels',
    gasType: 'CO₂',
    narration:
      'Burning coal, oil, and natural gas for electricity, transport, and industry releases carbon dioxide.',
    visualDescription:
      'A coal-fired power station, cooling stacks, industrial manufacturing buildings, and urban transit corridors.',
    elements: ['Coal power station', 'Smokestacks', 'Industrial facilities', 'Transportation fleets'],
  },
  {
    id: 'deforestation',
    sceneNumber: 2,
    title: 'Deforestation',
    gasType: 'CO₂',
    narration:
      'Forests store carbon in trees and soil. When they are cleared, some of that stored carbon can be released — and there are fewer trees left to remove carbon dioxide from the air.',
    visualDescription:
      'Canopy forest transition, illustrating loss of biological carbon storage reservoirs without sensational flame imagery.',
    elements: ['Tree canopy biomass', 'Soil carbon pools', 'Shrinking carbon store indicator', 'Atmospheric release'],
  },
  {
    id: 'agriculture',
    sceneNumber: 3,
    title: 'Agriculture and livestock',
    gasType: 'CH₄ & N₂O',
    narration:
      'Livestock and flooded rice fields produce methane. Fertilised soils release nitrous oxide.',
    visualDescription:
      'Ruminant livestock pastures, flooded anaerobic rice paddies, and synthetically fertilised cropland.',
    elements: ['Enteric livestock emissions (CH₄)', 'Flooded rice paddies (CH₄)', 'Nitrogen-fertilised soils (N₂O)'],
  },
  {
    id: 'industry',
    sceneNumber: 4,
    title: 'Industrial processes',
    gasType: 'CO₂',
    narration:
      'Some industrial processes release greenhouse gases directly — cement production, for example, releases carbon dioxide from the chemical process itself, in addition to the energy used.',
    visualDescription:
      'A modern cement calcination plant featuring high-temperature rotary kilns, raw material silos, and conveyor distribution.',
    elements: ['Rotary cement kiln', 'Limestone calcination (CaCO₃ → CaO + CO₂)', 'Material silos & conveyors'],
  },
  {
    id: 'waste',
    sceneNumber: 5,
    title: 'Waste management',
    gasType: 'CH₄',
    narration:
      'When organic waste decomposes in oxygen-poor conditions, it can produce methane.',
    visualDescription:
      'Cross-sectional diagram of an engineered landfill showing subterranean compacted organic waste strata undergoing anaerobic digestion.',
    elements: ['Landfill cross-section', 'Compacted organic strata', 'Anaerobic microbial digestion', 'Biogas venting'],
  },
];

export const CAUSES_CONVERGENCE = {
  eyebrow: 'ATMOSPHERIC ACCUMULATION',
  headline: 'HUMAN ACTIVITIES → INCREASED GREENHOUSE GAS CONCENTRATIONS → ADDITIONAL WARMING',
  note: 'Sources differ in size and in which gases they emit. They do not contribute equally.',
};
