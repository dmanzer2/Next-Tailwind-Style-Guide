module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            mergeRules: true,
            minifySelectors: true,
            minifyFontValues: true,
            minifyParams: true,
          },
        ],
      },
    }),
  },
};
