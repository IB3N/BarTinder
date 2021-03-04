import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colours from '../assets/colours';

const TopBarButtons = ({ navigation, route }) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>←</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.topBarButton}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', route)}>
        <Text style={styles.topBarButton}>🤓</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBarButtons;

const styles = StyleSheet.create({
  topBar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 10,
  },
  topBarButton: {
    fontSize: 24,
  },
  appName: {
    fontWeight: '700',
    fontSize: 18,
  },
  goBackText: {
    fontSize: 30,
    color: Colours.yellow,
    fontWeight: '800',
  },
});
