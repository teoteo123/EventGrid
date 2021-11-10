import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC1TswKlBdml8e92JcjR33t9gbRfERorV4",
    authDomain: "eventgrid-b609d.firebaseapp.com",
    projectId: "eventgrid-b609d",
    storageBucket: "eventgrid-b609d.appspot.com",
    messagingSenderId: "361288050859",
    appId: "1:361288050859:web:53d7620a74c4cd4ca92fee",
    measurementId: "G-J0ZEVD43TJ"
  };

  export var firebaseApp = firebase.initializeApp(firebaseConfig);

  export var db = firebaseApp.firestore();
