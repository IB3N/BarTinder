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

import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const Login = ({ navigation, route }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
              <View style={styles.input}>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Username..."
                  placeholderTextColor={Colours.green}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password..."
                  placeholderTextColor={Colours.green}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={ButtonStyles.button}>
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
