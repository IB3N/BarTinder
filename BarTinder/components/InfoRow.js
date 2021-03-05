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
    color: Colours.charcoal,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  infoText: {
    color: Colours.charcoal,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
