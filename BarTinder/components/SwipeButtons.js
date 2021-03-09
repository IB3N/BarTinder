/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Colours from '../assets/colours';

const SwipeButtons = ({ handleSwipe, handleRefresh }) => {
  return (
    <View style={styles.swipeButtons}>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleSwipe(false)}
      >
        <Image
          source={require('../assets/icons/dislike/sienna.png')}
          style={styles.likeIcons}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleRefresh()}
      >
        <Image
          source={require('../assets/icons/refresh/sienna.png')}
          style={styles.refreshIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={() => handleSwipe(true)}
      >
        <Image
          source={require('../assets/icons/like/sienna.png')}
          style={styles.likeIcons}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SwipeButtons;

const styles = StyleSheet.create({
  swipeButtons: {
    flex: 0.1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  swipeButtonTouchable: {
    shadowColor: Colours.charcoal,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  likeIcons: {
    height: 60,
    width: 60,
  },
  refreshIcon: {
    height: 40,
    width: 40,
  },
});
