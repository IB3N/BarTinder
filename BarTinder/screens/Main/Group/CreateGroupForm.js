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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const CreateGroupForm = ({ navigation, route }) => {
  const [groupName, setGroupName] = React.useState('');

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
              <TouchableOpacity style={ButtonStyles.button}>
                <Text style={ButtonStyles.buttonText}>Create Group</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    color: Colours.sienna,
  },
});
