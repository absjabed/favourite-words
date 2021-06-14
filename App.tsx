import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/AppRoutes'
import SplashScreen from 'react-native-splash-screen'
import Layout from './src/screens/Layout/Layout';
import Header from './src/screens/Layout/Header';

const App = () => {

   useEffect(() => {
     SplashScreen.hide();
   }, [])

   return (
    <NavigationContainer>
      <Layout>
          <Header/>
          <Routes/>
      </Layout>
    </NavigationContainer>
   );
 };

 export default App;
