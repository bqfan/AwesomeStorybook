import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  {
    ignores: [
      ".storybook/**",
      ".rnstorybook/**",
      "tailwind.config.js",
      "postcss.config.js",
      "metro.config.js",
      "babel.config.js",
      "commitlint.config.js",
      "lint-staged.config.js",
    ],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
