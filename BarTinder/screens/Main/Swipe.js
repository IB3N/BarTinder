/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import Colours from '../../assets/colours';
import TopBarButtons from '../../components/TopBarButtons';
import CocktailContext from '../../context/CocktailContext';
import TheCocktailDB from '../../apiService/TheCocktailDB';
import api from '../../apiService';
import UserContext from '../../context/UserContext';

const Swipe = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const [cocktails, __] = React.useContext(CocktailContext);
  const [cocktailIndex, setCocktailIndex] = React.useState(0);
  const [currentCocktail, setCurrentCocktail] = React.useState(
    cocktails[cocktailIndex],
  );
  const [fullCocktail, setFullCocktail] = React.useState({});
  const [recipe, setRecipe] = React.useState({});

  // TODO: I need to call the cocktail API for the first cocktail in the list and render
  // Every time a user clicks like or dislike
  // Update current cocktail state
  // Call cocktail API for that cocktail and re render

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
    let i = 1;
    let { strIngredient1, strMeasure1 } = fullCocktail;
    while (strIngredient1) {
      loadedRecipe[i] = {
        ingred: strIngredient1,
        measure: strMeasure1,
      };
      i++;
      strIngredient1 = fullCocktail[`strIngredient${i}`];
      strMeasure1 = fullCocktail[`strMeasure${i}`];
    }
    setRecipe(loadedRecipe);
  };

  // Initial call to The Cocktail DB to get one full cocktail object
  // Ingredients and measures included
  React.useEffect(() => {
    fetchFullCocktail(currentCocktail.idDrink);
  }, []);

  // When a user likes or dislikes a cocktail
  const handleSwipe = async (likeOrDislike) => {
    await api.swipe(user.id, fullCocktail.idDrink, likeOrDislike); // Add this cocktail to users likes list
    setCocktailIndex((prevIndex) => prevIndex + 1); // Update cocktail index to begin to render next cocktail
  };

  // Update current cocktail to use new cocktail index
  React.useEffect(() => {
    setCurrentCocktail(cocktails[cocktailIndex]);
  }, [cocktailIndex]);

  // Call api every time new cocktail is loaded
  React.useEffect(() => {
    fetchFullCocktail(currentCocktail.idDrink);
  }, [currentCocktail]);

  // Every time full cocktail is changed, set recipe from new full cocktail
  React.useEffect(() => {
    loadRecipe();
  }, [fullCocktail]);

  return (
    <SafeAreaView style={styles.swipeScreenContainer}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <Text style={styles.header}>{currentCocktail.strDrink}</Text>
      <Image
        source={{ uri: currentCocktail.strDrinkThumb }}
        style={styles.cocktail}
      />
      <View style={styles.ingredients}>
        {console.log(fullCocktail)}
        <TouchableOpacity style={styles.ingredient}>
          <Text style={styles.ingredientText}>Gin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ingredient}>
          <Text style={styles.ingredientText}>Campari</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ingredient}>
          <Text style={styles.ingredientText}>Sweet Vermouth</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ingredient}>
          <Text style={styles.ingredientText}>Vodka</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ingredient}>
          <Text style={styles.ingredientText}>Lillet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ingredient}>
          <Text style={styles.ingredientText}>Coca Cola</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.swipeButtons}>
        <TouchableOpacity
          style={styles.swipeButtonTouchable}
          onPress={handleSwipe(false)}
        >
          <Text style={styles.swipeButton}>❌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.swipeButtonTouchable}>
          <Text style={styles.swipeButton}>⭐️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.swipeButtonTouchable}
          onPress={handleSwipe(false)}
        >
          <Text style={styles.swipeButton}>❤️</Text>
        </TouchableOpacity>
      </View>
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
  cocktail: {
    width: 280,
    height: 280,
    marginTop: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginTop: 40,
  },
  ingredients: {
    padding: 10,
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'center',
  },
  ingredient: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 7,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colours.green,
    backgroundColor: Colours.yellow,
    marginTop: 15,
    shadowColor: Colours.green,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 2,
  },
  ingredientText: {
    color: Colours.charcoal,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 20,
  },
  swipeButtons: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  swipeButtonTouchable: {
    backgroundColor: Colours.brown,
    borderRadius: 50,
    shadowColor: Colours.charcoal,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  swipeButton: {
    fontSize: 30,
    padding: 10,
    margin: 10,
  },
});
