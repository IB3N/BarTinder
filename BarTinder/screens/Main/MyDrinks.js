/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DrinksList from './DrinksList';
import TopBarButtons from '../../components/TopBarButtons';
import UserContext from '../../context/UserContext';
import api from '../../apiService';
import TheCocktailDB from '../../apiService/TheCocktailDB';
import { FlatList } from 'react-native-gesture-handler';
import GroupItem from './Group/GroupItem';
import CocktailCard from '../../components/CocktailCard';

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
    <SafeAreaView>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <FlatList
        data={likes}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => <CocktailCard cocktail={item} />}
      />
    </SafeAreaView>
  );
};

export default MyDrinks;

const styles = StyleSheet.create({});
