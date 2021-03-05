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
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';
import UserContext from '../../context/UserContext';
import api from '../../apiService';

const initialCredentials = {
  username: '',
  password: '',
};

const Login = ({ navigation, route }) => {
  const [credentials, setCredentials] = React.useState(initialCredentials);
  const [_, setUser] = React.useContext(UserContext);

  const handleLogin = async () => {
    const response = await api.login(credentials); // Call api service
    !response.ok ? Alert.alert('Could not register') : setUser(credentials);
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
                value={credentials.username}
                onChangeText={(input) =>
                  setCredentials((previousCredentials) => ({
                    ...credentials,
                    username: input,
                  }))
                }
                placeholder="Username..."
                placeholderTextColor={Colours.green}
              />
              <TextInput
                style={styles.input}
                value={credentials.password}
                onChangeText={(input) =>
                  setCredentials((previousCredentials) => ({
                    ...previousCredentials,
                    password: input,
                  }))
                }
                placeholder="Password..."
                placeholderTextColor={Colours.green}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={ButtonStyles.button}
                onPress={handleLogin}
              >
                <Text style={ButtonStyles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
    marginBottom: 10,
    flexDirection: 'row',
    borderColor: Colours.brown,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
});
