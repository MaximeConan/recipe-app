import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCq4_JBDCwjZJ1IXjuA-idcFe4L4mBY6vg',
  authDomain: 'recipe-app-70655.firebaseapp.com',
  databaseURL: 'https://recipe-app-70655.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
