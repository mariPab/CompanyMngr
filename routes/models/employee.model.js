const mongoose = require('mongoose');
// const Department = require('./department.model');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: {type: String, required: true},
    department: {type: String, required: true, ref: 'Department'}
  },
  { versionKey: false }
);

module.exports = mongoose.model('Employee', employeeSchema);