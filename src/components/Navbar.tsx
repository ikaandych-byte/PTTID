import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ShieldAlert } from 'lucide-react';
import { toggleAmbientAtmosphere } from '../utils/audioEngine';

interface NavbarProps {
  onOpenReserve: () => void;
}

export function Navbar({ onOpenReserve }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleAmbientAtmosphere();
    setSoundActive(newState);
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F7F3EE]/92 backdrop-blur-md border-b border-[#2A2521]/10 py-3 shadow-sm'
          : 'bg-gradient-to-b from-[#F7F3EE]/95 via-[#F7F3EE]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <span className="font-syne text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#2A2521] group-hover:text-[#A8804A] transition-colors">
              PTTID
            </span>
            <span className="px-1.5 py-0.5 text-[10px] tracking-widest font-mono font-semibold bg-[#2A2521] text-[#F7F3EE] border border-[#A8804A]/40">
              TECHNICS
            </span>
          </div>
          <span className="hidden md:inline-block text-[10px] tracking-[0.2em] uppercase text-[#2A2521]/60 font-mono pl-2 border-l border-[#2A2521]/15">
            PT. Prima Teknik Trada · MM2100
          </span>
        </a>

        {/* Center Nav Links - Mode PC (lg+) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs tracking-[0.22em] uppercase font-mono text-[#2A2521]/80">
          <a href="#features" className="hover:text-[#A8804A] transition-colors relative py-1 group">
            <span>Capabilities</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8804A] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#aerodynamics" className="hover:text-[#A8804A] transition-colors relative py-1 group">
            <span>Robotics</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8804A] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#powertrain" className="hover:text-[#A8804A] transition-colors relative py-1 group">
            <span>Machining</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8804A] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#interior" className="hover:text-[#A8804A] transition-colors relative py-1 group">
            <span>Jig & Fixture</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8804A] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#gallery" className="hover:text-[#A8804A] transition-colors relative py-1 group">
            <span>Gallery</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8804A] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#specification" className="hover:text-[#A8804A] transition-colors relative py-1 group">
            <span>Divisions</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A8804A] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Center Nav Links - Mode Tablet (md - lg) */}
        <nav className="hidden md:flex lg:hidden items-center gap-3.5 text-[11px] tracking-wider uppercase font-mono text-[#2A2521]/80">
          <a href="#features" className="hover:text-[#A8804A] transition-colors py-1">
            <span>Capabilities</span>
          </a>
          <a href="#aerodynamics" className="hover:text-[#A8804A] transition-colors py-1">
            <span>Robotics</span>
          </a>
          <a href="#powertrain" className="hover:text-[#A8804A] transition-colors py-1">
            <span>Machining</span>
          </a>
          <a href="#gallery" className="hover:text-[#A8804A] transition-colors py-1">
            <span>Gallery</span>
          </a>
          <a href="#specification" className="hover:text-[#A8804A] transition-colors py-1">
            <span>Divisions</span>
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Sound Toggle */}
          <button
            id="sound-toggle-button"
            onClick={handleSoundToggle}
            type="button"
            title={soundActive ? 'Mute atmosphere' : 'Play high-tech atmosphere'}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 text-xs text-[#2A2521]/70 hover:text-[#2A2521] border border-[#2A2521]/20 hover:border-[#A8804A] bg-[#EAE3DB]/60 backdrop-blur-sm transition-all rounded-sm"
          >
            {soundActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#b91c1c] animate-pulse" />
                <span className="hidden sm:inline text-[10px] tracking-widest font-mono text-[#2A2521] font-semibold">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#2A2521]/60" />
                <span className="hidden sm:inline text-[10px] tracking-widest font-mono text-[#2A2521]/70">ATMOSPHERE</span>
              </>
            )}
          </button>

          {/* Reserve CTA */}
          <button
            id="nav-reserve-button"
            onClick={onOpenReserve}
            className="relative px-3 sm:px-5 py-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#F7F3EE] bg-[#2A2521] hover:bg-[#3D352F] border border-[#A8804A]/50 shadow-sm transition-all duration-300 active:scale-[0.98] whitespace-nowrap"
          >
            <span className="relative z-10">Request RFQ</span>
          </button>

          {/* Fitur Garis 3 Menu Bar - Khusus Mode HP (Mobile < md) */}
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2 rounded-md border border-[#2A2521]/20 bg-white/80 hover:bg-[#2A2521]/5 text-[#2A2521] transition-all shadow-sm active:scale-95"
            aria-label="Menu navigasi garis 3"
            title="Buka menu navigasi"
          >
            {/* Garis 1 */}
            <span
              className={`h-0.5 w-5 bg-[#2A2521] rounded-full transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#b91c1c]' : ''
              }`}
            />
            {/* Garis 2 */}
            <span
              className={`h-0.5 w-5 bg-[#2A2521] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            {/* Garis 3 */}
            <span
              className={`h-0.5 w-5 bg-[#2A2521] rounded-full transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#b91c1c]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Backdrop overlay untuk Mode HP */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer (Mode HP) */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-50 bg-[#F7F3EE] border-b border-[#2A2521]/15 px-6 py-6 space-y-5 shadow-2xl animate-fadeIn">
          {/* Header Mobile Drawer */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2521]/10">
            <div className="flex items-center gap-2">
              <span className="font-syne font-bold text-lg text-[#2A2521]">PTTID TECHNICS</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#2A2521] text-[#F7F3EE] rounded">MENU</span>
            </div>
            <span className="text-[11px] font-mono text-[#2A2521]/60">Mode HP</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1 font-manrope">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#2A2521] hover:bg-[#2A2521]/5 transition-colors"
            >
              <span>01 · Core Capabilities</span>
              <span className="text-xs text-[#A8804A] font-mono">→</span>
            </a>
            <a
              href="#aerodynamics"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#2A2521] hover:bg-[#2A2521]/5 transition-colors"
            >
              <span>02 · Robotic Automation</span>
              <span className="text-xs text-[#A8804A] font-mono">→</span>
            </a>
            <a
              href="#powertrain"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#2A2521] hover:bg-[#2A2521]/5 transition-colors"
            >
              <span>03 · CNC Machining</span>
              <span className="text-xs text-[#A8804A] font-mono">→</span>
            </a>
            <a
              href="#interior"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#2A2521] hover:bg-[#2A2521]/5 transition-colors"
            >
              <span>04 · Jig & Fixture Tooling</span>
              <span className="text-xs text-[#A8804A] font-mono">→</span>
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#2A2521] hover:bg-[#2A2521]/5 transition-colors"
            >
              <span>05 · Facility Gallery</span>
              <span className="text-xs text-[#A8804A] font-mono">→</span>
            </a>
            <a
              href="#specification"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#2A2521] hover:bg-[#2A2521]/5 transition-colors"
            >
              <span>06 · Production Divisions</span>
              <span className="text-xs text-[#A8804A] font-mono">→</span>
            </a>
          </div>

          {/* Quick Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full py-3.5 px-4 bg-[#2A2521] text-[#F7F3EE] rounded-xl font-manrope font-semibold text-sm uppercase tracking-wider shadow-md hover:bg-[#3D352F] flex items-center justify-center gap-2"
            >
              <span>Hubungi Kami / Request RFQ</span>
            </button>
          </div>

          {/* Badge Sertifikasi & Info Pabrik */}
          <div className="pt-3 border-t border-[#2A2521]/10 flex flex-col gap-1 text-[11px] text-[#2A2521]/70 font-mono">
            <span className="flex items-center gap-1.5 font-semibold text-[#2A2521]">
              <ShieldAlert className="w-4 h-4 text-[#b91c1c]" /> PT. Prima Teknik Trada · ISO 9001:2015
            </span>
            <span className="text-[#2A2521]/60">Kawasan Industri MM2100, Cibitung, Bekasi</span>
          </div>
        </div>
      )}
    </header>
  );
}
