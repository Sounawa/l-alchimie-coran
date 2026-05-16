// Pre-calculated theme counts to avoid runtime O(N) operations
// This file is auto-generated

import { THEME_CATEGORIES } from './themes';
import { MIROIR_INDEX } from './miroir-index';

// Calculate counts once at build time
export const THEME_COUNTS: Record<string, number> = {};
export const CATEGORY_COUNTS: Record<string, number> = {};

// Initialize counts
Object.entries(MIROIR_INDEX).forEach(([ref, entry]) => {
  entry.theme.forEach((t: string) => {
    THEME_COUNTS[t] = (THEME_COUNTS[t] || 0) + 1;
  });
});

// Calculate category counts
THEME_CATEGORIES.forEach(cat => {
  const themeKeys = cat.themes.map(t => t.key);
  CATEGORY_COUNTS[cat.key] = Object.values(MIROIR_INDEX).filter(
    (m: { theme: string[] }) => m.theme.some(t => themeKeys.includes(t))
  ).length;
});

export function getThemeCount(themeKey: string): number {
  return THEME_COUNTS[themeKey] || 0;
}

export function getCategoryCount(categoryKey: string): number {
  return CATEGORY_COUNTS[categoryKey] || 0;
}
