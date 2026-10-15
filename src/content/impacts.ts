export interface ImpactScene {
  id: string;
  impactNumber: number;
  title: string;
  narration: string;
  keyConcepts: string[];
  scientificMechanism: string;
}

export const IMPACTS_NOTE =
  'Impacts vary by region and depend on exposure, vulnerability, and adaptation.';

export const IMPACT_SCENES: ImpactScene[] = [
  {
    id: 'temperature',
    impactNumber: 1,
    title: 'Rising temperatures',
    narration:
      'Global warming refers to an increase in Earth’s average surface temperature over time.',
    keyConcepts: [
      'Global mean surface temperature shifts',
      'Atmospheric heat retention',
      'Qualitative planetary energy imbalance',
    ],
    scientificMechanism:
      'As greenhouse gas concentrations increase, outgoing terrestrial infrared radiation is more frequently absorbed and re-emitted, retaining heat within the troposphere and oceans.',
  },
  {
    id: 'ice-and-seas',
    impactNumber: 2,
    title: 'Melting land ice and rising seas',
    narration:
      'Melting glaciers and ice sheets add water to the ocean. Warming seawater also expands. Both raise sea level. Floating sea ice is different: it is already in the water.',
    keyConcepts: [
      'Land ice melt: Glaciers & ice sheets directly transfer water volume to oceans',
      'Thermal expansion: Warmer water occupies more volume',
      'Floating sea ice distinction: Displaces its own mass; does not directly cause major sea-level rise upon melting',
    ],
    scientificMechanism:
      'Two distinct physical mechanisms drive global sea level rise: the transfer of water from terrestrial land ice (glaciers and continental ice sheets) into the ocean, and the volumetric thermal expansion of seawater as ocean heat content rises.',
  },
  {
    id: 'extremes',
    impactNumber: 3,
    title: 'Extreme heat and changing precipitation risks',
    narration:
      'Climate change is changing the likelihood and intensity of many extreme events, in different ways in different places. Not every individual event is caused only by climate change.',
    keyConcepts: [
      'Shifted probability distributions for heatwaves',
      'Altered hydrological cycles and precipitation patterns',
      'Regional intensification of drought and heavy downpours',
    ],
    scientificMechanism:
      'A warmer atmosphere can hold more water vapour (approximately 7% more per 1°C of warming via the Clausius-Clapeyron relation), leading simultaneously to more intense localized rainfall events and faster soil moisture evaporation in dry regions.',
  },
  {
    id: 'ecosystems',
    impactNumber: 4,
    title: 'Ecosystem disruption',
    narration:
      'Warmer oceans can cause coral bleaching. Habitats shift. Species and ecosystems under added stress can lose resilience.',
    keyConcepts: [
      'Marine thermal stress & symbiont expulsion in corals',
      'Poleward and upward altitudinal species habitat migrations',
      'Ecological network mismatch and reduced resilience',
    ],
    scientificMechanism:
      'Elevated sea surface temperatures disrupt the symbiotic relationship between corals and photosynthetic zooxanthellae algae, triggering bleaching. Terrestrial species face shifts in geographic envelopes, disrupting food webs.',
  },
  {
    id: 'agriculture-health',
    impactNumber: 5,
    title: 'Agriculture and human health',
    narration:
      'Heat, changing rainfall, and water stress can affect crops and health. Who is affected most depends on local conditions, exposure, vulnerability, and the ability to adapt.',
    keyConcepts: [
      'Crop thermal thresholds and water availability stress',
      'Urban heat island effects and cardiovascular risks',
      'Differential vulnerability and adaptive capacity across communities',
    ],
    scientificMechanism:
      'Agricultural yields are sensitive to extreme heat during critical pollination phases and shifts in soil moisture. Human physiological heat stress combines ambient temperature and relative humidity, creating localized vulnerability.',
  },
];
