import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../constants/Colors/Colors';
import Row from '../screens/Layout/Row';
import AppButton from './Button';
import AppTextInput from './TextInput';


type Props = {
    initiateSearch: () => void;
    onSearchWordChange: (word: string) => void;
    searchedWord: string;
  };

const SearchComponent = ({initiateSearch, onSearchWordChange, searchedWord}: Props) => {
  return (
    <Row style={styles.container}>
        <View style={{width:'80%'}}>
            <AppTextInput
                placeholder="Search Dictionary"
                value={searchedWord}
                onChangeText={(value: string)=> onSearchWordChange(value)}
                showSoftInputOnFocus={false}
            />
        </View>
        <View style={styles.buttonStyle}>
            <AppButton onPress={()=>  initiateSearch()} title="Search"></AppButton>
        </View>
        <Icon style={styles.iconStyle} name="search" size={20} color={Colors.lightGray} />
    </Row>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    display:'flex', 
    flexDirection:'row', 
    width:'100%', 
    justifyContent:'center', 
    alignContent:'center', 
    alignItems:'center'
  },
  buttonStyle:{
      paddingBottom:10, 
      justifyContent:'center', 
      alignItems:'center'
    },
  iconStyle: {
      position:'absolute', 
      left:10, 
      bottom:15
    },
});
