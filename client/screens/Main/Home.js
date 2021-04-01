/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Colours from '../../assets/colours';
import ButtonStyles from '../../assets/button.styles';
import theCocktailDB from '../../apiService/TheCocktailDB';
import arrayShuffle from 'array-shuffle';
import { addCocktails } from '../../store/actions/cocktails';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    theCocktailDB
      .getCocktails()
      .then(({ drinks }) =>
        Promise.all(
          drinks.map(({ idDrink }) =>
            theCocktailDB.getOne(idDrink).then(({ drinks }) => drinks[0]),
          ),
        ).then((fullCocktails) =>
          dispatch(addCocktails(arrayShuffle(fullCocktails))),
        ),
      );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.welcome}>BARTINDER</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Swipe', {})}>
          <Image
            source={require('../../assets/tumblerSmall.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('MyDrinks', {})}
        >
          <Text style={ButtonStyles.buttonText}>My Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('Swipe', {})}
        >
          <Text style={ButtonStyles.buttonText}>Swipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('Groups', {})}
        >
          <Text style={ButtonStyles.buttonText}>Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={() => navigation.navigate('Profile', {})}
        >
          <Text style={ButtonStyles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colours.charcoal,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  buttonsContainer: {
    justifyContent: 'center',
  },
  logo: {
    width: 140,
    height: 140,
  },
  welcome: {
    fontSize: 65,
    color: Colours.green,
    textAlign: 'center',
    fontFamily: 'B',
    textShadowColor: '#000000aa',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});
