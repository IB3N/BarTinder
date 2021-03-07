/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

import Colours from '../assets/colours';

const CocktailCard = ({ cocktail }) => {
  const loadRecipe = () => {
    const loadedRecipe = [];
    let i = 0;
    let { strIngredient1, strMeasure1 } = cocktail;
    while (strIngredient1) {
      loadedRecipe[i] = {
        ingred: strIngredient1,
        measure: strMeasure1,
      };
      i++;
      strIngredient1 = cocktail[`strIngredient${i + 1}`];
      strMeasure1 = cocktail[`strMeasure${i + 1}`];
    }
    return loadedRecipe;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{cocktail.strDrink.toUpperCase()}</Text>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.cocktail} />
      <View style={styles.ingredients}>
        <FlatList
          data={loadRecipe(cocktail)}
          keyExtractor={(item) => item.ingred}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.flatlist}
          renderItem={({ item }) => (
            <View style={styles.ingredient}>
              <Text style={styles.ingredientText}>{item.ingred}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CocktailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 30,
    color: Colours.yellow,
    textShadowColor: Colours.charcoal,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  cocktail: {
    width: 280,
    height: 280,
    marginTop: 20,
  },
  ingredients: {
    padding: 10,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  ingredient: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    marginLeft: 7,
    borderRadius: 10,
    backgroundColor: Colours.yellow,
    marginTop: 15,
    shadowColor: Colours.charcoal,
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
  },
  ingredientText: {
    color: Colours.charcoal,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
  },
  flatlist: {
    alignItems: 'center',
  },
});
