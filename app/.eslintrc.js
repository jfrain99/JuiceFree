module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:solid/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    root: true,
    allowImportExportEverywhere: true,
  },
  plugins: ["solid", "@typescript-eslint", "simple-import-sort", "import"],
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "no-console": ["warn"],
    "spaced-comment": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/array-type": ["error", { default: "array" }],
    "import/no-anonymous-default-export": ["error"],
  },
}
