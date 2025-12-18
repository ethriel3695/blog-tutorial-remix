# Repository Guidelines

## Project Structure & Module Organization

- `app/` contains the Remix application code.
- `app/routes/` holds route modules (URLs map to files).
- `app/components/` is shared UI and view components.
- `app/models/` contains server-side data access (Prisma queries).
- `app/test/` and `*.test.ts(x)` files hold unit tests and test setup.
- `app/stories/` and `app/components/*.stories.tsx` are Storybook stories.
- `prisma/` contains the schema, migrations, and seed script.
- `public/` holds static assets.
- `mocks/` provides MSW request mocks for local development.

## Build, Test, and Development Commands

- `npm run setup` initializes Prisma client, applies migrations, and seeds data.
- `npm run dev` starts the Remix dev server with mocks enabled.
- `npm run mock:dev` runs the dev server with explicit MSW setup.
- `npm run build` builds the production app.
- `npm run start` serves the built app from `build/`.
- `npm run lint` runs ESLint.
- `npm run format` runs Prettier across the repo.
- `npm run test` runs Vitest unit tests.
- `npm run test:browser` runs browser-focused Vitest tests.
- `npm run typecheck` runs `tsc` type checks.
- `npm run validate` runs tests (CI style), lint, and typecheck.
- `npm run storybook` runs Storybook locally; `npm run test-storybook` runs Storybook tests.

## Coding Style & Naming Conventions

- TypeScript + TSX are the default; keep types explicit for exported APIs.
- Indentation: 2 spaces (enforced by Prettier).
- Route files use Remix naming patterns like `posts.$slug.tsx`.
- Tests use `*.test.ts` or `*.test.tsx` (see `app/utils.test.ts`).
- Linting via ESLint; formatting via Prettier and `prettier-plugin-tailwindcss`.

## Testing Guidelines

- Unit/component tests use Vitest and Testing Library.
- Browser tests use Vitest Browser (`vitest.browser.config.ts`).
- Place shared setup in `app/test/setup-test-env.ts`.
- Prefer deterministic tests; seed data via `npm run setup` if needed.

## Commit & Pull Request Guidelines

- Commit messages are short, imperative, and sentence-case (e.g., “Fix broken stories”).
- PRs should include a brief summary, testing notes (`npm run validate` or specific commands), and screenshots for UI changes.
- Link related issues when applicable.

## Configuration Notes

- Prisma is configured in `prisma/schema.prisma`; SQLite is used locally.
- Deployment settings live in `fly.toml`; review before changing infra settings.
