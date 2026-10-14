import { Search, Wrench, Gauge, Headset, ArrowRight } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import ImageSlot from './ImageSlot'
import EnquiryForm from './EnquiryForm'
import { useEnquiryModal } from '../context/enquiryModal'
import { repairFields, buildRepairMessage } from '../data/forms'
import { RepairBenchArt } from './Illustrations'
import { images } from '../data/images'

const services = [
  { icon: Search, label: 'Instrument diagnostics', text: 'Describe the fault so the team can assess what is needed.' },
  { icon: Wrench, label: 'Repairs and maintenance', text: 'Enquire about repair work on surveying and construction instruments.' },
  { icon: Gauge, label: 'Calibration enquiries', text: 'Ask whether calibration checks can be arranged for your equipment.' },
  { icon: Headset, label: 'Technical assistance', text: 'Get in touch when you are unsure what an instrument needs.' },
]

export default function RepairServices() {
  const { openRepair } = useEnquiryModal()
  return (
    <section id="repairs" className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow="REPAIRS & SERVICING" title="Keep Your Instruments Ready for the Job.">
            Need assistance with a surveying or construction instrument? Tell us about the equipment and the issue so the
            team can follow up.
          </SectionHeading>

          <div className="mt-8 aspect-[16/9] overflow-hidden border border-line bg-navy p-4">
            <ImageSlot src={images.repairBench} alt="Illustration of a survey instrument being inspected on a workbench">
              <RepairBenchArt tone="dark" className="h-full w-full" />
            </ImageSlot>
          </div>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services.map(({ icon: Icon, label, text }) => (
              <li key={label} className="flex gap-4 py-4">
                <Icon size={22} className="mt-0.5 shrink-0 text-steel" aria-hidden="true" />
                <div>
                  <p className="font-bold text-navy">{label}</p>
                  <p className="text-sm text-ink/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">Proposed service categories for the demo, pending confirmation by the business.</p>

          <button
            type="button"
            onClick={openRepair}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm border-2 border-navy bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-steel hover:bg-steel lg:hidden"
          >
            Request Repair Assistance <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div id="repair-form" className="scroll-mt-24 self-start border border-line border-t-4 border-t-amber bg-white p-5 shadow-[0_8px_24px_rgb(11_34_61/0.08)] sm:p-8">
          <h3 className="text-2xl font-extrabold text-navy">Request Repair Assistance</h3>
          <p className="mb-6 mt-1 text-sm text-ink/70">Share the instrument details and we will prepare a WhatsApp message for you to send.</p>
          <EnquiryForm idPrefix="repair" fields={repairFields} buildMessage={buildRepairMessage} submitLabel="Send repair enquiry" />
        </div>
      </Container>
    </section>
  )
}
