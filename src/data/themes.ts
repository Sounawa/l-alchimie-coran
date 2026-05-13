export interface Theme {
  key: string;
  label: string;
  ar: string;
  bg: string;
  border: string;
  color: string;
}

export interface ThemeCategory {
  key: string;
  label: string;
  ar: string;
  icon: string;
  themes: Theme[];
}

// Toutes les catégories de thèmes par dimension spirituelle
export const THEME_CATEGORIES: ThemeCategory[] = [
  {
    key: "interieure",
    label: "Dimension Intérieure",
    ar: "الباطن",
    icon: "🌟",
    themes: [
      { key: "confiance", label: "Confiance", ar: "توكل", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.25)", color: "#34d399" },
      { key: "patience", label: "Patience", ar: "صبر", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.25)", color: "#fbbf24" },
      { key: "sagesse", label: "Sagesse", ar: "حكمة", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.25)", color: "#818cf8" },
    ]
  },
  {
    key: "relationnelle",
    label: "Dimension Relationnelle",
    ar: "صلة",
    icon: "💫",
    themes: [
      { key: "amour", label: "Amour", ar: "مودة", bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.25)", color: "#f472b6" },
      { key: "pardon", label: "Pardon", ar: "مغفرة", bg: "rgba(251,113,133,0.08)", border: "rgba(251,113,133,0.25)", color: "#fb7185" },
      { key: "gratitude", label: "Gratitude", ar: "شكر", bg: "rgba(250,204,21,0.08)", border: "rgba(250,204,21,0.25)", color: "#facc15" },
    ]
  },
  {
    key: "transformative",
    label: "Dimension Transformative",
    ar: "تحول",
    icon: "🔥",
    themes: [
      { key: "force", label: "Force", ar: "قوة", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.25)", color: "#f87171" },
      { key: "transformation", label: "Transformation", ar: "تغيير", bg: "rgba(232,121,249,0.08)", border: "rgba(232,121,249,0.25)", color: "#e879f9" },
      { key: "espoir", label: "Espoir", ar: "رجاء", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.25)", color: "#fb923c" },
    ]
  },
  {
    key: "devotionnelle",
    label: "Dimension Dévotionnelle",
    ar: "عبادة",
    icon: "🙏",
    themes: [
      { key: "prière", label: "Prière", ar: "دعاء", bg: "rgba(163,230,53,0.08)", border: "rgba(163,230,53,0.25)", color: "#a3e635" },
      { key: "guidance", label: "Guidance", ar: "هداية", bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.25)", color: "#38bdf8" },
      { key: "méditation", label: "Méditation", ar: "تدبر", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.25)", color: "#a78bfa" },
    ]
  },
  {
    key: "spirituelle",
    label: "Dimension Spirituelle",
    ar: "روح",
    icon: "🌿",
    themes: [
      { key: "présence", label: "Présence", ar: "حضور", bg: "rgba(34,211,238,0.08)", border: "rgba(34,211,238,0.25)", color: "#22d3ee" },
      { key: "détachement", label: "Détachement", ar: "زهد", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.25)", color: "#94a3b8" },
      { key: "guérison", label: "Guérison", ar: "شفاء", bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.25)", color: "#2dd4bf" },
    ]
  },
];

// Liste plate de tous les thèmes pour la compatibilité
export const THEMES: Theme[] = THEME_CATEGORIES.flatMap(cat => cat.themes);

// Map pour accès rapide par clé
export const THEME_MAP: Record<string, Theme> = {};
THEMES.forEach(t => { THEME_MAP[t.key] = t; });
