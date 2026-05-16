import * as fs from 'fs';
import * as path from 'path';

// Mapping des thèmes - version simplifiée pour les plus fréquents
const THEME_MIGRATION_MAP: Record<string, string> = {
  // === RELATION AVEC ALLAH ===
  "unicité": "tawhid", "tawhid": "tawhid", "monothéisme": "tawhid", "divinité": "tawhid",
  "adoration": "ibadah", "ibadah": "ibadah", "culte": "ibadah", "dévotion": "ibadah", "consécration": "ibadah",
  "confiance": "tawakkul", "tawakkul": "tawakkul", "abandon": "tawakkul",
  "présence": "dhikr", "dhikr": "dhikr", "rappel": "dhikr", "mention": "dhikr", "souvenir": "dhikr",
  "prière": "dua", "dua": "dua", "invocation": "dua", "supplication": "dua", "appel": "dua", "demande": "dua",
  "amour": "mahabbah", "mahabbah": "mahabbah", "affection": "mahabbah", "attachement": "mahabbah",
  
  // === ÉTATS DU CŒUR ===
  "patience": "sabr", "sabr": "sabr", "endurance": "sabr", "persévérance": "sabr", "constance": "sabr",
  "gratitude": "shukr", "shukr": "shukr", "reconnaissance": "shukr", "remerciement": "shukr",
  "crainte": "khashyah", "khashyah": "khashyah", "peur": "khashyah",
  "espoir": "raja", "raja": "raja", "espérance": "raja", "attente": "raja",
  "repentir": "tawbah", "tawbah": "tawbah", "pardon": "tawbah", "retour": "tawbah", "réforme": "tawbah",
  "certitude": "yaqin", "yaqin": "yaqin", "conviction": "yaqin",
  "humilité": "tadarru", "tadarru": "tadarru", "abaissement": "tadarru",
  
  // === ÉTHIQUE & COMPORTEMENT ===
  "justice": "adl", "adl": "adl", "équité": "adl", "équilibre": "adl",
  "bienfaisance": "ihsan", "ihsan": "ihsan", "excellence": "ihsan", "bonté": "ihsan", "gentillesse": "ihsan", "bienfait": "ihsan",
  "sincérité": "sidq", "sidq": "sidq", "vérité": "sidq", "honnêteté": "sidq",
  "fidélité": "amanah", "amanah": "amanah", "loyauté": "amanah", "alliance": "amanah",
  "douceur": "hilm", "hilm": "hilm", "clémence": "hilm",
  "pudeur": "iffah", "iffah": "iffah", "chasteté": "iffah", "modestie": "iffah", "pureté": "iffah",
  
  // === ÉPREUVES & PROMESSES ===
  "épreuve": "ibtila", "ibtila": "ibtila", "test": "ibtila", "éprouve": "ibtila", "tentation": "ibtila",
  "victoire": "fath", "fath": "fath", "ouverture": "fath", "succès": "fath", "triomphe": "fath",
  "salut": "najat", "najat": "najat", "sauvetage": "najat", "délivrance": "najat",
  "guérison": "shifa", "shifa": "shifa", "santé": "shifa", "soulagement": "shifa",
  "subsistance": "rizq", "rizq": "rizq", "provision": "rizq", "nourriture": "rizq", "sustentation": "rizq",
  "sagesse": "hikmah", "hikmah": "hikmah", "connaissance": "hikmah", "science": "hikmah", "discernement": "hikmah",
  
  // === VISION UNIVERSELLE ===
  "création": "khalq", "khalq": "khalq", "créateur": "khalq", "origine": "khalq",
  "au-delà": "akhirah", "akhirah": "akhirah", "résurrection": "akhirah", "jugement": "akhirah", "jour": "akhirah",
  "paradis": "jannah", "jannah": "jannah", "jardin": "jannah", "félicité": "jannah", "récompense": "jannah",
  "histoire": "qasas", "qasas": "qasas", "récit": "qasas", "histoires": "qasas",
  "signes": "ayat", "ayat": "ayat", "signe": "ayat", "miracle": "ayat", "preuve": "ayat", "miracles": "ayat",
  "transformation": "taghayur", "taghayur": "taghayur", "changement": "taghayur", "évolution": "taghayur",
  
  // === THÈMES COMPLÉMENTAIRES ===
  "guidance": "hidayah", "hidayah": "hidayah", "guide": "hidayah", "direction": "hidayah", "chemin": "hidayah",
  "lumière": "nur", "nur": "nur", "clarté": "nur",
  "miséricorde": "rahmah", "rahmah": "rahmah", "compassion": "rahmah",
  "force": "quwwah", "quwwah": "quwwah", "puissance": "quwwah", "courage": "quwwah",
  "protection": "hifdh", "hifdh": "hifdh", "refuge": "hifdh", "sécurité": "hifdh",
  "méditation": "tadabbur", "tadabbur": "tadabbur", "réflexion": "tadabbur", "contemplation": "tadabbur",
  "détachement": "zuhd", "zuhd": "zuhd", "renoncement": "zuhd",
  "foi": "iman", "iman": "iman", "croyance": "iman",
  "paix": "salam", "salam": "salam", "tranquillité": "salam", "sérénité": "salam",
  "révélation": "wahy", "wahy": "wahy", "coran": "wahy", "livre": "wahy",
  "prophète": "nubuwwah", "nubuwwah": "nubuwwah", "prophètes": "nubuwwah", "messager": "nubuwwah", "messagers": "nubuwwah",
  "obéissance": "taah", "soumission": "taah",
  "responsabilité": "masuliyyah", "compte": "masuliyyah",
  "châtiment": "adhab", "adhab": "adhab", "punition": "adhab", "enfer": "adhab",
  "bénédiction": "nimah", "bienfaits": "nimah", "faveur": "nimah", "grâce": "nimah",
  "avertissement": "indhar", "indhar": "indhar", "mise en garde": "indhar",
  "égarement": "dalal", "dalal": "dalal", "errance": "dalal",
  "hypocrisie": "nifaq", "nifaq": "nifaq", "mensonge": "nifaq",
  "orgueil": "kibr", "kibr": "kibr", "arrogance": "kibr", "prétention": "kibr",
  "ingratitude": "kufr", "kufr": "kufr", "mécréance": "kufr",
  "vie": "hayah", "hayah": "hayah", "existence": "hayah",
  "mort": "mawt", "mawt": "mawt",
  "taqwa": "taqwa", "piété": "taqwa", "conscience": "taqwa",
  "cœur": "qalb", "qalb": "qalb",
  "âme": "nafs", "nafs": "nafs",
  "esprit": "ruh", "ruh": "ruh",
  
  // Mappings additionnels
  "bonne nouvelle": "raja", "annonce": "raja", "promesse": "raja",
  "bonheur": "jannah", "joie": "jannah", "satisfaction": "jannah",
  "désir": "mahabbah", "intimité": "dhikr", "proximité": "dhikr",
  "tristesse": "sabr", "douleur": "sabr", "souffrance": "sabr",
  "regret": "tawbah", "remords": "tawbah", "culpabilité": "tawbah", "erreur": "tawbah", "faute": "tawbah",
  "intention": "sidq", "charité": "ihsan", "générosité": "ihsan", "aumône": "ihsan", "dépense": "ihsan",
  "droiture": "sidq", "intégrité": "sidq", "honneur": "sidq",
  "ciel": "khalq", "cieux": "khalq", "terre": "khalq", "univers": "khalq", "monde": "khalq", "mondes": "khalq",
  "soleil": "ayat", "lune": "ayat", "étoiles": "ayat", "nuit": "ayat", "matin": "ayat", "aube": "ayat", "soir": "ayat",
  "jeûne": "ibadah", "ramadan": "ibadah", "pèlerinage": "ibadah", "hajj": "ibadah", "zakat": "ihsan",
  "respect": "adl", "droit": "adl", "droits": "adl",
  "injustice": "zulm", "zulm": "zulm", "oppression": "zulm",
  "satan": "waswas", "waswas": "waswas", "diable": "waswas",
  "doute": "ibtila", "doutes": "ibtila",
  "réalité": "haqq", "haqq": "haqq",
};

