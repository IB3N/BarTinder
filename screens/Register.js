import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';

const Register = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={() => navigation.goBack()}>
          ←
        </Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <Image
          source={require('../assets/tumblerSmall.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={ButtonStyles.button}>
          <Text style={ButtonStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ButtonStyles.button}>
          <Text style={ButtonStyles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.charcoal,
  },
  backButton: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 30,
    color: Colours.yellow,
    fontWeight: '800',
    padding: 20,
  },
  form: {
    flex: 2.5,
  },
  logo: {
    marginBottom: 60,
    width: 140,
    height: 140,
  },
});
