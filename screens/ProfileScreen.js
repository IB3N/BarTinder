import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';
import InfoRow from '../components/InfoRow';
import TopBarButtons from '../components/TopBarButtons';

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.profileScreenContainer}>
      <TopBarButtons navigation={navigation} route={route} />
      <View style={styles.profilePictureContainer}>
        <Text style={styles.profilePicture}>👨‍🦳</Text>
      </View>
      <View style={styles.infoContainer}>
        <InfoRow header="USERNAME" info="IB3N" />
        <InfoRow header="EMAIL" info="benpearce9@live.co.uk" />
        <InfoRow header="PASSWORD" info="change" />
      </View>
      <View style={styles.deleteContainer}>
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

export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  profilePictureContainer: {
    alignSelf: 'center',
    backgroundColor: Colours.charcoal,
    borderRadius: 200,
    padding: 20,
    marginVertical: 40,
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
