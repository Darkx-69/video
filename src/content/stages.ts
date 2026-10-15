export interface ScienceStage {
  id: number;
  numberStr: string;
  title: string;
  shortTitle: string;
  narration: string;
  microNote?: string;
  radiationLabel?: 'SW' | 'IR' | 'BALANCED';
}

export const SCIENCE_STAGES: ScienceStage[] = [
  {
    id: 1,
    numberStr: 'Stage 1',
    title: 'Incoming solar radiation',
    shortTitle: 'Incoming Solar',
    narration:
      'The Sun is the energy source for Earth’s climate system. Its energy arrives mostly as shortwave radiation — visible light and nearby wavelengths.',
    radiationLabel: 'SW',
  },
  {
    id: 2,
    numberStr: 'Stage 2',
    title: 'Reflection',
    shortTitle: 'Surface & Cloud Reflection',
    narration:
      'Not all sunlight is absorbed. Clouds, the atmosphere, and bright surfaces such as ice reflect some of it straight back to space.',
    radiationLabel: 'SW',
  },
  {
    id: 3,
    numberStr: 'Stage 3',
    title: 'Surface absorption',
    shortTitle: 'Surface Absorption',
    narration:
      'The sunlight that reaches the surface is absorbed by land and oceans. Absorbed energy warms the surface.',
    radiationLabel: 'SW',
  },
  {
    id: 4,
    numberStr: 'Stage 4',
    title: 'Outgoing infrared radiation',
    shortTitle: 'Outgoing Infrared',
    narration:
      'A warm surface emits energy too — as longwave infrared radiation, which we cannot see. This outgoing energy is how Earth sheds heat.',
    radiationLabel: 'IR',
  },
  {
    id: 5,
    numberStr: 'Stage 5',
    title: 'Absorption and re-emission',
    shortTitle: 'Absorption & Re-emission',
    narration:
      'Greenhouse gases absorb some of this infrared radiation and re-emit it in all directions — some upward, some back toward the surface. This slows the rate at which Earth loses energy to space. They don’t form a solid roof, and they don’t create energy.',
    microNote:
      'Different gases absorb different infrared wavelengths. Many rays still escape directly to space.',
    radiationLabel: 'IR',
  },
  {
    id: 6,
    numberStr: 'Stage 6',
    title: 'Earth’s energy balance',
    shortTitle: 'Energy Balance',
    narration:
      'The climate system warms when it gains more energy than it loses, and cools when it loses more than it gains. Over time, it moves toward balance — though oceans and other processes affect how quickly.',
    radiationLabel: 'BALANCED',
  },
];

export interface SimulationSetting {
  level: number;
  key: 'lower' | 'baseline' | 'higher';
  label: string;
  description: string;
  markerCount: number;
  interactionPercentage: number;
  meterDescription: string;
}

export const SIMULATION_SETTINGS: SimulationSetting[] = [
  {
    level: 0,
    key: 'lower',
    label: 'Lower concentration',
    description:
      'Fewer greenhouse gas molecules present in the illustrative atmosphere. More infrared radiation escapes directly to space without interacting.',
    markerCount: 5,
    interactionPercentage: 25,
    meterDescription: 'Lower rate of infrared absorption & re-emission',
  },
  {
    level: 1,
    key: 'baseline',
    label: 'Present-day illustrative baseline',
    description:
      'Balanced illustrative representation of present-day greenhouse gas concentrations absorbing a moderate fraction of emitted infrared radiation.',
    markerCount: 12,
    interactionPercentage: 50,
    meterDescription: 'Moderate infrared absorbed and re-emitted in the illustration',
  },
  {
    level: 2,
    key: 'higher',
    label: 'Higher concentration',
    description:
      'Elevated density of greenhouse gas molecules. A larger proportion of outgoing infrared radiation is absorbed and re-emitted in all directions.',
    markerCount: 22,
    interactionPercentage: 75,
    meterDescription: 'More infrared absorbed and re-emitted in the illustration',
  },
];

export const SIMULATION_CONTENT = {
  heading: 'Explore it yourself',
  supportingCopy:
    'A qualitative model of how greenhouse gas concentration affects infrared radiation in the illustration.',
  meterLabel: 'More infrared absorbed and re-emitted in the illustration',
  disclaimer:
    'This is a qualitative learning model. It shows the direction of the relationship, not real-world warming. It is not a climate prediction and does not calculate temperature.',
};
