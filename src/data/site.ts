import painting01 from '@images/painting-01.jpg';
import painting02 from '@images/painting-02.jpg';
import painting03 from '@images/painting-03.jpg';
import painting04 from '@images/painting-04.jpg';
import painting05 from '@images/painting-05.jpg';
import painting06 from '@images/painting-06.jpg';
import wallpaper01 from '@images/wallpaper-01.jpg';
import wallpaper02 from '@images/wallpaper-02.jpg';
import wallpaper03 from '@images/wallpaper-03.jpg';
import wallpaper04 from '@images/wallpaper-04.jpg';
import wallpaper05 from '@images/wallpaper-05.jpg';
import wallpaper06 from '@images/wallpaper-06.jpg';
import woodwork01 from '@images/woodwork-01.jpg';
import woodwork02 from '@images/woodwork-02.jpg';
import woodwork03 from '@images/woodwork-03.jpg';
import woodwork04 from '@images/woodwork-04.jpg';
import woodwork05 from '@images/woodwork-05.jpg';
import woodwork06 from '@images/woodwork-06.jpg';
import type { GalleryItem, HomeItem, ManifestoItem, NavLinkItem, ServiceItem, TestimonialItem } from '../types';

export const siteData = {
  // Global Business Information
  brand: {
    name: "The Singing Decorator's Son",
    tagline: "Precision painting and decorating for those who value detail, cleanliness, and classic craft.",
    email: "hello@artisandecor.co.uk",
    phone: "07701058569",
    address: "Sandiway, Northwich, Cheshire",
    yearFounded: 2011,
    socials: [
      { platform: "Instagram", url: "#", icon: "IG" },
      { platform: "Facebook", url: "#", icon: "FB" },
      { platform: "Pinterest", url: "#", icon: "PI" }
    ],
    areas: [
      'Cuddington & Sandiway',
      'Hartford',
      'Northwich',
      'Winsford',
      'Cheshire'
    ]
  },
};

export const gallery: GalleryItem[] = [
  {
    src: painting01,
    alt: "Victorian Living Room - Sage Green",
    category: "Residential",
  },
  {
    src: painting02,
    alt: "Modern Kitchen - Matte Black Cabinets",
    category: "Interior",
  },
  {
    src: painting03,
    alt: "Exterior Masonry - Classic White",
    category: "Exterior",
  },
  {
    src: painting04,
    alt: "Master Bedroom - Feature Wall",
    category: "Residential",
  },
  {
    src: painting05,
    alt: "Hallway Panelling - Deep Navy",
    category: "Commercial",
  },
  {
    src: painting06,
    alt: "Bespoke Ceiling Rose - Gold Leaf",
    category: "Detailing",
  },
  {
    src: wallpaper01,
    alt: "Living Room - Floral Wallpaper",
    category: "Interior",
  },
  {
    src: wallpaper02,
    alt: "Boutique Shop - Geometric Mural",
    category: "Commercial",
  },
  {
    src: wallpaper03,
    alt: "Dining Room - Striped Wallpaper",
    category: "Interior",
  },
  {
    src: wallpaper04,
    alt: "Feature Wall - Custom Mural",
    category: "Interior",
  },
  {
    src: wallpaper05,
    alt: "Bedroom - Textured Fabric Wallcovering",
    category: "Interior",
  },
  {
    src: wallpaper06,
    alt: "Office - Metallic Geometric Wallpaper",
    category: "Commercial",
  },
  {
    src: woodwork01,
    alt: "Custom Woodwork - Handcrafted Details",
    category: "Detailing",
  },
  {
    src: woodwork02,
    alt: "Period Woodwork - Heritage Restoration",
    category: "Restoration",
  },
  {
    src: woodwork03,
    alt: "Exterior Woodwork - Weatherproof Finish",
    category: "Exterior",
  },
  {
    src: woodwork04,
    alt: "Bespoke Cornicing - Ornate Details",
    category: "Detailing",
  },
  {
    src: woodwork05,
    alt: "Custom Staircase - Handcrafted Elegance",
    category: "Detailing",
  },
  {
    src: woodwork06,
    alt: "Period Woodwork - Heritage Restoration",
    category: "Restoration",
  }
]

