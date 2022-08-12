const functions = require("firebase-functions");
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createNewUser = functions.auth.user().onCreate( user => {
  return admin.firestore().collection('users').doc(user.uid).set({
    firstname: '',
    lastname: '',
    email: user.email,
    gender: '',
    avatar: ''
  })
})

exports.getUserInfo = functions.https.onCall((data, context) => {
  if(!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'You are not authorized')
  }

  const user = admin.firestore().collection('users').doc(context.auth.uid)
  return user.get()
    .then(res => {
      const data = res.data()
      return {
        firstname: data.firstname,
        lastname: data.lastname,
        gender: data.gender,
        avatar: data.avatar,
        email: data.email
      }
    })
    .catch(err => {
      return err
    })
})

exports.updateUserProfile = functions.https.onCall((data, context) => {
  if(!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'You are not authorized')
  }

  const user = admin.firestore().collection('users').doc(context.auth.uid)
  return user.update({
    firstname: data.firstname,
    lastname: data.lastname,
    gender: data.gender,
    email: data.email,
    avatar: data.avatar
  }).then( () => {
    return 'data has been updated.'
  })
})

