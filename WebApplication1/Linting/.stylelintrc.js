'use strict';
const editorConfig = require('editorconfig').parseSync('./editorconfig');
const stylelintConfigStandard = require('stylelint-config-standard');

module.exports = Object.assign(stylelintConfigStandard,
  {
    customSyntax: "postcss-less",
    rules:
    {
      'no-missing-end-of-source-newline': editorconfig.insert_final_newline,
      'indentation': editorconfig.indent_size,
      'no-eol-whitespace': editorconfig.trim_trailing_whitespace
      "font-family-name-quotes": "always-where-recommended",
      "property-no-vendor-prefix": null
    }
  }
);
