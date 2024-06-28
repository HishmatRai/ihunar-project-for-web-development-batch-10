import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import firebase from "../config/firebase";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const signUpHandler = () => {
    setMessageType("error");
    if (email === "") {
      setMessage("Email Required!");
    } else if (!email.match(emailFormat)) {
      setMessage("Enter valid email address");
    } else if (password === "") {
      setMessage("Password Required!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          //   navigate("/");
          setMessage("Success");
          setMessageType("success");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  // google login
  const loginWithGoogleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // facebook
  const facebookLoginHandler = () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
      />
      <p style={{ color: messageType === "error" ? "red" : "green" }}>
        {message}
      </p>
      <button onClick={signUpHandler}>Sign Up</button>
      <button onClick={loginWithGoogleHandler}> Login with Google</button>
      <button onClick={facebookLoginHandler}> Login with Facebook</button>
    </div>
  );
};
export default SignUp;
