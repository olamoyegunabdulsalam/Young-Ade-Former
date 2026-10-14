import Container from './Container'
import Button from './Button'
import { brands } from '../data/brands'
import { buildWhatsAppUrl } from '../utils/whatsapp'

/** Remove <BrandsSection /> from App.jsx if the business does not need this section. */
export default function BrandsSection() {
  const message = 'Hello, which instrument brands do you stock or service?'
  return (
    <section aria-labelledby="brands-heading" className="border-y border-line bg-surface py-12 sm:py-14">
      <Container className="grid items-center gap-6 lg:grid-cols-[1fr_1.4fr]">
        <h2 id="brands-heading" className="text-2xl font-extrabold text-navy">
          Brands and compatible equipment
        </h2>
        {brands.length > 0 ? (
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {brands.map((b) => (
              <li key={b.name}>
                {b.logo ? <img src={b.logo} alt={b.name} loading="lazy" className="h-8 w-auto" /> : <span className="text-lg font-extrabold text-navy/70">{b.name}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-ink/75">Ask us about available brands and compatible equipment.</p>
            <Button href={buildWhatsAppUrl(message)} external variant="outline">
              Ask About Brands
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}
