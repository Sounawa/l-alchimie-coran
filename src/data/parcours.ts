// Parcours Spirituels - Séries de versets thématiques

export interface ParcoursItem {
  reference: string;
  title?: string;
}

export interface Parcours {
  key: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  verses: ParcoursItem[];
}

// Les 40 versets essentiels du Coran
export const PARCOURS_40_VERSETS: Parcours = {
  key: "40-versets",
  title: "Les 40 Versets Essentiels",
  description: "Une sélection des versets les plus impactants du Coran pour une compréhension profonde",
  icon: "📜",
  color: "#fbbf24",
  verses: [
    { reference: "1:1", title: "Bismillah - L'ouverture" },
    { reference: "1:2", title: "Louange au Seigneur des mondes" },
    { reference: "2:255", title: "Ayat al-Kursi - Le Trône" },
    { reference: "2:286", title: "La charge selon la capacité" },
    { reference: "3:139", title: "Ne faiblissez pas" },
    { reference: "3:185", title: "L'épreuve de la vie" },
    { reference: "5:3", title: "Parachèvement de la religion" },
    { reference: "6:162", title: "Ma prière, mon sacrifice, ma vie" },
    { reference: "7:23", title: "La prière du repentir" },
    { reference: "9:51", title: "Le destin" },
    { reference: "12:87", title: "L'espoir en Allah" },
    { reference: "13:28", title: "La paix des cœurs" },
    { reference: "15:49", title: "Allah est Pardonneur et Miséricordieux" },
    { reference: "17:23", title: "Le respect des parents" },
    { reference: "17:82", title: "Le Coran guérisseur" },
    { reference: "18:28", title: "La compagnie des justes" },
    { reference: "24:35", title: "Allah est la Lumière" },
    { reference: "29:69", title: "La guidance des efforts" },
    { reference: "31:18", title: "L'humilité" },
    { reference: "33:56", title: "Bénédiction sur le Prophète" },
    { reference: "39:53", title: "La miséricorde infinie" },
    { reference: "49:13", title: "La noblesse par la piété" },
    { reference: "50:16", title: "Allah est plus proche que la veine jugulaire" },
    { reference: "51:56", title: "Le but de la création" },
    { reference: "53:43", title: "La satisfaction en Allah" },
    { reference: "55:26-27", title: "L'éternité d'Allah" },
    { reference: "57:4", title: "Allah avec vous" },
    { reference: "59:22-24", title: "Les plus beaux noms" },
    { reference: "62:9", title: "L'appel à la prière du vendredi" },
    { reference: "65:3", title: "La provision inattendue" },
    { reference: "67:3", title: "La perfection de la création" },
    { reference: "70:32", title: "La fidélité aux engagements" },
    { reference: "76:9", title: "Nourrir par amour d'Allah" },
    { reference: "85:14", title: "Le Très-Pardonneur, Le Très-Affectueux" },
    { reference: "87:14", title: "Le succès par la purification" },
    { reference: "92:5-7", title: "La facilité pour le généreux" },
    { reference: "93:5", title: "Allah te donnera et tu seras satisfait" },
    { reference: "94:5-6", title: "La facilité avec la difficulté" },
    { reference: "94:7-8", title: "L'invocation après l'effort" },
    { reference: "112:1-4", title: "Al-Ikhlas - Le monothéisme pur" },
  ]
};

