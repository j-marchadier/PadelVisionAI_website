# Padel Vision — Direction Artistique
## Référentiel Visuel & Charte Graphique

> *Heritage Intelligence — Mars 2026 — Document Interne Confidentiel v1.0*

---

## Contexte

**Padel Vision** est une startup B2B française qui commercialise des systèmes d'analyse vidéo par IA pour les clubs de padel. Le style visuel est « Old Money » / « Quiet Luxury » : sobre, patrimonial, sans ostentation.

L'esthétique évoque une brochure d'adhésion à un club de sport britannique haut de gamme des années 1970, imprimée sur du papier ivoire de qualité — avec, superposés, des données de précision affichées en monospace comme sur un terminal Bloomberg.

---

## I. Palette de Couleurs

**Règle générale :** Aucun blanc pur. Aucun noir pur. Aucun bleu vif, rouge vif ou couleur saturée. La palette entière respire le chaud, le patiné, le discret.

### Verts profonds — Couleur signature

| Token | Hex | Usage |
|-------|-----|-------|
| `--forest-deep` | `#0F2218` | Fond des sections les plus sombres |
| `--forest` | `#1B3C2D` | Couleur principale, sections premium |
| `--forest-mid` | `#336659` | Hover, variation |
| `--olive` | `#4A5A2C` | Ton secondaire |

### Crème / Parchemin — Fond général

| Token | Hex | Usage |
|-------|-----|-------|
| `--ivory` | `#FAF5EC` | Fond de la majorité des pages |
| `--parchment` | `#F0E8D6` | Sections alternées |
| `--parchment-mid` | `#E8DECA` | Nuance supplémentaire |
| `--parchment-drk` | `#DDD4C0` | Nuance supplémentaire |

### Or ancien / Laiton patiné — Accent

| Token | Hex | Usage |
|-------|-----|-------|
| `--gold-dark` | `#8C6420` | Teinte la plus profonde, labels |
| `--gold-mid` | `#B08030` | Accent principal, boutons CTA |
| `--gold-light` | `#C8A050` | Chiffres clés, éléments en valeur |
| `--gold-pale` | `#E8C878` | Éclats subtils |

### Tons texte & secondaires

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-main` | `#2A2018` | Texte principal sur parchemin |
| `--text-sec` | `#3D3020` | Texte secondaire |
| `--text-ter` | `#4A3F30` | Texte tertiaire |
| `--text-lt` | `#6B5E4A` | Texte léger |
| `--anthracite` | `#3D3A35` | Anthracite chaud |
| `--taupe` | `#9C8B75` | Taupe |
| `--camel` | `#B8956A` | Barre gauche des textes d'accroche |

### Logique des fonds de section

```
Section standard   →  Ivoire       #FAF5EC
Section alternée   →  Parchemin    #E8DECA
Section premium    →  Vert bouteille  #1B3C2D
Section sombre     →  Vert nuit    #0F2218
```

### Texte sur fond vert

```
Texte principal   →  rgba(240,232,214,0.92)   — parchemin translucide
Texte secondaire  →  rgba(240,232,214,0.65)
```

---

## II. Typographie

**Règle absolue :** uniquement des polices serif et monospace. Zéro sans-serif.

| Usage | Police | Caractéristiques |
|-------|--------|-----------------|
| Titres H1 / H2 / H3 | **Playfair Display** | Grand, fort contraste fins/épais, weight 700 |
| Textes d'accroche / citations | **Cormorant Garamond** | Très fin (weight 300), haut de gamme, presque fragile |
| Corps de texte courant | **EB Garamond** | Académique, lisible, littéraire |
| Étiquettes / données / labels | **Courier Prime** | Monospace, esprit machine à écrire / terminal |

### Comportement typographique

- **Labels et étiquettes** — majuscules + espacement large : `letter-spacing: 0.15em` à `0.25em`
- **Titres** — légèrement espacés : `letter-spacing: 0.01–0.03em`, interligne serré : `line-height: 1.05–1.12`
- **Textes d'accroche** — fins, aérés : `line-height: 1.6–1.7`, `font-weight: 300`, `font-style: italic`
- **Corps de texte** — `font-size: ~17px`, `line-height: 1.6–1.65`

---

## III. Principes Visuels Clés

### Angles & Formes

- **Zéro arrondi** — `border-radius: 0` sur tous les éléments : boutons, cartes, badges, champs
- Les visuels « écran / terminal » (mockups de scores) sont aussi des rectangles droits

### Bordures & Séparateurs

```css
/* Sur fond clair */
border: 1px solid rgba(140,100,32,0.20);

/* Sur fond vert sombre */
border: 1px solid rgba(240,232,214,0.09);

/* Cadre décoratif inséré (effet encadrement de tableau) */
/* Filet 1px or, inset 5–7mm, à l'intérieur de la section */
```

### Espacement

- Padding interne des sections : **14–18mm minimum**
- Le contenu n'est jamais à l'étroit — l'air est une valeur design

### Boutons / CTAs

