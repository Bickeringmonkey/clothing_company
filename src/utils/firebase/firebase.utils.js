import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBjv1atr8IEHuewi7B7A4u0V4wJ4fGzyYc",
    authDomain: "clothing-company-db.firebaseapp.com",
    projectId: "clothing-company-db",
    storageBucket: "clothing-company-db.appspot.com",
    messagingSenderId: "1080212005950",
    appId: "1:1080212005950:web:21c95f47ce11db54b09d6f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);

      if(!userSnapshot.exists()) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
          } catch(error) {
            console.log('error creating user', error.message);
          }
      }
      
      return userDocRef;
  };