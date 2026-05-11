import { create } from 'zustand';

export interface Verse {
  id: number;
  surahId: number;
  text: string;
  translation: string;
  transliteration?: string;
}

export interface Surah {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: 'meccan' | 'medinan';
  total_verses: number;
}

interface AppState {
  // Current selection
  currentSurah: Surah | null;
  currentVerses: Verse[];
  selectedVerse: Verse | null;
  
  // Search
  searchQuery: string;
  searchResults: any[];
  
  // Filters
  selectedTheme: string | null;
  
  // UI state
  sidebarOpen: boolean;
  detailOpen: boolean;
  isLoading: boolean;
  
  // Actions
  setCurrentSurah: (surah: Surah | null) => void;
  setCurrentVerses: (verses: Verse[]) => void;
  setSelectedVerse: (verse: Verse | null) => void;
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: any[]) => void;
  setSelectedTheme: (theme: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  setDetailOpen: (open: boolean) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentSurah: null,
  currentVerses: [],
  selectedVerse: null,
  searchQuery: '',
  searchResults: [],
  selectedTheme: null,
  sidebarOpen: false,
  detailOpen: false,
  isLoading: false,
  
  setCurrentSurah: (surah) => set({ currentSurah: surah }),
  setCurrentVerses: (verses) => set({ currentVerses: verses }),
  setSelectedVerse: (verse) => set({ selectedVerse: verse, detailOpen: !!verse }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSearchResults: (results) => set({ searchResults: results }),
  setSelectedTheme: (theme) => set({ selectedTheme: theme }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setDetailOpen: (open) => set({ detailOpen: open }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
