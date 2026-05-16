export interface Emotion {
  key: string;
  label: string;
  icon: string;
  description: string;
  keywords: string[];
  color: string;
  bg: string;
}

// Système d'émotions simplifié pour la navigation
export const EMOTIONS: Emotion[] = [
  {
    key: "triste",
    label: "Triste",
    icon: "😢",
    description: "Besoin de réconfort et d'espoir",
    keywords: ["tristesse", "douleur", "peine", "chagrin", "deuil", "mélancolie", "spleen", "détresse"],
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.1)"
  },
  {
    key: "anxieux",
    label: "Anxieux",
    icon: "😰",
    description: "Besoin de paix et de sérénité",
    keywords: ["anxiété", "peur", "angoisse", "inquiétude", "stress", "tourment", "préoccupation", "crainte"],
    color: "#f472b6",
    bg: "rgba(244,114,182,0.1)"
  },
  {
    key: "paisible",
    label: "Paisible",
    icon: "😌",
    description: "Cultiver la sérénité intérieure",
    keywords: ["paix", "sérénité", "calme", "tranquillité", "repos", "quiétude", "apaisement"],
    color: "#34d399",
    bg: "rgba(52,211,153,0.1)"
  },
  {
    key: "eprouve",
    label: "Éprouvé",
    icon: "💪",
    description: "Pour traverser les difficultés",
    keywords: ["épreuve", "difficulté", "épuisement", "fatigue", "souffrance", "tribulation", "obstacle", "dur"],
    color: "#fb923c",
    bg: "rgba(251,146,60,0.1)"
  },
  {
    key: "reconnaissant",
    label: "Reconnaissant",
    icon: "🙏",
    description: "Exprimer la gratitude",
    keywords: ["gratitude", "reconnaissance", "merci", "bénédiction", "faveur", "bienfait", "générosité"],
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.1)"
  },
  {
    key: "brisé",
    label: "Brisé",
    icon: "💔",
    description: "Pour le cœur meurtri",
    keywords: ["cœur brisé", "blessure", "déception", "trahison", "rejet", "abandon", "solitude", "meurtri"],
    color: "#f87171",
    bg: "rgba(248,113,113,0.1)"
  },
  {
    key: "coupable",
    label: "Coupable",
    icon: "😔",
    description: "Chercher le pardon et le renouveau",
    keywords: ["culpabilité", "regret", "remords", "pardon", "repentir", "faute", "erreur", "honte"],
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.1)"
  },
  {
    key: "espoir",
    label: "Espoir",
    icon: "✨",
    description: "Raviver la lumière intérieure",
    keywords: ["espoir", "espérance", "attente", "promesse", "avenir", "optimisme", "confiance", "foi"],
    color: "#facc15",
    bg: "rgba(250,204,21,0.1)"
  },
  {
    key: "emerveille",
    label: "Émerveillé",
    icon: "💫",
    description: "Contempler la beauté divine",
    keywords: ["émerveillement", "beauté", "miracle", "merveille", "création", "signes", "lumière", "gloire"],
    color: "#c9a227",
    bg: "rgba(201,162,39,0.1)"
  },
  {
    key: "confus",
    label: "Confus",
    icon: "🤔",
    description: "Chercher la clarté et la guidance",
    keywords: ["confusion", "doute", "perdu", "égarement", "incertitude", "indécision", "question", "réponse"],
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.1)"
  },
  {
    key: "aimant",
    label: "Aimant",
    icon: "❤️",
    description: "Approfondir l'amour divin",
    keywords: ["amour", "affection", "tendresse", "passion", "cœur", "intimité", "proximité", "attachement"],
    color: "#fb7185",
    bg: "rgba(251,113,133,0.1)"
  },
  {
    key: "colere",
    label: "En colère",
    icon: "🔥",
    description: "Transformer la colère en sagesse",
    keywords: ["colère", "rage", "frustration", "irritation", "injustice", "révolte", "indignation"],
    color: "#ef4444",
    bg: "rgba(239,68,68,0.1)"
  },
];

// Fonction pour trouver les versets correspondant à une émotion
export function findVersesByEmotion(emotionKey: string): string[] {
  const emotion = EMOTIONS.find(e => e.key === emotionKey);
  if (!emotion) return [];
  
  const keywords = emotion.keywords;
  // Cette fonction sera utilisée côté client pour filtrer
  // L'API fera la recherche réelle
  return keywords;
}

// Mapping des émotions dans les données vers les catégories simplifiées
export const EMOTION_TO_CATEGORY: Record<string, string> = {
  // Tristesse
  "tristesse": "triste", "douleur": "triste", "peine": "triste", "chagrin": "triste",
  "deuil": "triste", "mélancolie": "triste", "spleen": "triste", "détresse": "triste",
  
  // Anxiété
  "anxiété": "anxieux", "peur": "anxieux", "angoisse": "anxieux", "inquiétude": "anxieux",
  "stress": "anxieux", "tourment": "anxieux", "préoccupation": "anxieux", "crainte": "anxieux",
  
  // Paix
  "paix": "paisible", "sérénité": "paisible", "calme": "paisible", "tranquillité": "paisible",
  "repos": "paisible", "quiétude": "paisible", "apaisement": "paisible",
  
  // Épreuve
  "épreuve": "eprouve", "difficulté": "eprouve", "épuisement": "eprouve", "fatigue": "eprouve",
  "souffrance": "eprouve", "tribulation": "eprouve", "obstacle": "eprouve", "dur": "eprouve",
  
  // Gratitude
  "gratitude": "reconnaissant", "reconnaissance": "reconnaissant", "merci": "reconnaissant",
  "bénédiction": "reconnaissant", "faveur": "reconnaissant", "bienfait": "reconnaissant",
  
  // Brisé
  "cœur brisé": "brise", "blessure": "brise", "déception": "brise", "trahison": "brise",
  "rejet": "brise", "abandon": "brise", "solitude": "brise", "meurtri": "brise",
  
  // Culpabilité
  "culpabilité": "coupable", "regret": "coupable", "remords": "coupable", "pardon": "coupable",
  "repentir": "coupable", "faute": "coupable", "erreur": "coupable", "honte": "coupable",
  
  // Espoir
  "espoir": "espoir", "espérance": "espoir", "attente": "espoir", "promesse": "espoir",
  "avenir": "espoir", "optimisme": "espoir", "confiance": "espoir", "foi": "espoir",
  
  // Émerveillement
  "émerveillement": "emerveille", "beauté": "emerveille", "miracle": "emerveille",
  "merveille": "emerveille", "création": "emerveille", "signes": "emerveille",
  
  // Confusion
  "confusion": "confus", "doute": "confus", "perdu": "confus", "égarement": "confus",
  "incertitude": "confus", "indécision": "confus", "question": "confus",
  
  // Amour
  "amour": "aimant", "affection": "aimant", "tendresse": "aimant", "passion": "aimant",
  "intimité": "aimant", "proximité": "aimant", "attachement": "aimant",
  
  // Colère
  "colère": "colere", "rage": "colere", "frustration": "colere", "irritation": "colere",
  "injustice": "colere", "révolte": "colere", "indignation": "colere",
};
