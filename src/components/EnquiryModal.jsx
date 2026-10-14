import { useEffect, useRef } from 'react'
import { X, MessageCircle, Phone } from 'lucide-react'
import EnquiryForm from './EnquiryForm'
import { repairFields, buildRepairMessage, priceFields, buildPriceMessage } from '../data/forms'
import { business } from '../config/business'
import { buildGeneralEnquiryUrl, telUrl } from '../utils/whatsapp'

/** Native <dialog>: focus is trapped, Escape closes, and focus returns to the trigger. */
export default function EnquiryModal({ modal, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (modal && !dialog.open) dialog.showModal()
    if (!modal && dialog.open) dialog.close()
  }, [modal])

  const isRepair = modal?.type === 'repair'
  const title = isRepair ? 'Request Repair Assistance' : 'Request a Price'
  const intro = isRepair
    ? 'Share the instrument details and we will prepare a WhatsApp message for you to send.'
    : `Enquire about the ${modal?.product?.name ?? 'product'}. We will prepare a WhatsApp message for you to send.`

  return (
    <dialog
      ref={ref}
      aria-labelledby="enquiry-modal-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-xl overflow-y-auto border border-line border-t-4 border-t-amber bg-white p-0 text-ink shadow-[0_24px_64px_rgb(11_34_61/0.35)] backdrop:bg-navy/70"
    >
      {modal && (
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="enquiry-modal-title" className="text-2xl font-extrabold text-navy">{title}</h2>
              <p className="mt-1 text-sm text-ink/70">{intro}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="-mr-2 -mt-2 inline-flex h-11 w-11 shrink-0 items-center justify-center text-navy hover:bg-surface"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <EnquiryForm
              key={`${modal.type}-${modal.product?.id ?? ''}`}
              idPrefix="modal"
              fields={isRepair ? repairFields : priceFields}
              buildMessage={isRepair ? buildRepairMessage : buildPriceMessage(modal.product)}
              submitLabel={isRepair ? 'Send repair enquiry' : 'Send price request'}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4 text-sm">
            <span className="text-muted">Prefer to reach us directly?</span>
            <a href={buildGeneralEnquiryUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1.5 font-bold text-navy hover:text-steel">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp
            </a>
            <a href={telUrl()} className="inline-flex min-h-9 items-center gap-1.5 font-bold text-navy hover:text-steel">
              <Phone size={16} aria-hidden="true" /> {business.phone}
            </a>
          </div>
        </div>
      )}
    </dialog>
  )
}
