import 'react-native';
import React from 'react';
import WordComponent from '../../src/components/composite/WordComponent';
import renderer, { create } from 'react-test-renderer';

const mockAddToFavouriteFunc = () => console.log('added to favoutites'),
mockWordItem = {
      "definition": "a nocturnal bird of prey with large eyes, a facial disc, a hooked beak, and typically a loud hooting call.", 
      "emoji": "🦉", 
      "example": "I love reaching out into that absolute silence, when you can hear the owl or the wind.", 
      "image_url": "https://media.owlbot.info/dictionary/images/owl.jpg.400x400_q85_box-403,83,960,640_crop_detail.jpg", 
      "type": "noun", 
      "word": "owl"
    },
mockIndex = 0;

it('WordComponent renders correctly', () => {
  renderer.create(<WordComponent wordItem={mockWordItem} index={mockIndex} addToFavourites={mockAddToFavouriteFunc} />);
});

test('WordComponent snapshot', () => {
  const tree = create(<WordComponent wordItem={mockWordItem} index={mockIndex} addToFavourites={mockAddToFavouriteFunc} />);
  expect(tree).toMatchSnapshot();
});
