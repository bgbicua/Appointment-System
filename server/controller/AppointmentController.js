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

exports.getAppointment = (req, res) => {
  Appointment.find()
    .then((appointment) => {
      res.json(appointment);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getAppointmentCount = (req, res) => {
  Appointment.count().then((count) => {
    res.json(count);
  });
};

exports.getAppointmentToday = (req, res) => {
  res.json(new Date());
};
