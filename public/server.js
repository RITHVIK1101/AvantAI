// Import necessary modules
const express = require("express");
const webpush = require("web-push");
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));



const app = express();
app.use(express.json());

const vapidKeys = {
  publicKey: "BEiYooBF-CPzmXvp4aGFGJmh7-5ulwxjek5so5ZmB3_XPbkVYXyz5hbMBB71XVUaFvPcR9vE7wSvkM7aXjwBjPg", // Replace with your VAPID public key
  privateKey: "GaZib7OtsdEIFw_fC_hPBNPJSq8tuMj77PpjhFnmGj4", // Replace with your VAPID private key
};

webpush.setVapidDetails(
  "mailto:your-email@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let subscriptions = []; // Store subscriptions here for testing

// Endpoint to handle subscription from client
app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({});
});

// Endpoint to send push notification
app.post("/send-notification", (req, res) => {
  const payload = JSON.stringify({
    title: "Hi there",
    body: "Welcome to Gridly!",
  });

  subscriptions.forEach((subscription) => {
    webpush.sendNotification(subscription, payload).catch(console.error);
  });

  res.status(200).json({ message: "Notification sent" });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
