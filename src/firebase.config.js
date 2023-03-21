import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz8TOHgNpDqeUKAb2e6d5EC9V7ypYcw_E",
    authDomain: "house-marketplace-app-2fb74.firebaseapp.com",
    projectId: "house-marketplace-app-2fb74",
    storageBucket: "house-marketplace-app-2fb74.appspot.com",
    messagingSenderId: "339135977901",
    appId: "1:339135977901:web:4573ef3d862d8d7674a924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()