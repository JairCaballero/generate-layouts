import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig } from "eslint/config";


export default defineConfig([
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
])