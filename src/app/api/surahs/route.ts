import { NextResponse } from 'next/server';

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/fr';

// Miroir references for counting
const MIROIR_REFERENCES = [
  '1:1', '1:5', '13:28', '39:53', '94:5', '50:16', '2:186', 
  '65:3', '2:286', '89:27', '89:28', '112:1'
];

export async function GET() {
  try {
    const response = await fetch(`${CDN_BASE}/index.json`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    const surahs = await response.json();
    
    // Add miroir count to each surah
    const surahsWithMiroir = surahs.map((s: any) => {
      const miroirCount = MIROIR_REFERENCES.filter(ref => 
        ref.startsWith(`${s.id}:`)
      ).length;
      return { ...s, miroirCount };
    });
    
    return NextResponse.json(surahsWithMiroir);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch surahs' }, { status: 500 });
  }
}
