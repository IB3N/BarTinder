/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { Card } from 'react-native-card-stack-swiper';

import Colours from '../assets/colours';

const windowWidth = Dimensions.get('window').width;

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
    <Card style={styles.container}>
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
    </Card>
  );
};

export default CocktailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
    backgroundColor: Colours.charcoal,
    marginBottom: -30,
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: -10,
    color: Colours.yellow,
    textShadowColor: '#000000aa',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    fontFamily: 'B',
  },
  cocktail: {
    width: 280,
    height: 280,
    marginTop: 20,
    marginBottom: -50,
  },
  ingredients: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ingredient: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginLeft: 7,
    borderRadius: 10,
    backgroundColor: Colours.yellow,
    marginTop: 5,
    shadowColor: '#000000aa',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
  },
  ingredientText: {
    color: Colours.charcoal,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'P',
  },
  flatlist: {
    alignItems: 'center',
    paddingVertical: 50,
  },
});
