// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
console.log(process.env.REACT_APP_FIREBASE_API_KEY)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyCm3iaoCixcntk0rc2zFwDR9x9bK37h2Xg',
  authDomain: "netflix-c520e.firebaseapp.com",
  projectId: "netflix-c520e",
  storageBucket: "netflix-c520e.appspot.com",
  messagingSenderId:"717310214769",
  appId:"1:717310214769:web:cb5f8a793a4e810c2511d0",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db= getFirestore(app)




