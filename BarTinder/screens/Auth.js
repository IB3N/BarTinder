import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from '../navigation/AuthStack';

const Auth = ({ handleLogin }) => {
  return (
    <NavigationContainer style={styles.bgWhite}>
      <AuthStack handleLogin={handleLogin} />
    </NavigationContainer>
  );
};

export default Auth;

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: 'white',
  },
});
