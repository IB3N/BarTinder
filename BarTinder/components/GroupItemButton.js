/* eslint-disable react/prop-types */
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colours from '../assets/colours';

const GroupItemButton = ({ header, navigation, route, groupId }) => {
  const [members, setMembers] = React.useState([]);
  const [matches, setMatches] = React.useState([]);

  return (
    <View style={styles.groupContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('GroupItem', { navigation, route })}
      >
        <Text style={styles.groupHeader}>{header}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupItemButton;

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: Colours.green,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'stretch',
    marginVertical: 15,
    marginHorizontal: 30,
  },
  groupHeader: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    padding: 5,
    color: Colours.charcoal,
  },
});
