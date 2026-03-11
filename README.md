# Padel Vision — Site Web Vitrine v2

Direction artistique **Heritage Intelligence** · Toulouse, France

---

## Structure des fichiers

```
padelsite/
├── index.html          → Page d'accueil
├── products.html       → Catalogue des offres
├── contact.html        → Page de contact + formulaire
├── style.css           → Feuille de style globale (BEM + CSS custom properties)
├── main.js             → Interactions vanilla JS
└── README.md           → Ce fichier
```

---

## Direction artistique — Heritage Intelligence

Le concept mêle l'esthétique d'un programme officiel Wimbledon/Roland Garros années 70 à la précision froide d'une interface IA.

**Palette de couleurs**

| Token | Valeur | Usage |
|---|---|---|
| `--forest` | `#1B3C2D` | Couleur primaire forte |
| `--forest-dark` | `#0F2218` | Fond sombre, header, footer |
| `--parchment` | `#F0E8D6` | Fond universel clair |
| `--parchment-2` | `#FAF5EC` | Fond sections principales |
| `--parchment-3` | `#E8DECA` | Fond sections alternées |
| `--gold` | `#8C6420` | Accent prestige, labels |
| `--gold-mid` | `#B08030` | Boutons primaires |
| `--gold-light` | `#C8A050` | Accents sur fond sombre |
| `--text-body` | `#2A2018` | Texte principal (ratio ≥ 9:1) |
| `--text-light` | `#3D3020` | Texte secondaire (ratio ≥ 7.5:1) |

**Typographie**

| Rôle | Police | Usage |
|---|---|---|
| Display | Playfair Display | H1, H2, H3, logo, grands chiffres |
| Refined | Cormorant Garamond | Leads, citations, sous-titres |
| Body | EB Garamond | Corps de texte |
| Mono | Courier Prime | Nav, labels, badges, données IA |

Taille minimale body : `1rem` (16px). Aucune police sans-serif.  
Boutons : Courier Prime CAPS, `letter-spacing: 0.18em`, `border-radius: 0`.

---

## Pages

### `index.html` — Accueil

1. Header fixe · logo + nav Courier Prime
2. Hero · titre H1 + diagramme SVG terrain padel + stats strip
3. Comment ça marche · 3 étapes (Installation → IA → Revenus)
4. **Score 100% automatique** · section différenciante avec mockup live
5. Features · grille asymétrique avec heatmap SVG
6. Nos 3 Offres · Court Connecté / Club Intelligence (featured) / Réseau Premium
7. Padel Vision en chiffres · scoreboard sombre + data feed live
8. Témoignages · 3 boxes "En train de rédiger un avis"
9. CTA final · fond forest
10. Footer · 4 colonnes

### `products.html` — Offres

1. Hero de page + fil d'Ariane
2. Détail des 3 offres (cartes déployées)
3. Tableau comparatif complet
4. Tableau ROI avant/après
5. FAQ accordéon (6 questions)
6. CTA

### `contact.html` — Contact

1. Hero de page
2. Formulaire : Nom, Email, Salle, Nombre de terrains, Message, Consentement
3. Sidebar : infos contact + trust badges + mini FAQ
4. Scoreboard mini

---

## Les 3 produits

| # | Nom | Positionnement | Message clé |
|---|---|---|---|
| 01 | **Court Connecté** | Entrée de gamme | Simple à installer. Résultats immédiats. |
| 02 | **Club Intelligence** ★ | IA complète + monétisation | +35% de revenus. ROI en moins de 6 mois. |
| 03 | **Réseau Premium** | Multi-sites et franchises | Une solution pour les réseaux de clubs. |

---

## Architecture technique

### HTML
- HTML5 sémantique : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Accessibilité WCAG 2.1 AA : `skip-link`, `aria-label`, `aria-current`, `aria-expanded`, `aria-live`
- SEO : `<title>` unique, `<meta description>`, `<link rel="canonical">`, JSON-LD
- Pas d'images — SVG illustratifs uniquement (terrain padel, heatmap, raquette)

