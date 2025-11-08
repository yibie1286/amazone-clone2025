const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// ✅ Initialize Express app
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Success!" });
});

app.post("/payment/create", async (req, res) => {
  const total = Number(req.query.total);

  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // already in cents from frontend
        currency: "usd",
      });

      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Stripe error:", error);
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(403).json({
      message: "Total must be greater than 0",
    });
  }
});


// ✅ Export API endpoint
exports.api = onRequest(app);
