# Schema Markup Report — Padel Vision AI
**Generated:** 2026-03-27
**Site:** https://padelvisionai.com
**Analyzer:** Claude Code (Schema.org specialist)

---

## Summary

| Page | Schema blocks found | Validation status | Priority fixes |
|------|--------------------|--------------------|----------------|
| index.html | 5 blocks (@graph) | Mostly pass — 3 issues | Product missing `price`, Organization missing `logo` |
| products.html | 2 blocks (@graph) | Mostly pass — 3 issues | Services missing `offers` with pricing |
| contact.html | 2 blocks (@graph) | Pass | Add `LocalBusiness` reference |
| comparatif-cameras-padel.html | 2 blocks (@graph) | Mostly pass — 1 issue | Add `Article` schema |
| alternative-veo-padel.html | 2 blocks (@graph) | Mostly pass — 2 issues | Add `Article` schema; AggregateOffer missing `lowPrice`/`highPrice` |
| mentions-legales.html | 1 block (@graph) | Pass — sparse | Add `WebPage` block |
| politique-de-confidentialite.html | 1 block (@graph) | Pass — sparse | Add `WebPage` block |

---

## Page-by-Page Detection & Validation

---

### 1. index.html

**Format:** JSON-LD in `<script type="application/ld+json">` — correct.

**Blocks detected:**

| # | @type | @id |
|---|-------|-----|
| 1 | Organization | `https://padelvisionai.com/#organization` |
| 2 | WebSite | `https://padelvisionai.com/#website` |
| 3 | SoftwareApplication | (none) |
| 4 | WebPage | `https://padelvisionai.com/#webpage` |
| 5 | Product | `https://padelvisionai.com/#product-camera` |
| 6 | Service | `https://padelvisionai.com/#service` |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| @type valid, not deprecated | PASS | |
| All URLs absolute | PASS | |
| ISO 8601 dates | N/A | No dates present |
| No placeholder text | PASS | |
| Organization — `logo` property | FAIL | Missing; recommended for Knowledge Panel and sitelinks |
| Organization — `sameAs` | WARN | Empty array `[]`; remove or populate with real social profiles |
| Product — `offers.price` | FAIL | `Offer` block has no `price` value; Google requires a price or `priceRange` for Product rich results |
| Product — `offers.priceValidUntil` | WARN | Recommended alongside a concrete price |
| SoftwareApplication — `@id` | WARN | No `@id` makes cross-page referencing impossible |
| Service — `url` | WARN | Missing; recommended for Service entities |
| WebPage — `datePublished` / `dateModified` | WARN | Recommended for freshness signals |
| BreadcrumbList | FAIL | **Missing entirely** from the homepage |

**Issues:**
1. **FAIL — No BreadcrumbList on homepage.** Every page in the graph has one except `index.html`. A single-item breadcrumb (`Accueil`) is valid and expected.
2. **FAIL — `Product.offers` has no `price`.** Without a price value, Google cannot generate a price rich result. Either add explicit pricing or switch to a `priceRange` string.
3. **FAIL — `Organization` has no `logo`.** The `logo` property is a strong signal for Google's Knowledge Panel and brand recognition in SERPs.

---

### 2. products.html

**Format:** JSON-LD — correct.

**Blocks detected:**

| # | @type | Notes |
|---|-------|-------|
| 1 | BreadcrumbList | 2 items |
| 2 | ItemList | 3 Service items (Court Connecté, Club Intelligence, Réseau Premium) |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| BreadcrumbList — positions sequential | PASS | |
| BreadcrumbList — `item` URLs absolute | PASS | |
| ItemList — `numberOfItems` matches `itemListElement` count | PASS | Both = 3 |
| Service items — `offers` with pricing | FAIL | No pricing in any of the 3 Service blocks despite explicit prices in the HTML |
| Service items — `@id` | WARN | No `@id` on inline Service nodes |
| WebPage node | FAIL | Missing; products.html has no WebPage schema |
| Product @type for priced items | WARN | The three offerings have concrete prices; using `Product` with `Offer` (or `Service` with `Offer`) would unlock price rich results |
| `isPartOf` WebSite reference | FAIL | No reference back to `#website` node |
| Product names mismatch with brief | WARN | Brief names products "Court Préstige" but HTML/schema uses "Réseau Premium" — verify canonical name |

**Issues:**
1. **FAIL — No pricing in Service offers.** The page clearly shows 1 900 €/install + 140 €/month, 1 900 €/install + 240 €/month, 2 900 €/install + 380 €/month. These should be reflected in structured data.
2. **FAIL — No WebPage node.** All other pages have one; products.html is inconsistent.
3. **WARN — Product name inconsistency.** The user brief says "Court Préstige" for the third offer at 2 900 €/380 €/month, but both the HTML and the schema use "Réseau Premium". Clarify the canonical product name before publishing schema.

---

### 3. contact.html

**Format:** JSON-LD — correct.

**Blocks detected:**

| # | @type | Notes |
|---|-------|-------|
| 1 | BreadcrumbList | 2 items |
| 2 | ContactPage | Typed WebPage subtype |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| ContactPage — all required properties | PASS | `name`, `url`, `description`, `inLanguage` all present |
| `isPartOf` WebSite reference | PASS | References `#website` |
| `about` Organization reference | PASS | References `#organization` |
| BreadcrumbList positions | PASS | |
| `datePublished` / `dateModified` | WARN | Recommended for WebPage |
| LocalBusiness / Organization contact point | WARN | A `contactPoint` on the Organization node (defined on index.html) would reinforce that this is the contact destination |

**No blocking issues.** Minor recommended additions only.

---

### 4. comparatif-cameras-padel.html

**Format:** JSON-LD — correct.

