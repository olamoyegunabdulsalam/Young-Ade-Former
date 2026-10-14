import { useState } from 'react'
import { CircleAlert, MessageCircle, Info } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/whatsapp'

/**
 * Reusable enquiry form. Nothing is stored or sent automatically:
 * on submit the fields are validated, then WhatsApp opens with a pre-filled
 * message that the visitor must press send on themselves.
 *
 * field: { name, label, type: 'text'|'tel'|'select'|'textarea', required?, options?, hint?, wide?, validate? }
 */
export default function EnquiryForm({ idPrefix, fields, buildMessage, submitLabel }) {
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, ''])))
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  const fieldId = (name) => `${idPrefix}-${name}`

  const validate = () => {
    const next = {}
    fields.forEach((f) => {
      const value = values[f.name].trim()
      if (f.required && !value) {
        next[f.name] = f.type === 'select' ? `Choose ${f.label.toLowerCase()}.` : `Enter ${f.label.toLowerCase()}.`
      } else if (value && f.validate) {
        const message = f.validate(value)
        if (message) next[f.name] = message
      }
    })
    return next
  }

  const handleChange = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
    setOpened(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    const firstInvalid = fields.find((f) => next[f.name])
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid.name))?.focus()
      return
    }
    const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]))
    window.open(buildWhatsAppUrl(buildMessage(trimmed)), '_blank', 'noopener,noreferrer')
    setOpened(true)
  }

  const inputClass = (name) =>
    `block min-h-11 w-full rounded-sm border-2 bg-white px-3 py-2 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-steel ${
      errors[name] ? 'border-red-600' : 'border-line hover:border-muted/60'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => {
        const id = fieldId(f.name)
        const describedBy = [errors[f.name] ? `${id}-error` : null, f.hint ? `${id}-hint` : null].filter(Boolean).join(' ') || undefined
        const common = {
          id,
          name: f.name,
          value: values[f.name],
          onChange: (e) => handleChange(f.name, e.target.value),
          'aria-invalid': errors[f.name] ? 'true' : undefined,
          'aria-describedby': describedBy,
          'aria-required': f.required ? 'true' : undefined,
          className: inputClass(f.name),
        }
        return (
          <div key={f.name} className={f.wide ? 'sm:col-span-2' : ''}>
            <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy">
              {f.label}
              {!f.required && <span className="ml-1 font-medium text-muted">(optional)</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea rows={4} placeholder={f.placeholder} {...common} />
            ) : f.type === 'select' ? (
              <select {...common}>
                <option value="">Select…</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} inputMode={f.inputMode} {...common} />
            )}
            {f.hint && !errors[f.name] && (
              <p id={`${id}-hint`} className="mt-1 text-xs text-muted">
                {f.hint}
              </p>
            )}
            {errors[f.name] && (
              <p id={`${id}-error`} className="mt-1 flex items-center gap-1.5 text-sm font-medium text-red-700">
                <CircleAlert size={15} aria-hidden="true" />
                {errors[f.name]}
              </p>
            )}
          </div>
        )
      })}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border-2 border-amber bg-amber px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-amber-dark hover:bg-amber-dark sm:w-auto"
        >
          <MessageCircle size={18} aria-hidden="true" />
          {submitLabel}
        </button>
        <p className="mt-3 flex items-start gap-2 text-xs text-muted">
          <Info size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
          This opens WhatsApp with your message ready to send. Nothing is stored or sent until you press send there.
        </p>
        <p role="status" aria-live="polite" className="mt-2 text-sm font-semibold text-steel">
          {opened ? 'WhatsApp opened in a new tab. Press send there to deliver your message.' : ''}
        </p>
      </div>
    </form>
  )
}
