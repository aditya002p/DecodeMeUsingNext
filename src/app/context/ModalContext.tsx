"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import EnquiryModal from '../../components/Enquire/EnquiryModal';

// Define the context type
type ModalContextType = {
  openEnquiryModal: () => void;
  closeEnquiryModal: () => void;
};

// Create context with default values
const ModalContext = createContext<ModalContextType>({
  openEnquiryModal: () => {},
  closeEnquiryModal: () => {},
});

// Custom hook to use the modal context
export const useModal = () => useContext(ModalContext);

// Provider component
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiryModal = () => setIsEnquiryModalOpen(true);
  const closeEnquiryModal = () => setIsEnquiryModalOpen(false);

  return (
    <ModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal }}>
      {children}
      <EnquiryModal isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
    </ModalContext.Provider>
  );
};