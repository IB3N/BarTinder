import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colours from '../assets/colours';

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={[styles.container, styles.flexCenter]}>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
  },
});
