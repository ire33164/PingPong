import firebase from 'firebase/app'
import 'firebase/firestore'
import DB from '../config/db'

// initialize firebase application
firebase.initializeApp({
  apiKey: DB.apiKey,
  authDomain: DB.authDomain,
  databaseURL: DB.databaseURL,
  projectId: DB.projectId,
  storageBucket: DB.storageBucket,
  messagingSenderId: DB.messagingSenderId
})

// firebase utils
// const fb = firebase.firestore()
// const auth = firebase.auth()
// const currentUser = auth.currentUser

// date issue fix according to firebase
// const settings = {
//   timestampInSnapshots: true
// }
// fb.settings(settings)

// firecollections
// const playersCollection = db.collection('players')

firebase.firestore().enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      // 若開很多分頁瀏覽 app , 會跑到這邊
      console.log('many pages')
    } else if (err.code === 'unimplemented') {
      // 若瀏覽器不支援 offline function , 會跑到這邊
      console.log('can not offline')
    }
  })

export const db = firebase.firestore()
