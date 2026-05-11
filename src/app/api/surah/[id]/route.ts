import { NextResponse } from 'next/server';

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/fr';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    const response = await fetch(`${CDN_BASE}/${id}.json`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Surah not found' }, { status: 404 });
    }
    
    const surah = await response.json();
    return NextResponse.json(surah);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch surah' }, { status: 500 });
  }
}
