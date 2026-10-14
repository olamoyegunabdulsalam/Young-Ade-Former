/** Accepts 7 to 15 digits, ignoring spaces, +, dashes and brackets. */
export const phoneRule = (value) => {
  const digits = value.replace(/\D/g, '')
  return digits.length < 7 || digits.length > 15 ? 'Enter a valid phone or WhatsApp number (7 to 15 digits).' : ''
}
