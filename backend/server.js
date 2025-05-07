const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");
const dotenv = require("dotenv");
const path = require("path"); // testing image add

const multer = require("multer"); // testing image add

dotenv.config();

const app = express();
const upload = multer({ dest: path.join(__dirname, "uploads") }); // testing image add
//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Route

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

// app.post("/api/sendemail", async (req, res) => { //original line
app.post("/api/sendemail", upload.array("images", 3), async (req, res) => {
  // testing image add
  const eventDate = req.body.eventDate;
  const pickupDate = req.body.pickupDate;
  const servings = req.body.servings;
  const fullName = req.body.fullName;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const pickupTime = req.body.selectedTime;
  const imageFiles = req.files; // testing image add
  try {
    const send_to = process.env.EMAIL_USER;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = ` ${email}`;
    let subject;
    let message;

    if (req.body.page) {
      subject = `SUHWEETS ORDER: Pickup Date: ${pickupDate}, Pickup Time: ${pickupTime}`;
      if (req.body.page === "signature") {
        const cakeOrder = req.body.cakeDetails.map((item) => {
          return `
            <h2>Cake ${item.index + 1}</h2>
            <h3> Cake Flavor: ${item.flavor}<h3>
        <h3> Cake Size: ${item.size}<h3>
        <h3> Cake Inscription: ${item.inscription}</h3>`;
        });

        message = `
        <h1> 
          Pickup Date: ${pickupDate}
          <br>
          Pickup Time: ${pickupTime}
        <h1>
        <hr>
        ${cakeOrder}
        <hr>
  
        <h3> Full Name: ${fullName}<h3>
        <h3> Email: ${email} </h3>
        <h3> Phone Number: ${phoneNumber} </h3> 
      `;
      } else if (req.body.page === "cupcake") {
        const cakeOrder = req.body.cupcakeDetails.map((item) => {
          return `
            <h2>Cupcake ${item.index + 1}</h2>
            <h3> Cupcake Flavor: ${item.flavor}<h3>
        <h3> Quantity: ${item.quantity}<h3>`;
        });

        message = `
        <h1> 
          Pickup Date: ${pickupDate}
          <br>
          Pickup Time: ${pickupTime}
        <h1>
        <hr>
        ${cakeOrder}
        <hr>
  
        <h3> Full Name: ${fullName}<h3>
        <h3> Email: ${email} </h3>
        <h3> Phone Number: ${phoneNumber} </h3> 
      `;
      }
    } else {
      subject = `SUHWEETS INQUIRY: From: ${fullName}, Event Date: ${eventDate}, Serving: ${servings} People`;

      message = `
      <h1> 
        Event Date: ${eventDate}
        <br>
        Servings Needed: ${servings}
      <h1>
      <hr>
      <h3> Full Name: ${fullName}<h3>
      <h3> Email: ${email} </h3>
      <h3> Phone Number: ${phoneNumber} </h3> 
    `;
    }

    await sendEmail(subject, message, send_to, sent_from, reply_to, imageFiles);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
