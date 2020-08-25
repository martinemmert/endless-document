module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:node/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:tailwind/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/unicorn",
  ],
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "import",
    "jsx-a11y",
    "node",
    "prettier",
    "react-hooks",
    "react",
    "unicorn",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // Override default configurations and (de)activate rules that we (do not)
    // opt-in/out to using.
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        minimumDescriptionLength: 15,
        "ts-check": "allow-with-description",
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
      },
    ],
    // Always infer the return type.
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: true }],
    "array-callback-return": "error",
    "capitalized-comments": [
      "error",
      "always",
      {
        block: {
          ignorePattern: ".*",
        },
        line: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          // Ignore all lines that have less characters than 10 and all lines that
          // start with something that looks like a variable name or code.
          ignorePattern:
            ".{0,10}$|[a-z]+ ?[0-9A-Z_.(/=:[#-]|std|http|ssh|ftp|case|[b-z] |[a-z]*[0-9].* |.+[;{}()]$",
        },
      },
    ],
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "eslint-comments/no-unused-disable": "error",
    "func-name-matching": "error",
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "import/namespace": [
      "error",
      {
        allowComputed: true,
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["href"],
      },
    ],
    "no-alert": "error",
    "no-await-in-loop": "error",
    // TODO: Activate this rule when we switched to the logger. We use winston.
    // "no-console": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-implicit-coercion": "error",
    "no-lonely-if": "error",
    "no-mixed-requires": "error",
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: true,
      },
    ],
    "no-new-func": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-path-concat": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": [
      "error",
      {
        typeof: true,
      },
    ],
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-use-before-define": [
      "error",
      {
        classes: true,
        functions: false,
        variables: false,
      },
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "node/no-extraneous-import": [
      "error",
      {
        allowModules: ["react"],
      },
    ],
    "node/no-missing-import": [
      "error",
      {
        tryExtensions: [".js", ".json", ".tsx", ".d.ts", ".ts"],
      },
    ],
    "node/no-process-exit": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules"],
      },
    ],
    // TODO: Activate this as soon as we have environment variables encapsulated
    // as configuration module.
    // "node/no-process-env": "error",
    "object-shorthand": ["error", "always"],
    "one-var": [
      "error",
      {
        initialized: "never",
      },
    ],
    "prefer-const": [
      "error",
      {
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-regex-literals": "error",
    "prefer-template": "error",
    // Use the default prettier setting as formatter
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx", ".jsx"],
      },
    ],
    "react/prop-types": [
      "error",
      {
        skipUndeclared: true,
      },
    ],
    "require-atomic-updates": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        block: {
          balanced: true,
        },
        exceptions: ["-", "/"],
        markers: ["/"],
      },
    ],
    "symbol-description": "error",
    "unicode-bom": "error",
    "unicorn/filename-case": "off",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        checkFilenames: false,
        replacements: {
          props: false,
        },
      },
    ],
    yoda: "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
    "import/ignore": ["contentful", "swiper"],
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      // Enable rules specifically for TypeScript files
      files: ["*.ts?(x)"],
      rules: {
        "@typescript-eslint/no-var-requires": "error",
      },
    },
    {
      // Special handle JSX
      files: ["*.@(j|t)sx"],
      rules: {
        // React uses null frequently
        "unicorn/no-null": "off",
      },
    },
    {
      // Special handle test files.
      files: ["*.spec.@(j|t)s?(x)"],
      plugins: ["jest", "jest-dom", "jest-formatting", "testing-library"],
      extends: [
        "plugin:jest-dom/recommended",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:testing-library/react",
      ],
    },
  ],
};
