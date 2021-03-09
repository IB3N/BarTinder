/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  PanResponder,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colours from '../assets/colours';
import TheCocktailDB from '../apiService/TheCocktailDB';
import CocktailContext from '../context/CocktailContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CocktailCard = ({
  handleSwipe,
  handleNextCocktail,
  current,
  setCurrent,
}) => {
  const [fullCocktails, setFullCocktails] = React.useState([]);
  const [cocktails, __] = React.useContext(CocktailContext);

  // function that will call the api for each new cocktail
  React.useEffect(() => {
    Promise.all(
      cocktails.map((cocktail) =>
        TheCocktailDB.getOne(cocktail.idDrink).then((drink) => drink),
      ),
    ).then((drinks) => setFullCocktails(drinks));
  }, []);

  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      console.log(gestureState.dy);
      if (gestureState.dx > 120) {
        // Swipe right to like
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: windowWidth + 100, y: gestureState.dy } }, // Off page to the right
        ).start(() => handleSwipe(true)); // Call like function)
      } else if (gestureState.dx < -120) {
        // Swipe left to dislike
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: -windowWidth - 100, y: gestureState.dy } }, // Off page to the right
        ).start(() => handleSwipe(false)); // Call dislike function)
      } else if (gestureState.dy < -120) {
        // Swipe up to get next cocktail
        Animated.spring(pan, {
          toValue: { x: 0, y: -windowHeight - 100 },
        }).start(() => handleNextCocktail(1)); // increment current index
      } else {
        Animated.spring(
          pan, // Auto-multiplexed
          { toValue: { x: 0, y: 0 } }, // Back to zero
        ).start();
      }
    },
  });

  const rotate = pan.x.interpolate({
    inputRange: [-windowWidth / 2, 0, windowWidth / 2], // [left value, right value]
    outputRange: ['-15deg', '0deg', '15deg'], // [left drop degrees, middle, right drop degrees]
    extrapolate: 'clamp', // Prevents output value from exceeding outputRange
  });

  const rotateAndTranslate = {
    transform: [{ rotate }, ...pan.getTranslateTransform()],
  };

  const likeOpacity = pan.x.interpolate({
    inputRange: [-windowWidth / 2, 0, windowWidth / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const nopeOpacity = pan.x.interpolate({
    inputRange: [-windowWidth / 2, 0, windowWidth / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const loadRecipe = (cocktail) => {
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

  const renderCocktails = () => {
    // make this its own component
    return cocktails
      .map((item, i) => {
        console.log(current);
        if (i === current) {
          return (
            <Animated.View
              key={item.idDrink}
              {...panResponder.panHandlers}
              style={[rotateAndTranslate, styles.container]}
            >
              {/* <Text style={styles.header}>{cocktail.strDrink.toUpperCase()}</Text> */}
              <Animated.View
                style={{
                  opacity: likeOpacity,
                  transform: [{ rotate: '-30deg' }],
                  position: 'absolute',
                  top: 250,
                  left: 50,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    color: 'green',
                    fontSize: 26,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: nopeOpacity,
                  transform: [{ rotate: '30deg' }],
                  position: 'absolute',
                  top: 250,
                  right: 50,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    fontSize: 26,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>
              <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.cocktail}
              />
              {/* <View style={styles.ingredients}>
        <FlatList
          data={loadRecipe(fullCocktail)}
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
      </View> */}
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={item.idDrink} style={styles.container}>
              {/* <Text style={styles.header}>{cocktail.strDrink.toUpperCase()}</Text> */}
              <Animated.View
                style={{
                  opacity: likeOpacity,
                  transform: [{ rotate: '-30deg' }],
                  position: 'absolute',
                  top: 250,
                  left: 50,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    color: 'green',
                    fontSize: 26,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  LIKE
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  opacity: nopeOpacity,
                  transform: [{ rotate: '30deg' }],
                  position: 'absolute',
                  top: 250,
                  right: 50,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    fontSize: 26,
                    fontWeight: '800',
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>
              <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.cocktail}
              />
              {/* <View style={styles.ingredients}>
        <FlatList
          data={loadRecipe(fullCocktail)}
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
      </View> */}
            </Animated.View>
          );
        }
      })
      .reverse();
  };

  return (
    <Animated.View>
      {fullCocktails.length ? renderCocktails() : <Text>Loading</Text>}
    </Animated.View>
  );
};

export default CocktailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    position: 'absolute',
    bottom: -windowHeight / 2,
    right: -windowWidth / 2 - 40,
    width: windowWidth - 20,
    height: windowHeight - 200,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    color: Colours.yellow,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    padding: 5,
  },
  cocktail: {
    width: 280,
    height: 280,
    marginTop: 70,
  },
  ingredients: {
    padding: 10,
    marginTop: 10,
    // flex: 1,
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
