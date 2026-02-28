// types.ts
import type { ImageMetadata } from 'astro';

export interface GalleryItem {
  alt: string;
  category: string;
  src: ImageMetadata;
}

export interface HomeItem {
  hero: {
    bgImage: ImageMetadata;
    description: string;
    eyebrow: string;
    title: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ManifestoItem {
  text: string;
  title: string;
}

export interface NavLinkItem {
  label: string;
  url: string;
}

export interface ServiceItem {
  description: string;
  image: ImageMetadata;
  slug: string;
  title: string;
}

export interface SiteData {
  brand: {
    address: string;
    areas: string[];
    email: string;
    name: string;
    phone: string;
    socials: SocialItem[];
    tagline: string;
    yearFounded: number;
  };
}

export interface SocialItem {
  icon: string;
  platform: string;
  url: string;
}

export interface TestimonialItem {
  author: string;
  featured: boolean;
  location: string;
  projectType: string;
  quote: string;
}