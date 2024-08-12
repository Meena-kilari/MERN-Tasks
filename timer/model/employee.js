// models/employee.js
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    eid: { type: String, required: true },
    ename: { type: String, required: true },
    eage: { type: Number, required: true },
    eaddress: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
