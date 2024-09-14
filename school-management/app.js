const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

// Database Connection

module.exports = app;
