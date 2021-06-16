import 'react-native';
import React from 'react';
import FavoutriteScreen from '../../src/screens/FavoutriteScreen';
import renderer, { create } from 'react-test-renderer';

it('Favoutrite Screen renders correctly', () => {
  renderer.create(<FavoutriteScreen />);
});

test('Favoutrite Screen snapshot', () => {
  const tree = create(<FavoutriteScreen/>);
  expect(tree).toMatchSnapshot();
});
