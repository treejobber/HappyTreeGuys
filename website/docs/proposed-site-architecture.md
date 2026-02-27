# Happy Tree Guys — Proposed Site Architecture
## Engineered for Local Search Dominance in the Phoenix Metro Tree Service Market

---

## WHY THIS STRUCTURE EXISTS

Google's local ranking algorithm weighs three primary signals: **relevance**, **proximity**, and **prominence**. A tree service company competing across multiple cities in the Phoenix metro needs a site architecture that maximizes all three — delivering city-specific relevance at the page level, building topical authority through internal linking, and sending the right entity signals through structured data.

This architecture is designed to:
- Rank for high-intent service keywords in every target city
- Build topical authority that compounds across the entire site
- Convert visitors with localized trust signals and clear CTAs
- Scale cleanly as new services or service areas are added

---

## COMPLETE URL STRUCTURE

```
happytreeguys.com/
│
├── /                                        HOMEPAGE
│
├── /services/                               SERVICE HUB
│   ├── /tree-trimming/
│   ├── /tree-removal/
│   ├── /stump-grinding/
│   ├── /yard-clean-up/
│   ├── /saguaro-removal/
│   ├── /air-spading/
│   └── /soil-injections/
│
├── /locations/                              LOCATION HUB
│   ├── /scottsdale/                         CITY HUB
│   │   ├── /tree-trimming/                  SERVICE+CITY COMBO
│   │   ├── /tree-removal/
│   │   ├── /stump-grinding/
│   │   └── /saguaro-removal/
│   │
│   ├── /paradise-valley/
│   │   ├── /tree-trimming/
│   │   ├── /tree-removal/
│   │   └── /saguaro-removal/
│   │
│   ├── /phoenix/
│   │   ├── /tree-trimming/
│   │   ├── /tree-removal/
│   │   └── /stump-grinding/
│   │
│   ├── /north-phoenix/
│   │   ├── /tree-trimming/
│   │   └── /tree-removal/
│   │
│   ├── /cave-creek/
│   │   ├── /tree-trimming/
│   │   └── /tree-removal/
│   │
│   ├── /fountain-hills/
│   │   ├── /tree-trimming/
│   │   └── /tree-removal/
│   │
│   ├── /carefree/
│   │   └── /tree-trimming/
│   │
│   ├── /rio-verde/
│   │   └── /tree-trimming/
│   │
│   ├── /new-river/
│   │   └── /tree-trimming/
│   │
│   ├── /troon/
│   │   └── /tree-trimming/
│   │
│   ├── /desert-ridge/
│   │   └── /tree-trimming/
│   │
│   └── /mcdowell-mountain/
│       └── /tree-trimming/
│
├── /trees/                                  TREE SPECIES HUB
│   ├── /blue-palo-verde/
│   ├── /desert-ironwood/
│   ├── /chilean-mesquite/
│   └── ... (67 species pages)
│
├── /blog/                                   BLOG HUB
│   ├── /how-to-prune-a-palo-verde-tree/
│   ├── /tree-trimming-scottsdale-everything-you-need-to-know/
│   └── ... (all posts)
│
├── /about/
├── /contact/
├── /reviews/
├── /before-after/
├── /get-a-quote/
│
├── /privacy-policy/
├── /terms-of-use/
└── /cookie-policy/
```

---

## THE THREE-TIER PAGE STRATEGY

This architecture uses a hub-and-spoke model organized into three tiers. Each tier serves a distinct purpose in the ranking strategy.

### TIER 1 — Hub Pages (Authority Builders)

**Pages**: `/services/`, `/locations/`, `/trees/`, `/blog/`

These are the structural backbone of the site. They exist to:
- Consolidate internal link equity from all child pages beneath them
- Provide Google with a clear content hierarchy signal
- Give users a navigational entry point into each content silo
- Target broad head terms ("tree services scottsdale az", "arizona trees")

**Why this matters**: Google uses hub pages to understand what a site is *about* at the topical level. A `/services/` page that links down to 7 service pages, each of which links to 5-12 city-specific variants, tells Google "this site covers tree services comprehensively." That topical completeness is a ranking factor.

### TIER 2 — Pillar Pages (Keyword Targets)

**Pages**: `/services/tree-trimming/`, `/locations/scottsdale/`, individual tree species pages, blog posts

