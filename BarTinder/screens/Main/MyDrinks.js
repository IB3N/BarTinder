/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import Colours from '../../assets/colours';

import TopBarButtons from '../../components/TopBarButtons';
import CocktailCard from '../../components/CocktailCard';

import UserContext from '../../context/UserContext';
import api from '../../apiService';
import TheCocktailDB from '../../apiService/TheCocktailDB';

const windowWidth = Dimensions.get('window').width;

const MyDrinks = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const [likes, setLikes] = React.useState([]);

  // Initial call to api to get users likes (drink id's)
  React.useEffect(() => {
    api
      .getLikes(user.id)
      .then((fetchedLikes) =>
        Promise.all(
          fetchedLikes.map(({ drinkId }) =>
            TheCocktailDB.getOne(drinkId).then((drink) => drink.drinks[0]),
          ),
        ).then((drinks) => setLikes(drinks)),
      );
  }, []);

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
        data={likes}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => <CocktailCard cocktail={item} />}
        style={styles.drinks}
      />
    </SafeAreaView>
  );
};

export default MyDrinks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.charcoal,
  },
  drinks: {
    maxWidth: windowWidth,
    flex: 1,
    alignSelf: 'center',
  },
});
