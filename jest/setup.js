import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('axios');
jest.useFakeTimers();
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-toast-message', () => ({
    show: jest.fn(),
    hide: jest.fn()
  }));

jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon')

jest.mock('react-native-splash-screen', () => ({
    show: jest.fn().mockImplementation( () => { console.log('show splash screen'); } ),
    hide: jest.fn().mockImplementation( () => { console.log('hide splash screen'); } ),
  }));