These are the primary ranking pages. Each one targets a specific keyword cluster:
- Service pages target `{service} arizona` / `{service} near me`
- City hub pages target `tree service {city}` / `arborist {city}`
- Tree species pages target `{species} arizona` / `{species} care guide`
- Blog posts target long-tail informational queries

**Why this matters**: These pages carry the most content depth and are where most organic traffic will land. They need to be individually optimized for their target keyword cluster while linking both up (to their hub) and down (to combo pages or related content).

### TIER 3 — Combo Pages (Local Intent Dominators)

**Pages**: `/locations/scottsdale/tree-trimming/`, `/locations/paradise-valley/saguaro-removal/`, etc.

These are the most valuable pages in the entire architecture. They target the exact queries that homeowners type when they're ready to hire:
- "tree trimming scottsdale"
- "tree removal paradise valley"
- "stump grinding phoenix"

**Why this matters**: These queries have the highest commercial intent. A dedicated page for "tree trimming scottsdale" will outrank a generic "tree trimming" page every time because Google matches page-level relevance to the query. The current site has zero of these pages — adding them is the single biggest ranking opportunity.

---

## INTERNAL LINKING ARCHITECTURE

Internal linking is not decoration. It is the mechanism through which Google distributes PageRank and understands topical relationships. This architecture uses a deliberate linking strategy at every level.

### Link Flow Pattern

```
HOMEPAGE
  ↓ links to
SERVICE HUB ←→ LOCATION HUB
  ↓                ↓
SERVICE PAGES ←→ CITY HUBS
  ↓                ↓
  └──→ SERVICE+CITY COMBOS ←──┘
           ↑
      BLOG POSTS & TREE PAGES
      (contextual links)
```

### Specific Linking Rules

**Homepage** links to:
- All Tier 1 hub pages in the main navigation
- Top 3 services directly (tree trimming, tree removal, saguaro removal)
- Top 3 cities directly (Scottsdale, Paradise Valley, Phoenix)
- Latest blog posts

**Service pages** (`/services/tree-trimming/`) link to:
- Parent hub (`/services/`)
- Every city variant of that service (`/locations/scottsdale/tree-trimming/`, etc.)
- Related services (tree trimming → tree removal, stump grinding)
- Relevant tree species pages (tree trimming → palo verde, mesquite, fan palm)

**City hub pages** (`/locations/scottsdale/`) link to:
- Parent hub (`/locations/`)
- Every service combo page under that city
- Adjacent city pages ("Also serving nearby Paradise Valley, Cave Creek, Troon")
- City-specific blog posts and before/after projects

**Service+City combo pages** (`/locations/scottsdale/tree-trimming/`) link to:
- Parent city hub (`/locations/scottsdale/`)
- Parent service page (`/services/tree-trimming/`)
- Same service in adjacent cities ("Tree trimming in nearby Paradise Valley")
- Other services in same city ("Also in Scottsdale: tree removal, stump grinding")
- Relevant blog content

**Blog posts** link to:
- The service page they discuss
- The city they reference
- Relevant tree species pages
- The service+city combo page when applicable

**Tree species pages** link to:
- Tree species hub (`/trees/`)
- Relevant service pages (palm trees → tree trimming, diseased trees → tree removal)
- Blog posts about that species

### Why This Linking Model Works

This creates **content silos** — closed loops of topically related pages that pass authority to each other. Google's algorithms interpret these silos as signals of subject-matter depth. A service+city page that receives links from its parent service page, its parent city page, relevant blog posts, AND relevant species pages has five times more topical authority than an orphan page.

The cross-linking between silos (service ↔ location) is equally important. It tells Google these aren't separate topics — they're facets of the same business entity serving the same market.

---

## ON-PAGE OPTIMIZATION REQUIREMENTS

### Every Page Must Have

1. **Unique title tag** (under 60 characters) with primary keyword front-loaded
   - Service page: `Tree Trimming Services | Happy Tree Guys`
   - City page: `Tree Service in Scottsdale, AZ | Happy Tree Guys`
   - Combo page: `Tree Trimming Scottsdale, AZ | Happy Tree Guys`

2. **Unique meta description** (under 155 characters) with CTA and phone number
   - "Professional tree trimming in Scottsdale, AZ. ISA-certified arborists. Free estimates. Call 602-786-7536."

3. **Single H1** matching the page's primary keyword target

