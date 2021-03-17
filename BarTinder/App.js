import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './store';

import AppLayout from './AppLayout';

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
