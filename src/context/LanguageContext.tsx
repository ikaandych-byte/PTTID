import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  id: {
    // Navbar
    'nav.capabilities': 'Kapabilitas',
    'nav.robotics': 'Otomasi Robotik',
    'nav.machining': 'Permesinan CNC',
    'nav.gallery': 'Fasilitas & Galeri',
    'nav.divisions': 'Divisi Produksi',
    'nav.rfq': 'Minta Penawaran (RFQ)',
    'nav.sound.on': 'Atmosfer Aktif',
    'nav.sound.off': 'Suara Pabrik',
    'nav.mobile.menu': 'MENU NAVIGASI',
    'nav.mobile.contact': 'Hubungi Kami / Ajukan RFQ',

    // Hero
    'hero.badge': 'REKAYASA PRESISI · KAWASAN INDUSTRI MM2100',
    'hero.title.line1': 'Membangun Presisi.',
    'hero.title.line2': 'Otomasi Robotik.',
    'hero.title.line3': 'Skala Tanpa Cacat.',
    'hero.desc': 'PT. Prima Teknik Trada merancang dan memproduksi sel otomasi robotik berstandar global, jig & fixture berakurasi tinggi (toleransi hingga ±0.005mm), serta lini cetak stamping presisi untuk manufaktur otomotif Tier-1.',
    'hero.cta.portfolio': 'Lihat Fasilitas & Portofolio',
    'hero.cta.showreel': 'Tonton Video Pabrik',
    'hero.stats.projects': 'Proyek Berhasil Terpasang',
    'hero.stats.satisfaction': 'Tingkat Keandalan Mitra',
    'hero.stats.years': 'Tahun Pengalaman',
    'hero.stats.support': 'Dukungan Teknis',
    'hero.stats.quality': 'Jaminan Mutu',
    'hero.badge.active': 'LOKASI MM2100 CIBITUNG',
    'hero.badge.iso': 'TERAKREDITASI ISO 9001:2015',
    'hero.clients.title': 'Mitra Industri Terkemuka',

    // Modal Showreel
    'modal.showreel.title': 'Tur Fasilitas Manufaktur Presisi PTTID',
    'modal.showreel.subtitle': 'Pabrikasi sel robotik, permesinan CNC, dan lini press stamping di Cibitung',
    'modal.showreel.action': 'Klik untuk Konsultasi Teknis',
    'modal.showreel.footer': 'PT. Prima Teknik Trada · Kawasan Industri MM2100',

    // Features Bento
    'features.badge': 'KAPABILITAS UTAMA MANUFAKTUR',
    'features.title': 'Solusi Rekayasa Terintegrasi Dari Desain Hingga Produksi Massal',
    'features.desc': 'Didukung lebih dari 50 mesin perkakas industri, fasilitas seluas 2.806 m², dan tim rekayasa berpengalaman untuk memenuhi standar ketat industri otomotif dan manufaktur modern.',
    'features.c1.title': 'Integrasi Sel Robotik & Mesin Khusus (SPM)',
    'features.c1.desc': 'Rancang bangun terpadu sel pengelasan (welding), perakitan cepat (pick & place), pengecatan, dan pemindahan material otomatis. Menggunakan sistem robotik artikulasi 6-sumbu terkemuka.',
    'features.c1.spec1': 'Siklus Cepat: 14.2 Detik',
    'features.c1.spec2': 'Akurasi Repetisi: ±0.03 mm',
    'features.c1.spec3': 'Standar Keamanan Safety PLC',
    'features.c2.title': 'Pusat Permesinan CNC Berkecepatan Tinggi',
    'features.c2.desc': 'Permesinan komponen berukuran besar dan rumit dengan mesin Double Column (travel 3.000 x 2.000 mm) dan sumbu ke-4 untuk hasil akhir berkualitas tinggi.',
    'features.c2.spec1': 'Spindle: 12.000 RPM',
    'features.c2.spec2': 'Travel: 3.000 x 2.000 mm',
    'features.c2.spec3': 'Toleransi: ±0.005 mm',
    'features.c3.title': 'Jig Perakitan, Checking Fixture & Pengukuran CMM',
    'features.c3.desc': 'Pembuatan jig pengelasan presisi dan alat uji inspeksi kesesuaian suku cadang otomotif sesuai standar gambar teknik JIS dan ISO.',
    'features.c3.spec1': 'Verifikasi Lengan CMM 6-Sumbu',
    'features.c3.spec2': 'Material Baja Perkakas Berkualitas',
    'features.c3.spec3': 'Laporan Inspeksi Dimensi Lengkap',
    'features.c4.title': 'Lini Mesin Press Stamping hingga 250 Ton',
    'features.c4.desc': '12 lini mesin press mekanik dilengkapi uncoiler & feeder otomatis untuk produksi massal komponen pelat logam berpresisi konsisten.',
    'features.c4.spec1': 'Kapasitas Press: 250 Ton',
    'features.c4.spec2': 'Cetakan Progressive Dies',
    'features.c4.spec3': 'Kapasitas Ribuan Pcs/Hari',

    // Gallery
    'gallery.badge': 'FASILITAS PRODUKSI',
    'gallery.title': 'Galeri Fasilitas & Dokumentasi Rekayasa Nyata',
    'gallery.desc': 'Lihat langsung fasilitas produksi, mesin-mesin presisi tinggi, dan bukti penerapan teknologi di lantai pabrik kami di Cibitung, Bekasi.',
    'gallery.filter.all': 'Semua Fasilitas',
    'gallery.filter.robotics': 'Sel Robotik & SPM',
    'gallery.filter.cnc': 'Pusat Mesin CNC',
    'gallery.filter.stamping': 'Press & Cetakan Dies',
    'gallery.filter.inspection': 'Inspeksi & Metrologi',

    // Trim Configurator
    'divisions.badge': 'STRUKTUR DIVISI PABRIK',
    'divisions.title': 'Tiga Pilar Solusi Manufaktur PT. Prima Teknik Trada',
    'divisions.desc': 'Setiap divisi dilengkapi dengan peralatan spesifik, tenaga ahli terlatih, dan sistem pengendalian mutu terakreditasi ISO 9001:2015.',
    'divisions.cta': 'Minta Penawaran Divisi Ini',
    'divisions.capacity': 'Kapasitas Personel Teknis',
    'divisions.status': 'Status Kapasitas Lini',

    // RFQ Modal
    'rfq.title': 'Pengajuan Permintaan Penawaran (RFQ)',
    'rfq.subtitle': 'Konsultasikan kebutuhan gambar teknik (drawing), toleransi, dan jadwal pengiriman Anda langsung kepada tim engineering kami.',
    'rfq.fullName': 'Nama Lengkap PIC',
    'rfq.company': 'Nama Perusahaan / Pabrik',
    'rfq.email': 'Email Resmi Kantor',
    'rfq.phone': 'No. Telepon / WhatsApp',
    'rfq.division': 'Divisi Layanan yang Dibutuhkan',
    'rfq.notes': 'Detail Spesifikasi & Kebutuhan Teknis',
    'rfq.notesPlaceholder': 'Sebutkan jumlah unit, toleransi yang diharapkan, jenis material (misal: SKD11, SS400, Alumunium), atau tautan gambar teknik...',
    'rfq.submit': 'Kirim Permintaan Penawaran (RFQ)',
    'rfq.submitting': 'Mengirimkan Formulir RFQ...',
    'rfq.success': 'Permintaan Penawaran Anda Berhasil Terkirim! Tim engineering kami di MM2100 Cibitung akan segera menghubungi Anda.',
    'rfq.back': 'Kembali ke Beranda',

    // Footer
    'footer.callout.title': 'Siap Mengoptimalkan Efisiensi Lini Pabrik Anda?',
    'footer.callout.desc': 'Diskusikan kebutuhan otomasi robotik, rancang bangun jig fixture, maupun pengadaan komponen presisi bersama tim insinyur kami di Cibitung.',
    'footer.callout.btn': 'Jadwalkan Kunjungan Pabrik / Diskusi Teknis',
    'footer.address': 'Alamat Kantor & Pabrik',
    'footer.contact': 'Kontak Resmi',
    'footer.rights': 'Hak Cipta Dilindungi Undang-Undang.',
    'footer.iso': 'Sertifikasi Sistem Manajemen Mutu ISO 9001:2015 No. Cert: MD/PTT954 (Akreditasi IDCAB Mandala)',
  },
  en: {
    // Navbar
    'nav.capabilities': 'Capabilities',
    'nav.robotics': 'Robotics',
    'nav.machining': 'CNC Machining',
    'nav.gallery': 'Facility Gallery',
    'nav.divisions': 'Production Divisions',
    'nav.rfq': 'Request RFQ',
    'nav.sound.on': 'Atmosphere On',
    'nav.sound.off': 'Plant Sound',
    'nav.mobile.menu': 'NAVIGATION MENU',
    'nav.mobile.contact': 'Contact Us / Request RFQ',

    // Hero
    'hero.badge': 'PRECISION ENGINEERING · MM2100 INDUSTRIAL ESTATE',
    'hero.title.line1': 'Engineering Precision.',
    'hero.title.line2': 'Industrial Robotics.',
    'hero.title.line3': 'Built to Scale.',
    'hero.desc': 'PT. Prima Teknik Trada delivers turnkey robotic automation cells, sub-micron precision jigs & fixtures (tolerance down to ±0.005mm), and high-speed progressive stamping lines for Tier-1 automotive and global manufacturers.',
    'hero.cta.portfolio': 'Explore Capabilities & Facility',
    'hero.cta.showreel': 'Watch Plant Tour',
    'hero.stats.projects': 'Turnkey Projects Delivered',
    'hero.stats.satisfaction': 'Partner Reliability Rate',
    'hero.stats.years': 'Years Experience',
    'hero.stats.support': 'Technical Support',
    'hero.stats.quality': 'Quality Assurance',
    'hero.badge.active': 'MM2100 CIBITUNG PLANT',
    'hero.badge.iso': 'ISO 9001:2015 CERTIFIED',
    'hero.clients.title': 'Trusted by Leading Manufacturers',

    // Modal Showreel
    'modal.showreel.title': 'PTTID Precision Manufacturing Plant Tour',
    'modal.showreel.subtitle': 'Robotic workcell fabrication, CNC machining centers, and stamping press lines in Cibitung',
    'modal.showreel.action': 'Click to Consult with Engineers',
    'modal.showreel.footer': 'PT. Prima Teknik Trada · MM2100 Industrial Estate',

    // Features Bento
    'features.badge': 'CORE MANUFACTURING CAPABILITIES',
    'features.title': 'Integrated Engineering Solutions From Blueprint to High-Volume Production',
    'features.desc': 'Powered by over 50 industrial machine tools, a 2,806 m² facility, and veteran tooling engineers meeting the rigorous demands of Tier-1 automotive manufacturing.',
    'features.c1.title': 'Robotics & Special Purpose Machinery (SPM)',
    'features.c1.desc': 'Full turnkey engineering for automated welding cells, high-speed pick & place, sealing, and robotic machine tending using 6-axis articulated robots.',
    'features.c1.spec1': 'Cycle Time: 14.2 Seconds',
    'features.c1.spec2': 'Repeatability: ±0.03 mm',
    'features.c1.spec3': 'Integrated Safety PLC Architecture',
    'features.c2.title': 'High-Speed Precision CNC Machining Centers',
    'features.c2.desc': 'Heavy-duty machining capabilities featuring 3,000 x 2,000 mm Double Column machine tools equipped with 4th-axis rotary tables for tight-tolerance dies and components.',
    'features.c2.spec1': 'Spindle Speed: 12,000 RPM',
    'features.c2.spec2': 'Working Travel: 3,000 x 2,000 mm',
    'features.c2.spec3': 'Machining Tolerance: ±0.005 mm',
    'features.c3.title': 'Assembly Jigs, Checking Fixtures & 6-Axis CMM',
    'features.c3.desc': 'Precision fabrication of automotive inspection gauges and welding fixtures verified using 6-axis portable CMM arms strictly compliant with JIS and ISO standards.',
    'features.c3.spec1': '6-Axis Portable CMM Arm Verified',
    'features.c3.spec2': 'High-Grade Tool Steels (SKD11 / SKD61)',
    'features.c3.spec3': 'Complete Dimensional Inspection Report',
    'features.c4.title': 'Mass Production Press Stamping Up to 250T',
    'features.c4.desc': '12 mechanical press production lines equipped with automated uncoilers and servo feeders for continuous, zero-defect sheet metal stamped parts.',
    'features.c4.spec1': 'Press Tonnage: Up to 250 Tons',
    'features.c4.spec2': 'Multi-Stage Progressive Dies',
    'features.c4.spec3': 'Capacity: Thousands of Parts/Day',

    // Gallery
    'gallery.badge': 'PRODUCTION ASSETS',
    'gallery.title': 'Live Facility & Engineering Gallery',
    'gallery.desc': 'Inspect our manufacturing floors, high-tolerance machinery, and turnkey robotic workcells deployed at our Cibitung, Bekasi facility.',
    'gallery.filter.all': 'All Facilities',
    'gallery.filter.robotics': 'Robotics & SPM',
    'gallery.filter.cnc': 'CNC Centers',
    'gallery.filter.stamping': 'Press & Dies',
    'gallery.filter.inspection': 'Inspection & CMM',

    // Trim Configurator
    'divisions.badge': 'PLANT DIVISION STRUCTURE',
    'divisions.title': 'Three Core Manufacturing Pillars at PT. Prima Teknik Trada',
    'divisions.desc': 'Each division is equipped with dedicated industrial machinery, certified technical specialists, and ISO 9001:2015 quality management procedures.',
    'divisions.cta': 'Request RFQ for this Division',
    'divisions.capacity': 'Technical Personnel Capacity',
    'divisions.status': 'Production Line Availability',

    // RFQ Modal
    'rfq.title': 'Request for Quotation (RFQ)',
    'rfq.subtitle': 'Submit your technical drawings, tolerances, and delivery schedule directly to our engineering division for evaluation.',
    'rfq.fullName': 'PIC Full Name',
    'rfq.company': 'Company / Plant Name',
    'rfq.email': 'Official Work Email',
    'rfq.phone': 'Phone Number / WhatsApp',
    'rfq.division': 'Required Production Division',
    'rfq.notes': 'Technical Specifications & Requirements',
    'rfq.notesPlaceholder': 'Specify batch quantity, target tolerance, raw material grades (e.g., SKD11, SS400, Aluminum 6061), or CAD drawing links...',
    'rfq.submit': 'Submit Request for Quotation',
    'rfq.submitting': 'Submitting RFQ...',
    'rfq.success': 'Your RFQ has been received! Our engineering team at MM2100 Cibitung will contact you within 24 hours.',
    'rfq.back': 'Back to Homepage',

    // Footer
    'footer.callout.title': 'Ready to Accelerate Your Production Line Efficiency?',
    'footer.callout.desc': 'Schedule a technical meeting or factory audit at MM2100 Cibitung to discuss robotic automation, precision jigs, and stamped component supply.',
    'footer.callout.btn': 'Schedule Technical Consultation / Plant Visit',
    'footer.address': 'Plant & Headquarters Address',
    'footer.contact': 'Official Contact',
    'footer.rights': 'All Rights Reserved.',
    'footer.iso': 'Quality Management System ISO 9001:2015 No. Cert: MD/PTT954 (Mandala IDCAB Accredited)',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pttid_lang');
    return (saved === 'en' ? 'en' : 'id') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pttid_lang', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const dict = translations[language] as Record<string, string>;
    if (dict && dict[key]) {
      return dict[key];
    }
    // Fallback to Indonesian if key not found
    const fallbackDict = translations.id as Record<string, string>;
    return fallbackDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
