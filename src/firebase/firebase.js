import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBivBwOk7Uck4IrRjuVwKqXP3E_IrjH1g4",
  authDomain: "tools-6e0f9.firebaseapp.com",
  projectId: "tools-6e0f9",
  storageBucket: "tools-6e0f9.appspot.com",
  messagingSenderId: "436294306667",
  appId: "1:436294306667:web:2a817e9eb66008af4d9a2e",
  measurementId: "G-QW6VYGP7X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app
