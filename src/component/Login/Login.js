import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig);
const LogIn = () => {
const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    photo: ''
})


const [logInUser, setLogInUser] = useContext(UserContext);
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };

const provider = new firebase.auth.GoogleAuthProvider();
const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res => {
        console.log(res.user)

    const {displayName, photoUrl, email} = res.user;
    const signInUSer ={
        isSignIn: true,
    name: displayName,
    email:email,
    photo: photoUrl,
    }
    setUser(signInUSer);

    setLogInUser(signInUSer);
    storeAuthToken();
    console.log(displayName, photoUrl, email)
    })
    .catch(err => {
        console.log(err);
        console.log(err.message);
    })
}
const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken( true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

require('dotenv').config()


    return (
        <div style={{backgroundColor: 'red', height: '700px'}}>
            <button className="btn btn-primary"style={{marginLeft: '600px', marginTop: '300px'}} onClick={handleSignIn}>Click To Google Login</button>
        </div>
    );
};

export default LogIn;
