# RisqueChute

Application Angular de sensibilisation et de recommandations autour du risque de chute chez les personnes agees.

## Demarrage local

Installer les dependances puis lancer le serveur de developpement :

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

Details :

- `npm start` lance le serveur de developpement Angular.
- `npm run build` genere la version de production dans `dist/risque-chute`.
- `npm run build:pages` genere la version prete pour GitHub Pages avec le bon `base-href`.
- `npm run lint` execute ESLint sur le projet.
- `npm test` execute les tests Jest avec le rapport de couverture.
- `npm run check` enchaine lint puis tests.

## Deploiement automatique GitHub Pages

Le depot contient deja le workflow [deploy-pages.yml](.github/workflows/deploy-pages.yml).

Le deploiement est automatique sur chaque `push` vers la branche `main`. Le workflow fait les operations suivantes :

1. installe les dependances avec `npm ci` ;
2. execute `npm run check` ;
3. lance `npm run build:pages` ;
4. publie le contenu de `dist/risque-chute` sur GitHub Pages.

## Activation cote GitHub

Dans le depot GitHub :

1. ouvrir `Settings` ;
2. aller dans `Pages` ;
3. choisir `Source: GitHub Actions`.

Une fois active, l'application sera publiee sur l'URL suivante :

`https://chetouimohamedaziz.github.io/risque-chute/`

## Qualite

Le projet utilise :

- Angular 21 ;
- ESLint pour le linting ;
- Jest pour les tests ;
- GitHub Actions pour le deploiement automatique.
