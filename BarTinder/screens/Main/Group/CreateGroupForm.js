/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import UserContext from '../../../context/UserContext';
import GroupsContext from '../../../context/GroupsContext';

import api from '../../../apiService';

const windowWidth = Dimensions.get('window').width;

const CreateGroupForm = ({ navigation, route }) => {
  const [groupName, setGroupName] = React.useState('');
  const [user, setUser] = React.useContext(UserContext);
  const [groups, setGroups] = React.useContext(GroupsContext);

  // Call api to create group and insert user into that group
  const handleCreateGroup = async () => {
    if (!groupName) {
      Alert.alert('Please enter a group name');
      return;
    }
    await api.createGroup(groupName).then((group) => {
      setGroups((prevGroups) => [...prevGroups, group]);
      api.addMember(group.id, user.email);
    });
    setGroupName('');
    navigation.navigate('Group');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.goBackText}>←</Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={styles.TWBContainer}
        >
          <View>
            <Image
              source={require('../../../assets/tumblerSmall.png')}
              style={styles.logo}
            />
            <View>
              <View style={styles.input}>
                <TextInput
                  value={groupName}
                  onChangeText={setGroupName}
                  placeholder="Group name..."
                  placeholderTextColor={Colours.green}
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={[ButtonStyles.button, styles.createGroupButton]}
          activeOpacity={0.3}
          onPress={handleCreateGroup}
        >
          <Text style={ButtonStyles.buttonText}>Create Group</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CreateGroupForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.charcoal,
  },
  safeContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  goBackText: {
    fontSize: 30,
    color: Colours.yellow,
    fontWeight: '800',
    paddingTop: 30,
    paddingLeft: 30,
    alignSelf: 'flex-start',
  },
  backButtonContainer: {
    flex: 0.5,
  },
  TWBContainer: {
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 30,
    width: 100,
    height: 100,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    borderColor: Colours.brown,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    minWidth: windowWidth / 2,
    color: Colours.sienna,
  },
  createGroupButton: {
    alignSelf: 'center',
  },
});
