import { NextResponse } from 'next/server';

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/fr';

// Cache for all verses
let allVersesCache: any[] | null = null;

async function loadAllVerses(): Promise<any[]> {
  if (allVersesCache) return allVersesCache;
  
  // Fetch index first
  const indexResponse = await fetch(`${CDN_BASE}/index.json`);
  const surahs = await indexResponse.json();
  
  const allVerses: any[] = [];
  
  // Load all surahs in parallel batches
  const batchSize = 10;
  for (let i = 0; i < surahs.length; i += batchSize) {
    const batch = surahs.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map((s: any) => 
        fetch(`${CDN_BASE}/${s.id}.json`).then(r => r.json())
      )
    );
    
    results.forEach((s: any) => {
      s.verses.forEach((v: any) => {
        allVerses.push({
          surahId: s.id,
          verseId: v.id,
          text: v.text,
          translation: v.translation,
          transliteration: v.transliteration,
          reference: `${s.id}:${v.id}`,
          surahName: s.translation,
          surahNameAr: s.name,
          surahType: s.type,
          totalVerses: s.total_verses
        });
      });
    });
  }
  
  allVersesCache = allVerses;
  return allVerses;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const theme = searchParams.get('theme');
  
  // Miroir references
  const MIROIR_REFERENCES = [
    '1:1', '1:5', '2:152', '2:186', '2:255', '2:286',
    '3:139', '13:28', '24:35', '39:53', '50:16', '55:13',
    '65:3', '67:3', '89:27', '89:28', '94:5', '112:1', '112:2'
  ];
  
  const MIROIR_THEMES: Record<string, string[]> = {
    '1:1': ['présence', 'amour'],
    '1:5': ['prière', 'détachement', 'confiance'],
    '2:152': ['gratitude', 'présence', 'prière'],
    '2:186': ['prière', 'présence', 'amour'],
    '2:255': ['présence', 'sagesse', 'force'],
    '2:286': ['confiance', 'force', 'patience'],
    '3:139': ['force', 'espoir', 'confiance'],
    '13:28': ['présence', 'guérison', 'méditation'],
    '24:35': ['sagesse', 'guidance', 'présence'],
    '39:53': ['espoir', 'pardon', 'guérison'],
    '50:16': ['présence', 'amour', 'confiance'],
    '55:13': ['gratitude', 'présence', 'méditation'],
    '65:3': ['confiance', 'détachement', 'force'],
    '67:3': ['méditation', 'sagesse', 'présence'],
    '89:27': ['présence', 'espoir', 'guérison'],
    '89:28': ['présence', 'espoir', 'guérison'],
    '94:5': ['patience', 'espoir', 'force'],
    '112:1': ['méditation', 'présence', 'sagesse'],
    '112:2': ['méditation', 'confiance', 'sagesse']
  };
  
  try {
    const allVerses = await loadAllVerses();
    
    let results = allVerses.filter(v => {
      const matchesQuery = !query || 
        v.translation?.toLowerCase().includes(query) ||
        v.text?.includes(query) ||
        v.reference?.includes(query) ||
        v.surahName?.toLowerCase().includes(query);
      
      const matchesTheme = !theme || 
        (MIROIR_REFERENCES.includes(v.reference) && 
         MIROIR_THEMES[v.reference]?.includes(theme));
      
      return matchesQuery && matchesTheme;
    });
    
    // Add miroir flag
    results = results.map(v => ({
      ...v,
      hasMiroir: MIROIR_REFERENCES.includes(v.reference)
    }));
    
    // Limit results
    results = results.slice(0, 100);
    
    return NextResponse.json({ 
      results, 
      total: results.length,
      query,
      theme
    });
  } catch (error) {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
