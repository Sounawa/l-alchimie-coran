import { NextResponse } from 'next/server';

// Cache the counts
let cachedCounts: { themes: Record<string, number>; categories: Record<string, number> } | null = null;

export async function GET() {
  if (cachedCounts) {
    return NextResponse.json(cachedCounts);
  }

  // Dynamically import to avoid loading during initial render
  const { MIROIR_INDEX } = await import('@/data/miroir-index');
  const { THEME_CATEGORIES } = await import('@/data/themes');

  const themeCounts: Record<string, number> = {};
  const categoryCounts: Record<string, number> = {};

  // Calculate theme counts
  Object.values(MIROIR_INDEX).forEach((entry: { theme: string[] }) => {
    entry.theme.forEach(t => {
      themeCounts[t] = (themeCounts[t] || 0) + 1;
    });
  });

  // Calculate category counts
  THEME_CATEGORIES.forEach(cat => {
    const themeKeys = cat.themes.map(t => t.key);
    categoryCounts[cat.key] = Object.values(MIROIR_INDEX).filter(
      (m: { theme: string[] }) => m.theme.some(t => themeKeys.includes(t))
    ).length;
  });

  cachedCounts = { themes: themeCounts, categories: categoryCounts };
  return NextResponse.json(cachedCounts);
}
