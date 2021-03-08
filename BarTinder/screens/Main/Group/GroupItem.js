/* eslint-disable react/prop-types */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colours from '../../../assets/colours';

import GroupsContext from '../../../context/GroupsContext';

import Matches from './Matches';
import Members from './Members';

const Tab = createBottomTabNavigator();

const GroupItem = ({ route }) => {
  const { members, matches } = route.params;
  const groupsHook = React.useState({ matches, members });

  return (
    <GroupsContext.Provider value={groupsHook}>
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
    </GroupsContext.Provider>
  );
};

export default GroupItem;
