require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_CONNECTION_STRING;
const cors = require('cors');

mongoose.connect(mongoUrl);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use(cors());

const routes = require('./routes/routes');

app.use('/api/videos', routes);

module.exports = app;