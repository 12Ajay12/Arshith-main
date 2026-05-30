# Arshith Groups — Corporate Website

Premium corporate website for **Arshith Groups**, a diversified business conglomerate based in Chirala, Andhra Pradesh.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion (animations)
- Wouter (routing)
- Shadcn UI components
- Lenis (smooth scroll)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Group hero, 6 divisions, stats, Arshith Fresh spotlight |
| `/about` | About Arshith Groups — Story, values, milestones, corporate info |
| `/divisions` | All 6 Business Divisions |
| `/arshith-fresh` | Arshith Fresh division — Products, spotlights, B2B |
| `/team` | Leadership — Co-founders profiles |
| `/sustainability` | Sustainability & traditional methods |
| `/careers` | Careers & internship openings |
| `/contact` | Contact form (General, Farmer, B2B) |

## Getting Started in VS Code

### 1. Install Node.js
Make sure you have **Node.js 18+** installed: https://nodejs.org

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 4. Build for production
```bash
npm run build
```

The production build will be in the `dist/` folder.

## Project Structure

```
src/
├── assets/
│   └── images/          # hero-bg.png, ghee.png, honey.png, etc.
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── AnimatedCounter.tsx
│   ├── CustomCursor.tsx
│   ├── PageTransition.tsx
│   └── ParticleBackground.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Divisions.tsx
│   ├── ArshithFresh.tsx
│   ├── Team.tsx
│   ├── Sustainability.tsx
│   ├── Careers.tsx
│   ├── Contact.tsx
│   └── not-found.tsx
├── hooks/
├── lib/
├── App.tsx
├── main.tsx
└── index.css
```

## Company Info

- **Legal Name:** Arshith Fresh India Private Limited
- **CIN:** U46300AP2025PTC119022
- **Incorporated:** April 24, 2025
- **Headquarters:** Chirala, Andhra Pradesh – 523185
- **Directors:** Farook Nurubhasha & Pallavi Nelli
- **Email:** contact@arshithfresh.com
- **Website:** https://arshithfresh.com
