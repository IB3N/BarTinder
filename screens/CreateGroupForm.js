import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Colours from '../assets/colours';

export default function CreateGroupForm() {
  return (
    <View>
      <Text>Lets create a group</Text>
      <Button title="Yes" />
      <Button title="No" />
    </View>
  );
}
