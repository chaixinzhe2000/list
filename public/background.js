import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { GoogleAuthProvider, signInWithCredential, getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyAXUDc5YSHaIENy_59EW25ZwtFFcoVwPYs",
	authDomain: "list-87cec.firebaseapp.com",
	projectId: "list-87cec",
	storageBucket: "list-87cec.appspot.com",
	messagingSenderId: "325575680484",
	appId: "1:325575680484:web:5152ba7efc5dc383e627f1",
	measurementId: "G-6GGLJ7RN86"
};

initializeApp(firebaseConfig);

chrome.identity.getAuthToken({ 'interactive': true }, (token) => {
	console.log("TOKEN" + token)
	let credential = GoogleAuthProvider.credential(null, token)
	console.log("CREDENTIAL" + credential)
	const auth = getAuth();
	signInWithCredential(auth, credential)
		.then((result) => {
			const accessToken = result.user.accessToken
			const displayName = result.user.displayName
			chrome.storage.local.set({ "listAccessToken": accessToken, "listDisplayName": displayName });
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
			console.log(errorMessage)
		});
})
