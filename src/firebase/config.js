import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7YsaACa29rLt9elQsE8hZDRZ0mHQ0LIQ",
    authDomain: "olxclone-e6661.firebaseapp.com",
    projectId: "olxclone-e6661",
    storageBucket: "olxclone-e6661.appspot.com",
    messagingSenderId: "444868021367",
    appId: "1:444868021367:web:c62cb39188cb94dbb20a72",
    measurementId: "G-C8RL44BC2Z"
  };
export default firebase.initializeApp(firebaseConfig)