import { MessageCircle } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import { buildGeneralEnquiryUrl } from '../utils/whatsapp'

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-blueprint border-t-4 border-amber bg-navy py-16 text-white sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="text-3xl font-extrabold sm:text-4xl">
            Looking for the Right Equipment?
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Tell us what your project requires, ask about availability, or discuss an instrument that needs attention.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#contact">Request a Quote</Button>
          <Button href={buildGeneralEnquiryUrl()} external variant="secondary">
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  )
}
