import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BookingRecord {
  id: string;
  referenceCode: string;
  createdAt: string;
  clientName: string;
  email: string;
  phone: string;
  shootType: string;
  packageId: string;
  packageName: string;
  preferredDate: string;
  preferredSlot: string;
  guestCount: number;
  selectedSets: string[];
  selectedAddons: string[];
  estimatedTotal: number;
  notes?: string;
  status: 'Confirmed' | 'Pending Review' | 'Inquiry Received';
}

interface AppContextType {
  favoriteSetIds: string[];
  toggleFavoriteSet: (id: string) => void;
  isSetFavorite: (id: string) => boolean;

  favoriteGalleryIds: string[];
  toggleFavoriteGallery: (id: string) => void;
  isGalleryFavorite: (id: string) => boolean;

  bookings: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, 'id' | 'referenceCode' | 'createdAt' | 'status'>) => BookingRecord;
  removeBooking: (id: string) => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;
  hideToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  FAVORITE_SETS: 'psp_fav_sets_v1',
  FAVORITE_GALLERY: 'psp_fav_gallery_v1',
  BOOKINGS: 'psp_bookings_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Favorites for sets
  const [favoriteSetIds, setFavoriteSetIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITE_SETS);
      return saved ? JSON.parse(saved) : ['royal-heritage-palace', 'santorini-greece-alley'];
    } catch {
      return ['royal-heritage-palace', 'santorini-greece-alley'];
    }
  });

  // Favorites for gallery
  const [favoriteGalleryIds, setFavoriteGalleryIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITE_GALLERY);
      return saved ? JSON.parse(saved) : ['gal-1', 'gal-3'];
    } catch {
      return ['gal-1', 'gal-3'];
    }
  });

  // Bookings list
  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITE_SETS, JSON.stringify(favoriteSetIds));
    } catch (e) {
      console.warn('LocalStorage save failed for favorite sets', e);
    }
  }, [favoriteSetIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITE_GALLERY, JSON.stringify(favoriteGalleryIds));
    } catch (e) {
      console.warn('LocalStorage save failed for favorite gallery', e);
    }
  }, [favoriteGalleryIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.warn('LocalStorage save failed for bookings', e);
    }
  }, [bookings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3500);
  };

  const hideToast = () => setToastMessage(null);

  const toggleFavoriteSet = (id: string) => {
    setFavoriteSetIds(prev => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter(x => x !== id) : [...prev, id];
      showToast(exists ? 'Removed backdrop from favorites' : 'Saved backdrop to your favorites board');
      return updated;
    });
  };

  const isSetFavorite = (id: string) => favoriteSetIds.includes(id);

  const toggleFavoriteGallery = (id: string) => {
    setFavoriteGalleryIds(prev => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter(x => x !== id) : [...prev, id];
      showToast(exists ? 'Removed inspiration from favorites' : 'Saved photo to your moodboard');
      return updated;
    });
  };

  const isGalleryFavorite = (id: string) => favoriteGalleryIds.includes(id);

  const addBooking = (data: Omit<BookingRecord, 'id' | 'referenceCode' | 'createdAt' | 'status'>): BookingRecord => {
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const newBooking: BookingRecord = {
      ...data,
      id: `bk-${Date.now()}`,
      referenceCode: `PSP-${randomHex}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    setBookings(prev => [newBooking, ...prev]);
    showToast(`Slot reserved! Reference #${newBooking.referenceCode}`);
    return newBooking;
  };

  const removeBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
    showToast('Reservation inquiry removed');
  };

  return (
    <AppContext.Provider
      value={{
        favoriteSetIds,
        toggleFavoriteSet,
        isSetFavorite,
        favoriteGalleryIds,
        toggleFavoriteGallery,
        isGalleryFavorite,
        bookings,
        addBooking,
        removeBooking,
        toastMessage,
        showToast,
        hideToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