// Fonction pour migrer les thèmes
function migrateThemes(themes: string[]): string[] {
  const migrated: string[] = [];
  const seen = new Set<string>();
  
  for (const theme of themes) {
    const normalized = theme.toLowerCase().trim();
    const newTheme = THEME_MIGRATION_MAP[normalized];
    
    if (newTheme && !seen.has(newTheme)) {
      migrated.push(newTheme);
      seen.add(newTheme);
    }
  }
  
  // Si aucun thème n'a été mappé, garder les thèmes originaux
  if (migrated.length === 0) {
    for (const theme of themes) {
      const normalized = theme.toLowerCase().trim();
      if (!seen.has(normalized)) {
        migrated.push(normalized);
        seen.add(normalized);
      }
    }
  }
  
  return migrated;
}

// Fonction principale
async function main() {
  console.log("🔄 Début de la migration des thèmes...");
  
  const miroirPath = path.join(__dirname, '../src/data/miroir.ts');
  const content = fs.readFileSync(miroirPath, 'utf-8');
  
  // Compteurs
  let totalEntries = 0;
  let migratedEntries = 0;
  const themeCounts: Record<string, number> = {};
  
  // Remplacer les thèmes dans chaque entrée
  const newContent = content.replace(
    /theme: \[([^\]]+)\]/g,
    (match, themesStr) => {
      totalEntries++;
      
      // Extraire les thèmes existants
      const oldThemes = themesStr
        .split(',')
        .map((t: string) => t.trim().replace(/"/g, '').replace(/'/g, ''))
        .filter((t: string) => t.length > 0);
      
      // Migrer les thèmes
      const newThemes = migrateThemes(oldThemes);
      
      // Compter les nouveaux thèmes
      for (const theme of newThemes) {
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
      }
      
      if (JSON.stringify(oldThemes.sort()) !== JSON.stringify(newThemes.sort())) {
        migratedEntries++;
      }
      
      // Formater les nouveaux thèmes
      const formattedThemes = newThemes.map(t => `"${t}"`).join(', ');
      return `theme: [${formattedThemes}]`;
    }
  );
  
  // Sauvegarder le fichier
  fs.writeFileSync(miroirPath, newContent, 'utf-8');
  
  console.log(`\n✅ Migration terminée!`);
  console.log(`📊 Statistiques:`);
  console.log(`   - Entrées totales: ${totalEntries}`);
  console.log(`   - Entrées modifiées: ${migratedEntries}`);
  console.log(`\n📈 Distribution des nouveaux thèmes:`);
  
  const sortedThemes = Object.entries(themeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40);
  
  for (const [theme, count] of sortedThemes) {
    console.log(`   - ${theme}: ${count}`);
  }
}

main().catch(console.error);
