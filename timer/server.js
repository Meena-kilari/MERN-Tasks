const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Employee = require('./model/employee');
const app = express();

mongoose.connect('mongodb://localhost:27017/your-database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Support JSON-encoded bodies
app.set('view engine', 'ejs');

// Route to render the login (employee listing) page
app.get('/login', async (req, res) => {
    const employees = await Employee.find();
    res.render('login', { login: employees });
});

// Route to add a new employee
app.post('/addEmployee', async (req, res) => {
    const { eid, ename, eage, eaddress, email } = req.body;
    try {
        const newEmployee = new Employee({ eid, ename, eage, eaddress, email });
        await newEmployee.save();
        res.redirect('/login');
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to handle deleting an employee by Employee ID
app.post('/deleteEmployee', async (req, res) => {
    const { eid } = req.body;
    try {
        await Employee.findOneAndDelete({ eid: eid });
        res.status(200).send('Employee deleted');
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/editEmployee', async (req, res) => {
    const { eid, ename, eage, eaddress, email } = req.body;
    try {
        await Employee.findOneAndUpdate({ eid }, { ename, eage, eaddress, email });
        res.status(200).send('Employee updated successfully');
    } catch (error) {
        console.error('Error editing employee:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
