const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const logger = require('morgan');


app.use(bodyParser.json())
app.use(logger('dev'));

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req,res) => {
    res.send('We are on home');
});

//How do we start listening to the server
app.listen(3000);

//connect do DB
mongoose.connect('mongodb://localhost:27017/test', () => console.log('connected to DB!'));