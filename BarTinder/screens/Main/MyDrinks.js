/* eslint-disable no-unused-vars */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DrinksList from './DrinksList';
import TopBarButtons from '../../components/TopBarButtons';

const MyDrinks = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <TopBarButtons
        navigation={navigation}
        route={route}
        style={styles.flexStart}
      />
    </SafeAreaView>
  );
};

export default MyDrinks;

const styles = StyleSheet.create({});
