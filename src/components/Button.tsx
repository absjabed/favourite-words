import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors/Colors';
const AppButton = (props: any) => {
  return (
    <TouchableOpacity style={{...styles.button, ...props.style}} disabled={props.disabled} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 7,
    color: Colors.white,
    padding: 10,
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold'
  },
});
export default AppButton;