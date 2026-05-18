"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, X, ChevronLeft, ChevronRight, Shuffle, 
  Menu, Sparkles, Heart, Bookmark, BookmarkCheck,
  Copy, Share2, Clock, ChevronDown, ChevronUp,
  Moon, Sun, BookOpen, Home, Star, Compass, Layers, 
  Sunrise, Sunset, Mountain, PartyPopper, Zap, Flame,
  Brain, Map, Network, Target, TrendingUp, Lightbulb,
  Smile, Frown, Cloud, Angry, Meh, ThumbsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { THEMES, THEME_MAP, THEME_CATEGORIES, PARCOURS_LIST, VERSETS_HUMEUR, THEME_CONTEXTS, DEPTH_LEVELS, SPIRITUAL_JOURNEYS, DIVINE_NAME_PARCOURS, PROPHET_PARCOURS, DIVINE_NAMES, NAFS_LEVELS } from '@/data/themes';
import { MIROIR, getMiroirCount, getRandomMiroir, MiroirEntry } from '@/data/miroir';
import { toast } from 'sonner';

// CDN Base URL for Quran data
const CDN_BASE = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/fr';

// Types
interface Surah {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: 'meccan' | 'medinan';
  total_verses: number;
  miroirCount?: number;
}

interface Verse {
  id: number;
  text: string;
  translation: string;
  transliteration?: string;
}

interface SurahDetail extends Surah {
  verses: Verse[];
}

interface SearchResult {
  surahId: number;
  verseId: number;
  text: string;
  translation: string;
  transliteration?: string;
  reference: string;
  surahName: string;
  surahNameAr: string;
  surahType: string;
  totalVerses: number;
  hasMiroir?: boolean;
}

interface BookmarkData {
  reference: string;
  surahName: string;
  verseText: string;
  timestamp: number;
}

