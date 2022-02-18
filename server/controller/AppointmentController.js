let Appointment = require("../model/Appointment");

exports.insertAppointment = (req, res) => {
  var newApp = new Appointment(req.body);
  newApp
    .save()
    .then((data) => {
      res.json("Success");
    })
    .catch((err) => {
      res.json(err);
    });
};
