import { createContext, useContext } from 'react'

export const EnquiryModalContext = createContext({ openRepair: () => {}, openPrice: () => {} })
export const useEnquiryModal = () => useContext(EnquiryModalContext)
