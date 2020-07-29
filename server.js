const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'your mongo cluster uri here';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('db connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, console.log(`listening on port ${PORT}`))