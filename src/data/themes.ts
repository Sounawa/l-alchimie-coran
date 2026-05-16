import { PARCOURS_LIST, PARCOURS_40_VERSETS, VERSETS_HUMEUR, THEME_CONTEXTS, DEPTH_LEVELS } from './parcours';

export interface Theme {
  key: string;
  label: string;
  ar: string;
  bg: string;
  border: string;
  color: string;
  subThemes?: SubTheme[];
  tags?: string[]; // Phase 2: Tags spirituels secondaires
  divineNames?: string[]; // Phase 3: Noms divins associés
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

// Phase 2: Tags spirituels secondaires
export interface SpiritualTag {
  key: string;
  label: string;
  icon: string;
  description: string;
}

export const SPIRITUAL_TAGS: SpiritualTag[] = [
  { key: "debutant", label: "Débutant", icon: "🌱", description: "Versets simples, accessibles" },
  { key: "intermediaire", label: "Intermédiaire", icon: "🌿", description: "Versets avec réflexion" },
  { key: "avance", label: "Avancé", icon: "🌳", description: "Versets profonds, ésotériques" },
  { key: "joyau", label: "Joyau", icon: "💎", description: "Versets particulièrement beaux" },
  { key: "urgent", label: "Urgent", icon: "⚡", description: "Versets pour moments de crise" },
  { key: "invitation", label: "Invitation", icon: "🤲", description: "Versets qui invitent au du'a" },
  { key: "protection", label: "Protection", icon: "🛡️", description: "Versets de protection divine" },
  { key: "guerison-tag", label: "Guérison", icon: "💚", description: "Versets de guérison" },
];

// Phase 3: Les 99 Noms d'Allah (principaux)
export interface DivineName {
  key: string;
  ar: string;
  fr: string;
  meaning: string;
}

export const DIVINE_NAMES: DivineName[] = [
  { key: "ar-rahman", ar: "الرَّحْمَنُ", fr: "Le Tout-Miséricordieux", meaning: "Celui qui fait miséricorde à toute la création" },
  { key: "ar-rahim", ar: "الرَّحِيمُ", fr: "Le Très-Miséricordieux", meaning: "Celui qui fait miséricorde aux croyants" },
  { key: "al-malik", ar: "الْمَلِكُ", fr: "Le Roi", meaning: "Le Souverain absolu" },
  { key: "al-quddus", ar: "الْقُدُّوسُ", fr: "Le Saint", meaning: "Le Pur, exempt de toute imperfection" },
  { key: "as-salam", ar: "السَّلَامُ", fr: "La Paix", meaning: "La Source de la paix" },
  { key: "al-mumin", ar: "الْمُؤْمِنُ", fr: "Le Fidèle", meaning: "Celui qui accorde la sécurité" },
  { key: "al-muhaymin", ar: "الْمُهَيْمِنُ", fr: "Le Surveillant", meaning: "Le Témoin de toute chose" },
  { key: "al-aziz", ar: "الْعَزِيزُ", fr: "Le Puissant", meaning: "L'Invincible, le Fort" },
  { key: "al-jabbar", ar: "الْجَبَّارُ", fr: "Le Tout-Puissant", meaning: "Celui qui répare et restore" },
  { key: "al-mutakabbir", ar: "الْمُتَكَبِّرُ", fr: "Le Superbe", meaning: "Le Magnifique par excellence" },
  { key: "al-khaliq", ar: "الْخَالِقُ", fr: "Le Créateur", meaning: "Celui qui crée de l'inexistence" },
  { key: "al-bari", ar: "الْبَارِئُ", fr: "Le Producteur", meaning: "Celui qui donne forme" },
  { key: "al-musawwir", ar: "الْمُصَوِّرُ", fr: "Le Formateur", meaning: "Celui qui façonne" },
  { key: "al-ghaffar", ar: "الْغَفَّارُ", fr: "Le Grand Pardonneur", meaning: "Celui qui pardonne sans cesse" },
  { key: "al-qahhar", ar: "الْقَهَّارُ", fr: "Le Dominateur", meaning: "Celui qui domine toute chose" },
  { key: "al-wahhab", ar: "الْوَهَّابُ", fr: "Le Donateur", meaning: "Celui qui donne sans compter" },
  { key: "ar-razzaq", ar: "الرَّزَّاقُ", fr: "Le Pourvoyeur", meaning: "Celui qui pourvoit à tous" },
  { key: "al-fattah", ar: "الْفَتَّاحُ", fr: "L'Ouvreur", meaning: "Celui qui ouvre les portes" },
  { key: "al-alim", ar: "الْعَلِيمُ", fr: "Le Savant", meaning: "L'Omniscient" },
  { key: "al-qabid", ar: "الْقَابِضُ", fr: "Celui qui resserre", meaning: "Celui qui retient" },
  { key: "al-basit", ar: "الْبَاسِطُ", fr: "Celui qui élargit", meaning: "Celui qui donne abondamment" },
  { key: "al-khafid", ar: "الْخَافِضُ", fr: "Celui qui abaisse", meaning: "Celui qui humilie les orgueilleux" },
  { key: "ar-rafi", ar: "الرَّافِعُ", fr: "Celui qui élève", meaning: "Celui qui élève les humbles" },
  { key: "al-muizz", ar: "الْمُعِزُّ", fr: "Celui qui honore", meaning: "Celui qui donne la gloire" },
  { key: "al-mudhill", ar: "الْمُذِلُّ", fr: "Celui qui humilie", meaning: "Celui qui abaisse" },
  { key: "as-sami", ar: "السَّمِيعُ", fr: "L'Audient", meaning: "Celui qui entend tout" },
  { key: "al-basir", ar: "الْبَصِيرُ", fr: "Le Voyant", meaning: "Celui qui voit tout" },
  { key: "al-hakam", ar: "الْحَكَمُ", fr: "Le Juge", meaning: "L'Arbitre suprême" },
  { key: "al-adl", ar: "الْعَدْلُ", fr: "Le Juste", meaning: "La Justice absolue" },
  { key: "al-latif", ar: "اللَّطِيفُ", fr: "Le Doux", meaning: "Le Subtil, le Bienveillant" },
  { key: "al-khabir", ar: "الْخَبِيرُ", fr: "Le Bien-Informé", meaning: "Celui qui connaît les secrets" },
  { key: "al-halim", ar: "الْحَلِيمُ", fr: "Le Indulgent", meaning: "Le Doux et patient" },
  { key: "al-azim", ar: "الْعَظِيمُ", fr: "L'Immense", meaning: "Le Majestueux" },
  { key: "al-ghafur", ar: "الْغَفُورُ", fr: "Le Pardonneur", meaning: "Celui qui couvre les fautes" },
  { key: "ash-shakur", ar: "الشَّكُورُ", fr: "Le Reconnaissant", meaning: "Celui qui récompense" },
  { key: "al-aliyy", ar: "الْعَلِيُّ", fr: "Le Très-Haut", meaning: "L'Exalté" },
  { key: "al-kabir", ar: "الْكَبِيرُ", fr: "Le Grand", meaning: "Le Suprême" },
  { key: "al-hafiz", ar: "الْحَفِيظُ", fr: "Le Gardien", meaning: "Le Protecteur" },
  { key: "al-muqit", ar: "الْمُقِيتُ", fr: "Le Nourricier", meaning: "Celui qui nourrit" },
  { key: "al-hasib", ar: "الْحَسِيبُ", fr: "Le Comptable", meaning: "Celui qui suffit" },
  { key: "al-jalil", ar: "الْجَلِيلُ", fr: "Le Majestueux", meaning: "Le Glorieux" },
  { key: "al-karim", ar: "الْكَرِيمُ", fr: "Le Généreux", meaning: "Le Noble" },
  { key: "ar-raqib", ar: "الرَّقِيبُ", fr: "Le Vigilant", meaning: "L'Observateur" },
  { key: "al-mujib", ar: "الْمُجِيبُ", fr: "Celui qui répond", meaning: "L'Exauceur" },
  { key: "al-wasi", ar: "الْوَاسِعُ", fr: "Le Vaste", meaning: "L'Immense" },
  { key: "al-hakim", ar: "الْحَكِيمُ", fr: "Le Sage", meaning: "La Sagesse absolue" },
  { key: "al-wadud", ar: "الْوَدُودُ", fr: "L'Aimant", meaning: "Celui qui aime" },
  { key: "al-majid", ar: "الْمَجِيدُ", fr: "Le Glorieux", meaning: "Le Très Noble" },
  { key: "al-baith", ar: "الْبَاعِثُ", fr: "Le Résurrecteur", meaning: "Celui qui ressuscite" },
  { key: "ash-shahid", ar: "الشَّهِيدُ", fr: "Le Témoin", meaning: "Le Présent partout" },
  { key: "al-haqq", ar: "الْحَقُّ", fr: "Le Vrai", meaning: "La Vérité absolue" },
  { key: "al-wakil", ar: "الْوَكِيلُ", fr: "Le Gérant", meaning: "Le Tuteur fidèle" },
  { key: "al-qawiyy", ar: "الْقَوِيُّ", fr: "Le Fort", meaning: "La Force absolue" },
  { key: "al-matin", ar: "الْمَتِينُ", fr: "Le Solide", meaning: "L'Inébranlable" },
  { key: "al-waliyy", ar: "الْوَلِيُّ", fr: "L'Ami", meaning: "Le Protecteur" },
  { key: "al-hamid", ar: "الْحَمِيدُ", fr: "Le Digne de louanges", meaning: "Le Loué" },
  { key: "al-muhsi", ar: "الْمُحْصِي", fr: "Le Compteur", meaning: "Celui qui dénombre" },
  { key: "al-mubdi", ar: "الْمُبْدِئُ", fr: "L'Initiateur", meaning: "Celui qui commence" },
  { key: "al-muid", ar: "الْمُعِيدُ", fr: "Le Restaurateur", meaning: "Celui qui ramène" },
  { key: "al-muhyi", ar: "الْمُحْيِي", fr: "Celui qui fait vivre", meaning: "Le Vivifiant" },
  { key: "al-mumit", ar: "الْمُمِيتُ", fr: "Celui qui fait mourir", meaning: "Celui qui donne la mort" },
  { key: "al-hayy", ar: "الْحَيُّ", fr: "Le Vivant", meaning: "La Vie éternelle" },
  { key: "al-qayyum", ar: "الْقَيُّومُ", fr: "Le Subsistant", meaning: "Celui qui se suffit" },
  { key: "al-wajid", ar: "الْوَاجِدُ", fr: "Le Riche", meaning: "Celui qui trouve" },
  { key: "al-majid", ar: "الْمَاجِدُ", fr: "Le Noble", meaning: "Le Très Glorieux" },
  { key: "al-wahid", ar: "الْوَاحِدُ", fr: "L'Unique", meaning: "L'Un" },
  { key: "as-samad", ar: "الصَّمَدُ", fr: "L'Absolu", meaning: "Le But suprême" },
  { key: "al-qadir", ar: "الْقَادِرُ", fr: "Le Capable", meaning: "Le Tout-Puissant" },
  { key: "al-muqtadir", ar: "الْمُقْتَدِرُ", fr: "Le Puissant", meaning: "Le Dominateur" },
  { key: "al-muqaddim", ar: "الْمُقَدِّمُ", fr: "Celui qui avance", meaning: "Celui qui précède" },
  { key: "al-muakhkhir", ar: "الْمُؤَخِّرُ", fr: "Celui qui retarde", meaning: "Celui qui diffère" },
  { key: "al-awwal", ar: "الْأَوَّلُ", fr: "Le Premier", meaning: "Avant toute chose" },
  { key: "al-akhir", ar: "الْآخِرُ", fr: "Le Dernier", meaning: "Après toute chose" },
  { key: "az-zahir", ar: "الظَّاهِرُ", fr: "L'Apparent", meaning: "Le Manifeste" },
  { key: "al-batin", ar: "الْبَاطِنُ", fr: "Le Caché", meaning: "L'Intime" },
  { key: "al-wali", ar: "الْوَالِي", fr: "Le Gouverneur", meaning: "Le Maître" },
  { key: "al-mutaali", ar: "الْمُتَعَالِي", fr: "Le Très-Élevé", meaning: "Le Sublime" },
  { key: "al-barr", ar: "الْبَرُّ", fr: "Le Bienfaiteur", meaning: "La Source du bien" },
  { key: "at-tawwab", ar: "التَّوَّابُ", fr: "L'Accueillant", meaning: "Celui qui accepte le repentir" },
  { key: "al-muntaqim", ar: "الْمُنْتَقِمُ", fr: "Le Vengeur", meaning: "Celui qui punit" },
  { key: "al-afuww", ar: "الْعَفُوُّ", fr: "L'Indulgent", meaning: "Celui qui efface" },
  { key: "ar-rauf", ar: "الرَّؤُوفُ", fr: "Le Compatissant", meaning: "Le Doux" },
  { key: "malik-al-mulk", ar: "مَالِكُ الْمُلْكِ", fr: "Maître de la royauté", meaning: "Le Possesseur" },
  { key: "dhul-jalal-wal-ikram", ar: "ذُو الْجَلَالِ وَالْإِكْرَامِ", fr: "Détenteur de la majesté", meaning: "Le Majestueux" },
  { key: "al-muqsit", ar: "الْمُقْسِطُ", fr: "L'Équitable", meaning: "Le Juste" },
  { key: "al-jami", ar: "الْجَامِعُ", fr: "Le Rassembleur", meaning: "Celui qui réunit" },
  { key: "al-ghani", ar: "الْغَنِيُّ", fr: "Le Riche", meaning: "L'Indépendant" },
  { key: "al-mughni", ar: "الْمُغْنِي", fr: "Celui qui enrichit", meaning: "Le Pourvoyeur" },
  { key: "al-mani", ar: "الْمَانِعُ", fr: "Celui qui empêche", meaning: "Le Défenseur" },
  { key: "ad-darr", ar: "الضَّارَّ", fr: "Celui qui nuit", meaning: "Qui peut causer du tort" },
  { key: "an-nafi", ar: "النَّافِعُ", fr: "Celui qui profite", meaning: "Le Bienfaisant" },
  { key: "an-nur", ar: "النُّورُ", fr: "La Lumière", meaning: "La Lumière des cieux" },
  { key: "al-hadi", ar: "الْهَادِي", fr: "Le Guide", meaning: "Celui qui dirige" },
  { key: "al-badi", ar: "الْبَدِيعُ", fr: "L'Inventeur", meaning: "Le Créateur sans modèle" },
  { key: "al-baqi", ar: "الْبَاقِي", fr: "L'Éternel", meaning: "Le Permanent" },
  { key: "al-warith", ar: "الْوَارِثُ", fr: "L'Héritier", meaning: "Celui qui reste" },
  { key: "ar-rashid", ar: "الرَّشِيدُ", fr: "Le Guide", meaning: "Le Bien-Directeur" },
  { key: "as-sabur", ar: "الصَّبُورُ", fr: "Le Patient", meaning: "L'Endurant" },
];

// Phase 3: Parcours transversaux par Nom divin
export interface DivineNameParcours {
  divineName: string;
  title: string;
  description: string;
  verses: { reference: string; title?: string }[];
}

export const DIVINE_NAME_PARCOURS: DivineNameParcours[] = [
  {
    divineName: "ar-rahman",
    title: "La Miséricorde Absolue",
    description: "Versets révélant la miséricorde infinie d'Allah",
    verses: [
      { reference: "1:1", title: "Au nom du Tout-Miséricordieux" },
      { reference: "2:143", title: "Allah est Doux et Miséricordieux" },
      { reference: "7:156", title: "Ma miséricorde embrasse toute chose" },
      { reference: "39:53", title: "Ne désespérez pas de la miséricorde" },
      { reference: "55:1", title: "Le Tout-Miséricordieux" },
    ]
  },
  {
    divineName: "al-wadud",
    title: "L'Amour Divin",
    description: "Versets révélant l'amour d'Allah pour Ses serviteurs",
    verses: [
      { reference: "3:31", title: "Allah vous aime" },
      { reference: "5:54", title: "Allah aime les croyants" },
      { reference: "85:14", title: "Le Tout-Aimant" },
      { reference: "11:90", title: "Mon Seigneur est le plus affectueux" },
      { reference: "42:19", title: "Il est le Bienveillant envers Ses serviteurs" },
    ]
  },
  {
    divineName: "al-ghafur",
    title: "Le Pardon Infini",
    description: "Versets révélant le pardon d'Allah",
    verses: [
      { reference: "39:53", title: "Je suis le Pardonneur" },
      { reference: "2:286", title: "Pardonne-nous" },
      { reference: "7:23", title: "La prière du repentir" },
      { reference: "17:82", title: "Guérison et miséricorde" },
      { reference: "15:49", title: "Je suis le Pardonneur, le Miséricordieux" },
    ]
  },
  {
    divineName: "al-hayy",
    title: "La Vie Éternelle",
    description: "Versets révélant la vie éternelle d'Allah",
    verses: [
      { reference: "2:255", title: "Le Vivant, le Subsistant" },
      { reference: "3:2", title: "Il n'y a de divinité que Lui, le Vivant" },
      { reference: "20:111", title: "Tous les visages s'humilient devant le Vivant" },
      { reference: "25:58", title: "Place ta confiance dans le Vivant" },
      { reference: "40:65", title: "Il est le Vivant" },
    ]
  },
  {
    divineName: "an-nur",
    title: "La Lumière Divine",
    description: "Versets révélant la lumière d'Allah",
    verses: [
      { reference: "24:35", title: "Allah est la Lumière des cieux et de la terre" },
      { reference: "5:15", title: "Une lumière vous est venue d'Allah" },
      { reference: "57:12", title: "Une lumière courant devant eux" },
      { reference: "57:28", title: "Une lumière avec laquelle vous marcherez" },
      { reference: "6:122", title: "Celui qui était mort et que Nous avons fait vivre" },
    ]
  },
];

// Phase 3: Parcours transversaux (voyages spirituels)
export interface SpiritualJourney {
  key: string;
  title: string;
  description: string;
  icon: string;
  stages: {
    order: number;
    theme: string;
    description: string;
  }[];
  verses: { reference: string; stage: number; title?: string }[];
}

export const SPIRITUAL_JOURNEYS: SpiritualJourney[] = [
  {
    key: "voyage-coeur",
    title: "Le Voyage du Cœur",
    description: "Du doute à la paix intérieure en 7 étapes",
    icon: "💫",
    stages: [
      { order: 1, theme: "doute", description: "Reconnaître ses doutes" },
      { order: 2, theme: "confiance", description: "Apprendre à faire confiance" },
      { order: 3, theme: "patience", description: "Développer la patience" },
      { order: 4, theme: "gratitude", description: "Cultiver la gratitude" },
      { order: 5, theme: "amour", description: "Ouvrir son cœur à l'amour" },
      { order: 6, theme: "presence", description: "Vivre en présence d'Allah" },
      { order: 7, theme: "serenite", description: "Atteindre la sérénité" },
    ],
    verses: [
      { reference: "2:2", stage: 1, title: "Le Livre sans doute" },
      { reference: "3:159", stage: 2, title: "Place ta confiance en Allah" },
      { reference: "2:153", stage: 3, title: "Allah est avec les patients" },
      { reference: "14:7", stage: 4, title: "Si vous êtes reconnaissants" },
      { reference: "3:31", stage: 5, title: "Allah vous aime" },
      { reference: "50:16", stage: 6, title: "Plus proche que la veine jugulaire" },
      { reference: "13:28", stage: 7, title: "La paix des cœurs" },
    ]
  },
  {
    key: "nuit-spirituelle",
    title: "La Nuit Spirituelle",
    description: "Versets pour la prière nocturne et l'intimité avec Allah",
    icon: "🌙",
    stages: [
      { order: 1, theme: "détachement", description: "Se détacher du monde" },
      { order: 2, theme: "présence", description: "Se rendre présent" },
      { order: 3, theme: "prière", description: "L'invocation sincère" },
      { order: 4, theme: "secret", description: "L'intimité secrète" },
    ],
    verses: [
      { reference: "17:79", stage: 3, title: "La prière nocturne" },
      { reference: "73:2", stage: 2, title: "Lève-toi la nuit" },
      { reference: "32:16", stage: 4, title: "Ils s'arrachent de leurs lits" },
      { reference: "51:18", stage: 3, title: "Avant l'aube, ils implorent le pardon" },
      { reference: "3:17", stage: 4, title: "Ceux qui implorent avant l'aube" },
      { reference: "25:64", stage: 3, title: "Ceux qui passent la nuit prosternés" },
      { reference: "76:26", stage: 3, title: "Glorifie-Le une partie de la nuit" },
    ]
  },
  {
    key: "chemin-repentir",
    title: "Le Chemin du Repentir",
    description: "Du péché au pardon divin",
    icon: "🔄",
    stages: [
      { order: 1, theme: "épreuve", description: "Prendre conscience" },
      { order: 2, theme: "repentir", description: "Le retour vers Allah" },
      { order: 3, theme: "pardon", description: "Recevoir le pardon" },
      { order: 4, theme: "transformation", description: "La nouvelle vie" },
    ],
    verses: [
      { reference: "7:23", stage: 1, title: "Adam: Seigneur, nous avons été injustes" },
      { reference: "39:53", stage: 2, title: "Ne désespérez pas" },
      { reference: "66:8", stage: 2, title: "Un repentir sincère" },
      { reference: "2:222", stage: 3, title: "Allah aime ceux qui se repentent" },
      { reference: "25:70", stage: 4, title: "Allah transforme les mauvaises actions" },
      { reference: "3:135", stage: 2, title: "Ceux qui implorent le pardon" },
      { reference: "4:17", stage: 2, title: "Le repentir accepté" },
    ]
  },
];

// Phase 3: Parcours par Prophète
export interface ProphetParcours {
  prophet: string;
  ar: string;
  title: string;
  description: string;
  verses: { reference: string; title?: string }[];
}

export const PROPHET_PARCOURS: ProphetParcours[] = [
  {
    prophet: "muhammad",
    ar: "مُحَمَّدٌ",
    title: "Le Sceau des Prophètes",
    description: "Versets concernant le Prophète Muhammad ﷺ",
    verses: [
      { reference: "33:56", title: "Allah et Ses anges bénissent le Prophète" },
      { reference: "21:107", title: "Nous ne t'avons envoyé que comme miséricorde" },
      { reference: "33:21", title: "Un excellent modèle" },
      { reference: "68:4", title: "Tu es d'un caractère noble" },
      { reference: "9:128", title: "Compatissant envers vous" },
    ]
  },
  {
    prophet: "ibrahim",
    ar: "إِبْرَاهِيمُ",
    title: "L'Ami d'Allah",
    description: "Versets concernant le Prophète Ibrahim عليه السلام",
    verses: [
      { reference: "4:125", title: "Allah a pris Ibrahim pour ami" },
      { reference: "2:124", title: "Ibrahim, le guide" },
      { reference: "6:75", title: "La recherche d'Allah" },
      { reference: "37:102", title: "Le sacrifice" },
      { reference: "2:127", title: "La construction de la Ka'aba" },
    ]
  },
  {
    prophet: "musa",
    ar: "مُوسَى",
    title: "Celui qui a parlé avec Allah",
    description: "Versets concernant le Prophète Moussa عليه السلام",
    verses: [
      { reference: "28:16", title: "La fuite et le repentir" },
      { reference: "20:14", title: "L'appel à la prière" },
      { reference: "7:143", title: "La demande de voir Allah" },
      { reference: "28:30", title: "L'appel du buisson" },
      { reference: "26:63", title: "La mer fendue" },
    ]
  },
  {
    prophet: "isa",
    ar: "عِيسَى",
    title: "L'Esprit d'Allah",
    description: "Versets concernant le Prophète Issa عليه السلام",
    verses: [
      { reference: "3:45", title: "L'annonce aux anges" },
      { reference: "3:49", title: "Les miracles" },
      { reference: "4:171", title: "Un messager et Sa parole" },
      { reference: "5:110", title: "Le rappel des bienfaits" },
      { reference: "43:61", title: "Le signe de l'Heure" },
    ]
  },
  {
    prophet: "yusuf",
    ar: "يُوسُفُ",
    title: "La Beauté et la Patience",
    description: "Versets concernant le Prophète Yusuf عليه السلام",
    verses: [
      { reference: "12:4", title: "Le rêve" },
      { reference: "12:18", title: "La patience face au mensonge" },
      { reference: "12:23", title: "La tentation refusée" },
      { reference: "12:87", title: "L'espoir en Allah" },
      { reference: "12:101", title: "La gratitude finale" },
    ]
  },
];

// La Nafs - Les 7 Niveaux de l'Âme (النفس)
export interface NafsLevel {
  level: number;
  key: string;
  ar: string;
  fr: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: string;
  state: string; // État spirituel
  challenge: string; // Défi à surmonter
  virtue: string; // Vertu à développer
  verses: { reference: string; title?: string }[];
}

export const NAFS_LEVELS: NafsLevel[] = [
  {
    level: 1,
    key: "nafs-amnara",
    ar: "النَّفْسُ الأَمَّارَةُ",
    fr: "L'Âme Incitative",
    description: "L'âme qui pousse vers le mal, les désirs et les passions. Elle commande et ordonne. C'est le niveau le plus bas, où l'être est esclave de ses pulsions.",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.1)",
    borderColor: "rgba(239,68,68,0.3)",
    icon: "🔥",
    state: "Esclave des passions",
    challenge: "Résister aux désirs immédiats",
    virtue: "La conscience (wara)",
    verses: [
      { reference: "12:53", title: "L'âme incite au mal" },
      { reference: "79:40", title: "Celui qui craint son Seigneur" },
      { reference: "75:14", title: "L'homme connaît son âme" },
      { reference: "91:7", title: "Par l'âme et Celui qui l'a harmonisée" },
    ]
  },
  {
    level: 2,
    key: "nafs-lawwama",
    ar: "النَّفْسُ اللَّوَّامَةُ",
    fr: "L'Âme Qui Se Blâme",
    description: "L'âme qui se critique elle-même, qui regrette ses erreurs. Elle hésite entre le bien et le mal. C'est l'âme du combat spirituel, du jihad intérieur.",
    color: "#f97316",
    bgColor: "rgba(249,115,22,0.1)",
    borderColor: "rgba(249,115,22,0.3)",
    icon: "⚔️",
    state: "En lutte constante",
    challenge: "Transformer le blâme en action",
    virtue: "Le repentir (tawba)",
    verses: [
      { reference: "75:2", title: "L'âme qui se blâme" },
      { reference: "3:135", title: "Ceux qui implorent le pardon" },
      { reference: "57:16", title: "Les cœurs durs" },
      { reference: "79:40", title: "Interdire à l'âme ses passions" },
    ]
  },
  {
    level: 3,
    key: "nafs-mutmainna",
    ar: "النَّفْسُ الْمُطْمَئِنَّةُ",
    fr: "L'Âme Apaisée",
    description: "L'âme qui a trouvé la paix et la tranquillité. Elle ne s'agite plus, elle est rassurée par le rappel d'Allah. C'est l'âme de la sérénité et de la confiance.",
    color: "#22c55e",
    bgColor: "rgba(34,197,94,0.1)",
    borderColor: "rgba(34,197,94,0.3)",
    icon: "🍃",
    state: "En paix intérieure",
    challenge: "Maintenir la sérénité",
    virtue: "La paix (sakina)",
    verses: [
      { reference: "89:27", title: "Ô âme apaisée" },
      { reference: "13:28", title: "Les cœurs se rassurent" },
      { reference: "9:26", title: "La tranquillité (sakina)" },
      { reference: "48:4", title: "La sérénité descend" },
    ]
  },
  {
    level: 4,
    key: "nafs-radiyya",
    ar: "النَّفْسُ الرَّاضِيَةُ",
    fr: "L'Âme Satisfaite",
    description: "L'âme qui est satisfaite de tout ce qu'Allah lui donne. Elle ne se plaint pas, elle accepte avec gratitude. Elle a fait la paix avec le destin.",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.1)",
    borderColor: "rgba(59,130,246,0.3)",
    icon: "💎",
    state: "Satisfaite d'Allah",
    challenge: "Être reconnaissant en toute circonstance",
    virtue: "La gratitude (shukr)",
    verses: [
      { reference: "89:28", title: "Satisfaite et agréée" },
      { reference: "14:7", title: "Si vous êtes reconnaissants" },
      { reference: "2:155", title: "Annonce la bonne nouvelle aux patients" },
      { reference: "39:10", title: "La récompense des patients" },
    ]
  },
  {
    level: 5,
    key: "nafs-mardiyya",
    ar: "النَّفْسُ الْمَرْضِيَّةُ",
    fr: "L'Âme Agréée",
    description: "L'âme qui a obtenu l'agrément d'Allah. Ses actions sont acceptées, elle est aimée de son Seigneur. C'est l'âme des rapprochés (muqarrabun).",
    color: "#8b5cf6",
    bgColor: "rgba(139,92,246,0.1)",
    borderColor: "rgba(139,92,246,0.3)",
    icon: "✨",
    state: "Agrée par Allah",
    challenge: "Persévérer dans l'excellence",
    virtue: "L'excellence (ihsan)",
    verses: [
      { reference: "89:28", title: "Satisfaite et agréée" },
      { reference: "89:29", title: "Entre parmi Mes serviteurs" },
      { reference: "4:125", title: "Allah aime ceux qui font le bien" },
      { reference: "5:13", title: "Allah aime ceux qui font le bien" },
    ]
  },
  {
    level: 6,
    key: "nafs-kamila",
    ar: "النَّفْسُ الْكَامِلَةُ",
    fr: "L'Âme Parfaite",
    description: "L'âme parfaite, qui a atteint la complétude spirituelle. Elle reflète les attributs divins, elle est le miroir d'Allah. C'est l'âme des prophètes et des saints.",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.1)",
    borderColor: "rgba(245,158,11,0.3)",
    icon: "👑",
    state: "Complète et parfaite",
    challenge: "Servir comme modèle",
    virtue: "La perfection (kamal)",
    verses: [
      { reference: "33:21", title: "Un excellent modèle" },
      { reference: "68:4", title: "Un caractère immense" },
      { reference: "91:9", title: "Celui qui la purifie réussit" },
      { reference: "35:18", title: "Se purifier" },
    ]
  },
  {
    level: 7,
    key: "nafs-safiya",
    ar: "النَّفْسُ الصَّافِيَةُ",
    fr: "L'Âme Purifiée",
    description: "L'âme cristalline, transparente, pure de toute souillure. Elle ne voit qu'Allah, ne désire qu'Allah. C'est le sommet de la réalisation spirituelle.",
    color: "#06b6d4",
    bgColor: "rgba(6,182,212,0.1)",
    borderColor: "rgba(6,182,212,0.3)",
    icon: "🌟",
    state: "Pure et transparente",
    challenge: "Rester dans la présence divine",
    virtue: "La pureté (safa)",
    verses: [
      { reference: "91:9", title: "A réussi celui qui la purifie" },
      { reference: "87:14", title: "A réussi celui qui se purifie" },
      { reference: "80:3", title: "L'aveugle qui s'est purifié" },
      { reference: "79:18", title: "Je te guiderai vers ton Seigneur" },
    ]
  },
];

