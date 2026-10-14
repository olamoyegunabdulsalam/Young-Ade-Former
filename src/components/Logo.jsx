import { business } from '../config/business'

export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true" focusable="false">
      <rect width="36" height="36" rx="4" fill="#174A78" />
      <path d="M8 29 18 7l10 22" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="miter" />
      <line x1="11.5" y1="21.5" x2="24.5" y2="21.5" stroke="#F5A623" strokeWidth="3.2" />
      <circle cx="18" cy="7" r="2.2" fill="#F5A623" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.14em] text-white">{business.logoText}</span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.18em] text-white/60">
          SURVEY &amp; CONSTRUCTION
        </span>
      </span>
    </span>
  )
}