export const home: HomeItem = {
  hero: {
    eyebrow: "Established Excellence",
    title: "The art of a flawless finish.",
    description: "Precision painting and decorating for those who value detail, cleanliness, and classic craft.",
    bgImage: wallpaper04
  },
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Clean Guarantee", value: "100%" }
  ]
};

export const manifesto: ManifestoItem[] = [
  { title: "01. Preparation First", text: "The secret to longevity is in the substrate. We spend 70% of our time on preparation." },
  { title: "02. Technical Precision", text: "Whether it’s a laser-straight cut-in line or a perfectly matched wallpaper pattern." }
]

export const navLinks: NavLinkItem[] = [
  { label: "Home", url: "/" },
  { label: "Services", url: "/services" },
  { label: "Gallery", url: "/gallery" },
  { label: "Testimonials", url: "/testimonials" },
  { label: "About", url: "/about" }
];

export const services: ServiceItem[] = [
  {
    title: "Interior Finishing",
    description:
      "From heritage properties to modern apartments, we deliver flawless matte, eggshell, and gloss finishes with surgical precision.",
    image: painting02,
    slug: "interior-finishing"
  },
  {
    title: "Specialist Wall Coverings",
    description:
      "Expert installation of high-end wallpapers, fabric coverings, and bespoke murals, ensuring perfect pattern matching and invisible seams.",
    image: wallpaper02,
    slug: "specialist-wall-coverings"
  },
  {
    title: "Exterior Preservation",
    description:
      "Utilizing advanced weather-shielding technology to protect and beautify masonry, woodwork, and metalwork against the elements.",
    image: woodwork06,
    slug: "exterior-preservation"
  },
  {
    title: "Bespoke Restoration",
    description:
      "Careful repair and restoration of ornate cornicing, ceiling roses, and period woodwork using traditional techniques.",
    image: woodwork01,
    slug: "bespoke-restoration"
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Had Sam decorate several rooms, our staircase, hallway and outside guttering and downpipes. His workmanship was outstanding, he clearly demonstrated a desire to please his customer. Sam is very friendly, approachable and hardworking, I would without doubt use him again, and I would recommend him to anyone considering contacting him.",
    author: "Mrs. H",
    location: "Cheshire",
    projectType: "Heritage Restoration",
    featured: true,
  },
  {
    quote:
      "Omg, what can I say. Sam is an absolute legend, as soon as he walked through our front door I thought don’t care about the price, he’s doing the job, he’s such a lovely guy, and his quote was amazing too … bonus. He’s polite, and a really genuine guy, and his work is fantastic. I asked  him to do some wall papering as an extra job when he had time, he said he would book that in with me when he could. I got home and he had done it for me, now that’s service. His work is second to none and he was tidy throughout. Get him in, but you will have a wait as he’s so good he gets booked up but definitely worth the wait!",
    author: "Ms. S",
    location: "Delamere",
    projectType: "Interior Finishing",
    featured: false,
  },
  {
    quote:
      "Sam is truly talented when it comes to decorating. He made a flawless job of my mother in law’s kitchen, after that job, we asked if he would be able to sort an old staircase out and bring it back to life. He certainly did that. He gave us a speedy quote, grafted for 5 days sanding down the woodwork and painting it up to a brand new finish. I would certainly recommend him to anybody, absolute top class guy, great customer service, flawless painting and best of all, great sense of humour. Get yourselves booked in!",
    author: "Mr. B",
    location: "Northwich",
    projectType: "Residential Painting",
    featured: false,
  },
  {
    quote:
      "Sam painted our kitchen yesterday. It wasn't the easiest job because of the amount of cutting in around shelves I didn't want taken down. He has done an incredible job. We are really made up. Would highly recommend him. He is a really nice guy and very professional. We will be using him again for sure.",
    author: "Mr. J",
    location: "Cuddington",
    projectType: "Interior Finishing",
    featured: false,
  },
  {
    quote:
      "Sam is brilliant - when getting your house decorated you expect to come home from work to a mess…. Sam doesn’t know the word every day the house was spotless which is a bonus and a great touch! Sam’s work is amazing he has brought a banister that LITERALLY had 20 layers of paint on back to its original and then painted it! Great sense of humour and a pleasure to have in the house! Thanks Sam!",
    author: "Ms. B",
    location: "Mold",
    projectType: "Interior Finishing",
    featured: false,
  }
];