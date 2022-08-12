
import firebase from 'firebase'
import secretKeys from '../../secretKey.json'

// assign config keys
const FIREBASE_CONFIG = secretKeys

export default function firebaseClient() {
  if(!firebase.apps.length) {
    // initialize app when no app is running
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}

