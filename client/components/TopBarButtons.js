import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colours from '../assets/colours';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TopBarButtons = ({ navigation, route }) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-sharp"
          size={34}
          color={Colours.green}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialIcons
          name="home"
          size={34}
          color={Colours.green}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile', route)}>
        <Ionicons
          name="person-sharp"
          size={30}
          color={Colours.green}
          style={styles.icon}
        />
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
    padding: 10,
    borderBottomColor: Colours.green,
    borderBottomWidth: 1,
  },
  icon: {
    shadowColor: '#000000aa',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2,
  },
});
