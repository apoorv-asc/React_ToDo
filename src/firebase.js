// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from '@firebase/app';
// import "@firebase/database";


// const firebaseApp=firebase.default.initializeApp({
//     apiKey: "AIzaSyBCzOIaFP3yIGGb9JeJ5-T_K2cpQB75kos",
//     authDomain: "todo-appcp.firebaseapp.com",
//     projectId: "todo-appcp",
//     storageBucket: "todo-appcp.appspot.com",
//     messagingSenderId: "385655686127",
//     appId: "1:385655686127:web:695aa117c89b7abd56ec1a",
//     measurementId: "G-JGCZV3VFQG"
// });

// const db = firebase.default.database();
// // const db = firebaseApp.firestore();

// export default db;


import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCzOIaFP3yIGGb9JeJ5-T_K2cpQB75kos",
    authDomain: "todo-appcp.firebaseapp.com",
    projectId: "todo-appcp",
    storageBucket: "todo-appcp.appspot.com",
    messagingSenderId: "385655686127",
    appId: "1:385655686127:web:695aa117c89b7abd56ec1a",
    measurementId: "G-JGCZV3VFQG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;