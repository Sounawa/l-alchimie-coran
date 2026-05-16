# Le Coran du Miroir

> Le Coran ne se lit pas — il se contemple. Chaque verset est un miroir qui révèle une couche de ton âme.

Une application web contemplative pour explorer le Coran à travers des regards spirituels approfondis.

## Fonctionnalités

- **114 Sourates** - Texte arabe (Uthmani vocalisé) et traduction française (Muhammad Hamidullah)
- **Versets Miroir** - Chaque verset contemplatif avec réflexion spirituelle
- **6 Regards du Tajalli** - Analyse multidimensionnelle de chaque verset
- **Parcours Spirituels** - Guides thématiques (Prière, Patience, Gratitude, etc.)
- **Niveaux de l'Âme (Nafs)** - Exploration des 7 niveaux spirituels
- **Voyage du Cœur** - Cheminement spirituel guidé
- **Noms Divins** - Contemplation des attributs d'Allah
- **Prophètes** - Enseignements des messagers
- **Thèmes** - Classification par thèmes spirituels
- **Recherche** - Recherche dans tout le texte coranique
- **Favoris** - Sauvegarde des versets préférés
- **Mode Sombre/Clair** - Interface adaptative

## Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **shadcn/ui** - Composants UI
- **Framer Motion** - Animations

## Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/coran-miroir.git
cd coran-miroir

# Installer les dépendances
bun install

# Lancer en développement
bun run dev

# Build pour production
bun run build
```

## Déploiement GitHub Pages

Ce projet est configuré pour un déploiement statique sur GitHub Pages :

1. Aller dans Settings > Pages
2. Sélectionner "GitHub Actions" comme source
3. Le workflow se déclenche automatiquement à chaque push sur `main`

Le site sera disponible à : `https://votre-username.github.io/coran-miroir/`

## Structure du Projet

```
├── src/
│   ├── app/
│   │   ├── page.tsx       # Page principale
│   │   ├── layout.tsx     # Layout global
│   │   └── globals.css    # Styles globaux
│   ├── components/ui/     # Composants shadcn/ui
│   └── data/
│       ├── miroir.ts      # Données des versets miroir
│       └── themes.ts      # Thèmes et parcours
├── public/                # Assets statiques
└── .github/workflows/     # GitHub Actions
```

## Données

Les données du Coran sont chargées depuis [quran-json](https://github.com/risan/quran-json) via CDN.

Les contemplations "Miroir" sont des interprétations spirituelles originales.

## Licence

MIT License - voir [LICENSE](LICENSE)

## Auteur

Créé avec amour et contemplation.
