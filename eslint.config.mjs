import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier/flat";

// `core-web-vitals` already includes the eslint-config-next base rules.
// `typescript` is a separate chain (typescript-eslint recommended) and also
// contributes the global ignores for .next/, out/, build/ and next-env.d.ts.
const config = [
  {
    ignores: [
      // Vendored static site assets (jQuery, minified vendor bundles).
      // Third-party code we don't author and shouldn't lint.
      "public/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  // Must stay last: turns off the stylistic rules that would fight Prettier.
  prettierConfig,
];

export default config;
