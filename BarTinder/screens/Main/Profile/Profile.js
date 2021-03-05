import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';

import InfoRow from '../../../components/InfoRow';
import TopBarButtons from '../../../components/TopBarButtons';

import UserContext from '../../../context/UserContext';

const Profile = ({ navigation, route }) => {
  const [user, setUser] = React.useContext(UserContext);

  return (
    <SafeAreaView style={styles.profileScreenContainer}>
      <TopBarButtons navigation={navigation} route={route} />
      <View style={styles.profilePictureContainer}>
        <Text style={styles.profilePicture}>👨‍🦳</Text>
      </View>
      <View style={styles.infoContainer}>
        <InfoRow header="USERNAME" info={user.username} />
        <InfoRow header="NAME" info={user.firstName} />
        <InfoRow header="SURNAME" info={user.lastName} />
        <InfoRow header="EMAIL" info={user.email} />
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
    backgroundColor: Colours.green,
  },
  profilePictureContainer: {
    alignSelf: 'center',
    backgroundColor: Colours.charcoal,
    borderRadius: 200,
    padding: 20,
    marginTop: 20,
  },
  profilePicture: {
    fontSize: 100,
  },
  infoContainer: {
    marginVertical: 40,
  },
  deleteContainer: {
    alignSelf: 'center',
  },
});
