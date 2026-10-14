/**
 * Demo catalogue. These are example product types, not confirmed stock.
 * No prices, specifications or brands are listed on purpose.
 */
export const categories = [
  { id: 'all', label: 'All equipment' },
  { id: 'surveying', label: 'Surveying' },
  { id: 'construction', label: 'Construction' },
]

export const products = [
  {
    id: 'total-station',
    name: 'Total Station',
    category: 'surveying',
    categoryLabel: 'Surveying Instruments',
    art: 'totalStation',
    description:
      'Measures angles and distances electronically for topographic surveys, setting-out and as-built checks.',
  },
  {
    id: 'automatic-level',
    name: 'Automatic Level',
    category: 'surveying',
    categoryLabel: 'Surveying Instruments',
    art: 'level',
    description:
      'Self-levelling optical instrument for transferring heights and running levels across a site.',
  },
  {
    id: 'rotary-laser',
    name: 'Rotary Laser Level',
    category: 'construction',
    categoryLabel: 'Construction Instruments',
    art: 'rotaryLaser',
    description:
      'Projects a level or sloped reference plane for grading, slab work and foundation set-out.',
  },
  {
    id: 'laser-distance-meter',
    name: 'Laser Distance Meter',
    category: 'construction',
    categoryLabel: 'Construction Instruments',
    art: 'distanceMeter',
    description:
      'Handheld device for quick distance, area and volume readings during site measurement.',
  },
]
