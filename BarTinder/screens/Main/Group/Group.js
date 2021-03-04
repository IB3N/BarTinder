import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';
import GroupItemButton from '../../../components/GroupItemButton';
import TopBarButtons from '../../../components/TopBarButtons';

const Group = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.groupScreenContainer}>
      <TopBarButtons navigation={navigation} route={route} />
      <GroupItemButton
        header="Birthday Party!"
        matches={8}
        people={24}
        navigation={navigation}
        route={route}
      />
      <GroupItemButton
        header="Family"
        matches={13}
        people={4}
        navigation={navigation}
        route={route}
      />
      <GroupItemButton
        header="Best Mate"
        matches={3}
        people={1}
        navigation={navigation}
        route={route}
      />
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

export default Group;

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
