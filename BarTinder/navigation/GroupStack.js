import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Group from '../screens/Main/Group/Group';
import GroupItem from '../screens/Main/Group/GroupItem';
import CreateGroupForm from '../screens/Main/Group/CreateGroupForm';

import GroupsContext from '../context/GroupsContext';

import { useSelector } from 'react-redux';

import api from '../apiService';

const Stack = createStackNavigator();

const GroupStack = () => {
  const user = useSelector((stack) => stack.user.user);
  const groupsHook = React.useState([]);
  const setGroups = groupsHook[1];

  // Initial call to api to get users groups
  React.useEffect(() => {
    api
      .getGroupIds(user.id)
      .then((fetchedGroupIds) =>
        Promise.all(
          fetchedGroupIds.map(({ groupId }) =>
            api.getGroup(groupId).then((group) => group),
          ),
        ).then((fetchedGroups) => setGroups(fetchedGroups)),
      );
  }, []);

  return (
    <GroupsContext.Provider value={groupsHook}>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Group"
          component={Group}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GroupItem"
          component={GroupItem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateGroupForm"
          component={CreateGroupForm}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </GroupsContext.Provider>
  );
};

export default GroupStack;
