const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// this function will add a new notification from the 
// collection database.
const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


// this function get executed whenever a new document gets added to the 
// projects collection. this function will add a new collection to the projects collection
exports.projectCreated = functions.firestore.document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});


// this function gets executed whenever a new user signs up. it will add a new collection to the notifications collection
exports.userJoined = functions.auth.user().onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);
      });
});


exports.deleteImage = functions.https.onCall((data, context) => {
  if(!context.auth) {
    throw new functions.https.HttpsError('unauthorized', 'You are not authorized!')
  }

  const storage = admin.storage().ref('projects')
  const fileRef = storage.child(data.file)
  fileRef.delete()
    .then(res => {
      return res
    })
    

})