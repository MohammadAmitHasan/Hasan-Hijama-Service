// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyXfdU8VJeUt6006x3-YqHRWkzGvg77rs",
    authDomain: "hasan-hijama-services.firebaseapp.com",
    projectId: "hasan-hijama-services",
    storageBucket: "hasan-hijama-services.appspot.com",
    messagingSenderId: "589463759246",
    appId: "1:589463759246:web:5a927095faaf5ee1485cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;