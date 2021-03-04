import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from '../navigation/AuthStack';

const Main = () => {
  return (
    <NavigationContainer style={styles.bgWhite}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: 'white',
  },
});
