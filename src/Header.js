import logo from "./img/Page/instaFood.svg";
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import { Button } from "@material-ui/core";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  var getOptions = {};

  var FirstName = "Guest";

  async function request() {
    let fname_Promise = new Promise(function (myResolve, myReject) {
      db.collection("users")
        .doc(user?.uid)
        .get(getOptions)
        .then((doc) => {
          FirstName = doc.data().fname;
          myResolve(FirstName);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    });
    document.getElementById("fusername").innerHTML = await fname_Promise;
  }

  request();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>

      <div className="header_search">
        <TextField
          className="header_searchBar"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          fullWidth="true"
          // inputProps={inputProps}
        />
        {/* <input className="header_searchInput" type="text" /> */}
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello <span id="fusername">{FirstName}</span>
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/signup">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Account</span>
          </div>
        </Link>

        <Link to="/signup">
          <div className="header_optionBasket">
            <ShoppingBasketOutlined />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
