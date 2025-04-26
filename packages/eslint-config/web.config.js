import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

import baseConfig, { ALL_JS_FILES } from './base.config.js';

export default defineConfig([
  {
    files: [ALL_JS_FILES],
    extends: [baseConfig],
  },
  pluginReact.configs.flat.recommended,
  {
    files: [ALL_JS_FILES],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
