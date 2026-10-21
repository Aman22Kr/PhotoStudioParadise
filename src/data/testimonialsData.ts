export interface Testimonial {
  id: string;
  name: string;
  role: string;
  shootType: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
  favoriteSet: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav & Simran Malhotra',
    role: 'Newlywed Couple, South Delhi',
    shootType: 'Pre-Wedding (Gold Package)',
    rating: 5,
    review: 'PhotoStudioParadise made our pre-wedding shoot feel like a Bollywood movie set! We shot at 6 completely distinct themes—from the Rajasthani Royal Palace to the Santorini steps and twilight fairy lights—all within walking distance. The private AC makeup room with full vanity mirrors made 5 outfit changes super relaxed.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '2 weeks ago',
    favoriteSet: 'The Royal Rajputana Palace'
  },
  {
    id: 'test-2',
    name: 'Vikram & Radhika Sethi',
    role: 'Expectant Parents, Gurugram',
    shootType: 'Maternity Shoot (Silver Package)',
    rating: 5,
    review: 'As an expecting mom in week 31, comfort was my #1 priority. The team provided a wheelchair between sets, comfortable resting couches, and the glass botanical conservatory gave the softest natural daylight. Highly recommend their VIP makeup room upgrade!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'Last month',
    favoriteSet: 'The Glass Botanical Conservatory'
  },
  {
    id: 'test-3',
    name: 'Rohit Khandelwal Studios',
    role: 'Wedding & Editorial Cinematographer',
    shootType: 'Commercial & Pre-Wedding Shoots (Frequent Client)',
    rating: 5,
    review: 'As a professional filmmaker, what I respect most about PhotoStudioParadise is the technical attention to lighting. Every set has dedicated 3-phase power, high ceiling clearance for gimbals/jibs, and genuine textures. Their Qutabgarh location gives you clean horizon sunsets without Delhi city pollution.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '3 weeks ago',
    favoriteSet: 'Industrial Brick Loft & Neon Diner'
  },
  {
    id: 'test-4',
    name: 'Sunita & Harsh Vardhan Goyal',
    role: '25th Wedding Anniversary Couple, Noida',
    shootType: 'Silver Jubilee Celebration',
    rating: 5,
    review: 'Our children booked this for our 25th wedding anniversary. Recreating our traditional bridal photos at the grand palace and having tea at the in-house cafe with our family was unforgettable. The staff treated us with immense warmth and respect.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: '1 month ago',
    favoriteSet: 'The Royal Rajputana Palace'
  }
];
