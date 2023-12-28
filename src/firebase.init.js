// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk4l84NLDsmTxW-Ra1RewQCF85RXCcU18",
  authDomain: "restaurant-fc484.firebaseapp.com",
  projectId: "restaurant-fc484",
  storageBucket: "restaurant-fc484.appspot.com",
  messagingSenderId: "668058637247",
  appId: "1:668058637247:web:35a20c7df0caa03226470a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;