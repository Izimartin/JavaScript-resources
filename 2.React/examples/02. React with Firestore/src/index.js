// guide for this page
// http://react-redux-firebase.com/docs/firestore.html

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {getFirestore, createFirestoreInstance } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/firebaseConfig'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  )
)

const rrfConfig = {
  timestampsInSnapshots: true, 
  merge: true,  
  useFirestoreForProfile: true, 
  userProfile: 'users', 
  attachAuthIsReady: true,
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}



  ReactDOM.render(
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
  );