```css
/* Bouton principal */
background: #B08030;
color: #0F2218;
font-family: 'Courier Prime', monospace;
text-transform: uppercase;
letter-spacing: 0.2em;
border-radius: 0;

/* Bouton secondaire */
background: transparent;
border: 1px solid rgba(140,100,32,0.35);
border-radius: 0;
```

Hover : simple changement de teinte, pas d'animation complexe.

---

## IV. Éléments Graphiques Récurrents

| Élément | Caractère | Usage |
|---------|-----------|-------|
| Losange plein | `◆` | Séparateur, puce de liste — en or, 7–9pt |
| Flèche | `→` | Dans les boutons et liens d'action |
| Chiffres romains | I, II, III… | Toute numérotation d'étapes ou de produits |
| Barre gauche | `2px solid #B8956A` | Filet camel à gauche des textes d'accroche |
| Coin triangle or | CSS `border` | Coin supérieur droit des cartes non-featured, `rgba(140,100,32,0.18)` |
| Étiquette featured | Courier Prime | « LE PLUS POPULAIRE » — fond `#B08030`, texte vert nuit |

---

## V. Les 3 Offres Produit

| # | Nom | Installation | Mensuel | Rentabilisé en |
|---|-----|-------------|---------|----------------|
| I | Court Connecté | 1 900 € | 140 €/mois | 3 matchs |
| II ★ | Club Intelligence | 1 900 € | 240 €/mois | 5 matchs |
| III | Court Préstige | 2 900 € | 380 €/mois | 8 matchs |

> ROI de référence : 1 match = 13 € × 4 joueurs = **52 €**

---

## VI. Ambiance Générale

Imagine une brochure de club de tennis privé britannique des années 1970, imprimée sur du papier ivoire légèrement teinté de jaune. Les titres sont en Caslon ou Bodoni, les colonnes de chiffres en Courier. Les couleurs sont vertes, crème et or patiné — pas de flashy, pas de moderne.

Sur cette brochure, quelqu'un a superposé des données live affichées en Courier : scores, vitesses, statistiques — comme si un terminal de salle des marchés avait été greffé sur un carnet de score de Wimbledon.

C'est cette tension entre la **tradition typographique classique** et la **froideur précise des données monospace** qui donne son caractère au projet.

**Ambiance en 5 mots : Feutré. Précis. Patrimonial. Discret. Technique.**

### Notes sur les sections sombres

- Les sections sombres (fond vert bouteille) ne sont pas inquiétantes — elles évoquent le cuir d'un fauteuil de club anglais. Le texte parchemin translucide dessus est chaleureux.
- Les mockups de données s'affichent en Courier Prime sur fond vert très sombre, texte parchemin translucide — comme un vieux terminal dans une pièce lambrissée.
- Les cartes de prix ont un léger dégradé du parchemin clair vers un parchemin légèrement ambré — l'effet d'un papier légèrement chauffé.
- Les grandes statistiques s'affichent en Playfair Display grand format, couleur or clair `#C8A050`, sur fond vert nuit — comme des scores gravés dans un tableau d'honneur.

---

## VII. Ce qu'il ne faut absolument pas faire

- **Emojis** — aucun, dans aucun contexte, jamais
- **Coins arrondis** — même sur les plus petits éléments
- **Polices sans-serif** — pas d'Arial, Inter, Helvetica, Poppins…
- **Blanc pur `#FFFFFF` ou noir pur `#000000`** — la palette est chaude
- **Bleu, rouge vif, vert fluorescent** — toute couleur saturée est interdite
- **Dégradés synthétiques ou lumineux** — si dégradé, effet papier chauffé uniquement
- **Ombres portées prononcées** — si shadow, toujours très subtil et chaud
- **Icônes plates modernes** — pas de Material Design ni Heroicons
- **Texte trop petit sans espacement** — les labels compensent par le letter-spacing
- **Superlatifs creux ou ton enthousiaste** — ton factuel, posé, jamais commercial

---

## VIII. Récapitulatif des tokens CSS

```css
:root {
  /* Verts */
  --forest:        #1B3C2D;
  --forest-deep:   #0F2218;
  --forest-mid:    #336659;
  --olive:         #4A5A2C;

  /* Parchemin */
  --ivory:         #FAF5EC;
  --parchment:     #F0E8D6;
  --parchment-mid: #E8DECA;
  --parchment-drk: #DDD4C0;

  /* Or */
  --gold-dark:     #8C6420;
  --gold-mid:      #B08030;
  --gold-light:    #C8A050;
  --gold-pale:     #E8C878;

  /* Tons secondaires */
  --anthracite:    #3D3A35;
  --taupe:         #9C8B75;
  --camel:         #B8956A;

  /* Texte */
  --text-main:     #2A2018;
  --text-sec:      #3D3020;
  --text-ter:      #4A3F30;
  --text-lt:       #6B5E4A;
}
```

---

*Padel Vision — Direction Artistique — Mars 2026 — Confidentiel*
