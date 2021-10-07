import { initializeApp } from "firebase/app";
import {
  getAuth,
  getIdTokenResult,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  onSnapshot,
  setDoc,
  collection,
  query,
} from "firebase/firestore";

import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLtTnAVBuPzBL_dFK-ClbCHP2Dqp3gW4g",
  authDomain: "stem-day-project-43876.firebaseapp.com",
  projectId: "stem-day-project-43876",
  storageBucket: "stem-day-project-43876.appspot.com",
  messagingSenderId: "366923636539",
  appId: "1:366923636539:web:f85b89b2ddc315e67ee11e",
};

const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);
const analytics = getAnalytics(app);

const login = document.getElementById("login");
const loginGithub = document.getElementById("login-github");
const logout = document.getElementById("logout");
const deleteAccount = document.getElementById("deleteAccount");
const provider = new GoogleAuthProvider();
const github = new GithubAuthProvider();

const auth = getAuth();
const db = getFirestore();

login.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      console.log("Yay! Signed in");
    })
    .catch((error) => {
      console.error(error);
    });
});

loginGithub.addEventListener("click", () => {
  signInWithPopup(auth, github)
    .then(() => {
      console.log("Signed in with GitHub");
    })
    .catch((error) => {
      console.error(error);
    });
});

logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("Sucessfully signed out");
    })
    .catch((error) => {
      console.error(error);
    });
});

const q = query(collection(db, "movies"));

onSnapshot(q, (snapshot) => {
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
});
