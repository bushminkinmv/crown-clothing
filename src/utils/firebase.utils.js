import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyACzcvcNm4r6NO_ZkSqcLXKQy_4uQ8UbVQ',
  authDomain: 'crwn-clothing-db-ecb17.firebaseapp.com',
  projectId: 'crwn-clothing-db-ecb17',
  storageBucket: 'crwn-clothing-db-ecb17.appspot.com',
  messagingSenderId: '772119334622',
  appId: '1:772119334622:web:78a0b1cfa30fedc8e1bc4f',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('erroe creating the user', error.message);
    }
  }
  return userDocRef;
};
