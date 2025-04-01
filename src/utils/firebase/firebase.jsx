import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
  } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
  
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=> {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef,object);
    });

    await batch.commit();
    console.log("done!");

  } 

  export const getCategoriesAndDocuments = async () =>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=> {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()]= items;
      return acc;
    },{});

    return categoryMap;
  }

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

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth,callback)
  }
    