# PhotoStudioParadise

> **Premier Film, Pre-Wedding & Creative Photography Studio Sets in Delhi**  
> Recreated & elevated from the reference website [photoparadise.in](https://www.photoparadise.in/) under the new brand identity **PhotoStudioParadise** for GitHub user **Aman22kr**.

---

## 1. What the Website Does

**PhotoStudioParadise** is a high-performance, responsive multi-page web application showcasing Delhi's premier 3-acre private filmmaking and photography studio located in Village Qutabgarh, Delhi. The studio features over 50 uniquely designed indoor air-conditioned and outdoor backdrops, 200+ authentic props, private luxury bridal makeup suites, and an in-house cafe.

The application allows clients (pre-wedding couples, expectant parents, fashion designers, families, and commercial cinematographers) to:
- Discover all 50+ bespoke themed backdrops with high-resolution photography, dimensions, lighting notes, and included props.
- Explore photography milestones (Pre-Wedding, Maternity, Fashion & Editorial, Baby/Cake Smash, 25th Anniversaries, Commercial/Music Videos).
- Calculate transparent shoot package costs in real time (Silver, Gold, Platinum) with customizable studio add-ons.
- Save favorite sets and inspiration photos to a personal moodboard stored persistently in the user's browser.
- Reserve shoot shifts and generate instant booking vouchers with unique reference codes (`PSP-XXXXXX`).
- Inspect studio amenities, directions from NCR hubs, driving maps, and FAQs.

---

## 2. Reference Website & Brand Identity

| Item | Details |
| :--- | :--- |
| **Reference Website URL** | `https://www.photoparadise.in/` |
| **New Brand Name** | **PhotoStudioParadise** |
| **GitHub Username** | **Aman22kr** |
| **Primary Location** | Plot Number 308, Nearest Main Bus Stand, Village Qutabgarh, Delhi - 110039 |
| **Direct Contact** | `+91 9899200017`, `+91 9999954054` |
| **Email** | `2016.photoparadise@gmail.com` |
| **Operating Hours** | 6:00 AM – 10:00 PM (Monday – Sunday) |

All branding references, page titles, navigation, footer links, and interface copy have been transitioned to **PhotoStudioParadise**.

---

## 3. Implemented Pages & Features

1. **Homepage (`#/`)**:
   - Cinematic hero stage with backdrop preview, quick search input, and stats counter.
   - Signature sets preview with instant category tabs.
   - Photography shoot types overview with starting pricing.
   - 16:9 YouTube video walkthrough blank player placeholder with player controls layout.
   - Studio infrastructure & amenities breakdown (AC green rooms, cafe, props, sanitized bays).
   - Packages comparison overview.
   - Verified Delhi NCR client reviews & testimonials.
   - Instant reservation CTA banner.
   - Reusable compact advertisement placeholder.

2. **Sets & Themes Catalog (`#/sets`)**:
   - Comprehensive gallery of backdrops (The Royal Rajputana Palace, Santorini Greek Alley, Parisian Bistro, Tuscan Vineyard, Neon Retro Diner, Boho Tipi Camp, Industrial Brick Loft, Punjabi Pind, Glass Botanical Conservatory, Moroccan Riad, Vintage Convertible, Starlight Fairy Light Tunnel, etc.).
   - Multi-parameter filtering: Category tabs, Indoor AC vs Outdoor switch, search by name/props, and sorting by featured, most props, or alphabetical order.

3. **Individual Set Detail Page (`#/sets/:id`)**:
   - High-resolution gallery carousel with thumbnail navigation.
   - Architectural specifications: dimensions, ceiling clearance, and optimal natural lighting hours.
   - Inventory list of included handheld and furniture props.
   - Suitable photography genres tags.
   - Direct booking button with pre-selected set.
   - Related backdrops recommendation carousel.

4. **Shoot Services Catalog (`#/services`)**:
   - Detailed guides for Pre-Wedding, Maternity, Fashion, Baby/Toddler, 25th Anniversary, Family/Friends, and Music Videos.
   - Time pacing recommendations, outfit changes advice, and starting rates.

5. **Individual Service Detail Page (`#/services/:id`)**:
   - In-depth shoot breakdown, preparation guidelines, what to bring, and shoot-specific FAQs.
   - Curated list of recommended backdrops best suited for that specific genre.

6. **Pricing & Packages (`#/pricing`)**:
   - Transparent tiers: **Silver Half-Day** (4 Hrs, ₹15,000), **Gold Full-Day** (8 Hrs, ₹25,000), and **Platinum VIP** (12 Hrs, ₹38,000).
   - Side-by-side comparative feature matrix.
   - Interactive Studio Add-ons configurator (VIP Makeup Suite, Drone Aerial Pass, Bonfire & Cold Pyro, Vintage Roadster Car, Atmospheric Haze Machine).
   - Studio policies, rain guarantee, and slot deposit rules.

7. **Portfolio Gallery (`#/gallery`)**:
   - Categorized high-resolution photography inspiration board.
   - Full-screen interactive lightbox modal with keyboard navigation (`Esc`, `←`, `→`), image zoom, set location tags, and direct moodboard saving.

8. **About Studio Campus (`#/about`)**:
   - The origin story of PhotoStudioParadise and why the 3-acre campus was founded in Qutabgarh.
   - Technical facilities built for cinematographers (3-phase heavy power, high ceilings, acoustic considerations).
   - Hospitality features (makeup suites, cafe, wheelchair-accessible paths).

9. **Interactive Booking Engine (`#/booking`)**:
   - 6-step guided booking flow: Milestone selector → Duration & Tier → Date & Slot picker → Set Wishlist → Studio Add-ons → Client Details.
   - Live real-time quote calculation.
   - Generates an official confirmation voucher saved persistently to `localStorage` with a unique reference code (`PSP-XXXXXX`) and a printable receipt view.

10. **Saved Moodboard & My Bookings (`#/saved`)**:
    - Tabbed interface to review shortlisted backdrops, saved portfolio inspirations, and submitted reservations.
    - Ability to remove items or manage booking records across sessions.

11. **Studio Location & Contact (`#/contact`)**:
    - Address details in Village Qutabgarh, Delhi.
    - Driving time benchmarks from Rohini, West Delhi, Central Delhi, and Gurugram.
    - Google Maps interactive direction launcher.
    - Direct inquiry form with submission validation and success notification.

12. **FAQ (`#/faq`)**:
    - Filterable accordion categorized by Booking & Timing, Sets & Facilities, Equipment & Props, Food & Cafe, and Policies.
    - Real-time search filter.

13. **Custom 404 Not Found (`*`)**:
    - Graceful fallback with quick links back to the homepage or sets catalog.

14. **Compact Advertisement Placeholder (`AdPlaceholder`)**:
    - Reusable slot positioned near the bottom of all relevant pages above the footer with a clean, conventional ad aesthetic.

15. **YouTube Player Placeholder (`YouTubePlaceholder`)**:
    - Replicates the exact 16:9 video player canvas, scrub bar, and title banner layout using a clean blank placeholder without third-party iframe dependencies.

---

## 4. Project Structure

```text
PhotoStudioParadise/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Official GitHub Actions deployment for GitHub Pages
├── dist/                           # Production static build directory (base: './')
├── public/                         # Public static assets
├── src/
│   ├── components/
│   │   ├── AdPlaceholder.tsx       # Reusable compact advertising placeholder
│   │   ├── Footer.tsx              # Comprehensive studio footer
│   │   ├── GalleryLightbox.tsx     # Full-screen photo viewer with keyboard controls
│   │   ├── Navbar.tsx              # Sticky header with badge counters & mobile menu
│   │   ├── SetCard.tsx             # Interactive backdrop card with favorite heart
│   │   └── YouTubePlaceholder.tsx  # Aspect-ratio-accurate 16:9 blank video player
│   ├── context/
│   │   └── AppContext.tsx          # LocalStorage state management (favorites, bookings, toasts)
│   ├── data/
│   │   ├── faqsData.ts             # Studio FAQ database
│   │   ├── galleryData.ts          # Portfolio photos with category metadata
│   │   ├── pricingData.ts          # Shoot package tiers and optional add-ons
│   │   ├── servicesData.ts         # Photography shoot genres and guides
│   │   ├── setsData.ts             # 50+ backdrops data with props & dimensions
│   │   └── testimonialsData.ts     # Verified client reviews
│   ├── pages/
│   │   ├── AboutPage.tsx           # Story, 3-acre layout & technical facilities
│   │   ├── BookingPage.tsx         # Interactive booking engine & receipt generator
│   │   ├── ContactPage.tsx         # Directions, driving guide & message form
│   │   ├── FaqPage.tsx             # Searchable accordion FAQ
│   │   ├── GalleryPage.tsx         # Filterable portfolio & moodboard board
│   │   ├── HomePage.tsx            # Full-featured landing page
│   │   ├── NotFoundPage.tsx        # Custom 404 handler
│   │   ├── PricingPage.tsx         # Pricing plans & feature comparison table
│   │   ├── SavedPage.tsx           # LocalStorage favorites & my bookings
│   │   ├── ServiceDetailPage.tsx   # Individual shoot genre deep-dive
│   │   ├── ServicesPage.tsx        # Overview of shoot services
│   │   ├── SetDetailPage.tsx       # Individual backdrop specifications & props
│   │   └── SetsPage.tsx            # Filterable & searchable backdrops catalog
│   ├── App.tsx                     # HashRouter root with route switch & scroll restoration
│   ├── index.css                   # Tailwind v4 import & luxury typography theme
│   └── main.tsx                    # React 19 entry point
├── .env.example                    # Environment variable template
├── .gitignore                      # Git ignore rules (includes node_modules, excludes lockfile)
├── index.html                      # HTML entry with Playfair Display & Plus Jakarta Sans
├── metadata.json                   # AI Studio applet metadata
├── package.json                    # Project metadata, scripts, and dependencies
├── package-lock.json               # Mandatory committed npm dependency lockfile
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite config with base: './'
└── README.md                       # Comprehensive documentation
```

---

## 5. Prerequisites & Supported Node.js Versions

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher
- Modern web browser (Chrome, Edge, Firefox, Safari)

---

## 6. How to Install Dependencies

To install all dependencies cleanly using the committed `package-lock.json`:

```bash
npm ci
```

Alternatively, if adding new packages:

```bash
npm install
```

---

## 7. How to Run the Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will start on `http://localhost:3000`.

---

## 8. How to Generate & Preview the Production Build

1. **Build for Production**:
   ```bash
   npm run build
   ```
   This generates the optimized static bundle in the `dist/` directory with relative asset paths (`./assets/...`).

2. **Preview Production Build Locally**:
   ```bash
   npm run preview
   ```
   Opens a local static web server to test the production output.

3. **Verify Type Safety & Linting**:
   ```bash
   npm run lint
   ```

---

## 9. LocalStorage Persistence & Limitations

The application uses standard browser `localStorage` under stable, namespaced keys:
- `psp_fav_sets_v1`: Array of favorite backdrop IDs.
- `psp_fav_gallery_v1`: Array of favorite inspiration photo IDs.
- `psp_bookings_v1`: Array of submitted reservation records containing client name, date, slot, package, selected sets, add-ons, and reference code.

### Limitations:
- `localStorage` is scoped exclusively to the user's specific browser and device. It does **not** synchronize across multiple devices.
- Clearing browser cookies or cache will reset saved items.
- No sensitive payment or authentication credentials are ever stored in `localStorage`.
- Booking submissions create client-side reservation vouchers with reference codes; final slot confirmation and payment is settled directly with the studio reception desk.

---

## 10. Configuring the GitHub Repository for Aman22kr

1. Initialize git and add your remote repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PhotoStudioParadise static web application"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/PhotoStudioParadise.git
   ```

2. Confirm your remote is linked:
   ```bash
   git remote -v
   ```

---

## 11. Enabling GitHub Pages via GitHub Actions

1. Go to your repository on GitHub: `https://github.com/Aman22kr/PhotoStudioParadise`.
2. Click on the **Settings** tab.
3. In the left navigation, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions** (do **not** select "Deploy from a branch").
5. The committed workflow file at `.github/workflows/deploy.yml` will now automatically be detected by GitHub Pages.

---

## 12. Pushing Changes & Automatic Deployment

Whenever you push commits to the `main` branch, the deployment workflow triggers automatically:

```bash
git add .
git commit -m "Update studio backdrops and packages"
git push origin main
```

You can monitor the live deployment under the **Actions** tab of your GitHub repository. Once finished, your website will be live at:
`https://aman22kr.github.io/PhotoStudioParadise/`

---

## 13. Troubleshooting Common Deployment Issues

| Problem | Cause | Solution |
| :--- | :--- | :--- |
| **Blank white page after deployment** | Hardcoded root `/` asset paths | Verify `vite.config.ts` includes `base: './'`. This ensures assets resolve relative to the repository path. |
| **404 error on page refresh** | Browser history routing without server rewrites | The app uses `HashRouter` (`#/sets`, `#/booking`), ensuring subpages and direct URLs work natively on GitHub Pages without server rewrite rules. |
| **Action fails at `npm ci`** | Missing or out-of-sync `package-lock.json` | Ensure `package-lock.json` is committed and not ignored by `.gitignore`. Run `npm install --package-lock-only` locally to synchronize. |
| **GitHub Pages deployment permission denied** | Missing workflow permissions | Ensure `.github/workflows/deploy.yml` contains `pages: write`, `id-token: write`, and `contents: read`. |
| **Workflow not triggering** | Branch name mismatch | Ensure your default branch is `main` or update `.github/workflows/deploy.yml` to match your default branch name. |

---

## 14. Customizing Brand Name, Theme & Content

- **Brand Name**: Update `PhotoStudioParadise` in `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `index.html`, and `metadata.json`.
- **Accent Colors**: The visual theme uses amber gold accents (`text-amber-400`, `bg-amber-500`, `border-amber-500`). You can modify these in `src/index.css` or Tailwind classes.
- **Sets Data**: Add or modify backdrops in `src/data/setsData.ts`.
- **Pricing & Packages**: Edit rates, shift durations, and add-ons in `src/data/pricingData.ts`.
- **Contact Details**: Update telephone numbers, email, or address in `src/data/pricingData.ts`, `src/pages/ContactPage.tsx`, and `src/components/Footer.tsx`.

---

## 15. Reusing This Project For Another Studio / Brand

To adapt this codebase for another client or website:
1. Replace `PhotoStudioParadise` with your target business name across `src/components/Navbar.tsx`, `src/components/Footer.tsx`, and `index.html`.
2. Update the backdrops inventory in `src/data/setsData.ts` with your photos and dimensions.
3. Update packages and prices in `src/data/pricingData.ts`.
4. Update the GitHub repository name in `.github/workflows/deploy.yml` if needed.
5. Re-run `npm run build` to generate the new release.

---

## 16. Mock Implementations & Current Scope

- **Backend**: The initial version is entirely client-side; no server-side database or user authentication backend is required.
- **Booking Flow**: Reservations generate realistic confirmation vouchers with reference codes (`PSP-XXXXXX`) stored in the browser's `localStorage`. No actual credit card charge or payment gateway processing occurs.
- **YouTube Embeds**: Video thumbnail and walkthrough areas reproduce the exact 16:9 player frame and playback layout using an elegant blank placeholder component in compliance with prompt guidelines.
- **Advertising**: Small, non-intrusive sponsor slots are rendered using the reusable `AdPlaceholder` component. No external ad tracking scripts or third-party cookies are loaded.

---

*Crafted for Aman22kr · Hosted on GitHub Pages via GitHub Actions.*
