/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import UsersListForm from './src/components/UsersListForm';

export default class App extends Component<{}> {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <NativeRouter>
        <Provider store = { store }>
          <View style = {styles.container}>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/users_list" component={UsersListForm}/>
          </View>
        </Provider>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
