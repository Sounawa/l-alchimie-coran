import * as fs from 'fs';
import * as path from 'path';

// Fonction principale
async function main() {
  console.log("🌑 Ajout du 6ème regard 'L'Ombre' à toutes les entrées...");
  
  const miroirPath = path.join(__dirname, '../src/data/miroir.ts');
  let content = fs.readFileSync(miroirPath, 'utf-8');
  
  let addedCount = 0;
  let skippedCount = 0;
  
  // Le 6ème regard
  const ombreRegard = `,
      { label: "L'Ombre", ar: "الظل", color: "#6366f1", text: "L'ombre de ce verset révèle mes résistances cachées. Ce que je refuse de voir en moi, ce que j'exclus de ma conscience — tout cela est éclairé par cette révélation. Le miroir montre ce que je suis ; l'ombre montre ce que je ne veux pas être encore. Ce regard m'invite à accueillir mes zones d'ombre avec compassion plutôt que de les fuir." }`;
  
  // Pattern: trouver les entrées tajalli qui finissent par "Le Secret" sans "L'Ombre"
  // On utilise un pattern plus simple
  
  // D'abord compter les entrées
  const totalEntries = (content.match(/tajalli: \[/g) || []).length;
  console.log(`   - Total entrées tajalli: ${totalEntries}`);
  
  // Trouver toutes les positions de "Le Secret" suivies immédiatement de ]
  // Pattern: "Le Secret", ar: "السر", color: "#fb7185", text: "..." }
  // suivi par un saut de ligne et ]
  
  // On va traiter ligne par ligne
  const lines = content.split('\n');
  const newLines: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Si cette ligne contient "Le Secret" et la ligne suivante est "    ],"
    if (line.includes('label: "Le Secret"')) {
      // Vérifier si la ligne suivante est la fermeture du tableau
      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (nextLine.trim() === '],') {
          // Ajouter l'ombre avant la fermeture
          newLines.push(line);
          newLines.push(ombreRegard);
          addedCount++;
          continue;
        }
      }
    }
    
    // Vérifier si c'est une fermeture de tableau tajalli qui suit déjà "L'Ombre"
    if (line.trim() === '],' && i > 0 && lines[i - 1].includes("L'Ombre")) {
      skippedCount++;
    }
    
    newLines.push(line);
  }
  
  // Sauvegarder le fichier
  const newContent = newLines.join('\n');
  fs.writeFileSync(miroirPath, newContent, 'utf-8');
  
  console.log(`\n✅ 6ème regard ajouté!`);
  console.log(`📊 Statistiques:`);
  console.log(`   - Entrées modifiées: ${addedCount}`);
  console.log(`   - Entrées avec déjà L'Ombre: ${skippedCount}`);
}

main().catch(console.error);
