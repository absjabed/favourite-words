import 'react-native';
import React from 'react';
import SearchScreen from '../../src/screens/SearchScreen';
import renderer, { create } from 'react-test-renderer';

it('Search Screen renders correctly', () => {
  renderer.create(<SearchScreen />);
});

test('Search Screen snapshot', () => {
  const tree = create(<SearchScreen/>);
  expect(tree).toMatchSnapshot();
});

