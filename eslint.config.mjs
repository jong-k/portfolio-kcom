import { importX } from "eslint-plugin-import-x";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { configs as sonarConfigs } from "eslint-plugin-sonarjs";
import pluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { configs as tsconfigs } from "typescript-eslint";
import js from "@eslint/js";

const eslintConfig = defineConfig([
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  ...tsconfigs.recommended,
  pluginUnicorn.configs.recommended,
  sonarConfigs.recommended,
  {
    rules: {
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-null": "off",
    },
  },
  eslintPluginPrettierRecommended,
  globalIgnores(["docs/.vitepress/cache/**", "docs/.vitepress/dist/**"]),
]);

export default eslintConfig;
