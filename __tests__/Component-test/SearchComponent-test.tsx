import 'react-native';
import React from 'react';
import SearchComponent from '../../src/components/composite/SearchComponent';

import renderer, { create } from 'react-test-renderer';

const mockSearchedWord = "Owl",
  mockinitiateSearch = () => console.log("search initiated"),
  mockOnSearchWordChange = () => console.log("search word changed");

it('SearchComponent renders correctly', () => {
  renderer.create(<SearchComponent initiateSearch={mockinitiateSearch} searchedWord={mockSearchedWord} onSearchWordChange={mockOnSearchWordChange} />);
});

test('SearchComponent snapshot', () => {
  const tree = create(<SearchComponent initiateSearch={mockinitiateSearch} searchedWord={mockSearchedWord} onSearchWordChange={mockOnSearchWordChange} />);;
  expect(tree).toMatchSnapshot();
});
