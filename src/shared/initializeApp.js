import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configureFirebase';


export default firebase.initializeApp(firebaseConfig);
