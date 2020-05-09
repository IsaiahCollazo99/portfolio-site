const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const creds = require("./config");

const port = process.env.PORT;

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transport = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

app.post("/api/send", (req, res) => {
    const { name, email, message } = req.body;
    let content = `name: ${name} \n email: ${email} \n message: ${message} `;
    
    let mail = {
        from: name,
        to: 'isaiahramoncollazo@gmail.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
      }

    transporter.sendMail(mail, (err, data) => {
    if (err) {
        res.json({
        status: 'fail'
      })
    } else {
        res.json({
       status: 'success'
        })

        transporter.sendMail({
            from: "isaiahramoncollazo@gmail.com",
            to: email,
            subject: "Submission was successful",
            text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
          }, (error, info) => {
            if(error) {
              console.log(error);
            } else{
              console.log('Message sent: ' + info.response);
            }
          });
    }
  })
})

app.get("/", (req, res) => {
  res.json("Hello Worlds");
})

app.listen(port, () => {
    console.log(`Server Is Running On Port:${port}`);
});