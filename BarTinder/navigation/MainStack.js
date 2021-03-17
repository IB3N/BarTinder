import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Main/Home';
import Profile from '../screens/Main/Profile/Profile';
// import Group from '../screens/Main/Group/Group';
import MyDrinks from '../screens/Main/MyDrinks';
// import GroupItem from '../screens/Main/Group/GroupItem';
import Swipe from '../screens/Main/Swipe';
import DeleteAccount from '../screens/Main/Profile/DeleteAccount';
// import CreateGroupForm from '../screens/Main/Group/CreateGroupForm';
import CocktailContext from '../context/CocktailContext';
import theCocktailDB from '../apiService/TheCocktailDB';
import api from '../apiService/';
import GroupStack from '../navigation/GroupStack';
import UserContext from '../context/UserContext';
import { useDispatch } from 'react-redux';
import { addCocktails } from '../store/actions/cocktails';

const arrayShuffle = require('array-shuffle');

const Stack = createStackNavigator();

const MainStack = () => {
  const [user, setUser] = React.useContext(UserContext);
  const [likes, setLikes] = React.useState([]);
  const cocktailsHook = React.useState([]);
  const setCocktails = cocktailsHook[1];
  const dispatch = useDispatch();

  React.useEffect(() => {
    api.getLikesAndDislikes(user.id).then((fetchedLikesAndDislikes) => {
      console.log(fetchedLikesAndDislikes);
      setLikes(fetchedLikesAndDislikes);
    });
  }, []);

  React.useEffect(() => {
    theCocktailDB
      .getCocktails()
      .then(({ drinks }) =>
        drinks.filter((cocktail) => {
          return !likes.some(({ drinkId }) => drinkId === +cocktail.idDrink);
        }),
      )
      .then((filtered) =>
        Promise.all(
          filtered.map(({ idDrink }) =>
            theCocktailDB.getOne(idDrink).then(({ drinks }) => drinks[0]),
          ),
        ).then((fullCocktails) => {
          const shuffled = arrayShuffle(fullCocktails);
          setCocktails(shuffled);
          dispatch(addCocktails(shuffled));
        }),
      );
  }, [likes]);

  return (
    <CocktailContext.Provider value={cocktailsHook}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'BarTinder', headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            title: route.params.name,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Groups"
          component={GroupStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Swipe"
          component={Swipe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyDrinks"
          component={MyDrinks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteAccount}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </CocktailContext.Provider>
  );
};

export default MainStack;
