import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import Icon  from 'react-native-vector-icons/FontAwesome5';

const Picker: React.FC<PickerSelectProps> = (props: PickerSelectProps) => (
  <RNPickerSelect 
    {
      ...props
    }
    style={pickerSelectStyles}
    
    Icon={() => {
      return <Icon style={{left: 5, marginTop:15}} name="caret-down" />;
    }}
  >
  </RNPickerSelect>
);

export default Picker;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: '100%',
  },
  inputAndroid: {
    width: '100%',
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 7,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});