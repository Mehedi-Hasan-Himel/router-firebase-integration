import {useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


const GoogleProvider = new GoogleAuthProvider();


const UseFirebase = () => {
  const [user, setUser] = useState({});
  const signInWithGoogle = () => {
    console.log(`Signing in soon`);
  };
  return {
    user,
    signInWithGoogle,
  };
};

export default UseFirebase;
