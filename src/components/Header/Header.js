import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../hooks/UseFirebase";
import "./Header.css";

const Header = () => {
  const { user, HandleSignOut } = UseFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={HandleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
