const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    Student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    Appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    Office: String,
    Request: []
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
