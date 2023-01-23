module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "./airbnb/.eslintrc",
    "prettier"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "project": "tsconfig.json",
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
  }
}
