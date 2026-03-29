const firebaseConfig = {
  apiKey: "AIzaSyAQyHufyjSkclDtZqJCnovPox5VHY6i1RA",
  authDomain: "mcq-app-a6f39.firebaseapp.com",
  projectId: "mcq-app-a6f39",
  storageBucket: "mcq-app-a6f39.firebasestorage.app",
  messagingSenderId: "576429265830",
  appId: "1:576429265830:web:955439d98634f3eb603567"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore database
const db = firebase.firestore();
