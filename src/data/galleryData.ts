export interface GalleryItem {
  id: string;
  title: string;
  category: 'Pre-Wedding' | 'Maternity' | 'Fashion' | 'Baby' | 'Anniversary' | 'Sets & Architecture';
  imageUrl: string;
  setName: string;
  location: string;
  tags: string[];
  aspect: 'portrait' | 'landscape' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Imperial Grandeur in Rajasthani Sandstone',
    category: 'Pre-Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    setName: 'The Royal Rajputana Palace',
    location: 'Courtyard Pavilion',
    tags: ['Royal', 'Bridal', 'Sandstone', 'Lehenga'],
    aspect: 'portrait'
  },
  {
    id: 'gal-2',
    title: 'Aegean Dreams & Bougainvillea Blooms',
    category: 'Pre-Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    setName: 'Santorini Blue & White Alley',
    location: 'Cobblestone Stairs',
    tags: ['Greek', 'Santorini', 'Pastel', 'Gown'],
    aspect: 'portrait'
  },
  {
    id: 'gal-3',
    title: 'Twilight Starlight & Fairy Light Bokeh',
    category: 'Pre-Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    setName: 'Starlight Fairy Light Tunnel',
    location: 'Wisteria Arched Tunnel',
    tags: ['Night', 'Fairy Lights', 'Romantic', 'Cinematic'],
    aspect: 'landscape'
  },
  {
    id: 'gal-4',
    title: 'Botanical Sanctuary & Motherhood Glow',
    category: 'Maternity',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    setName: 'The Glass Botanical Conservatory',
    location: 'Glasshouse Interior',
    tags: ['Maternity', 'Sunlight', 'Floral', 'Greenery'],
    aspect: 'portrait'
  },
  {
    id: 'gal-5',
    title: 'Cyberpunk Neon Nights & Leather Vibes',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    setName: 'Neon Retro 80s Diner & Arcade',
    location: 'Bar Counter',
    tags: ['Neon', 'Streetwear', 'RGB', 'Editorial'],
    aspect: 'landscape'
  },
  {
    id: 'gal-6',
    title: 'Little Explorer & Pastel Vintage Wagon',
    category: 'Baby',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80',
    setName: 'Parisian Café & Flower Market',
    location: 'Pastel Flower Cart',
    tags: ['Baby', 'Milestone', 'Pastel', 'Props'],
    aspect: 'square'
  },
  {
    id: 'gal-7',
    title: 'Silver Milestone: 25 Years of Elegance',
    category: 'Anniversary',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    setName: 'The Royal Rajputana Palace',
    location: 'Throne Terrace',
    tags: ['Anniversary', 'Regal', 'Silk Saree', 'Timeless'],
    aspect: 'portrait'
  },
  {
    id: 'gal-8',
    title: 'Industrial Loft Mood & Exposed Red Brick',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    setName: 'Industrial Brick Loft & Warehouse',
    location: 'Chesterfield Lounge',
    tags: ['Industrial', 'Menswear', 'Vintage', 'Brick'],
    aspect: 'portrait'
  },
  {
    id: 'gal-9',
    title: 'Golden Hour In The Grapevines',
    category: 'Pre-Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
    setName: 'Tuscan Vineyard & Pergola',
    location: 'Vineyard Pathway',
    tags: ['Tuscan', 'Wine Barrel', 'Golden Hour', 'Casual'],
    aspect: 'landscape'
  },
  {
    id: 'gal-10',
    title: 'Desert Tipi & Bohemian Macramé Magic',
    category: 'Maternity',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    setName: 'Bohemian Desert Tipi & Gypsy Camp',
    location: 'Canvas Tipi Lawn',
    tags: ['Boho', 'Pampas', 'Lawn', 'Comfort'],
    aspect: 'portrait'
  },
  {
    id: 'gal-11',
    title: 'Open Road & 1960s Classic Convertible',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    setName: 'Retro Americana & Vintage Car',
    location: 'Highway Strip',
    tags: ['Vintage Car', 'Americana', 'Retro', 'Fashion'],
    aspect: 'landscape'
  },
  {
    id: 'gal-12',
    title: 'Rooted In Tradition: Vibrant Pind Courtyard',
    category: 'Sets & Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    setName: 'Vibrant Punjabi Pind & Haveli Courtyard',
    location: 'Mud Courtyard',
    tags: ['Pind', 'Tradition', 'Desi', 'Village'],
    aspect: 'square'
  }
];
