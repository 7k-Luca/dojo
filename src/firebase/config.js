import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAO8yNN4SfislSnTKKE7N-dMoSQNqYjUEc",
    authDomain: "the-dojo-55bbb.firebaseapp.com",
    projectId: "the-dojo-55bbb",
    storageBucket: "the-dojo-55bbb.appspot.com",
    messagingSenderId: "299942147681",
    appId: "1:299942147681:web:34c155e5457000a03d9c20"
    };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }