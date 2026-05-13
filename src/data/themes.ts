import { PARCOURS_LIST, PARCOURS_40_VERSETS, PARCOURS_PRIERE, PARCOURS_GUERISON, VERSETS_HUMEUR, THEME_CONTEXTS, DEPTH_LEVELS } from './parcours';

export interface Theme {
  key: string;
  label: string;
  ar: string;
  bg: string;
  border: string;
  color: string;
  subThemes?: SubTheme[];
}

export interface SubTheme {
  key: string;
  label: string;
  ar: string;
  description: string;
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
      { 
        key: "confiance", 
        label: "Confiance", 
        ar: "توكل", 
        bg: "rgba(52,211,153,0.08)", 
        border: "rgba(52,211,153,0.25)", 
        color: "#34d399",
        subThemes: [
          { key: "confiance-destin", label: "Confiance dans le destin", ar: "قضاء", description: "Accepter ce qui vient d'Allah" },
          { key: "confiance-provision", label: "Confiance dans la provision", ar: "رزق", description: "Allah pourvoit à tous les besoins" },
          { key: "confiance-protection", label: "Confiance dans la protection", ar: "حماية", description: "S'abriter sous la protection divine" }
        ]
      },
      { 
        key: "patience", 
        label: "Patience", 
        ar: "صبر", 
        bg: "rgba(251,191,36,0.08)", 
        border: "rgba(251,191,36,0.25)", 
        color: "#fbbf24",
        subThemes: [
          { key: "patience-epreuve", label: "Patience dans l'épreuve", ar: "بلاء", description: "Endurer avec grâce les difficultés" },
          { key: "patience-priere", label: "Patience dans la prière", ar: "صلاة", description: "Persévérer dans l'adoration" },
          { key: "patience-victoire", label: "Patience avant la victoire", ar: "نصر", description: "Attendre le soulagement d'Allah" }
        ]
      },
      { 
        key: "sagesse", 
        label: "Sagesse", 
        ar: "حكمة", 
        bg: "rgba(129,140,248,0.08)", 
        border: "rgba(129,140,248,0.25)", 
        color: "#818cf8",
        subThemes: [
          { key: "sagesse-comprendre", label: "Comprendre les signes", ar: "آيات", description: "Voir la sagesse dans toute chose" },
          { key: "sagesse-parole", label: "Sagesse de la parole", ar: "قول", description: "Parler avec discernement" },
          { key: "sagesse-action", label: "Sagesse dans l'action", ar: "عمل", description: "Agir avec justesse" }
        ]
      },
    ]
  },
  {
    key: "relationnelle",
    label: "Dimension Relationnelle",
    ar: "صلة",
    icon: "💫",
    themes: [
      { 
        key: "amour", 
        label: "Amour", 
        ar: "مودة", 
        bg: "rgba(244,114,182,0.08)", 
        border: "rgba(244,114,182,0.25)", 
        color: "#f472b6",
        subThemes: [
          { key: "amour-creatures", label: "Amour des créatures", ar: "خلق", description: "Aimer pour Allah" },
          { key: "amour-famille", label: "Amour familial", ar: "أهل", description: "Les liens du sang et du cœur" },
          { key: "amour-divin", label: "Amour d'Allah", ar: "حب الله", description: "L'amour suprême" }
        ]
      },
      { 
        key: "pardon", 
        label: "Pardon", 
        ar: "مغفرة", 
        bg: "rgba(251,113,133,0.08)", 
        border: "rgba(251,113,133,0.25)", 
        color: "#fb7185",
        subThemes: [
          { key: "pardon-autrui", label: "Pardonner aux autres", ar: "عفو", description: "Libérer son cœur du ressentiment" },
          { key: "pardon-soi", label: "Se pardonner à soi", ar: "نفس", description: "Accepter ses imperfections" },
          { key: "pardon-divin", label: "Le pardon d'Allah", ar: "غفران", description: "L'immense miséricorde" }
        ]
      },
      { 
        key: "gratitude", 
        label: "Gratitude", 
        ar: "شكر", 
        bg: "rgba(250,204,21,0.08)", 
        border: "rgba(250,204,21,0.25)", 
        color: "#facc15",
        subThemes: [
          { key: "gratitude-bienfaits", label: "Gratitude pour les bienfaits", ar: "نعم", description: "Reconnaître les faveurs d'Allah" },
          { key: "gratitude-epreuve", label: "Gratitude dans l'épreuve", ar: "بلاء", description: "Voir le bien dans chaque situation" },
          { key: "gratitude-quotidien", label: "Gratitude quotidienne", ar: "يومي", description: "Remercier sans cesse" }
        ]
      },
    ]
  },
  {
    key: "transformative",
    label: "Dimension Transformative",
    ar: "تحول",
    icon: "🔥",
    themes: [
      { 
        key: "force", 
        label: "Force", 
        ar: "قوة", 
        bg: "rgba(248,113,113,0.08)", 
        border: "rgba(248,113,113,0.25)", 
        color: "#f87171",
        subThemes: [
          { key: "force-interieure", label: "Force intérieure", ar: "قلب", description: "La résilience du cœur" },
          { key: "force-courage", label: "Courage", ar: "شجاعة", description: "Affronter ses peurs" },
          { key: "force-perserverance", label: "Persévérance", ar: "مثابرة", description: "Ne jamais abandonner" }
        ]
      },
      { 
        key: "transformation", 
        label: "Transformation", 
        ar: "تغيير", 
        bg: "rgba(232,121,249,0.08)", 
        border: "rgba(232,121,249,0.25)", 
        color: "#e879f9",
        subThemes: [
          { key: "transformation-ame", label: "Transformation de l'âme", ar: "روح", description: "Évoluer spirituellement" },
          { key: "transformation-habitudes", label: "Changer ses habitudes", ar: "عادة", description: "Devenir meilleur chaque jour" },
          { key: "transformation-repentir", label: "Le repentir transformateur", ar: "توبة", description: "Revenir à Allah" }
        ]
      },
      { 
        key: "espoir", 
        label: "Espoir", 
        ar: "رجاء", 
        bg: "rgba(251,146,60,0.08)", 
        border: "rgba(251,146,60,0.25)", 
        color: "#fb923c",
        subThemes: [
          { key: "espoir-misericorde", label: "Espoir en la miséricorde", ar: "رحمة", description: "Jamais désespérer d'Allah" },
          { key: "espoir-avenir", label: "Espoir pour l'avenir", ar: "مستقبل", description: "Faire confiance au plan divin" },
          { key: "espoir-journee", label: "Espoir chaque jour", ar: "يوم", description: "Un nouveau matin, un nouvel espoir" }
        ]
      },
    ]
  },
  {
    key: "devotionnelle",
    label: "Dimension Dévotionnelle",
    ar: "عبادة",
    icon: "🙏",
    themes: [
      { 
        key: "prière", 
        label: "Prière", 
        ar: "دعاء", 
        bg: "rgba(163,230,53,0.08)", 
        border: "rgba(163,230,53,0.25)", 
        color: "#a3e635",
        subThemes: [
          { key: "priere-invocation", label: "Invocation", ar: "دعاء", description: "Parler à Allah" },
          { key: "priere-concentration", label: "Concentration", ar: "خشوع", description: "La présence dans la salat" },
          { key: "priere-nuit", label: "Prière nocturne", ar: "قيام", description: "Les moments d'intimité avec Allah" }
        ]
      },
      { 
        key: "guidance", 
        label: "Guidance", 
        ar: "هداية", 
        bg: "rgba(56,189,248,0.08)", 
        border: "rgba(56,189,248,0.25)", 
        color: "#38bdf8",
        subThemes: [
          { key: "guidance-decision", label: "Guidance dans les décisions", ar: "اختيار", description: "Istikhara, le choix éclairé" },
          { key: "guidance-chemin", label: "Le chemin droit", ar: "صراط", description: "Suivre la voie d'Allah" },
          { key: "guidance-lumiere", label: "La lumière de la guidance", ar: "نور", description: "Voir clair dans les ténèbres" }
        ]
      },
      { 
        key: "méditation", 
        label: "Méditation", 
        ar: "تدبر", 
        bg: "rgba(167,139,250,0.08)", 
        border: "rgba(167,139,250,0.25)", 
        color: "#a78bfa",
        subThemes: [
          { key: "meditation-coran", label: "Méditation du Coran", ar: "قرآن", description: "Plonger dans les versets" },
          { key: "meditation-creation", label: "Méditation sur la création", ar: "خلق", description: "Voir les signes d'Allah" },
          { key: "meditation-memoire", label: "Mémoire d'Allah", ar: "ذكر", description: "Le dhikr continu" }
        ]
      },
    ]
  },
  {
    key: "spirituelle",
    label: "Dimension Spirituelle",
    ar: "روح",
    icon: "🌿",
    themes: [
      { 
        key: "présence", 
        label: "Présence", 
        ar: "حضور", 
        bg: "rgba(34,211,238,0.08)", 
        border: "rgba(34,211,238,0.25)", 
        color: "#22d3ee",
        subThemes: [
          { key: "presence-ici", label: "Ici et maintenant", ar: "آن", description: "Être pleinement présent" },
          { key: "presence-allah", label: "Présence d'Allah", ar: "حضور الله", description: "Allah est avec nous" },
          { key: "presence-coeur", label: "Présence du cœur", ar: "حضور القلب", description: "Le cœur éveillé" }
        ]
      },
      { 
        key: "détachement", 
        label: "Détachement", 
        ar: "زهد", 
        bg: "rgba(148,163,184,0.08)", 
        border: "rgba(148,163,184,0.25)", 
        color: "#94a3b8",
        subThemes: [
          { key: "detachement-monde", label: "Détachement du monde", ar: "دنيا", description: "Ce bas-monde est éphémère" },
          { key: "detachement-biens", label: "Détachement des biens", ar: "مال", description: "Les richesses ne sont rien" },
          { key: "detachement-ego", label: "Détachement de l'ego", ar: "نفس", description: "Se libérer de soi-même" }
        ]
      },
      { 
        key: "guérison", 
        label: "Guérison", 
        ar: "شفاء", 
        bg: "rgba(45,212,191,0.08)", 
        border: "rgba(45,212,191,0.25)", 
        color: "#2dd4bf",
        subThemes: [
          { key: "guerison-corps", label: "Guérison du corps", ar: "جسم", description: "La santé physique" },
          { key: "guerison-coeur", label: "Guérison du cœur", ar: "قلب", description: "Apaiser les blessures émotionnelles" },
          { key: "guerison-relations", label: "Guérison des relations", ar: "علاقات", description: "Réparer les liens brisés" },
          { key: "guerison-spirituelle", label: "Guérison spirituelle", ar: "روح", description: "La paix de l'âme" }
        ]
      },
    ]
  },
];

// Liste plate de tous les thèmes pour la compatibilité
export const THEMES: Theme[] = THEME_CATEGORIES.flatMap(cat => cat.themes);

// Map pour accès rapide par clé
export const THEME_MAP: Record<string, Theme> = {};
THEMES.forEach(t => { THEME_MAP[t.key] = t; });

// Export des parcours et contexts
export { PARCOURS_LIST, PARCOURS_40_VERSETS, PARCOURS_PRIERE, PARCOURS_GUERISON, VERSETS_HUMEUR, THEME_CONTEXTS, DEPTH_LEVELS };
