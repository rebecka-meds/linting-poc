const error = "error";
const pascalCase = "PascalCase";
const camelCase = "camelCase";

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
    
    "@typescript-eslint/naming-convention": [
      error,
      {
        "selector": "function",
        "format": [pascalCase]
      },
      {
        "selector":
          "variable", "format": [camelCase]
      },
      // For functions declared as variables, we still want to use PascalCase - override the variable rule
      {
        "selector": "variable",
        "types": ["function"],
        "format": [pascalCase]
      },
      {
        "selector": "classMethod",
        "format": [pascalCase]
      }
    ]
  }
}
