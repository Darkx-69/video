export interface ComparisonContent {
  sectionTitle: string;
  naturalTitle: string;
  naturalNarration: string;
  naturalTraits: string[];
  enhancedTitle: string;
  enhancedNarration: string;
  enhancedTraits: string[];
  keyTakeaway: string;
  supportingCopy: string;
}

export const COMPARISON_CONTENT: ComparisonContent = {
  sectionTitle: 'Natural vs. Enhanced Greenhouse Effect',
  naturalTitle: 'Natural greenhouse effect',
  naturalNarration:
    'Naturally occurring greenhouse gases help keep Earth’s surface habitable.',
  naturalTraits: [
    'Maintains Earth’s average surface temperature at a life-supporting level',
    'Naturally balanced incoming solar radiation and outgoing infrared radiation',
    'Sustained over millennia through biological and geophysical carbon cycles',
  ],
  enhancedTitle: 'Enhanced greenhouse effect',
  enhancedNarration:
    'Higher concentrations from human activities mean more infrared is absorbed and re-emitted, changing Earth’s energy balance and contributing to additional warming.',
  enhancedTraits: [
    'Excess greenhouse gases added through fossil combustion, agriculture, and land clearing',
    'More outgoing infrared is redirected back down toward the surface',
    'Shifts Earth’s energy balance toward net heat accumulation in oceans, atmosphere, and cryosphere',
  ],
  keyTakeaway:
    'THE NATURAL GREENHOUSE EFFECT IS ESSENTIAL. ITS HUMAN-DRIVEN INTENSIFICATION IS THE PROBLEM.',
  supportingCopy:
    'Without the natural greenhouse effect, Earth’s surface would be far colder and much less hospitable. The concern is that human activities are adding to the amount of greenhouse gases in the atmosphere, strengthening the effect and shifting Earth’s energy balance.',
};
