import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors/Colors';
import Row from '../screens/Layout/Row';
import AppText from './Text';


type Props = {
    isOnSearch: boolean;
    changeView: () => void;
  };

const SegmentTab = ({isOnSearch, changeView}: Props) => {
  return (
    <Row style={styles.container}>
        <Pressable style={{...styles.searchButtonStyle, backgroundColor: isOnSearch ? Colors.primary : Colors.primaryLight }} onPress={()=> changeView()}>
            <AppText style={styles.text}>
                Search Dictionary
            </AppText>
        </Pressable>
        <Pressable style={{...styles.favouriteButtonStyle, backgroundColor: isOnSearch ? Colors.primaryLight : Colors.primary}} onPress={()=> changeView()}>
            <AppText style={styles.text}>
                View Favourites
            </AppText>
        </Pressable>
    </Row>
  );
};

export default SegmentTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10, 
    justifyContent:'center',
    backgroundColor: '#fff'
  },
  searchButtonStyle:{
    padding:10, 
    borderTopLeftRadius: 7, 
    borderBottomLeftRadius: 7, 
    backgroundColor: Colors.primary
  },
  favouriteButtonStyle:{
    padding:10,
    borderTopRightRadius: 7, 
    borderBottomRightRadius: 7,  
    backgroundColor: Colors.primaryLight
  },
  text: {
    fontSize: 13,
    color: '#fff',
    fontFamily:'Ubuntu-Regular',
    justifyContent: 'center',
  },
});
