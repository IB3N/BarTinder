/* eslint-disable react/prop-types */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        tabBarOptions={{
          style: { backgroundColor: Colours.charcoal, opacity: 0.9 },
        }}
        labelStyle={{
          fontSize: 24,
        }}
      >
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="Members" component={Members} />
      </Tab.Navigator>
    </MatchesMembersContext.Provider>
  );
};

export default GroupItem;
