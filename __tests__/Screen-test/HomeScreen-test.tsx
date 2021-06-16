import 'react-native';
import React from 'react';
import Home from '../../src/screens/HomeScreen';
import renderer, { create } from 'react-test-renderer';

it('Home Screen renders correctly', () => {
  renderer.create(<Home />);
});

test('Home Screen snapshot', () => {
  const tree = create(<Home/>);
  expect(tree).toMatchSnapshot();
});

