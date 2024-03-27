//Importing
const mongoose = require('mongoose');

//Patients Schema
const patientSchema = new mongoose.Schema({
    
  phone: {
      type: Number,
      maxlength:10,
      required: true,
      unique:true,
  },
  name: {
      type: String,
      required:true,
  },
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Doctor'
  }
}, {
    timestamps: true
  });

//Exporting Patients Schema
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;