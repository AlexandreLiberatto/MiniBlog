import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCib-9aVImxrGYZa4UuB2wl1O6tkhcbJPA",
  authDomain: "miniblog-9a336.firebaseapp.com",
  projectId: "miniblog-9a336",
  storageBucket: "miniblog-9a336.appspot.com",
  messagingSenderId: "473324609475",
  appId: "1:473324609475:web:dd46d3d93a22a2f381a776",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
