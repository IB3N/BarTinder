import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';

import UserContext from '../../context/UserContext';

const Home = ({ navigation, route }) => {
  const [user, setUser] = React.useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>BarTinder</Text>
      <Image
        source={require('../../assets/tumblerSmall.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('MyDrinks', {})}
      >
        <Text style={ButtonStyles.buttonText}>My Drinks</Text>
      </TouchableOpacity>
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

export default Home;

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
    fontWeight: '500',
  },
});
