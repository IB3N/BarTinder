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
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';
import UserContext from '../../context/UserContext';
import api from '../../apiService';

const Register = ({ navigation, route }) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [_, setUser] = React.useContext(UserContext);

  const handleRegister = async () => {
    const newUser = {
      firstName,
      lastName,
      username,
      password,
      email,
    };

    const response = await api.register('register', options);
    if (!response.ok) Alert.alert('Could not register');
    else {
      setUser(newUser);
    }
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
              source={require('../../assets/tumblerSmall.png')}
              style={styles.logo}
            />
            <View>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First name..."
                placeholderTextColor={Colours.green}
              />
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last name..."
                placeholderTextColor={Colours.green}
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email..."
                placeholderTextColor={Colours.green}
              />
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username..."
                placeholderTextColor={Colours.green}
              />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password..."
                placeholderTextColor={Colours.green}
                secureTextEntry={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          style={[ButtonStyles.button, styles.register]}
          onPress={handleRegister}
        >
          <Text style={ButtonStyles.buttonText}>Register</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
    padding: 10,
    minWidth: 200,
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: Colours.brown,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  register: {
    alignSelf: 'center',
  },
});
