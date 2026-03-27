# Brand Review — Padel Vision AI
**Date :** 27 mars 2026
**Pages auditées :** `index.html`, `products.html` (contact.html inaccessible — fichier verrouillé)
**Référentiel :** CLAUDE.md — Heritage Intelligence, ton B2B, sérif exclusif, rigueur factuelle

---

## Résumé général

Le site repose sur une direction artistique forte et cohérente (typographie sérif, palette forêt/or/parchemin, numérotation en chiffres romains, ◆ comme ponctuation visuelle) qui est bien respectée dans l'ensemble. Les textes longs — FAQ, descriptions produits détaillées, CTAs — sont rédigés avec le bon ton : direct, expert, confiant sans être arrogant.

**Points forts :** La FAQ est exemplaire dans sa voix. Les CTAs sont percutants. L'architecture de l'information est claire.

**Priorité absolue :** Deux problèmes critiques doivent être corrigés avant toute diffusion — une contradiction directe sur les conditions contractuelles et une incohérence des chiffres de précision IA qui crée un risque de crédibilité réel.

---

## Tableau des problèmes détectés

| # | Problème | Localisation | Sévérité | Catégorie |
|---|----------|-------------|----------|-----------|
| 1 | Contradiction "sans engagement" vs "2 ans d'engagement" | index.html — section prix + CTA | 🔴 HIGH | Compliance / Cohérence |
| 2 | Incohérence 98% vs ~90% de précision IA | index.html — hero + scoreboard + how-it-works | 🔴 HIGH | Legal / Crédibilité |
| 3 | "La seule solution" — claim exclusif non substantié | index.html — hero lead | 🔴 HIGH | Legal |
| 4 | Court Préstige décrit différemment sur les deux pages | index.html vs products.html | 🟠 MEDIUM | Cohérence messaging |
| 5 | Logo tagline incohérente sur la même page | index.html — header vs footer | 🟠 MEDIUM | Brand identity |
| 6 | Menu mobile non mis à jour (lien Comparatif visible) | index.html — mobile-menu | 🟠 MEDIUM | Navigation |
| 7 | "200+ clubs satisfaits" — chiffre affiché incorrectement | index.html — scoreboard | 🟠 MEDIUM | Legal / Précision |
| 8 | "+35% de revenus" sans qualification sur la card | products.html — Club Intelligence | 🟠 MEDIUM | Legal |
| 9 | Typos et erreurs grammaticales (5 occurrences) | products.html + index.html | 🟡 LOW | Qualité rédactionnelle |
| 10 | Inline styles extensifs vs convention BEM | products.html — product cards | 🟡 LOW | Code convention |

---

## Problèmes détaillés & corrections suggérées

### 🔴 1 — Contradiction sur l'engagement contractuel

**Localisation :**
- `index.html` ligne ~609 (pied de grille tarifaire) : *"Contrat avec 2 ans d'engagement"*
- `index.html` ligne ~661 (CTA final) : *"Contrat sans engagement"*
- `products.html` FAQ Q3 : *"Non. Tous nos contrats sont sans engagement de durée."*

**Pourquoi c'est critique :** Un prospect qui lit la page dans l'ordre voit d'abord "2 ans d'engagement", puis "sans engagement" deux sections plus bas. C'est une contradiction directe qui sape la confiance et pourrait engager la responsabilité commerciale de Padel Vision si le terme "sans engagement" est retenu contre la pratique réelle.

**Avant :**
> Contrat avec 2 ans d'engagement ◆ Démo gratuite sur votre terrain ◆ Installation < 1j ◆ Offres négociables

**Après (si les contrats sont sans engagement) :**
> Sans engagement de durée ◆ Démo gratuite sur votre terrain ◆ Installation < 1j ◆ Offres négociables

**Après (si un engagement est requis) :**
> Engagement 24 mois ◆ Démo gratuite sur votre terrain ◆ Installation < 1j ◆ Offres négociables
*(et corriger le CTA et la FAQ en conséquence)*

---

### 🔴 2 — Incohérence du taux de précision IA

