import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Colours from '../assets/colours';

const CocktailCard = ({ currentCocktail, recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {currentCocktail.strDrink.toUpperCase()}
      </Text>
      <Image
        source={{ uri: currentCocktail.strDrinkThumb }}
        style={styles.cocktail}
      />
      <View style={styles.ingredients}>
        <FlatList
          data={recipe}
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
    fontSize: 26,
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
    marginLeft: 7,
    borderRadius: 10,
    backgroundColor: Colours.yellow,
    marginTop: 15,
    shadowColor: Colours.charcoal,
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
  },
  flatlist: {
    alignItems: 'center',
  },
});
