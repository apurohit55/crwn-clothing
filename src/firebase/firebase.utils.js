import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyANpnIyr2TkaohrBPkjXdBzKyBA2DSqPhY',
	authDomain: 'crwn-clothing-db-a3c26.firebaseapp.com',
	databaseURL: 'https://crwn-clothing-db-a3c26.firebaseio.com',
	projectId: 'crwn-clothing-db-a3c26',
	storageBucket: 'crwn-clothing-db-a3c26.appspot.com',
	messagingSenderId: '278013819553',
	appId: '1:278013819553:web:918927324814b9a7f28ee0',
	measurementId: 'G-5SBTBPDXNN'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
