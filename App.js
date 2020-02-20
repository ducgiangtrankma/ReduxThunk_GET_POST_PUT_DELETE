import React, {Component} from 'react';
import {moduleName} from 'react-native';
import Main from './src/Main';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/Redux/Reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(thunk));
export default class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
