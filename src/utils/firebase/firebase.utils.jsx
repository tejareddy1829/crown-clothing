import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYZu3ZHG1AopU0kI--ZTNuVIMiAYEgWO0",
  authDomain: "crown-clothing-db-26973.firebaseapp.com",
  projectId: "crown-clothing-db-26973",
  storageBucket: "crown-clothing-db-26973.appspot.com",
  messagingSenderId: "156930320191",
  appId: "1:156930320191:web:998dcf665f502bc0d5158a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const sigInWithGooglePopup = () => signInWithPopup(auth, provider);
