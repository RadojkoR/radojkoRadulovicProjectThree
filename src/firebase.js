// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdtE71565lt8dHP0lfY1yuprm3VK3l0fM",
  authDomain: "priority-list-f7319.firebaseapp.com",
  databaseURL: "https://priority-list-f7319-default-rtdb.firebaseio.com",
  projectId: "priority-list-f7319",
  storageBucket: "priority-list-f7319.appspot.com",
  messagingSenderId: "1097658329478",
  appId: "1:1097658329478:web:3ffb010aaa8289e5126407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;