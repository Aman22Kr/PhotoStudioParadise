export interface ShootService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  startingPrice: string;
  recommendedDuration: string;
  image: string;
  gallery: string[];
  overview: string;
  whyChooseUs: string[];
  includedFeatures: string[];
  recommendedSets: string[];
  whatToBring: string[];
  outfitChanges: string;
  faqs: { question: string; answer: string }[];
}

export const SHOOT_SERVICES: ShootService[] = [
  {
    id: 'pre-wedding',
    slug: 'pre-wedding-shoots',
    title: 'Pre-Wedding & Engagement Shoots',
    subtitle: 'Cinematic romance across royal palaces, European alleys, and fairy-lit twilight sets',
    tagline: 'Craft your love story with breathtaking grand backdrops and endless wardrobe changes',
    startingPrice: '₹15,000',
    recommendedDuration: '8 - 12 Hours (Gold or Platinum Package)',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Your pre-wedding shoot at PhotoStudioParadise is tailored like a movie production. From regal Rajasthani palatial backdrops to romantic Greek Santorini walls and twilight fairy-lit walkways, you get diverse visual themes within a single private campus in Delhi without traveling around the city.',
    whyChooseUs: [
      'Access to 50+ indoor air-conditioned and outdoor natural sets in one location',
      'Private air-conditioned bridal makeup vanity rooms with full mirrors and clean washrooms',
      'Spectacular day-to-night lighting transitions from soft morning rays to dramatic night bonfire and smoke effects',
      'Zero public disturbance or crowd interruptions—purely dedicated creative environment'
    ],
    includedFeatures: [
      'Full access to props (vintage bicycle, grand throne, acoustic guitars, suitcases)',
      'High-speed charging stations for camera batteries and gimbal rigs',
      'Dressing room with steam iron assistance and garment racks',
      'Complimentary golf cart shuttle between sets across our 3-acre studio campus'
    ],
    recommendedSets: ['royal-heritage-palace', 'santorini-greece-alley', 'fairy-light-tunnel-canopy', 'tuscan-vineyard-pergola'],
    whatToBring: [
      '3 to 6 outfit changes (Ethnic lehengas, western evening gowns, casual coord sets)',
      'Comfortable walking footwear between set transitions',
      'Personal makeup touchup kit (although our green rooms have full vanity lighting)'
    ],
    outfitChanges: 'Unlimited with 8-Hour & 12-Hour bookings',
    faqs: [
      {
        question: 'Can we bring our own photographer and videographer?',
        answer: 'Yes! PhotoStudioParadise is a dedicated studio location. You can bring your own photography crew. If you do not have one, we can also recommend vetted verified candid and cinematic artists.'
      },
      {
        question: 'Is drone photography permitted?',
        answer: 'Yes, drone flying is permitted on our outdoor sets with prior studio safety clearance and the optional Drone Pass add-on.'
      }
    ]
  },
  {
    id: 'maternity',
    slug: 'maternity-shoots',
    title: 'Maternity & Pregnancy Shoots',
    subtitle: 'Gentle, comfortable, and ethereal memories honoring motherhood in climate-controlled luxury',
    tagline: 'Gentle pacing, lush botanical sets, and air-conditioned green rooms tailored for expecting mothers',
    startingPrice: '₹12,000',
    recommendedDuration: '4 - 6 Hours (Silver or Gold Package)',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Maternity shoots demand comfort, hygiene, gentle walking distances, and calm privacy. At PhotoStudioParadise, our indoor air-conditioned studios and shaded botanical glasshouse offer tranquil sanctuaries for expecting mothers to capture the glow of pregnancy in full peace.',
    whyChooseUs: [
      'Padded resting loungers and constant chilled/warm refreshments available',
      'Zero-staircase wheelchair and stroller friendly access to all prime shooting bays',
      'Diffused natural lighting setups that create soft, angelic portraits',
      'Private clean suites for peaceful costume adjustments and relaxation intervals'
    ],
    includedFeatures: [
      'Soft fabric drapes, floral wings, and organic maternity props',
      'Sanitized dressing and rest vanity room',
      'Flexible pacing—take pauses whenever the mother desires'
    ],
    recommendedSets: ['glass-conservatory-greenhouse', 'boho-gypsy-camp', 'french-parisian-bistro'],
    whatToBring: ['Flowing chiffon maternity gowns, comfy flat footwear, baby ultrasound sonogram prints'],
    outfitChanges: '2 to 3 comfortable changes recommended',
    faqs: [
      {
        question: 'What is the best week of pregnancy to schedule the shoot?',
        answer: 'We typically suggest between weeks 28 to 34, when your baby bump is beautifully rounded and you still feel energetic.'
      }
    ]
  },
  {
    id: 'fashion',
    slug: 'fashion-editorial-shoots',
    title: 'Fashion, Model Portfolios & Brand Lookbooks',
    subtitle: 'Edgy neon backdrops, industrial lofts, and sleek architectural runways for agencies & designers',
    tagline: 'High-contrast studio lighting, versatile textures, and international aesthetic vibes',
    startingPrice: '₹15,000',
    recommendedDuration: '4 - 8 Hours',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Whether you are shooting an e-commerce designer catalogue, an international agency portfolio, or a high-fashion streetwear editorial, our sets offer striking visual contrast. From rugged exposed brick walls to glowing neon diners and minimalist cycloramas, bring your moodboard to life.',
    whyChooseUs: [
      'Heavy-duty 3-phase power supply for studio strobes, continuous lights, and wind blowers',
      'Multiple look variations achievable within mere footsteps',
      'Wide garment racks, full-length illuminated vanity mirrors, and steamer facilities'
    ],
    includedFeatures: [
      'Staging area for stylists and apparel trunks',
      'Access to designer props including Chesterfield leather furniture and vintage roadster',
      'Fast gigabit Wi-Fi for instant client tethering'
    ],
    recommendedSets: ['rustic-brick-factory', 'neon-cyberpunk-diner', 'vintage-convertible-route66'],
    whatToBring: ['Wardrobe collections, styling accessories, lighting modifiers (continuous or strobe)'],
    outfitChanges: 'Up to 15 wardrobe looks across full-day sessions',
    faqs: [
      {
        question: 'Can we shoot e-commerce white background products as well?',
        answer: 'Yes, we have indoor cyclorama white and seamless chroma backgrounds alongside our themed sets.'
      }
    ]
  },
  {
    id: 'baby-toddler',
    slug: 'baby-newborn-shoots',
    title: 'Baby, Toddler & Cake Smash Shoots',
    subtitle: 'Playful, sanitized, and cheerful sets filled with colorful props and safe soft-play elements',
    tagline: 'Temperature-controlled environments with playful props and clean spaces for little ones',
    startingPrice: '₹10,000',
    recommendedDuration: '3 - 4 Hours (Silver Package)',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Capturing childhood milestones requires patience, warmth, and spotless cleanliness. Our baby photography zones feature child-safe non-toxic props, miniature vintage cars, pastel wooden wagons, and dedicated cake smash cleanup stations.',
    whyChooseUs: [
      'Hospital-grade sanitized floors and props before every toddler session',
      'Temperature controlled studios ensuring the baby never catches a chill',
      'Spacious setup allowing parents and grandparents to participate effortlessly'
    ],
    includedFeatures: [
      'Wooden mini tubs, balloons, plush toys, vintage baby pram props',
      'Instant warm water station for baby formula or quick wash after cake smash',
      'Noise-controlled environment to avoid overwhelming young babies'
    ],
    recommendedSets: ['glass-conservatory-greenhouse', 'boho-gypsy-camp', 'french-parisian-bistro'],
    whatToBring: ['Baby outfits, favorite toys for attention, smash cake, extra wipes and towels'],
    outfitChanges: '2 to 4 baby themes',
    faqs: [
      {
        question: 'Is there a private nursing and diaper change station?',
        answer: 'Yes, all our indoor makeup suites include private nursing spots and changing tables.'
      }
    ]
  },
  {
    id: 'anniversary',
    slug: 'anniversary-shoots',
    title: '25th Silver Jubilee & Wedding Anniversaries',
    subtitle: 'Relive your milestone love story with regal elegance and timeless family memories',
    tagline: 'Celebrate decades of companionship in regal palaces and romantic European streets',
    startingPrice: '₹14,000',
    recommendedDuration: '4 - 8 Hours',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599818817282-e30090f4e3c9?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Silver jubilee and golden anniversaries deserve royal commemoration. Many couples bring their children and extended family to recreate their original wedding memories amidst our sandstone arches, tranquil fountains, and fairy-lit garden arches.',
    whyChooseUs: [
      'Comfortable seating setups across all sets for senior couples',
      'Grand architectural elegance honoring lifelong bond and legacy',
      'Spacious sets that effortlessly accommodate multi-generational family groupings'
    ],
    includedFeatures: [
      'Traditional royal props and ceremonial accessories',
      'Refreshment support at our in-house cafe',
      'Assistance with costume changes and hair styling coordination'
    ],
    recommendedSets: ['royal-heritage-palace', 'punjabi-village-pind', 'fairy-light-tunnel-canopy'],
    whatToBring: ['Classic royal attire, original wedding photographs for recreation props'],
    outfitChanges: '2 to 4 looks',
    faqs: [
      {
        question: 'Can grown-up children join for family portrait sections?',
        answer: 'Absolutely! Our packages welcome family members to be part of the shoot.'
      }
    ]
  },
  {
    id: 'family-friends',
    slug: 'family-friends-shoots',
    title: 'Family, Generations & Friends Shoots',
    subtitle: 'Joyful group portraits, festive reunions, and lively lifestyle photography',
    tagline: 'Create timeless heirlooms that celebrate the laughter and togetherness of family',
    startingPrice: '₹12,000',
    recommendedDuration: '4 - 6 Hours',
    image: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'From Diwali festive portraits to fun-filled friend reunions and multi-generational family albums, our outdoor village pind and rustic lofts offer cheerful, authentic backdrops for heartfelt bonding.',
    whyChooseUs: [
      'Sets with wide viewing angles capable of seating 15-20 persons comfortably',
      'Casual and festive props that make candid laughter come alive naturally',
      'Cafe snacks and tea on-site to keep everyone refreshed'
    ],
    includedFeatures: ['Festive props, chaarpai seating, picnic setups, lawn games for natural candid frames'],
    recommendedSets: ['punjabi-village-pind', 'tuscan-vineyard-pergola', 'french-parisian-bistro'],
    whatToBring: ['Color-coordinated outfits (e.g. pastels, traditional silks, or denim casuals)'],
    outfitChanges: '2 to 3 group themes',
    faqs: [
      {
        question: 'Are pets allowed for family shoots?',
        answer: 'Yes! Well-behaved friendly pets are welcome on our outdoor garden sets with prior notice.'
      }
    ]
  },
  {
    id: 'commercial-music-videos',
    slug: 'commercial-music-video-shoots',
    title: 'Music Videos & Commercial Ad Shoots',
    subtitle: 'Full-scale film sets, dynamic lighting control, haze effects, and heavy power supply',
    tagline: 'The cinematic choice for independent music labels, OTT productions, and brand campaigns',
    startingPrice: '₹22,000',
    recommendedDuration: '8 - 14 Hours (Custom Commercial Shift)',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Equipped to handle full video crews, cinema cameras (RED, Arri, Blackmagic), jib cranes, and continuous HMI lighting. PhotoStudioParadise offers turnkey cinematic locations with easy vehicle loading docks and complete night shoot permissions.',
    whyChooseUs: [
      'Industrial grade 3-phase power with silent generator backup',
      'Acoustic consideration and high ceilings for overhead camera jibs',
      'Night-time special permissions for dramatic smoke, hazers, and fire effects'
    ],
    includedFeatures: ['Dressing & vanity suite for cast, production control table, dedicated technician'],
    recommendedSets: ['royal-heritage-palace', 'rustic-brick-factory', 'neon-cyberpunk-diner'],
    whatToBring: ['Production gear, lighting package, sound equipment (if recording synced audio)'],
    outfitChanges: 'Unlimited',
    faqs: [
      {
        question: 'Do you offer generator power backup for cinema lighting?',
        answer: 'Yes, we provide high-capacity silent diesel generators on-site to handle heavy wattage fixtures.'
      }
    ]
  }
];
