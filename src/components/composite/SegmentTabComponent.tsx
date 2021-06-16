import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors/Colors';
import Row from '../../screens/Layout/Row';
import AppText from '../Text';


type Props = {
    isOnSearch: boolean;
    changeView: () => void;
  };

const SegmentTab = ({isOnSearch, changeView}: Props) => {
  return (
    <Row style={styles.container}>
        <Pressable style={{...styles.searchButtonStyle,  backgroundColor: isOnSearch ? Colors.activeColor : Colors.deactiveColor}} onPress={()=> changeView()}>
            <AppText style={{...styles.text, color: isOnSearch ? Colors.white : Colors.placeholderColor, fontWeight: isOnSearch ? '600' : '100'}}>
                Search Dictionary
            </AppText>
        </Pressable>
        <Pressable style={{...styles.favouriteButtonStyle, backgroundColor: isOnSearch ? Colors.deactiveColor : Colors.activeColor}} onPress={()=> changeView()}>
            <AppText style={{...styles.text, color: isOnSearch ? Colors.placeholderColor : Colors.white, fontWeight: isOnSearch ? '100' : '600'}}>
                View Favourites
            </AppText>
        </Pressable>
    </Row>
  );
};

export default SegmentTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20, 
    justifyContent:'center',
    backgroundColor: Colors.darkBackground
  },
  searchButtonStyle:{
    padding:10, 
    borderTopLeftRadius: 7, 
    borderBottomLeftRadius: 7, 
    borderLeftColor: Colors.grey, 
    borderTopColor: Colors.grey, 
    borderBottomColor: Colors.grey, 
    borderWidth: 0.8 
  },
  favouriteButtonStyle:{
    padding:10,
    borderTopRightRadius: 7, 
    borderBottomRightRadius: 7,
    borderRightColor: Colors.grey, 
    borderTopColor: Colors.grey, 
    borderBottomColor: Colors.grey, 
    borderWidth: 0.8
  },
  text: {
    fontSize: 13,
    color: Colors.white,
    fontFamily:'Ubuntu-Regular',
    justifyContent: 'center',
  },
});
