import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';

const LoginRegister = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/tumblerSmall.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={ButtonStyles.button}>
        <Text
          style={ButtonStyles.buttonText}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={ButtonStyles.button}>
        <Text
          style={ButtonStyles.buttonText}
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colours.charcoal,
  },
  logo: {
    marginBottom: 60,
    width: 140,
    height: 140,
  },
});
