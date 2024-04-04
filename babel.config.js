module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // [
    //   '@babel/plugin-proposal-decorators',
    //   {
    //     legacy: true,
    //   },
    // ],
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@types': './src/types',
          '@navigation': './src/navigation',
          '@images': './src/images',
          '@icons': './src/icons',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
