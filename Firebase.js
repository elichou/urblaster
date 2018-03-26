import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyA_Vem0kCROFOem57TPFFjYoXprI_yw_HA",
    authDomain: "urblaster-first.firebaseapp.com",
    databaseURL: "https://urblaster-first.firebaseio.com",
    projectId: "urblaster-first",
    storageBucket: "",
    messagingSenderId: "980442426711"
};


firebase.initializeApp(firebaseConfig);

//const admin = require('firebase-admin');
//const functions = require('firebase-functions');

//admin.initializeApp(functions.config().firebase);

//export default fs = admin.firestore();

export default db = firebase;