4. **Structured heading hierarchy** (H1 → H2 → H3, no skipped levels)

5. **Internal links** following the linking rules above — minimum 3 internal links per page

6. **CTA above the fold** on every page (phone number + estimate request)

7. **Mobile-first layout** — Google uses mobile-first indexing; the mobile experience IS the ranking experience

### Service Pages Need

- Clear service description (what, why, how)
- Arizona/desert-specific context (species served, climate considerations)
- Before/after photo carousel for that service
- FAQ section targeting long-tail queries (featured snippet opportunities)
- "Where We Offer This Service" section linking to all city combo pages
- Trust signals: years of experience, ISA certification, insurance/licensing
- Embedded Google reviews filtered to that service type

### City Hub Pages Need

- City-specific opening paragraph referencing neighborhoods, landmarks, and communities
- "Services Available in {City}" section linking to every combo page
- Local project showcase (before/after work done in that city specifically)
- City-specific testimonials from residents
- Mention of nearby cities served ("Also serving nearby...")
- Embedded Google Map centered on that city's service area
- City-specific FAQ ("How much does tree trimming cost in Scottsdale?" etc.)

### Service+City Combo Pages Need

- Unique opening content about that service in that specific city
- City-specific pricing context or factors
- Neighborhood-level mentions (e.g., "Serving DC Ranch, Troon North, Grayhawk, and all Scottsdale communities")
- Before/after photos from projects in that city
- At least one testimonial from that city
- FAQ specific to that service+city combination
- Links up to both parent pages (service and city)
- Links sideways to same service in adjacent cities

---

## STRUCTURED DATA (JSON-LD SCHEMA)

Structured data tells Google exactly what entity your site represents and what services you offer where. This is not optional — it directly impacts rich result eligibility and entity understanding.

### Homepage — LocalBusiness + Organization

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Happy Tree Guys",
  "description": "Professional tree trimming, removal, and arborist services in Scottsdale, Paradise Valley, and the greater Phoenix metro.",
  "url": "https://www.happytreeguys.com",
  "telephone": "+1-602-786-7536",
  "email": "scott@happytreeguys.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Scottsdale",
    "addressRegion": "AZ",
    "postalCode": "85255",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.7290",
    "longitude": "-111.9258"
  },
  "areaServed": [
    { "@type": "City", "name": "Scottsdale", "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona" },
    { "@type": "City", "name": "Paradise Valley", "sameAs": "https://en.wikipedia.org/wiki/Paradise_Valley,_Arizona" },
    { "@type": "City", "name": "Phoenix", "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona" },
    { "@type": "City", "name": "Cave Creek" },
    { "@type": "City", "name": "Fountain Hills" },
    { "@type": "City", "name": "Carefree" },
    { "@type": "City", "name": "Rio Verde" },
    { "@type": "City", "name": "New River" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "image": "https://www.happytreeguys.com/images/happy-tree-guys-og.jpg",
  "sameAs": [
    "https://www.facebook.com/happytreeguys",
    "https://www.instagram.com/happytreeguys",
    "https://www.google.com/maps/place/Happy+Tree+Guys"
  ]
}
```

### Service Pages — Service Schema

Each service page gets its own Service schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tree Trimming",
  "description": "Professional tree trimming and pruning services for residential and commercial properties in the Phoenix metro area.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Happy Tree Guys",
    "telephone": "+1-602-786-7536"
  },
  "areaServed": [
    { "@type": "City", "name": "Scottsdale" },
    { "@type": "City", "name": "Paradise Valley" },
    { "@type": "City", "name": "Phoenix" }
  ],
  "serviceType": "Tree Trimming"
}
```

### FAQ Pages — FAQPage Schema

Every page with an FAQ section gets FAQPage schema. This is how you win featured snippets:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does tree trimming cost in Scottsdale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tree trimming in Scottsdale typically ranges from $250 to $1,500 depending on tree size, species, and accessibility..."
      }
    }
  ]
}
```

### Review Pages — AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Happy Tree Guys",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5"
  }
}
```

