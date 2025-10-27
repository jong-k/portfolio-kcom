/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 */
const config = {
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  importOrder: ["<THIRD_PARTY_MODULES>", "^@(.*)$", "^[.]/", "^[.]{2,}/"],
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  tailwindStylesheet: "./src/app/globals.css",
  trailingComma: "es5",
};

export default config;
