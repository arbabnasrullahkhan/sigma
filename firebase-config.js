/* ==========================================================================
   SIGMA PREMIUM PLATFORM - FIREBASE CONFIGURATION & SECURITY
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

// Initialize Firebase with Strict Session Isolation
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
    // STRICT SESSION ISOLATION: Prevents cross-tab overwrites.
    // Admin in Tab A and User in Tab B will remain completely independent.
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        console.log("✅ SIGMA Auth: Session Persistence Enforced.");
      })
      .catch((error) => {
        console.error("❌ Auth Persistence Error:", error);
      });

    console.log("✅ SIGMA Firebase Initialized Successfully!");
  }
} else {
  console.error("❌ Firebase SDK not found. Make sure scripts are loaded.");
}
