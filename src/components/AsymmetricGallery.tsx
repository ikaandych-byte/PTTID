import { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/vehicleData';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export function AsymmetricGallery() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: language === 'id' ? 'Semua Fasilitas' : 'All Facilities' },
    { id: 'exterior', label: language === 'id' ? 'Robotika & SPM' : 'Robotics & SPM' },
    { id: 'engineering', label: language === 'id' ? 'Pusat Mesin CNC' : 'CNC Centers' },
    { id: 'interior', label: language === 'id' ? 'Jig & Fixture' : 'Jigs & Fixtures' },
    { id: 'craft', label: language === 'id' ? 'Dies & Tooling' : 'Press & Tooling' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNextModal = () => {
    if (!activeModalItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setActiveModalItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevModal = () => {
    if (!activeModalItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveModalItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#F7F3EE] border-t border-[#2A2521]/10 relative text-[#2A2521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.3em] uppercase text-[#b91c1c] font-semibold">
              <span>[ 02 · {t('gallery.badge')} ]</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-[#2A2521] uppercase">
              {language === 'id' ? 'Galeri Fasilitas &' : 'Industrial'} <span className="text-metallic font-light">{language === 'id' ? 'Kemampuan Manufaktur.' : 'Capabilities.'}</span>
            </h2>
            <p className="mt-2 text-sm text-[#2A2521]/70 font-mono max-w-xl">
              {t('gallery.desc')}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2A2521] text-[#F7F3EE] border-[#A8804A] font-semibold shadow-sm'
                    : 'bg-[#EAE3DB] text-[#2A2521]/70 border-[#2A2521]/15 hover:border-[#2A2521]/30 hover:text-[#2A2521]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span classes
            let colSpan = 'lg:col-span-4';
            let heightClass = 'h-[360px]';

            if (index === 0) {
              colSpan = 'lg:col-span-8';
              heightClass = 'h-[440px]';
            } else if (index === 1) {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-[440px]';
            } else if (index === 2) {
              colSpan = 'lg:col-span-6';
              heightClass = 'h-[380px]';
            } else if (index === 3) {
              colSpan = 'lg:col-span-6';
              heightClass = 'h-[380px]';
            } else if (index === 4) {
              colSpan = 'lg:col-span-5';
              heightClass = 'h-[400px]';
            } else if (index === 5) {
              colSpan = 'lg:col-span-7';
              heightClass = 'h-[400px]';
            }

            return (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                onClick={() => setActiveModalItem(item)}
                className={`${colSpan} ${heightClass} group relative overflow-hidden bg-[#2A2521] border border-[#2A2521]/20 sharp-card cursor-pointer transition-all duration-500 hover:border-[#A8804A] shadow-[0_4px_20px_rgba(42,37,33,0.08)]`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />

                {/* Dark Vignette Overlay for Crisp Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2521]/95 via-[#2A2521]/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Top Corner Metadata Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-1 bg-[#F7F3EE]/95 backdrop-blur-md border border-[#2A2521]/15 text-[10px] font-mono tracking-widest text-[#2A2521] uppercase font-semibold">
                    0{index + 1} // {item.category}
                  </span>
                  
                  <div className="w-7 h-7 bg-[#F7F3EE]/95 backdrop-blur-md border border-[#2A2521]/20 rounded-sm flex items-center justify-center text-[#2A2521] group-hover:bg-[#2A2521] group-hover:text-[#F7F3EE] group-hover:border-[#A8804A] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content Metadata */}
                <div className="absolute bottom-0 inset-x-0 p-5 transform transition-transform duration-300">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9B9BC] uppercase block mb-1 font-semibold">
                    {item.subtitle}
                  </span>
                  <h3 className="font-syne text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-200 font-sans line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Full Inspection Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-[#2A2521]/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#F7F3EE] border border-[#2A2521]/20 sharp-card overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#2A2521]/15 flex items-center justify-between bg-[#EAE3DB]">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#b91c1c] font-semibold block">
                  {language === 'id' ? 'Inspeksi Detail Fasilitas' : 'Detailed Inspection'} · {activeModalItem.category}
                </span>
                <h3 className="font-syne text-xl font-bold text-[#2A2521] uppercase">
                  {activeModalItem.title}
                </h3>
              </div>

              <button
                id="close-gallery-modal"
                onClick={() => setActiveModalItem(null)}
                className="p-2 border border-[#2A2521]/20 text-[#2A2521]/70 hover:text-[#2A2521] hover:border-[#2A2521]/40 bg-[#F7F3EE] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Stage */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-[#1a1715] flex items-center justify-center overflow-hidden">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                id="modal-prev-btn"
                onClick={handlePrevModal}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-[#2A2521]/80 border border-white/20 text-[#F7F3EE] hover:bg-[#b91c1c] transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                id="modal-next-btn"
                onClick={handleNextModal}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-[#2A2521]/80 border border-white/20 text-[#F7F3EE] hover:bg-[#b91c1c] transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Notes */}
            <div className="p-4 sm:p-6 border-t border-[#2A2521]/15 bg-[#EAE3DB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#2A2521] font-sans max-w-2xl leading-relaxed">
                  {activeModalItem.caption}
                </p>
                <span className="inline-block mt-2 font-mono text-xs text-[#b91c1c] font-semibold tracking-wider">
                  {language === 'id' ? 'Spesifikasi Teknis' : 'Technical Spec'}: {activeModalItem.technicalNote}
                </span>
              </div>

              <div className="font-mono text-xs text-[#2A2521]/60 whitespace-nowrap">
                PTTID Precision Engineering & Robotics
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
