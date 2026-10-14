import { Compass, Tag, Wrench, MessageCircle } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import ImageSlot from './ImageSlot'
import { SiteArt } from './Illustrations'
import { images } from '../data/images'

const benefits = [
  { icon: Compass, title: 'Equipment suited to your project', text: 'Describe the work and find instruments that fit the requirement.' },
  { icon: Tag, title: 'Pricing and availability', text: 'Ask about the instrument you need and get a direct answer.' },
  { icon: Wrench, title: 'A clear route for repairs', text: 'Send instrument details once and let the team follow up.' },
  { icon: MessageCircle, title: 'Direct communication', text: 'Talk to the business on WhatsApp, by phone or by email.' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="aspect-[4/3] overflow-hidden border border-line bg-[#E9EEF3] p-6 lg:aspect-[4/4.4]">
          <ImageSlot src={images.whyUs} alt="Illustration of a building frame with a surveying instrument set up beside it">
            <SiteArt tone="light" className="h-full w-full" />
          </ImageSlot>
        </div>

        <div>
          <SectionHeading eyebrow="ABOUT" title="Precision Matters. So Does the Right Support." />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-amber">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{title}</h3>
                  <p className="mt-0.5 text-sm text-ink/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            The business&rsquo;s history, team and credentials will be added here once confirmed by the owner.
          </p>
        </div>
      </Container>
    </section>
  )
}