**Localisation :**
- Hero stats `index.html` : affiche **98%**
- Section HOW IT WORKS `index.html` step II : *"Précision ~90%"*
- Scoreboard `index.html` : `data-count="98"` mais valeur affichée **~90%**
- FAQ `products.html` Q4 : *"Notre IA atteint 98% de précision"*

**Pourquoi c'est critique :** Trois chiffres différents (98%, ~90%, et le bug d'affichage "~90%" alors que le `data-count` dit 98) sur la même page. Un prospect attentif perçoit immédiatement l'incohérence. Légalement, si 98% est le chiffre défendu, l'affichage de ~90% est une sous-déclaration qui peut paraître intentionnelle.

**Décision à prendre :** Choisir un chiffre unique et l'appliquer partout. Si ~90% est la précision du **score automatique** et 98% celle de la **détection de trajectoires**, les distinguer clairement.

**Avant (scoreboard label) :**
> ~90% / précision du modèle IA certifiée

**Après (si 98% est le bon chiffre) :**
> 98% / précision trajectoires & détection de coups

---

### 🔴 3 — "La seule solution" — claim d'exclusivité

**Localisation :** `index.html` hero lead

**Avant :**
> La seule solution qui détecte et affiche le score en 100% automatique.

**Pourquoi c'est risqué :** "La seule solution" est un claim d'exclusivité absolu. S'il existe un concurrent offrant un scoring automatique (même partiel), ce claim peut être contesté commercialement ou légalement.

**Après (version défendable) :**
> La première solution qui détecte et affiche le score en 100% automatique — sans saisie manuelle, sans arbitre.

