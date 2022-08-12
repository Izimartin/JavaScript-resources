import {v4 as uuidv4} from 'uuid'

export const deleteProject = (project, id) => {

  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    
    const storageRef = firebase.storage().ref('projects')
    const fileRef = storageRef.child(`${project.image.id}.jpg`)
    await fileRef.delete()
      .then(res => {
        firestore
          .collection('projects')
          .doc(id)
          .delete()
          .then(resp => {
            console.log(resp)
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })

  }
};

export const createProject = (project) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {

    // make initial async call to firestore database
    const firestore = getFirestore()
    // assign profile to a variable
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;


    const firebase = getFirebase()
    const fileId = uuidv4()
    const filename = `${fileId}.jpg` 
    const storageRef = firebase.storage().ref('projects')
    const fileRef = storageRef.child(filename)
    await fileRef.put(project.image)
    const url = await fileRef.getDownloadURL()

    // call firebase to add a new collection
    await firestore.collection('projects').add({
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
      title: project.title,
      content: project.content,
      image: {
        id: fileId,
        url: url
      },
    })

      .then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
  }
};
