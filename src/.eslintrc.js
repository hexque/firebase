module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['@typescript-eslint', 'no-relative-import-paths'],
  ignorePatterns: ['.eslintrc.js'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'no-debugger': 'warn',
    'import/order': ['off'],
    'import/no-cycle': ['off', { maxDepth: 1 }],
    'react/display-name': ['warn'],
    'react/require-default-props': ['off'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'react/button-has-type': 'off',
    'no-alert': 'off',
    'no-magic-numbers': 'error',
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],
    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    'max-depth': ['warn', 2],
    'max-len': ['warn', { code: 130 }],
    'max-lines-per-function': [
      'warn',
      {
        max: 260,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],
    'no-async-promise-executor': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-negated-condition': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-undefined': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'always', prev: ['export'], next: '*' }
    ],
    'prefer-object-spread': 'error',
    'wrap-regex': 'error',
    radix: ['error', 'as-needed'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'import/exports-last': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/jsx-sort-props': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-unsafe': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: ['function-expression', 'arrow-function']
      }
    ],
    'max-params': ['error', 3],
    'max-lines': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'no-relative-import-paths/no-relative-import-paths': ['error', { rootDir: 'src' }],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'strictCamelCase', 'PascalCase', 'StrictPascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      }
    ],
    'react/jsx-closing-bracket-location': [1, {
      'nonEmpty': 'after-props' || false,
      'selfClosing': 'tag-aligned' || false
    }],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ]
  }
};
