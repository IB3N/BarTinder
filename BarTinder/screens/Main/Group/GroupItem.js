/* eslint-disable react/prop-types */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colours from '../../../assets/colours';

import Matches from './Matches';
import Members from './Members';

const Tab = createBottomTabNavigator();

const GroupItem = ({ route }) => {
  return (
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
  );
};

export default GroupItem;
