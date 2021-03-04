import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GroupScreen from '../screens/GroupScreen';
import SwipeScreen from '../screens/SwipeScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';
import CreateGroupFormScreen from '../screens/CreateGroupFormScreen';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'BarTinder', headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Groups"
        component={GroupScreen}
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
        component={SwipeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Delete" component={DeleteAccountScreen} />
      <Stack.Screen name="CreateGroupForm" component={CreateGroupFormScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
