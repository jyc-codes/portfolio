import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const config = [
  js.configs.recommended,
  ...compat.config({
    extends: ["plugin:react/recommended"],
    env: { node: true, browser: true },
    settings: { react: { version: "detect" } },
  }),
  ...nextCoreWebVitals,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
  {
    rules: {
      "react/jsx-key": "warn",
      "react/prop-types": "off",
      "react/jsx-uses-vars": "error",
    },
  },
]

export default config
