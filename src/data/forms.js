import { buildEnquiryMessage } from '../utils/whatsapp'
import { phoneRule } from '../utils/validation'

const instrumentTypes = [
  'Total station',
  'Theodolite',
  'GNSS/GPS receiver',
  'Automatic level',
  'Laser level',
  'Laser distance meter',
  'Other instrument',
]

export const repairFields = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name', wide: true },
  { name: 'phone', label: 'Phone or WhatsApp number', type: 'tel', required: true, autoComplete: 'tel', inputMode: 'tel', placeholder: '+234 …', validate: phoneRule },
  { name: 'type', label: 'Instrument type', type: 'select', required: true, options: instrumentTypes },
  { name: 'model', label: 'Instrument model', type: 'text', required: false, placeholder: 'Brand and model, if known', wide: true },
  {
    name: 'issue',
    label: 'Description of the issue',
    type: 'textarea',
    required: true,
    wide: true,
    placeholder: 'What is the instrument doing, or not doing?',
    validate: (v) => (v.length < 10 ? 'Add a little more detail (at least 10 characters).' : ''),
  },
]

export const buildRepairMessage = (v) =>
  buildEnquiryMessage('I would like to request repair assistance.', [
    ['Name', v.name],
    ['Phone/WhatsApp', v.phone],
    ['Instrument type', v.type],
    ['Model', v.model],
    ['Issue', v.issue],
  ])

export const priceFields = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'phone', label: 'Phone or WhatsApp number', type: 'tel', required: true, autoComplete: 'tel', inputMode: 'tel', placeholder: '+234 …', validate: phoneRule },
  { name: 'note', label: 'Anything we should know?', type: 'textarea', required: false, wide: true, placeholder: 'Quantity, project type, or questions about availability.' },
]

export const buildPriceMessage = (product) => (v) =>
  buildEnquiryMessage('I would like to enquire about the price and availability of this product.', [
    ['Product', product.name],
    ['Category', product.categoryLabel],
    ['Name', v.name],
    ['Phone/WhatsApp', v.phone],
    ['Note', v.note],
  ])
