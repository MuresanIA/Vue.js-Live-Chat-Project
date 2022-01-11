import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDKud5ZMphaCN_2qDZ2MeA6xLBN_qobVUw',
	authDomain: 'live-chat-59ed1.firebaseapp.com',
	projectId: 'live-chat-59ed1',
	storageBucket: 'live-chat-59ed1.appspot.com',
	messagingSenderId: '715282701621',
	appId: '1:715282701621:web:c8b8f24c67067a069d407c'
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, timestamp };