### CSS (`style.css`)
- Méthodologie BEM + CSS Custom Properties
- Mobile-first, breakpoints : `480px → 768px → 1200px`
- Pas de framework, aucune dépendance externe (sauf Google Fonts)
- Contrastes WCAG AA garantis sur tous les fonds
- `@media (prefers-reduced-motion: reduce)` respecté

### JavaScript (`main.js`)
- Vanilla JS pur, zéro dépendance, pattern IIFE
- `document.documentElement.classList.add('js-ready')` en premier — le CSS masque les éléments `.reveal` **seulement** si JS est actif, garantissant l'affichage sans JS
- `IntersectionObserver` pour le scroll reveal (`threshold: 0`, sans `rootMargin` négatif)
- `IntersectionObserver` pour les compteurs animés (`data-count`)
- Navigation mobile avec gestion ARIA + blocage scroll body
- Validation formulaire inline + génération du `mailto:`
- Score live animé dans le SVG terrain (`id="live-score"`)

---

## Scroll Reveal — fonctionnement

Le système utilise un double mécanisme pour éviter le contenu invisible :

```css
/* Visible par défaut (sans JS) */
.reveal { transition: opacity 0.55s ease, transform 0.55s ease; }

/* Masqué uniquement si JS est chargé */
.js-ready .reveal { opacity: 0; transform: translateY(18px); }

/* Révélé par l'observer */
.js-ready .reveal.is-visible { opacity: 1; transform: none; }
```

```js
// JS ajoute la classe immédiatement
document.documentElement.classList.add('js-ready');

// Observer avec threshold 0 — déclenche dès le premier pixel visible
new IntersectionObserver(callback, { threshold: 0, rootMargin: '0px' });
```

---

## Personnalisation rapide

### Modifier les couleurs
Dans `style.css`, section `1. DESIGN TOKENS` :
```css
:root {
  --forest:     #1B3C2D;
  --gold-mid:   #B08030;
  --parchment:  #F0E8D6;
}
```

### Modifier l'email de contact
Dans `main.js`, ligne ~100 :
```js
const addr = ['padel', '.', 'vision', '.', 'ai', '@', 'gmail', '.', 'com'].join('');
```

### Ajouter une vraie image à la place d'un SVG
Remplacer le bloc `<svg class="court-svg">` par :
```html
<img src="assets/img/terrain.jpg" alt="Vue aérienne terrain padel" width="380" loading="lazy">
```

### Activer un vrai backend pour le formulaire
Remplacer le `window.location.href = mailto:...` dans `main.js` par :
```js
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, club, courts, message })
});
```

### Ajouter des témoignages réels
Dans `index.html`, section `TESTIMONIALS`, remplacer chaque `<article class="testimonial">` :
```html
<article class="testimonial">
  <blockquote class="testimonial__quote">
    "Votre citation ici."
  </blockquote>
  <div class="testimonial__author">
    <div class="testimonial__avatar">XX</div>
    <div>
      <div class="testimonial__name">Prénom Nom</div>
      <div class="testimonial__club">Nom du club · Ville · N terrains</div>
      <div class="testimonial__stars" aria-label="5 étoiles">★★★★★</div>
    </div>
  </div>
</article>
```

---

## Checklist avant mise en production

- [ ] Remplacer les SVG illustratifs par de vraies photos (compressées en WebP)
- [ ] Ajouter `favicon.ico` et `apple-touch-icon.png`
- [ ] Créer `robots.txt` et `sitemap.xml`
- [ ] Vérifier les contrastes avec [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [ ] Tester la navigation clavier sur toutes les pages
- [ ] Activer HTTPS et redirection www → non-www (ou l'inverse)
- [ ] Configurer les en-têtes CSP côté serveur
- [ ] Ajouter Google Analytics ou Plausible
- [ ] Connecter le formulaire de contact à un vrai backend
- [ ] Mettre à jour les témoignages avec de vrais avis clients

---

## Contact

**Padel Vision AI** · Toulouse, France  
[padel.vision.ai@gmail.com](mailto:padel.vision.ai@gmail.com)  
[padelvisionai.com](https://padelvisionai.com)
