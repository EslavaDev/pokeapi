module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.mjs',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
