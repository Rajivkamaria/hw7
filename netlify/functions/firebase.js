const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {apiKey: "AIzaSyAI_lob1DNfnq87uepNUBOaWtkLTb1rpf0",
authDomain: "kiei-451-2e14b.firebaseapp.com",
projectId: "kiei-451-2e14b",
storageBucket: "kiei-451-2e14b.appspot.com",
messagingSenderId: "252814257625",
appId: "1:252814257625:web:9075da8bce15c705307dc8"} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase