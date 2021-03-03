import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colours from '../assets/colours';

export default function DeleteAccountScreen() {
  return (
    <View>
      <Text>Are you sure you want to delete your account?</Text>
      <Button title="Yes" />
      <Button title="No" />
    </View>
  );
}
