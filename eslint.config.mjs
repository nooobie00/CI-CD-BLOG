import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import vitest from "@vitest/eslint-plugin";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/**",
      "eslint.config.js",
      ".eslintrc.js",
      "node_modules/**",
      "playwright.config.js",
    ],
  },
  js.configs.recommended,
  // backend
  {
    files: ["backend/**/*.js", "index.js", "tests/**/*.{js,jsx}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
      ecmaVersion: "latest",
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/linebreak-style": ["error", "unix"],
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/semi": ["error", "never"],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "off",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.commonjs,
      },
    },
  },
  // frontend
  {
    files: ["frontend/**/*.{js,jsx}"],
    plugins: {
      react,
      jest,
      vitest,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.jest,
        ...vitest.environments.env.globals,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      vitest: {
        typecheck: true,
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      // ...vitest.configs.recommended.rules,
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "error",
      "react/prop-types": 0,
    },
  },
];
