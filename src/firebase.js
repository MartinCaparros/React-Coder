import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTX53ACdhebuDqJBJODyzvsrWO8zqY2HY",
    authDomain: "my-react-coderhouse.firebaseapp.com",
    projectId: "my-react-coderhouse",
    storageBucket: "my-react-coderhouse.appspot.com",
    messagingSenderId: "687738389266",
    appId: "1:687738389266:web:8eb5c14c06744d02f969cb"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)