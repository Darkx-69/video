export interface ReferenceLink {
  name: string;
  url: string;
  organization: string;
  description: string;
  badge: string;
}

export const SCIENTIFIC_REFERENCES: ReferenceLink[] = [
  {
    name: 'NASA Climate Change and Global Warming',
    url: 'https://climate.nasa.gov/',
    organization: 'National Aeronautics and Space Administration (NASA)',
    description:
      'Vital signs of the planet, global temperature datasets, satellite remote sensing observations, and Earth science educational resources.',
    badge: 'NASA Climate',
  },
  {
    name: 'National Oceanic and Atmospheric Administration',
    url: 'https://www.noaa.gov/',
    organization: 'U.S. Department of Commerce (NOAA)',
    description:
      'Climate monitoring, ocean heat measurements, atmospheric composition baselines, and marine weather tracking.',
    badge: 'NOAA',
  },
  {
    name: 'NOAA Climate.gov',
    url: 'https://www.climate.gov/',
    organization: 'NOAA Climate Program Office',
    description:
      'Science-grounded climate information, educational primers, interactive dashboards, and historical paleoclimate analyses.',
    badge: 'NOAA Climate',
  },
  {
    name: 'Intergovernmental Panel on Climate Change',
    url: 'https://www.ipcc.ch/',
    organization: 'United Nations Environment Programme (UNEP) & WMO (IPCC)',
    description:
      'Comprehensive assessment reports synthesising thousands of peer-reviewed scientific publications on the physical science basis, impacts, and mitigation options.',
    badge: 'IPCC',
  },
];

export const REFERENCES_CONTENT = {
  heading: 'Scientific references and further reading.',
  note: 'Illustrations on this site are stylised and educational. Interactive models are qualitative and are not predictions. Consult the sources above for data and current science.',
  siteTitle: 'THE GREENHOUSE EFFECT',
  siteSubtitle: 'Earth’s Natural Shield. Humanity’s Climate Challenge.',
  backToTopText: 'Back to Top',
  exploreAgainText: 'Explore Again',
  reducedMotionLabel: 'Toggle Reduced Motion',
};
