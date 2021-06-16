import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors/Colors';
const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
            <Text style={styles.text}>Dictionary Word Finder</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 25,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    backgroundColor: Colors.darkTitleBackground,
  },
  container: {
    width: '100%',
    height: 35,
    maxHeight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    flexDirection: 'row',
    fontSize: 16,
    color: Colors.white,
    fontFamily:'Ubuntu-Regular',
    justifyContent: 'center',
  },
});
