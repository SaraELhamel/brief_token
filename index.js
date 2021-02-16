var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');
const jwt = require('jsonwebtoken');


app.use(bodyParser.json());
const userRoute = require('./routes/user');
app.use('/user', userRoute);

const bookRoute = require('./routes/book');
app.use('/book', bookRoute);


app.get('/', (req,res)=> {
    res.send('Bonjour je suis un Youcodeur');
});

mongoose.connect(
    process.env.DB_CONNECTION,
console.log('connected')
);

app.listen(3000);



