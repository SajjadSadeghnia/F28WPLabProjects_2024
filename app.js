// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKiISTRP3byOwxcZ7uvbOMW0ASqbSUrTs",
  authDomain: "mahffel.firebaseapp.com",
  projectId: "mahffel",
  storageBucket: "mahffel.appspot.com",
  messagingSenderId: "970272457495",
  appId: "1:970272457495:web:7beb93b0ca1de304c9ed52",
  measurementId: "G-7NLSCDRDW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);