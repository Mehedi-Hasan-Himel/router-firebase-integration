import {useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const auth  = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();


const UseFirebase = () => {
  const [user, setUser] = useState({});
  const signInWithGoogle = () => {
     signInWithPopup(auth, GoogleProvider)
        .then(result => {
           const user = result.user
           setUser(user)
           console.log(user);
     })
  };
  return {
    user,
    signInWithGoogle,
  };
};

export default UseFirebase;
