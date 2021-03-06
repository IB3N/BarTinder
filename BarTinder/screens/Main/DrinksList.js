import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserContext from '../../context/UserContext';
import CocktailContext from '../../context/CocktailContext';

const Likes = ({ navigation, route, drinks }) => {
  const [user, _] = React.useContext(UserContext);
  const [cocktails, __] = React.useContext(CocktailContext);

  return (
    <View>
      <Text>My Drinks</Text>
      <Text>Disklikes</Text>
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({});
