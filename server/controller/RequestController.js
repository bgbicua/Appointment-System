let Request = require("../model/Request");
let App = require("../model/Appointment");
const nodemailer = require("nodemailer");

async function smtp(to, sub, mes, files) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "eccjournal560@gmail.com", // generated ethereal user
      pass: "thesis123" // generated ethereal password
    }
  });

  var optionsWithAttachment = {
    from: '"ECC Registrar👻" <eccjournal560@gmail.com>', // sender address
    to: to, // list of receivers
    subject: sub, // Subject line
    text: mes, // plain text body
    html: `<h1>${mes}</h1>`, // html body
    attachments: files
  };

  var option = {
    from: '"ECC Registrar👻" <eccjournal560@gmail.com>', // sender address
    to: to, // list of receivers
    subject: sub, // Subject line
    text: mes, // plain text body
    html: `<h1>${mes}</h1>` // html body
  };
  let info;
  // send mail with defined transport object
  if (files) {
    info = await transporter.sendMail(optionsWithAttachment);
  } else {
    info = await transporter.sendMail(option);
  }

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

exports.insertRequest = (req, res) => {
  const {
    Email,
    Appointment,
    Type,
    Purpose,
    Admin,
    Course,
    Year,
    StudentID,
    Age,
    Name
  } = req.body;
  App.findById(Appointment.app._id)
    .then((app) => {
      var objIndex = app.Time.findIndex((obj) => obj.Time == Appointment.time);
      app.Time[objIndex].Request = req.body;
      app.save();

      var newRequest = new Request({
        Appointment: Appointment,
        Office: Admin,
        Name: Name,
        Age: Age,
        StudentID: StudentID,
        Year: Year,
        Course: Course,
        Purpose: Purpose,
        Email: Email
      });
      newRequest.save().then((request) => {
        res.json("Submitted Successfully.");
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getStudentRequest = (req, res) => {
  Request.find({ Office: "Registrar" })
    .then((request) => {
      res.json(request);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getAdminssiontRequest = (req, res) => {
  Request.find({ Office: "Admission" })
    .then((request) => {
      res.json(request);
    })
    .catch((err) => {
      res.json(err);
    });
};
