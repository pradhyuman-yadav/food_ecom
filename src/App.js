// import logo from './logo.svg';
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import SignUp from "./Signup";

const promise = loadStripe(
  "pk_test_51IpdVdSB7ysodw7fTfTnPRRhB4EpLsFO33QCt6MNNRYgwIDJB3J1cObKG34DQSY48pumQEJhSf1dR7qn5gHVCgVX00a4jgJtGh"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // effect
    auth.onAuthStateChanged((authUser) => {
      console.log("User = = = ", authUser);

      if (authUser) {
        //User present
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User Not present
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          {/* <Route
            exact
            path="/signup"
            render={() => (!user ? <Redirect to="/login" /> : <SignUp />)}
          /> */}

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <h1>This is payments page</h1> */}
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
