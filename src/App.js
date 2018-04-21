import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
      const config = {
        apiKey: 'AIzaSyCF8S5Wa5lJwpBLJkIlCA3p5e3-IHEiyRQ',
        authDomain: 'manage-36f7d.firebaseapp.com',
        databaseURL: 'https://manage-36f7d.firebaseio.com',
        projectId: 'manage-36f7d',
        storageBucket: 'manage-36f7d.appspot.com',
        messagingSenderId: '980410366571'
      };
      firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
      </Provider>
    );
  }
}

export default App;
