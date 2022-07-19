import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVhehqwOQST4QGv6dxqCHUIjXRdDPjEjU",
    authDomain: "codingforkids-1c36c.firebaseapp.com",
    projectId: "codingforkids-1c36c",
    storageBucket: "codingforkids-1c36c.appspot.com",
    messagingSenderId: "851556471486",
    appId: "1:851556471486:web:2b3294383a9a97f79cc4ef",
}

export const createProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
  
    const snapshot = await userRef.get()
  
    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date()
  
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log("error creating user")
      }
      }
     
       return userRef;
    }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 