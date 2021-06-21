import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const Loginbypass = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default Loginbypass;
