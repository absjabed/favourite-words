import 'react-native';
import React from 'react';
import Picker from '../../src/components/Picker';
import renderer, { create } from 'react-test-renderer';

  const placeholder = {
    label: 'Select type...',
    value: null,
    color: '#000',
  },
  favTypes = [{ label: "verb", value: "verb" },{ label: "noun", value: "noun" },{ label: "adverb", value: "adverb" }],
  mockOnPickerValueChanged = (value: any) => console.log("Picked value changed to", value),
  mockSelectedOption = "noun";

it('Picker renders correctly', () => {
  renderer.create(
              <Picker
                placeholder={placeholder}
                items={favTypes}
                onValueChange={(value) => mockOnPickerValueChanged(value)}
                value={mockSelectedOption}
                useNativeAndroidPickerStyle={false}
              />
              );
});

test('Picker snapshot', () => {
  const tree = create(
              <Picker
                placeholder={placeholder}
                items={favTypes}
                onValueChange={(value) => mockOnPickerValueChanged(value)}
                value={mockSelectedOption}
                useNativeAndroidPickerStyle={false}
              />
  );
  expect(tree).toMatchSnapshot();
});
