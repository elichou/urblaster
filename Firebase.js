import * as firebase from 'firebase'

// initialisation de firebase



const firebaseConfig = {
	apiKey: "AIzaSyA_Vem0kCROFOem57TPFFjYoXprI_yw_HA",
    authDomain: "urblaster-first.firebaseapp.com",
    databaseURL: "https://urblaster-first.firebaseio.com",
    projectId: "urblaster-first",
    storageBucket: "",
    messagingSenderId: "980442426711"
}

firebase.initializeApp(firebaseConfig)

export default firebase; 
