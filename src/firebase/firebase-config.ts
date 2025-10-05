import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = 
{
    apiKey: "AIzaSyCU_agTrl_vUHHbs0ZWvNprnNWL5ukbF4I",
    authDomain: "betterspots.firebaseapp.com",
    projectId: "betterspots",
    storageBucket: "betterspots.firebasestorage.app",
    messagingSenderId: "715524191189",
    appId: "1:715524191189:web:88c3562a50d4edb042435c",
    measurementId: "G-8C7T8RKSSH"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
