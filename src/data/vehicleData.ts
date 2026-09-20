import { VehicleSpec, PaintVariant, TrimOption, GalleryItem, HotspotPoint } from '../types';

// Images generated for PTTID technical robotics & precision manufacturing
import pttRobotHero from '../assets/images/ptt_robot_hero_1789896942091.jpg';
import pttRobotAssembly from '../assets/images/ptt_robot_assembly_1789896960763.jpg';
import pttCncMachining from '../assets/images/ptt_cnc_machining_1789896978090.jpg';
import pttJigFixture from '../assets/images/ptt_jig_fixture_1789896992406.jpg';
import pttStampingPress from '../assets/images/ptt_stamping_press_1789897009765.jpg';
import pttDiesMolds from '../assets/images/ptt_dies_molds_1789897025236.jpg';
import pttFactoryPlant from '../assets/images/ptt_factory_plant_1789897045180.jpg';

export const COMPANY_PROFILE = {
  name: 'PT. PRIMA TEKNIK TRADA',
  brand: 'PTTID',
  website: 'www.ptt-id.com',
  nib: '0220000112495',
  iso: 'ISO 9001:2015 No. Cert: MD/PTT954 (IDCAB Mandala Accredited)',
  address: 'Kawasan Industri MM2100, Jl. Flores 1 Blok C1 No. 17-18, Cibitung, Bekasi – 17520, INDONESIA',
  phone: '+62 21 8980378 (hunting)',
  fax: '+62 21 8980379',
  email: 'primatech@centrin.net.id',
  altEmail: 'ikaandych@gmail.com',
  landBuilding: '2,806 m² / 2,400 m²',
  employees: '90 Technical Personnel',
  tagline: 'Your reliable sourcing for CUSTOMIZED MACHINE & AUTOMATION SYSTEM – PRECISION PARTS, JIG & FIXTURE – DIES & MOLDS – PARTS MASS PRODUCTION',
};

export const VALUABLE_CUSTOMERS = [
  'PT. Astra Daihatsu Motor',
  'PT. Astra Honda Motor',
  'PT. Yamaha Indonesia Motor Manufacturing',
  'PT. Yamaha Motor West Java Manufacturing',
  'PT. Yamaha Precision Part Manufacturing',
  'PT. Yutaka Indonesia Manufacturing',
  'PT. Chuhatsu Indonesia',
  'PT. Akashi Wahana Indonesia',
  'PT. Anugerah Daya Komponen Industri Utama',
  'PT. Mitsubishi Kramayuda Motors & Mfg',
  'PT. Asalta Mandiri Agung',
  'PT. Kalbe Farma',
  'PT. NSK Bearing Manufacturing Indonesia',
  'PT. AKS Precision Ball Indonesia',
  'PT. Hexpharm Jaya',
  'PT. Indomatsumoto Press & Dies',
  'PT. Bintang Toedjoe',
  'PT. Ferron Phar Pharmaceuticals',
  'PT. Sugity Creatives',
  'PT. GMK Indonesia',
  'PT. Vision Ease Asia',
];

export const OVERSEAS_CLIENTS = ['Japan', 'Malaysia', 'Philippines', 'Thailand'];

export const TECHNICAL_PARTNERS = [
  'EPSON ROBOT',
  'YASKAWA ROBOT',
  'OMRON',
  'BOSCH REXROTH',
  'HIWIN MICRO SYSTEM',
  'KEYENCE',
  'MITSUBISHI',
  'BECKHOFF',
  'COSMO',
];

export const VEHICLE_SPEC: VehicleSpec = {
  power: '250 Tons (Press Capacity)',
  torque: '3,000 x 2,000 mm (CNC Travel)',
  acceleration: '14.2 sec (Cycle Time)',
  topSpeed: '12,000 RPM (Spindle Speed)',
  redline: '±0.005 mm (CMM Precision)',
  weight: '2,806 m² (Facility Area)',
  engine: 'EPSON & YASKAWA 6-Axis Multi-Articulated Robotics',
  displacement: '50+ Industrial Machine Tools',
  transmission: 'Omron & Mitsubishi Safety Integrated PLC Architecture',
  unitsWorldwide: 90,
};

export const PAINT_VARIANTS: PaintVariant[] = [
  {
    id: 'robotics-cell',
    name: '6-Axis Robot Cell',
    kanji: 'ロボット自動化',
    colorHex: '#1F2937',
    description: 'Robotic welding, painting, sealing, machine tending & high-speed pick-and-place workcells.',
    imageUrl: pttRobotHero,
  },
  {
    id: 'cnc-machining',
    name: 'CNC Double Column',
    kanji: '精密マシニング',
    colorHex: '#A8804A',
    description: 'Large-scale 3,000 x 2,000 mm double column machining center with 4th-axis rotary table.',
    imageUrl: pttCncMachining,
  },
  {
    id: 'press-stamping',
    name: '250T Press Line',
    kanji: 'プレス部品量産',
    colorHex: '#B91C1C',
    description: 'High-speed mass production stamping press facility up to 250 tons with automated uncoiler feeders.',
    imageUrl: pttStampingPress,
  },
];