*(ou : "La solution la plus précise pour…" si l'exclusivité ne peut être démontrée)*

---

### 🟠 4 — Court Préstige : deux produits différents selon la page

**Localisation :** `index.html` vs `products.html`

| Page | Description de Court Préstige |
|------|-------------------------------|
| index.html pricing card | 4 caméras, vidéos highlights, connexion appli joueurs, stats dans le temps |
| products.html detailed card | Multi-sites, API REST, dashboard centralisé, account manager, SLA 99,9% |

**Problème :** Ce sont deux propositions de valeur très différentes. Un prospect qui découvre le produit via la home puis clique sur "Voir les offres" découvre un produit différent de ce qu'il a vu. Le positionnement multi-franchise de products.html est plus précis et convaincant — c'est lui qui devrait être la référence.

**Action :** Aligner les bullet points de la pricing card de l'index sur le positionnement enterprise de products.html.

---

### 🟠 5 — Logo tagline incohérente sur index.html

| Emplacement | Tagline |
|-------------|---------|
| Header (index.html) | *Le terrain intelligent* |
| Footer (index.html) | *Intelligence Artificielle* |
| Header (products.html) | *Intelligence Artificielle* |

**Action :** Choisir une tagline unique. "Le terrain intelligent" est plus évocateur et différenciant pour le B2B padel. "Intelligence Artificielle" est générique. Recommandation : uniformiser sur **"Le terrain intelligent"** partout, ou définir une règle claire (header = tagline produit, footer = tagline corporate).

---

### 🟠 6 — Lien "Comparatif" visible dans le menu mobile, caché dans le desktop

**Localisation :** `index.html` — navigation

Le lien vers `comparatif-cameras-padel.html` est commenté dans la nav desktop mais **pas** dans le menu mobile. Un utilisateur mobile voit donc une page dans le menu qui n'existe pas (ou qui est en construction).

**Action :** Commenter ou décommenter le lien de façon cohérente dans tous les menus. Rappel CLAUDE.md : mettre à jour toutes les pages en même temps.

---

### 🟠 7 — Scoreboard : "200+ clubs satisfaits" — bug d'affichage

**Localisation :** `index.html` scoreboard, stat cell IV

La cellule a `data-count="200" data-suffix="+"` mais affiche **"100%"** en dur avec le label "clubs équipés sont satisfaits". Il s'agit probablement d'un copier-coller du champ précédent. La valeur affichée est incorrecte.

De plus, "100% des clubs équipés sont satisfaits" sans attribution constitue une affirmation testimoniale implicite qui mérite une note de bas de page ou une précision méthodologique.

---

### 🟠 8 — "+35% de revenus" sans qualification sur la card produit

**Localisation :** `products.html` — Club Intelligence card (badge jaune)

Le badge affiche "+35% de revenus" sans contexte. La FAQ le qualifie correctement : *"En moyenne, nos clubs perçoivent +35% de revenus additionnels par terrain dès les premiers mois."*

**Avant :**
> +35% de revenus

**Après :**
> +35% de revenus additionnels en moyenne

---

### 🟡 9 — Typos et erreurs grammaticales

| Localisation | Texte actuel | Correction |
|-------------|-------------|-----------|
| `products.html` — Court Connecté features | "Videos pré découpées par points" | "Vidéos pré-découpées par point" |
| `products.html` — Court Connecté features | "Stats du match (points, smatch...)" | "Stats du match (points, smash…)" |
| `products.html` — Court Connecté features | "Un fait anormale sur le match" | *(clarifier ce que cette feature apporte — le sens est obscur)* |
| `index.html` — Court Connecté pricing card | "Grand écran d'afficage des scores" | "Grand écran d'affichage des scores" |
| `index.html` — Club Intelligence pricing card | "Calcule des scores automatique en temps réel" | "Calcul du score automatique en temps réel" |
| `index.html` — Court Préstige tagline | "Aller plus loin dans l'experience de jeu" | "Aller plus loin dans l'expérience de jeu" |

---

## Flags légaux / compliance

| Claim | Risque | Action recommandée |
|-------|--------|-------------------|
| "La seule solution" | Claim d'exclusivité contestable | Reformuler en "la première solution" ou "la solution la plus précise" |
| "100% des clubs équipés sont satisfaits" | Testimonial implicite non sourcé | Ajouter une note méthodologique ou reformuler |
| "+35% de revenus" (badge sans qualification) | Claim chiffré sans contexte | Ajouter "en moyenne" sur le badge |
| "ROI < 6 mois" | Projection financière non sourcée | Ajouter la mention du calcul (3/5/8 matchs) à proximité immédiate |
| Contradiction engagement contractuel | Risque commercial direct | Unifier le discours sur les conditions |

---

## Sections révisées (top priorités)

### A — Hero lead (index.html)

**Avant :**
> La seule solution qui détecte et affiche le score en 100% automatique. Une caméra par terrain — l'IA analyse trajectoires, vitesses et positions des 4 joueurs en temps réel.

**Après :**
> La première solution à détecter et afficher le score en 100% automatique, sans saisie manuelle. Une caméra par terrain — l'IA analyse trajectoires, vitesses et positions des 4 joueurs en temps réel.

---

### B — Pied de section tarifaire (index.html)

**Avant :**
> Contrat avec 2 ans d'engagement ◆ Démo gratuite sur votre terrain ◆ Installation < 1j ◆ Offres négociables

**Après (contrats sans engagement) :**
> Sans engagement de durée ◆ Démo gratuite sur votre terrain ◆ Installation < 1j ◆ Offres négociables

---

### C — Scoreboard stat IV (index.html)

**Avant :**
> 100% / clubs équipés sont satisfaits

**Après :**
> 200+ / clubs équipés en France & Europe

---

### D — Badge Club Intelligence (products.html)

**Avant :**
> +35% de revenus

**Après :**
> +35% de revenus en moyenne

---

## Ce qui fonctionne bien (à conserver)

- **FAQ (products.html)** — Ton parfait. Direct, honnête, expert. Le style Q/R sans artifices correspond exactement à l'esthéritage Heritage Intelligence.
- **Score automatique section (index.html)** — La proposition de valeur est claire, les features bien articulées, le mockup visuel cohérent avec le ton.
- **Numérotation romaine (I, II, III, IV)** — Bien appliquée dans les steps et le scoreboard. À maintenir.
- **◆ comme ponctuation de section** — Usage cohérent et distinctif sur les deux pages.
- **Police et tokens de couleur** — Aucune violation de la règle "no sans-serif" détectée dans le contenu visible.

---

*Brand Review généré le 27 mars 2026 — Padel Vision AI*