### Blog Posts — Article Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Prune a Palo Verde Tree: A Comprehensive Guide",
  "author": {
    "@type": "Person",
    "name": "Roy Spalding",
    "jobTitle": "Lead Arborist"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Happy Tree Guys"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-02-27"
}
```

---

## TECHNICAL SEO REQUIREMENTS

### Core Web Vitals

Google uses page experience as a ranking signal. Every page must hit these thresholds:

| Metric | Target | How |
|--------|--------|-----|
| LCP (Largest Contentful Paint) | < 2.5s | Optimized images (WebP/AVIF), preloaded hero, minimal render-blocking CSS |
| INP (Interaction to Next Paint) | < 200ms | Minimal JS, no heavy frameworks, passive event listeners |
| CLS (Cumulative Layout Shift) | < 0.1 | Explicit image dimensions, font-display: swap, reserved space for dynamic content |

### Image Optimization

- All images in WebP format with AVIF fallback for supported browsers
- Explicit `width` and `height` attributes on every `<img>` tag
- Lazy loading (`loading="lazy"`) on all below-fold images
- Descriptive alt text with natural keyword inclusion (not stuffing)
- Before/after images should use descriptive filenames: `tree-trimming-scottsdale-before.webp`

### Crawl Efficiency

- **XML Sitemap** at `/sitemap.xml` listing every indexable page, organized by section
- **Robots.txt** allowing all public pages, blocking `/admin/`, `/login/`, `/thankyou/`
- **Canonical tags** on every page pointing to the definitive URL (prevents duplicate content)
- **Trailing slash consistency** — pick one pattern (with trailing slash) and enforce it via redirects
- **Clean URL structure** — no query parameters, no session IDs, no unnecessary path segments

### HTTPS and Security

- All pages served over HTTPS (ranking signal since 2014)
- HSTS header enabled
- Mixed content eliminated (no HTTP resources loaded on HTTPS pages)

### Mobile Experience

- Responsive design that works on all viewports
- Tap targets minimum 48x48px with 8px spacing
- No horizontal scrolling
- Click-to-call phone numbers on all mobile pages
- Sticky mobile CTA bar for estimate requests

---

## CONTENT DIFFERENTIATION STRATEGY

The biggest risk with service+city pages is thin/duplicate content. Google will penalize pages that are the same content with the city name swapped. Every page must have genuinely unique, valuable content.

### What Makes Each City Page Unique

| City | Differentiator | Content Angle |
|------|---------------|---------------|
| Scottsdale | Luxury estates, HOA requirements, large mature trees | Premium service positioning, HOA compliance, estate-scale projects |
| Paradise Valley | Ultra-high-end properties, custom landscapes, privacy hedges | White-glove service, landscape preservation, architect coordination |
| Phoenix | Urban lots, commercial properties, storm damage | Volume pricing, emergency response, commercial contracts |
| North Phoenix | Master-planned communities, newer construction, uniform landscaping | Community-scale maintenance, new tree establishment, desert adaptation |
| Cave Creek | Desert-native landscapes, saguaro protection, wildfire risk | Native species expertise, fire mitigation, desert conservation |
| Fountain Hills | Mountain views, wind exposure, desert terrain | Wind-resistant pruning, erosion-related root issues, scenic view maintenance |
| Carefree | Architectural desert homes, minimal intervention landscapes | Minimalist approach, architectural tree shaping, desert harmony |
| Rio Verde | Retirement community, golf course adjacent, low-maintenance needs | Seasonal maintenance programs, accessibility considerations |
| Troon | North Scottsdale luxury, Troon North golf corridor | Premium positioning, golf-adjacent properties, community-specific rules |
| Desert Ridge | Master-planned, uniform streetscape, HOA-managed common areas | HOA partnerships, streetscape maintenance, community standards |
| McDowell Mountain | Preserve-adjacent, native habitat, environmental sensitivity | Eco-conscious practices, preserve buffer compliance, native habitat protection |
| New River | Rural properties, large acreage, horse properties | Large-scale clearing, acreage pricing, agricultural/equestrian focus |

### Content Templates (Not Copy-Paste)

Each service+city combo page should follow the same structural template but with genuinely different content:

1. **Hero**: "{Service} in {City}, AZ" with a before/after image from an actual project in that city
2. **Intro paragraph**: Written specifically about why this service matters in this city (reference neighborhoods, common tree types, local challenges)
3. **Service details**: Same core service info but with city-specific application (e.g., "In Paradise Valley, tree trimming often involves maintaining privacy screens of mature ficus and oleander that line estate boundaries")
4. **Local projects**: Before/after carousel from actual work in that city
5. **Testimonial**: From a customer in that city
6. **Pricing context**: City-specific factors that affect pricing
7. **FAQ**: Questions specific to that city+service combination
8. **CTA**: "Get Your Free {City} Tree Trimming Estimate"

---

## GOOGLE BUSINESS PROFILE ALIGNMENT

The site architecture must align with your Google Business Profile (GBP) to maximize local pack rankings.

### GBP Optimization Checklist

- Primary category: "Tree Service"
- Secondary categories: "Arborist", "Stump Removal Service", "Landscaper"
- Service area: List every city that has a dedicated page on the site
- Services listed: Match exactly the service pages on the site
- Website URL: Points to homepage
- Each GBP service links to its corresponding service page
- Posts published regularly linking to new blog content or seasonal service pages
- Photos uploaded regularly tagged to specific cities when possible
- Q&A section maintained with answers linking to relevant site pages

### NAP Consistency

Name, Address, Phone must be identical across:
- The website (every page footer, contact page, schema markup)
- Google Business Profile
- All citation sites (Yelp, BBB, Angi, HomeAdvisor, etc.)
- Social media profiles

Any inconsistency weakens entity confidence and hurts local pack rankings.

---

## CONTENT VELOCITY AND FRESHNESS

Google rewards sites that demonstrate ongoing expertise. The blog and tree species sections serve this purpose.

### Blog Strategy

Publish 2-4 posts per month targeting:
- **Seasonal queries**: "when to trim trees in arizona" (searches spike in spring/fall)
- **Species-specific guides**: Link to tree species pages for authority building
- **City-specific content**: "monsoon tree damage in scottsdale" — links to city pages
- **Emergency/news content**: Storm aftermath, pest outbreaks — timely topical authority

### Tree Species Pages

These 67 pages are an enormous authority asset. They signal to Google that this site has deep arboricultural expertise. Optimize them by:
- Adding "Common in {City}" sections that link to relevant city pages
- Including "Care services we provide for {species}" sections linking to service pages
- Publishing seasonal care updates as blog posts that link back to species pages

---

## PAGE COUNT SUMMARY

| Page Type | Count | Primary Keyword Target |
|-----------|-------|----------------------|
| Homepage | 1 | tree service scottsdale, happy tree guys |
| Service hub | 1 | tree services arizona |
| Service pages | 7 | {service} arizona, {service} near me |
| Location hub | 1 | tree service areas phoenix metro |
| City hub pages | 12 | tree service {city} |
| Service+City combos | 22+ | {service} {city} |
| Tree species hub | 1 | arizona trees, trees in arizona |
| Tree species pages | 67 | {species} arizona, {species} care |
| Blog hub | 1 | happy tree guys blog |
| Blog posts | 7+ (growing) | long-tail informational queries |
| Core pages (about, contact, reviews, etc.) | 6 | brand + trust queries |
| Legal pages | 3 | — |
| **TOTAL** | **~129+** | |

---

## WHY THIS IS THE RIGHT ARCHITECTURE

1. **It matches how people search.** "Tree trimming scottsdale" gets a dedicated page. "Tree removal paradise valley" gets a dedicated page. Every high-intent local query has a page built specifically to rank for it.

2. **It builds compounding authority.** The hub-and-spoke internal linking means every new page strengthens every existing page. Adding a blog post about mesquite trimming in Scottsdale boosts the Scottsdale city page, the tree trimming service page, the mesquite species page, AND the service+city combo page — all through contextual internal links.

3. **It scales without breaking.** Adding a new city is one city hub page plus combo pages. Adding a new service is one service page plus combo pages. The architecture doesn't need restructuring to grow.

4. **It differentiates from competitors.** Most tree service sites in the Phoenix market have 10-20 pages with generic content. This architecture will have 129+ pages of locally-relevant, topically-deep content. That volume of quality content is extremely difficult for competitors to replicate quickly.

5. **It serves every stage of the funnel.** Tree species pages capture people researching their trees. Blog posts capture people learning about tree care. Service pages capture people comparing providers. City+service pages capture people ready to hire. The site meets users wherever they are in the buying journey.

6. **It sends clear entity signals.** The structured data, NAP consistency, and content organization all reinforce to Google that Happy Tree Guys is a real, established tree service business serving specific cities in the Phoenix metro area. Entity confidence is the foundation of local rankings.
