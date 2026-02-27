# Happy Tree Guys — Site Structure & Redirect Map
## Current Site → New Site Architecture
### February 27, 2026

---

## TABLE OF CONTENTS

1. [Current Site Structure Summary](#1-current-site-structure-summary)
2. [New Site Architecture](#2-new-site-architecture)
3. [Full Redirect Map](#3-full-redirect-map)
4. [New Pages (No Redirect Source)](#4-new-pages-no-redirect-source)
5. [Implementation Notes](#5-implementation-notes)

---

## 1. CURRENT SITE STRUCTURE SUMMARY

The existing site at www.happytreeguys.com has **107 unique pages** across 6 content types:

| Category | Count | Current Pattern | Notes |
|----------|-------|-----------------|-------|
| Core / Top-Level | 15 | Various root paths | Includes duplicates for tree-trimming and saguaro |
| Service Pages | 7 | `/services/{slug}` | Standard service template |
| Location Pages | 10 | `/locations/{city}-az` | Inconsistent: Desert Ridge uses different pattern |
| Community Pages | 1 | `/communities/{name}` | Only Mirabel exists |
| Blog Posts | 7 | `/blog/{slug}` | All Scottsdale/PV focused |
| Tree Species | 67 | `/trees/{species}` | SEO informational pages |

### Known Issues in Current Structure
- **Duplicate content**: `/tree-trimming` AND `/services/tree-trimming` (two pages for same service)
- **Duplicate content**: `/saguaro-cactus-removal` AND `/services/saguaro-removal` (two pages, different slugs)
- **Possible duplicate**: `/trees/museum-palo-verde` AND `/trees/desert-museum-palo-verde`
- **Inconsistent URL pattern**: `/locations/desert-ridge-tree-service` doesn't match `{city}-az` pattern
- **Incomplete section**: Only 1 community page exists (Mirabel)
- **No service+city combo pages**: Missing granular pages like `/tree-trimming-scottsdale/`
- **No structured interlinking**: Location pages don't link to service-specific city content

---

## 2. NEW SITE ARCHITECTURE

### URL Hierarchy

```
/                                          ← Homepage
│
├── /services/                             ← Service hub
│   ├── /tree-trimming/                    ← Service detail
│   ├── /tree-removal/
│   ├── /stump-grinding/                   ← Renamed from stump-removal
│   ├── /yard-clean-up/
│   ├── /saguaro-removal/
│   ├── /air-spading/
│   └── /soil-injections/
│
├── /locations/                            ← Location hub
│   ├── /scottsdale/                       ← City hub (drops "-az" suffix)
│   │   ├── /tree-trimming/                ← Service+city combo
│   │   ├── /tree-removal/
│   │   ├── /stump-grinding/
│   │   ├── /saguaro-removal/
│   │   └── ...
│   ├── /paradise-valley/
│   │   ├── /tree-trimming/
│   │   └── ...
│   ├── /phoenix/
│   ├── /north-phoenix/                    ← NEW city (was missing)
│   ├── /cave-creek/
│   ├── /fountain-hills/
│   ├── /carefree/
│   ├── /rio-verde/
│   ├── /new-river/
│   ├── /troon/
│   ├── /desert-ridge/
│   └── /mcdowell-mountain/               ← NEW city
│
├── /about/                                ← Renamed from /about-us
├── /contact/                              ← Renamed from /contact-us
├── /reviews/                              ← Renamed from /5-star-reviews
├── /before-after/                         ← Kept as-is
├── /get-a-quote/                          ← Kept as-is
│
├── /trees/                                ← Tree species hub (kept as-is)
│   ├── /arizona-ash/
│   ├── /blue-palo-verde/
│   └── ... (all 67 species)
│
├── /blog/                                 ← Blog hub
│   ├── /how-to-prune-a-palo-verde-tree/
│   └── ... (all posts)
│
├── /privacy-policy/
├── /terms-of-use/
└── /cookie-policy/
```

### Key Changes from Current Structure

1. **Cleaner city slugs**: `/locations/scottsdale/` instead of `/locations/scottsdale-az`
2. **Service+City combo pages** (NEW): `/locations/scottsdale/tree-trimming/` — the biggest SEO gain
3. **Consolidated duplicates**: Root-level `/tree-trimming` and `/saguaro-cactus-removal` redirect to service pages
4. **Shorter, cleaner paths**: `/about/` not `/about-us`, `/contact/` not `/contact-us`, `/reviews/` not `/5-star-reviews`
5. **Community pages absorbed**: Mirabel content folded into `/locations/troon/` or `/locations/scottsdale/`
6. **New cities added**: North Phoenix, McDowell Mountain (service area expansion)

---

## 3. FULL REDIRECT MAP

All redirects should be **301 (permanent)** unless otherwise noted.

### 3A. Core Pages

| # | Old URL | New URL | Notes |
|---|---------|---------|-------|
| 1 | `/` | `/` | No redirect needed — rebuild in place |
| 2 | `/services` | `/services/` | Rebuild as enhanced service hub |
| 3 | `/about-us` | `/about/` | Shortened slug |
| 4 | `/contact-us` | `/contact/` | Shortened slug |
| 5 | `/5-star-reviews` | `/reviews/` | Cleaner, shorter URL |
| 6 | `/before-after` | `/before-after/` | No change — keep URL |
| 7 | `/service-locations` | `/locations/` | Shortened, becomes location hub |
| 8 | `/a-comprehensive-list-of-arizona-trees` | `/trees/` | Shortened, becomes tree species hub |
| 9 | `/blog` | `/blog/` | No change — rebuild as hub |
| 10 | `/get-a-quote` | `/get-a-quote/` | No change — keep URL |
| 11 | `/tree-trimming` | `/services/tree-trimming/` | **Consolidate** duplicate into service page |
| 12 | `/saguaro-cactus-removal` | `/services/saguaro-removal/` | **Consolidate** duplicate into service page |
| 13 | `/privacy-policy` | `/privacy-policy/` | No change |
| 14 | `/terms-of-use` | `/terms-of-use/` | No change |
| 15 | `/cookie-policy` | `/cookie-policy/` | No change |

### 3B. Service Pages

| # | Old URL | New URL | Notes |
|---|---------|---------|-------|
| 16 | `/services/tree-trimming` | `/services/tree-trimming/` | Keep — enhance with city links |
| 17 | `/services/tree-removal` | `/services/tree-removal/` | Keep — enhance with city links |
| 18 | `/services/stump-removal` | `/services/stump-grinding/` | Renamed for search intent match |
| 19 | `/services/yard-clean-up` | `/services/yard-clean-up/` | Keep |
| 20 | `/services/saguaro-removal` | `/services/saguaro-removal/` | Keep — merge content from `/saguaro-cactus-removal` |
| 21 | `/services/air-spading` | `/services/air-spading/` | Keep |
| 22 | `/services/soil-injections` | `/services/soil-injections/` | Keep |

### 3C. Location Pages

| # | Old URL | New URL | Notes |
|---|---------|---------|-------|
| 23 | `/locations/scottsdale-az` | `/locations/scottsdale/` | Simplified slug, becomes city hub |
| 24 | `/locations/phoenix-az` | `/locations/phoenix/` | Simplified slug |
| 25 | `/locations/paradise-valley-az` | `/locations/paradise-valley/` | Simplified slug |
| 26 | `/locations/cave-creek-az` | `/locations/cave-creek/` | Simplified slug |
| 27 | `/locations/fountain-hills-az` | `/locations/fountain-hills/` | Simplified slug |
| 28 | `/locations/carefree-az` | `/locations/carefree/` | Simplified slug |
| 29 | `/locations/rio-verde-az` | `/locations/rio-verde/` | Simplified slug |
| 30 | `/locations/new-river-az` | `/locations/new-river/` | Simplified slug |
| 31 | `/locations/troon-az` | `/locations/troon/` | Simplified slug |
| 32 | `/locations/desert-ridge-tree-service` | `/locations/desert-ridge/` | Normalized to match pattern |

### 3D. Community Pages

| # | Old URL | New URL | Notes |
|---|---------|---------|-------|
| 33 | `/communities/mirabel-north-scottsdale` | `/locations/scottsdale/` | Absorbed into Scottsdale hub; or create a section on the Scottsdale page for Mirabel/Troon North communities |

### 3E. Blog Posts

| # | Old URL | New URL | Notes |
|---|---------|---------|-------|
| 34 | `/blog/how-to-prune-a-palo-verde-tree` | `/blog/how-to-prune-a-palo-verde-tree/` | Keep slug |
| 35 | `/blog/5-reasons-why-tree-removal-may-be-necessary-for-homeowners` | `/blog/5-reasons-why-tree-removal-may-be-necessary-for-homeowners/` | Keep slug |
| 36 | `/blog/tree-trimming-scottsdale-everything-you-need-to-know` | `/blog/tree-trimming-scottsdale-everything-you-need-to-know/` | Keep slug |
| 37 | `/blog/yard-clearing-for-fire-protection-in-scottsdale-az` | `/blog/yard-clearing-for-fire-protection-in-scottsdale-az/` | Keep slug |
| 38 | `/blog/trimming-ficus-hedges-in-paradise-valley-az` | `/blog/trimming-ficus-hedges-in-paradise-valley-az/` | Keep slug |
| 39 | `/blog/stump-removal-scottsdale` | `/blog/stump-removal-scottsdale/` | Keep slug |
| 40 | `/blog/a-comprehensive-guide-on-saguaro-cactus-removal-in-scottsdale` | `/blog/a-comprehensive-guide-on-saguaro-cactus-removal-in-scottsdale/` | Keep slug |

### 3F. Tree Species Pages

All 67 tree species pages keep their existing slugs. No redirects needed — just rebuild under same URLs.

| # | Old URL | New URL | Notes |
|---|---------|---------|-------|
| 41–107 | `/trees/{species-slug}` | `/trees/{species-slug}/` | All 67 pages keep slugs |
| Special | `/trees/museum-palo-verde` | `/trees/desert-museum-palo-verde/` | **Consolidate** — redirect duplicate to canonical version |

### 3G. Disallowed/Hidden Paths (Catch-All)

| Pattern | Action | Notes |
|---------|--------|-------|
| `/admin/*` | No redirect | Internal only, block in robots.txt |
| `/login/*` | No redirect | Internal only |
| `/thankyou/*` | `/get-a-quote/` or custom thank-you page | Recreate as form confirmation |
| `/checkout/*` | Remove | E-commerce artifact, not needed |
| `/cart/*` | Remove | E-commerce artifact, not needed |

---

## 4. NEW PAGES (NO REDIRECT SOURCE)

These are brand-new pages in the new architecture that don't exist on the current site.

### 4A. Service + City Combo Pages

These are the highest-impact new pages for local SEO. Create for **top 4 services × top 5 cities** initially, then expand.

**Priority 1 (Launch)**:

| New URL | Target Keyword |
|---------|---------------|
| `/locations/scottsdale/tree-trimming/` | tree trimming scottsdale |
| `/locations/scottsdale/tree-removal/` | tree removal scottsdale |
| `/locations/scottsdale/stump-grinding/` | stump grinding scottsdale |
| `/locations/scottsdale/saguaro-removal/` | saguaro removal scottsdale |
| `/locations/paradise-valley/tree-trimming/` | tree trimming paradise valley |
| `/locations/paradise-valley/tree-removal/` | tree removal paradise valley |
| `/locations/paradise-valley/saguaro-removal/` | saguaro removal paradise valley |
| `/locations/phoenix/tree-trimming/` | tree trimming phoenix |
| `/locations/phoenix/tree-removal/` | tree removal phoenix |
| `/locations/phoenix/stump-grinding/` | stump grinding phoenix |
| `/locations/cave-creek/tree-trimming/` | tree trimming cave creek |
| `/locations/cave-creek/tree-removal/` | tree removal cave creek |
| `/locations/fountain-hills/tree-trimming/` | tree trimming fountain hills |
| `/locations/fountain-hills/tree-removal/` | tree removal fountain hills |

**Priority 2 (Phase 2)**:

| New URL | Target Keyword |
|---------|---------------|
| `/locations/north-phoenix/tree-trimming/` | tree trimming north phoenix |
| `/locations/north-phoenix/tree-removal/` | tree removal north phoenix |
| `/locations/carefree/tree-trimming/` | tree trimming carefree |
| `/locations/rio-verde/tree-trimming/` | tree trimming rio verde |
| `/locations/desert-ridge/tree-trimming/` | tree trimming desert ridge |
| `/locations/mcdowell-mountain/tree-trimming/` | tree trimming mcdowell mountain |
| `/locations/troon/tree-trimming/` | tree trimming troon |
| `/locations/new-river/tree-trimming/` | tree trimming new river |

### 4B. New City Hub Pages

| New URL | Notes |
|---------|-------|
| `/locations/north-phoenix/` | Currently no dedicated page |
| `/locations/mcdowell-mountain/` | Currently no dedicated page |

### 4C. Tree Species Hub Page (Enhanced)

| New URL | Notes |
|---------|-------|
| `/trees/` | Enhanced hub replacing `/a-comprehensive-list-of-arizona-trees` with better filtering, categories (palms, native desert, shade trees, etc.) |

---

## 5. IMPLEMENTATION NOTES

### Redirect Implementation

**If hosting on Vercel/Netlify:**
```json
// vercel.json or _redirects
{
  "redirects": [
    { "source": "/about-us", "destination": "/about/", "permanent": true },
    { "source": "/contact-us", "destination": "/contact/", "permanent": true },
    { "source": "/5-star-reviews", "destination": "/reviews/", "permanent": true },
    { "source": "/service-locations", "destination": "/locations/", "permanent": true },
    { "source": "/a-comprehensive-list-of-arizona-trees", "destination": "/trees/", "permanent": true },
    { "source": "/tree-trimming", "destination": "/services/tree-trimming/", "permanent": true },
    { "source": "/saguaro-cactus-removal", "destination": "/services/saguaro-removal/", "permanent": true },
    { "source": "/services/stump-removal", "destination": "/services/stump-grinding/", "permanent": true },
    { "source": "/locations/scottsdale-az", "destination": "/locations/scottsdale/", "permanent": true },
    { "source": "/locations/phoenix-az", "destination": "/locations/phoenix/", "permanent": true },
    { "source": "/locations/paradise-valley-az", "destination": "/locations/paradise-valley/", "permanent": true },
    { "source": "/locations/cave-creek-az", "destination": "/locations/cave-creek/", "permanent": true },
    { "source": "/locations/fountain-hills-az", "destination": "/locations/fountain-hills/", "permanent": true },
    { "source": "/locations/carefree-az", "destination": "/locations/carefree/", "permanent": true },
    { "source": "/locations/rio-verde-az", "destination": "/locations/rio-verde/", "permanent": true },
    { "source": "/locations/new-river-az", "destination": "/locations/new-river/", "permanent": true },
    { "source": "/locations/troon-az", "destination": "/locations/troon/", "permanent": true },
    { "source": "/locations/desert-ridge-tree-service", "destination": "/locations/desert-ridge/", "permanent": true },
    { "source": "/communities/mirabel-north-scottsdale", "destination": "/locations/scottsdale/", "permanent": true },
    { "source": "/trees/museum-palo-verde", "destination": "/trees/desert-museum-palo-verde/", "permanent": true }
  ]
}
```

**If hosting on Apache (.htaccess):**
```apache
RewriteEngine On

# Core page redirects
RewriteRule ^about-us/?$ /about/ [R=301,L]
RewriteRule ^contact-us/?$ /contact/ [R=301,L]
RewriteRule ^5-star-reviews/?$ /reviews/ [R=301,L]
RewriteRule ^service-locations/?$ /locations/ [R=301,L]
RewriteRule ^a-comprehensive-list-of-arizona-trees/?$ /trees/ [R=301,L]

# Duplicate consolidation
RewriteRule ^tree-trimming/?$ /services/tree-trimming/ [R=301,L]
RewriteRule ^saguaro-cactus-removal/?$ /services/saguaro-removal/ [R=301,L]
RewriteRule ^services/stump-removal/?$ /services/stump-grinding/ [R=301,L]
RewriteRule ^trees/museum-palo-verde/?$ /trees/desert-museum-palo-verde/ [R=301,L]

# Location slug normalization
RewriteRule ^locations/scottsdale-az/?$ /locations/scottsdale/ [R=301,L]
RewriteRule ^locations/phoenix-az/?$ /locations/phoenix/ [R=301,L]
RewriteRule ^locations/paradise-valley-az/?$ /locations/paradise-valley/ [R=301,L]
RewriteRule ^locations/cave-creek-az/?$ /locations/cave-creek/ [R=301,L]
RewriteRule ^locations/fountain-hills-az/?$ /locations/fountain-hills/ [R=301,L]
RewriteRule ^locations/carefree-az/?$ /locations/carefree/ [R=301,L]
RewriteRule ^locations/rio-verde-az/?$ /locations/rio-verde/ [R=301,L]
RewriteRule ^locations/new-river-az/?$ /locations/new-river/ [R=301,L]
RewriteRule ^locations/troon-az/?$ /locations/troon/ [R=301,L]
RewriteRule ^locations/desert-ridge-tree-service/?$ /locations/desert-ridge/ [R=301,L]

# Community pages absorbed
RewriteRule ^communities/mirabel-north-scottsdale/?$ /locations/scottsdale/ [R=301,L]
```

### Redirect Priority Order
1. **Before launch**: Set up all 301 redirects in hosting config
2. **At launch**: Deploy new site with redirects active
3. **Post-launch**: Submit updated sitemap.xml to Google Search Console
4. **Monitor**: Check for 404s in Search Console for 90 days, add any missed redirects

### Page Count Summary

| Type | Current | New (at launch) | New (Phase 2) |
|------|---------|-----------------|---------------|
| Core pages | 15 | 10 | 10 |
| Service pages | 7 | 7 | 7 |
| City hub pages | 10 | 12 | 12 |
| Service+City combos | 0 | **14** | **22+** |
| Community pages | 1 | 0 (absorbed) | 0 |
| Blog posts | 7 | 7 | 10+ |
| Tree species | 67 | 67 | 67 |
| **TOTAL** | **107** | **~117** | **~128+** |

### SEO Migration Checklist
- [ ] Set up all 301 redirects before deploying new site
- [ ] Update internal links across all pages to use new URLs
- [ ] Submit new sitemap.xml to Google Search Console
- [ ] Update Google Business Profile website URL (if changed)
- [ ] Update all citation/directory listings with new URLs
- [ ] Monitor Search Console for crawl errors for 90 days
- [ ] Keep old redirects active permanently (never remove 301s)
- [ ] Update any Google Ads landing page URLs
- [ ] Test every redirect with curl or redirect checker tool
- [ ] Verify canonical tags on all new pages point to correct URLs
