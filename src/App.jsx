import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EquipmentCategories from './components/EquipmentCategories'
import FeaturedProducts from './components/FeaturedProducts'
import RepairServices from './components/RepairServices'
import WhyChooseUs from './components/WhyChooseUs'
import BrandsSection from './components/BrandsSection'
import FinalCTA from './components/FinalCTA'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryModal'
import { EnquiryModalContext } from './context/enquiryModal'

export default function App() {
  // Shared so category blocks and footer links can pre-filter the product grid.
  const [filter, setFilter] = useState('all')

  const [modal, setModal] = useState(null)
  const modalApi = useMemo(
    () => ({
      openRepair: () => setModal({ type: 'repair' }),
      openPrice: (product) => setModal({ type: 'price', product }),
    }),
    [],
  )

  return (
    <EnquiryModalContext.Provider value={modalApi}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <EquipmentCategories onSelectCategory={setFilter} />
        <FeaturedProducts filter={filter} setFilter={setFilter} />
        <RepairServices />
        <WhyChooseUs />
        <BrandsSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer onSelectCategory={setFilter} />
      <EnquiryModal modal={modal} onClose={() => setModal(null)} />
    </EnquiryModalContext.Provider>
  )
}
