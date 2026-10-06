/* ==========================================================================
   SIGMA PREMIUM PLATFORM - FIREBASE CONFIGURATION & INITIALIZATION
   ========================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyCTRe2w4juZ55DrayIw61qKz_UYlZfw1H8",
  authDomain: "week-team.firebaseapp.com",
  projectId: "week-team",
  storageBucket: "week-team.firebasestorage.app",
  messagingSenderId: "480334485782",
  appId: "1:480334485782:web:c0c886ed710567b9e6d837",
  measurementId: "G-REGQKRZHX7"
};

// Initialize Firebase securely (Preventing duplicate initialization errors)
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ SIGMA Firebase Initialized Successfully!");
    
    // Set Persistence to LOCAL (Session survives tab close)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .catch((error) => console.error("Firebase Persistence Error:", error));
  }
} else {
  console.error("❌ Firebase SDK not found. Make sure scripts are loaded in your HTML.");
}
