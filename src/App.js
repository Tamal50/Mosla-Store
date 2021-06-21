import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home'
import Admin from './component/Admin/Admin';
import Addproduct from './component/Admin/Layout/Sidebar/Addproduct'
import Productlist from './component/Admin/Layout/Sidebar/Productlist'
import Oderpage from './component/Oderpage/Oderpage'
import Login from './component/Login/Login'
import firebase from "firebase/app";
import { createContext, useEffect, useState } from 'react';
import userObject from './utils/userObject';
import PrivateRoute from './component/Login/PrivateRoute'
import OderDetails from './component/OderDetails/OderDetails'
import Loginbypass from './component/Login/Loginbypass';
export const UserContext = createContext(null)

function App() {

  const [logInUser,setLogInUser] = useState({});

  const generateToken = () => {
    const User = firebase.auth().currentUser
    console.log(User.email)
    User.getIdToken(false).then(token => {
        sessionStorage.setItem("token", token);
        localStorage.setItem("token", token);
    })
}

const handleAfterSignInOutResponse = async (user) => {
  if (user) {
      // IF Found User Data means Authenticated 
      console.log(user.displayName)
      setLogInUser(userObject(user));
      generateToken()
  } else {
      // User is signed out
      setLogInUser({});
  }
}

useEffect(() => {
// onAuthStateChanged will executed in login and logout
const unsubscribe = firebase.auth().onAuthStateChanged (handleAfterSignInOutResponse);
// unsubscribe when unmounting the component
return unsubscribe;
// eslint-disable-next-line
}, []);


  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
           <h2>email: {logInUser?.email}</h2>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Loginbypass exact path="/login">
          <Login></Login>
        </Loginbypass>
        <PrivateRoute exact path="/admin">
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute  exact path="/admin/ProductList">
        <Productlist></Productlist>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/AddProduct">
        <Addproduct></Addproduct>
        </PrivateRoute>
        <PrivateRoute exact path="/oder/:_id">
          <Oderpage></Oderpage>
        </PrivateRoute>
        <PrivateRoute exact path="/oderdetails">
          <OderDetails></OderDetails>
        </PrivateRoute>
        
      </Switch>
    </Router>
    </UserContext.Provider> 
  );
}

export default App;
