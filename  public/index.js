import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLtTnAVBuPzBL_dFK-ClbCHP2Dqp3gW4g",
  authDomain: "stem-day-project-43876.firebaseapp.com",
  projectId: "stem-day-project-43876",
  storageBucket: "stem-day-project-43876.appspot.com",
  messagingSenderId: "366923636539",
  appId: "1:366923636539:web:f85b89b2ddc315e67ee11e"
}

initializeApp(firebaseConfig);

const login = document.getElementById("login");
const loginGithub = document.getElementById("login-github");
const logout = document.getElementById("logout");
const provider = new GoogleAuthProvider();
const github = new GithubAuthProvider();

const auth = getAuth();

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