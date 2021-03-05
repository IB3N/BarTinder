import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import UserContext from './context/UserContext';

import Main from './screens/Main';
import Auth from './screens/Auth';

export default function App() {
  const userHook = React.useState({});

  const FirstPage = () => {
    const isUserLoggedIn = Object.keys(userHook[0]).length;
    return isUserLoggedIn ? <Main /> : <Auth />;
  };

  return (
    <UserContext.Provider value={userHook}>
      <SafeAreaProvider>
        <FirstPage />
      </SafeAreaProvider>
    </UserContext.Provider>
  );
}