// Préparation à la prière
export const PARCOURS_PRIERE: Parcours = {
  key: "preparation-priere",
  title: "Préparation à la Prière",
  description: "Versets pour purifier le cœur et concentrer l'esprit avant la salat",
  icon: "🕌",
  color: "#a78bfa",
  verses: [
    { reference: "2:45", title: "La patience et la prière" },
    { reference: "2:238", title: "La ponctualité des prières" },
    { reference: "4:43", title: "La purification avant la prière" },
    { reference: "5:6", title: "Les ablutions" },
    { reference: "7:55", title: "L'invocation avec crainte et espoir" },
    { reference: "7:205", title: "Le rappel matin et soir" },
    { reference: "11:114", title: "La prière aux deux extrémités du jour" },
    { reference: "15:98", title: "Glorifier avant la prière" },
    { reference: "17:78", title: "La prière au déclin du soleil" },
    { reference: "17:79", title: "La prière nocturne" },
    { reference: "17:110", title: "Voix modérée dans la prière" },
    { reference: "20:14", title: "La prière pour Mon souvenir" },
    { reference: "22:35", title: "Les cœurs tremblants à l'évocation d'Allah" },
    { reference: "23:1-2", title: "Les croyants qui sont humbles dans leur prière" },
    { reference: "24:36-37", title: "Les maisons qu'Allah a permis d'élever" },
    { reference: "29:45", title: "La prière éloigne du mal" },
    { reference: "35:29-30", title: "La récompense de la prière régulière" },
    { reference: "50:39-40", title: "La patience et la glorification" },
    { reference: "70:22-23", title: "Ceux qui observent leur prière" },
    { reference: "76:25-26", title: "Le rappel matin et soir et la nuit" },
  ]
};

// Guérison du cœur
export const PARCOURS_GUERISON: Parcours = {
  key: "guerison-coeur",
  title: "Guérison du Cœur",
  description: "Versets de réconfort et de guérison pour les cœurs meurtris",
  icon: "💚",
  color: "#34d399",
  verses: [
    { reference: "2:286", title: "Allah n'impose pas plus que la capacité" },
    { reference: "3:139", title: "Ne faiblissez pas, ne vous affligez pas" },
    { reference: "9:51", title: "Rien ne nous atteint sans Sa permission" },
    { reference: "12:87", title: "Ne désespérez pas de la miséricorde d'Allah" },
    { reference: "13:28", title: "Les cœurs s'apaisent par le rappel d'Allah" },
    { reference: "15:49", title: "J suis le Pardonneur, le Miséricordieux" },
    { reference: "17:82", title: "Le Coran est une guérison et une miséricorde" },
    { reference: "26:80", title: "C'est Lui qui me guérit" },
    { reference: "39:53", title: "Ne désespérez pas de la miséricorde d'Allah" },
    { reference: "41:44", title: "Une guérison pour ce qui est dans les poitrines" },
    { reference: "42:30", title: "L'épreuve efface les péchés" },
    { reference: "48:4", title: "La sérénité dans les cœurs" },
    { reference: "55:26-27", title: "Tout périra sauf Sa Face" },
    { reference: "57:3", title: "Il est le Premier et le Dernier" },
    { reference: "57:4", title: "Il est avec vous partout" },
    { reference: "65:3", title: "Il lui donnera d'où il ne s'attend pas" },
    { reference: "65:7", title: "Allah allège le fardeau" },
    { reference: "94:5-6", title: "Avec la difficulté vient la facilité" },
    { reference: "94:1-4", title: "N'avons-Nous pas élargi ta poitrine?" },
    { reference: "97:5", title: "La nuit du Destin, la paix jusqu'à l'aube" },
  ]
};

