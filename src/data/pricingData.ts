export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: number;
  formattedPrice: string;
  durationHours: number;
  durationLabel: string;
  suitableFor: string;
  setAccessCount: string;
  description: string;
  features: string[];
  makeupRooms: string;
  crewAllowed: string;
  costumeChanges: string;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'silver-half-day',
    name: 'Silver Half-Day',
    price: 15000,
    formattedPrice: '₹15,000',
    durationHours: 4,
    durationLabel: '4 Hours Shift',
    suitableFor: 'Maternity, Baby Milestones, Quick Pre-Weddings & Model Portfolios',
    setAccessCount: 'Choice of any 15 Sets',
    description: 'A focused, high-efficiency photography shift designed for focused concepts and tight schedules without compromising on aesthetic quality.',
    features: [
      'Access to 15 themed sets (Indoor AC & Outdoor)',
      '1 Private Air-Conditioned Makeup & Changing Green Room',
      'Up to 3 Outfit Changes',
      'Full access to 100+ standard studio hand props',
      'Complimentary mineral water and tea for team',
      'Up to 6 crew & family members allowed',
      'High-speed battery charging stations'
    ],
    makeupRooms: '1 Standard AC Room',
    crewAllowed: 'Up to 6 People',
    costumeChanges: 'Up to 3 Looks'
  },
  {
    id: 'gold-full-day',
    name: 'Gold Full-Day',
    badge: 'Most Popular',
    isPopular: true,
    price: 25000,
    formattedPrice: '₹25,000',
    durationHours: 8,
    durationLabel: '8 Hours Full Shift',
    suitableFor: 'Couples, Pre-Weddings, Brand Lookbooks & Music Videos',
    setAccessCount: 'Access to 35+ Backdrops including Royal Palace',
    description: 'Our most sought-after booking. Capture morning daylight, afternoon sun, and the breathtaking golden twilight across royal and European architectures.',
    features: [
      'Access to 35+ indoor and outdoor sets',
      'Guaranteed slot on The Royal Rajputana Palace & Santorini Alley',
      '2 Dedicated Air-Conditioned Makeup Suites with lighted mirrors',
      'Unlimited costume changes',
      'Night-time Fairy Light Tunnel & evening lighting setup',
      'Up to 10 crew & family members allowed',
      'Full access to all 200+ vintage props & furniture',
      'In-house Cafe refreshment voucher worth ₹1,000',
      'Dedicated on-ground studio assistant'
    ],
    makeupRooms: '2 Luxury AC Suites',
    crewAllowed: 'Up to 10 People',
    costumeChanges: 'Unlimited Looks'
  },
  {
    id: 'platinum-cinematic',
    name: 'Platinum Royal Cinematic',
    badge: 'VIP Experience',
    price: 38000,
    formattedPrice: '₹38,000',
    durationHours: 12,
    durationLabel: '12 Hours Sunrise-to-Night',
    suitableFor: 'High-End Pre-Weddings, OTT Productions, Fashion Campaigns & Video Songs',
    setAccessCount: 'All 50+ Sets on Campus',
    description: 'The ultimate VIP studio experience. Complete freedom across all indoor AC stages and outdoor landscape sets with dedicated staff, bonfire permits, and atmospheric haze.',
    features: [
      'Complete, unrestricted access to ALL 50+ sets',
      'Exclusive priority booking on The Royal Palace and Vintage Roadster',
      'Master VIP Dressing Suite with private washroom and steamer valet',
      'Evening Bonfire with Sparkler/Pyro permission included',
      'Cinematic Atmospheric Fog & Haze machine included',
      'Up to 15 crew & family members allowed',
      'Complimentary Drone Flight Permission pass included',
      'Complimentary lunch & refreshments for the couple and photographer',
      'Dedicated Senior Studio Manager & lighting assistant throughout the day'
    ],
    makeupRooms: 'VIP Master Dressing Suite + 2 Green Rooms',
    crewAllowed: 'Up to 15 People',
    costumeChanges: 'Unlimited Looks'
  }
];

export interface StudioAddon {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  iconName: string;
}

export const STUDIO_ADDONS: StudioAddon[] = [
  {
    id: 'royal-makeup-room-upgrade',
    name: 'VIP Royal Makeup Suite Upgrade',
    price: 3000,
    formattedPrice: '₹3,000',
    description: 'Spacious 400 sq.ft private salon suite with 3 salon chairs, full-surround Hollywood mirrors, attached luxury bathroom & steamer.',
    iconName: 'Sparkles'
  },
  {
    id: 'drone-aerial-pass',
    name: 'Drone Aerial Flying Permission Pass',
    price: 2500,
    formattedPrice: '₹2,500',
    description: 'Studio safety clearance and outdoor airspace clearance for 4K aerial drone videography across our 3-acre property.',
    iconName: 'Camera'
  },
  {
    id: 'night-bonfire-sparklers',
    name: 'Night Bonfire & Cold Pyro Sparklers',
    price: 3500,
    formattedPrice: '₹3,500',
    description: 'Rustic wood bonfire pit setup with 4 safe cold-pyro sparkler fountains for magical evening slow-motion shots.',
    iconName: 'Flame'
  },
  {
    id: 'vintage-roadster-car',
    name: 'Vintage Roadster Convertible Prop Access',
    price: 4000,
    formattedPrice: '₹4,000',
    description: 'Exclusive positioning and seating inside our mint 1960s classic open-top roadster on the Americana roadway set.',
    iconName: 'Car'
  },
  {
    id: 'cinematic-haze-machine',
    name: 'Atmospheric Fog & Haze Machine with Operator',
    price: 1800,
    formattedPrice: '₹1,800',
    description: 'Heavy water-based cinematic mist and beam-revealing haze operated by our technician for dreamy portraits.',
    iconName: 'Wind'
  },
  {
    id: 'extra-hour-extension',
    name: 'Per Additional Hour Extension',
    price: 3000,
    formattedPrice: '₹3,000 / hr',
    description: 'Extend your shoot on the spot (subject to slot availability) to catch additional golden hour or night shots.',
    iconName: 'Clock'
  }
];
