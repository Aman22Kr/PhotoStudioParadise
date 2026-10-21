export interface FAQItem {
  id: string;
  category: 'Booking & Timing' | 'Sets & Facilities' | 'Equipment & Props' | 'Food & Cafe' | 'Policies & Rescheduling';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Booking & Timing',
    question: 'How far in advance should we book our photoshoot slot?',
    answer: 'Weekend slots (Saturdays and Sundays) and the popular autumn-winter wedding season (October to March) book out 3 to 6 weeks in advance. We recommend reserving your preferred date early. Weekday bookings can often be secured 1 to 2 weeks ahead.'
  },
  {
    id: 'faq-2',
    category: 'Booking & Timing',
    question: 'What are the studio operating hours?',
    answer: 'We operate 7 days a week from 6:00 AM to 10:00 PM. We offer dedicated Morning / Sunrise shifts (6:00 AM - 2:00 PM), Afternoon / Golden Hour shifts (12:00 PM - 8:00 PM), and Full-Day Sunrise-to-Night shifts (6:00 AM - 6:00 PM or 10:00 AM - 10:00 PM).'
  },
  {
    id: 'faq-3',
    category: 'Sets & Facilities',
    question: 'Where is PhotoStudioParadise located and how do we reach there?',
    answer: 'PhotoStudioParadise is located at Plot Number 308, Nearest Main Bus Stand, Village Qutabgarh, Delhi-110039. It is conveniently accessible via Outer Ring Road / Rohtak Road with ample private on-site parking for cars and production vans.'
  },
  {
    id: 'faq-4',
    category: 'Sets & Facilities',
    question: 'Are the makeup and changing rooms air-conditioned?',
    answer: 'Yes! All our green rooms and private makeup suites are fully air-conditioned, equipped with professional Hollywood backlit mirrors, garment hanging racks, steam irons, full-length mirrors, and clean private restrooms.'
  },
  {
    id: 'faq-5',
    category: 'Sets & Facilities',
    question: 'Can we bring our own photographer or makeup artist (MUA)?',
    answer: 'Yes, absolutely. PhotoStudioParadise is a dedicated luxury studio location where you bring your chosen photography, cinematography, and styling team. If you do not have an artist, our concierge can share a curated list of trusted top-tier NCR professionals.'
  },
  {
    id: 'faq-6',
    category: 'Equipment & Props',
    question: 'Are props included in the package price?',
    answer: 'Yes! Over 200 authentic props—including vintage bicycles, acoustic guitars, suitcases, floral umbrellas, royal thrones, retro telephone booths, and rustic chaarpai cots—are completely free to use across the studio.'
  },
  {
    id: 'faq-7',
    category: 'Equipment & Props',
    question: 'Can we fly camera drones for aerial shots?',
    answer: 'Yes! Drone flying is permitted on all our outdoor sets with our safety clearance pass (included complimentary in the Platinum Package or available as an add-on).'
  },
  {
    id: 'faq-8',
    category: 'Food & Cafe',
    question: 'Is food and beverage available on the studio campus?',
    answer: 'Yes, we have our own in-house Paradise Cafe serving fresh gourmet coffee, tea, cold beverages, breakfast sandwiches, North Indian meals, and snacks throughout your shoot so your crew never has to leave campus.'
  },
  {
    id: 'faq-9',
    category: 'Policies & Rescheduling',
    question: 'What happens if it rains on our scheduled shoot day?',
    answer: 'In the event of unseasonal rain, we offer free rescheduling to another mutually available date, or you can switch seamlessly to our extensive indoor air-conditioned stages, glasshouse, and covered factory loft.'
  },
  {
    id: 'faq-10',
    category: 'Policies & Rescheduling',
    question: 'How do payments work for bookings?',
    answer: 'A 50% advance token reserves your exclusive time slot and green room. The remaining balance is payable upon arrival on the shoot day before entering the sets.'
  }
];
