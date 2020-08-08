module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-underscore-dangle': ['error', { allow: ['_id', '__v'] }],
    'no-restricted-syntax': [0, 'ForOfStatement'],
    'default-case': [0],
    'no-continue': [0],
    'no-await-in-loop': [0],
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
