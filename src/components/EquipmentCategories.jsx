import { Check, ArrowRight } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import ImageSlot from './ImageSlot'
import { TotalStationArt, RotaryLaserArt, RepairBenchArt } from './Illustrations'
import { images } from '../data/images'
import { useEnquiryModal } from '../context/enquiryModal'

function List({ items, dark = false }) {
  return (
    <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2 text-sm ${dark ? 'text-white/85' : 'text-ink/85'}`}>
          <Check size={16} className="mt-0.5 shrink-0 text-amber-dark" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function EquipmentCategories({ onSelectCategory }) {
  const { openRepair } = useEnquiryModal()
  return (
    <section id="categories" className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow="WHAT WE OFFER" title="Equipment for Every Stage of Your Project">
          Explore surveying and construction instruments, or get in touch about equipment servicing.
        </SectionHeading>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Surveying — wide, image beside text */}
          <article className="grid overflow-hidden border border-line bg-white sm:grid-cols-[1fr_1.1fr] lg:col-span-7">
            <div className="aspect-[4/3] bg-navy p-6 sm:aspect-auto">
              <ImageSlot src={images.surveying} alt="Illustration of a total station on a tripod" >
                <TotalStationArt tone="dark" className="h-full max-h-80 w-full" />
              </ImageSlot>
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-steel">SURVEYING</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">Surveying Instruments</h3>
              <List items={['Total stations', 'Theodolites', 'GNSS/GPS receivers', 'Automatic levels', 'Survey accessories']} />
              <a
                href="#products"
                onClick={() => onSelectCategory('surveying')}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-bold text-navy underline decoration-amber decoration-2 underline-offset-4 hover:text-steel"
              >
                Explore Surveying Equipment <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* Construction — stacked, image on top */}
          <article className="flex flex-col overflow-hidden border border-line bg-white lg:col-span-5">
            <div className="h-48 border-b border-line bg-[#E9EEF3] p-4">
              <ImageSlot src={images.construction} alt="Illustration of a rotary laser level projecting a horizontal beam">
                <RotaryLaserArt tone="light" className="h-full w-full" />
              </ImageSlot>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-steel">CONSTRUCTION</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy">Construction Instruments</h3>
              <List items={['Laser levels', 'Laser distance meters', 'Measuring tools', 'Concrete testing equipment', 'Site measurement tools']} />
              <a
                href="#products"
                onClick={() => onSelectCategory('construction')}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-bold text-navy underline decoration-amber decoration-2 underline-offset-4 hover:text-steel"
              >
                Explore Construction Tools <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* Repairs — full-width navy band */}
          <article className="grid overflow-hidden bg-navy text-white sm:grid-cols-[1fr_auto] lg:col-span-12 lg:grid-cols-[220px_1fr_auto]">
            <div className="hidden h-full border-r border-white/10 bg-steel/30 p-4 lg:block">
              <ImageSlot src={images.repairs} alt="Illustration of an instrument on a repair bench with a magnifier">
                <RepairBenchArt tone="dark" className="h-40 w-full" />
              </ImageSlot>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-amber">SERVICE</p>
              <h3 className="mt-2 text-2xl font-extrabold">Repairs &amp; Servicing</h3>
              <List dark items={['Instrument diagnostics', 'Repairs and maintenance', 'Calibration enquiries', 'Technical assistance']} />
            </div>
            <div className="flex items-end p-6 pt-0 sm:p-8">
              <button
                type="button"
                onClick={openRepair}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border-2 border-amber bg-amber px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:border-amber-dark hover:bg-amber-dark sm:w-auto"
              >
                Enquire About Repairs <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>

        <p className="mt-5 text-xs text-muted">
          Listed items are example catalogue categories for this demo and are not confirmation of current availability.
        </p>
      </Container>
    </section>
  )
}
