import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Search from '../screens/SearchScreen'
import Favourite from '../screens/FavoutriteScreen'
import Container from '../components/Container';
import SegmentTab from '../components/composite/SegmentTabComponent';
import Colors from '../constants/Colors/Colors';

type Props = {
  navigation?: NavigationScreenProp<any,any>
};

type State = {
  isOnSearch: boolean
};

export default class HomeScreen extends React.Component<Props, State> {

    state: State = {
        isOnSearch: true
    }

  constructor(props: Props) {
    super(props);
  }

  changeView = () => {
    this.setState((prevState) => ({ isOnSearch: !prevState.isOnSearch }));
  }

  componentDidMount(){
    console.log('Home Screen mounted')
  }

  componentWillUnmount(){
    console.log('Home Screen unmounted')
  }

  render() {
    return (
      <View
        style={styles.container}>
        <SegmentTab isOnSearch={this.state.isOnSearch} changeView={this.changeView} />
        <View style={styles.screenContainer}>
            <Container>
                {
                    this.state.isOnSearch ? 
                    (<Search/>)
                    :
                    (<Favourite/>)
                }   
            </Container>
        </View>
        <Image resizeMode="stretch" style={styles.image} source={require('../../assets/images/wave.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
  },
  screenContainer:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  image: {
    width: "100%",
    height: 90,
    borderWidth: 1,
    opacity: .4,
    zIndex: 10,
    margin: 5,
    alignSelf:'center',
  },
});