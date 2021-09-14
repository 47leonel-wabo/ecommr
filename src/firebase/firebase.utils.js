// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA30qoL1A7DaxZLSaYcNRXqRwTcrGteniU",
    authDomain: "shope-nek-db.firebaseapp.com",
    projectId: "shope-nek-db",
    storageBucket: "shope-nek-db.appspot.com",
    messagingSenderId: "141920968465",
    appId: "1:141920968465:web:650b1a8b5fd1647908b6b0",
    measurementId: "G-9DC4K3GJ0S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // export auth module
export const firestore = firebase.firestore(); // export firestore module

const provider = new firebase.auth.GoogleAuthProvider(); // for google account, but possible to select other like twitter etc.
provider.setCustomParameters({ prompt: "select_account" }); // calling popup window for account selection
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// save user details after sign in via google account
export const createUserProfileDocument = async (userAuthData, otherData) => {
    if (!userAuthData) {
        return;
    }
    // const { uid, email, displayName } = userAuthData.multiFactor.user;
    const { uid, email, displayName } = userAuthData;
    const userRef = firestore.doc(`users/${uid}`);
    const snapShot = await userRef.get();

    // save user data if first authentication with google
    if (!snapShot.exists) {
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData,
            });
        } catch (error) {
            console.error("ERROR CREATING USER", error.message);
        }
    }
    return userRef;
};

export default firebase;
