import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    rules: {
      // Rule: Semicolons are mandatory
      semi: "error",

      // Rule: Use single quotes, but just warn me (don't break the build)
      quotes: ["warn", "double"],

      // Rule: Allow unused variables (turn this rule off)
      "no-unused-vars": "off",
    },
  },
]);
