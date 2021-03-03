import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from 'react-native';
import Colours from '../assets/colours';
import oldFashioned from '../assets/oldFashioned.svg';

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={[styles.container, styles.flexCenter]}>
      <Image
        source={require('../assets/oldFashioned.svg')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Swiping</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create a group</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Profile', { name: 'Ben' })}
        >
          Profile
        </Text>
      </TouchableOpacity>
      <Button
        title="Home again, home again"
        onPress={() => navigation.push('Home')}
      />
      <Button title="Go Home" onPress={() => navigation.popToTop()} />
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
  },
  button: {
    width: 150,
    textAlign: 'center',
    borderColor: Colours.yellow,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: Colours.yellow,
    marginBottom: 20,
    shadowColor: Colours.charcoal,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    color: Colours.charcoal,
    fontWeight: '600',
    textAlign: 'center',
  },
});
