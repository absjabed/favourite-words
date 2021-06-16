import 'react-native';
import React from 'react';
import Container from '../../src/components/Container';
import renderer, { create } from 'react-test-renderer';

it('Container renders correctly', () => {
  renderer.create(<Container />);
});

test('Container snapshot', () => {
  const tree = create(<Container/>);
  expect(tree).toMatchSnapshot();
});
