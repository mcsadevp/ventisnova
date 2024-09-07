import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCooJDx0q9anFifs6k57KRPnEapqYva3xY",
    authDomain: "ventisnova-49c34.firebaseapp.com",
    projectId: "ventisnova-49c34",
    storageBucket: "ventisnova-49c34.appspot.com",
    messagingSenderId: "22667905712",
    appId: "1:22667905712:web:bf3ba3403631ede6258975",
    measurementId: "G-79V3V17J0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)