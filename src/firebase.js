import firebase, { firestore } from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDTRiSJDyQICvKl9f8iNezB0TBHPvKTBfg",
    authDomain: "fb-clone-ae59a.firebaseapp.com",
    projectId: "fb-clone-ae59a",
    storageBucket: "fb-clone-ae59a.appspot.com",
    messagingSenderId: "245720156117",
    appId: "1:245720156117:web:ced21b22b3e634c4fc1f5c"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;