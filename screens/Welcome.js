import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';

const Welcome = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to BarTinder!</Text>
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

export default Welcome;

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
  welcome: {
    fontSize: 36,
    paddingBottom: 48,
    color: Colours.green,
    textAlign: 'center',
  },
});
