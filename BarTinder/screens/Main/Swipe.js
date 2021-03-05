import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';
import TopBarButtons from '../../components/TopBarButtons';
import CocktailContext from '../../context/CocktailContext';
import TheCocktailDB from '../../apiService/TheCocktailDB';

const Swipe = ({ navigation, route }) => {
  const [cocktails, setCocktails] = React.useContext(CocktailContext);
  const [cocktailIndex, setCocktailIndex] = React.useState(0);
  const [cocktail, setCocktail] = React.useState(cocktails[cocktailIndex]);
  const [cocktailById, setCocktailById] = React.useState({});

  // TODO: I need to call the cocktail API for the first cocktail in the list and render
  // Every time a user clicks like or dislike
    // Update current cocktail state
    // Call cocktail API for that cocktail and re render

  // function that will call the api for each new cocktail
  const fetchCocktailById = async (id) => {
    await TheCocktailDB.getOne(id).then(drink => setCocktailById(drink));
  }

  React.useEffect(() => {
    await fetchCocktailById(cocktail.idDrink);
  },[])

  const handleNewCocktail = async () => {
    await fetchCocktailById(cocktail.idDrink);
  };

  return (
    <SafeAreaView style={styles.swipeScreenContainer}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <Text style={styles.header}>{cocktail.strDrink}</Text>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.cocktail} />
      <View style={styles.ingredients}>
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
        <TouchableOpacity style={styles.swipeButtonTouchable}>
          <Text style={styles.swipeButton}>❌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.swipeButtonTouchable}>
          <Text style={styles.swipeButton}>⭐️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.swipeButtonTouchable}>
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
