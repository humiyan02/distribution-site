import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

var firebaseConfig = {
  apiKey: "AIzaSyC9Yi1V0j-rqotuPAjL4hHGKojQnPpnq7E",
  authDomain: "distribution-site-1d432.firebaseapp.com",
  projectId: "distribution-site-1d432",
  storageBucket: "distribution-site-1d432.appspot.com",
  messagingSenderId: "808474626274",
  appId: "1:808474626274:web:748eee7565f22e0328f6bb",
  measurementId: "G-QNKP25TL1S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
