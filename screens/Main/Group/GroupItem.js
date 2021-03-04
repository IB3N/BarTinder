import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colours from '../../../assets/colours';
import ButtonStyles from '../../../assets/button.styles';
import TopBarButtons from '../../../components/TopBarButtons';
import { TextInput } from 'react-native-gesture-handler';

const GroupItem = ({ navigation, route }) => {
  const [member, setMember] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TopBarButtons navigation={navigation} route={route} />
      <View style={styles.addMember}>
        <TextInput
          style={styles.input}
          value={member}
          onChangeText={setMember}
          placeholder="Email or Username..."
          placeholderTextColor={Colours.charcoal}
        />
        <TouchableOpacity style={styles.addMemberTO}>
          <Text style={styles.addMemberButton}>+</Text>
        </TouchableOpacity>
      </View>
      <Text>Matches</Text>
    </SafeAreaView>
  );
};

export default GroupItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    borderColor: Colours.charcoal,
    borderRadius: 5,
  },
  addMemberTO: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: Colours.sienna,
  },
  addMemberButton: {
    padding: 12,
  },
  input: {},
});
