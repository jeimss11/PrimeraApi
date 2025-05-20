const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute= require('./routes/post');
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://jeimss11:<ismI3fcLkSe5VnZ3>@senaclouster.yze2nef.mongodb.net/?retryWrites=true&w=majority&appName=SenaClouster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(10000);