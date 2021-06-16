import 'react-native';
import React from 'react';
import SegmentTabComponent from '../../src/components/composite/SegmentTabComponent';
import renderer, { create } from 'react-test-renderer';

const mockIsOnSearchView = true,
  mockChangeViewFunc = () => console.log("view changed");

it('SegmentTabComponent renders correctly', () => {
  renderer.create(<SegmentTabComponent isOnSearch={mockIsOnSearchView} changeView={mockChangeViewFunc}/>);
});

test('SegmentTabComponent snapshot', () => {
  const tree = create(<SegmentTabComponent isOnSearch={mockIsOnSearchView} changeView={mockChangeViewFunc}/>);
  expect(tree).toMatchSnapshot();
});
