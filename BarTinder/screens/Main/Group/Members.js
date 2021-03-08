/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput } from 'react-native-gesture-handler';

import Colours from '../../../assets/colours';
import TopBarButtons from '../../../components/TopBarButtons';
import Member from '../../../components/Member';
import GroupsContext from '../../../context/GroupsContext';
import api from '../../../apiService';

const Members = ({ navigation, route }) => {
  const [member, setMember] = React.useState('');
  const [groups, setGroups] = React.useContext(GroupsContext);
  const [groupId, _] = React.useState(groups.members[0].groupId);

  // Get full member details
  const getMemberDetails = () => {
    Promise.all(
      groups.members.map(({ userId }) =>
        api.getUser(userId).then((user) => user),
      ),
    ).then((users) =>
      setGroups({
        ...groups,
        members: users,
      }),
    );
  };

  // initial call to get full member details of group
  // React.useEffect(() => {
  //   getMemberDetails();
  // }, []);

  // When member gets added to group
  const addMember = async () => {
    await api.addMember(groupId, member).then((member) =>
      setGroups({
        ...groups,
        members: [...groups.members, member],
      }),
    );
    setMember(''); // reset text input field
  };

  return (
    <SafeAreaView style={styles.container}>
      {console.log(groups)}
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <View style={styles.addMember}>
        <TextInput
          style={styles.input}
          value={member}
          onChangeText={setMember}
          placeholder="Add Member..."
          placeholderTextColor={Colours.green}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.addMemberTO} onPress={addMember}>
          <Text style={styles.addMemberButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.memberContainer}>
        {groups.members[0].id ? (
          <FlatList
            data={groups.members}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Member member={item} />}
          />
        ) : (
          <Text> Loading</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.charcoal,
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  addMember: {
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginHorizontal: 15,
    marginVertical: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colours.green,
    borderRadius: 5,
  },
  input: {
    flex: 1,
  },
  addMemberTO: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: Colours.yellow,
  },
  addMemberButton: {
    padding: 12,
  },
  memberContainer: {
    alignSelf: 'stretch',
    margin: 15,
  },
});
