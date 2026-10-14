import { MessageCircle } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import Button from './Button'
import { business } from '../config/business'
import { buildGeneralEnquiryUrl, telUrl, mailUrl } from '../utils/whatsapp'

const socialLabels = { facebook: 'Facebook', instagram: 'Instagram', linkedin: 'LinkedIn' }

function Column({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-bold text-white">{title}</h2>
      <ul className="mt-4 space-y-1 text-sm text-white/70">{children}</ul>
    </div>
  )
}

const linkClass = 'inline-flex min-h-9 items-center hover:text-amber'

export default function Footer({ onSelectCategory }) {
  const socials = Object.entries(business.social).filter(([, url]) => url)
  return (
    <footer className="bg-[#07172b] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-white/70">{business.description}</p>
          <Button href={buildGeneralEnquiryUrl()} external className="mt-6">
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </Button>
        </div>

        <Column title="Navigate">
          {[['#home', 'Home'], ['#about', 'About'], ['#products', 'Products'], ['#repairs', 'Repairs & Services'], ['#contact', 'Contact']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className={linkClass}>{label}</a>
            </li>
          ))}
        </Column>

        <Column title="Equipment">
          <li>
            <a href="#products" onClick={() => onSelectCategory('surveying')} className={linkClass}>Surveying instruments</a>
          </li>
          <li>
            <a href="#products" onClick={() => onSelectCategory('construction')} className={linkClass}>Construction instruments</a>
          </li>
          <li>
            <a href="#repairs" className={linkClass}>Repairs &amp; servicing</a>
          </li>
        </Column>

        <Column title="Contact">
          <li><a href={telUrl()} className={linkClass}>{business.phone}</a></li>
          <li><a href={mailUrl()} className={`${linkClass} break-all`}>{business.email}</a></li>
          <li className="py-1">{business.address}</li>
          <li className="py-1">{business.hours}</li>
          {socials.map(([key, url]) => (
            <li key={key}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>{socialLabels[key] ?? key}</a>
            </li>
          ))}
        </Column>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-5 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  )
}
