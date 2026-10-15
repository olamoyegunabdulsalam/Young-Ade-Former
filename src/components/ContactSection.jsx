import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import EnquiryForm from './EnquiryForm'
import { phoneRule } from '../utils/validation'
import { business } from '../config/business'
import { buildEnquiryMessage, buildGeneralEnquiryUrl, telUrl, mailUrl } from '../utils/whatsapp'

const topics = ['Equipment quote or pricing', 'Product availability', 'Repair or servicing', 'Something else']

const fields = [
  { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'phone', label: 'Phone or WhatsApp number', type: 'tel', required: true, autoComplete: 'tel', inputMode: 'tel', validate: phoneRule },
  { name: 'topic', label: 'What is your enquiry about?', type: 'select', required: true, options: topics, wide: true },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
    wide: true,
    placeholder: 'Tell us what you need, for example the instrument, project type or quantity.',
    validate: (v) => (v.length < 10 ? 'Add a little more detail (at least 10 characters).' : ''),
  },
]

const buildMessage = (v) =>
  buildEnquiryMessage('I would like to make an enquiry.', [
    ['Name', v.name],
    ['Phone/WhatsApp', v.phone],
    ['Topic', v.topic],
    ['Message', v.message],
  ])

function Item({ icon: Icon, label, value, href, confirmed, external }) {
  return (
    <li className="flex gap-4 py-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-amber">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-navy">
          {label}
          {!confirmed && (
            <span className="border border-dashed border-amber-dark px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-dark">
              PLACEHOLDER
            </span>
          )}
        </p>
        {href ? (
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="break-words text-ink/80 underline decoration-line decoration-2 underline-offset-4 hover:text-steel hover:decoration-amber"
          >
            {value}
          </a>
        ) : (
          <p className="break-words text-ink/80">{value}</p>
        )}
      </div>
    </li>
  )
}

export default function ContactSection() {
  const { confirmed } = business
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="CONTACT" title="Talk to YOUNG ADEFOMA">
            Ask about equipment, request a quote or discuss a repair. WhatsApp is the quickest route.
          </SectionHeading>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            <Item icon={MessageCircle} label="WhatsApp" value="Chat on WhatsApp" href={buildGeneralEnquiryUrl()} external confirmed={confirmed.whatsapp} />
            <Item icon={Phone} label="Phone" value={business.phone} href={telUrl()} confirmed={confirmed.phone} />
            <Item icon={Mail} label="Email" value={business.email} href={mailUrl()} confirmed={confirmed.email} />
            <Item icon={MapPin} label="Address" value={business.address} confirmed={confirmed.address} />
            <Item icon={Clock} label="Opening hours" value={business.hours} confirmed={confirmed.hours} />
          </ul>
        </div>

        <div className="self-start border border-line border-t-4 border-t-steel bg-surface p-5 sm:p-8">
          <h3 className="text-2xl font-extrabold text-navy">Send an enquiry</h3>
          <p className="mb-6 mt-1 text-sm text-ink/70">Fill in the details and we will prepare a WhatsApp message for you to send.</p>
          <EnquiryForm idPrefix="contact" fields={fields} buildMessage={buildMessage} submitLabel="Send enquiry" />
        </div>
      </Container>
    </section>
  )
}
