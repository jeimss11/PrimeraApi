const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const postRoute= require('./routes/post');
app.use('/servicios', postRoute);

mongoose.connect('mongodb+srv://jeimss11:LFaSbBSdAKqDSTQO@clustermodulo6.zr3zyqc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterModulo6', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('coneccion base de datos exitosa');
});

app.listen(10000);