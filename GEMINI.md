# Portfolio Project Guidelines

This is a personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Project Structure
- `app/`: Core application logic and pages.
  - `components/`: Modular UI sections (e.g., `HeroSection`, `AboutSection`, `ThemeToggle`, `Navbar` with mobile responsiveness).
  - `constants/`: Static data (`data.ts`) and animation variants (`animations.ts`).
  - `hooks/`: Custom React hooks (e.g., `useScrollAnimation`).
  - `types/`: TypeScript interfaces and types.
- `public/`: Static assets.
  - `contacts/`: Social media icons.
  - `projects/`: Project thumbnails/SVGs.
  - `tech/`: Technology stack icons.

## Key Conventions

### 1. Client Components
Most UI sections use Framer Motion for animations and thus must be marked with `'use client'` at the top of the file.

### 2. Animations
- **Framer Motion:** Prefer using `motion` components and `variants` for consistency.
- **Shared Variants:** Define reusable animation variants in `app/constants/animations.ts`.
- **Scroll Animations:** Use `useInView` or `useScroll` for scroll-triggered animations.

### 3. Data Management
- Keep content separate from presentation by storing it in `app/constants/data.ts`.
- Use the types defined in `app/types/index.ts` to ensure type safety for data structures.

### 4. Styling
- Use **Tailwind CSS** for all styling.
- **Themes:** Light and dark modes are handled via CSS variables (`--background`, `--foreground`, etc.) defined in `app/globals.css`.
- Use Tailwind's `dark:` utility or the CSS variables to ensure theme compatibility.
- For monochromatic icons (black in light mode), use the `.dark-invert` utility class to make them white in dark mode. (e.g., used for `nextjs`, `prisma`, and `nodejs` in `SkillsSection`).
- Maintain consistent spacing using Tailwind's spacing scale (e.g., `px-6`, `my-12`).

### 5. Assets
- **Icons:** SVG icons for tech stacks should be placed in `public/tech/` and named to match the `iconData` array in `data.ts`.
- **Images:** Use the Next.js `Image` component for optimized image loading.

## Development Workflows
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint for code quality checks.

## Adding a New Project
1. Add the project SVG/Image to `public/projects/`.
2. Update the `projects` array in `app/constants/data.ts`.
3. Ensure the `Project` type in `app/types/index.ts` is respected.

## Theme Management
- The application uses `next-themes` with a `ThemeProvider` wrapping the layout.
- The `ThemeToggle` component allows users to switch between light and dark modes.
- The `Navbar` is fully responsive, featuring a mobile-friendly hamburger menu with Framer Motion animations.
- Always verify that new components work in both themes and across different screen sizes.
