import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
            <Text style={styles.text}>Dictonary Word Finder</Text>
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
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#f2f2f2',
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
    fontFamily:'Ubuntu-Regular',
    justifyContent: 'center',
  },
});
