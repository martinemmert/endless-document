module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      // Special handle TSX
      files: ["*.tsx"],
      rules: {
        // React hooks often end up with floating promises. There is probably no
        // way to fix this due to the way react hooks work.
        "@typescript-eslint/no-floating-promises": "off",
      },
    },
    {
      // Special TSX test files
      files: ["*.spec.tsx"],
      rules: {
        // React "act" might require an async function to work without having to
        // actually await anything.
        "@typescript-eslint/require-await": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // Add additional rules
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unified-signatures": "error",
    // Deactivate some rules
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
  },
  settings: {
    "import/ignore": ["swiper"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
