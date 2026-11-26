
# 724Events — Débogage d'une application React

## Présentation du projet

724Events est un site vitrine one-page destiné à une agence événementielle.

Ce projet a été réalisé dans le cadre de ma formation d'Intégrateur Web chez OpenClassrooms.

L'objectif était de reprendre une application React existante, d'identifier ses dysfonctionnements, de corriger les anomalies et de renforcer la fiabilité du site grâce aux tests automatisés et fonctionnels.

## Technologies et outils utilisés

- React
- JavaScript
- HTML5
- CSS3 / Sass
- Jest
- React Testing Library
- React Developer Tools
- Chrome DevTools
- ESLint
- Git et GitHub
- Visual Studio Code
- Yarn

## Corrections apportées

- Correction du défilement automatique du carrousel.
- Synchronisation des indicateurs du carrousel.
- Correction du filtrage des événements par catégorie.
- Correction du système de pagination.
- Correction de l'affichage des mois.
- Harmonisation des dates entre les cartes et les fenêtres de détail.
- Correction du formulaire de contact et réinitialisation des champs.
- Affichage de la dernière prestation dans le footer.
- Rétablissement de la navigation interne.
- Correction des avertissements React identifiés.
- Sécurisation de la gestion du timer.
- Réactivation des tests ignorés.
- Renforcement des tests unitaires et d'intégration.

## Méthodologie

1. Analyse du code existant.
2. Reproduction et identification des anomalies.
3. Inspection des composants, des états et des données.
4. Identification des causes.
5. Correction progressive du code.
6. Exécution des tests automatisés.
7. Validation manuelle des fonctionnalités.
8. Documentation des corrections.

## Résultats obtenus

| Indicateur | Avant | Après |
|---|---:|---:|
| Suites de tests réussies | 11/16 | 16/16 |
| Tests réussis | 41/49 | 50/50 |
| Tests en échec | 5 | 0 |
| Tests ignorés | 3 | 0 |
| Taux de réussite | 83,7 % | 100 % |

- 17 anomalies analysées et traitées.
- 14 scénarios fonctionnels validés.
- 3 tests unitaires implémentés.
- 4 tests d'intégration implémentés.

L'exactitude des périodes détaillées des événements reste à confirmer par le client. Les données sources ont été conservées.

## Prérequis

- Node.js >= v16.14.1
- Yarn

Environnement utilisé lors du développement :

- Node.js : v22.23.2
- npm : 10.9.8
- Yarn : 1.22.22

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/marrietbenoit/Debuggez-une-application-React.JS.git
```

Accéder au dossier du projet :

```bash
cd Debuggez-une-application-React.JS
```

Installer les dépendances :

```bash
yarn install --frozen-lockfile
```

## Lancement de l'application

```bash
yarn start
```

L'application est accessible à l'adresse :

http://localhost:3000

## Exécution des tests

Lancer les tests en mode interactif :

```bash
yarn test
```

Exécuter l'ensemble des tests :

```bash
yarn test --watchAll=false
```

## Compétences développées

- Débogage d'une application React existante.
- Analyse des composants et des flux de données.
- Identification et résolution des anomalies.
- Utilisation des outils de développement.
- Écriture de tests unitaires et d'intégration.
- Validation fonctionnelle d'une application.
- Documentation technique des interventions.
- Gestion de versions avec Git et GitHub.

## Documentation

- Journal de débogage.
- Cahier de recette fonctionnelle.

## Auteur

**Marriet Benoit — Intégratrice Web en formation**

Code source initial fourni par OpenClassrooms.

Analyse, débogage, corrections, tests et documentation réalisés par Marriet Benoit.
