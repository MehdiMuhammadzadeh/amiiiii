// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAslVfSvxd8AtSJ4AIPSwD8NHri_cOB2ek",
  authDomain: "ami-dashboard-2a535.firebaseapp.com",
  projectId: "ami-dashboard-2a535",
  storageBucket: "ami-dashboard-2a535.appspot.com",
  messagingSenderId: "942049094753",
  appId: "1:942049094753:web:d92bd92cdca2761b3e0e20",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();






export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profileAvatar = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profileAvatar", profileAvatar);
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.log(error);
    });
};
