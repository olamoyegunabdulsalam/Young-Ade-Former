/**
 * Central business configuration.
 *
 * The contact details below are SAMPLE demo values. Replace them with
 * the real, confirmed details from the owner before the site goes live.
 *
 * WhatsApp number format:
 *   Full international number, digits only — no "+", spaces, dashes or brackets.
 *   Example (Nigeria): 2348012345678  (country code 234 + number without leading 0)
 *   The helpers in src/utils/whatsapp.js also strip punctuation for you,
 *   but keep the country code or WhatsApp will not open the right chat.
 */
export const business = {
  name: 'YOUNG  ADEFOMA',
  logoText: 'YOUNG ADEFOMA',
  description:
    'Surveying and construction instruments, with a clear route for repair and servicing enquiries.',

  // SAMPLE DETAILS below: replace with the real ones when known (WhatsApp: digits only, with country code)
  whatsapp: '2348012345678',
  phone: '+234 801 234 5678',
  email: 'info@youngadefoma.com',
  address: '12 Allen Avenue, Ikeja, Lagos, Nigeria',
  hours: 'Mon–Fri 8:00am–5:00pm, Sat 9:00am–2:00pm',

  // Leave a link empty ('') to hide it everywhere.
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  /**
   * Flip each flag to true once the real detail has been entered above.
   * While false, the site labels the detail as a placeholder.
   */
  confirmed: {
    whatsapp: true,
    phone: true,
    email: true,
    address: true,
    hours: true,
  },
}
