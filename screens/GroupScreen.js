import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';
import GroupItem from '../components/GroupItem';
import TopBarButtons from '../components/TopBarButtons';

const GroupScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.groupScreenContainer}>
      <TopBarButtons navigation={navigation} route={route} />
      <GroupItem header="Birthday Party!" matches={8} people={24} />
      <GroupItem header="Family" matches={13} people={4} />
      <GroupItem header="Best Mate" matches={3} people={1} />
      <View style={styles.createGroupButton}>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('CreateGroupForm', {})}
        >
          <Text style={ButtonStyles.buttonText}>+ Create a Group</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  groupScreenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colours.sienna,
  },
  createGroupButton: {
    marginBottom: 50,
  },
});
