// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAwxXfGzMKAnZXoPcMcCcU5ZBXI7eMzJKk",
	authDomain: "react-shop-a734e.firebaseapp.com",
	projectId: "react-shop-a734e",
	storageBucket: "react-shop-a734e.appspot.com",
	messagingSenderId: "471163184371",
	appId: "1:471163184371:web:0e40caed22f255f5f44386"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
