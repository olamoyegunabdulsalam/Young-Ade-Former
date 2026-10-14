import { MessageCircle } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { categories, products } from '../data/products'
import { productArt } from './productArt'
import { useEnquiryModal } from '../context/enquiryModal'

function ProductCard({ product }) {
  const { openPrice } = useEnquiryModal()
  const Art = productArt[product.art]
  return (
    <article className="group flex flex-col border border-line bg-white transition-shadow duration-200 hover:shadow-[0_8px_24px_rgb(11_34_61/0.12)]">
      <div className="relative aspect-[5/4] border-b border-line bg-[#E9EEF3] p-5">
        <span className="absolute left-3 top-3 bg-navy px-2 py-1 text-[10px] font-bold tracking-wider text-white">
          DEMO PRODUCT
        </span>
        <div role="img" aria-label={`Illustration of a ${product.name.toLowerCase()}`} className="h-full w-full">
          <Art tone="light" className="h-full w-full" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold text-steel">{product.categoryLabel}</p>
        <h3 className="mt-1 text-lg font-extrabold text-navy">{product.name}</h3>
        <p className="mt-2 text-sm text-ink/75">{product.description}</p>
        <button
          type="button"
          onClick={() => openPrice(product)}
          aria-label={`Request price for ${product.name}`}
          className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border-2 border-navy bg-navy px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-steel hover:bg-steel"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Request Price
        </button>
      </div>
    </article>
  )
}

export default function FeaturedProducts({ filter, setFilter }) {
  const visible = products.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="products" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title="Featured Equipment">
            Find the instruments suited to your work and enquire about availability and pricing.
          </SectionHeading>
          <div role="group" aria-label="Filter equipment by category" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
                className={`min-h-11 rounded-sm border-2 px-4 text-sm font-bold transition-colors ${
                  filter === c.id
                    ? 'border-navy bg-navy text-white'
                    : 'border-line bg-white text-navy hover:border-navy'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'product' : 'products'}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">
          Sample products for demonstration. Prices, stock, specifications and brands are not shown and must be confirmed
          with the business.
        </p>
      </Container>
    </section>
  )
}
