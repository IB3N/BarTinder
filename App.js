import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colours from './assets/colours';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import GroupScreen from './screens/GroupScreen';
import SwipeScreen from './screens/SwipeScreen';
import DeleteAccountScreen from './screens/DeleteAccountScreen';
import CreateGroupFormScreen from './screens/CreateGroupFormScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Stacks = () => {
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
          headerShown: true,
        })}
      />
      <Stack.Screen
        name="Groups"
        component={GroupScreen}
        options={{ headerShown: true }}
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

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.bgWhite}>
        <Stacks />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: 'white',
  },
});

// const ProfileStack = createStackNavigator();

// const Profile = () => {
//   return (
//     <ProfileStack.Navigator mode="modal">
//       <ProfileStack.Screen />
//     </ProfileStack.Navigator>
//   );
// };

// const Tab = createMaterialTopTabNavigator();
// const Tabs = () => {
//   return (
//     <Tab.Navigator style={{ paddingTop: 30 }} swipeEnabled={false}>
//       <Tab.Screen
//         name="Home"
//         component={Stacks}
//         options={{
//           tabBarButton: () => <Text>Hello!</Text>,
//         }}
//       />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };
