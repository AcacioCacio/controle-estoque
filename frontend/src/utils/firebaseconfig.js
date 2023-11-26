import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0zOXW8_-IvYW72z7Hu_Wa8tJFZkjDws",
  authDomain: "controle-estoque-7aa7a.firebaseapp.com",
  databaseURL: "https://controle-estoque-7aa7a-default-rtdb.firebaseio.com/",
  projectId: "controle-estoque-7aa7a",
  storageBucket: "controle-estoque-7aa7a.appspot.com",
  messagingSenderId: "521520041517",
  appId: "1:521520041517:web:3c923f185fdbb9dd42f2a4",
  measurementId: "G-7K82WR3P5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;