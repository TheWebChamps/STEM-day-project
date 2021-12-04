import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp();

admin.auth().setCustomUserClaims("vRfKtIAQNmcV5v5en3By8JK1jc33", {
  admin: true,
});

export const newSignUp = functions.auth.user().onCreate((user) => {
  const data = {
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    name: user.displayName,
  };
  return admin.firestore().doc(`userSignUps/${data.email}`).set(data);
});

export const deleteAccount = functions.auth.user().onDelete((user) => {
  const data = {
    uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    name: user.displayName,
    isDeleted: true,
  };
  return admin.firestore().doc(`userSignUps/${data.email}`).set(data);
});

// Hello!
