const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const admissionAdminSchema = new Schema(
  {
    Username: String,
    Password: String
  },
  { timestamps: true }
);

const AdmissionAdmin = mongoose.model("AdmissionAdmin", admissionAdminSchema);
module.exports = AdmissionAdmin;
