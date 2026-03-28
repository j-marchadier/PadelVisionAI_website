# Padel Vision AI — Prompt de Direction Artistique
## Basé sur l'observation visuelle du site

---

## CONTEXTE

Tu vas créer [INDIQUER LA TÂCHE] pour **Padel Vision AI**, une startup B2B française qui commercialise des systèmes d'analyse vidéo par IA pour les clubs de padel.

Le style visuel est **"Old Money" / "Quiet Luxury"** : sobre, patrimonial, sans ostentation. L'esthétique évoque une brochure d'adhésion à un club de sport britannique haut de gamme des années 1970, imprimée sur du papier ivoire de qualité — avec, superposés, des données de précision affichées en monospace comme sur un terminal Bloomberg.

---

## 1. PALETTE DE COULEURS

### Règle générale
Aucun blanc pur. Aucun noir pur. Aucun bleu vif, rouge vif ou couleur saturée. La palette entière respire le chaud, le patiné, le discret.

### Couleurs à utiliser

**Verts profonds (couleur signature)**
- Vert bouteille profond : `#1B3C2D` — la couleur principale, fond des sections premium
- Vert très sombre, presque noir : `#0F2218` — fond des sections les plus sombres
- Vert sombre intermédiaire : `#336659` — hover, variation

**Crème / Parchemin (fond général)**
- Ivoire chaud principal : `#FAF5EC` — fond de la majorité des pages
- Parchemin légèrement plus sombre : `#F0E8D6` — sections alternées
- Parchemin plus marqué : `#E8DECA` et `#DDD4C0` — nuances supplémentaires

**Or ancien / Laiton patiné (accent)**
- Or sombre, mat : `#8C6420` — teinte la plus profonde, pour les labels
- Or moyen : `#B08030` — accent principal, boutons CTA
- Or clair : `#C8A050` — chiffres clés, éléments en valeur
- Or pâle : `#E8C878` — éclats subtils

**Tons secondaires "Old Money"**
- Olive vert-brun : `#4A5A2C`
- Anthracite chaud : `#3D3A35`
- Taupe : `#9C8B75`
- Camel / chamois : `#B8956A` — utilisé pour la barre gauche des textes d'accroche

**Texte**
- Texte principal (sur parchemin) : `#2A2018` — brun très sombre, jamais noir pur
- Texte secondaire : `#3D3020`
- Texte tertiaire : `#4A3F30` et `#6B5E4A`
- Texte sur fond vert : `rgba(240,232,214,0.92)` — parchemin translucide
- Texte secondaire sur fond vert : `rgba(240,232,214,0.65)`

### Logique des fonds de section
- Section standard : ivoire `#FAF5EC`
- Section alternative : parchemin plus sombre `#E8DECA`
- Section premium / CTA fort : vert bouteille `#1B3C2D`
- Section la plus sombre : vert nuit `#0F2218`

---

## 2. TYPOGRAPHIE

**Règle absolue : uniquement des polices serif et monospace. Zéro sans-serif.**

| Usage | Police | Caractéristiques visuelles |
|-------|--------|---------------------------|
| Titres H1 / H2 / H3 | **Playfair Display** | Grand, fort contraste fins/épais, élégant, weight 700 |
| Textes d'accroche / citations | **Cormorant Garamond** | Très fin (weight 300), haut de gamme, presque fragile |
| Corps de texte courant | **EB Garamond** | Académique, lisible, littéraire |
| Étiquettes / données / labels | **Courier Prime** | Monospace, esprit machine à écrire / terminal |

### Comportement typographique
- Tous les **labels et étiquettes** : majuscules + espacement des lettres large (`letter-spacing: 0.15em` à `0.25em`)
- Les **titres** : légèrement espacés (`letter-spacing: 0.01–0.03em`), interligne serré (`line-height: 1.05–1.12`)
- Les **textes d'accroche** : fins, aérés, interligne généreux (`line-height: 1.6–1.7`)
- Taille corps de texte : `~17px`

---

## 3. PRINCIPES VISUELS CLÉS

### Angles & Formes
- **Zéro arrondi** (`border-radius: 0`) sur tous les éléments : boutons, cartes, badges, champs — tout est angulaire, architecturé
- Les visuels "écran / terminal" (mockups de scores, widgets data) sont aussi des rectangles droits

### Bordures & Séparateurs
- Bordures fines **1px**, toujours teintées or transparent : `1px solid rgba(140,100,32,0.20–0.25)` sur fond clair
- Sur fond vert sombre : `1px solid rgba(240,232,214,0.08–0.12)`
- **Cadre décoratif inséré** dans les grandes sections plein-écran : un simple filet 1px or légèrement à l'intérieur du bord de la section (effet "encadrement de tableau")
- Séparateurs horizontaux : très fins, discrets

