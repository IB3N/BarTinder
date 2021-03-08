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
import GroupsContext from '../../../context/GroupsContext';
import api from '../../../apiService/index';

const Group = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const groupsHook = React.useState(GroupsContext);

  // Initial call to api to get users groups
  React.useEffect(() => {
    // Groups
    api
      .getGroupIds(user.id)
      .then((fetchedGroupIds) =>
        Promise.all(
          fetchedGroupIds.map(({ groupId }) =>
            api.getGroup(groupId).then((group) => group),
          ),
        ).then((fetchedGroups) => groupsHook[1](fetchedGroups)),
      );
  }, []);

  // initial call to get members of group
  // React.useEffect(() => {
  //   Promise.all(
  //     groups.map(({ id }) =>
  //       api.getMembers(id).then((fetchedMembers) => setMembers(fetchedMembers)),
  //     ),
  //   ).then(groupsHook[1]([...groups]));
  // }, [groups]);

  // // Find matches for all users in the group
  // React.useEffect(() => {
  //   const memberIds = members.map((member) => member.userId); // [1, 2, 3]
  //   api.getMatches(memberIds).then((fetchedMatches) =>
  //     Promise.all(
  //       fetchedMatches
  //         .sort((a, b) => b.count - a.count)
  //         .map((match) =>
  //           TheCocktailDB.getOne(match.drinkId).then((drink) => ({
  //             ...match,
  //             ...drink.drinks[0],
  //           })),
  //         ),
  //     ).then((drinks) => setMatches(drinks)),
  //   );
  // }, [members]);

  return (
    <GroupsContext.Provider value={groupsHook}>
      <SafeAreaView style={styles.groupScreenContainer}>
        <TopBarButtons navigation={navigation} route={route} />
        {/* TODO: remove next line */}
        {console.log(groupsHook)}
        <View style={styles.createGroupButton}>
          <TouchableOpacity
            style={ButtonStyles.button}
            onPress={() => navigation.navigate('CreateGroupForm')}
          >
            <Text style={[ButtonStyles.buttonText, styles.createGroup]}>
              + Create a Group
            </Text>
          </TouchableOpacity>
        </View>
        {groupsHook[0].length ? (
          <FlatList
            data={groupsHook[0]}
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
      </SafeAreaView>
    </GroupsContext.Provider>
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
