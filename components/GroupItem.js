import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colours from '../assets/colours';

export default function GroupItem({ header, matches, people }) {
  return (
    <View style={styles.groupContainer}>
      <Text style={styles.groupHeader}>{header}</Text>
      <View style={styles.groupInfo}>
        <Text style={styles.groupInfoText}>Matches: {matches}</Text>
        <Text style={styles.groupInfoText}>People: {people}</Text>
      </View>
    </View>
  );
}

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
  },
});
