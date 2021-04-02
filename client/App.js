import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import UserContext from './context/UserContext';

import Main from './screens/Main';
import Auth from './screens/Auth';
import Splash from './splash/Splash';

export default function App() {
  const userHook = React.useState({});

  const user = Object.keys(userHook[0]);
  let [fontsLoaded] = useFonts({
    L: require('./assets/fonts/Lato-Regular.ttf'),
    B: require('./assets/fonts/BebasNeue-Regular.ttf'),
    P: require('./assets/fonts/PatuaOne-Regular.ttf'),
  });

  const FirstPage = () => {
    return user.length ? <Main /> : <Auth />;
  };

  if (!fontsLoaded) {
    return <Splash />;
  } else {
    return (
      <UserContext.Provider value={userHook}>
        <SafeAreaProvider>
          <FirstPage />
        </SafeAreaProvider>
      </UserContext.Provider>
    );
  }
}
