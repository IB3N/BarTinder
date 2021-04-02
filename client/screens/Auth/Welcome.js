import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';

const Welcome = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>BarTinder</Text>
      <Image
        source={require('../../assets/tumblerSmall.png')}
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
    marginBottom: 100,
    width: 140,
    height: 140,
  },
  welcome: {
    fontSize: 60,
    color: Colours.green,
    textAlign: 'center',
    fontFamily: 'B',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});
