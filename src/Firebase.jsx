import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC2-Q3AMp5ZMYl14qv75Ni0KG2yAlA41A",
  authDomain: "sasha-project-9c5f8.firebaseapp.com",
  projectId: "sasha-project-9c5f8",
  storageBucket: "sasha-project-9c5f8.appspot.com",
  messagingSenderId: "666470673851",
  appId: "1:666470673851:web:a5cc95778427c31f1ce89e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore();