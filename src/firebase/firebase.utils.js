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

  export default firebase