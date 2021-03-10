/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardStack from 'react-native-card-stack-swiper';

import Colours from '../../assets/colours';

import TopBarButtons from '../../components/TopBarButtons';
import CocktailCard from '../../components/CocktailCard';
import SwipeButtons from '../../components/SwipeButtons';

import api from '../../apiService';

import CocktailContext from '../../context/CocktailContext';
import UserContext from '../../context/UserContext';

const Swipe = ({ navigation, route }) => {
  const [user, _] = React.useContext(UserContext);
  const [cocktails, __] = React.useContext(CocktailContext);

  const [likes, setLikes] = React.useState([]);

  const swiper = React.useRef(null);

  React.useEffect(() => {
    api
      .getLikesAndDislikes(user.id)
      .then((fetchedLikesAndDislikes) => setLikes(fetchedLikesAndDislikes));
  }, []);

  // When a user likes or dislikes a cocktail
  const handleSwipe = async (likeOrDislike, index) => {
    await api.swipe(user.id, cocktails[index].idDrink, likeOrDislike); // Add this cocktail to users likes list
    // setCurrent((prev) => prev + 1); // Update cocktail index to begin to render next cocktail
  };

  const renderCocktailCards = () => {
    return cocktails.map((cocktail) => (
      <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
    ));
  };

  return (
    <SafeAreaView style={styles.swipeScreenContainer}>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
      <CardStack
        style={styles.container}
        ref={swiper}
        disableBottomSwipe={true}
        secondCardZoom={0.4}
        onSwipedRight={(index) => handleSwipe(true, index)}
        onSwipedLeft={(index) => handleSwipe(false, index)}
        // onSwipedTop={(index) => handleRefresh()}
      >
        {renderCocktailCards()}
      </CardStack>
      <SwipeButtons
        like={() => swiper.current.swipeRight()}
        dislike={() => swiper.current.swipeLeft()}
        handleRefresh={() => swiper.current.swipeTop()}
        styles={styles.f}
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
    backgroundColor: Colours.charcoal,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
});
