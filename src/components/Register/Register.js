import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register Now</h3>
      <form>
        <input type="text" placeholder="Type Your Name: " />
        <br />
        <input type="email" placeholder="Type Your Email Address: " />
        <br />
        <input type="password" placeholder="Type Your Password: " />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
