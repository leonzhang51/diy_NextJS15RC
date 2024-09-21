module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "eslint-plugin-import-helpers",
    "testing-library",
  ],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    // JavaScript rules
    "prefer-const": "warn",
    "no-var": "warn",
    "no-unused-vars": "warn",
    "object-shorthand": "warn",
    "quote-props": ["warn", "as-needed"],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": "off",
    "newline-before-return": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "import-helpers/order-imports": [
      2,
      {
        newlinesBetween: "always",
        groups: [
          ["/^next/", "module"],
          "/^@/styles/",
          "/^@/components/",
          "/^@/lib/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": [
      2,
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
