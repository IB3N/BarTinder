/* eslint-disable react/prop-types */
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colours from '../assets/colours';

import api from '../apiService';
import TheCocktailDB from '../apiService/TheCocktailDB';

const GroupItemButton = ({ header, navigation, groupId }) => {
  const [members, setMembers] = React.useState([]);
  const [matches, setMatches] = React.useState([]);

  // initial call to get members of group
  React.useEffect(() => {
    api
      .getMembers(groupId)
      .then((fetchedMembers) => setMembers(fetchedMembers));
  }, []);

  // Find matches for all users in the group
  React.useEffect(() => {
    const memberIds = members.map((member) => member.userId); // [1, 2, 3]
    api.getMatches(memberIds).then((fetchedMatches) =>
      Promise.all(
        fetchedMatches
          .filter((item) => item.count > 1) // Filter only matches greater than 2
          .sort((a, b) => b.count - a.count) // Sort them in ascending order
          .map((match) =>
            TheCocktailDB.getOne(match.drinkId).then((drink) => ({
              ...match,
              ...drink.drinks[0],
            })),
          ),
      ).then((drinks) => setMatches(drinks)),
    );
  }, [members]);

  return (
    <View style={styles.groupContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('GroupItem', { members, matches, groupId })
        }
      >
        <Text style={styles.groupHeader}>{header}</Text>
        <View style={styles.groupInfo}>
          <Text style={styles.groupInfoText}>Matches: {matches.length}</Text>
          <Text style={styles.groupInfoText}>
            People: {members.length || 1}
          </Text>
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
    shadowColor: '#000000aa',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  groupHeader: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    padding: 5,
    color: Colours.charcoal,
    fontFamily: 'B',
  },
  groupInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  groupInfoText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colours.charcoal,
    opacity: 0.8,
    fontFamily: 'P',
  },
});