**Blocks detected:**

| # | @type | Notes |
|---|-------|-------|
| 1 | BreadcrumbList | 2 items |
| 2 | ItemList | 4 SoftwareApplication comparisons |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| ItemList `numberOfItems` = 4, `itemListElement` count = 4 | PASS | |
| Competitor URLs absolute | PASS | veo.co, pixellot.tv, playsight.com all absolute |
| `og:type` = "article" in meta | PASS | Consistent with content type |
| Article / BlogPosting schema | FAIL | The page is editorial content (comparison article). No `Article` schema is present despite `og:type=article` |
| WebPage node | FAIL | Missing |
| PriceSpecification for Padel Vision | WARN | `priceSpecification` has no `price` value, only `priceCurrency` |
| `datePublished` on Article | FAIL | Required for Article rich results |
| `author` on Article | FAIL | Required for Article rich results |
| PlaySight description typo | WARN | "racquis" should be "racheté" (acquired by Sportradar) |

**Issues:**
1. **FAIL — No Article schema.** The page is a 2026 editorial comparison; `Article` (or `BlogPosting`) with `datePublished`, `dateModified`, `author`, and `headline` would make it eligible for article rich results in Google.
2. **FAIL — No WebPage node.**
3. **WARN — Typo** in PlaySight description: "racquis" is not a valid French word; should be "racheté" (acquired).

---

### 5. alternative-veo-padel.html

**Format:** JSON-LD — correct.

**Blocks detected:**

| # | @type | Notes |
|---|-------|-------|
| 1 | BreadcrumbList | 2 items |
| 2 | SoftwareApplication | Padel Vision AI with AggregateOffer |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| `featureList` as array | PASS | Valid |
| `AggregateOffer` — `offerCount` = 3 | PASS | |
| `AggregateOffer` — `lowPrice` | FAIL | Missing; Google requires `lowPrice` when `offerCount` > 1 |
| `AggregateOffer` — `highPrice` | WARN | Recommended alongside `lowPrice` |
| `AggregateOffer` — actual prices | WARN | Description text is used instead of numeric values; not machine-readable |
| Article schema | FAIL | Page is editorial (vs. article); `og:type=article` but no Article JSON-LD |
| WebPage node | FAIL | Missing |
| `datePublished` | FAIL | Required for Article rich results |

**Issues:**
1. **FAIL — `AggregateOffer` missing `lowPrice`.** Google requires this field for AggregateOffer to be valid for product rich results.
2. **FAIL — No Article schema.**
3. **FAIL — No WebPage node.**

---

### 6. mentions-legales.html

**Format:** JSON-LD — correct.

**Blocks detected:**

| # | @type | Notes |
|---|-------|-------|
| 1 | BreadcrumbList | 2 items |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| BreadcrumbList valid | PASS | |
| WebPage node | WARN | Missing; should at minimum have a typed WebPage for consistency |

**No blocking issues.** Add a WebPage node for completeness.

---

### 7. politique-de-confidentialite.html

**Format:** JSON-LD — correct.

**Blocks detected:**

| # | @type | Notes |
|---|-------|-------|
| 1 | BreadcrumbList | 2 items |

**Validation results:**

| Check | Result | Notes |
|-------|--------|-------|
| @context = "https://schema.org" | PASS | |
| BreadcrumbList valid | PASS | |
| WebPage node | WARN | Missing |

Same as mentions-legales: no blocking issues, add WebPage for consistency.

---

## Cross-Site Issues

| Issue | Affected pages | Severity |
|-------|----------------|----------|
| Organization `logo` never defined anywhere | index.html | HIGH |
| `WebSite` node only on index.html; other pages reference `#website` without defining it on the same page — acceptable but note dependency | all except index.html | INFO |
| No `siteNavigationElement` or `SiteLinksSearchBox` | index.html | LOW |
| `contactPoint` never added to Organization | index.html | MEDIUM |
| Article schema completely absent on 2 editorial pages | comparatif, alternative-veo | HIGH |
| Product name "Court Préstige" (brief) vs. "Réseau Premium" (HTML/schema) inconsistency | products.html, index.html | MEDIUM |

---

## Missing Schema Opportunities

| Page | Opportunity | Rationale |
|------|-------------|-----------|
| index.html | `Organization.logo` | Knowledge Panel eligibility |
| index.html | `Organization.contactPoint` | Enables phone/email rich results |
| index.html | `BreadcrumbList` (single item) | Consistency with rest of site |
| index.html | `WebSite.potentialAction` (SearchAction) | Sitelinks searchbox |
| products.html | `Product` or `Service` with `Offer` pricing | Price rich results |
| products.html | `WebPage` node | Consistency |
| comparatif-cameras-padel.html | `Article` with author + dates | Article rich result eligibility |
| comparatif-cameras-padel.html | `WebPage` node | Consistency |
| alternative-veo-padel.html | `Article` with author + dates | Article rich result eligibility |
| alternative-veo-padel.html | `WebPage` node | Consistency |
| mentions-legales.html | `WebPage` node | Consistency |
| politique-de-confidentialite.html | `WebPage` node | Consistency |

---

## What Was NOT Recommended (and Why)

- **HowTo**: Rich results removed by Google September 2023.
- **FAQ**: Restricted to government and healthcare authority sites since August 2023. Not applicable here even though the products page appears to contain an FAQ section.
- **SpecialAnnouncement**: Deprecated July 31, 2025.
- **CourseInfo / LearningVideo**: Retired June 2025.

---

## Generated Schema

See `generated-schema.json` for all corrected and new JSON-LD blocks, organized by page.
Each block is production-ready and can be dropped into the corresponding HTML `<head>` as a `<script type="application/ld+json">` tag.
