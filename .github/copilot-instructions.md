# Copilot Instructions for AI Agents

## Project Overview
- This is a Next.js app (TypeScript) using the `/app` directory structure, bootstrapped with `create-next-app`.
- UI components are organized under `components/ui/` (e.g., `button.tsx`).
- Layout components are in `layout/` (e.g., `Header.tsx`).
- Utility functions are in `lib/utils.ts`.
- Global styles are in `app/globals.css`.
- Fonts are managed in `public/fonts/` and loaded via `next/font` (Geist).

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Main entry point:** `app/page.tsx`.
- **Hot reload:** Editing files in `app/`, `components/`, or `layout/` triggers auto-update.
- **Build config:** See `next.config.ts`, `tsconfig.json`, and `eslint.config.mjs` for project settings.

## Patterns & Conventions
- **Component structure:** Prefer functional components, colocate styles and logic.
- **UI components:** Reusable elements live in `components/ui/`.
- **Layout:** Shared layout elements (headers, etc.) in `layout/`.
- **Utilities:** Common helpers in `lib/utils.ts`.
- **TypeScript:** Use strict typing; check `tsconfig.json` for settings.
- **Styling:** Use global CSS for base styles, component-level CSS for overrides.
- **Font loading:** Use `next/font` for optimized font management.

## Integration Points
- **External:** Uses Next.js, TypeScript, and Geist font via Vercel's `next/font`.
- **Config files:**
  - `next.config.ts`: Next.js custom config
  - `eslint.config.mjs`: Linting rules
  - `postcss.config.mjs`: PostCSS setup

## Examples
- To add a new button, create a file in `components/ui/` and import it in `app/page.tsx` or other components.
- To update the header, edit `layout/Header.tsx` and ensure it is referenced in `app/layout.tsx`.
- For new utilities, add to `lib/utils.ts` and import where needed.

## References
- See [README.md](../../README.md) for setup and deployment details.
- Key files: `app/page.tsx`, `components/ui/button.tsx`, `layout/Header.tsx`, `lib/utils.ts`.

---
_If any section is unclear or missing, please provide feedback for improvement._
