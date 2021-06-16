import 'react-native';
import React from 'react';
import Button from '../../src/components/Button';
import renderer, { create } from 'react-test-renderer';

it('Button renders correctly', () => {
  renderer.create(<Button />);
});

test('Button snapshot', () => {
  const tree = create(<Button />);
  expect(tree).toMatchSnapshot();
});
