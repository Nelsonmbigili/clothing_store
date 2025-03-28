import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword
  } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA6dytB0Bm02K-3hIKARNroJBQ79AMuBUg",
  authDomain: "store-98a9d.firebaseapp.com",
  projectId: "store-98a9d",
  storageBucket: "store-98a9d.firebasestorage.app",
  messagingSenderId: "508874291398",
  appId: "1:508874291398:web:2f906461cae68d4fe83fc7",
  measurementId: "G-Q6Y72SHYNG"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });
  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additonalInfomation={})=>{
    if(!userAuth){
      return;
    }
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additonalInfomation
        });
      }catch(error){
        console.log(error," Error Signing in With Google")
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signInAuthWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
  }