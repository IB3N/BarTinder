/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';

import GroupItemButton from '../../../components/GroupItemButton';
import TopBarButtons from '../../../components/TopBarButtons';

import UserContext from '../../../context/UserContext';
import api from '../../../apiService/index';

const Group = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const [groups, setGroups] = React.useState([]);

  // Initial call to api to get users groups
  React.useEffect(() => {
    api
      .getGroupIds(user.id)
      .then((fetchedGroupIds) =>
        Promise.all(
          fetchedGroupIds.map(({ groupId }) =>
            api.getGroup(groupId).then((group) => group[0]),
          ),
        ).then((fetchedGroups) => setGroups(fetchedGroups)),
      );
  }, []);

  return (
    <SafeAreaView style={styles.groupScreenContainer}>
      <TopBarButtons navigation={navigation} route={route} />
      <Text style={styles.header}>Groups</Text>
      {groups.length ? (
        <FlatList
          data={groups}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <GroupItemButton
              header={item.name}
              navigation={navigation}
              route={route}
              groupId={item.id}
            />
          )}
          style={styles.flatlist}
        />
      ) : (
        <Text>Loading</Text>
      )}
      <View style={styles.createGroupButton}>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('CreateGroupForm', {})}
        >
          <Text style={[ButtonStyles.buttonText, styles.createGroup]}>
            + Create a Group
          </Text>
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
    backgroundColor: Colours.charcoal,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    padding: 10,
    marginLeft: 20,
    color: Colours.yellow,
    alignSelf: 'flex-start',
  },
  createGroupButton: {
    marginTop: 15,
  },
  flatlist: {
    alignSelf: 'stretch',
  },
  createGroup: {
    paddingVertical: 5,
  },
});
