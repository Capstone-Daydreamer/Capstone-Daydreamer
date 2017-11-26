import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import * as firebase from 'firebase';

// establishes socket connection
import './socket'

var config = {
  apiKey: "AIzaSyBSK8EMq2w642CcB69TPwx050bFmlBQl44",
  authDomain: "daydreamer-e8d49.firebaseapp.com",
  databaseURL: "https://daydreamer-e8d49.firebaseio.com",
  projectId: "daydreamer-e8d49",
  storageBucket: "daydreamer-e8d49.appspot.com",
  messagingSenderId: "891574424825"
};

firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
