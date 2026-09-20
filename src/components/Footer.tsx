import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_PROFILE } from '../data/vehicleData';

interface FooterProps {
  onOpenReserve: () => void;
}

export function Footer({ onOpenReserve }: FooterProps) {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EAE3DB] border-t border-[#2A2521]/15 text-[#2A2521] font-mono text-xs pt-20 pb-12 relative overflow-hidden">
      {/* Subtle warm bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#D9B9BC]/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-footer Callout Banner */}
        <div className="p-8 sm:p-12 bg-[#F7F3EE] border border-[#2A2521]/15 sharp-card mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_4px_24px_rgba(42,37,33,0.06)]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-[0.3em] uppercase text-[#b91c1c] font-semibold">
              <span>[ {language === 'id' ? 'Kemitraan Rekayasa Manufaktur' : 'Turnkey Manufacturing Partnership'} ]</span>
            </div>
            <h3 className="font-syne text-2xl sm:text-4xl font-bold text-[#2A2521] uppercase tracking-tight">
              {language === 'id' ? 'Otomasi Robotik & Mesin Khusus.' : 'Turnkey Robotic Automation.'} <br />
              <span className="text-metallic font-light">
                {language === 'id' ? 'Jig Presisi & Produksi Massal Press Stamping.' : 'Custom Tooling & Mass Production.'}
              </span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#2A2521]/70 font-sans max-w-xl">
              {t('footer.callout.desc')}
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              id="footer-reserve-cta"
              onClick={onOpenReserve}
              className="w-full md:w-auto px-8 py-4 bg-[#2A2521] hover:bg-[#3D352F] text-[#F7F3EE] font-syne font-semibold text-xs tracking-[0.25em] uppercase border border-[#A8804A]/60 shadow-md transition-all text-center"
            >
              {t('footer.callout.btn')}
            </button>
          </div>
        </div>

        {/* Main Footer Directory Columns - Mode HP (1 col), Mode Tablet (2 cols), Mode PC (4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-16 border-b border-[#2A2521]/12">
          
          {/* Col 1: Brand & Works */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-syne text-2xl font-bold tracking-[0.2em] text-[#2A2521]">
                PTTID
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono tracking-widest bg-[#b91c1c] text-white">
                PRECISION
              </span>
            </div>
            <p className="text-[#2A2521]/70 text-xs font-sans leading-relaxed">
              {COMPANY_PROFILE.name} ({COMPANY_PROFILE.brand})<br />
              {language === 'id'
                ? 'Spesialis Sel Robotik Otomasi, Jig & Fixture, Pusat Mesin CNC Presisi, Dies & Molds, dan Produksi Massal Part Stamping.'
                : 'Specialist in Automation Robotics, Jigs & Fixtures, Precision CNC Machining, and Stamping Press Production.'}
            </p>
            <div className="text-[11px] font-zen text-[#A8804A] font-medium tracking-widest">
              精密技術 · 産業自動化
            </div>
          </div>

          {/* Col 2: Engineering Architecture */}
          <div>
            <h4 className="font-syne text-sm font-bold text-[#2A2521] tracking-widest uppercase mb-4">
              {language === 'id' ? 'Kapabilitas' : 'Capabilities'}
            </h4>
            <ul className="space-y-2 text-xs text-[#2A2521]/70">
              <li><a href="#aerodynamics" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Robotik Pengelasan & Tending Mesin' : 'Robotic Welding & Machine Tending'}</a></li>
              <li><a href="#powertrain" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Pusat Mesin CNC Double Column 3000x2000mm' : '3000x2000mm Double Column CNC'}</a></li>
              <li><a href="#interior" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Checking Fixture & Jig Perakitan' : 'Checking Fixtures & Assembly Jigs'}</a></li>
              <li><a href="#interior" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Verifikasi Metrologi CMM 6-Axis' : '6-Axis CMM Metrology Verification'}</a></li>
              <li><a href="#chassis" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Produksi Massal Stamping Part s.d. 250T' : '250T Press Parts Mass Production'}</a></li>
            </ul>
          </div>

          {/* Col 3: Divisions & Standards */}
          <div>
            <h4 className="font-syne text-sm font-bold text-[#2A2521] tracking-widest uppercase mb-4">
              {language === 'id' ? 'Mutu & Divisi' : 'Quality & Divisions'}
            </h4>
            <ul className="space-y-2 text-xs text-[#2A2521]/70">
              <li><a href="#specification" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Divisi Robotik & Sistem Otomasi' : 'Robotics & Automation Systems'}</a></li>
              <li><a href="#specification" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Divisi Jig & Checking Fixtures' : 'Precision Jigs & Checking Fixtures'}</a></li>
              <li><a href="#specification" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Divisi Dies, Molds & Stamping Press' : 'Dies, Molds & Stamping Press Parts'}</a></li>
              <li><a href="#gallery" className="hover:text-[#2A2521] transition-colors">{language === 'id' ? 'Galeri Dokumentasi Fasilitas' : 'Plant & Facility Photo Gallery'}</a></li>
              <li><button onClick={onOpenReserve} className="text-[#b91c1c] hover:underline text-left">{language === 'id' ? 'Minta Dokumen Company Profile' : 'Request Company Profile Dossier'}</button></li>
            </ul>
          </div>

          {/* Col 4: Works Facility */}
          <div>
            <h4 className="font-syne text-sm font-bold text-[#2A2521] tracking-widest uppercase mb-4">
              {language === 'id' ? 'Alamat Pabrik & Kantor' : 'Manufacturing Plant'}
            </h4>
            <address className="not-italic text-xs text-[#2A2521]/70 space-y-1">
              <div className="font-semibold text-[#2A2521]">{COMPANY_PROFILE.name}</div>
              <div>{COMPANY_PROFILE.address}</div>
              <div className="pt-2 text-[#2A2521] font-semibold">Tel: {COMPANY_PROFILE.phone}</div>
              <div className="text-[#2A2521] font-semibold">Email: {COMPANY_PROFILE.email}</div>
            </address>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#2A2521]/60">
          <div>
            © 2026 {COMPANY_PROFILE.name} ({COMPANY_PROFILE.brand}). {t('footer.rights')} {t('footer.iso')}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#2A2521] transition-colors uppercase tracking-widest font-semibold"
          >
            <span>{language === 'id' ? 'Kembali ke Atas' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A8804A]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
