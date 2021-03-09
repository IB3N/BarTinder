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
  // id: 1,
  // firstName: 'Ben',
  // lastName: 'Pearce',
  // email: 'ben@email.com',
  // username: 'Ben',
  // password: 'ben',
  // friends: null,
  // createdAt: '2021-03-09T10:39:06.060Z',
  // updatedAt: '2021-03-09T10:39:06.060Z',

  const user = Object.keys(userHook[0]);
  let [fontsLoaded] = useFonts({
    L: require('./assets/fonts/Lato-Regular.ttf'),
    B: require('./assets/fonts/BebasNeue-Regular.ttf'),
    P: require('./assets/fonts/PatuaOne-Regular.ttf'),
  });
  // const fontsLoaded = false;

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
