import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Main/Home';
import Profile from '../screens/Main/Profile/Profile';
import Group from '../screens/Main/Group/Group';
import MyDrinks from '../screens/Main/MyDrinks';
import GroupItem from '../screens/Main/Group/GroupItem';
import Swipe from '../screens/Main/Swipe';
import DeleteAccount from '../screens/Main/Profile/DeleteAccount';
import CreateGroupForm from '../screens/Main/Group/CreateGroupForm';
import CocktailContext from '../context/CocktailContext';
import theCocktailDB from '../apiService/TheCocktailDB';

// const arrayShuffle = require('array-shuffle');

const Stack = createStackNavigator();

const MainStack = () => {
  const cocktailsHook = React.useState([]);
  const setCocktails = cocktailsHook[1];

  React.useEffect(() => {
    theCocktailDB
      .getCocktails()
      .then((newCocktails) => setCocktails(newCocktails.drinks)); // TODO: arrayShuffle(newCocktails.drinks)
  }, []);

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
          component={Group}
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
        <Stack.Screen
          name="CreateGroupForm"
          component={CreateGroupForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupItem"
          component={GroupItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </CocktailContext.Provider>
  );
};

export default MainStack;
