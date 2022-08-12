import authReducer from './authReducer'
import projectReducer from './projectReducer'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  // this is for accesing the firestore database
  firestore: firestoreReducer,
  // this is for accessing the authentication
  firebase: firebaseReducer
});

export default rootReducer