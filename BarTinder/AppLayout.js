import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';

import Main from './screens/Main';
import Auth from './screens/Auth';
import Splash from './splash/Splash';

export default function AppLayout() {
  const user = useSelector((state) => state.user.user);

  let [fontsLoaded] = useFonts({
    L: require('./assets/fonts/Lato-Regular.ttf'),
    B: require('./assets/fonts/BebasNeue-Regular.ttf'),
    P: require('./assets/fonts/PatuaOne-Regular.ttf'),
  });

  const FirstPage = () => {
    return Object.keys(user).length ? <Main /> : <Auth />;
  };

  if (!fontsLoaded) {
    return <Splash />;
  } else {
    return (
      <SafeAreaProvider>
        <FirstPage />
      </SafeAreaProvider>
    );
  }
}
