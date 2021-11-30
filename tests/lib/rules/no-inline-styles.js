import path from "path";

import rule from "../../../lib/rules/no-inline-styles.js";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
});

ruleTester.run("no-inline-styles", rule, {
  valid: ['html`<div class="fake-name"></div>`'],
  invalid: [],
});
