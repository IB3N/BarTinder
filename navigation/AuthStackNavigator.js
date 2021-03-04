import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginRegister from '../screens/LoginRegister';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="LoginRegister"
        component={LoginRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
