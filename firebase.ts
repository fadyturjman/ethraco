
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8FBZytG2vATXKlWvuVTY9qK8RBQ_1Vw8",
  authDomain: "ethraaco-8d34d.firebaseapp.com",
  projectId: "ethraaco-8d34d",
  storageBucket: "ethraaco-8d34d.firebasestorage.app",
  messagingSenderId: "734166100228",
  appId: "1:734166100228:web:69317159a2a95039fdc851",
  measurementId: "G-B4RT8CYSXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
