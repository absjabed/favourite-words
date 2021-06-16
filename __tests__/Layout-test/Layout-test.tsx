import 'react-native';
import React from 'react';
import Layout from '../../src/screens/Layout/Layout';
import renderer, { create } from 'react-test-renderer';

it('Layout component renders correctly', () => {
  renderer.create(<Layout />);
});

test('Layout snapshot', () => {
  const tree = create(<Layout/>);
  expect(tree).toMatchSnapshot();
});
