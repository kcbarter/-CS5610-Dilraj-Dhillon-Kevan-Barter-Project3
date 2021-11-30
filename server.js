const express = require('express');
const job = require('./routes/job.js')
const user = require('./routes/user.js')
const cors = require('cors')
const mongoose = require('mongoose');



//Setup MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/job_app', { useNewUrlParser: true })

const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/job', job);
app.use('/api/user', user);

app.listen(8000, function () {
    console.log('Starting server');
});