export const TRIM_OPTIONS: TrimOption[] = [
  {
    id: 'automation-robotics',
    name: 'Robotics & Automation Systems',
    japanese: 'ロボット自動化システム',
    units: 90,
    remaining: 18,
    power: 250,
    zeroToHundred: 2.8,
    weight: 2806,
    topSpeed: 320,
    description: 'Custom robotic automation workcells for welding, painting, sealing, machine tending, and pick & place. Official System Integrator for EPSON & YASKAWA.',
    badge: 'EPSON & YASKAWA Partner',
  },
  {
    id: 'jig-fixture',
    name: 'Jig, Fixture & Precision Parts',
    japanese: '治具・検査具・精密加工',
    units: 60,
    remaining: 12,
    power: 200,
    zeroToHundred: 1.8,
    weight: 2400,
    topSpeed: 280,
    description: 'High-precision machining jigs, checking fixtures, and custom tooling verified using 6-Axis CMM portable arms to sub-millimeter tolerances.',
    badge: 'CMM 6-Axis Verified (±0.005mm)',
  },
  {
    id: 'dies-press-production',
    name: 'Dies, Molds & Stamping Parts',
    japanese: '金型製作・プレス量産',
    units: 120,
    remaining: 24,
    power: 250,
    zeroToHundred: 3.5,
    weight: 2806,
    topSpeed: 360,
    description: 'Mass production stamping and CNC machined parts. 12 mechanical press lines with capacities up to 250T, CNC turning, and CNC milling.',
    badge: 'ISO 9001:2015 Certified MD/PTT954',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-robot-welding',
    title: '6-Axis Robotic Welding & Tending Cell',
    subtitle: 'Robotic System Integration · EPSON & YASKAWA',
    category: 'exterior',
    imageUrl: pttRobotHero,
    aspectRatio: 'aspect-4/3',
    caption: 'Multi-axis articulated robot cell engineered with plasma, argon shielding, and automated part changeover.',
    technicalNote: 'Accuracy: ±0.03 mm · 6-Axis Full DOF · Cycle Time: 14.2s',
  },
  {
    id: 'g-cnc-machining',
    title: 'Double Column CNC Machining Center',
    subtitle: '3000 x 2000 x 1000 mm Heavy Travel',
    category: 'engineering',
    imageUrl: pttCncMachining,
    aspectRatio: 'aspect-square',
    caption: 'High-rigidity double column machining center configured with 4th-axis rotary table for large automotive dies and frames.',
    technicalNote: 'Travel: 3,000 × 2,000 × 1,000 mm · 12,000 RPM Spindle',
  },
  {
    id: 'g-assembly-line',
    title: 'Robotic Assembly & Machine Tending',
    subtitle: 'Turnkey Automation & Material Handling',
    category: 'craft',
    imageUrl: pttRobotAssembly,
    aspectRatio: 'aspect-16/9',
    caption: 'Custom automated packaging line and robotic tending system with integrated Omron safety PLC architecture.',
    technicalNote: 'Throughput: 1,200 pcs/hr · Vision Guidance · Safety Interlocks',
  },
  {
    id: 'g-checking-fixture',
    title: 'Precision Automotive Checking Fixture',
    subtitle: 'Metrology, Datum Verification & Jig Tooling',
    category: 'interior',
    imageUrl: pttJigFixture,
    aspectRatio: 'aspect-square',
    caption: 'High-accuracy checking fixtures for stamped automotive body components with hardened datum blocks and dial gauges.',
    technicalNote: 'Verified with CMM 6-Axis Portable R2500 · Tolerance: ±0.005 mm',
  },
  {
    id: 'g-stamping-press',
    title: '250T Double Crank Mechanical Press',
    subtitle: 'Automotive Press Parts Mass Production',
    category: 'exterior',
    imageUrl: pttStampingPress,
    aspectRatio: 'aspect-4/3',
    caption: 'Shieh Yieh 250T and Amada 200T heavy stamping lines equipped with uncoiler feeders for automotive Tier-1 supply.',
    technicalNote: 'Press Capacity: 250T · Uncoiler Feeder · 12 Heavy Presses',
  },
  {
    id: 'g-dies-molds',
    title: 'Progressive Stamping Dies & Molds',
    subtitle: 'High Precision Tooling & Toolmaker Fitting',
    category: 'craft',
    imageUrl: pttDiesMolds,
    aspectRatio: 'aspect-16/9',
    caption: 'Automotive progressive dies and molds designed with 3D CAD/CAM and fitted by veteran toolmakers with micron precision.',
    technicalNote: 'Hardness: 58-62 HRC · Wire EDM & Surface Grinding',
  },
  {
    id: 'g-factory-plant',
    title: 'MM2100 Cibitung Manufacturing Facility',
    subtitle: 'Headquarters & Factory · Bekasi, Indonesia',
    category: 'exterior',
    imageUrl: pttFactoryPlant,
    aspectRatio: 'aspect-16/9',
    caption: 'PT. Prima Teknik Trada factory located in MM2100 Industrial Estate with 2,806 m² land and 90 technical personnel.',
    technicalNote: 'Established 1999 · NIB: 0220000112495 · ISO 9001:2015',
  },
];

export const INTERIOR_HOTSPOTS: HotspotPoint[] = [
  {
    id: 'binnacle',
    title: 'Hardened Datum Pin & Precision Locating Blocks',
    description: 'D2 tool steel reference datum points hardened to 60 HRC, ensuring zero-play alignment for critical automotive stampings.',
    xPercent: 28,
    yPercent: 52,
    tag: 'Datum Metrology',
  },
  {
    id: 'rotary',
    title: 'Pneumatic & Hydraulic Rapid Clamping System',
    description: 'Integrated pneumatic clamping cylinders delivering uniform clamping force with 1.8-second rapid loading and unloading.',
    xPercent: 52,
    yPercent: 70,
    tag: 'Rapid Clamping',
  },
  {
    id: 'leather',
    title: 'Portable 6-Axis CMM Coordinate Verification Point',
    description: 'In-situ laser probe scanning point checked against client 3D CAD master model with ±0.005 mm repeat coordinate accuracy.',
    xPercent: 76,
    yPercent: 44,
    tag: 'CMM Calibrated',
  },
];
