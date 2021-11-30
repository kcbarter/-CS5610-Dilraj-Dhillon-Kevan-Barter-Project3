const express = require('express');
// const pokemon = require('./routes/pokemon.js');
const job = require('./route/job.js')
const cors = require('cors')
const mongoose = require('mongoose');



//Setup MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/pokemon_app', { useNewUrlParser: true })
mongoose.connect('mongodb://127.0.0.1:27017/job_app', { useNewUrlParser: true })

const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api/pokemon', pokemon);
app.use('/api/job', job);

app.listen(8000, function () {
    console.log('Starting server');
});
