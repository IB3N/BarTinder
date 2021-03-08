import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import UserContext from './context/UserContext';

import Main from './screens/Main';
import Auth from './screens/Auth';

export default function App() {
  const userHook = React.useState({
    id: 1,
    firstName: 'Ben',
    lastName: 'Pearce',
    email: 'benpearce9@live.co.uk',
    username: 'Ben',
    password: 'ben',
    friends: null,
    createdAt: '2021-03-06T13:01:58.565Z',
    updatedAt: '2021-03-06T13:01:58.565Z',
  });
  const user = Object.keys(userHook[0]);

  const FirstPage = () => {
    return user.length ? <Main /> : <Auth />;
  };

  return (
    <UserContext.Provider value={userHook}>
      <SafeAreaProvider>
        <FirstPage />
      </SafeAreaProvider>
    </UserContext.Provider>
  );
}
