/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../../assets/colours';
import TopBarButtons from '../../components/TopBarButtons';
import CocktailCard from '../../components/CocktailCard';
import SwipeButtons from '../../components/SwipeButtons';
import api from '../../apiService';
import TheCocktailDB from '../../apiService/TheCocktailDB';
import CocktailContext from '../../context/CocktailContext';
import UserContext from '../../context/UserContext';

const Swipe = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const [cocktails, __] = React.useContext(CocktailContext);

  const [current, setCurrent] = React.useState(0); // Keeps track of the cocktail index in the cocktails array
  const [fullCocktail, setFullCocktail] = React.useState({});
  const [recipe, setRecipe] = React.useState({});

  // function that will call the api for each new cocktail
  const fetchFullCocktail = async (id) => {
    await TheCocktailDB.getOne(id).then((drink) =>
      setFullCocktail(drink.drinks[0]),
    );
  };

  // This function is because my api has some weird data structure,
  // Each ingredient is stored as a property on an object...
  // rather than an array of ingredients from one prop ?!?!?
  const loadRecipe = () => {
    const loadedRecipe = [];
    let i = 0;
    let { strIngredient1, strMeasure1 } = fullCocktail;
    while (strIngredient1) {
      loadedRecipe[i] = {
        ingred: strIngredient1,
        measure: strMeasure1,
      };
      i++;
      strIngredient1 = fullCocktail[`strIngredient${i + 1}`];
      strMeasure1 = fullCocktail[`strMeasure${i + 1}`];
    }
    setRecipe(loadedRecipe);
  };

  // Initial call to The Cocktail DB to get one full cocktail object
  // Ingredients and measures included
  React.useEffect(() => {
    fetchFullCocktail(cocktails[current].idDrink);
  }, []);

  // Update current cocktail to use new cocktail index
  React.useEffect(() => {
    fetchFullCocktail(cocktails[current].idDrink);
  }, [current]);

  // Every time full cocktail is changed, set recipe from new full cocktail
  React.useEffect(() => {
    loadRecipe();
  }, [fullCocktail]);

  // When a user likes or dislikes a cocktail
  const handleSwipe = async (likeOrDislike) => {
    await api.swipe(user.id, fullCocktail.idDrink, likeOrDislike); // Add this cocktail to users likes list
    setCurrent((prev) => prev + 1); // Update cocktail index to begin to render next cocktail
  };

  // When a user wants to load a new drink without liking/disliking
  const handleForwardBack = (direction) => {
    const newIndex = current + direction;
    if (newIndex < 0 || newIndex >= cocktails.length) return; // handle edge cases where index is less than one or greater than array length
    setCurrent((prev) => prev + direction);
  };

  return (
    <SafeAreaView style={styles.swipeScreenContainer}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <CocktailCard currentCocktail={cocktails[current]} recipe={recipe} />
      <SwipeButtons
        handleSwipe={handleSwipe}
        handleForwardBack={handleForwardBack}
      />
    </SafeAreaView>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  swipeScreenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colours.green,
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
});
