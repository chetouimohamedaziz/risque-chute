# RisqueChute

Application Angular de sensibilisation et de recommandations autour du risque de chute chez les personnes âgées.

## Démarrage local

Installer les dépendances puis lancer le serveur de développement :

```bash
npm install
npm start
```

L'application est ensuite disponible sur `http://localhost:4200/`.

## Scripts utiles

```bash
npm start
npm run build
npm run build:pages
npm run lint
npm test
npm run check
```

Détails :

- `npm start` lance le serveur de développement Angular.
- `npm run build` génère la version de production dans `dist/risque-chute/browser`.
- `npm run build:pages` génère la version prête pour GitHub Pages avec le bon `base-href`.
- `npm run lint` exécute ESLint sur le projet.
- `npm test` exécute les tests Jest avec le rapport de couverture.
- `npm run check` enchaîne lint puis tests.

## Déploiement automatique GitHub Pages

Le dépôt contient déjà le workflow [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

Le déploiement est automatique sur chaque `push` vers la branche `master`. Le workflow fait les opérations suivantes :

1. installe les dépendances avec `npm ci` ;
2. exécute `npm run check` ;
3. lance `npm run build:pages` ;
4. publie le contenu de `dist/risque-chute/browser` sur GitHub Pages.

## Activation côté GitHub

Dans le dépôt GitHub :

1. ouvrir `Settings` ;
2. aller dans `Pages` ;
3. choisir `Source: GitHub Actions`.

Une fois activée, l'application sera publiée sur l'URL suivante :

`https://chetouimohamedaziz.github.io/risque-chute/`

## Qualité

Le projet utilise :

- Angular 21 ;
- ESLint pour le linting ;
- Jest pour les tests ;
- GitHub Actions pour le déploiement automatique.

## Version stable actuelle

La version stable actuelle est `1.0.1`.

### Correctif 1.0.1

- Correction des accents manquants dans le wording français.
- Aucun changement fonctionnel ni breaking change.

## Release Notes v1.0.0

**Première version stable du questionnaire interactif Risque Chute.**

### ✨ Nouveautés

#### Interface Utilisateur
- **Sélecteur de langue amélioré** : Interface compacte avec affichage emoji-seulement (🇫🇷 🇬🇧 العربية)
- **Responsive design optimisé** : Espacement uniforme et cohérent sur mobile, tablette et desktop
- **Composants Material** : Intégration complète avec Angular Material (thème Roboto, densité 0)

#### Architecture & Performance
- **Service de viewport centralisé** : gestion unifiée des points de rupture via signaux Angular (isMobile, isTablet, isDesktop)
- **Système de design tokens SCSS** : architecture modulaire rem-based pour cohérence visuelle et maintenabilité
- **Modèle de réponses canonique** : utilisation de booléens plutôt que chaînes localisées pour isoler la logique métier
- **Factory pattern i18n** : `mapByLanguage()` élimine la duplication dans 4 domaines (langue-meta, questions, recommandations, wording)

#### Qualité du Code
- **100% couverture de test** : Suite Jest avec 6 suites et 32 tests (Vitest runner)
- **Configuration TypeScript strict** : `noImplicitOverride`, `strictTemplates`, et autres règles de sécurité type
- **Code linting** : ESLint 10.2.0 avec règles Angular intégrées, zéro violations

#### Infrastructure
- **Application standalone** : Aucun NgModule, architecture moderne Angular 21.1.0
- **Forms réactifs** : FormBuilder injection avec validateurs typés
- **Système de recommandations** : calcul de risque et affichage localisé en FR/EN/AR

### 🏗️ Stack Technique

- **Framework** : Angular 21.1.0 (standalone components)
- **Styling** : SCSS avec design tokens modulaires (units, sizes, motion, elevation, typography)
- **State Management** : Signals Angular pour l'état des composants
- **Testing** : Jest 30.3.0 avec configuration Vitest
- **TypeScript** : Strict mode avec declarations complètes

### 📦 Contenu

- ✅ Questionnaire multi-étapes avec stepper Material
- ✅ Système de scoring et recommandations personnalisées
- ✅ Support multilingue (FR, EN, AR)
- ✅ Détection de viewport responsive
- ✅ Design system tokens et thème Material cohérent

**Prêt pour la production et les améliorations futures.** 🎯
