import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Group from '../screens/Main/Group/Group';
import GroupItem from '../screens/Main/Group/GroupItem';
import CreateGroupForm from '../screens/Main/Group/CreateGroupForm';

import { useDispatch, useSelector } from 'react-redux';
import { addGroups } from '../store/actions/groups';

import api from '../apiService';

const Stack = createStackNavigator();

const GroupStack = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Initial call to api to get users groups
  React.useEffect(() => {
    console.log('USER', user);
    api
      .getGroupIds(user.id)
      .then((fetchedGroupIds) =>
        Promise.all(
          fetchedGroupIds.map(({ groupId }) =>
            api.getGroup(groupId).then((group) => group),
          ),
        ).then((fetchedGroups) => dispatch(addGroups(fetchedGroups))),
      );
  }, []);

  return (
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
  );
};

export default GroupStack;
