This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Code Quality

```bash
npm run typecheck    # tsc --noEmit
npm run lint         # eslint .
npm run lint:fix     # eslint . --fix
npm run format       # prettier --write .
npm run format:check # prettier --check .
npm run check        # all three, in order
```

`next build` does **not** run linting — Next.js 16 removed `next lint`. Run
`npm run check` locally or in CI.

Prettier owns formatting; `eslint-config-prettier` is applied last in
`eslint.config.mjs` so the two never disagree. `prettier-plugin-tailwindcss`
sorts Tailwind class lists into the framework's canonical order.

### Pinned tool versions

Two dev dependencies are deliberately held back, both because
`eslint-config-next` pins transitive packages that have not caught up:

| Package      | Pinned | Latest  | Reason                                                                                                                                                                                        |
| ------------ | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typescript` | 6.0.3  | 7.0.2   | `typescript-eslint` supports `<6.1.0` and hard-errors on TS 7, which exposes only `./unstable/*` APIs ([tracking issue](https://github.com/typescript-eslint/typescript-eslint/issues/10940)) |
| `eslint`     | 9.39.5 | 10.10.0 | `eslint-plugin-react` supports `eslint ^9.7`; on ESLint 10 its React version detection throws                                                                                                 |

`@types/node` is also held at `^22` to match the Node runtime. Raise these
together with the upstream packages, not on their own.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
