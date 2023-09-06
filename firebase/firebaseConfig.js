import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log('hosse???')
const firebaseConfig = {
  apiKey: "AIzaSyCrSTYLy8G16W60YTamsv72MlwE5k1jBUI",
  authDomain: "ai-work-squad-3f2f5.firebaseapp.com",
  projectId: "ai-work-squad-3f2f5",
  storageBucket: "ai-work-squad-3f2f5.appspot.com",
  messagingSenderId: "325374170387",
  appId: "1:325374170387:web:16d5ad46940af76be236e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;