
import { initializeApp } from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

// import 'firebase/storage';
// import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPJ9kEMBrIfF57uczwU92p-CabPSaXs2M",
    authDomain: "remember-when-9cf6e.firebaseapp.com",
    projectId: "remember-when-9cf6e",
    storageBucket: "remember-when-9cf6e.appspot.com",
    messagingSenderId: "907195200741",
    appId: "1:907195200741:web:2d53e04295bfc6c6ba500c",
    measurementId: "G-0092YQRGRR"
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);
const analytics = getAnalytics (app);

// starts storage service
const projectStorage = getStorage();
const projectFirestore = getFirestore();
// fireStore to date and time the image
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export{projectStorage,projectFirestore};
/************** TYLER'S CODE START end */