# Bhavesh — Personal Developer Portfolio

A premium-minimal, editorial-style portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── data/
│   └── portfolio.ts        # All editable content lives here
├── components/
│   ├── Navbar.tsx          # Responsive nav with mobile menu
│   ├── Hero.tsx            # Typography-led hero section
│   ├── About.tsx           # Personal intro
│   ├── Skills.tsx          # Skill groups (no fake ratings)
│   ├── Project.tsx         # Single featured project
│   ├── Education.tsx       # Education + certification
│   ├── CurrentlyLearning.tsx
│   ├── Contact.tsx         # Contact form (validation only)
│   ├── Footer.tsx          # Footer with back-to-top
│   ├── Section.tsx         # Reusable section wrapper
│   └── SmartLink.tsx       # Link or placeholder helper
├── App.tsx                 # Main layout
├── main.tsx                # Entry point
└── index.css               # Global styles + Tailwind
```

## How to Update Your Information

All content is centralized in **`src/data/portfolio.ts`**. Edit this single file to update:

### Personal Details
Update `profile` object:
- `email`, `github`, `linkedin` — set to your real URLs/addresses (empty strings show editable placeholders)

### Project (UNO No Mercy)
Update `project` object:
- `githubUrl` — your repository URL when ready
- `liveUrl` — your deployment URL when ready
- `screenshot` — path or URL to a project screenshot
- `techStack` — list of technologies used
- `status` — "In Progress" or "Completed"

### Education & Certification
- `education` — degree, institution, graduation year, subjects
- `certification` — title, issuer, category, credential status

### Skills
- `skillGroups` — add or remove skill categories and items

### Currently Learning
- `currentlyLearning` — list of areas you're actively working on

## Contact Form

The contact form includes field validation (name, email, message) but is **not connected to a submission backend**. A visible notice explains this to visitors. To enable form submission, you can:

1. Use a service like Formspree or EmailJS
2. Set up a Supabase Edge Function to handle submissions
3. Use a simple `mailto:` link (already provided as an alternative)

## Design Notes

- Light theme with white background and near-black typography
- Inter font for body, JetBrains Mono for labels and accents
- Subtle grey borders and generous whitespace
- Fully responsive: mobile, tablet, desktop
- Reduced-motion support via `prefers-reduced-motion`
- Accessible navigation with keyboard focus states
- No fake statistics, fabricated credentials, or placeholder projects

## Deployment

The project builds to a static `dist/` folder. Deploy it to any static host:

- **Vercel:** `npm run build` → deploy `dist/`
- **Netlify:** `npm run build` → publish directory `dist/`
- **GitHub Pages:** build and push `dist/` to a `gh-pages` branch

## License

Personal portfolio for Bhavesh. All content is owned by the author.
