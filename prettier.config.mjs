/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 120,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  // 순서: 외부 라이브러리, @로 시작하는 절대 경로, 현재 디렉토리 상대 경로, 상위 디렉토리 상대 경로
  importOrder: ["<THIRD_PARTY_MODULES>", "^@(.*)$", "^[.]/", "^[.]{2,}/"],
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
};

export default config;
