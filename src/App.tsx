/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PetalCanvas } from './components/PetalCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesBento } from './components/FeaturesBento';
import { AsymmetricGallery } from './components/AsymmetricGallery';
import { TrimConfigurator } from './components/TrimConfigurator';
import { ReservationModal } from './components/ReservationModal';
import { Footer } from './components/Footer';
import { TrimOption } from './types';
import { TRIM_OPTIONS } from './data/vehicleData';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedTrimForModal, setSelectedTrimForModal] = useState<TrimOption>(TRIM_OPTIONS[0]);

  const handleOpenReserve = (trim?: TrimOption) => {
    if (trim) {
      setSelectedTrimForModal(trim);
    }
    setIsReserveModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsReserveModalOpen(false);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F7F3EE] text-[#2A2521] selection:bg-[#A8804A] selection:text-[#F7F3EE] relative overflow-x-hidden">
        {/* Subtle industrial atmosphere background */}
        <PetalCanvas intensity={24} />

        {/* Technical Navigation with Language Switcher */}
        <Navbar onOpenReserve={() => handleOpenReserve()} />

        <main>
          {/* 1. Hero Section with Real Stamping Plant Background & Humanized Technical Copy */}
          <HeroSection onOpenReserve={() => handleOpenReserve()} />

          {/* 2. Bento-Box Features Grid: Robotics, CNC Machining, Jig & Fixtures, Stamping Press */}
          <FeaturesBento />

          {/* 3. Asymmetric Gallery with Real Production Facilities */}
          <AsymmetricGallery />

          {/* 4. Specification & Production Divisions Matrix */}
          <TrimConfigurator onSelectTrimForReserve={(trim) => handleOpenReserve(trim)} />
        </main>

        {/* 5. Industrial Heritage & Contact Footer */}
        <Footer onOpenReserve={() => handleOpenReserve()} />

        {/* 6. RFQ / Technical Consultation Modal */}
        <ReservationModal
          isOpen={isReserveModalOpen}
          onClose={handleCloseReserve}
          initialTrim={selectedTrimForModal}
        />
      </div>
    </LanguageProvider>
  );
}
