import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Layout : React.FC<ViewProps> = ({children}) => {
  return <View style={styles.screen}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontFamily: 'Ubuntu-Regular',
  },
});
