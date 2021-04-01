import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Main/Home';
import Profile from '../screens/Main/Profile/Profile';
import MyDrinks from '../screens/Main/MyDrinks';
import Swipe from '../screens/Main/Swipe';
import DeleteAccount from '../screens/Main/Profile/DeleteAccount';
import GroupStack from '../navigation/GroupStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'BarTinder', headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Groups"
        component={GroupStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Swipe"
        component={Swipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyDrinks"
        component={MyDrinks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Delete"
        component={DeleteAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
