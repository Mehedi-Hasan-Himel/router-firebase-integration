import React from "react";
import UseFirebase from "../../hooks/UseFirebase";

const login = () => {
  const { signInWithGoogle } = UseFirebase();
  return (
    <div>
      <h2>Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Type Your Email Address: " />
        <br />
        <input type="password" placeholder="Type Your Password: " />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default login;
