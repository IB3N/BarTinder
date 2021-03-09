/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../assets/colours';

import TopBarButtons from '../../components/TopBarButtons';
import CocktailCardTest from '../../components/CocktailCardTest';
import SwipeButtons from '../../components/SwipeButtons';

import api from '../../apiService';
import TheCocktailDB from '../../apiService/TheCocktailDB';

import CocktailContext from '../../context/CocktailContext';
import UserContext from '../../context/UserContext';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const Swipe = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const [cocktails, __] = React.useContext(CocktailContext);

  const [current, setCurrent] = React.useState(0); // Keeps track of the cocktail index in the cocktails array
  const [cocktail, setCocktail] = React.useState({});

  // function that will call the api for each new cocktail
  const fetchCocktail = async (id) => {
    await TheCocktailDB.getOne(id).then((drink) =>
      setCocktail(drink.drinks[0]),
    );
  };

  // Initial call to The Cocktail DB to get one full cocktail object
  // Ingredients and measures included
  React.useEffect(() => {
    fetchCocktail(cocktails[current].idDrink);
  }, []);

  // Update current cocktail to use new cocktail index
  React.useEffect(() => {
    fetchCocktail(cocktails[current].idDrink);
  }, [current]);

  // When a user likes or dislikes a cocktail
  const handleSwipe = async (likeOrDislike) => {
    await api.swipe(user.id, cocktail.idDrink, likeOrDislike); // Add this cocktail to users likes list
    setCurrent((prev) => prev + 1); // Update cocktail index to begin to render next cocktail
  };

  // When a user wants to load a new drink without liking/disliking
  const handleNextCocktail = (direction) => {
    const newIndex = current + direction;
    if (newIndex < 0 || newIndex >= cocktails.length) return; // handle edge cases where index is less than one or greater than array length
    setCurrent((prev) => prev + direction);
  };

  const renderCocktails = () => {
    // make this its own component
    return cocktails
      .map((item, i) => {
        return (
          <CocktailCardTest
            key={item.idDrink}
            cocktail={cocktails[i]}
            handleSwipe={handleSwipe}
            handleNextCocktail={handleNextCocktail}
            current={current}
            setCurrent={setCurrent}
          />
        );
      })
      .reverse();
  };

  // I want to make some swipes here
  return (
    <SafeAreaView style={styles.swipeScreenContainer}>
      <TopBarButtons navigation={navigation} route={route} />
      <CocktailCardTest
        handleSwipe={handleSwipe}
        handleNextCocktail={handleNextCocktail}
        current={current}
        setCurrent={setCurrent}
      />
      {/* {Object.keys(cocktail).length ? renderCocktails() : <Text>Loading</Text>} */}
      <SwipeButtons
        handleSwipe={handleSwipe}
        handleForwardBack={handleNextCocktail}
      />
    </SafeAreaView>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  swipeScreenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colours.charcoal,
  },
});
