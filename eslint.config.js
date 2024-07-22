import stylistic from '@stylistic/eslint-plugin'
import tslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import pluginImport from 'eslint-plugin-import'
import reacthooks from 'eslint-plugin-react-hooks'

export default {
  plugins: {
    tslint,
    '@stylistic': stylistic,
    '@typescript-eslint/parser': tsparser,
    'react-hooks': reacthooks,
    pluginimport: pluginImport,
  },
  rules: {
    '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],
    '@stylistic/no-extra-semi': 'error',
    'pluginimport/extensions': ['error', 'always', { ignorePackages: true }],
    'pluginimport/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true } },
    ],
  },
}
