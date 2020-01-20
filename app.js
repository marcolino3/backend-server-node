// Requieres
var express = require('express');
var mongoose = require('mongoose');


// Intialization
var app = express();

// Connection to DB
mongoose.connect('mongodb://127.0.0.1:27017/hospitalDB', {useNewUrlParser: true});

// Check connection to DB
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('We are connected!');
});


// Routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'Anfrage funktioniert!!',

    });
});


// Listen
app.listen(3000, () => {
    console.log('Express server running on port 3000: \x1b[32m%s\x1b[0m', 'online');
});











