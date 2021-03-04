import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Group from '../screens/Group';
import Swipe from '../screens/Swipe';
import DeleteAccount from '../screens/DeleteAccount';
import CreateGroupForm from '../screens/CreateGroupForm';
import { Button } from 'react-native';

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
        component={Group}
        options={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="<"
              color="black"
              style={{ backgroundColor: 'grey' }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Swipe"
        component={Swipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Delete" component={DeleteAccount} />
      <Stack.Screen name="CreateGroupForm" component={CreateGroupForm} />
    </Stack.Navigator>
  );
};

export default MainStack;