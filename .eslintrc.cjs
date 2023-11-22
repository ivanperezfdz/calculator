module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

{
  "semi": true,
    "singleQuote": true
}
