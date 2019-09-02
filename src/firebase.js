import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyALcbxybLZStePYzwrqOfu_QMI_u9s5-og",
    authDomain: "chat-app-react-33012.firebaseapp.com",
    databaseURL: "https://chat-app-react-33012.firebaseio.com",
    projectId: "chat-app-react-33012",
    storageBucket: "gs://chat-app-react-33012.appspot.com/",
    messagingSenderId: "787064768713",
    appId: "1:787064768713:web:07718ad6f432ac84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;