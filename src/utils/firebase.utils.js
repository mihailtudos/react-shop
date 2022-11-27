// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore'
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	if (!userAuth) return;
	const userDocRef = doc(db, 'users',userAuth.uid);
	const userSnapshot = await getDoc(userDocRef);

	//if user data does not exists
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation
			})
		} catch (error) {
			console.log("There was an error creating the user", error.message)
		}
	}

	return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
}
