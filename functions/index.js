const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IpdVdSB7ysodw7fJPQ6o9P6AJwDtAqpjOlUhNYjFViajz6eI0U7Pr2Pr212zMWkkL2wGZVV66bNtOoro1haEo8t00CMfPldok')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api

//firebase emulators:start   


// Payment succeeds          : 4242 4242 4242 4242
// Authentication required   : 4000 0025 0000 3155
// Payment is declined       : 4000 0000 0000 9995