import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={[styles.container, styles.flexCenter]}>
      <Image
        source={require('../assets/tumblerSmall.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('Swipe', {})}
      >
        <Text style={ButtonStyles.buttonText}>Swipe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('Groups', {})}
      >
        <Text style={ButtonStyles.buttonText}>Groups</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('Profile', {})}
      >
        <Text style={ButtonStyles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
  },
  logo: {
    marginBottom: 60,
    width: 140,
    height: 140,
  },
});
