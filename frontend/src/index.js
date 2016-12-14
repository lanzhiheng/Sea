import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './containers/Panel/Panel';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import seaApp from './reducers';
import './index.scss';




let store = createStore(seaApp, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Panel />
  </Provider>,
  document.getElementById('root')
);