### Espacement
- Marges internes très généreuses — beaucoup d'air, jamais compact
- Les sections ont une hauteur importante, le contenu n'est jamais à l'étroit

### Boutons / CTAs
- **Bouton principal** : fond or moyen `#B08030`, texte vert nuit, coins droits, Courier Prime uppercase
- **Bouton secondaire** : transparent + bordure 1px, texte adapté au fond, coins droits
- Hover : simple changement de teinte, pas d'animation complexe

### Éléments graphiques récurrents
- **◆** (losange plein) : séparateur et puce de liste — en or, petit, discret
- **→** : dans les boutons et liens d'action
- **Chiffres romains** pour toute numérotation d'étapes ou de produits (I, II, III…)
- **Barre verticale gauche** : filet camel `#B8956A` à gauche des textes d'accroche (effet citation)
- **Coin triangle or** sur les cartes non-featured : triangle coupé en coin supérieur droit, couleur or à 18% d'opacité
- **Étiquette "LE PLUS POPULAIRE"** : Courier Prime uppercase, fond or `#B08030`, texte vert nuit, flottant au-dessus de la carte

---

## 4. AMBIANCE GÉNÉRALE

Imagine une **brochure de club de tennis privé britannique des années 1970**, imprimée sur du papier ivoire légèrement teinté de jaune. Les titres sont en Caslon ou Bodoni, les colonnes de chiffres en Courier. Les couleurs sont vertes, crème et or patiné — pas de flashy, pas de moderne.

Sur cette brochure, quelqu'un a superposé **des données live** affichées en Courier : scores, vitesses, statistiques — comme si un terminal de salle des marchés avait été greffé sur un carnet de score de Wimbledon.

C'est cette **tension** entre la tradition typographique classique et la froideur précise des données monospace qui donne son caractère au projet.

**Ambiance en 5 mots** : Feutré. Précis. Patrimonial. Discret. Technique.

---

## 5. CE QU'IL NE FAUT ABSOLUMENT PAS FAIRE

- ❌ Emojis — aucun, jamais
- ❌ Coins arrondis — même sur des petits éléments
- ❌ Polices sans-serif (pas d'Arial, Inter, Helvetica, Poppins…)
- ❌ Blanc pur `#FFFFFF` ou noir pur `#000000`
- ❌ Bleu, rouge vif, vert fluorescent ou toute couleur saturée
- ❌ Dégradés synthétiques ou lumineux
- ❌ Ombres portées prononcées (si shadow, toujours très subtil et chaud)
- ❌ Icônes plates modernes de type Material Design ou Heroicons
- ❌ Texte trop petit sans espacement (les labels compensent leur petite taille par le letter-spacing)
- ❌ Superlatifs creux ou ton enthousiaste dans le copy

---

## 6. ÉLÉMENTS "OLD MONEY" SPÉCIFIQUES À RESPECTER

- Les **sections sombres** (fond vert bouteille) ne sont pas inquiétantes — elles évoquent le cuir d'un fauteuil de club anglais. Le texte parchemin translucide dessus est chaleureux.
- Les **mockups de données** (scores, tableaux, flux d'événements) s'affichent en Courier Prime sur fond vert très sombre, avec texte parchemin translucide — comme un vieux terminal dans une pièce lambrissée.
- Les **cartes de prix** ont un léger dégradé subtil du parchemin clair vers un parchemin légèrement ambrée — pas un dégradé design moderne, mais l'effet d'un papier légèrement chauffé.
- Les **grandes statistiques** (chiffres clés) s'affichent en Playfair Display grand format, couleur or clair `#C8A050`, sur fond vert nuit — comme des scores gravés dans un tableau d'honneur.

---

## 7. INSTRUCTION FINALE

Crée [INDIQUER LA TÂCHE] en respectant strictement l'esthétique décrite ci-dessus.

Rappel rapide :
- Fond ivoire chaud, vert bouteille pour les sections premium
- Accent or ancien / laiton patiné — jamais jaune vif
- Playfair (titres) + Cormorant (accroche) + EB Garamond (corps) + Courier Prime (labels/data)
- Zéro arrondi, zéro sans-serif, zéro emoji
- Bordures 1px or très discrètes
- Espacement généreux, atmosphère feutrée
- Les données s'affichent en monospace, comme sur un terminal

---

*Padel Vision AI — Direction Artistique visuelle — Mars 2026*