// Verset du jour selon l'humeur
export const VERSETS_HUMEUR = {
  joie: {
    key: "joie",
    title: "Moments de Joie",
    icon: "😊",
    color: "#fbbf24",
    verses: [
      { reference: "10:58", title: "La grâce d'Allah" },
      { reference: "14:7", title: "La gratitude augmente" },
      { reference: "3:185", title: "La vraie vie" },
      { reference: "40:75", title: "Le rappel d'Allah dans la joie" },
      { reference: "55:13", title: "Lequel des bienfaits?" },
    ]
  },
  tristesse: {
    key: "tristesse",
    title: "Moments de Tristesse",
    icon: "😢",
    color: "#60a5fa",
    verses: [
      { reference: "12:87", title: "L'espoir en Allah" },
      { reference: "39:53", title: "La miséricorde infinie" },
      { reference: "17:82", title: "Guérison des poitrines" },
      { reference: "94:5-6", title: "Avec la difficulté, la facilité" },
      { reference: "65:3", title: "La provision inattendue" },
    ]
  },
  angoisse: {
    key: "angoisse",
    title: "Moments d'Angoisse",
    icon: "😰",
    color: "#f472b6",
    verses: [
      { reference: "2:255", title: "Ayat al-Kursi - Protection" },
      { reference: "13:28", title: "L'apaisement des cœurs" },
      { reference: "9:51", title: "Le destin d'Allah" },
      { reference: "48:4", title: "La sérénité" },
      { reference: "50:16", title: "Plus proche que la veine" },
    ]
  },
  colere: {
    key: "colere",
    title: "Moments de Colère",
    icon: "😤",
    color: "#f87171",
    verses: [
      { reference: "3:134", title: "Ceux qui contiennent leur colère" },
      { reference: "7:199", title: "Pardonne et excuse" },
      { reference: "41:34", title: "Repousser le mal par le bien" },
      { reference: "42:43", title: "La patience et le pardon" },
      { reference: "42:37", title: "Éviter les péchés majeurs" },
    ]
  },
  gratitude: {
    key: "gratitude",
    title: "Moments de Gratitude",
    icon: "🙏",
    color: "#a3e635",
    verses: [
      { reference: "14:7", title: "La reconnaissance" },
      { reference: "2:152", title: "Souvenez-vous de Moi" },
      { reference: "55:13", title: "Les bienfaits d'Allah" },
      { reference: "31:12", title: "La gratitude pour les bienfaits" },
      { reference: "39:7", title: "Allah se suffit à Lui-même" },
    ]
  },
  doute: {
    key: "doute",
    title: "Moments de Doute",
    icon: "🤔",
    color: "#94a3b8",
    verses: [
      { reference: "2:1-2", title: "Le Livre sans doute" },
      { reference: "3:7", title: "Les versets clairs" },
      { reference: "10:105", title: "La direction droite" },
      { reference: "21:42", title: "La protection d'Allah" },
      { reference: "67:12", title: "La guidance pour les bienveillants" },
    ]
  }
};

// Tous les parcours
export const PARCOURS_LIST: Parcours[] = [
  PARCOURS_40_VERSETS,
];

// Contextes temporels
export interface ThemeContext {
  key: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  themes: string[];
}

export const THEME_CONTEXTS: ThemeContext[] = [
  {
    key: "matin",
    title: "Matin",
    description: "Commencer la journée avec lumière et énergie",
    icon: "🌅",
    color: "#fbbf24",
    themes: ["gratitude", "espoir", "force"]
  },
  {
    key: "soir",
    title: "Soir",
    description: "Terminer la journée en paix et sérénité",
    icon: "🌙",
    color: "#818cf8",
    themes: ["pardon", "détachement", "présence"]
  },
  {
    key: "epreuve",
    title: "Épreuve",
    description: "Versets de soutien dans les moments difficiles",
    icon: "🏔️",
    color: "#f87171",
    themes: ["patience", "confiance", "guérison"]
  },
  {
    key: "joie",
    title: "Joie",
    description: "Célébrer les bienfaits et les moments heureux",
    icon: "✨",
    color: "#34d399",
    themes: ["gratitude", "amour", "méditation"]
  }
];

// Niveaux de profondeur
export interface DepthLevel {
  level: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const DEPTH_LEVELS: DepthLevel[] = [
  {
    level: 1,
    title: "Découverte",
    description: "Le verset seul, dans sa pureté",
    icon: "🌱",
    color: "#34d399"
  },
  {
    level: 2,
    title: "Contemplation",
    description: "Le verset avec son reflet miroir",
    icon: "🌊",
    color: "#60a5fa"
  },
  {
    level: 3,
    title: "Profond",
    description: "Les 6 niveaux de Tajalli détaillés",
    icon: "💫",
    color: "#a78bfa"
  }
];
