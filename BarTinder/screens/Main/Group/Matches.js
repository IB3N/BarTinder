/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import Colours from '../../../assets/colours';

import TopBarButtons from '../../../components/TopBarButtons';
import CocktailCard from '../../../components/CocktailCard';

import GroupsContext from '../../../context/GroupsContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Matches = ({ navigation, route }) => {
  const [groups, _] = React.useContext(GroupsContext);
  return (
    <SafeAreaView style={styles.container}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={groups.matches}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => <CocktailCard cocktail={item} />}
        style={styles.drinks}
      />
    </SafeAreaView>
  );
};

export default Matches;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.charcoal,
  },
  drinks: {
    maxWidth: windowWidth,
  },
});
