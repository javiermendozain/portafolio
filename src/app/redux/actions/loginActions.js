import {root as reference} from '../../global/constants/referenciesFirestore';

export const logIn = (successfully, wrongly) => async (dispatch, getState, {getFirebase, getFirestore}) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  await firebase.auth().signInWithPopup(provider)
    .then( async (res) => {
      // Accounts successfully linked.
      const {
        metadata: { creationTime, lastSignInTime },
        displayName, email, emailVerified,
        phoneNumber, photoURL, uid,
        providerData
      } = res.user;

      console.log(reference);

      //  First Login
      if (creationTime === lastSignInTime) {
        const { providerId } = providerData[0];
        const creationAt = new Date(lastSignInTime).getTime();
        //  Create account on Firestore
        await firestore.collection(reference.root.users.ref()).doc(uid).collection(reference.root.users.profile.ref()).doc(uid).set({
          uid,
          displayName,
          email,
          emailVerified,
          phoneNumber,
          photoURL,
          providerId,
          creationTime: creationAt
        });

      }

      //  Checkin history logIn
      await firestore.collection(reference.root.users.ref()).doc(uid).collection(reference.root.users.historyLog.ref()).doc().set({
        uid,
        logInAtDate: new Date().getTime()
      });

      successfully();

    })
    .catch((error)=> wrongly(error));


};


export const logOut = () => (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();

  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  });

};



/*
  ## Documentation for Auth with firebase

  https://firebase.google.com/docs/reference/js/firebase.auth.Auth

  https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#signinwithpopup

*/
