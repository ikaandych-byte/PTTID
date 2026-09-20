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
    <div className="min-h-screen bg-[#F7F3EE] text-[#2A2521] selection:bg-[#A8804A] selection:text-[#F7F3EE] relative overflow-x-hidden">
      {/* Subtle falling camellia petals background */}
      <PetalCanvas intensity={24} />

      {/* Luxury Navigation */}
      <Navbar onOpenReserve={() => handleOpenReserve()} />

      <main>
        {/* 1. Hero Section with Photorealistic Sedan & Dual CTAs */}
        <HeroSection onOpenReserve={() => handleOpenReserve()} />

        {/* 2. Bento-Box Features Grid: Aerodynamics, V8 Powertrain & Bespoke Interior */}
        <FeaturesBento />

        {/* 3. Asymmetric Gallery with Close-up details */}
        <AsymmetricGallery />

        {/* 4. Specification & Trims Matrix */}
        <TrimConfigurator onSelectTrimForReserve={(trim) => handleOpenReserve(trim)} />
      </main>

      {/* 5. Automotive Heritage Footer */}
      <Footer onOpenReserve={() => handleOpenReserve()} />

      {/* 6. Exclusive Allocation Reservation Modal */}
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={handleCloseReserve}
        initialTrim={selectedTrimForModal}
      />
    </div>
  );
}
