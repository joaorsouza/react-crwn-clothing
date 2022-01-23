import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnNFO0eiRjgv3KvGbNGdl0U3QRFiaehgk",
    authDomain: "crwn-clothing-db-18d76.firebaseapp.com",
    projectId: "crwn-clothing-db-18d76",
    storageBucket: "crwn-clothing-db-18d76.appspot.com",
    messagingSenderId: "5379598816",
    appId: "1:5379598816:web:f91f9f2636b8165a7ae385",
    measurementId: "G-YJ1R1T8RVF"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})

  export const singInWithGoogle = () => auth.signInWithPopup(provider)
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // eslint-disable-next-line no-debugger
    // debugger
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const userDataSnapShot = await userRef.get()

    if(!userDataSnapShot.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error crerating user: ', error.message)
      }
    }

    return userRef
  }


  export default firebase