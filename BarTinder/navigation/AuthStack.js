import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Auth/Welcome';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';

const Stack = createStackNavigator();

const AuthStack = ({ handleLogin }) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="LoginRegister"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        handleLogin={handleLogin}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
        handleLogin={handleLogin}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
