import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';

import InfoRow from '../../../components/InfoRow';
import TopBarButtons from '../../../components/TopBarButtons';

import UserContext from '../../../context/UserContext';

const Profile = ({ navigation, route }) => {
  const [{ username, firstName, lastName, email }, setUser] = React.useContext(
    UserContext,
  );

  return (
    <SafeAreaView style={styles.profileScreenContainer}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <Text style={styles.profileHeader}>
        {(firstName + ' ' + lastName).toUpperCase()}
      </Text>
      <View style={styles.infoContainer}>
        <InfoRow header="USERNAME" info={username} />
        <InfoRow header="EMAIL" info={email} />
        <InfoRow header="PASSWORD" info="change" />
      </View>
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => setUser({})}
        >
          <Text style={ButtonStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('Delete', {})}
        >
          <Text style={ButtonStyles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: Colours.charcoal,
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  profileHeader: {
    fontSize: 65,
    marginTop: 50,
    color: Colours.green,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'B',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  infoContainer: {
    marginVertical: 40,
  },
  deleteContainer: {
    alignSelf: 'center',
  },
});
