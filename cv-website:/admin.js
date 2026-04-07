import { firebaseConfig } from './firebase.js';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

window.login = function() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => alert("Logged in"))
    .catch(err => alert(err.message));
}

window.save = async function() {
  const data = JSON.parse(document.getElementById("jsonData").value);

  await setDoc(doc(db, "cv", "data"), data);
  alert("Saved!");
}