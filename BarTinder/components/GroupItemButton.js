/* eslint-disable react/prop-types */
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colours from '../assets/colours';

import api from '../apiService';

const GroupItemButton = ({ header, navigation, route, groupId }) => {
  const [members, setMembers] = React.useState([]);
  const [matches, setMatches] = React.useState([]);

  // initial call to get members of group
  React.useEffect(() => {
    api
      .getMembers(groupId)
      .then((fetchedMembers) => setMembers(fetchedMembers));
  }, []);

  // Find matches for all users in the group

  return (
    <View style={styles.groupContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('GroupItem', { navigation, route })}
      >
        <Text style={styles.groupHeader}>{header}</Text>
        <View style={styles.groupInfo}>
          {/* <Text style={styles.groupInfoText}>Matches: {matches.length}</Text> */}
          <Text style={styles.groupInfoText}>People: {members.length}</Text>
        </View>
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
  groupInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  groupInfoText: {
    fontSize: 18,
    fontWeight: '700',
    color: Colours.charcoal,
    opacity: 0.8,
  },
});
