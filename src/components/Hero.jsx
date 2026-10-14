import { Wrench, Ruler, Headset, ArrowRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import ImageSlot from './ImageSlot'
import { TotalStationArt } from './Illustrations'
import { images } from '../data/images'
import { useEnquiryModal } from '../context/enquiryModal'

const trust = [
  { icon: Ruler, label: 'Equipment Sales' },
  { icon: Wrench, label: 'Repair Enquiries' },
  { icon: Headset, label: 'Technical Support' },
]

export default function Hero() {
  const { openRepair } = useEnquiryModal()
  return (
    <section id="home" className="bg-blueprint relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 bg-steel/25 lg:block" />
      <Container className="relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-amber sm:text-[13px]">
            <span aria-hidden="true" className="h-0.5 w-8 shrink-0 bg-amber" />
            SURVEYING &amp; CONSTRUCTION INSTRUMENTS
          </p>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
            Precision Instruments. <span className="text-amber">Trusted Solutions.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Equipment for accurate measurements, dependable project work, and professional surveying backed by repair
            and servicing support.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#products">
              Explore Our Products <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" onClick={openRepair}>
              Request a Repair
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
                <Icon size={18} className="text-amber" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-xl text-xs text-white/55">
            Product and service categories shown are proposed examples for this demo, pending confirmation by the
            business.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-[#0d2a4a] sm:aspect-[5/4] lg:aspect-[4/4.2]">
            <ImageSlot
              src={images.hero}
              eager
              alt="Total station set up on a tripod, sighting towards a prism pole on a survey site"
              className="p-4 sm:p-8"
            >
              <TotalStationArt tone="dark" scene className="h-full w-full" />
            </ImageSlot>
            {/* corner registration marks */}
            {['left-2 top-2 border-l-2 border-t-2', 'right-2 top-2 border-r-2 border-t-2', 'bottom-2 left-2 border-b-2 border-l-2', 'bottom-2 right-2 border-b-2 border-r-2'].map((p) => (
              <span key={p} aria-hidden="true" className={`absolute h-5 w-5 border-amber ${p}`} />
            ))}
          </div>
          <p className="mt-2 text-right text-[11px] text-white/50">Illustration. Not the business&rsquo;s own inventory.</p>
        </div>
      </Container>
    </section>
  )
}
