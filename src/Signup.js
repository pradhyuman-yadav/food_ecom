import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { auth, db } from "./firebase";
import Logo from "./img/Page/instaFood.svg";
import { useStateValue } from "./StateProvider";
import "./Signup.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Arun Poltry Farm
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

///////////////////////////////////////
////////////////////////////////////////

export default function SignUp() {
  const classes = useStyles();

  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const register = (e) => {
    e.preventDefault();
    //Firebase register

    // auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         //User created
    //         // console.log(auth);
    //         if(auth) {
    //             history.push('/')
    //         }
    //     })
    //     .catch(error => alert (error.message))

    db.collection("users").doc(user?.uid).set({
      fname: fname,
      lname: lname,
      address: address,
    });

    history.push("/");
  };

  ///////////////////////////////////////
  var getOptions = {};

  var FirstName = "Test";
  var LastName = "Test";
  var Address = "Test";

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

    let lname_Promise = new Promise(function (myResolve, myReject) {
      db.collection("users")
        .doc(user?.uid)
        .get(getOptions)
        .then((doc) => {
          LastName = doc.data().lname;
          myResolve(LastName);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    });

    let address_Promise = new Promise(function (myResolve, myReject) {
      db.collection("users")
        .doc(user?.uid)
        .get(getOptions)
        .then((doc) => {
          Address = doc.data().address;
          myResolve(Address);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    });

    document.getElementById("uaddress").innerHTML = await address_Promise;
    document.getElementById("fname").innerHTML = await fname_Promise;
    document.getElementById("lname").innerHTML = await lname_Promise;
  }

  request();

  ////////////////////////////////////////

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link href="/">
          <img className="login_logo" src={Logo} alt="" />
        </Link>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Account Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                type="text"
                id="address"
                autoComplete="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            onClick={register}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Login with different Account
              </Link>
            </Grid>
          </Grid>
        </form>
        <h1 className="signup_userData" >User Recorded Data</h1>
        <div className="signup_userData">
          <Grid container spacing={9}>
            <Grid id="fname" item xs={12} sm={6}>
              No User Data
            </Grid>
            <Grid id="lname" item xs={12} sm={6}>
              No User Data
            </Grid>
            <Grid id="uaddress" item xs={12} sm={6}>
              No User Data
            </Grid>
          </Grid>
        </div>
      </div>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
