import { NextResponse } from 'next/server';
import { MIROIR } from '@/data/miroir';

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/fr';

export async function GET() {
  try {
    const response = await fetch(`${CDN_BASE}/index.json`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    const surahs = await response.json();
    
    // Get all miroir references and count by surah
    const miroirKeys = Object.keys(MIROIR);
    const miroirCounts: Record<number, number> = {};
    
    miroirKeys.forEach(key => {
      const surahId = parseInt(key.split(':')[0]);
      miroirCounts[surahId] = (miroirCounts[surahId] || 0) + 1;
    });
    
    // Add miroir count to each surah
    const surahsWithMiroir = surahs.map((s: any) => {
      return { ...s, miroirCount: miroirCounts[s.id] || 0 };
    });
    
    return NextResponse.json(surahsWithMiroir);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch surahs' }, { status: 500 });
  }
}
