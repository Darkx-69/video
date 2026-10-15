export interface Instrument {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface EvidenceTab {
  id: string;
  tabTitle: string;
  heading: string;
  narration: string;
  measurementMethod: string;
  sourceInformation: string;
  officialLink: string;
  linkText: string;
  chartConcept: string;
  chartAxisX: string;
  chartAxisY: string;
}

export const EVIDENCE_INTRO = {
  heading: 'How do we know?',
  introCopy:
    'Climate scientists combine many independent lines of evidence: direct measurements, satellites, ocean observations, and records preserved in nature.',
  weatherLabel: 'Weather: short-term atmospheric conditions.',
  climateLabel: 'Climate: longer-term patterns and trends.',
  weatherCaption:
    'One cold day does not disprove a warming trend, just as one hot day does not prove one.',
  conceptualBadge: 'CONCEPTUAL ILLUSTRATION — no data values shown',
};

export const INSTRUMENTS: Instrument[] = [
  {
    id: 'station',
    name: 'Atmospheric measurement station',
    role: 'Direct in-situ greenhouse gas sampling',
    description:
      'High-precision optical spectrometers and infrared analyzers sample baseline air high on mountains or remote islands to monitor background gas concentrations.',
  },
  {
    id: 'surface',
    name: 'Surface temperature station',
    role: 'Global meteorological networks',
    description:
      'Standardized weather stations worldwide continuously record ambient air temperatures under strict calibration protocols, spanning decades of continuous records.',
  },
  {
    id: 'satellite',
    name: 'Satellite in orbit',
    role: 'Planetary-scale remote sensing',
    description:
      'Earth-orbiting instruments detect radiant energy at specific electromagnetic frequencies to measure atmospheric temperatures, cloud albedo, and ice sheet elevations.',
  },
  {
    id: 'buoy',
    name: 'Ocean buoy or float',
    role: 'Subsurface marine profiling',
    description:
      'Autonomous robotic profiling floats (such as the Argo program) dive down to 2,000 meters and resurface, continuously profiling marine salinity, heat content, and currents.',
  },
  {
    id: 'ice-core',
    name: 'Ice core and historical climate records',
    role: 'Paleoclimate archives',
    description:
      'Cylinders of glacial ice extracted from Antarctica and Greenland preserve physical bubbles of ancient air, providing a direct record of past atmospheric gas compositions.',
  },
];

export const EVIDENCE_TABS: EvidenceTab[] = [
  {
    id: 'composition',
    tabTitle: 'Atmospheric composition',
    heading: 'Direct Atmospheric Sampling & Spectrometry',
    narration:
      'Instruments sample the air directly, at ground stations, from aircraft, and from satellites, to track the concentrations of gases such as carbon dioxide and methane over time.',
    measurementMethod:
      'Continuous cavity ring-down spectroscopy (CRDS) and non-dispersive infrared (NDIR) gas analyzers at clean-air baseline observatories, cross-validated with satellite infrared sounders.',
    sourceInformation:
      'NOAA Global Monitoring Laboratory (GML) & NASA Atmospheric Carbon Observation Programs.',
    officialLink: 'https://gml.noaa.gov/ccgg/trends/',
    linkText: 'Explore NOAA Carbon Trends',
    chartConcept:
      'Continuous upward curve representing the sustained rise of atmospheric greenhouse gas concentrations, displaying seasonal photosynthetic oscillations.',
    chartAxisX: 'Time (Decades)',
    chartAxisY: 'Qualitative Gas Concentration',
  },
  {
    id: 'temperature-trends',
    tabTitle: 'Temperature trends',
    heading: 'Global Multi-Agency Surface Records',
    narration:
      'Thousands of weather stations, ships, buoys, and satellites contribute to long-term surface temperature records that scientists compare across independent research groups.',
    measurementMethod:
      'Rigorous homogenization of surface weather stations, sea surface temperature buoys, and satellite radiometers across multiple independent international teams (NASA GISTEMP, NOAA HadCRUT, Berkeley Earth).',
    sourceInformation:
      'NASA Goddard Institute for Space Studies (GISS) & NOAA National Centers for Environmental Information.',
    officialLink: 'https://climate.nasa.gov/vital-signs/global-temperature/',
    linkText: 'NASA Global Temperature Vital Signs',
    chartConcept:
      'Long-term multi-decade upward trajectory showing interannual variability from El Niño/La Niña oscillations superimposed on a steady warming trend.',
    chartAxisX: 'Time (Over Century+)',
    chartAxisY: 'Global Temperature Anomaly',
  },
  {
    id: 'ocean-sea-level',
    tabTitle: 'Ocean and sea-level observations',
    heading: 'Ocean Heat Content & Altimetry',
    narration:
      'Ocean floats, ships, and satellites measure how much heat the ocean stores and how sea level changes.',
    measurementMethod:
      'Thousands of autonomous Argo profiling floats measuring subsurface thermal expansion from 0 to 2,000 meters depth, coupled with precision radar altimetry from Jason/Sentinel satellites.',
    sourceInformation:
      'Intergovernmental Panel on Climate Change (IPCC) & Copernicus Marine Environment Monitoring Service.',
    officialLink: 'https://climate.nasa.gov/vital-signs/sea-level/',
    linkText: 'NASA Sea Level Vital Signs',
    chartConcept:
      'Rising trajectories showing both cumulative ocean heat content absorption (thermal reservoir) and corresponding global mean sea-level ascent.',
    chartAxisX: 'Time (Decades)',
    chartAxisY: 'Ocean Heat & Sea Level Metric',
  },
  {
    id: 'historical-climate',
    tabTitle: 'Historical climate evidence',
    heading: 'Natural Archives & Ice Core Bubbles',
    narration:
      'Ice cores trap tiny bubbles of ancient air and preserve layers that reveal past atmospheric conditions. Tree rings, sediments, and corals provide additional clues.',
    measurementMethod:
      'Mass spectrometry analysis of air bubbles extracted from deep polar ice cores (EPICA, Vostok) preserving trapped ancient atmospheres dating back 800,000 years, correlated with isotopic temperature proxies.',
    sourceInformation:
      'Antarctic & Greenland Ice Core Drilling Consortiums, NOAA Paleoclimatology Program.',
    officialLink: 'https://www.climate.gov/news-features/climate-qa/how-do-scientists-know-what-earths-climate-was-long-ago',
    linkText: 'NOAA Paleoclimate Archives',
    chartConcept:
      'Multi-millennial glacial-interglacial cycles showing strong historical co-variation between greenhouse gas levels and reconstructed planetary temperatures.',
    chartAxisX: 'Time (Thousands of Years Before Present)',
    chartAxisY: 'Paleo Atmospheric Markers',
  },
];
