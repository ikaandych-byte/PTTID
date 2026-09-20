import { useState } from 'react';
import { Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { TRIM_OPTIONS } from '../data/vehicleData';
import { TrimOption } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface TrimConfiguratorProps {
  onSelectTrimForReserve: (trim: TrimOption) => void;
}

export function TrimConfigurator({ onSelectTrimForReserve }: TrimConfiguratorProps) {
  const { t, language } = useLanguage();
  const [selectedTrimId, setSelectedTrimId] = useState<string>('automation-robotics');

  const selectedTrim = TRIM_OPTIONS.find((t) => t.id === selectedTrimId) || TRIM_OPTIONS[0];

  return (
    <section id="specification" className="py-24 bg-[#EAE3DB] border-t border-[#2A2521]/10 relative text-[#2A2521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.3em] uppercase text-[#b91c1c] font-semibold">
            <span>[ 03 · {t('divisions.badge')} ]</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-[#2A2521] uppercase">
            {language === 'id' ? 'Tiga Divisi Utama.' : 'Three Specialized Pillars.'} <br />
            <span className="text-metallic font-light">
              {language === 'id' ? 'Satu Standar Kualitas Presisi.' : 'One Standard of Excellence.'}
            </span>
          </h2>
          <p className="mt-3 text-sm text-[#2A2521]/70 font-mono leading-relaxed">
            {t('divisions.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Trim Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {TRIM_OPTIONS.map((trim) => {
              const isSelected = selectedTrimId === trim.id;

              return (
                <div
                  key={trim.id}
                  id={`trim-selector-${trim.id}`}
                  onClick={() => setSelectedTrimId(trim.id)}
                  className={`p-5 sharp-card border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#F7F3EE] border-[#b91c1c] shadow-[0_4px_24px_rgba(185,28,28,0.15)] ring-1 ring-[#b91c1c]'
                      : 'bg-[#F7F3EE]/70 border-[#2A2521]/15 hover:border-[#2A2521]/30 hover:bg-[#F7F3EE]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-syne text-lg font-bold text-[#2A2521] uppercase">
                          {trim.name}
                        </h3>
                        <span className="text-xs font-zen text-[#A8804A] font-semibold">{trim.japanese}</span>
                      </div>
                      <span className="text-xs font-mono text-[#b91c1c] tracking-widest uppercase block mt-1 font-semibold">
                        {trim.badge}
                      </span>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-xs text-[#2A2521]/60 block">{language === 'id' ? 'Kapasitas Tim' : 'Capacity'}</span>
                      <span className="text-sm font-bold text-[#2A2521]">
                        {trim.remaining} / {trim.units}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#2A2521]/80 font-sans mt-3 line-clamp-2">
                    {trim.description}
                  </p>
                </div>
              );
            })}

            {/* Quality inspection badge */}
            <div className="p-4 bg-[#F7F3EE] border border-[#2A2521]/15 sharp-card flex items-center gap-3 text-xs font-mono text-[#2A2521]/80 shadow-sm">
              <Award className="w-5 h-5 text-[#b91c1c] shrink-0" />
              <span>
                {language === 'id'
                  ? 'Tersertifikasi ISO 9001:2015 MD/PTT954 dengan laporan inspeksi metrologi CMM 6-Axis lengkap.'
                  : 'Certified ISO 9001:2015 MD/PTT954 with full 6-Axis CMM metrology inspection report.'}
              </span>
            </div>
          </div>

          {/* Right: Dynamic Telemetry & Comparison Display */}
          <div className="lg:col-span-7 bg-[#F7F3EE] sharp-card p-6 sm:p-8 border border-[#2A2521]/15 shadow-[0_4px_24px_rgba(42,37,33,0.06)]">
            <div className="flex items-center justify-between border-b border-[#2A2521]/12 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#2A2521]/60 block">
                  {language === 'id' ? 'Spesifikasi & Kapabilitas Divisi' : 'Division Specifications'}
                </span>
                <h3 className="font-syne text-2xl font-bold text-[#2A2521] uppercase">
                  {selectedTrim.name}
                </h3>
              </div>

              <button
                id="select-trim-cta"
                onClick={() => onSelectTrimForReserve(selectedTrim)}
                className="px-4 py-2 bg-[#2A2521] hover:bg-[#3D352F] text-[#F7F3EE] font-mono text-xs tracking-widest uppercase flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>{t('divisions.cta')}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#A8804A]" />
              </button>
            </div>

            {/* Key 4 Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-[#EAE3DB] border border-[#2A2521]/12">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#2A2521]/60 block">
                  {language === 'id' ? 'Kapasitas / Daya' : 'Capacity / Power'}
                </span>
                <span className="font-syne text-3xl font-bold text-[#2A2521]">
                  {selectedTrim.power}
                </span>
                <span className="text-[10px] font-mono text-[#b91c1c] block font-semibold">{language === 'id' ? 'Rating Operasi Maks' : 'Max Operating Rating'}</span>
              </div>

              <div className="p-4 bg-[#EAE3DB] border border-[#2A2521]/12">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#2A2521]/60 block">
                  {language === 'id' ? 'Toleransi / Siklus' : 'Tolerance / Speed'}
                </span>
                <span className="font-syne text-3xl font-bold text-[#2A2521]">
                  {selectedTrim.zeroToHundred}
                </span>
                <span className="text-[10px] font-mono text-[#2A2521]/60 block">{language === 'id' ? 'Siklus Presisi' : 'Precision Cycle'}</span>
              </div>

              <div className="p-4 bg-[#EAE3DB] border border-[#2A2521]/12">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#2A2521]/60 block">
                  {language === 'id' ? 'Beban Kerja' : 'Payload / Mass'}
                </span>
                <span className="font-syne text-3xl font-bold text-[#2A2521]">
                  {selectedTrim.weight}
                </span>
                <span className="text-[10px] font-mono text-[#2A2521]/60 block">{language === 'id' ? 'Rating Kapasitas' : 'Envelope Rating'}</span>
              </div>

              <div className="p-4 bg-[#EAE3DB] border border-[#2A2521]/12">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#2A2521]/60 block">
                  {language === 'id' ? 'Kecepatan / Spindle' : 'Speed / Rating'}
                </span>
                <span className="font-syne text-3xl font-bold text-[#2A2521]">
                  {selectedTrim.topSpeed}
                </span>
                <span className="text-[10px] font-mono text-[#2A2521]/60 block">RPM / SPM</span>
              </div>
            </div>

            {/* Performance Visual Bars */}
            <div className="space-y-4 font-mono text-xs">
              <div>
                <div className="flex justify-between text-[#2A2521]/80 mb-1">
                  <span>{language === 'id' ? 'Efisiensi Jalur Manufaktur (OEE)' : 'Manufacturing Line Efficiency'}</span>
                  <span className="text-[#b91c1c] font-semibold">
                    99.4% OEE Benchmark
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#EAE3DB]">
                  <div
                    className="h-full bg-gradient-to-r from-[#A8804A] to-[#b91c1c] transition-all duration-700"
                    style={{ width: `96%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#2A2521]/80 mb-1">
                  <span>{language === 'id' ? 'Kepatuhan Toleransi & Standar Mutu' : 'Quality Rigor & Tolerance Compliance'}</span>
                  <span className="text-[#2A2521] font-semibold">{language === 'id' ? '100% Terverifikasi CMM Metrologi' : '100% CMM Metrology Verified'}</span>
                </div>
                <div className="w-full h-1.5 bg-[#EAE3DB]">
                  <div
                    className="h-full bg-[#b91c1c] transition-all duration-700"
                    style={{ width: `98%` }}
                  />
                </div>
              </div>
            </div>

            {/* Mechanical summary table */}
            <div className="mt-8 pt-6 border-t border-[#2A2521]/12 grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#2A2521]/80">
                <CheckCircle2 className="w-4 h-4 text-[#b91c1c]" /> {language === 'id' ? 'Robotik Multi-Sumbu Terintegrasi (Epson / Yaskawa)' : 'Multi-Axis Robotic Articulation (Epson / Yaskawa)'}
              </div>
              <div className="flex items-center gap-2 text-[#2A2521]/80">
                <CheckCircle2 className="w-4 h-4 text-[#b91c1c]" /> {language === 'id' ? 'Pusat Mesin CNC Double Column 3000 x 2000 mm' : '3000 x 2000 mm Double Column CNC Centers'}
              </div>
              <div className="flex items-center gap-2 text-[#2A2521]/80">
                <CheckCircle2 className="w-4 h-4 text-[#b91c1c]" /> {language === 'id' ? '12 Lini Mesin Press Stamping Mekanikal (s.d. 250 Ton)' : '12 Stamping Mechanical Presses (Up to 250 Tons)'}
              </div>
              <div className="flex items-center gap-2 text-[#2A2521]/80">
                <CheckCircle2 className="w-4 h-4 text-[#b91c1c]" /> {language === 'id' ? 'Pemasok Otomotif Tier-1 Bersertifikat ISO 9001:2015' : 'Certified ISO 9001:2015 Tier-1 Automotive Supplier'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
