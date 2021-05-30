import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './pages/App';
import itemReducer from './reducers/itemReducer';

const container = document.getElementById('App');
const store = createStore(
  itemReducer,
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
