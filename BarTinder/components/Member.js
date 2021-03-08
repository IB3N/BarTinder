import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colours from '../assets/colours';

const Member = ({ member }) => {
  const { firstName, lastName, email } = member;
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text}>
          {firstName} {lastName}
        </Text>
      </View>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default Member;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colours.green,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    minWidth: '40%',
    backgroundColor: Colours.brown,
    paddingVertical: 10,
    paddingLeft: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: Colours.charcoal,
  },
  email: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 15,
    paddingLeft: 20,
  },
});
