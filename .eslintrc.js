module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/core-modules': [
      'webpack',
      'html-webpack-plugin',
      'autoprefixer',
      'terser-webpack-plugin',
      'optimize-css-assets-webpack-plugin',
      'favicons-webpack-plugin',
    ],
  },
};
