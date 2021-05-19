module.exports = {
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
  },
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': require.resolve(
      'react-native/jest/assetFileTransformer.js',
    ),
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-native-iphone-x-helper|react-native|react-test-renderer/.*|@react-navigation/.*|@react-native(-community)?)/)',
  ],
  setupFiles: [require.resolve('react-native/jest/setup.js')],
  testEnvironment: 'node',
};
