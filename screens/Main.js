import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from '../navigation/MainStackNavigator';

const Main = () => {
  return (
    <NavigationContainer style={styles.bgWhite}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: 'white',
  },
});
