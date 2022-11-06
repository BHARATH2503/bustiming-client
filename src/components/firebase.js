import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBzWcQkvzQRPdFtkVz25hsjQi0AVjg_kXk",
  authDomain: "authentication-74d81.firebaseapp.com",
  projectId: "authentication-74d81",
  storageBucket: "authentication-74d81.appspot.com",
  messagingSenderId: "19252432087",
  appId: "1:19252432087:web:3a03cc6433101cbc753492",
  measurementId: "G-H5KKPN8Y9L"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;