module.exports = {
    extends: 'universe',
    rules: {
      // this is for sorting WITHIN an import
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      // this is for sorting imports
      'import/order': [
        'error',
        {
          groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
          pathGroups: [
            {
              pattern: '@(react|react-native)',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@assets/**',
              group: 'internal',
            },
            {
              pattern: '@components/**',
              group: 'internal',
            },
            {
              pattern: '@contexts/**',
              group: 'internal',
            },
            {
              pattern: '@routes/**',
              group: 'internal',
            },
            {
              pattern: '@screens/**',
              group: 'internal',
            },
            {
              pattern: '@storage/**',
              group: 'internal',
            },
            {
              pattern: '@theme/**',
              group: 'internal',
            },
            {
              pattern: '@utils/**',
              group: 'internal',
            },
            {
              pattern: '@hooks/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  };
  