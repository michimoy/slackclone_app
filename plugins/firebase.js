import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
  apiKey: "AIzaSyArii3st6Q12sq_ttru708Ek6um3JhkTmA",
  authDomain: "slack-clone-app-ec95f.firebaseapp.com",
  databaseURL: "https://slack-clone-app-ec95f.firebaseio.com",
  projectId: "slack-clone-app-ec95f",
  messagingSenderId: "746455045876"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}
