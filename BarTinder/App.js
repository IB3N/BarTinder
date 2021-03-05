import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Main from './screens/Main';
import Auth from './screens/Auth';

export default function App() {
  const [user, setUser] = React.useState({});

  const handleLogin = (newUser) => {
    setUser(newUser);
  };

  const FirstPage = () => {
    const isUserLoggedIn = Object.keys(user).length;
    return isUserLoggedIn ? (
      <Main handleLogin={handleLogin} />
    ) : (
      <Auth handleLogin={handleLogin} />
    );
  };

  return (
    <SafeAreaProvider>
      <FirstPage />
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
