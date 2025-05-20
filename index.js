const express = require('express');
const { startSession } = require('mongoose');
const app = express();

const 
app.get('/', (req, res) => {
    res.send('servidor funcionando');
});

app.listen(10000);