import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../constants/Colors/Colors';
import AppText from '../Text';

type Props = {
  removeFromFavourites: (item: any) => void;
    wordItem: any;
    index: number;
  };

const FavouriteWordComponent = ({removeFromFavourites, index, wordItem}: Props) => {
  return (
    <View style={{ ...styles.cardShadow, ...styles.container}} key={index} >
        <View style={{flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{backgroundColor: Colors.primary, fontSize: 14, borderRadius:7, fontFamily:'Ubuntu-Bold', padding:5, color: Colors.white}}>{wordItem.word}</Text>
                <Text style={{fontFamily:'Ubuntu-Regular', textDecorationLine:'underline', padding:5, color: Colors.white}}>{wordItem.type}</Text>
            </View>
            <Icon onPress={()=> removeFromFavourites(wordItem)} style={{position:'absolute', right:0, top: 0}} name="delete" size={24} color={Colors.secondaryGradientEnd} />
            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-Regular', color: Colors.white}} >{wordItem.definition}</AppText>
            {wordItem.image_url ? (<View>
                <Image style={styles.image}  source={{uri:wordItem.image_url}} />
                </View>) : <></>}
            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-MediumItalic', color: Colors.grey}} >"{wordItem.example}"</AppText>
        </View>
    </View>
  );
};

export default FavouriteWordComponent;

const styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection:'row', 
    backgroundColor: Colors.cardBackground, 
    padding:10, 
    borderRadius:10, 
    marginBottom: 10
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
    borderColor: Colors.grey
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    borderColor: "white",
    alignSelf:'center',
  },
});
