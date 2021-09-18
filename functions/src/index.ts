import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp();

export const newSignUp = functions.auth.user().onCreate((user) => {
    const data = {
        uid: user.uid,
        email: user.email
    };
    return admin.firestore().doc("userSignUps/{email}").set(data);
});

export const deleteAccount = functions.auth.user().onDelete((user) => {
    const data = {
        uid: user.uid,
        email: user.email,
        isDeleted: true
    };
    return admin.firestore().doc("userSignUps/{email}").set(data);
});