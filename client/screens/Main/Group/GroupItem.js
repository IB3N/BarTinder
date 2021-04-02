/* eslint-disable react/prop-types */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colours from '../../../assets/colours';

import MatchesMembersContext from '../../../context/MatchesMembersContext';

import Matches from './Matches';
import Members from './Members';

const Tab = createBottomTabNavigator();

const GroupItem = ({ route }) => {
  const { matches, members } = route.params;
  const matchesMembersHook = React.useState({ matches, members });

  return (
    <MatchesMembersContext.Provider value={matchesMembersHook}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Matches') {
              return (
                <MaterialCommunityIcons
                  name="glass-cocktail"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Members') {
              iconName = focused ? 'people' : 'people-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: { backgroundColor: Colours.charcoal, opacity: 0.9 },
          activeTintColor: Colours.sienna,
          inactiveTintColor: Colours.green,
        }}
      >
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="Members" component={Members} />
      </Tab.Navigator>
    </MatchesMembersContext.Provider>
  );
};

export default GroupItem;
