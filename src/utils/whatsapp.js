import { business } from '../config/business'

/**
 * Strip everything except digits and drop a leading international "00" prefix.
 * "+234 801 234 5678" -> "2348012345678"
 */
export function normalizePhoneNumber(input = '') {
  let digits = String(input).replace(/\D/g, '')
  if (digits.startsWith('00')) digits = digits.slice(2)
  return digits
}

/** Build a wa.me URL. The message is URL-encoded; the number is normalised. */
export function buildWhatsAppUrl(message = '', number = business.whatsapp) {
  const phone = normalizePhoneNumber(number)
  const base = `https://wa.me/${phone}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Format a message from a heading and [label, value] pairs. Empty values are skipped. */
export function buildEnquiryMessage(heading, entries = []) {
  const lines = entries
    .filter(([, value]) => String(value ?? '').trim() !== '')
    .map(([label, value]) => `${label}: ${String(value).trim()}`)
  return [`Hello ${business.name},`, '', heading, '', ...lines].join('\n')
}

export function buildProductEnquiryUrl(product) {
  const message = buildEnquiryMessage(
    'I would like to enquire about the price and availability of this product.',
    [
      ['Product', product.name],
      ['Category', product.categoryLabel],
    ],
  )
  return buildWhatsAppUrl(message)
}

export function buildGeneralEnquiryUrl() {
  return buildWhatsAppUrl(`Hello ${business.name}, I would like to make an enquiry.`)
}

export const telUrl = () => `tel:+${normalizePhoneNumber(business.phone)}`
export const mailUrl = () => `mailto:${business.email}`
