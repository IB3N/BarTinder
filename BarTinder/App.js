import 'react-native-gesture-handler';
import * as React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store';
const store = createStore(reducers);

import AppLayout from './AppLayout';

export default function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
