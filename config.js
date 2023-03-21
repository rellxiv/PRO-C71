import firebase from "firebase";

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyACRHiEww-vbtD6tscMgvbycbJGE81_ODo",
    authDomain: "project-71-1042a.firebaseapp.com",
    databaseURL: "https://project-71-1042a-default-rtdb.firebaseio.com",
    projectId: "project-71-1042a",
    storageBucket: "project-71-1042a.appspot.com",
    messagingSenderId: "26315834695",
    appId: "1:26315834695:web:3b9a241c1eff663b167862"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();