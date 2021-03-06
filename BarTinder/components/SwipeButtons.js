import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colours from '../assets/colours';

const SwipeButtons = ({ handleSwipe, handleForwardBack }) => {
  return (
    <View style={styles.swipeButtons}>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleSwipe(false)}
      >
        <Text style={styles.swipeButton}>❌</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleForwardBack(-1)}
      >
        <Text style={styles.swipeButton}>⇠</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleForwardBack(1)}
      >
        <Text style={styles.swipeButton}>⇢</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleSwipe(true)}
      >
        <Text style={styles.swipeButton}>❤️</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwipeButtons;

const styles = StyleSheet.create({
  swipeButtons: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  swipeButtonTouchable: {
    backgroundColor: Colours.brown,
    borderRadius: 50,
    shadowColor: Colours.charcoal,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  swipeButton: {
    fontSize: 30,
    padding: 10,
    margin: 10,
  },
});
