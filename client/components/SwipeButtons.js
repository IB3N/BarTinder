/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Colours from '../assets/colours';

const SwipeButtons = ({ like, dislike, handleRefresh }) => {
  return (
    <View style={styles.swipeButtons}>
      <TouchableOpacity style={styles.swipeButtonTouchable} onPress={dislike}>
        <Image
          source={require('../assets/icons/dislike/sienna.png')}
          style={styles.likeIcons}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.swipeButtonTouchable}
        onPress={handleRefresh}
      >
        <Image
          source={require('../assets/icons/refresh/sienna.png')}
          style={styles.refreshIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.swipeButtonTouchable} onPress={like}>
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
    borderTopColor: Colours.sienna,
    borderTopWidth: 1,
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
    marginBottom: -20,
  },
  refreshIcon: {
    height: 40,
    width: 40,
  },
});
