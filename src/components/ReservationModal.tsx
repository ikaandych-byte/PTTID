import { useState } from 'react';
import { X, CheckCircle2, Shield } from 'lucide-react';
import { TRIM_OPTIONS, PAINT_VARIANTS } from '../data/vehicleData';
import { TrimOption, PaintVariant } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrim?: TrimOption;
}

export function ReservationModal({ isOpen, onClose, initialTrim }: ReservationModalProps) {
  const { t, language } = useLanguage();
  const [selectedTrim, setSelectedTrim] = useState<TrimOption>(initialTrim || TRIM_OPTIONS[0]);
  const [selectedPaint, setSelectedPaint] = useState<PaintVariant>(PAINT_VARIANTS[0]); // 6-Axis Robot Cell
  const [selectedChassisNumber, setSelectedChassisNumber] = useState<number>(9);
  const [driveHand, setDriveHand] = useState<'JIS' | 'ISO'>('JIS');
  const [customEngraving, setCustomEngraving] = useState<string>('PTTID · ROBOTIC-CELL-09');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientCountry, setClientCountry] = useState<string>('Indonesia / Cikarang');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  // Reserved slots for production scheduling
  const reservedSlots = [1, 2, 3, 7, 8, 11, 13, 22, 28, 44, 77, 88];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2A2521]/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative max-w-3xl w-full bg-[#F7F3EE] border border-[#2A2521]/20 sharp-card shadow-[0_25px_60px_rgba(42,37,33,0.35)] my-auto overflow-hidden text-[#2A2521]">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-[#2A2521]/15 flex items-center justify-between bg-[#EAE3DB]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#b91c1c] animate-pulse rounded-full" />
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#b91c1c] font-semibold block">
                {language === 'id' ? 'PT. Prima Teknik Trada · Pengajuan RFQ & Konsultasi Engineering' : 'PT. Prima Teknik Trada · Project RFQ & Engineering Consultation'}
              </span>
              <h2 className="font-syne text-xl sm:text-2xl font-bold text-[#2A2521] uppercase">
                {t('rfq.title')}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#2A2521]/20 text-[#2A2521]/70 hover:text-[#2A2521] hover:border-[#2A2521]/40 bg-[#F7F3EE] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Edition & Specification */}
            <div>
              <label className="font-mono text-xs tracking-[0.2em] uppercase text-[#2A2521] font-semibold block mb-3">
                {language === 'id' ? '1. Pilih Lingkup / Divisi Manufaktur' : '1. Select Manufacturing Division / Scope'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TRIM_OPTIONS.map((trim) => (
                  <button
                    key={trim.id}
                    type="button"
                    onClick={() => setSelectedTrim(trim)}
                    className={`p-4 text-left border sharp-card transition-all ${
                      selectedTrim.id === trim.id
                        ? 'bg-[#EAE3DB] border-[#b91c1c] shadow-sm ring-1 ring-[#b91c1c]'
                        : 'bg-[#F7F3EE] border-[#2A2521]/15 hover:border-[#2A2521]/30 text-[#2A2521]/70'
                    }`}
                  >
                    <div className="font-syne font-bold text-[#2A2521] text-sm uppercase">
                      {trim.name}
                    </div>
                    <div className="text-[11px] font-mono text-[#b91c1c] font-semibold mt-0.5">
                      {trim.badge}
                    </div>
                    <div className="text-[10px] font-mono text-[#2A2521]/60 mt-2">
                      {trim.remaining} {language === 'id' ? 'dari' : 'of'} {trim.units} {language === 'id' ? 'Kapasitas Proyek Tersedia' : 'Project Slots Available'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Production Scheduling Slot (01 - 90) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-mono text-xs tracking-[0.2em] uppercase text-[#2A2521] font-semibold">
                  {language === 'id' ? '2. Alokasi Jadwal Produksi (01 — 90)' : '2. Select Production Planning Slot (01 — 90)'}
                </label>
                <span className="font-mono text-xs text-[#b91c1c] font-bold">
                  {language === 'id' ? 'Slot Terpilih' : 'Selected Slot'}: #{String(selectedChassisNumber).padStart(2, '0')} / 90
                </span>
              </div>

              <div className="p-3 bg-[#EAE3DB] border border-[#2A2521]/15 max-h-36 overflow-y-auto grid grid-cols-6 sm:grid-cols-10 gap-1.5 font-mono text-xs text-center">
                {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => {
                  const isReserved = reservedSlots.includes(num);
                  const isSelected = selectedChassisNumber === num;

                  return (
                    <button
                      key={num}
                      type="button"
                      disabled={isReserved}
                      onClick={() => setSelectedChassisNumber(num)}
                      className={`py-1.5 px-1 border transition-all text-[11px] ${
                        isSelected
                          ? 'bg-[#b91c1c] text-white border-[#b91c1c] font-bold shadow-sm'
                          : isReserved
                          ? 'bg-[#EAE3DB]/40 border-transparent text-[#2A2521]/30 line-through cursor-not-allowed'
                          : 'bg-[#F7F3EE] border-[#2A2521]/15 text-[#2A2521] hover:border-[#2A2521]/40'
                      }`}
                    >
                      {String(num).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>
              <span className="text-[10px] font-mono text-[#2A2521]/60 mt-1.5 block">
                {language === 'id'
                  ? 'Slot abu-abu menandakan komitmen kapasitas produksi aktif bersama mitra OEM otomotif.'
                  : 'Grayed slots indicate current scheduled commitments with automotive OEM partners.'}
              </span>
            </div>

            {/* Step 3: Technology Core & Specification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs tracking-[0.2em] uppercase text-[#2A2521] font-semibold block mb-2">
                  {language === 'id' ? '3. Teknologi / Fokus Inti' : '3. Primary Technology Core'}
                </label>
                <div className="space-y-2">
                  {PAINT_VARIANTS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPaint(p)}
                      className={`w-full p-2.5 flex items-center justify-between border sharp-card transition-all ${
                        selectedPaint.id === p.id
                          ? 'bg-[#EAE3DB] border-[#2A2521] text-[#2A2521] font-semibold'
                          : 'bg-[#F7F3EE] border-[#2A2521]/15 text-[#2A2521]/70 hover:border-[#2A2521]/30'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-4 h-4 rounded-full border border-[#2A2521]/30 shadow-inner"
                          style={{ backgroundColor: p.colorHex }}
                        />
                        <span className="text-xs font-mono">{p.name}</span>
                      </div>
                      <span className="text-xs font-zen text-[#A8804A] font-medium">{p.kanji}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-xs tracking-[0.2em] uppercase text-[#2A2521] font-semibold block mb-2">
                  {language === 'id' ? 'Standar Kepatuhan & Referensi Part' : 'Compliance Standard & Part Ref'}
                </label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setDriveHand('JIS')}
                    className={`py-2 text-xs font-mono uppercase border ${
                      driveHand === 'JIS' ? 'bg-[#2A2521] text-[#F7F3EE] border-[#A8804A] font-semibold' : 'bg-[#F7F3EE] border-[#2A2521]/15 text-[#2A2521]/70'
                    }`}
                  >
                    JIS / Japanese OEM
                  </button>
                  <button
                    type="button"
                    onClick={() => setDriveHand('ISO')}
                    className={`py-2 text-xs font-mono uppercase border ${
                      driveHand === 'ISO' ? 'bg-[#2A2521] text-[#F7F3EE] border-[#A8804A] font-semibold' : 'bg-[#F7F3EE] border-[#2A2521]/15 text-[#2A2521]/70'
                    }`}
                  >
                    ISO 9001 / Internasional
                  </button>
                </div>

                <label className="text-[10px] font-mono uppercase text-[#2A2521]/70 block mb-1 font-medium">
                  {language === 'id' ? 'Nomor Part / Referensi Gambar Proyek' : 'Custom Part / Project Identification'}
                </label>
                <input
                  type="text"
                  maxLength={36}
                  value={customEngraving}
                  onChange={(e) => setCustomEngraving(e.target.value)}
                  placeholder="e.g. PTTID · ROBOT-CELL-01"
                  className="w-full bg-[#F7F3EE] border border-[#2A2521]/20 px-3 py-2 text-xs font-mono text-[#2A2521] focus:outline-none focus:border-[#b91c1c]"
                />
              </div>
            </div>

            {/* Step 4: Client Contact Information */}
            <div className="pt-4 border-t border-[#2A2521]/15">
              <label className="font-mono text-xs tracking-[0.2em] uppercase text-[#2A2521] font-semibold block mb-3">
                {language === 'id' ? '4. Informasi PIC & Kontak Perusahaan' : '4. Engineering Representative Contact'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={language === 'id' ? 'Nama PIC / Perusahaan' : 'Representative Name / Company'}
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#F7F3EE] border border-[#2A2521]/20 px-3 py-2.5 text-xs text-[#2A2521] placeholder-[#2A2521]/40 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={language === 'id' ? 'Email Resmi Kantor' : 'Corporate Email'}
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-[#F7F3EE] border border-[#2A2521]/20 px-3 py-2.5 text-xs text-[#2A2521] placeholder-[#2A2521]/40 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder={language === 'id' ? 'Lokasi Pabrik / Kawasan Industri' : 'Plant Location / Delivery Area'}
                    value={clientCountry}
                    onChange={(e) => setClientCountry(e.target.value)}
                    className="w-full bg-[#F7F3EE] border border-[#2A2521]/20 px-3 py-2.5 text-xs text-[#2A2521] placeholder-[#2A2521]/40 focus:outline-none focus:border-[#b91c1c]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2A2521]/15">
              <div className="text-[11px] font-mono text-[#2A2521]/70 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#b91c1c]" /> {language === 'id' ? 'Kerahasiaan data teknis & NDA terjamin.' : 'Technical NDA & engineering confidentiality assured.'}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#2A2521] hover:bg-[#3D352F] text-[#F7F3EE] font-syne font-semibold text-xs tracking-[0.25em] uppercase border border-[#A8804A]/60 shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                {t('rfq.submit')}
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Receipt Card */
          <div className="p-6 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D9B9BC]/30 border border-[#b91c1c] flex items-center justify-center text-[#b91c1c]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#b91c1c] font-semibold block mb-1">
                {language === 'id' ? 'RFQ Diterima · Evaluasi Rekayasa Teknis Rahasia' : 'RFQ Received · Confidential Engineering Review'}
              </span>
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#2A2521] uppercase">
                {language === 'id' ? 'Alokasi Proyek' : 'Project Slot'} #{String(selectedChassisNumber).padStart(2, '0')} {language === 'id' ? 'Tercatat' : 'Logged'}
              </h3>
              <p className="mt-2 text-sm text-[#2A2521]/80 max-w-lg mx-auto font-sans leading-relaxed">
                {language === 'id'
                  ? `Terima kasih, ${clientName || 'Rekan Mitra'}. Permintaan penawaran otomatisasi robotik dan fabrikasi presisi Anda telah diteruskan ke Divisi Engineering PT. Prima Teknik Trada di Cikarang/Cibitung, Indonesia.`
                  : `Thank you, ${clientName || 'Partner'}. Your turnkey automation and precision manufacturing inquiry has been transmitted to PT. Prima Teknik Trada's Engineering Directorate in Cikarang, Indonesia.`}
              </p>
            </div>

            {/* Specification Certificate Box */}
            <div className="max-w-md mx-auto bg-[#EAE3DB] border border-[#2A2521]/15 p-5 text-left font-mono text-xs space-y-2 sharp-card shadow-inner">
              <div className="flex justify-between border-b border-[#2A2521]/12 pb-2">
                <span className="text-[#2A2521]/60 uppercase">{language === 'id' ? 'Divisi Terpilih' : 'Selected Division'}</span>
                <span className="text-[#2A2521] font-bold">{selectedTrim.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A2521]/12 pb-2">
                <span className="text-[#2A2521]/60 uppercase">{language === 'id' ? 'Fokus Teknologi' : 'Technology Core'}</span>
                <span className="text-[#2A2521] font-bold">{selectedPaint.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A2521]/12 pb-2">
                <span className="text-[#2A2521]/60 uppercase">{language === 'id' ? 'Standar Mutu' : 'Standard Protocol'}</span>
                <span className="text-[#2A2521] font-bold">{driveHand === 'JIS' ? 'JIS Standard (OEM)' : 'ISO 9001:2015'}</span>
              </div>
              <div className="flex justify-between border-b border-[#2A2521]/12 pb-2">
                <span className="text-[#2A2521]/60 uppercase">{language === 'id' ? 'Referensi Part' : 'Part / Project Ref'}</span>
                <span className="text-[#b91c1c] font-bold truncate max-w-[200px]">{customEngraving}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#2A2521]/60 uppercase">{language === 'id' ? 'Waktu Respons' : 'Turnaround'}</span>
                <span className="text-[#2A2521]/80 font-medium">{language === 'id' ? 'Respons Teknis dalam 24 Jam' : 'Within 24 Hours Technical Response'}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#2A2521] hover:bg-[#3D352F] border border-[#A8804A]/60 text-[#F7F3EE] font-mono text-xs tracking-widest uppercase transition-all shadow-md"
            >
              {t('rfq.back')}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
