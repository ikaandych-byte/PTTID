export interface VehicleSpec {
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  redline: string;
  weight: string;
  engine: string;
  displacement: string;
  transmission: string;
  unitsWorldwide: number;
}

export interface PaintVariant {
  id: string;
  name: string;
  kanji: string;
  colorHex: string;
  description: string;
  imageUrl: string;
}

export interface TrimOption {
  id: string;
  name: string;
  japanese: string;
  units: number;
  remaining: number;
  power: number; // PS
  zeroToHundred: number; // sec
  weight: number; // kg
  topSpeed: number; // km/h
  description: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'exterior' | 'interior' | 'engineering' | 'craft';
  imageUrl: string;
  aspectRatio: string;
  caption: string;
  technicalNote: string;
}

export interface HotspotPoint {
  id: string;
  title: string;
  description: string;
  xPercent: number;
  yPercent: number;
  tag: string;
}
