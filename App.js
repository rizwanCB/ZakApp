/*
| contains redux Provider
| theme provider from react native elements
| Navigation stack
*/
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {ThemeProvider} from 'react-native-elements';

import reducers from './src/redux';
import theme from './src/theme';
import MainNavStack from './src/navigations';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainNavStack />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
