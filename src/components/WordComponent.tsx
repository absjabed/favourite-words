import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../constants/Colors/Colors';
import AppText from './Text';

type Props = {
    addToFavourites: (item: any) => void;
    wordItem: any;
    index: number;
  };

const WordComponent = ({addToFavourites, index, wordItem}: Props) => {
  return (
    <View style={{ ...styles.cardShadow, flex:1, flexDirection:'row', backgroundColor:'#fff', padding:10, borderRadius:10, marginBottom: 10}} key={index} >
        <View style={{flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{backgroundColor: Colors.primary, borderRadius:7, justifyContent:'flex-start',  fontFamily:'Ubuntu-Regular', padding:5, color: Colors.white, alignSelf:'center'}}>{wordItem.type}</Text>
            <Icon onPress={()=> addToFavourites(wordItem)} style={{position:'absolute', right:0, top: 0}} name="heart-o" size={20} color={Colors.secondaryGradientEnd} />
            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-Bold', color: Colors.black}} >{wordItem.definition}</AppText>
            {wordItem.image_url ? (<View>
                <Image style={styles.image}  source={{uri:wordItem.image_url}} />
                </View>) : <></>}
            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-MediumItalic', color: Colors.darkGray}} >"{wordItem.example}"</AppText>
        </View>
    </View>
  );
};

export default WordComponent;

const styles = StyleSheet.create({
  container: {
    display:'flex', 
    flexDirection:'row', 
    width:'100%', 
    justifyContent:'center', 
    alignContent:'center', 
    alignItems:'center'
  },
  cardShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 3,

    borderWidth:0.3,
    borderRadius:10,
    borderColor:'green'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
  },
});
