import 'react-native';
import React from 'react';
import Row from '../../src/screens/Layout/Row';
import renderer, { create } from 'react-test-renderer';

it('Row component renders correctly', () => {
  renderer.create(<Row />);
});

test('Row snapshot', () => {
  const tree = create(<Row/>);
  expect(tree).toMatchSnapshot();
});
