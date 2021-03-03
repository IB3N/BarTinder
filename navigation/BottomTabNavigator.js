import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colours from '../assets/colours';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ProfileScreen = () => {
  return (
    <View style={styles.flexCenter}>
      <Text>Profile</Text>
    </View>
  );
};

const SwipeScreen = () => {
  return (
    <View styles={styles.flexCenter}>
      <Text>Swipe</Text>
    </View>
  );
};

const GroupScreen = () => {
  return (
    <View styles={styles.flexCenter}>
      <Text>Groups</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.screen name="Profile" component={ProfileScreen} />
      <Tab.screen name="Swipe" component={SwipeScreen} />
      <Tab.screen name="Group" component={GroupScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 60,
  },
  button: {
    width: 150,
    textAlign: 'center',
    borderColor: Colours.yellow,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: Colours.yellow,
    marginBottom: 10,
    shadowColor: Colours.charcoal,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    color: Colours.charcoal,
    fontWeight: '600',
  },
});

<View style={[styles.container, styles.flexCenter]}>
  <Text style={styles.logo}>🥃</Text>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Get Swiping</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Create a group</Text>
  </TouchableOpacity>
</View>;
