import React, { useState } from "react";
import "./Login.css";
import Logo from "./img/Page/instaFood.svg";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //Firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

 const register = (e) => {
   e.preventDefault();
   //Firebase register
    
   auth
     .createUserWithEmailAndPassword(email, password)
     .then((auth) => {
       //User created
       // console.log(auth);
       if (auth) {
         history.push("/signup");
       }
     })
     .catch((error) => alert(error.message));
 };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={Logo} alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign-In
          </button>
        </form>

        <p>
          By signing-in you agree to our terms & conditions
        </p>

        <button onClick={register} className='login_registerButton'>Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
