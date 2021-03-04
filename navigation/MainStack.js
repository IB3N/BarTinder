import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Main/Home';
import Profile from '../screens/Main/Profile/Profile';
import Group from '../screens/Main/Group/Group';
import Swipe from '../screens/Main/Swipe';
import DeleteAccount from '../screens/Main/Profile/DeleteAccount';
import CreateGroupForm from '../screens/Main/Group/CreateGroupForm';
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
