/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  // Sorts Tailwind class lists into the framework's canonical order.
  // Must be last in the plugin list to run after any other formatting.
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
