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

import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.goBackText}>←</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={styles.TWBContainer}
        >
          <View style={styles.main}>
            <Image
              source={require('../assets/tumblerSmall.png')}
              style={styles.logo}
            />
            <View style={styles.form}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Username..."
                  placeholderTextColor={Colours.green}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
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
  },
  TWBContainer: {
    alignSelf: 'center',
    marginTop: 180,
  },
  main: {},
  logo: {
    marginBottom: 50,
    width: 140,
    height: 140,
  },
});

{
  /* <KeyboardAvoidingView
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
style={styles.container}
>
<Button style={styles.backButton} title="←" />
<Text style={styles.backButtonText} onPress={() => navigation.goBack()}>
  ←
</Text>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={styles.inner}>
    <View style={styles.form}>
      <Image
        source={require('../assets/tumblerSmall.png')}
        style={styles.logo}
      />
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
          placeholder="Username..."
          placeholderTextColor={Colours.green}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
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
</KeyboardAvoidingView> */
}

// container: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: Colours.charcoal,
// },
// inner: {
//   flex: 1,
//   width: windowWidth,
//   height: windowHeight,
//   justifyContent: 'center',
//   alignItems: 'center',
//   alignSelf: 'stretch',
// },
// backButton: {
//   flex: 1,
//   alignSelf: 'flex-start',
// },
// backButtonText: {
//   fontSize: 30,
//   color: Colours.yellow,
//   fontWeight: '800',
//   paddingTop: 50,
//   paddingLeft: 30,
// },
// form: {
//   flex: 2.5,
// },
// logo: {
//   marginBottom: 60,
//   width: 140,
//   height: 140,
// },
// input: {
//   padding: 10,
//   marginBottom: 10,
//   flexDirection: 'row',
//   justifyContent: 'space-evenly',
//   borderColor: Colours.brown,
//   borderStyle: 'solid',
//   borderWidth: 1,
//   borderRadius: 10,
// },
// inputLabel: {},
// textInput: {},
