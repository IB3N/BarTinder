import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colours from '../assets/colours';

export default function InfoRow({ header, info }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoTextHeader}>{header}: </Text>
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 7,
  },
  infoTextHeader: {
    color: Colours.green,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'B',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  infoText: {
    color: Colours.green,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'P',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});
