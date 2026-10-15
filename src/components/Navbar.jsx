import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Container from './Container'
import Button from './Button'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'repairs', label: 'Repairs & Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `relative px-1 py-2 text-sm font-semibold transition-colors duration-150 hover:text-white ${
      active === id ? 'text-white' : 'text-white/70'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy shadow-[0_2px_12px_rgb(11_34_61/0.25)]">
        <Container className="flex h-16 items-center justify-between gap-4">
          <a href="#home" aria-label="YOUNG ADEFOMA, back to top" className="rounded-sm">
            <Logo />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? 'true' : undefined}>
                {l.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber transition-transform duration-150 ${
                    active === l.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
          </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 text-white hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
        </Container>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-navy lg:hidden">
            <Container className="flex flex-col py-3">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`flex min-h-12 items-center border-b border-white/10 text-base font-semibold ${
                    active === l.id ? 'text-amber' : 'text-white'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <Button href="#contact" onClick={() => setOpen(false)} className="mt-4 w-full">
                Request a Quote
              </Button>
            </Container>
          </nav>
        )}
      </header>
    </>
  )
}
