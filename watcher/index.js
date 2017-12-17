require('dotenv').config();
const express = require('express');
const watch = require('./watcher');

const app = express();

app.listen((err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    watch();
});
