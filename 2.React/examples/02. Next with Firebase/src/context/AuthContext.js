import React, {useState, useEffect, useContext, createContext} from 'react'

import firebaseClient from './firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'
import nookies from 'nookies'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

  // initialize firebase
  firebaseClient()
  const [user, setUser] = useState(null)

  
  useEffect(()=>{
    return firebase.auth().onAuthStateChanged(async (user) => {
      // assign user if it exists and if not set cookies to empty
      if(!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', {})
        return 
      }
      // if there is a user, assign it and set it to the the state
      const token = await user.getIdToken()
      setUser(user)
      nookies.set(undefined, 'token', token, {})
    })
  }, [])

  // register the user
  const registerUser = async (email, password) => {
    let message;
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        if(err.code === 'auth/email-already-in-use') {
          message = 'Email already in use.'
        }
        if(err.code === 'auth/weak-password') {
          message = 'Please provide a strong password.'
        }
      })
    return {message}
  }

  // login the user
  const loginUser = async (email, password) => {
    let message;
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err)
        if(err.code === 'auth/user-not-found') {
          message = 'Email does not exists.'
        } else if(err.code === 'auth/wrong-password') {
          message = 'Invalid password.'
        } else {
          message = 'Invalid email or password.'
        }
      })
    return {message}
  }
      
  // logout the user
  const logoutUser = async () => {
    await firebase.auth().signOut()
    return true
  }
    
  // reset user password
  const resetPassword = async (email) => {
    await firebase.auth().sendPasswordResetEmail(email)
    return true
  }

  // save user image to firebase storage
  const saveUserImage = async (image) => {
    const storageRef = firebase.storage().ref('users')
    const fileRef = storageRef.child(image.name)
    await fileRef.put(image)
    const url = await fileRef.getDownloadURL()
    return url
  }

  const getUserInfo = async () => {
    const userProfile = await firebase.functions().httpsCallable('getUserInfo')
    return userProfile({}).then(res => {
      return res.data 
    })
  }

  const updateUserProfile = async (data) => {
    const userUpdate = await firebase.functions().httpsCallable('updateUserProfile')
    return userUpdate({...data})
      .then(res => {
        return 
      })
      .catch(err => {
        console.log(err)
      })
  }


  const value = {
    user,
    registerUser,
    loginUser,
    logoutUser,
    resetPassword,
    saveUserImage,
    getUserInfo,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);