import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colours from '../assets/colours';

const GroupScreen = ({ navigation, route }) => {
  return (
    <View style={[styles.container, styles.flexCenter]}>
      <Text>Groups</Text>
    </View>
  );
};

export default GroupScreen;

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