// Toutes les catégories de thèmes par dimension spirituelle (PHASE 1 + PHASE 2)
export const THEME_CATEGORIES: ThemeCategory[] = [
  // === DIMENSION INTÉRIEURE ===
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
        divineNames: ["al-wakil", "al-waliyy", "al-hafiz"],
        tags: ["debutant", "invitation"],
        subThemes: [
          { key: "confiance-destin", label: "Confiance dans le destin", ar: "قضاء", description: "Accepter ce qui vient d'Allah" },
          { key: "confiance-provision", label: "Confiance dans la provision", ar: "رزق", description: "Allah pourvoit à tous les besoins" },
          { key: "confiance-protection", label: "Confiance dans la protection", ar: "حماية", description: "S'abriter sous la protection divine" },
          { key: "confiance-timing", label: "Confiance dans le timing", ar: "وقت", description: "Allah choisit le meilleur moment" },
          { key: "confiance-apres-echec", label: "Confiance après l'échec", ar: "بعد الفشل", description: "L'échec apparent cache un bien" }
        ]
      },
      { 
        key: "patience", 
        label: "Patience", 
        ar: "صبر", 
        bg: "rgba(251,191,36,0.08)", 
        border: "rgba(251,191,36,0.25)", 
        color: "#fbbf24",
        divineNames: ["as-sabur", "al-halim"],
        tags: ["intermediaire", "urgent"],
        subThemes: [
          { key: "patience-epreuve", label: "Patience dans l'épreuve", ar: "بلاء", description: "Endurer avec grâce les difficultés" },
          { key: "patience-priere", label: "Patience dans la prière", ar: "صلاة", description: "Persévérer dans l'adoration" },
          { key: "patience-victoire", label: "Patience avant la victoire", ar: "نصر", description: "Attendre le soulagement d'Allah" },
          { key: "patience-injures", label: "Patience face aux injures", ar: "أذى", description: "Répondre par le bien au mal" },
          { key: "patience-attente", label: "Patience dans l'attente", ar: "انتظار", description: "Attendre le bien d'Allah" }
        ]
      },
      { 
        key: "sagesse", 
        label: "Sagesse", 
        ar: "حكمة", 
        bg: "rgba(129,140,248,0.08)", 
        border: "rgba(129,140,248,0.25)", 
        color: "#818cf8",
        divineNames: ["al-hakim", "al-alim"],
        tags: ["avance", "joyau"],
        subThemes: [
          { key: "sagesse-comprendre", label: "Comprendre les signes", ar: "آيات", description: "Voir la sagesse dans toute chose" },
          { key: "sagesse-parole", label: "Sagesse de la parole", ar: "قول", description: "Parler avec discernement" },
          { key: "sagesse-action", label: "Sagesse dans l'action", ar: "عمل", description: "Agir avec justesse" },
          { key: "sagesse-temps", label: "Sagesse du temps", ar: "وقت", description: "Chaque chose a son temps" },
          { key: "sagesse-silence", label: "Sagesse du silence", ar: "صمت", description: "Le pouvoir du silence" }
        ]
      },
      { 
        key: "serenite", 
        label: "Sérénité", 
        ar: "سكينة", 
        bg: "rgba(34,211,238,0.08)", 
        border: "rgba(34,211,238,0.25)", 
        color: "#22d3ee",
        divineNames: ["as-salam", "ar-rauf"],
        tags: ["joyau", "invitation"],
        subThemes: [
          { key: "serenite-coeur", label: "Sérénité du cœur", ar: "قلب ساكن", description: "Le cœur en paix" },
          { key: "serenite-esprit", label: "Sérénité de l'esprit", ar: "عقل ساكن", description: "L'esprit calme" },
          { key: "serenite-troubles", label: "Sérénité dans les troubles", ar: "في الاضطراب", description: "La paix dans la tempête" },
          { key: "serenite-divine", label: "La sérénité d'Allah", ar: "سكينة الله", description: "La paix qui vient d'Allah" },
          { key: "serenite-nuit", label: "Sérénité nocturne", ar: "سكينة الليل", description: "La paix de la nuit" }
        ]
      },
      { 
        key: "humilite", 
        label: "Humilité", 
        ar: "تواضع", 
        bg: "rgba(148,163,184,0.08)", 
        border: "rgba(148,163,184,0.25)", 
        color: "#94a3b8",
        divineNames: ["al-mutakabbir", "al-kabir"],
        tags: ["intermediaire"],
        subThemes: [
          { key: "humilite-allah", label: "Humilité devant Allah", ar: "تذلل", description: "Se soumettre humblement" },
          { key: "humilite-gens", label: "Humilité envers les gens", ar: "تواضع للناس", description: "Ne pas se considérer supérieur" },
          { key: "humilite-savoir", label: "Humilité du savoir", ar: "علم", description: "Le savoir augmente l'humilité" },
          { key: "humilite-erreurs", label: "Reconnaître ses erreurs", ar: "اعتراف", description: "Admettre ses fautes" },
          { key: "humilite-service", label: "Humilité dans le service", ar: "خدمة", description: "Servir sans attendre de reconnaissance" }
        ]
      },
    ]
  },
  // === DIMENSION RELATIONNELLE ===
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
        divineNames: ["al-wadud", "ar-rahman"],
        tags: ["joyau", "invitation"],
        subThemes: [
          { key: "amour-creatures", label: "Amour des créatures", ar: "خلق", description: "Aimer pour Allah" },
          { key: "amour-famille", label: "Amour familial", ar: "أهل", description: "Les liens du sang et du cœur" },
          { key: "amour-divin", label: "Amour d'Allah", ar: "حب الله", description: "L'amour suprême" },
          { key: "amour-prophete", label: "Amour du Prophète", ar: "حب النبي", description: "Aimer le Messager ﷺ" },
          { key: "amour-mariage", label: "Amour dans le mariage", ar: "زواج", description: "La tendresse conjugale" }
        ]
      },
      { 
        key: "pardon", 
        label: "Pardon", 
        ar: "مغفرة", 
        bg: "rgba(251,113,133,0.08)", 
        border: "rgba(251,113,133,0.25)", 
        color: "#fb7185",
        divineNames: ["al-ghafur", "al-afuww", "at-tawwab"],
        tags: ["intermediaire", "urgent"],
        subThemes: [
          { key: "pardon-autrui", label: "Pardonner aux autres", ar: "عفو", description: "Libérer son cœur du ressentiment" },
          { key: "pardon-soi", label: "Se pardonner à soi", ar: "نفس", description: "Accepter ses imperfections" },
          { key: "pardon-divin", label: "Le pardon d'Allah", ar: "غفران", description: "L'immense miséricorde" },
          { key: "pardon-oubli", label: "Oublier l'offense", ar: "نسيان", description: "Ne pas ressasser le passé" },
          { key: "pardon-liberation", label: "La libération du pardon", ar: "تحرير", description: "Se libérer par le pardon" }
        ]
      },
      { 
        key: "gratitude", 
        label: "Gratitude", 
        ar: "شكر", 
        bg: "rgba(250,204,21,0.08)", 
        border: "rgba(250,204,21,0.25)", 
        color: "#facc15",
        divineNames: ["ash-shakur", "al-hamid"],
        tags: ["debutant", "invitation"],
        subThemes: [
          { key: "gratitude-bienfaits", label: "Gratitude pour les bienfaits", ar: "نعم", description: "Reconnaître les faveurs d'Allah" },
          { key: "gratitude-epreuve", label: "Gratitude dans l'épreuve", ar: "بلاء", description: "Voir le bien dans chaque situation" },
          { key: "gratitude-quotidien", label: "Gratitude quotidienne", ar: "يومي", description: "Remercier sans cesse" },
          { key: "gratitude-invisible", label: "Gratitude pour l'invisible", ar: "غيب", description: "Les bienfaits cachés" },
          { key: "gratitude-action", label: "Gratitude en action", ar: "عمل", description: "Montrer sa gratitude par ses actes" }
        ]
      },
      { 
        key: "misericorde", 
        label: "Miséricorde", 
        ar: "رحمة", 
        bg: "rgba(236,72,153,0.08)", 
        border: "rgba(236,72,153,0.25)", 
        color: "#ec4899",
        divineNames: ["ar-rahman", "ar-rahim", "ar-rauf"],
        tags: ["joyau", "debutant"],
        subThemes: [
          { key: "misericorde-divine", label: "La miséricorde d'Allah", ar: "رحمة الله", description: "La miséricorde infinie" },
          { key: "misericorde-autrui", label: "Miséricorde envers autrui", ar: "رحمة للناس", description: "Être source de miséricorde" },
          { key: "misericorde-animaux", label: "Miséricorde envers les animaux", ar: "حيوانات", description: "La compassion pour toute créature" },
          { key: "misericorde-faibles", label: "Miséricorde pour les faibles", ar: "ضعفاء", description: "Protéger les plus vulnérables" },
          { key: "misericorde-enfants", label: "Miséricorde pour les enfants", ar: "أطفال", description: "La tendresse envers les petits" }
        ]
      },
      { 
        key: "fraternite", 
        label: "Fraternité", 
        ar: "أخوة", 
        bg: "rgba(59,130,246,0.08)", 
        border: "rgba(59,130,246,0.25)", 
        color: "#3b82f6",
        divineNames: ["al-waliyy", "al-mumin"],
        tags: ["intermediaire"],
        subThemes: [
          { key: "fraternite-foi", label: "Fraternité de foi", ar: "أخوة الإيمان", description: "Les liens de la foi" },
          { key: "fraternite-entraide", label: "L'entraide fraternelle", ar: "تعاون", description: "S'aider dans le bien" },
          { key: "fraternite-conseil", label: "Le bon conseil", ar: "نصيحة", description: "Conseiller avec bienveillance" },
          { key: "fraternite-visite", label: "Visiter son frère", ar: "زيارة", description: "Entretenir les liens" },
          { key: "fraternite-pardon", label: "Pardon entre frères", ar: "صفح", description: "Dépasser les querelles" }
        ]
      },
    ]
  },
  // === DIMENSION TRANSFORMATIVE ===
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
        divineNames: ["al-qawiyy", "al-matin", "al-aziz"],
        tags: ["urgent", "intermediaire"],
        subThemes: [
          { key: "force-interieure", label: "Force intérieure", ar: "قلب", description: "La résilience du cœur" },
          { key: "force-courage", label: "Courage", ar: "شجاعة", description: "Affronter ses peurs" },
          { key: "force-perseverance", label: "Persévérance", ar: "مثابرة", description: "Ne jamais abandonner" },
          { key: "force-epreuve", label: "Force dans l'épreuve", ar: "ابتلاء", description: "Grandir par les difficultés" },
          { key: "force-divine", label: "La force d'Allah", ar: "قوة الله", description: "Puiser en Allah" }
        ]
      },
      { 
        key: "transformation", 
        label: "Transformation", 
        ar: "تغيير", 
        bg: "rgba(232,121,249,0.08)", 
        border: "rgba(232,121,249,0.25)", 
        color: "#e879f9",
        divineNames: ["al-bari", "al-musawwir"],
        tags: ["avance"],
        subThemes: [
          { key: "transformation-ame", label: "Transformation de l'âme", ar: "روح", description: "Évoluer spirituellement" },
          { key: "transformation-habitudes", label: "Changer ses habitudes", ar: "عادة", description: "Devenir meilleur chaque jour" },
          { key: "transformation-repentir", label: "Le repentir transformateur", ar: "توبة", description: "Revenir à Allah" },
          { key: "transformation-intention", label: "Transformer l'intention", ar: "نية", description: "Purifier ses intentions" },
          { key: "transformation-destin", label: "Transformer son destin", ar: "مصير", description: "Changer par les œuvres" }
        ]
      },
      { 
        key: "espoir", 
        label: "Espoir", 
        ar: "رجاء", 
        bg: "rgba(251,146,60,0.08)", 
        border: "rgba(251,146,60,0.25)", 
        color: "#fb923c",
        divineNames: ["ar-rahman", "al-fattah", "al-wahhab"],
        tags: ["invitation", "debutant"],
        subThemes: [
          { key: "espoir-misericorde", label: "Espoir en la miséricorde", ar: "رحمة", description: "Jamais désespérer d'Allah" },
          { key: "espoir-avenir", label: "Espoir pour l'avenir", ar: "مستقبل", description: "Faire confiance au plan divin" },
          { key: "espoir-journee", label: "Espoir chaque jour", ar: "يوم", description: "Un nouveau matin, un nouvel espoir" },
          { key: "espoir-apres-mort", label: "Espoir après la mort", ar: "آخرة", description: "L'espoir du Paradis" },
          { key: "espoir-reponse", label: "Espoir de réponse", ar: "إجابة", description: "Allah répond aux invocations" }
        ]
      },
      { 
        key: "repentir", 
        label: "Repentir", 
        ar: "توبة", 
        bg: "rgba(45,212,191,0.08)", 
        border: "rgba(45,212,191,0.25)", 
        color: "#2dd4bf",
        divineNames: ["at-tawwab", "al-ghafur", "al-afuww"],
        tags: ["urgent", "intermediaire"],
        subThemes: [
          { key: "repentir-sincerite", label: "Repentir sincère", ar: "توبة نصوح", description: "Un retour véritable" },
          { key: "repentir-regrets", label: "Le regret des péchés", ar: "ندم", description: "Le remords qui purifie" },
          { key: "repentir-abandon", label: "Abandonner le péché", ar: "إقلاع", description: "Cesser la désobéissance" },
          { key: "repentir-resolution", label: "La résolution", ar: "عزم", description: "Ne plus revenir en arrière" },
          { key: "repentir-continu", label: "Repentir continu", ar: "توبة مستمرة", description: "Se repentir chaque jour" }
        ]
      },
      { 
        key: "purification", 
        label: "Purification", 
        ar: "تزكية", 
        bg: "rgba(192,132,252,0.08)", 
        border: "rgba(192,132,252,0.25)", 
        color: "#c084fc",
        divineNames: ["al-quddus", "al-mutahhir"],
        tags: ["avance"],
        subThemes: [
          { key: "purification-coeur", label: "Purification du cœur", ar: "قلب", description: "Nettoyer le cœur des maladies" },
          { key: "purification-intentions", label: "Purification des intentions", ar: "نيات", description: "Agir uniquement pour Allah" },
          { key: "purification-ame", label: "Purification de l'âme", ar: "نفس", description: "Élever son âme" },
          { key: "purification-peches", label: "Purification des péchés", ar: "ذنوب", description: "Effacer les fautes" },
          { key: "purification-quotidien", label: "Purification quotidienne", ar: "يومي", description: "Se purifier chaque jour" }
        ]
      },
    ]
  },
  // === DIMENSION DÉVOTIONNELLE ===
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
        divineNames: ["al-mujib", "al-qadir", "ar-razzaq"],
        tags: ["debutant", "invitation"],
        subThemes: [
          { key: "priere-invocation", label: "Invocation", ar: "دعاء", description: "Parler à Allah" },
          { key: "priere-concentration", label: "Concentration", ar: "خشوع", description: "La présence dans la salat" },
          { key: "priere-nuit", label: "Prière nocturne", ar: "قيام", description: "Les moments d'intimité avec Allah" },
          { key: "priere-communaute", label: "Prière en communauté", ar: "جماعة", description: "La prière ensemble" },
          { key: "priere-acceptee", label: "Conditions d'acceptation", ar: "قبول", description: "Comment Allah exauce" }
        ]
      },
      { 
        key: "guidance", 
        label: "Guidance", 
        ar: "هداية", 
        bg: "rgba(56,189,248,0.08)", 
        border: "rgba(56,189,248,0.25)", 
        color: "#38bdf8",
        divineNames: ["al-hadi", "al-fattah", "an-nur"],
        tags: ["intermediaire"],
        subThemes: [
          { key: "guidance-decision", label: "Guidance dans les décisions", ar: "اختيار", description: "Istikhara, le choix éclairé" },
          { key: "guidance-chemin", label: "Le chemin droit", ar: "صراط", description: "Suivre la voie d'Allah" },
          { key: "guidance-lumiere", label: "La lumière de la guidance", ar: "نور", description: "Voir clair dans les ténèbres" },
          { key: "guidance-interieure", label: "Guidance intérieure", ar: "هداية قلب", description: "Les inspirations du cœur" },
          { key: "guidance-savoir", label: "Guidance par le savoir", ar: "علم", description: "Apprendre pour se rapprocher" }
        ]
      },
      { 
        key: "meditation", 
        label: "Méditation", 
        ar: "تدبر", 
        bg: "rgba(167,139,250,0.08)", 
        border: "rgba(167,139,250,0.25)", 
        color: "#a78bfa",
        divineNames: ["al-alim", "al-khabir", "al-batin"],
        tags: ["avance", "joyau"],
        subThemes: [
          { key: "meditation-coran", label: "Méditation du Coran", ar: "قرآن", description: "Plonger dans les versets" },
          { key: "meditation-creation", label: "Méditation sur la création", ar: "خلق", description: "Voir les signes d'Allah" },
          { key: "meditation-memoire", label: "Mémoire d'Allah", ar: "ذكر", description: "Le dhikr continu" },
          { key: "meditation-mort", label: "Méditation sur la mort", ar: "موت", description: "Se souvenir de la fin" },
          { key: "meditation-soi", label: "Méditation sur soi", ar: "نفس", description: "Se connaître véritablement" }
        ]
      },
      { 
        key: "soumission", 
        label: "Soumission", 
        ar: "إسلام", 
        bg: "rgba(16,185,129,0.08)", 
        border: "rgba(16,185,129,0.25)", 
        color: "#10b981",
        divineNames: ["as-samad", "al-malik", "al-jabbar"],
        tags: ["avance"],
        subThemes: [
          { key: "soumission-totale", label: "Soumission totale", ar: "تسليم", description: "S'abandonner entièrement" },
          { key: "soumission-volonte", label: "Soumission à la volonté", ar: "إرادة", description: "Accepter la volonté d'Allah" },
          { key: "soumission-ordres", label: "Soumission aux ordres", ar: "أوامر", description: "Obéir sans questionner" },
          { key: "soumission-interdits", label: "Soumission face aux interdits", ar: "نواهي", description: "S'éloigner du mal" },
          { key: "soumission-destin", label: "Soumission au destin", ar: "قدر", description: "Accepter ce qui est écrit" }
        ]
      },
      { 
        key: "rappel", 
        label: "Rappel", 
        ar: "ذكر", 
        bg: "rgba(245,158,11,0.08)", 
        border: "rgba(245,158,11,0.25)", 
        color: "#f59e0b",
        divineNames: ["adh-dhikr", "al-haqq"],
        tags: ["debutant", "invitation"],
        subThemes: [
          { key: "rappel-langue", label: "Rappel par la langue", ar: "لسان", description: "Les formules de dhikr" },
          { key: "rappel-coeur", label: "Rappel par le cœur", ar: "قلب", description: "La présence continue" },
          { key: "rappel-actes", label: "Rappel par les actes", ar: "أعمال", description: "Agir en se rappelant Allah" },
          { key: "rappel-matin", label: "Rappel du matin", ar: "صباح", description: "Les invocations du matin" },
          { key: "rappel-soir", label: "Rappel du soir", ar: "مساء", description: "Les invocations du soir" }
        ]
      },
    ]
  },
  // === DIMENSION SPIRITUELLE ===
  {
    key: "spirituelle",
    label: "Dimension Spirituelle",
    ar: "روح",
    icon: "🌿",
    themes: [
      { 
        key: "presence", 
        label: "Présence", 
        ar: "حضور", 
        bg: "rgba(34,211,238,0.08)", 
        border: "rgba(34,211,238,0.25)", 
        color: "#22d3ee",
        divineNames: ["ash-shahid", "al-muhaymin", "ar-raqib"],
        tags: ["avance", "joyau"],
        subThemes: [
          { key: "presence-ici", label: "Ici et maintenant", ar: "آن", description: "Être pleinement présent" },
          { key: "presence-allah", label: "Présence d'Allah", ar: "حضور الله", description: "Allah est avec nous" },
          { key: "presence-coeur", label: "Présence du cœur", ar: "حضور القلب", description: "Le cœur éveillé" },
          { key: "presence-priere", label: "Présence dans la prière", ar: "صلاة", description: "La salat en pleine conscience" },
          { key: "presence-quotidien", label: "Présence au quotidien", ar: "يومي", description: "Vivre chaque moment avec Allah" }
        ]
      },
      { 
        key: "detachement", 
        label: "Détachement", 
        ar: "زهد", 
        bg: "rgba(148,163,184,0.08)", 
        border: "rgba(148,163,184,0.25)", 
        color: "#94a3b8",
        divineNames: ["al-ghani", "al-baqi", "al-warith"],
        tags: ["avance"],
        subThemes: [
          { key: "detachement-monde", label: "Détachement du monde", ar: "دنيا", description: "Ce bas-monde est éphémère" },
          { key: "detachement-biens", label: "Détachement des biens", ar: "مال", description: "Les richesses ne sont rien" },
          { key: "detachement-ego", label: "Détachement de l'ego", ar: "نفس", description: "Se libérer de soi-même" },
          { key: "detachement-desirs", label: "Détachement des désirs", ar: "شهوات", description: "Ne pas être esclave de ses passions" },
          { key: "detachement-resultat", label: "Détachement du résultat", ar: "نتيجة", description: "Agir sans attendre de retour" }
        ]
      },
      { 
        key: "guerison", 
        label: "Guérison", 
        ar: "شفاء", 
        bg: "rgba(45,212,191,0.08)", 
        border: "rgba(45,212,191,0.25)", 
        color: "#2dd4bf",
        divineNames: ["ash-shafi", "al-muhyi", "al-bari"],
        tags: ["urgent", "guerison-tag"],
        subThemes: [
          { key: "guerison-corps", label: "Guérison du corps", ar: "جسم", description: "La santé physique" },
          { key: "guerison-coeur", label: "Guérison du cœur", ar: "قلب", description: "Apaiser les blessures émotionnelles" },
          { key: "guerison-relations", label: "Guérison des relations", ar: "علاقات", description: "Réparer les liens brisés" },
          { key: "guerison-spirituelle", label: "Guérison spirituelle", ar: "روح", description: "La paix de l'âme" },
          { key: "guerison-coran", label: "Le Coran guérisseur", ar: "قرآن شفاء", description: "Les versets qui guérissent" }
        ]
      },
      { 
        key: "secret", 
        label: "Secret", 
        ar: "سر", 
        bg: "rgba(99,102,241,0.08)", 
        border: "rgba(99,102,241,0.25)", 
        color: "#6366f1",
        divineNames: ["al-batin", "al-khabir", "al-latif"],
        tags: ["avance", "joyau"],
        subThemes: [
          { key: "secret-divin", label: "Les secrets d'Allah", ar: "سر الله", description: "Les mystères divins" },
          { key: "secret-coeur", label: "Le secret du cœur", ar: "سر القلب", description: "Ce que le cœur connaît" },
          { key: "secret-nuit", label: "Le secret de la nuit", ar: "سر الليل", description: "L'intimité nocturne" },
          { key: "secret-intention", label: "Le secret de l'intention", ar: "سر النية", description: "L'intention cachée" },
          { key: "secret-providence", label: "Le secret de la providence", ar: "سر العناية", description: "Comment Allah guide" }
        ]
      },
      { 
        key: "eternite", 
        label: "Éternité", 
        ar: "أبدية", 
        bg: "rgba(168,85,247,0.08)", 
        border: "rgba(168,85,247,0.25)", 
        color: "#a855f7",
        divineNames: ["al-awwal", "al-akhir", "al-baqi", "al-hayy"],
        tags: ["avance"],
        subThemes: [
          { key: "eternite-allah", label: "L'éternité d'Allah", ar: "أزلية", description: "Allah est éternel" },
          { key: "eternite-akhera", label: "L'éternité de l'au-delà", ar: "آخرة", description: "La vie qui ne finit pas" },
          { key: "eternite-bienfaits", label: "Les bienfaits éternels", ar: "نعيم", description: "Les délices du Paradis" },
          { key: "eternite-châtiment", label: "Le châtiment éternel", ar: "عذاب", description: "La gravité de l'enfer" },
          { key: "eternite-oeuvres", label: "Les œuvres éternelles", ar: "أعمال", description: "Ce qui reste après la mort" }
        ]
      },
    ]
  },
  // === PHASE 2: DIMENSION COSMIQUE ===
  {
    key: "cosmique",
    label: "Dimension Cosmique",
    ar: "كون",
    icon: "🌌",
    themes: [
      { 
        key: "creation", 
        label: "Création", 
        ar: "خلق", 
        bg: "rgba(59,130,246,0.08)", 
        border: "rgba(59,130,246,0.25)", 
        color: "#3b82f6",
        divineNames: ["al-khaliq", "al-bari", "al-musawwir"],
        tags: ["debutant", "joyau"],
        subThemes: [
          { key: "creation-cieux", label: "Les cieux", ar: "سماوات", description: "La grandeur des cieux" },
          { key: "creation-terre", label: "La terre", ar: "أرض", description: "La beauté de la terre" },
          { key: "creation-homme", label: "L'être humain", ar: "إنسان", description: "La créature noble" },
          { key: "creation-animaux", label: "Les animaux", ar: "حيوانات", description: "Les créatures d'Allah" },
          { key: "creation-végétaux", label: "Les végétaux", ar: "نباتات", description: "La vie qui pousse" }
        ]
      },
      { 
        key: "signes", 
        label: "Signes", 
        ar: "آيات", 
        bg: "rgba(236,72,153,0.08)", 
        border: "rgba(236,72,153,0.25)", 
        color: "#ec4899",
        divineNames: ["al-alim", "al-khabir"],
        tags: ["intermediaire"],
        subThemes: [
          { key: "signes-nature", label: "Signes dans la nature", ar: "طبيعة", description: "Lire la création" },
          { key: "signes-histoire", label: "Signes dans l'histoire", ar: "تاريخ", description: "Les leçons du passé" },
          { key: "signes-evenements", label: "Signes dans les événements", ar: "أحداث", description: "La main d'Allah dans tout" },
          { key: "signes-interieur", label: "Signes intérieurs", ar: "باطن", description: "Les signes du cœur" },
          { key: "signes-coran", label: "Signes dans le Coran", ar: "قرآن", description: "Les versets comme signes" }
        ]
      },
      { 
        key: "equilibre", 
        label: "Équilibre", 
        ar: "ميزان", 
        bg: "rgba(251,191,36,0.08)", 
        border: "rgba(251,191,36,0.25)", 
        color: "#fbbf24",
        divineNames: ["al-adl", "al-hakam", "al-mizan"],
        tags: ["intermediaire"],
        subThemes: [
          { key: "equilibre-univers", label: "Équilibre de l'univers", ar: "كون", description: "L'ordre cosmique" },
          { key: "equilibre-vie", label: "Équilibre de la vie", ar: "حياة", description: "L'harmonie du vivant" },
          { key: "equilibre-justice", label: "Équilibre et justice", ar: "عدل", description: "La balance divine" },
          { key: "equilibre-personnel", label: "Équilibre personnel", ar: "نفس", description: "Trouver son équilibre" },
          { key: "equilibre-donne-recoit", label: "Donner et recevoir", ar: "عطاء وأخذ", description: "L'équilibre des échanges" }
        ]
      },
    ]
  },
  // === PHASE 2: DIMENSION TEMPORELLE ===
  {
    key: "temporelle",
    label: "Dimension Temporelle",
    ar: "وقت",
    icon: "⏰",
    themes: [
      { 
        key: "matin", 
        label: "Matin", 
        ar: "صباح", 
        bg: "rgba(250,204,21,0.08)", 
        border: "rgba(250,204,21,0.25)", 
        color: "#facc15",
        divineNames: ["al-fajr", "an-nur"],
        tags: ["debutant", "invitation"],
        subThemes: [
          { key: "matin-ouverture", label: "L'ouverture du jour", ar: "فجر", description: "Le nouveau départ" },
          { key: "matin-gratitude", label: "Gratitude du matin", ar: "شكر صباح", description: "Remercier pour un nouveau jour" },
          { key: "matin-intention", label: "Intention du matin", ar: "نية", description: "Fixer ses intentions" },
          { key: "matin-dhikr", label: "Dhikr du matin", ar: "أذكار الصباح", description: "Les invocations du matin" },
          { key: "matin-productivite", label: "Productivité matinale", ar: "نشاط", description: "Profiter du barakah" }
        ]
      },
      { 
        key: "nuit", 
        label: "Nuit", 
        ar: "ليل", 
        bg: "rgba(99,102,241,0.08)", 
        border: "rgba(99,102,241,0.25)", 
        color: "#6366f1",
        divineNames: ["al-layl", "as-salam"],
        tags: ["avance", "joyau"],
        subThemes: [
          { key: "nuit-calme", label: "Le calme de la nuit", ar: "سكون", description: "La paix nocturne" },
          { key: "nuit-priere", label: "Prière de la nuit", ar: "قيام", description: "Tahajjud, l'intimité" },
          { key: "nuit-reflection", label: "Reflection nocturne", ar: "تفكر", description: "Penser dans le silence" },
          { key: "nuit-dhikr", label: "Dhikr de la nuit", ar: "أذكار المساء", description: "Les invocations du soir" },
          { key: "nuit-repos", label: "Le repos", ar: "راحة", description: "Dormir en confiance" }
        ]
      },
      { 
        key: "vendredi", 
        label: "Vendredi", 
        ar: "جمعة", 
        bg: "rgba(16,185,129,0.08)", 
        border: "rgba(16,185,129,0.25)", 
        color: "#10b981",
        divineNames: ["al-jumuah"],
        tags: ["debutant", "joyau"],
        subThemes: [
          { key: "vendredi-benediction", label: "La bénédiction du vendredi", ar: "بركة", description: "Le meilleur jour" },
          { key: "vendredi-priere", label: "La prière du vendredi", ar: "صلاة", description: "La salat en communauté" },
          { key: "vendredi-sermon", label: "Le sermon", ar: "خطبة", description: "Écouter le khutbah" },
          { key: "vendredi-invocation", label: "L'heure exaucée", ar: "ساعة الإجابة", description: "Le moment du du'a" },
          { key: "vendredi-purification", label: "Purification du vendredi", ar: "غسل", description: "Le ghusl recommandé" }
        ]
      },
    ]
  },
  // === PHASE 2: DIMENSION ÉMOTIONNELLE ===
  {
    key: "emotionnelle",
    label: "Dimension Émotionnelle",
    ar: "عاطفة",
    icon: "💜",
    themes: [
      { 
        key: "joie", 
        label: "Joie", 
        ar: "فرح", 
        bg: "rgba(251,191,36,0.08)", 
        border: "rgba(251,191,36,0.25)", 
        color: "#fbbf24",
        divineNames: ["ar-rahman", "al-wahhab"],
        tags: ["debutant", "joyau"],
        subThemes: [
          { key: "joie-gratitude", label: "Joie et gratitude", ar: "شكر", description: "Célébrer avec reconnaissance" },
          { key: "joie-humilité", label: "Joie humble", ar: "تواضع", description: "La joie sans orgueil" },
          { key: "joie-partage", label: "Joie partagée", ar: "مشاركة", description: "Réjouir les autres" },
          { key: "joie-spirituelle", label: "Joie spirituelle", ar: "روحية", description: "La douceur de la foi" },
          { key: "joie-licite", label: "Joie licite", ar: "حلال", description: "Se réjouir dans le halal" }
        ]
      },
      { 
        key: "tristesse", 
        label: "Tristesse", 
        ar: "حزن", 
        bg: "rgba(96,165,250,0.08)", 
        border: "rgba(96,165,250,0.25)", 
        color: "#60a5fa",
        divineNames: ["ar-rahim", "al-mujib", "al-hadi"],
        tags: ["urgent", "intermediaire"],
        subThemes: [
          { key: "tristesse-epreuve", label: "Tristesse dans l'épreuve", ar: "ابتلاء", description: "Le deuil et la perte" },
          { key: "tristesse-secours", label: "Le secours d'Allah", ar: "فرج", description: "Allah soulage" },
          { key: "tristesse-patience", label: "Patience dans la tristesse", ar: "صبر", description: "Endurer avec espoir" },
          { key: "tristesse-transformation", label: "Transformer sa tristesse", ar: "تحويل", description: "Grandir par la peine" },
          { key: "tristesse-dua", label: "L'invocation dans la tristesse", ar: "دعاء", description: "Parler à Allah" }
        ]
      },
      { 
        key: "peur", 
        label: "Peur", 
        ar: "خوف", 
        bg: "rgba(244,63,94,0.08)", 
        border: "rgba(244,63,94,0.25)", 
        color: "#f43f5e",
        divineNames: ["al-hafiz", "al-muhaymin", "al-waliyy"],
        tags: ["urgent"],
        subThemes: [
          { key: "peur-damaged", label: "Peur d'Allah", ar: "خشية", description: "La crainte qui rapproche" },
          { key: "peur-avenir", label: "Peur de l'avenir", ar: "مستقبل", description: "L'anxiété du demain" },
          { key: "peur-mort", label: "Peur de la mort", ar: "موت", description: "L'angoisse de la fin" },
          { key: "peur-protection", label: "La protection d'Allah", ar: "حماية", description: "Se réfugier en Allah" },
          { key: "peur-courage", label: "Dépasser sa peur", ar: "شجاعة", description: "Affronter avec foi" }
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

// Map pour accès par Nom divin
export const THEMES_BY_DIVINE_NAME: Record<string, Theme[]> = {};
THEMES.forEach(t => {
  if (t.divineNames) {
    t.divineNames.forEach(name => {
      if (!THEMES_BY_DIVINE_NAME[name]) THEMES_BY_DIVINE_NAME[name] = [];
      THEMES_BY_DIVINE_NAME[name].push(t);
    });
  }
});

// Export des parcours et contexts
export { PARCOURS_LIST, PARCOURS_40_VERSETS, VERSETS_HUMEUR, THEME_CONTEXTS, DEPTH_LEVELS };
