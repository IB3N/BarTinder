import 'react-native-gesture-handler';
import * as React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './store';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import AppLayout from './AppLayout';

export default function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}
