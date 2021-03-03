import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colours from '../assets/colours';
import ButtonStyles from '../assets/button.styles';
import TopBarButtons from '../components/TopBarButtons';

const SwipeScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.swipeScreenContainer}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <Text style={styles.header}>Negroni</Text>
      <Image
        source={require('../assets/tumbler.png')}
        style={styles.cocktail}
      />
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

export default SwipeScreen;

const styles = StyleSheet.create({
  swipeScreenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
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
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  ingredient: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colours.green,
    backgroundColor: Colours.yellow,
    marginVertical: 10,
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