// Particles Background Component - static particles to avoid hydration issues
const ParticlesBackground = () => {
  // Use stable, deterministic positions based on index to avoid SSR/client mismatch
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      // Deterministic values based on index - no random calls
      left: `${((i * 37) % 100)}%`,
      delay: `${((i * 7) % 15)}s`,
      duration: `${15 + ((i * 11) % 15)}s`,
    })), []
  );

  return (
    <div className="particles-bg">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default function QuranMirrorPage() {
  // State
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [currentSurah, setCurrentSurah] = useState<SurahDetail | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState<'welcome' | 'surah' | 'search' | 'theme' | 'parcours' | 'context' | 'journey' | 'divineName' | 'prophet' | 'nafs' | 'intelligence' | 'cartography'>('welcome');
  const [selectedParcours, setSelectedParcours] = useState<string | null>(null);
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);
  const [selectedDivineName, setSelectedDivineName] = useState<string | null>(null);
  const [selectedProphet, setSelectedProphet] = useState<string | null>(null);
  const [selectedNafsLevel, setSelectedNafsLevel] = useState<number | null>(null);
  const [depthLevel, setDepthLevel] = useState<1 | 2 | 3>(2);
  const [bookmarks, setBookmarks] = useState<BookmarkData[]>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [readingHistory, setReadingHistory] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  // Intelligence Adaptative states
  const [currentMood, setCurrentMood] = useState<string | null>(null);
  const [themeInteractions, setThemeInteractions] = useState<Record<string, number>>({});
  const [activeHeaderTab, setActiveHeaderTab] = useState<'parcours' | 'moments' | 'voyages' | 'noms' | 'prophetes' | 'themes' | 'nafs' | 'intelligence' | 'cartographie' | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Load surahs list from CDN
  useEffect(() => {
    fetch(`${CDN_BASE}/index.json`)
      .then(res => res.json())
      .then(data => {
        // Get all miroir references and count by surah
        const miroirKeys = Object.keys(MIROIR);
        const miroirCounts: Record<number, number> = {};
        
        miroirKeys.forEach(key => {
          const surahId = parseInt(key.split(':')[0]);
          miroirCounts[surahId] = (miroirCounts[surahId] || 0) + 1;
        });
        
        // Add miroir count to each surah
        const surahsWithMiroir = data.map((s: Surah) => ({
          ...s,
          miroirCount: miroirCounts[s.id] || 0
        }));
        
        setSurahs(surahsWithMiroir);
      })
      .catch(console.error);
    
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem('quran-mirror-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
    
    // Load reading history
    const savedHistory = localStorage.getItem('quran-mirror-history');
    if (savedHistory) {
      setReadingHistory(JSON.parse(savedHistory));
    }
    
    // Load theme interactions for Intelligence
    const savedInteractions = localStorage.getItem('quran-mirror-theme-interactions');
    if (savedInteractions) {
      setThemeInteractions(JSON.parse(savedInteractions));
    }
    
    // Load current mood
    const savedMood = localStorage.getItem('quran-mirror-current-mood');
    if (savedMood) {
      setCurrentMood(savedMood);
    }
  }, []);

  // Save bookmarks when changed
  useEffect(() => {
    localStorage.setItem('quran-mirror-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Track theme interaction for Intelligence
  const trackThemeInteraction = useCallback((themeKey: string) => {
    setThemeInteractions(prev => {
      const updated = { ...prev, [themeKey]: (prev[themeKey] || 0) + 1 };
      localStorage.setItem('quran-mirror-theme-interactions', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Get time of day for recommendations
  const getTimeOfDay = useCallback(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'matin';
    if (hour >= 12 && hour < 17) return 'apres-midi';
    if (hour >= 17 && hour < 21) return 'soir';
    return 'nuit';
  }, []);

  // Get recommended verses based on mood, time, and history
  const getRecommendedVerses = useCallback((mood?: string | null, limit: number = 5) => {
    const recommendations: { reference: string; miroir: MiroirEntry; reason: string; score: number }[] = [];
    const timeOfDay = getTimeOfDay();
    
    // Mood to theme mapping
    const moodThemeMap: Record<string, string[]> = {
      'joie': ['gratitude', 'amour', 'meditation'],
      'tristesse': ['guerison', 'espoir', 'patience'],
      'angoisse': ['confiance', 'paix', 'presence'],
      'colere': ['patience', 'pardon', 'paix'],
      'gratitude': ['gratitude', 'amour', 'presence'],
      'doute': ['guidance', 'foi', 'lumiere'],
      'serenite': ['meditation', 'presence', 'paix'],
      'epreuve': ['patience', 'confiance', 'guerison']
    };
    
    // Time of day theme mapping
    const timeThemeMap: Record<string, string[]> = {
      'matin': ['espoir', 'lumiere', 'gratitude', 'force'],
      'apres-midi': ['travail', 'patience', 'guidance'],
      'soir': ['paix', 'pardon', 'meditation'],
      'nuit': ['presence', 'secret', 'lumiere', 'intimite']
    };
    
    // Get target themes based on mood and time
    const targetThemes = new Set<string>();
    if (mood && moodThemeMap[mood]) {
      moodThemeMap[mood].forEach(t => targetThemes.add(t));
    }
    timeThemeMap[timeOfDay]?.forEach(t => targetThemes.add(t));
    
    // Add user's most interacted themes
    const topThemes = Object.entries(themeInteractions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([key]) => key);
    topThemes.forEach(t => targetThemes.add(t));
    
    // Score each miroir entry
    Object.entries(MIROIR).forEach(([ref, miroir]) => {
      let score = 0;
      const reasons: string[] = [];
      
      // Check theme matches
      miroir.theme.forEach(t => {
        if (targetThemes.has(t)) {
          score += 10;
          const theme = THEME_MAP[t];
          if (theme) reasons.push(theme.label);
        }
      });
      
      // Boost for user's favorite themes
      miroir.theme.forEach(t => {
        if (topThemes.includes(t)) {
          score += 5;
        }
      });
      
      if (score > 0) {
        recommendations.push({
          reference: ref,
          miroir,
          reason: reasons.slice(0, 2).join(', '),
          score
        });
      }
    });
    
    // Sort by score and shuffle top results
    recommendations.sort((a, b) => b.score - a.score);
    const top = recommendations.slice(0, limit * 3);
    // Shuffle
    for (let i = top.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [top[i], top[j]] = [top[j], top[i]];
    }
    
    return top.slice(0, limit);
  }, [themeInteractions, getTimeOfDay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          if (showDetail) navigateVerse('prev');
          break;
        case 'ArrowRight':
          if (showDetail) navigateVerse('next');
          break;
        case 'Escape':
          if (showDetail) {
            setShowDetail(false);
          } else if (showBookmarks) {
            setShowBookmarks(false);
          } else if (searchQuery) {
            setSearchQuery('');
          }
          break;
        case 'r':
          if (!showDetail && !showBookmarks && !searchQuery) {
            goRandomMiroir();
          }
          break;
        case 'b':
          if (showDetail && selectedVerse && currentSurah) {
            toggleBookmark();
          }
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showDetail, showBookmarks, searchQuery, selectedVerse, currentSurah]);

  // Search handler - client-side search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      if (view === 'search') setView(currentSurah ? 'surah' : 'welcome');
      return;
    }

    const debounce = setTimeout(async () => {
      setIsSearching(true);
      try {
        const results: SearchResult[] = [];
        const query = searchQuery.toLowerCase();
        const miroirRefs = Object.keys(MIROIR);
        
        // Load surahs in batches for search
        const batchSize = 20;
        const surahIdsToSearch = selectedTheme 
          ? [...new Set(miroirRefs.filter(ref => MIROIR[ref].theme.includes(selectedTheme)).map(ref => parseInt(ref.split(':')[0])))]
          : Array.from({ length: 114 }, (_, i) => i + 1);
        
        // Search through surahs
        for (let i = 0; i < Math.min(surahIdsToSearch.length, batchSize); i += batchSize) {
          const batch = surahIdsToSearch.slice(i, i + batchSize);
          const surahPromises = batch.map(id => 
            fetch(`${CDN_BASE}/${id}.json`).then(r => r.json()).catch(() => null)
          );
          const surahData = await Promise.all(surahPromises);
          
          for (const surah of surahData) {
            if (!surah) continue;
            
            for (const verse of surah.verses || []) {
              const matchesQuery = 
                verse.translation?.toLowerCase().includes(query) ||
                verse.text?.includes(query) ||
                `${surah.id}:${verse.id}`.includes(query) ||
                surah.translation?.toLowerCase().includes(query);
              
              const matchesTheme = !selectedTheme || 
                (MIROIR[`${surah.id}:${verse.id}`]?.theme.includes(selectedTheme));
              
              if (matchesQuery && matchesTheme) {
                results.push({
                  surahId: surah.id,
                  verseId: verse.id,
                  text: verse.text,
                  translation: verse.translation,
                  transliteration: verse.transliteration,
                  reference: `${surah.id}:${verse.id}`,
                  surahName: surah.translation,
                  surahNameAr: surah.name,
                  surahType: surah.type,
                  totalVerses: surah.total_verses,
                  hasMiroir: !!MIROIR[`${surah.id}:${verse.id}`]
                });
              }
              
              if (results.length >= 100) break;
            }
            if (results.length >= 100) break;
          }
          if (results.length >= 100) break;
        }
        
        setSearchResults(results);
        setView('search');
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery, selectedTheme, view, currentSurah]);

  // Load surah from CDN
  const loadSurah = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${CDN_BASE}/${id}.json`);
      const data = await res.json();
      setCurrentSurah(data);
      setSelectedVerse(null);
      setShowDetail(false);
      setView('surah');
      setSidebarOpen(false);
      setSelectedTheme(null); // Clear theme when loading surah

      // Add to reading history
      const historyEntry = `${id}`;
      setReadingHistory(prev => {
        const filtered = prev.filter(h => h !== historyEntry);
        return [historyEntry, ...filtered].slice(0, 10);
      });
      localStorage.setItem('quran-mirror-history', JSON.stringify([id.toString(), ...readingHistory.filter(h => h !== id.toString())].slice(0, 10)));
    } catch (error) {
      console.error('Failed to load surah:', error);
    } finally {
      setIsLoading(false);
    }
  }, [readingHistory]);

  // Select verse
  const selectVerse = useCallback((verse: Verse) => {
    setSelectedVerse(verse);
    setShowDetail(true);
  }, []);

  // Navigate verses
  const navigateVerse = useCallback((direction: 'prev' | 'next') => {
    if (!currentSurah || !selectedVerse) return;
    
    const currentIndex = currentSurah.verses.findIndex(v => v.id === selectedVerse.id);
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    
    if (newIndex >= 0 && newIndex < currentSurah.verses.length) {
      setSelectedVerse(currentSurah.verses[newIndex]);
    }
  }, [currentSurah, selectedVerse]);

  // Random miroir
  const goRandomMiroir = useCallback(async () => {
    const ref = getRandomMiroir();
    if (!ref) return;
    
    const [surahId, verseId] = ref.split(':').map(Number);
    await loadSurah(surahId);
    
    setTimeout(() => {
      if (currentSurah) {
        const verse = currentSurah.verses.find(v => v.id === verseId);
        if (verse) selectVerse(verse);
      } else {
        // Try again after surah loads
        const checkInterval = setInterval(() => {
          if (currentSurah) {
            const verse = currentSurah.verses.find(v => v.id === verseId);
            if (verse) {
              selectVerse(verse);
              clearInterval(checkInterval);
            }
          }
        }, 100);
        setTimeout(() => clearInterval(checkInterval), 3000);
      }
    }, 500);
  }, [loadSurah, currentSurah, selectVerse]);

  // Toggle bookmark
  const toggleBookmark = useCallback(() => {
    if (!selectedVerse || !currentSurah) return;
    
    const reference = `${currentSurah.id}:${selectedVerse.id}`;
    const existingIndex = bookmarks.findIndex(b => b.reference === reference);
    
    if (existingIndex >= 0) {
      setBookmarks(prev => prev.filter((_, i) => i !== existingIndex));
      toast.success('Favori supprimé');
    } else {
      setBookmarks(prev => [...prev, {
        reference,
        surahName: currentSurah.translation,
        verseText: selectedVerse.translation.slice(0, 100) + '...',
        timestamp: Date.now()
      }]);
      toast.success('Favori ajouté');
    }
  }, [selectedVerse, currentSurah, bookmarks]);

  // Check if current verse is bookmarked
  const isBookmarked = useCallback(() => {
    if (!selectedVerse || !currentSurah) return false;
    return bookmarks.some(b => b.reference === `${currentSurah.id}:${selectedVerse.id}`);
  }, [selectedVerse, currentSurah, bookmarks]);

  // Copy verse
  const copyVerse = useCallback(() => {
    if (!selectedVerse || !currentSurah) return;
    
    const text = `${selectedVerse.text}\n\n${selectedVerse.translation}\n\n— ${currentSurah.translation} (${currentSurah.id}:${selectedVerse.id})`;
    navigator.clipboard.writeText(text);
    toast.success('Verset copié');
  }, [selectedVerse, currentSurah]);

  // Share verse
  const shareVerse = useCallback(async () => {
    if (!selectedVerse || !currentSurah) return;
    
    const text = `${selectedVerse.text}\n\n${selectedVerse.translation}\n\n— ${currentSurah.translation} (${currentSurah.id}:${selectedVerse.id})`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Le Coran du Miroir',
          text: text
        });
      } catch {
        // User cancelled
      }
    } else {
      copyVerse();
    }
  }, [selectedVerse, currentSurah, copyVerse]);

  // Get miroir data
  const getMiroirData = (surahId: number, verseId: number) => {
    return MIROIR[`${surahId}:${verseId}`];
  };

  // Filter verses by theme
  const getFilteredVerses = useCallback(() => {
    if (!currentSurah) return [];
    if (!selectedTheme) return currentSurah.verses;
    
    return currentSurah.verses.filter(v => {
      const miroir = getMiroirData(currentSurah.id, v.id);
      return miroir && miroir.theme.includes(selectedTheme);
    });
  }, [currentSurah, selectedTheme]);

  // Get all verses for a theme across all surahs
  const getThemeVerses = useCallback((themeKey: string) => {
    const results: { surahId: number; verseId: number; reference: string; miroir: MiroirEntry }[] = [];

    Object.entries(MIROIR).forEach(([ref, miroir]) => {
      if (miroir.theme.includes(themeKey)) {
        const [surahId, verseId] = ref.split(':').map(Number);
        results.push({ surahId, verseId, reference: ref, miroir });
      }
    });

    // Sort by surah and verse
    return results.sort((a, b) => {
      if (a.surahId !== b.surahId) return a.surahId - b.surahId;
      return a.verseId - b.verseId;
    });
  }, []);

  // Check if verse has miroir
  const hasMiroir = (surahId: number, verseId: number) => {
    return !!MIROIR[`${surahId}:${verseId}`];
  };

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollArea = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        const { scrollTop, scrollHeight, clientHeight } = scrollArea;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const viewport = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (viewport) {
      viewport.addEventListener('scroll', handleScroll);
      return () => viewport.removeEventListener('scroll', handleScroll);
    }
  }, [showDetail]);

  // Render sidebar
  const renderSidebar = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-border flex-shrink-0">
        <h2 className="font-title text-xs font-semibold text-gold uppercase tracking-wider">
          Sourates
        </h2>
        <p className="text-[10px] text-muted-foreground mt-1">
          114 sourates — Coran intégral
        </p>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full p-2">
        <div className="space-y-1">
          {surahs.map((surah) => (
            <motion.button
              key={surah.id}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => loadSurah(surah.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border border-transparent transition-all text-left group
                ${currentSurah?.id === surah.id 
                  ? 'bg-gold-dim border-gold/25 text-foreground' 
                  : 'hover:bg-white/[0.02] text-foreground'}`}
            >
              <span className={`w-8 h-8 flex items-center justify-center rounded-md text-xs font-medium flex-shrink-0
                ${currentSurah?.id === surah.id 
                  ? 'bg-gold/20 text-gold' 
                  : 'bg-white/[0.04] text-muted-foreground'}`}>
                {surah.id}
              </span>
              <div className="flex-1 min-w-0">
                <span className="block text-sm truncate">{surah.translation}</span>
                <div className="flex items-center gap-1 mt-0.5 text-[10px] text-muted-foreground">
                  <span>{surah.transliteration}</span>
                  <span>•</span>
                  <span>{surah.total_verses} v.</span>
                  {surah.miroirCount && surah.miroirCount > 0 && (
                    <span className="text-mirror/60 ml-1">✦ {surah.miroirCount}</span>
                  )}
                </div>
              </div>
              <span className="font-arabic text-base text-gold/70 group-hover:text-gold transition-colors">
                {surah.name}
              </span>
            </motion.button>
          ))}
        </div>
      </ScrollArea>
      </div>
    </div>
  );

  // Render welcome screen
  const renderWelcome = () => {
    // Get daily verse based on day of year
    const getDailyVerse = () => {
      const miroirKeys = Object.keys(MIROIR);
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
      const index = dayOfYear % miroirKeys.length;
      return miroirKeys[index];
    };
    
    const dailyRef = getDailyVerse();
    const dailyMiroir = MIROIR[dailyRef];
    
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-lg"
          >
            {/* Bismillah symbol */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold-dim via-mirror/10 to-purple/10 border border-gold/15 flex items-center justify-center shadow-lg shadow-gold/5 animate-pulse-glow"
            >
              <span className="font-arabic text-4xl text-gold">﷽</span>
            </motion.div>
            
            {/* Gold divider */}
            <div className="gold-divider max-w-[220px] mx-auto mb-6">
              <span></span>
              <div className="dot"></div>
              <div className="dot-sm"></div>
              <div className="dot"></div>
              <span></span>
            </div>
            
            {/* Title */}
            <h1 className="font-title text-3xl font-bold mb-3 bg-gradient-to-r from-gold via-mirror to-purple bg-clip-text text-transparent">
              Le Coran du Miroir
            </h1>
            
            <p className="text-sm text-muted-foreground italic leading-relaxed mb-8">
              Le Coran ne se lit pas — il se contemple.<br />
              Chaque verset est un miroir qui révèle une couche de ton âme.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-10 mb-8">
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                className="cursor-default group"
              >
                <div className="text-2xl font-bold text-gold group-hover:text-gold/80 transition-colors">6236</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">versets</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                className="cursor-default group"
              >
                <div className="text-2xl font-bold text-mirror group-hover:text-mirror/80 transition-colors">114</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">sourates</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, y: -2 }}
                className="cursor-default group"
              >
                <div className="text-2xl font-bold text-purple group-hover:text-purple/80 transition-colors">{getMiroirCount()}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">miroirisés</div>
              </motion.div>
            </div>
            
            {/* Daily Verse Card */}
            {dailyMiroir && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8 p-5 rounded-2xl border border-gold/15 bg-gradient-to-br from-gold-dim/30 via-transparent to-purple/5"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-[11px] font-medium text-gold uppercase tracking-wider">Verset du jour</span>
                  <span className="text-[10px] text-muted-foreground">{dailyRef}</span>
                </div>
                <p className="text-sm text-foreground/80 italic leading-relaxed line-clamp-3 mb-3">
                  {dailyMiroir.mirrorVersion.slice(0, 200)}...
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    const [surahId, verseId] = dailyRef.split(':').map(Number);
                    await loadSurah(surahId);
                  }}
                  className="text-gold hover:text-gold/80 hover:bg-gold/10"
                >
                  Contempler ce verset →
                </Button>
              </motion.div>
            )}
            
            {/* Random button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-6"
            >
              <Button
                onClick={goRandomMiroir}
                className="bg-gold-dim border border-gold/25 text-gold hover:bg-gold/20 transition-all px-6"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Verset miroir aléatoire
              </Button>
            </motion.div>
            
            {/* Reading history */}
            {readingHistory.length > 0 && (
              <div className="mb-6">
                <p className="text-[11px] text-muted-foreground mb-2 flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> Récemment lus
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {readingHistory.slice(0, 5).map((ref, i) => {
                    const surah = surahs.find(s => s.id === parseInt(ref));
                    if (!surah) return null;
                    return (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => loadSurah(parseInt(ref))}
                        className="px-3 py-1.5 text-[10px] rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-border/50 hover:border-gold/30 text-muted-foreground hover:text-foreground transition-all"
                      >
                        {surah.translation}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}
            
            <p className="text-[10px] text-muted-foreground/60">
              Traduction : Muhammad Hamidullah • Texte : Uthmani vocalisé
            </p>
          </motion.div>
        </div>
      </div>
    );
  };

  // Render verse list
  const renderVerseList = () => {
    if (!currentSurah) return null;
    
    const verses = getFilteredVerses();
    
    return (
      <div className="flex-1 flex flex-col min-h-0 overflow-auto">
        <div className="max-w-3xl mx-auto p-6">
        {/* Surah header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="font-arabic text-3xl text-gold mb-2">{currentSurah.name}</div>
          <div className="font-title text-lg text-foreground/80">{currentSurah.translation}</div>
          <div className="text-xs text-muted-foreground mt-1">
            {currentSurah.transliteration} • {currentSurah.type === 'meccan' ? 'Mécquoise' : 'Médinoise'} • {currentSurah.total_verses} versets
          </div>
          
          <div className="gold-divider max-w-[180px] mx-auto mt-4">
            <span></span>
            <div className="dot"></div>
            <div className="dot-sm"></div>
            <div className="dot"></div>
            <span></span>
          </div>
        </motion.div>
        
        {/* Verses */}
        {verses.length === 0 ? (
          <p className="text-center text-muted-foreground py-10">
            Aucun verset miroir avec ce thème dans cette sourate.
          </p>
        ) : (
          <div className="space-y-2">
            {verses.map((verse, index) => {
              const miroir = getMiroirData(currentSurah.id, verse.id);
              const isBookmarkedVerse = bookmarks.some(b => b.reference === `${currentSurah.id}:${verse.id}`);
              
              return (
                <motion.button
                  key={verse.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.02, 0.5) }}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  onClick={() => selectVerse(verse)}
                  className={`w-full text-left p-4 rounded-xl border transition-all group relative
                    ${selectedVerse?.id === verse.id 
                      ? 'bg-gold-dim border-gold/20 shadow-lg shadow-gold/5' 
                      : 'border-transparent hover:bg-white/[0.02] hover:border-border/50'}`}
                >
                  {/* Bookmark indicator */}
                  {isBookmarkedVerse && (
                    <div className="absolute top-3 right-3 text-gold/50">
                      <BookmarkCheck className="w-4 h-4" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-7 h-7 flex items-center justify-center rounded-full text-[11px]
                      ${selectedVerse?.id === verse.id 
                        ? 'bg-gold/20 text-gold' 
                        : 'bg-white/[0.04] text-muted-foreground'}`}>
                      {verse.id}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {currentSurah.id}:{verse.id}
                    </span>
                    {miroir && (
                      <span className="ml-auto flex items-center gap-1 text-[10px] text-mirror/60">
                        <Sparkles className="w-3 h-3" />
                        Miroir
                      </span>
                    )}
                  </div>
                  
                  <div className="font-arabic text-xl leading-relaxed text-right mb-3">
                    {verse.text}
                  </div>
                  
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {verse.translation}
                  </div>
                  
                  {miroir && miroir.theme.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {miroir.theme.map(t => {
                        const theme = THEME_MAP[t];
                        if (!theme) return null;
                        return (
                          <span 
                            key={t}
                            className="theme-badge"
                            style={{ 
                              background: theme.bg, 
                              borderColor: theme.border, 
                              color: theme.color 
                            }}
                          >
                            {theme.ar} {theme.label}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        )}
        </div>
      </div>
    );
  };

  // Render search results
  const renderSearchResults = () => (
    <div className="flex-1 flex flex-col min-h-0 overflow-auto">
      <div className="max-w-2xl mx-auto p-6">
      <p className="text-sm text-muted-foreground mb-4">
        {searchResults.length} résultat{searchResults.length !== 1 ? 's' : ''} pour « {searchQuery} »
      </p>
      
      {searchResults.length === 0 ? (
        <p className="text-center text-muted-foreground py-10">
          Aucun verset trouvé.
        </p>
      ) : (
        <div className="space-y-2">
          {searchResults.map((result, index) => (
            <motion.button
              key={result.reference}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => loadSurah(result.surahId)}
              className="w-full text-left p-4 rounded-lg border border-border bg-card hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center gap-2 mb-2 text-xs">
                <span className="text-gold/70">{result.reference}</span>
                <span className="text-muted-foreground">{result.surahName}</span>
                {result.hasMiroir && (
                  <span className="ml-auto text-mirror/60">✦ Miroir</span>
                )}
              </div>
              <div className="font-arabic text-base text-right mb-2">{result.text}</div>
              <div className="text-xs text-muted-foreground line-clamp-2">{result.translation}</div>
            </motion.button>
          ))}
        </div>
      )}
      </div>
    </div>
  );

  // Render parcours view
  const renderParcoursView = () => {
    const parcours = PARCOURS_LIST?.find(p => p.key === selectedParcours);
    if (!parcours) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Parcours non trouvé</p>
        </div>
      );
    }

    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Parcours header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-3xl mb-1">{parcours.icon}</div>
            <div className="font-title text-base text-foreground/80">{parcours.title}</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {parcours.verses.length} versets • {parcours.description}
            </div>
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-3 mb-3">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-2 py-1 rounded-full text-[10px] border transition-all flex items-center gap-1
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>N{level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses list */}
        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-3 p-4 pr-4 max-w-3xl mx-auto">
            {parcours.verses.map((verseItem, index) => {
              const miroir = MIROIR[verseItem.reference];
              if (!miroir) return null;

              const [surahId, verseId] = verseItem.reference.split(':').map(Number);
              const surah = surahs.find(s => s.id === surahId);

              return (
                <motion.div
                  key={verseItem.reference}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold/10 text-gold">
                      {verseItem.reference}
                    </span>
                    {verseItem.title && (
                      <span className="text-xs text-foreground/80 font-medium">{verseItem.title}</span>
                    )}
                    <span className="text-[10px] text-muted-foreground">
                      {surah?.translation}
                    </span>
                  </div>

                  {/* Level 1: Simple verse */}
                  {depthLevel >= 1 && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {miroir.mirrorVersion}
                    </p>
                  )}

                  {/* Level 2: Miroir */}
                  {depthLevel >= 2 && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {miroir.reflection}
                    </p>
                  )}

                  {/* Level 3: 6 Tajalli */}
                  {depthLevel >= 3 && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-[10px] text-muted-foreground mb-2 font-medium">Les 6 Regards du Tajalli</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-border/30">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span style={{ color: t.color }}>◈</span>
                              <span className="text-[10px] font-medium" style={{ color: t.color }}>{t.label}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await loadSurah(surahId);
                        const checkAndSelect = () => {
                          if (currentSurah) {
                            const verse = currentSurah.verses.find(v => v.id === verseId);
                            if (verse) {
                              selectVerse(verse);
                              return true;
                            }
                          }
                          return false;
                        };
                        if (!checkAndSelect()) {
                          const interval = setInterval(() => {
                            if (checkAndSelect()) clearInterval(interval);
                          }, 100);
                          setTimeout(() => clearInterval(interval), 3000);
                        }
                      }}
                      className="text-[10px] h-6"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Contempler
                    </Button>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render context view (Matin/Soir/Épreuve/Joie)
  const renderContextView = () => {
    const context = THEME_CONTEXTS?.find(c => c.key === selectedContext);
    if (!context) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Contexte non trouvé</p>
        </div>
      );
    }

    // Get all verses for the themes in this context
    const contextVerses: { reference: string; miroir: MiroirEntry; themeKey: string }[] = [];
    
    Object.entries(MIROIR).forEach(([ref, miroir]) => {
      // Check if any of the context themes match this verse's themes
      const matchingTheme = context.themes.find(t => miroir.theme.includes(t));
      if (matchingTheme) {
        contextVerses.push({ reference: ref, miroir, themeKey: matchingTheme });
      }
    });

    // Shuffle with proper randomization
    const shuffled = [...contextVerses].sort(() => Math.random() - 0.5).slice(0, 20);

    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Context header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-3xl mb-1">{context.icon}</div>
            <div className="font-title text-base text-foreground/80">{context.title}</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {context.description}
            </div>
            <div className="text-[10px] text-muted-foreground/60 mt-1">
              {contextVerses.length} versets • {shuffled.length} affichés
            </div>

            {/* Themes badges */}
            <div className="flex justify-center gap-1.5 mt-2 flex-wrap">
              {context.themes.map(t => {
                const theme = THEME_MAP[t];
                if (!theme) return null;
                return (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-[9px] border"
                    style={{ background: theme.bg, borderColor: theme.border, color: theme.color }}
                  >
                    {theme.ar} {theme.label}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-3 mb-3">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-2 py-1 rounded-full text-[10px] border transition-all flex items-center gap-1
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>N{level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses */}
        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-3 p-4 pr-4 max-w-3xl mx-auto">
            {shuffled.length === 0 ? (
              <p className="text-center text-muted-foreground py-10">
                Aucun verset trouvé pour ce contexte.
              </p>
            ) : (
              shuffled.map((item, index) => {
                const surah = surahs.find(s => s.id === parseInt(item.reference.split(':')[0]));
                const theme = THEME_MAP[item.themeKey];

                return (
                  <motion.div
                    key={item.reference + '-' + index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.5) }}
                    className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                        style={{ background: theme?.bg, color: theme?.color }}>
                        {item.reference}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{surah?.translation}</span>
                    </div>

                    {depthLevel >= 1 && (
                      <p className="text-sm text-foreground/80 leading-relaxed">{item.miroir.mirrorVersion}</p>
                    )}

                    {depthLevel >= 2 && (
                      <p className="text-xs text-muted-foreground leading-relaxed mt-2">{item.miroir.reflection}</p>
                    )}

                    {depthLevel >= 3 && (
                      <div className="grid grid-cols-2 gap-1.5 mt-3 pt-3 border-t border-border/30">
                        {item.miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-1.5 rounded bg-white/[0.02]">
                            <span className="text-[10px] font-medium" style={{ color: t.color }}>{t.label}</span>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })
            )}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render theme verses view
  const renderThemeVerses = () => {
    if (!selectedTheme) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Thème non trouvé</p>
        </div>
      );
    }
    const theme = THEME_MAP[selectedTheme];
    if (!theme) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Thème non trouvé</p>
        </div>
      );
    }

    const themeVerses = getThemeVerses(selectedTheme);

    return (
      <div className="flex-1 flex flex-col min-h-0">
        {/* Theme header */}
        <div className="p-6 pb-0 text-center flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="font-arabic text-3xl mb-2" style={{ color: theme.color }}>{theme.ar}</div>
            <div className="font-title text-lg text-foreground/80">{theme.label}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {themeVerses.length} verset{themeVerses.length !== 1 ? 's' : ''} miroir
            </div>

            {/* Sub-themes */}
            {theme.subThemes && theme.subThemes.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {theme.subThemes.map(sub => (
                  <span
                    key={sub.key}
                    className="px-2 py-0.5 rounded-full text-[10px] bg-white/[0.03] border border-border/50 text-muted-foreground"
                    title={sub.description}
                  >
                    {sub.ar} {sub.label}
                  </span>
                ))}
              </div>
            )}

            <div className="gold-divider max-w-[180px] mx-auto mt-4">
              <span></span>
              <div className="dot"></div>
              <div className="dot-sm"></div>
              <div className="dot"></div>
              <span></span>
            </div>
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-6 mb-4">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-3 py-1.5 rounded-full text-[10px] border transition-all flex items-center gap-1.5
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>Niveau {level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses list with scroll */}
        <div className="flex-1 min-h-0 overflow-hidden px-6 pb-6">
          <ScrollArea className="h-full">
            <div className="space-y-3 pr-4 max-w-3xl mx-auto">
            {themeVerses.map((item, index) => {
              const surah = surahs.find(s => s.id === item.surahId);
              const isBookmarkedVerse = bookmarks.some(b => b.reference === item.reference);

              return (
                <motion.div
                  key={item.reference}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.02, 0.5) }}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                      style={{ background: theme.bg, color: theme.color }}>
                      {item.reference}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {surah?.translation} ({surah?.name})
                    </span>
                    {isBookmarkedVerse && (
                      <BookmarkCheck className="w-4 h-4 ml-auto text-gold/50" />
                    )}
                  </div>

                  {/* Level 1: Verse */}
                  {depthLevel >= 1 && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.miroir.mirrorVersion}
                    </p>
                  )}

                  {/* Level 2: Miroir */}
                  {depthLevel >= 2 && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {item.miroir.reflection}
                    </p>
                  )}

                  {/* Level 3: 6 Tajalli levels */}
                  {depthLevel >= 3 && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-[10px] text-muted-foreground mb-2 font-medium">Les 6 Regards du Tajalli</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-border/30">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span style={{ color: t.color }}>◈</span>
                              <span className="text-xs font-medium" style={{ color: t.color }}>{t.label}</span>
                              <span className="font-arabic text-[10px] text-muted-foreground">{t.ar}</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Munajat - only in level 3 */}
                  {depthLevel >= 3 && (
                    <div className="mt-3 pt-3 border-t border-border/30">
                      <p className="text-xs text-muted-foreground mb-1 font-medium">Munajat</p>
                      <p className="text-sm text-foreground/70 italic leading-relaxed">
                        {item.miroir.munajat}
                      </p>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => loadSurah(item.surahId)}
                      className="text-xs h-7"
                    >
                      <BookOpen className="w-3 h-3 mr-1" />
                      Voir la sourate
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await loadSurah(item.surahId);
                        const checkAndSelect = () => {
                          if (currentSurah) {
                            const verse = currentSurah.verses.find(v => v.id === item.verseId);
                            if (verse) {
                              selectVerse(verse);
                              return true;
                            }
                          }
                          return false;
                        };
                        if (!checkAndSelect()) {
                          const interval = setInterval(() => {
                            if (checkAndSelect()) {
                              clearInterval(interval);
                            }
                          }, 100);
                          setTimeout(() => clearInterval(interval), 3000);
                        }
                      }}
                      className="text-xs h-7"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Contempler
                    </Button>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render spiritual journey view
  const renderJourneyView = () => {
    const journey = SPIRITUAL_JOURNEYS?.find(j => j.key === selectedJourney);
    if (!journey) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Voyage non trouvé</p>
        </div>
      );
    }

    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Journey header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-3xl mb-1">{journey.icon}</div>
            <div className="font-title text-base text-foreground/80">{journey.title}</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {journey.description}
            </div>

            {/* Stages - compact */}
            <div className="flex flex-wrap justify-center gap-1 mt-2">
              {journey.stages.map((stage, index) => (
                <div 
                  key={stage.order}
                  className="flex items-center gap-0.5 text-[9px]"
                >
                  <span className="w-4 h-4 rounded-full bg-white/[0.05] border border-border/50 flex items-center justify-center text-muted-foreground">
                    {stage.order}
                  </span>
                  <span className="text-muted-foreground">{stage.theme}</span>
                  {index < journey.stages.length - 1 && <span className="text-border mx-0.5">→</span>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-3 mb-3">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-2 py-1 rounded-full text-[10px] border transition-all flex items-center gap-1
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>N{level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses */}
        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-3 p-4 pr-4 max-w-3xl mx-auto">
            {journey.verses.map((verseItem, index) => {
              const miroir = MIROIR[verseItem.reference];
              if (!miroir) return null;

              const [surahId, verseId] = verseItem.reference.split(':').map(Number);
              const surah = surahs.find(s => s.id === surahId);
              const stage = journey.stages.find(s => s.order === verseItem.stage);

              return (
                <motion.div
                  key={verseItem.reference + '-' + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-purple/20 text-purple flex items-center justify-center text-[10px] font-medium">
                      {verseItem.stage}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold/10 text-gold">
                      {verseItem.reference}
                    </span>
                    {verseItem.title && (
                      <span className="text-xs text-foreground/80 font-medium">{verseItem.title}</span>
                    )}
                    {stage && (
                      <span className="text-[10px] text-muted-foreground ml-auto">
                        Étape: {stage.theme}
                      </span>
                    )}
                  </div>

                  {/* Level 1: Simple verse */}
                  {depthLevel >= 1 && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {miroir.mirrorVersion}
                    </p>
                  )}

                  {/* Level 2: Miroir */}
                  {depthLevel >= 2 && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {miroir.reflection}
                    </p>
                  )}

                  {/* Level 3: 6 Tajalli */}
                  {depthLevel >= 3 && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-[10px] text-muted-foreground mb-2 font-medium">Les 6 Regards du Tajalli</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-border/30">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span style={{ color: t.color }}>◈</span>
                              <span className="text-[10px] font-medium" style={{ color: t.color }}>{t.label}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await loadSurah(surahId);
                      }}
                      className="text-[10px] h-6"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Contempler
                    </Button>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render divine name view
  const renderDivineNameView = () => {
    const parcours = DIVINE_NAME_PARCOURS?.find(p => p.divineName === selectedDivineName);
    if (!parcours) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Parcours non trouvé</p>
        </div>
      );
    }

    const divineName = DIVINE_NAMES?.find(n => n.key === selectedDivineName);

    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {divineName && (
              <div className="font-arabic text-3xl text-gold mb-1">{divineName.ar}</div>
            )}
            <div className="font-title text-base text-foreground/80">{parcours.title}</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {parcours.description}
            </div>
            {divineName && (
              <div className="text-[10px] text-muted-foreground/60 mt-1">
                {divineName.meaning}
              </div>
            )}
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-3 mb-3">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-2 py-1 rounded-full text-[10px] border transition-all flex items-center gap-1
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>N{level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses */}
        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-3 p-4 pr-4 max-w-3xl mx-auto">
            {parcours.verses.map((verseItem, index) => {
              const miroir = MIROIR[verseItem.reference];
              if (!miroir) return null;

              const [surahId, verseId] = verseItem.reference.split(':').map(Number);
              const surah = surahs.find(s => s.id === surahId);

              return (
                <motion.div
                  key={verseItem.reference + '-' + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold/10 text-gold">
                      {verseItem.reference}
                    </span>
                    {verseItem.title && (
                      <span className="text-xs text-foreground/80 font-medium">{verseItem.title}</span>
                    )}
                    <span className="text-[10px] text-muted-foreground">
                      {surah?.translation}
                    </span>
                  </div>

                  {depthLevel >= 1 && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {miroir.mirrorVersion}
                    </p>
                  )}

                  {depthLevel >= 2 && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {miroir.reflection}
                    </p>
                  )}

                  {depthLevel >= 3 && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-[10px] text-muted-foreground mb-2 font-medium">Les 6 Regards du Tajalli</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-border/30">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span style={{ color: t.color }}>◈</span>
                              <span className="text-[10px] font-medium" style={{ color: t.color }}>{t.label}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await loadSurah(surahId);
                      }}
                      className="text-[10px] h-6"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Contempler
                    </Button>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render prophet view
  const renderProphetView = () => {
    const prophetParcours = PROPHET_PARCOURS?.find(p => p.prophet === selectedProphet);
    if (!prophetParcours) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Prophète non trouvé</p>
        </div>
      );
    }

    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="font-arabic text-3xl text-gold mb-1">{prophetParcours.ar}</div>
            <div className="font-title text-base text-foreground/80">{prophetParcours.title}</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {prophetParcours.description}
            </div>
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-3 mb-3">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-2 py-1 rounded-full text-[10px] border transition-all flex items-center gap-1
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>N{level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses */}
        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-3 p-4 pr-4 max-w-3xl mx-auto">
            {prophetParcours.verses.map((verseItem, index) => {
              const miroir = MIROIR[verseItem.reference];
              if (!miroir) return null;

              const [surahId, verseId] = verseItem.reference.split(':').map(Number);
              const surah = surahs.find(s => s.id === surahId);

              return (
                <motion.div
                  key={verseItem.reference + '-' + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold/10 text-gold">
                      {verseItem.reference}
                    </span>
                    {verseItem.title && (
                      <span className="text-xs text-foreground/80 font-medium">{verseItem.title}</span>
                    )}
                    <span className="text-[10px] text-muted-foreground">
                      {surah?.translation}
                    </span>
                  </div>

                  {depthLevel >= 1 && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {miroir.mirrorVersion}
                    </p>
                  )}

                  {depthLevel >= 2 && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {miroir.reflection}
                    </p>
                  )}

                  {depthLevel >= 3 && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-[10px] text-muted-foreground mb-2 font-medium">Les 6 Regards du Tajalli</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-border/30">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span style={{ color: t.color }}>◈</span>
                              <span className="text-[10px] font-medium" style={{ color: t.color }}>{t.label}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await loadSurah(surahId);
                      }}
                      className="text-[10px] h-6"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Contempler
                    </Button>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render Nafs view - Les 7 niveaux de l'âme
  const renderNafsView = () => {
    const nafsLevel = NAFS_LEVELS?.find(n => n.level === selectedNafsLevel);
    
    // If no level selected, show overview of all levels
    if (!nafsLevel) {
      return (
        <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
          {/* Header */}
          <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-3xl mb-1">💙</div>
              <div className="font-arabic text-2xl text-gold mb-1">النَّفْسُ</div>
              <div className="font-title text-base text-foreground/80">Les 7 Niveaux de l'Âme</div>
              <div className="text-[11px] text-muted-foreground mt-1 max-w-md mx-auto">
                Le voyage de l'âme depuis ses tendances les plus basses jusqu'à sa purification complète.
              </div>
            </motion.div>

            {/* Progression visuelle des 7 niveaux */}
            <div className="flex flex-wrap justify-center gap-1 mt-3">
              {NAFS_LEVELS?.map((level, index) => (
                <div key={level.level} className="flex items-center gap-0.5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedNafsLevel(level.level);
                      setView('nafs');
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold border transition-all ${
                      selectedNafsLevel === level.level 
                        ? 'border-rose-400 bg-rose-500/20 text-rose-400' 
                        : 'border-border/50 bg-white/[0.03] text-muted-foreground hover:border-rose-400/50'
                    }`}
                  >
                    {level.level}
                  </motion.button>
                  {index < (NAFS_LEVELS?.length || 0) - 1 && (
                    <span className="text-border text-[10px] mx-0.5">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Levels Grid - Uniform style like other sections */}
          <div className="flex-1 min-h-0 h-0 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="space-y-2 p-4 max-w-2xl mx-auto">
                {NAFS_LEVELS?.map((level, index) => (
                  <motion.button
                    key={level.level}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setSelectedNafsLevel(level.level);
                      setView('nafs');
                    }}
                    className="w-full p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Numéro du niveau */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                        <span className="text-rose-400 font-bold text-sm">{level.level}</span>
                      </div>
                      
                      {/* Contenu */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{level.icon}</span>
                          <span className="font-arabic text-base text-gold">{level.ar}</span>
                        </div>
                        <div className="text-sm font-medium text-foreground/80">{level.fr}</div>
                        <div className="text-[10px] text-muted-foreground mt-1">
                          {level.state} • {level.verses.length} versets
                        </div>
                      </div>
                      
                      {/* Flèche */}
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-rose-400 transition-colors flex-shrink-0" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      );
    }

    // Show selected level detail - Same style as Journey view
    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Journey-style header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedNafsLevel(null)}
              className="mb-2 text-muted-foreground hover:text-foreground h-7"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Tous les niveaux
            </Button>

            <div className="text-3xl mb-1">{nafsLevel.icon}</div>
            <div className="font-arabic text-2xl mb-1" style={{ color: nafsLevel.color }}>
              {nafsLevel.ar}
            </div>
            <div className="font-title text-base text-foreground/80">
              Niveau {nafsLevel.level}: {nafsLevel.fr}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {nafsLevel.description}
            </div>

            {/* Progression des niveaux */}
            <div className="flex flex-wrap justify-center gap-1 mt-3">
              {NAFS_LEVELS?.map((level, index) => (
                <div key={level.level} className="flex items-center gap-0.5">
                  <button
                    onClick={() => setSelectedNafsLevel(level.level)}
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold border transition-all ${
                      selectedNafsLevel === level.level 
                        ? 'border-rose-400 bg-rose-500/20 text-rose-400' 
                        : 'border-border/50 bg-white/[0.03] text-muted-foreground hover:border-rose-400/50'
                    }`}
                  >
                    {level.level}
                  </button>
                  {index < (NAFS_LEVELS?.length || 0) - 1 && (
                    <span className="text-border text-[8px]">→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Level info */}
            <div className="flex justify-center gap-4 mt-3 text-[10px]">
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">État:</span>
                <span className="font-medium" style={{ color: nafsLevel.color }}>{nafsLevel.state}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Vertu:</span>
                <span className="font-medium">{nafsLevel.virtue}</span>
              </div>
            </div>
          </motion.div>

          {/* Depth level selector */}
          <div className="flex justify-center gap-2 mt-3 mb-3">
            {DEPTH_LEVELS.map(level => (
              <button
                key={level.level}
                onClick={() => setDepthLevel(level.level as 1 | 2 | 3)}
                className={`px-2 py-1 rounded-full text-[10px] border transition-all flex items-center gap-1
                  ${depthLevel === level.level 
                    ? 'bg-white/10 border-white/30' 
                    : 'border-border/50 hover:border-border'}`}
              >
                <span>{level.icon}</span>
                <span>N{level.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Verses - Same style as Journey view */}
        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-3 p-4 pr-4 max-w-3xl mx-auto">
            {nafsLevel.verses.map((verseItem, index) => {
              const miroir = MIROIR[verseItem.reference];
              if (!miroir) return null;

              const [surahId, verseId] = verseItem.reference.split(':').map(Number);
              const surah = surahs.find(s => s.id === surahId);

              return (
                <motion.div
                  key={verseItem.reference + '-' + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  className="p-4 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all"
                >
                  {/* Header - Same as Journey */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px] font-medium">
                      {nafsLevel.level}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold/10 text-gold">
                      {verseItem.reference}
                    </span>
                    {verseItem.title && (
                      <span className="text-xs text-foreground/80 font-medium">{verseItem.title}</span>
                    )}
                    <span className="text-[10px] text-muted-foreground ml-auto">
                      {surah?.translation}
                    </span>
                  </div>

                  {/* Level 1: Simple verse */}
                  {depthLevel >= 1 && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {miroir.mirrorVersion}
                    </p>
                  )}

                  {/* Level 2: Miroir */}
                  {depthLevel >= 2 && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {miroir.reflection}
                    </p>
                  )}

                  {/* Level 3: 6 Tajalli */}
                  {depthLevel >= 3 && (
                    <div className="border-t border-border/50 pt-3 mt-3">
                      <p className="text-[10px] text-muted-foreground mb-2 font-medium">Les 6 Regards du Tajalli</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {miroir.tajalli.map((t, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/[0.02] border border-border/30">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span style={{ color: t.color }}>◈</span>
                              <span className="text-[10px] font-medium" style={{ color: t.color }}>{t.label}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground leading-relaxed">{t.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        await loadSurah(surahId);
                      }}
                      className="text-[10px] h-6"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      Contempler
                    </Button>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render bookmarks panel
  const renderBookmarksPanel = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="absolute inset-0 bg-background z-20 flex flex-col"
    >
      <div className="h-12 border-b border-border flex items-center px-3 gap-2 bg-black/50 backdrop-blur-xl flex-shrink-0">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setShowBookmarks(false)}
          className="text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="flex-1 text-sm font-medium">Favoris</span>
        <span className="text-[11px] text-muted-foreground">{bookmarks.length}</span>
      </div>
      
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full">
        {bookmarks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Bookmark className="w-10 h-10 text-muted-foreground/30 mb-4" />
            <p className="text-sm text-muted-foreground">Aucun favori</p>
            <p className="text-xs text-muted-foreground/50 mt-1">
              Appuyez sur le bouton favori pour enregistrer un verset
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-2">
            {bookmarks.map((bookmark, i) => (
              <motion.button
                key={bookmark.reference}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  const [surahId, verseId] = bookmark.reference.split(':').map(Number);
                  loadSurah(surahId);
                  setShowBookmarks(false);
                }}
                className="w-full text-left p-3 rounded-lg border border-border bg-card hover:bg-white/[0.02] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gold/70">{bookmark.reference}</span>
                  <span className="text-[10px] text-muted-foreground">{bookmark.surahName}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{bookmark.verseText}</p>
              </motion.button>
            ))}
          </div>
        )}
      </ScrollArea>
      </div>
    </motion.div>
  );

  // Render Intelligence View - Système adaptatif
  const renderIntelligenceView = () => {
    const timeOfDay = getTimeOfDay();
    const recommendations = getRecommendedVerses(currentMood, 6);
    
    const moods = [
      { key: 'joie', label: 'Joie', icon: Smile, color: 'text-yellow-500' },
      { key: 'tristesse', label: 'Tristesse', icon: Frown, color: 'text-blue-500' },
      { key: 'angoisse', label: 'Angoisse', icon: Cloud, color: 'text-purple-500' },
      { key: 'colere', label: 'Colère', icon: Angry, color: 'text-red-500' },
      { key: 'gratitude', label: 'Gratitude', icon: ThumbsUp, color: 'text-green-500' },
      { key: 'doute', label: 'Doute', icon: Meh, color: 'text-orange-500' },
      { key: 'serenite', label: 'Sérénité', icon: Heart, color: 'text-pink-500' },
      { key: 'epreuve', label: 'Épreuve', icon: Mountain, color: 'text-stone-500' },
    ];
    
    const timeLabels: Record<string, { label: string; icon: typeof Sunrise; greeting: string }> = {
      'matin': { label: 'Matin', icon: Sunrise, greeting: 'Bonjour' },
      'apres-midi': { label: 'Après-midi', icon: Sun, greeting: 'Bon après-midi' },
      'soir': { label: 'Soir', icon: Sunset, greeting: 'Bonsoir' },
      'nuit': { label: 'Nuit', icon: Moon, greeting: 'Bonne nuit' },
    };
    
    const timeInfo = timeLabels[timeOfDay];
    const TimeIcon = timeInfo.icon;
    
    // Get top themes from interactions
    const topThemes = Object.entries(themeInteractions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Brain className="w-6 h-6 text-purple-400" />
              <span className="text-xl">🧠</span>
            </div>
            <div className="font-arabic text-xl text-gold mb-1">الذَّكَاءُ الرُّوحِيُّ</div>
            <div className="font-title text-base text-foreground/80">Intelligence Spirituelle</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              Recommandations adaptées à votre état et votre parcours
            </div>
          </motion.div>
        </div>

        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-6 max-w-2xl mx-auto">
              
              {/* Time greeting */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-gold/10 border border-purple-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <TimeIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-lg font-medium">{timeInfo.greeting}</div>
                    <div className="text-xs text-muted-foreground">
                      {timeInfo.label} • Moment propice à la contemplation
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Mood selector */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-gold" />
                  Comment vous sentez-vous ?
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {moods.map(mood => {
                    const Icon = mood.icon;
                    const isSelected = currentMood === mood.key;
                    return (
                      <motion.button
                        key={mood.key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setCurrentMood(isSelected ? null : mood.key);
                          localStorage.setItem('quran-mirror-current-mood', isSelected ? '' : mood.key);
                        }}
                        className={`p-3 rounded-xl border transition-all flex flex-col items-center gap-1
                          ${isSelected 
                            ? 'bg-purple-500/20 border-purple-500/50' 
                            : 'border-border/50 hover:border-purple-500/30 bg-card'}`}
                      >
                        <Icon className={`w-5 h-5 ${mood.color}`} />
                        <span className="text-[10px] text-muted-foreground">{mood.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
              
              {/* Recommended verses */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  Versets recommandés pour vous
                  {currentMood && <Badge variant="outline" className="text-[10px]">{moods.find(m => m.key === currentMood)?.label}</Badge>}
                </h3>
                <div className="space-y-2">
                  {recommendations.map((rec, i) => {
                    const [surahId, verseId] = rec.reference.split(':').map(Number);
                    const surah = surahs.find(s => s.id === surahId);
                    return (
                      <motion.button
                        key={rec.reference}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        onClick={() => {
                          loadSurah(surahId);
                          rec.miroir.theme.forEach(t => trackThemeInteraction(t));
                        }}
                        className="w-full p-3 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all text-left group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-gold/10 text-gold">
                            {rec.reference}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{surah?.translation}</span>
                          <span className="ml-auto text-[9px] text-purple-400/60">{rec.reason}</span>
                        </div>
                        <p className="text-xs text-foreground/80 line-clamp-2">{rec.miroir.mirrorVersion}</p>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
              
              {/* Theme analytics */}
              {topThemes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    Vos thèmes les plus consultés
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {topThemes.map(([key, count], i) => {
                      const theme = THEME_MAP[key];
                      if (!theme) return null;
                      return (
                        <div
                          key={key}
                          className="px-3 py-1.5 rounded-full text-[11px] border flex items-center gap-2"
                          style={{ 
                            background: theme.bg, 
                            borderColor: theme.border, 
                            color: theme.color 
                          }}
                        >
                          <span>{theme.ar} {theme.label}</span>
                          <span className="opacity-60">({count})</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render Cartography View - Cartographie Spirituelle
  const renderCartographyView = () => {
    // Get verse count per theme
    const themeVerseCounts: Record<string, number> = {};
    Object.values(MIROIR).forEach(miroir => {
      miroir.theme.forEach(t => {
        themeVerseCounts[t] = (themeVerseCounts[t] || 0) + 1;
      });
    });
    
    return (
      <div className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
        {/* Header */}
        <div className="p-4 pb-0 text-center flex-shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Map className="w-6 h-6 text-emerald-400" />
              <span className="text-xl">🗺️</span>
            </div>
            <div className="font-arabic text-xl text-gold mb-1">خَرِيطَةُ الْأَرْوَاحِ</div>
            <div className="font-title text-base text-foreground/80">Cartographie Spirituelle</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              Explorez les connexions entre les thèmes et les versets
            </div>
          </motion.div>
        </div>

        <div className="flex-1 min-h-0 h-0 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-6 max-w-3xl mx-auto">
              
              {/* 7 Nafs levels map */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <span className="text-rose-400">💙</span>
                  Carte des 7 Niveaux de l'Âme
                </h3>
                <div className="relative p-4 rounded-xl border border-border bg-card overflow-hidden">
                  {/* Vertical line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-500 via-green-500 to-cyan-500 opacity-30" />
                  
                  <div className="space-y-2">
                    {NAFS_LEVELS?.map((level, i) => (
                      <motion.button
                        key={level.level}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        onClick={() => {
                          setSelectedNafsLevel(level.level);
                          setView('nafs');
                        }}
                        className="w-full flex items-center gap-4 p-2 rounded-lg hover:bg-white/[0.02] transition-all group"
                      >
                        {/* Node */}
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: level.color }}
                        >
                          {level.level}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-center gap-2">
                            <span className="font-arabic text-sm text-gold">{level.ar}</span>
                            <span className="text-xs text-foreground/80">{level.fr}</span>
                          </div>
                          <div className="text-[10px] text-muted-foreground">{level.state}</div>
                        </div>
                        
                        {/* Arrow */}
                        <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold transition-colors" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Dimensional view */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  Les 5 Dimensions Spirituelles
                </h3>
                <div className="space-y-2">
                  {THEME_CATEGORIES?.map((category, i) => {
                    const totalVerses = category.themes.reduce((sum, t) => sum + (themeVerseCounts[t] || 0), 0);
                    return (
                      <motion.button
                        key={category.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        onClick={() => {
                          setSelectedTheme(category.themes[0]);
                          setView('theme');
                        }}
                        className="w-full p-3 rounded-xl border border-border bg-card hover:bg-white/[0.02] transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-arabic text-sm text-gold">{category.ar}</span>
                              <span className="text-xs text-foreground/80">{category.label}</span>
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                              {category.themes.length} thèmes • {totalVerses} versets
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold transition-colors" />
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-2 h-1 bg-white/[0.03] rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, totalVerses / 200)}%` }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-gold/50 to-purple/50 rounded-full"
                          />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
              
              {/* Theme network */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Network className="w-4 h-4 text-purple-400" />
                  Réseau des Thèmes
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {THEME_CATEGORIES?.map(category => (
                    <div key={category.key} className="p-3 rounded-xl border border-border bg-card">
                      <div className="text-lg mb-2">{category.icon}</div>
                      <div className="font-arabic text-sm text-gold mb-1">{category.ar}</div>
                      <div className="text-xs text-foreground/80">{category.label}</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {category.themes.slice(0, 3).map(t => {
                          const theme = THEME_MAP[t];
                          if (!theme) return null;
                          const count = themeVerseCounts[t] || 0;
                          return (
                            <motion.button
                              key={t}
                              whileHover={{ scale: 1.05 }}
                              onClick={() => {
                                setSelectedTheme(t);
                                setView('theme');
                                trackThemeInteraction(t);
                              }}
                              className="px-2 py-0.5 rounded text-[9px] border transition-all"
                              style={{ 
                                background: theme.bg, 
                                borderColor: theme.border, 
                                color: theme.color 
                              }}
                            >
                              {theme.label} ({count})
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  // Render detail panel
  const renderDetail = () => {
    if (!selectedVerse || !currentSurah) return null;
    
    const miroir = getMiroirData(currentSurah.id, selectedVerse.id);
    const bookmarked = isBookmarked();
    
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="absolute inset-0 bg-background z-20 flex flex-col"
      >
        {/* Detail header */}
        <div className="h-12 border-b border-border flex items-center px-3 gap-1 bg-black/50 backdrop-blur-xl flex-shrink-0">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setShowDetail(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <span className="flex-1 text-xs text-muted-foreground truncate px-2">
            {currentSurah.translation} — Verset {selectedVerse.id}
          </span>
          
          <span className="text-[11px] text-gold/60">{currentSurah.id}:{selectedVerse.id}</span>
          
          <div className="flex items-center gap-0.5 ml-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigateVerse('prev')}
              className="text-muted-foreground hover:text-foreground h-8 w-8"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigateVerse('next')}
              className="text-muted-foreground hover:text-foreground h-8 w-8"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <Separator orientation="vertical" className="h-6 mx-1" />
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleBookmark}
            className={`${bookmarked ? 'text-gold' : 'text-muted-foreground hover:text-foreground'} h-8 w-8`}
            title={bookmarked ? 'Supprimer des favoris' : 'Ajouter aux favoris'}
          >
            {bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={copyVerse}
            className="text-muted-foreground hover:text-foreground h-8 w-8"
            title="Copier"
          >
            <Copy className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={shareVerse}
            className="text-muted-foreground hover:text-foreground h-8 w-8"
            title="Partager"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={goRandomMiroir}
            className="text-mirror/60 hover:text-mirror h-8 w-8"
            title="Verset miroir aléatoire"
          >
            <Shuffle className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Detail content */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <ScrollArea className="h-full">
          <div className="max-w-2xl mx-auto p-6">
            {/* Arabic text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-arabic text-3xl leading-relaxed text-center mb-2"
            >
              {selectedVerse.text}
            </motion.div>
            
            {/* Transliteration */}
            {selectedVerse.transliteration && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-arabic text-[11px] text-muted-foreground text-center mb-6"
              >
                {selectedVerse.transliteration}
              </motion.div>
            )}
            
            {/* Divider */}
            <div className="gold-divider mb-6">
              <span></span>
              <div className="dot"></div>
              <div className="dot-sm"></div>
              <div className="dot"></div>
              <span></span>
            </div>
            
            {/* French translation */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-center text-base text-foreground/85 italic leading-relaxed mb-4"
            >
              {selectedVerse.translation}
            </motion.div>
            
            {/* Reference row */}
            <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground mb-6">
              <span>{currentSurah.name} — {currentSurah.translation}</span>
              <span>•</span>
              <span>{currentSurah.type === 'meccan' ? 'Mécquoise' : 'Médinoise'}</span>
              <span>•</span>
              <span>Verset {selectedVerse.id} / {currentSurah.total_verses}</span>
            </div>
            
            {/* Miroir content */}
            {!miroir ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground/50">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-sm text-muted-foreground">
                  La méditation miroir de ce verset sera disponible dans une prochaine vague.
                </p>
                <p className="text-xs text-muted-foreground/50 mt-2">
                  Le Coran intégral (6236 versets) est en cours de contemplation.
                </p>
              </div>
            ) : (
              <>
                {/* Theme badges */}
                {miroir.theme.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-1.5 mb-6"
                  >
                    {miroir.theme.map(t => {
                      const theme = THEME_MAP[t];
                      if (!theme) return null;
                      return (
                        <span 
                          key={t}
                          className="theme-badge"
                          style={{ 
                            background: theme.bg, 
                            borderColor: theme.border, 
                            color: theme.color 
                          }}
                        >
                          {theme.ar} {theme.label}
                        </span>
                      );
                    })}
                  </motion.div>
                )}
                
                {/* Mirror panel */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mirror-panel-enhanced mb-6"
                >
                  {/* Corner accents */}
                  <div className="corner-accent corner-accent-tl" />
                  <div className="corner-accent corner-accent-tr" />
                  <div className="corner-accent corner-accent-bl" />
                  <div className="corner-accent corner-accent-br" />
                  
                  <div className="relative p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mirror/20 to-purple/20 flex items-center justify-center text-mirror glow-mirror">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-title text-base font-semibold text-mirror">Version Miroir</h3>
                        <p className="text-[10px] text-muted-foreground">Le verset se contemple — il te lit</p>
                      </div>
                    </div>
                    
                    <div className="text-sm leading-relaxed text-foreground/90 italic">
                      {miroir.mirrorVersion}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
                      {miroir.emotion && (
                        <span>Émotion : <b className="text-foreground/70">{miroir.emotion}</b></span>
                      )}
                      <span>Niveau : <b style={{ 
                        color: miroir.difficulty === 'débutant' ? '#34d399' 
                          : miroir.difficulty === 'intermédiaire' ? '#fbbf24' 
                          : '#fb7185' 
                      }}>{miroir.difficulty}</b></span>
                    </div>
                    
                    {miroir.relatedNames && miroir.relatedNames.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {miroir.relatedNames.map(name => (
                          <span 
                            key={name}
                            className="px-2.5 py-1 rounded-full text-xs border border-purple/30 bg-purple/15 text-purple/90 hover:bg-purple/20 transition-colors cursor-default"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
                
                {/* Reflection */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-5 rounded-xl bg-card border border-border mb-6"
                >
                  <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span>🧭</span> Réflexion
                  </h4>
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {miroir.reflection}
                  </p>
                </motion.div>
                
                {/* 6 Tajalli */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="rounded-xl border border-border bg-card overflow-hidden mb-6"
                >
                  <div className="p-4 border-b border-border">
                    <h3 className="font-title text-sm font-semibold text-gold">Les 6 Regards du Tajalli</h3>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Déplier chaque regard pour approfondir la contemplation
                    </p>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {miroir.tajalli.map((t, i) => (
                      <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 last:border-0">
                        <AccordionTrigger className="px-5 py-3 hover:bg-white/[0.01] text-sm">
                          <div className="flex items-center gap-2">
                            <span style={{ color: t.color }}>◈</span>
                            <span style={{ color: t.color }} className="font-medium">
                              Regard {i + 1} — {t.label}
                            </span>
                            <span className="font-arabic text-[11px] text-muted-foreground ml-1">{t.ar}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-4 text-sm text-foreground/75 leading-relaxed">
                          {t.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
                
                {/* Munajat */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="munajat-box"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-purple/10 flex items-center justify-center text-purple">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-title text-sm font-semibold text-purple">Munajat — Le dialogue intime</h3>
                      <p className="text-[10px] text-muted-foreground">Laisse ton cœur répondre au verset</p>
                    </div>
                  </div>
                  
                  <div className="text-sm leading-relaxed text-foreground/80 italic pl-4 border-l-2 border-purple/25">
                    {miroir.munajat}
                  </div>
                </motion.div>
              </>
            )}
            
            {/* Keyboard shortcuts hint */}
            <div className="mt-8 text-center">
              <p className="text-[10px] text-muted-foreground/50">
                ← → Naviguer • B Favori • R Aléatoire • Échap Retour
              </p>
            </div>
          </div>
        </ScrollArea>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress" 
        style={{ width: `${readingProgress}%`, opacity: showDetail ? 1 : 0 }}
      />
      
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 min-w-80 border-r border-border bg-black/30 backdrop-blur-sm flex-col z-10">
        {renderSidebar()}
      </aside>
      
      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-80 p-0 bg-background/98 backdrop-blur-xl">
          <SheetTitle className="sr-only">Menu des sourates</SheetTitle>
          {renderSidebar()}
        </SheetContent>
      </Sheet>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-14 border-b border-border bg-black/40 backdrop-blur-xl flex items-center px-4 gap-3 flex-shrink-0 z-10">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gold"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          {/* Title */}
          <h1 className="font-title text-[13px] font-semibold text-gold tracking-wide whitespace-nowrap">
            Le Coran du Miroir
          </h1>
          
          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un verset, une sourate..."
              className="pl-10 h-9 bg-white/[0.03] border-border focus:border-gold/35 text-sm"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery('')}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          {/* Actions */}
          <div className="hidden sm:flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={goRandomMiroir}
              className="text-mirror/60 hover:text-mirror"
              title="Verset miroir aléatoire (R)"
            >
              <Shuffle className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBookmarks(true)}
              className="text-muted-foreground hover:text-foreground relative"
              title="Favoris"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarks.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gold rounded-full text-[8px] flex items-center justify-center text-background font-medium">
                  {bookmarks.length}
                </span>
              )}
            </Button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="border-b border-border flex-shrink-0 bg-black/20">
          <div className="flex items-center gap-1 px-2 py-1.5 overflow-x-auto">
            {/* Parcours Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'parcours' ? null : 'parcours')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'parcours' ? 'bg-gold/15 text-gold' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Parcours</span>
              {activeHeaderTab === 'parcours' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Moments Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'moments' ? null : 'moments')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'moments' ? 'bg-purple/15 text-purple' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Moments</span>
              {activeHeaderTab === 'moments' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Voyages Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'voyages' ? null : 'voyages')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'voyages' ? 'bg-[#a78bfa]/15 text-[#a78bfa]' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Star className="w-3.5 h-3.5" />
              <span>Voyages</span>
              {activeHeaderTab === 'voyages' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Noms Divins Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'noms' ? null : 'noms')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'noms' ? 'bg-amber-500/15 text-amber-400' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Noms Divins</span>
              {activeHeaderTab === 'noms' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Prophètes Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'prophetes' ? null : 'prophetes')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'prophetes' ? 'bg-emerald-500/15 text-emerald-400' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Prophètes</span>
              {activeHeaderTab === 'prophetes' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* Nafs Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'nafs' ? null : 'nafs')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'nafs' ? 'bg-rose-500/15 text-rose-400' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Nafs</span>
              {activeHeaderTab === 'nafs' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <div className="w-px h-5 bg-border/50 mx-1" />

            {/* Thèmes Tab */}
            <button
              onClick={() => setActiveHeaderTab(activeHeaderTab === 'themes' ? null : 'themes')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'themes' ? 'bg-mirror/15 text-mirror' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Thèmes</span>
              {activeHeaderTab === 'themes' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <div className="w-px h-5 bg-border/50 mx-1" />

            {/* Intelligence Tab */}
            <button
              onClick={() => {
                setActiveHeaderTab(activeHeaderTab === 'intelligence' ? null : 'intelligence');
                if (activeHeaderTab !== 'intelligence') {
                  setView('intelligence');
                } else {
                  setView('welcome');
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'intelligence' || view === 'intelligence' ? 'bg-purple-500/15 text-purple-400' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Intelligence</span>
            </button>

            {/* Cartographie Tab */}
            <button
              onClick={() => {
                setActiveHeaderTab(activeHeaderTab === 'cartographie' ? null : 'cartographie');
                if (activeHeaderTab !== 'cartographie') {
                  setView('cartography');
                } else {
                  setView('welcome');
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all whitespace-nowrap
                ${activeHeaderTab === 'cartographie' || view === 'cartography' ? 'bg-emerald-500/15 text-emerald-400' : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.03]'}`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Carte</span>
            </button>

            {/* Clear filter button */}
            {(selectedTheme || selectedParcours || selectedContext || selectedJourney || selectedDivineName || selectedProphet || selectedNafsLevel) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedTheme(null);
                  setSelectedParcours(null);
                  setSelectedContext(null);
                  setSelectedJourney(null);
                  setSelectedDivineName(null);
                  setSelectedProphet(null);
                  setSelectedNafsLevel(null);
                  setActiveHeaderTab(null);
                  setView('welcome');
                }}
                className="h-7 px-2 text-[10px] text-muted-foreground hover:text-foreground ml-auto"
              >
                <X className="w-3 h-3 mr-1" />
                Effacer
              </Button>
            )}
          </div>

          {/* Dropdown Panels */}
          <AnimatePresence>
            {activeHeaderTab && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-border/50 bg-black/10"
              >
                {/* Parcours Panel */}
                {activeHeaderTab === 'parcours' && (
                  <div className="p-3 flex flex-wrap gap-2">
                    {PARCOURS_LIST && PARCOURS_LIST.length > 0 ? PARCOURS_LIST.map(parcours => (
                      <motion.button
                        key={parcours.key}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedParcours(parcours.key);
                          setSelectedContext(null);
                          setSelectedTheme(null);
                          setSelectedJourney(null);
                          setSelectedDivineName(null);
                          setSelectedProphet(null);
                          setSelectedNafsLevel(null);
                          setActiveHeaderTab(null);
                          setView('parcours');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all flex items-center gap-1.5
                          ${selectedParcours === parcours.key
                            ? 'bg-gold/10 border-gold/30 text-gold'
                            : 'border-border/50 hover:border-gold/30 text-muted-foreground hover:text-foreground'}`}
                      >
                        <span>{parcours.icon}</span>
                        <span>{parcours.title}</span>
                      </motion.button>
                    )) : (
                      <span className="text-[11px] text-muted-foreground">Aucun parcours disponible</span>
                    )}
                  </div>
                )}

                {/* Moments Panel */}
                {activeHeaderTab === 'moments' && (
                  <div className="p-3 flex flex-wrap gap-2">
                    {THEME_CONTEXTS && THEME_CONTEXTS.length > 0 ? THEME_CONTEXTS.map(context => (
                      <motion.button
                        key={context.key}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedContext(context.key);
                          setSelectedParcours(null);
                          setSelectedTheme(null);
                          setSelectedJourney(null);
                          setSelectedDivineName(null);
                          setSelectedProphet(null);
                          setSelectedNafsLevel(null);
                          setActiveHeaderTab(null);
                          setView('context');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all flex items-center gap-1.5
                          ${selectedContext === context.key
                            ? 'bg-purple/10 border-purple/30 text-purple'
                            : 'border-border/50 hover:border-purple/30 text-muted-foreground hover:text-foreground'}`}
                        style={{ color: selectedContext === context.key ? context.color : undefined }}
                      >
                        <span>{context.icon}</span>
                        <span>{context.title}</span>
                      </motion.button>
                    )) : (
                      <span className="text-[11px] text-muted-foreground">Aucun moment disponible</span>
                    )}
                  </div>
                )}

                {/* Voyages Panel */}
                {activeHeaderTab === 'voyages' && (
                  <div className="p-3 flex flex-wrap gap-2">
                    {SPIRITUAL_JOURNEYS && SPIRITUAL_JOURNEYS.length > 0 ? SPIRITUAL_JOURNEYS.map(journey => (
                      <motion.button
                        key={journey.key}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedJourney(journey.key);
                          setSelectedParcours(null);
                          setSelectedContext(null);
                          setSelectedTheme(null);
                          setSelectedDivineName(null);
                          setSelectedProphet(null);
                          setSelectedNafsLevel(null);
                          setActiveHeaderTab(null);
                          setView('journey');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all flex items-center gap-1.5
                          ${selectedJourney === journey.key
                            ? 'bg-[#a78bfa]/10 border-[#a78bfa]/30 text-[#a78bfa]'
                            : 'border-border/50 hover:border-[#a78bfa]/30 text-muted-foreground hover:text-foreground'}`}
                      >
                        <span>{journey.icon}</span>
                        <span>{journey.title}</span>
                        <span className="text-[9px] opacity-60">({journey.stages.length} étapes)</span>
                      </motion.button>
                    )) : (
                      <span className="text-[11px] text-muted-foreground">Aucun voyage disponible</span>
                    )}
                  </div>
                )}

                {/* Noms Divins Panel */}
                {activeHeaderTab === 'noms' && (
                  <div className="p-3 flex flex-wrap gap-2">
                    {DIVINE_NAME_PARCOURS && DIVINE_NAME_PARCOURS.length > 0 ? DIVINE_NAME_PARCOURS.map(parcours => {
                      const divineName = DIVINE_NAMES?.find(n => n.key === parcours.divineName);
                      return (
                        <motion.button
                          key={parcours.divineName}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedDivineName(parcours.divineName);
                            setSelectedParcours(null);
                            setSelectedContext(null);
                            setSelectedTheme(null);
                            setSelectedJourney(null);
                            setSelectedProphet(null);
                            setSelectedNafsLevel(null);
                            setActiveHeaderTab(null);
                            setView('divineName');
                          }}
                          className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all flex items-center gap-1.5
                            ${selectedDivineName === parcours.divineName
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                              : 'border-border/50 hover:border-amber-500/30 text-muted-foreground hover:text-foreground'}`}
                        >
                          {divineName && <span className="font-arabic text-sm">{divineName.ar}</span>}
                          <span>{parcours.title}</span>
                        </motion.button>
                      );
                    }) : (
                      <span className="text-[11px] text-muted-foreground">Aucun nom divin disponible</span>
                    )}
                  </div>
                )}

                {/* Prophètes Panel */}
                {activeHeaderTab === 'prophetes' && (
                  <div className="p-3 flex flex-wrap gap-2">
                    {PROPHET_PARCOURS && PROPHET_PARCOURS.length > 0 ? PROPHET_PARCOURS.map(prophet => (
                      <motion.button
                        key={prophet.prophet}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedProphet(prophet.prophet);
                          setSelectedParcours(null);
                          setSelectedContext(null);
                          setSelectedTheme(null);
                          setSelectedJourney(null);
                          setSelectedDivineName(null);
                          setSelectedNafsLevel(null);
                          setActiveHeaderTab(null);
                          setView('prophet');
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all flex items-center gap-1.5
                          ${selectedProphet === prophet.prophet
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : 'border-border/50 hover:border-emerald-500/30 text-muted-foreground hover:text-foreground'}`}
                      >
                        <span className="font-arabic text-sm">{prophet.ar}</span>
                        <span>{prophet.title}</span>
                      </motion.button>
                    )) : (
                      <span className="text-[11px] text-muted-foreground">Aucun prophète disponible</span>
                    )}
                  </div>
                )}

                {/* Nafs Panel */}
                {activeHeaderTab === 'nafs' && (
                  <div className="p-3">
                    <div className="text-center mb-3">
                      <span className="font-arabic text-lg text-rose-400">النَّفْسُ</span>
                      <p className="text-[10px] text-muted-foreground mt-1">Les 7 niveaux de l'âme selon la tradition soufie</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {NAFS_LEVELS && NAFS_LEVELS.length > 0 ? NAFS_LEVELS.map(level => (
                        <motion.button
                          key={level.level}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedNafsLevel(level.level);
                            setSelectedParcours(null);
                            setSelectedContext(null);
                            setSelectedTheme(null);
                            setSelectedJourney(null);
                            setSelectedDivineName(null);
                            setSelectedProphet(null);
                            setActiveHeaderTab(null);
                            setView('nafs');
                          }}
                          className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all flex items-center gap-1.5
                            ${selectedNafsLevel === level.level
                              ? 'border-rose-500/30 text-rose-400'
                              : 'border-border/50 hover:border-rose-500/30 text-muted-foreground hover:text-foreground'}`}
                          style={{ background: selectedNafsLevel === level.level ? level.bgColor : undefined }}
                        >
                          <span>{level.icon}</span>
                          <span className="font-arabic text-sm">{level.ar.split(' ').pop()}</span>
                          <span>{level.fr}</span>
                        </motion.button>
                      )) : (
                        <span className="text-[11px] text-muted-foreground">Aucun niveau disponible</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Thèmes Panel */}
                {activeHeaderTab === 'themes' && (
                  <div className="p-3 max-h-64 overflow-y-auto">
                    <div className="space-y-3">
                      {THEME_CATEGORIES.map(category => (
                        <div key={category.key}>
                          <div className="flex items-center gap-2 mb-2">
                            <span>{category.icon}</span>
                            <span className="text-[11px] font-medium text-foreground/80">{category.label}</span>
                            <span className="font-arabic text-[10px] text-muted-foreground/50">{category.ar}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {category.themes.map(theme => {
                              const count = Object.values(MIROIR).filter(m => m.theme.includes(theme.key)).length;
                              return (
                                <motion.button
                                  key={theme.key}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => {
                                    setSelectedTheme(theme.key);
                                    setSelectedParcours(null);
                                    setSelectedContext(null);
                                    setSelectedJourney(null);
                                    setSelectedDivineName(null);
                                    setSelectedProphet(null);
                                    setSelectedNafsLevel(null);
                                    setActiveHeaderTab(null);
                                    setView('theme');
                                  }}
                                  className={`px-2 py-1 rounded-full text-[10px] border transition-all whitespace-nowrap
                                    ${selectedTheme === theme.key
                                      ? 'shadow-sm ring-1 ring-offset-1 ring-offset-background'
                                      : count === 0 
                                        ? 'opacity-30 hover:opacity-60 italic'
                                        : 'opacity-60 hover:opacity-100'}`}
                                  style={{
                                    background: theme.bg,
                                    borderColor: selectedTheme === theme.key ? theme.color : theme.border,
                                    color: theme.color,
                                  }}
                                >
                                  {theme.ar} {theme.label}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-gold-dim border-t-gold rounded-full"
              />
            </div>
          ) : (
            <>
              {view === 'welcome' && renderWelcome()}
              {view === 'surah' && renderVerseList()}
              {view === 'search' && renderSearchResults()}
              {view === 'theme' && renderThemeVerses()}
              {view === 'parcours' && renderParcoursView()}
              {view === 'context' && renderContextView()}
              {view === 'journey' && renderJourneyView()}
              {view === 'divineName' && renderDivineNameView()}
              {view === 'prophet' && renderProphetView()}
              {view === 'nafs' && renderNafsView()}
              {view === 'intelligence' && renderIntelligenceView()}
              {view === 'cartography' && renderCartographyView()}
            </>
          )}
        </div>
        
        {/* Detail panel */}
        <AnimatePresence>
          {showDetail && selectedVerse && renderDetail()}
        </AnimatePresence>
        
        {/* Bookmarks panel */}
        <AnimatePresence>
          {showBookmarks && renderBookmarksPanel()}
        </AnimatePresence>
      </div>
    </div>
  );
}
