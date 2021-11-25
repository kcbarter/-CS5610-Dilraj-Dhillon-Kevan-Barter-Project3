const express = require('express');
const pokemon = require('./routes/pokemon.js');
const cors = require('cors')
const mongoose = require('mongoose');



//Setup MongoDB Connection
mongoose.connect('mongodb://127.0.0.1/pokemon_app', { useNewUrlParser: true })

const mongoDB = mongoose.connection;

mongoDB.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// saq`z1  `
app.use('/api/pokemon', pokemon);
// Note that it is common practice got backend APIs in Node to start with the api prefix
// to distinguish them from frontend routes 

app.get('/', (req, res) => {
    res.send('NOT BANANA!');
});

app.listen(8000, function () {
    console.log('Starting server');
});
