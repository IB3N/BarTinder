/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Colours from '../../assets/colours';
import TopBarButtons from '../../components/TopBarButtons';
import CocktailCard from '../../components/CocktailCard';
import Splash from '../../splash/Splash';
const windowWidth = Dimensions.get('window').width;

const MyDrinks = ({ navigation, route }) => {
  const likes = useSelector((state) => state.user.likes);
  const cocktails = useSelector((state) => state.cocktails);

  // TODO:
  const filteredByLikes = cocktails.filter((cocktail) => {
    return !likes.some(({ drinkId }) => drinkId === +cocktail.idDrink);
  });

  return (
    <SafeAreaView style={styles.container}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      {!likes.length ? (
        <Splash />
      ) : (
        <FlatList
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={filteredByLikes}
          keyExtractor={(item) => item.idDrink}
          renderItem={({ item }) => <CocktailCard cocktail={item} />}
          style={styles.drinks}
        />
      )}
    </SafeAreaView>
  );
};

export default MyDrinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.charcoal,
  },
  shaker: {
    flex: 1,
    padding: 50,
  },
  drinks: {
    maxWidth: windowWidth,
    flex: 1,
    alignSelf: 'center',
  },
});
