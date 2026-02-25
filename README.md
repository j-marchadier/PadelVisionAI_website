# Padel Vision AI — Site Web Vitrine

## Architecture des fichiers

```
padelsite/
├── index.html          → Page d'accueil
├── products.html       → Catalogue des offres
├── contact.html        → Page de contact + formulaire
├── assets/
│   ├── css/
│   │   └── style.css   → Feuille de style globale (BEM + CSS custom properties)
│   └── js/
│       └── main.js     → Interactions (nav, reveal, formulaire, compteurs)
└── README.md           → Ce fichier
```

---

## Décisions techniques

### HTML
- **HTML5 sémantique** : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<dl>`
- **Accessibilité WCAG 2.1 AA** :
  - `skip-link` pour sauter la navigation au clavier
  - `aria-label`, `aria-current`, `aria-expanded`, `aria-required`, `aria-describedby`, `aria-live` utilisés partout
  - Rôles ARIA (`role="banner"`, `role="contentinfo"`, `role="list"`, `role="alert"`, `role="status"`)
  - Éléments décoratifs masqués avec `aria-hidden="true"`
  - Focus visible sur tous les éléments interactifs via `:focus-visible`
- **SEO** :
  - Balises `<title>` et `<meta name="description">` uniques par page
  - `<link rel="canonical">` sur chaque page
  - Open Graph et Twitter Card
  - JSON-LD (Organization, ItemList, ContactPage)
  - Structure de headings cohérente (h1 → h2 → h3)
- **Performance** :
  - Images lazily loaded (`loading="lazy"`) à ajouter sur les `<img>` futures
  - Polices Google avec `preconnect`
  - JavaScript non-bloquant (`defer`)
  - CSS critique inliné pour éviter le FOUC

### CSS (`style.css`)
- **Méthodologie BEM** (Block__Element--Modifier)
- **Custom Properties** pour tous les tokens de design (couleurs, typographie, espacement, rayons)
- **Mobile-first** avec breakpoints : 480px → 768px → 1200px
- **Pas de framework** : CSS pur, aucune dépendance externe
- Contraste de texte : blanc sur fond sombre — ratio ≥ 4.5:1 pour le texte courant
- `@media (prefers-reduced-motion: reduce)` pour respecter les préférences système
- Scrollbar stylisée (webkit)
- Animations CSS uniquement (orbs, fadeUp, blink, orbFloat)

### JavaScript (`main.js`)
- **Vanilla JS pur**, aucune dépendance
- Pattern IIFE pour l'isolation du scope
- `IntersectionObserver` pour le scroll reveal (performance vs scroll event)
- `IntersectionObserver` pour les compteurs animés
- Navigation mobile avec gestion ARIA complète + blocage du scroll body
- Fermeture du menu au `keydown: Escape`
- Validation de formulaire inline + génération du mailto
- Écoute `scroll` avec option `{ passive: true }`

---

## Guide de personnalisation rapide

### Modifier les couleurs
Ouvrir `assets/css/style.css`, section `1. DESIGN TOKENS`.

```css
:root {
  --color-cyan:   #00DCB4;  /* Couleur principale accent */
  --color-green:  #7AFFA0;  /* Vert clair gradient */
  --color-yellow: #D4F77A;  /* Jaune citron gradient */
  --color-bg:     #070D0F;  /* Fond principal */
}
```

### Ajouter des images réelles
Remplacer les `<div class="product-card__court-placeholder">` dans `products.html` par :
```html
<img
  src="assets/img/court-connecte.jpg"
  alt="Vue du Court Connecté Padel Vision AI"
  width="800" height="450"
  loading="lazy"
>
```

### Modifier les offres / features
Dans `products.html` : éditer les balises `<article class="product-card">`.
Dans `index.html` : éditer les `<article class="feature-card">`.

### Ajouter une nouvelle page
1. Dupliquer `contact.html`
2. Modifier le `<title>`, `<meta name="description">`, `<link rel="canonical">`
3. Mettre à jour `aria-current="page"` dans la navigation
4. Ajouter le lien dans tous les footers

### Changer l'email de réception du formulaire
Dans `assets/js/main.js`, ligne ~100 :
```js
const addr = ['padel', '.', 'vision', '.', 'ai', '@', 'gmail', '.', 'com'].join('');
```

### Activer un vrai backend pour le formulaire
Remplacer le `window.location.href = mailto:...` dans `main.js` par un `fetch()` vers votre API :
```js
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, venue, email, ... })
});
```

---

## Checklist avant mise en production

- [ ] Remplacer les placeholders visuels par de vraies images (compressées en WebP)
- [ ] Ajouter `favicon.ico` et `apple-touch-icon.png` à la racine
- [ ] Créer `robots.txt` et `sitemap.xml`
- [ ] Vérifier le contraste avec un outil comme Colour Contrast Analyser
- [ ] Tester sur VoiceOver (macOS/iOS) et NVDA (Windows)
- [ ] Mettre à jour le Google Tag Manager ID dans chaque page si nécessaire
- [ ] Activer HTTPS et redirection www
- [ ] Configurer les en-têtes CSP côté serveur

---

## Accessibilité — points de contrôle WCAG 2.1 AA

| Critère | Statut |
|---------|--------|
| 1.1.1 Texte alternatif | ✅ `aria-hidden` sur décoratifs, `alt` requis sur images |
| 1.3.1 Information et relations | ✅ Sémantique HTML5 + ARIA |
| 1.4.3 Contraste minimum (4.5:1) | ✅ Blanc sur fond sombre |
| 1.4.4 Redimensionnement du texte | ✅ Unités `rem` + `clamp()` |
| 2.1.1 Clavier | ✅ Tous interactifs atteignables au clavier |
| 2.4.1 Contournement de blocs | ✅ Skip link |
| 2.4.2 Titre de page | ✅ `<title>` unique sur chaque page |
| 2.4.7 Visibilité du focus | ✅ `:focus-visible` avec outline cyan |
| 3.1.1 Langue de la page | ✅ `lang="fr"` |
| 3.3.1 Identification des erreurs | ✅ `role="alert"` + `aria-describedby` |
| 4.1.2 Nom, rôle, valeur | ✅ ARIA complet sur tous les composants |
