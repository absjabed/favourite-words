/*Custom TextInput*/
import React from 'react';
import { View, TextInput } from 'react-native';
import Colors from '../constants/Colors/Colors';
const AppTextInput = (props: any) => {
  return (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderColor: Colors.gray,
        borderRadius: 7,
        borderWidth: 1,
        height: 40
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor= {Colors.darkGray}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        textAlign="center"
        ref={props.refInner}
        blurOnSubmit={false}
        onFocus={props.onFocus}
        showSoftInputOnFocus={props.showSoftInputOnFocus}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        editable={props.editable}
        value={props.value}
      />
    </View>
  );
};
export default AppTextInput;