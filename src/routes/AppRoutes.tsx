import React from 'react';
import { createAppContainer } from 'react-navigation';
import Toast from 'react-native-toast-message';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerShown: false,
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
      headerLeft: ()=> null
    },
  }
});

const AppContainer =  createAppContainer(App);

const ToastContainer = () => <>
                              <AppContainer/> 
                              <Toast ref={(ref) => Toast.setRef(ref)} />
                            </>

export default ToastContainer;