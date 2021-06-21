import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [logInUser, setLogInUser] = useContext(UserContext);

  const handleLogOut = () => {
    firebase.auth().signOut();
    sessionStorage.removeItem("token");
  };

  let button;
  if (logInUser.name) {
    button = (
        <a onClick={handleLogOut} class="nav-item nav-link active mr-5" href="/">
          LogOut
        </a>     
    );
  } else {
    button = (
        <a class="nav-item nav-link active mr-5" href="/login">
          Login
        </a>
    );
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <Link to="/"><a class="nav-item nav-link active" > Home</a></Link>
          <Link to="/admin"> <a class="nav-item nav-link active"> Admin</a></Link>
          <Link to="/oderdetails"> <a class="nav-item nav-link active">Your Orders</a></Link>
          {button}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
