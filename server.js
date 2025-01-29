// load .env data into this file
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;
const app = express();
const cors = require("cors");

app.set('view engine', 'ejs');

app.use(morgan('dev'));

//this is to make it possible to run API requests using ajax. when a remote app does an Ajax request, the data sent back is not blocked by the cors protocol
app.use(cors());

//this is to handel data from HTML forms
app.use(express.urlencoded({ extended: true }));

//this is to handel data in json formats when sending an receiving API requests
app.use(express.json());

app.use(express.static('public'));

//the home route displays a message on the browser when viewing the url http://localhost:8000/
//the file that contains the HTML info is located in views/index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

//Below is a route that displays info from the database
//Rout url: http://localhost:8000/debug
const debug = require('./routes/debug');
app.use('/debug', debug);

app.listen(PORT, () => {
  console.log(`ExpressJs Template Server listening on port ${PORT}`);
});

