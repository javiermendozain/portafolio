import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../shared/configureFirebase';


export default firebase.initializeApp(firebaseConfig);
