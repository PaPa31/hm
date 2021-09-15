const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  globals: {
    testStylelintRule: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-hooks', 'header'],
  rules: {
    'class-methods-use-this': OFF, // It's a way of allowing private variables.
    'func-names': OFF,
    // Ignore certain webpack alias because it can't be resolved
    'import/no-unresolved': [
      ERROR,
      {ignore: ['^@theme', '^@docusaurus', '^@generated', 'unist', 'mdast']},
    ],
    'import/extensions': OFF,
    'header/header': [
      ERROR,
      'block',
      [
        '*',
        ' * Copyright (c) hm',
        ' *',
        ' * This source code is licensed under the MIT license found in the',
        ' * LICENSE file in the root directory of this source tree.',
        ' ',
      ],
    ],
    'jsx-a11y/click-events-have-key-events': WARNING,
    'jsx-a11y/no-noninteractive-element-interactions': WARNING,
    'jsx-a11y/html-has-lang': OFF,
    'no-console': OFF,
    'no-else-return': OFF,
    'no-param-reassign': [WARNING, {props: false}],
    'no-underscore-dangle': OFF,
    curly: [WARNING, 'all'],
    'react/jsx-closing-bracket-location': OFF, // Conflicts with Prettier.
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/no-array-index-key': OFF, // Sometimes its ok, e.g. non-changing data.
    'react/prop-types': OFF,
    'react/destructuring-assignment': OFF, // Too many lines.
    'react/prefer-stateless-function': WARNING,
    'react/jsx-props-no-spreading': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react/require-default-props': [ERROR, {ignoreFunctionalComponents: true}],
    '@typescript-eslint/no-inferrable-types': OFF,
    'import/first': OFF,
    'import/order': OFF,
    'import/prefer-default-export': OFF,
    'lines-between-class-members': OFF,
    'no-lonely-if': WARNING,
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      {functions: false, classes: false, variables: true},
    ],
    'no-unused-vars': OFF,
    'no-nested-ternary': WARNING,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF, // Have to use type assertion anyways
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {argsIgnorePattern: '^_', ignoreRestSiblings: true},
    ],
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {'ts-expect-error': 'allow-with-description'},
    ],

    // TODO re-enable some these as errors
    // context: https://github.com/facebook/docusaurus/pull/2949
    '@typescript-eslint/ban-types': WARNING,
    'import/no-extraneous-dependencies': ERROR,
    'no-useless-escape': WARNING,
    'prefer-template': WARNING,
    'no-template-curly-in-string': WARNING,
    'array-callback-return': WARNING,
    camelcase: WARNING,
    'no-restricted-syntax': WARNING,
    'no-unused-expressions': WARNING,
    'global-require': WARNING,
    'prefer-destructuring': WARNING,
    yoda: WARNING,
    'no-control-regex': WARNING,
    'no-empty': [WARNING, {allowEmptyCatch: true}],
    'no-prototype-builtins': WARNING,
    'no-case-declarations': WARNING,
    'no-undef': OFF,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    'no-redeclare': OFF,
    '@typescript-eslint/no-redeclare': ERROR,
  },
  overrides: [
    {
      files: [
        'packages/docusaurus-init/templates/**/*.js',
        'packages/docusaurus-init/templates/**/*.ts',
        'packages/docusaurus-init/templates/**/*.tsx',
      ],
      rules: {
        'header/header': OFF,
        'global-require': OFF,
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': OFF,
      },
    },
    {
      files: ['*.js'],
      rules: {
        // Make JS code directly runnable in Node.
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
      },
    },
  ],
};
