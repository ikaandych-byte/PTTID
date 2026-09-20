import { useState } from 'react';
import { Cpu, Gauge, Sparkles, Volume2, ShieldCheck, Layers, Sliders } from 'lucide-react';
import { INTERIOR_HOTSPOTS } from '../data/vehicleData';
import { playV8RevSound } from '../utils/audioEngine';
import { useLanguage } from '../context/LanguageContext';

import pttCncMachining from '../assets/images/ptt_cnc_machining_1789896978090.jpg';
import pttJigFixture from '../assets/images/ptt_jig_fixture_1789896992406.jpg';
import pttStampingPress from '../assets/images/ptt_stamping_press_1789897009765.jpg';

export function FeaturesBento() {
  const { t, language } = useLanguage();

  // Robotic workcell mode state
  const [aeroMode, setAeroMode] = useState<'welding' | 'tending' | 'vision'>('welding');
  
  // Audio state
  const [isPlayingRev, setIsPlayingRev] = useState(false);

  // Interior hotspot active index
  const [activeHotspotId, setActiveHotspotId] = useState<string>(INTERIOR_HOTSPOTS[0].id);
  const currentHotspot = INTERIOR_HOTSPOTS.find((h) => h.id === activeHotspotId) || INTERIOR_HOTSPOTS[0];

  const handleRevEngine = () => {
    setIsPlayingRev(true);
    playV8RevSound();
    setTimeout(() => {
      setIsPlayingRev(false);
    }, 1900);
  };

  const aeroProfiles = {
    welding: {
      title: language === 'id' ? 'Sel Kerja Robotik Las Arc & Plasma' : 'Robotic Arc & Plasma Welding Workcell',
      downforce: '6-Axis DOF',
      dragCd: '±0.03 mm',
      wingAngle: '360° rotation',
      rideHeight: '14.2s Cycle',
      note: language === 'id'
        ? 'Sel pengelasan multi-sumbu terkoordinasi dengan pelindung gas argon dan positioner fixture otomatis untuk komponen otomotif.'
        : 'Synchronized multi-axis welding cell with argon shielding and automated fixture positioner for automotive sub-assemblies.',
    },
    tending: {
      title: language === 'id' ? 'Robot Tending & Pemindahan Mesin CNC' : 'CNC Robotic Machine Tending & Transfer',
      downforce: '50 kg Payload',
      dragCd: '±0.02 mm',
      wingAngle: 'Dual Gripper',
      rideHeight: '2.8s Transfer',
      note: language === 'id'
        ? 'Sistem otomatisasi bongkar-muat benda kerja berkecepatan tinggi untuk pusat permesinan CNC, mengeliminasi waktu tunggu operator.'
        : 'High-speed automated part loading and unloading for CNC machining centers, reducing operator idle time to zero.',
    },
    vision: {
      title: language === 'id' ? 'Robotik Pick & Place Berpandu Kamera Visi' : 'Vision-Guided Pick & Place and Sealing',
      downforce: '3D Optical',
      dragCd: '±0.01 mm',
      wingAngle: 'Keyence Vision',
      rideHeight: '1,200 pcs/hr',
      note: language === 'id'
        ? 'Kamera inspeksi optik Keyence/Omron melacak orientasi komponen secara dinamis sekaligus pengaplikasian sealant otomatis.'
        : 'Integrated Keyence and Omron vision cameras tracking dynamic part positions with automated sealant dispensing.',
    },
  };

  const activeAero = aeroProfiles[aeroMode];

  return (
    <section id="features" className="py-24 bg-[#EAE3DB] border-t border-[#2A2521]/10 relative text-[#2A2521]">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D9B9BC]/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#A8804A]/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.3em] uppercase text-[#b91c1c] font-semibold">
              <span>[ 01 · {t('features.badge')} ]</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-[#2A2521] uppercase">
              {language === 'id' ? 'Robotika. Mesin CNC.' : 'Robotics. CNC Machining.'} <br />
              <span className="text-metallic font-light">
                {language === 'id' ? 'Perkakas & Cetakan Presisi.' : 'Precision Tooling.'}
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#2A2521]/70 font-mono leading-relaxed">
            {t('features.desc')}
          </p>
        </div>

        {/* Bento Grid Container - Mode HP (grid-cols-1), Mode Tablet (md:grid-cols-12), Mode PC (lg:grid-cols-12) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. AUTOMATION / TECHNICS CARD (Mobile: full, Tablet: 12 cols, PC: 7 cols) */}
          <div
            id="aerodynamics"
            className="col-span-1 md:col-span-12 lg:col-span-7 bg-[#F7F3EE] border border-[#2A2521]/14 shadow-[0_4px_24px_rgba(42,37,33,0.06)] sharp-card p-5 sm:p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top info */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#EAE3DB] border border-[#2A2521]/15 text-[#A8804A]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#2A2521]/60 block">
                      {language === 'id' ? 'Divisi Robotika & Otomasi' : 'Robotics & Automation Division'}
                    </span>
                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#2A2521] uppercase">
                      {t('features.c1.title')}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#2A2521]/80 px-2 py-1 bg-[#EAE3DB] border border-[#2A2521]/15 font-semibold">
                  EPSON & YASKAWA Partner
                </span>
              </div>

              <p className="text-sm text-[#2A2521]/80 mb-6 font-sans leading-relaxed">
                {t('features.c1.desc')}
              </p>

              {/* Mode Switcher */}
              <div className="bg-[#EAE3DB]/80 border border-[#2A2521]/12 p-3 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#2A2521]/70 mb-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sliders className="w-3.5 h-3.5 text-[#b91c1c]" /> {language === 'id' ? 'Aplikasi Operasional' : 'Operational Application'}
                  </span>
                  <span className="text-[#b91c1c] font-semibold">{activeAero.title}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(['welding', 'tending', 'vision'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setAeroMode(m)}
                      className={`py-2 px-2 text-[11px] font-mono tracking-wider uppercase border transition-all ${
                        aeroMode === m
                          ? 'bg-[#2A2521] border-[#A8804A] text-[#F7F3EE] shadow-sm font-semibold'
                          : 'bg-[#F7F3EE] border-[#2A2521]/15 text-[#2A2521]/70 hover:text-[#2A2521] hover:border-[#2A2521]/30'
                      }`}
                    >
                      {m === 'welding' ? (language === 'id' ? 'Pengelasan' : 'Welding') : m === 'tending' ? (language === 'id' ? 'Tending Mesin' : 'Tending') : (language === 'id' ? 'Visi Kamera' : 'Vision')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Telemetry readout */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#2A2521]/12 pt-4">
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#2A2521]/60 block">{language === 'id' ? 'Artikulasi Sumbu' : 'Articulation / DOF'}</span>
                  <span className="font-syne text-xl font-bold text-[#2A2521]">{activeAero.downforce}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#2A2521]/60 block">{language === 'id' ? 'Akurasi Repetisi' : 'Repeatability'}</span>
                  <span className="font-syne text-xl font-bold text-[#b91c1c]">{activeAero.dragCd}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#2A2521]/60 block">{language === 'id' ? 'Siklus Kerja' : 'Cycle / Transfer'}</span>
                  <span className="font-syne text-xl font-bold text-[#2A2521]">{activeAero.rideHeight}</span>
                </div>
              </div>
            </div>

            {/* Visual bottom note */}
            <div className="mt-6 pt-4 border-t border-[#2A2521]/12 flex items-center justify-between text-xs font-mono text-[#2A2521]/70">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> {language === 'id' ? 'Sistem Kontrol Servo Multi-Sumbu Aktif' : 'Multi-Axis Servo Control Active'}
              </span>
              <span className="text-[#2A2521]/60">{language === 'id' ? 'Sistem Terakreditasi ISO 9001:2015' : 'ISO 9001:2015 Certified System'}</span>
            </div>
          </div>

          {/* 2. ENGINE / CNC PERFORMANCE CARD (Mobile: full, Tablet: 12 cols, PC: 5 cols) */}
          <div
            id="powertrain"
            className="col-span-1 md:col-span-12 lg:col-span-5 bg-[#F7F3EE] border border-[#2A2521]/14 shadow-[0_4px_24px_rgba(42,37,33,0.06)] sharp-card p-5 sm:p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#EAE3DB] border border-[#2A2521]/15 text-[#A8804A]">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#2A2521]/60 block">
                      {language === 'id' ? 'Departemen Permesinan' : 'Machining Department'}
                    </span>
                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#2A2521] uppercase">
                      {t('features.c2.title')}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#b91c1c] font-semibold px-2 py-1 bg-[#D9B9BC]/30 border border-[#b91c1c]/30">
                  12,000 RPM
                </span>
              </div>

              {/* CNC Machining preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#2A2521]/12 mb-5 group/img">
                <img
                  src={pttCncMachining}
                  alt="PTTID 3000 x 2000 mm Double Column CNC Machining Center"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[10px] font-mono tracking-widest text-white uppercase font-semibold">
                  3,000 x 2,000 mm Travel · 4th-Axis Rotary Table
                </span>
              </div>

              <p className="text-sm text-[#2A2521]/80 font-sans leading-relaxed mb-6">
                {t('features.c2.desc')}
              </p>

              {/* Sound trigger button */}
              <button
                id="engine-sound-trigger"
                onClick={handleRevEngine}
                disabled={isPlayingRev}
                className={`w-full py-3.5 px-4 font-mono text-xs uppercase tracking-[0.2em] border flex items-center justify-center gap-3 transition-all ${
                  isPlayingRev
                    ? 'bg-[#b91c1c] text-white border-[#b91c1c] shadow-[0_0_20px_rgba(185,28,28,0.4)] animate-pulse'
                    : 'bg-[#2A2521] hover:bg-[#3D352F] text-[#F7F3EE] border-[#A8804A]/60 shadow-sm'
                }`}
              >
                <Volume2 className={`w-4 h-4 ${isPlayingRev ? 'animate-bounce' : 'text-[#A8804A]'}`} />
                <span>{isPlayingRev ? (language === 'id' ? 'Spindle 12.000 RPM Aktif...' : '12,000 RPM Spindle Active...') : (language === 'id' ? 'Dengarkan Suara Spindle CNC' : 'Play High-Speed Spindle Tone')}</span>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2521]/12 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#2A2521]/60 block text-[10px] uppercase">{language === 'id' ? 'Dimensi Meja Kerja' : 'Working Envelope'}</span>
                <span className="text-[#2A2521] font-bold">3000 × 2000 × 1000 mm</span>
              </div>
              <div>
                <span className="text-[#2A2521]/60 block text-[10px] uppercase">{language === 'id' ? 'Akurasi Sumbu' : 'Axis Accuracy'}</span>
                <span className="text-[#2A2521] font-bold">±0.003 mm Precision</span>
              </div>
            </div>
          </div>

          {/* 3. TOOLING & METROLOGY CARD (Mobile: full, Tablet: 12 cols, PC: 8 cols) */}
          <div
            id="interior"
            className="col-span-1 md:col-span-12 lg:col-span-8 bg-[#F7F3EE] border border-[#2A2521]/14 shadow-[0_4px_24px_rgba(42,37,33,0.06)] sharp-card p-5 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#EAE3DB] border border-[#2A2521]/15 text-[#A8804A]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#2A2521]/60 block">
                      {language === 'id' ? 'Divisi Perkakas & Metrologi' : 'Tooling & Metrology Division'}
                    </span>
                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-[#2A2521] uppercase">
                      {t('features.c3.title')}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-zen text-[#2A2521]/70 hidden sm:inline tracking-widest font-semibold">
                  検査治具 · 三次元測定
                </span>
              </div>

              {/* Interactive Checking Fixture Hotspot Image */}
              <div className="relative aspect-[16/9] w-full border border-[#2A2521]/15 overflow-hidden mb-6 bg-black">
                <img
                  src={pttJigFixture}
                  alt="PTTID Precision Checking Fixture & Machining Jig"
                  className="w-full h-full object-cover"
                />

                {/* Hotspot Markers */}
                {INTERIOR_HOTSPOTS.map((spot) => (
                  <button
                    key={spot.id}
                    id={`hotspot-${spot.id}`}
                    onClick={() => setActiveHotspotId(spot.id)}
                    style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      activeHotspotId === spot.id
                        ? 'bg-[#b91c1c] text-white ring-4 ring-[#b91c1c]/40 scale-110'
                        : 'bg-black/70 text-white border border-white/40 hover:scale-110 hover:bg-black/90'
                    }`}
                    title={spot.title}
                  >
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </button>
                ))}

                {/* Hotspot detail readout banner */}
                <div className="absolute bottom-0 inset-x-0 bg-[#F7F3EE]/95 backdrop-blur-md p-4 border-t border-[#2A2521]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#2A2521]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#2A2521] text-[#F7F3EE]">
                        {currentHotspot.tag}
                      </span>
                      <h4 className="font-syne text-sm sm:text-base font-bold text-[#2A2521]">
                        {currentHotspot.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#2A2521]/80 font-sans mt-1 max-w-xl">
                      {currentHotspot.description}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-[#2A2521]/60 whitespace-nowrap hidden md:inline">
                    {language === 'id' ? 'Klik titik marker untuk inspeksi metrologi' : 'Click markers to inspect metrology details'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-[#EAE3DB] border border-[#2A2521]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#b91c1c] block mb-1 font-semibold">
                    {t('features.c3.spec1')}
                  </span>
                  <p className="text-xs text-[#2A2521]/80">
                    {language === 'id'
                      ? 'Diverifikasi langsung dengan lengan CMM Portabel 6-Axis (R2500) dengan kalibrasi presisi hingga standar ±0.005 mm.'
                      : 'Inspected with 6-Axis Portable Coordinate Measuring Machine (CMM R2500) calibrated to ±0.005 mm standards.'}
                  </p>
                </div>
                <div className="p-3 bg-[#EAE3DB] border border-[#2A2521]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#b91c1c] block mb-1 font-semibold">
                    {t('features.c3.spec2')}
                  </span>
                  <p className="text-xs text-[#2A2521]/80">
                    {language === 'id'
                      ? 'Pin referensi datum dan locating pad dibuat dari baja perkakas yang melalui heat-treatment hingga kekerasan 58-62 HRC.'
                      : 'Precision reference pins and locating pads heat-treated to 58-62 HRC for durability across millions of cycles.'}
                  </p>
                </div>
                <div className="p-3 bg-[#EAE3DB] border border-[#2A2521]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8804A] block mb-1 font-semibold">
                    {t('features.c3.spec3')}
                  </span>
                  <p className="text-xs text-[#2A2521]/80">
                    {language === 'id'
                      ? 'Jig pengelasan khusus, fixture pengencangan (tightening), dan jig pencucian dirancang sesuai standar jalur produksi otomotif.'
                      : 'Custom welding jigs, tightening fixtures, and washing fixtures engineered specifically for automotive production lines.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. PARTS MASS PRODUCTION & STAMPING (Mobile: full, Tablet: 12 cols, PC: 4 cols) */}
          <div
            id="chassis"
            className="col-span-1 md:col-span-12 lg:col-span-4 bg-[#F7F3EE] border border-[#2A2521]/14 shadow-[0_4px_24px_rgba(42,37,33,0.06)] sharp-card p-5 sm:p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#EAE3DB] border border-[#2A2521]/15 text-[#A8804A]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#2A2521]/60 block">
                    {language === 'id' ? 'Divisi Produksi Massal' : 'Mass Production Division'}
                  </span>
                  <h3 className="font-syne text-xl font-bold text-[#2A2521] uppercase">
                    {t('features.c4.title')}
                  </h3>
                </div>
              </div>

              {/* Stamping press image */}
              <div className="relative aspect-square w-full border border-[#2A2521]/12 overflow-hidden mb-4 group/wheel">
                <img
                  src={pttStampingPress}
                  alt="PTTID 250 Ton Mechanical Stamping Press Line"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/wheel:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#2A2521]/90 px-2 py-1 border border-[#A8804A]/30 text-[10px] font-mono text-[#F7F3EE] uppercase font-semibold">
                  250T Heavy Press
                </div>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#2A2521]/12">
                  <span className="text-[#2A2521]/70">{language === 'id' ? 'Kapasitas Tonase Maks' : 'Max Press Tonnage'}</span>
                  <span className="text-[#2A2521] font-bold">250 Tons (Shieh Yieh)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#2A2521]/12">
                  <span className="text-[#2A2521]/70">{language === 'id' ? 'Mesin Press Aktif' : 'Mechanical Presses'}</span>
                  <span className="text-[#2A2521] font-bold">12 Active Units</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#2A2521]/12">
                  <span className="text-[#2A2521]/70">{language === 'id' ? 'Merek Mesin Terpasang' : 'Brands Deployed'}</span>
                  <span className="text-[#2A2521] font-bold">Amada, Shieh Yieh, Automa</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#2A2521]/12">
                  <span className="text-[#2A2521]/70">{language === 'id' ? 'Sertifikasi Mutu' : 'Quality Certification'}</span>
                  <span className="text-[#2A2521] font-bold">ISO 9001:2015 MD/PTT954</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2521]/12 text-[#2A2521]/60 text-[11px] font-mono">
              {language === 'id'
                ? 'Pemasok Tier-1 untuk Astra Daihatsu, Astra Honda, Yamaha & Yutaka.'
                : 'Tier-1 supplier for Astra Daihatsu, Astra Honda, Yamaha & Yutaka.'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
