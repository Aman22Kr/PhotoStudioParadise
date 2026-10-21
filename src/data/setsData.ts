export interface StudioSet {
  id: string;
  name: string;
  category: 'Royal & Heritage' | 'Romantic & European' | 'Rustic & Vintage' | 'Modern & Chic' | 'Nature & Outdoor' | 'Bohemian & Creative';
  type: 'Indoor AC' | 'Outdoor' | 'Covered Semi-Outdoor';
  tagline: string;
  description: string;
  dimensions: string;
  lighting: string;
  image: string;
  gallery: string[];
  featuredProps: string[];
  recommendedShoots: string[];
  popularTime: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const STUDIO_SETS: StudioSet[] = [
  {
    id: 'royal-heritage-palace',
    name: 'The Royal Rajputana Palace',
    category: 'Royal & Heritage',
    type: 'Outdoor',
    tagline: 'Magnificent hand-carved Jodhpur sandstone arches, royal courtyard & throne',
    description: 'Immerse your photoshoot in royal grandeur. Replicating the opulent architecture of medieval Rajasthan, this set boasts 18-foot carved sandstone pillars, an ornate jharokha balcony, antique brass lanterns, and a grand marble water fountain that provides unmatched regal elegance for bridal and pre-wedding portraits.',
    dimensions: '45ft x 35ft with 20ft ceiling height',
    lighting: 'Breathtaking Golden Hour sunlight (4:30 PM - 6:30 PM) & royal ambient warm uplighting after dusk',
    image: 'https://images.unsplash.com/photo-1599818817282-e30090f4e3c9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599818817282-e30090f4e3c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Antique Royal Throne', 'Handcrafted Jharokha', 'Vintage Brass Urns', 'Royal Velvet Shawls', 'Carved Wooden Chariot Wheel'],
    recommendedShoots: ['Pre-Wedding & Bridal', '25th Wedding Anniversary', 'Music Videos', 'Royal Fashion Editorial'],
    popularTime: 'Sunrise & Sunset Golden Hour',
    isPopular: true
  },
  {
    id: 'santorini-greece-alley',
    name: 'Santorini Blue & White Alley',
    category: 'Romantic & European',
    type: 'Outdoor',
    tagline: 'Authentic Cycladic Greek architecture with cobalt blue domes and vibrant bougainvillea',
    description: 'Step into the dreamy cliffside towns of Greece without boarding an international flight. Built with authentic textured whitewashed plaster, vivid Aegean blue doors, cascading magenta bougainvillea trellises, and rustic stone stairs leading to a romantic bell tower terrace.',
    dimensions: '40ft x 25ft winding cobblestone street',
    lighting: 'Crisp midday sunlight with soft diffused bounce, evening fairy lantern glow',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Cobalt Blue Window Shutters', 'Terracotta Flower Vases', 'Wrought Iron Bistro Chairs', 'Vintage White Bicycle with Basket'],
    recommendedShoots: ['Pre-Wedding Romantic', 'Western Fashion Portfolios', 'Maternity Elegance', 'Commercial Lookbooks'],
    popularTime: 'Morning (8:00 AM - 11:30 AM)',
    isPopular: true
  },
  {
    id: 'french-parisian-bistro',
    name: 'Parisian Café & Flower Market',
    category: 'Romantic & European',
    type: 'Covered Semi-Outdoor',
    tagline: 'Charming French boulangerie with striped awning, vintage bicycle & fresh blossoms',
    description: 'A cozy corner of Montmartre in Delhi. Features a chic emerald-and-gold storefront, café terrace tables, chalkboard menus in French script, vintage newspaper stands, and an abundance of fresh pastel floral carts that make every frame look straight out of a Parisian movie.',
    dimensions: '30ft x 20ft façade with seating zone',
    lighting: 'Diffused soft day light, warm bistro tungsten bulb string lights',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Vintage Pastel Bicycle', 'French Menu Chalkboard', 'Woven Wicker Flower Baskets', 'Classic Espresso Cups & Croissant Props'],
    recommendedShoots: ['Casual Pre-Wedding', 'Maternity', 'Fashion & Influencer Content', 'Couple Anniversaries'],
    popularTime: 'All Day (Weatherproof canopy)',
    isNew: true
  },
  {
    id: 'tuscan-vineyard-pergola',
    name: 'Tuscan Vineyard & Pergola',
    category: 'Romantic & European',
    type: 'Outdoor',
    tagline: 'Sun-drenched Italian pergola wrapped in lush grapevines, wine barrels & timber benches',
    description: 'Escape to the romantic countryside of Tuscany. This set features natural wooden pergolas draped with lush green vines, authentic aged oak wine barrels, terracotta planters, and warm natural earth tones that create soft, cinematic romance.',
    dimensions: '35ft x 25ft open garden terrace',
    lighting: 'Magical golden backlight filtering through leaves during late afternoon',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Aged Oak Wine Barrels', 'Wicker Picnic Basket', 'Champagne Flutes & Vintage Bottles', 'Rustic Wooden Swing with Flora'],
    recommendedShoots: ['Pre-Wedding', 'Engagement Portraits', 'Maternity', 'Anniversary Shoots'],
    popularTime: '4:00 PM - 6:30 PM'
  },
  {
    id: 'neon-cyberpunk-diner',
    name: 'Neon Retro 80s Diner & Arcade',
    category: 'Modern & Chic',
    type: 'Indoor AC',
    tagline: 'Vibrant neon tubes, checkerboard floors, leather booths & retro glowing signage',
    description: 'An electric indoor studio set dripping with pop culture nostalgia. Decked with glowing purple, cyan, and amber neon fixtures, a working jukebox prop, glossy leather booth seating, retro milkshakes, and vinyl records for dramatic fashion and music video cinematography.',
    dimensions: '28ft x 24ft fully air-conditioned sound-isolated studio',
    lighting: 'Customizable multi-hue RGB neon lighting and DMX controllable LED strips',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Vintage 1950s Jukebox', 'Neon \'Crazy In Love\' Signs', 'Checkerboard Roller Skates', 'Retro Telephone Receiver'],
    recommendedShoots: ['Music Videos', 'Gen-Z Pre-Wedding Shoots', 'High Fashion & Editorial', 'Album Covers'],
    popularTime: 'Available round-the-clock (Indoor Controlled Studio)',
    isPopular: true
  },
  {
    id: 'boho-gypsy-camp',
    name: 'Bohemian Desert Tipi & Gypsy Camp',
    category: 'Bohemian & Creative',
    type: 'Outdoor',
    tagline: 'Hand-woven macramé canopies, vintage kilim rugs, fairy lights & desert tent',
    description: 'A free-spirited, whimsical oasis. Created with an 18-foot canvas tipi tent, layered antique Persian kilim rugs, macramé dreamcatchers, Moroccan floor poufs, acoustic guitar, pampas grass vases, and brass candle lanterns that evoke bohemian festival vibes.',
    dimensions: '35ft x 30ft natural lawn setup',
    lighting: 'Late afternoon warm glow and cozy twilight bonfire lighting',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Pampas Grass Plumes', 'Handwoven Macrame Tipi', 'Acoustic Guitar', 'Moroccan Brass Lanterns', 'Vintage Kilim Rugs'],
    recommendedShoots: ['Boho Pre-Wedding', 'Maternity Bliss', 'Baby & Family', 'Fashion Editorial'],
    popularTime: '3:30 PM - 7:00 PM',
    isPopular: true
  },
  {
    id: 'rustic-brick-factory',
    name: 'Industrial Brick Loft & Warehouse',
    category: 'Rustic & Vintage',
    type: 'Covered Semi-Outdoor',
    tagline: 'Weathered red exposed brick, steel beams, Edison bulbs & chesterfield sofa',
    description: 'A raw, moody industrial masterpiece. Inspired by historic Manhattan and London warehouses, featuring rugged authentic exposed kiln-fired brick walls, black iron girders, hanging filament Edison bulbs, a distressed leather Chesterfield sofa, and factory windows.',
    dimensions: '40ft x 25ft with 16ft ceiling',
    lighting: 'Directional dramatic side key-light with warm filament glow',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Vintage Brown Chesterfield Leather Couch', 'Hanging Exposed Filament Bulbs', 'Distressed Steel Oil Drums', 'Antique Typewriter'],
    recommendedShoots: ['Pre-Wedding Western Glamour', 'Menswear Fashion', 'Rock / Indie Music Videos', 'Celebrity Portfolios'],
    popularTime: 'Anytime (Controlled overhead cover)'
  },
  {
    id: 'punjabi-village-pind',
    name: 'Vibrant Punjabi Pind & Haveli Courtyard',
    category: 'Rustic & Vintage',
    type: 'Outdoor',
    tagline: 'Authentic rustic village ambiance with chaarpai cots, mud plaster, chulha & vibrant phulkari',
    description: 'Celebrate rooted desi folklore and earthy Punjabi warmth. Featuring hand-textured mud huts, bright yellow marigold strings, authentic woven cotton chaarpai, wooden churners, brass lassi glasses, painted tractor props, and a rustic well courtyard.',
    dimensions: '50ft x 40ft expansive village set',
    lighting: 'Natural bright outdoor sunlight; sunset warm golden wash',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Traditional Woven Chaarpai', 'Vintage Bull Cart Wheel', 'Phulkari Dupatta Backdrop', 'Brass Utensils & Pitchers', 'Painted Village Tractor'],
    recommendedShoots: ['Punjabi Pre-Wedding & Kurta Suits', 'Family & Friends Gathering', 'Folk Music Videos', '25th Anniversary Desi Shoots'],
    popularTime: 'Morning (7:00 AM - 11:00 AM) & Golden Hour'
  },
  {
    id: 'glass-conservatory-greenhouse',
    name: 'The Glass Botanical Conservatory',
    category: 'Nature & Outdoor',
    type: 'Covered Semi-Outdoor',
    tagline: 'Victorian black iron glasshouse with exotic tropical ferns, monstera & floral archway',
    description: 'A verdant paradise filled with natural daylight. Built with towering glass panes and black steel framing, this lush botanical sanctuary houses fiddle-leaf figs, hanging orchids, giant monstera, and an ornate wrought-iron gazebo surrounded by blooming hydrangeas.',
    dimensions: '36ft x 28ft glass structure with 18ft peaked glass ceiling',
    lighting: 'Soft 360-degree diffused natural light—photographers dream for creamy skin tones',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Floral Garland Swing', 'Antique Brass Watering Cans', 'White Victorian Wicker Lounger', 'Terracotta Topiary Planters'],
    recommendedShoots: ['Maternity Miracle', 'Baby & Toddler Shoots', 'Pastel Pre-Wedding Gowns', 'Bridal Portraits'],
    popularTime: 'Morning to Mid-Afternoon',
    isPopular: true
  },
  {
    id: 'moroccan-riad-courtyard',
    name: 'Moroccan Riad & Mosaic Oasis',
    category: 'Royal & Heritage',
    type: 'Outdoor',
    tagline: 'Intricate geometric tilework, keyhole Islamic arches, carved stucco & central fountain',
    description: 'Transport your shoot to the mystical riads of Marrakech. Features hand-painted terracotta zellige tiles in cobalt and emerald, scalloped plaster horseshoe arches, a serene shallow reflection pool, and towering brass lanterns casting intricate filigree shadows.',
    dimensions: '32ft x 32ft enclosed tiled courtyard',
    lighting: 'Filtered top light with dramatic late-afternoon shadow patterns',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Filigree Brass Pierced Lanterns', 'Velvet Moroccan Floor Cushions', 'Carved Cedar Wood Doorways', 'Copper Tea Trays with Mint Glasses'],
    recommendedShoots: ['High-Fashion Haute Couture', 'Pre-Wedding Royal Concept', 'Jewellery & Bridal Brand Campaigns'],
    popularTime: '11:00 AM - 4:00 PM'
  },
  {
    id: 'vintage-convertible-route66',
    name: 'Retro Americana & Vintage Car',
    category: 'Modern & Chic',
    type: 'Outdoor',
    tagline: 'Classic 1960s mint convertible, retro route signs, open road setting & vintage fuel pump',
    description: 'Channel classic Hollywood vintage glamour. Starring a photogenic mint-green classic open-top roadster, an authentic retro gasoline pump, distressed Route 66 signage, and open skies that give every frame timeless cinematic charm.',
    dimensions: '45ft x 30ft asphalt & gravel roadway',
    lighting: 'Stunning open horizon sunset and night headlight glow effects',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['1960s Classic Convertible Car', 'Retro Chrome Fuel Pump', 'Vintage Leather Driving Gloves & Aviators', 'Classic Travel Luggage Trunks'],
    recommendedShoots: ['Pre-Wedding Western Romantic', 'Men\'s & Women\'s Fashion', 'Commercial Automobiles & Apparel'],
    popularTime: 'Golden Hour (4:30 PM - 6:30 PM)',
    isPopular: true
  },
  {
    id: 'fairy-light-tunnel-canopy',
    name: 'Starlight Fairy Light Tunnel',
    category: 'Romantic & European',
    type: 'Covered Semi-Outdoor',
    tagline: 'Thousands of cascading warm LED fairy lights, floral trellis & romantic pathway',
    description: 'Pure enchantment after twilight. A 60-foot covered arched walkway woven with over 5,000 warm starlight LEDs, weeping wisteria blossoms, and floor lanterns that create an ethereal, breathtaking bokeh background for couples.',
    dimensions: '60ft long x 12ft wide arched tunnel',
    lighting: 'Controlled twilight and dark night ambient lighting with deep bokeh highlights',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80'
    ],
    featuredProps: ['Warm LED Cascading Curtains', 'White Wisteria Floral Garlands', 'Floor Hurricane Glass Candleholders', 'Romantic Wooden Bench'],
    recommendedShoots: ['Pre-Wedding Night Specials', 'Evening Gown Portraits', 'Anniversary Shoots'],
    popularTime: 'Twilight & Night (6:30 PM - 10:00 PM)',
    isPopular: true
  }
];

export const SET_CATEGORIES = [
  'All Sets',
  'Royal & Heritage',
  'Romantic & European',
  'Rustic & Vintage',
  'Modern & Chic',
  'Nature & Outdoor',
  'Bohemian & Creative'
] as const;
