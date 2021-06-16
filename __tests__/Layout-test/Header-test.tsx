import 'react-native';
import React from 'react';
import Header from '../../src/screens/Layout/Header';
import renderer, { create } from 'react-test-renderer';

it('Header component renders correctly', () => {
  renderer.create(<Header />);
});

test('Header snapshot', () => {
  const tree = create(<Header/>);
  expect(tree).toMatchSnapshot();
});